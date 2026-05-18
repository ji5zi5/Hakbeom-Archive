const COMMON_ROUTE = { id: 'common', name: '공통 루트', max: 0 };

function toList(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function configuredTargets(routeConfig = {}) {
  const targets = Array.isArray(routeConfig.affectionTargets) ? routeConfig.affectionTargets : [];
  if (targets.length > 0) return targets;
  const target = typeof routeConfig.affectionTarget === 'string'
    ? { id: routeConfig.affectionTarget, name: routeConfig.affectionTarget, max: 10 }
    : routeConfig.affectionTarget;
  return target?.id ? [target] : [];
}

function routePriority(routeConfig = {}) {
  const configured = toList(routeConfig.routePriority);
  if (configured.length > 0) return configured;
  return configuredTargets(routeConfig).map((target) => target.id);
}

function flagSet(gameState = {}) {
  return new Set(toList(gameState.flags));
}

function routeSeedFlags(routeConfig = {}, routeId) {
  const configured = routeConfig.routeSeedFlags?.[routeId];
  if (configured) return toList(configured);
  return [`${routeId}_route_seed`, `${routeId}_route`];
}

function routeLockFlags(routeConfig = {}, routeId) {
  const configured = routeConfig.routeLockFlags?.[routeId];
  if (configured) return toList(configured);
  return [`route_lock_${routeId}`];
}

function latestExplicitLockChoice(gameState = {}, routeConfig = {}) {
  const flags = toList(gameState.flags);
  const targets = configuredTargets(routeConfig);
  const lockToRoute = new Map();
  for (const target of targets) {
    for (const flag of routeLockFlags(routeConfig, target.id)) lockToRoute.set(flag, target.id);
  }

  for (let index = flags.length - 1; index >= 0; index -= 1) {
    const routeId = lockToRoute.get(flags[index]);
    if (routeId) return routeId;
  }

  return '';
}

function routeFlagCount(routeId, flags, routeConfig = {}) {
  const seedCount = routeSeedFlags(routeConfig, routeId).filter((flag) => flags.has(flag)).length;
  const lockCount = routeLockFlags(routeConfig, routeId).filter((flag) => flags.has(flag)).length;
  const prefixCount = [...flags].filter((flag) => flag.startsWith(`${routeId}_`)).length;
  return seedCount + lockCount + prefixCount;
}

function priorityIndex(routeId, routeConfig = {}) {
  const priority = routePriority(routeConfig);
  const index = priority.indexOf(routeId);
  return index >= 0 ? index : priority.length + 1;
}

function routeCandidate(target, gameState = {}, routeConfig = {}) {
  const flags = flagSet(gameState);
  const affection = Number(gameState.affection?.[target.id] || 0);
  const seedFlags = routeSeedFlags(routeConfig, target.id);
  const hasSeed = seedFlags.some((flag) => flags.has(flag));
  const flagCount = routeFlagCount(target.id, flags, routeConfig);

  return {
    ...target,
    affection,
    flagCount,
    hasSeed,
    priority: priorityIndex(target.id, routeConfig)
  };
}

function compareCandidates(left, right) {
  if (!right) return -1;
  if (left.affection !== right.affection) return right.affection - left.affection;
  if (left.flagCount !== right.flagCount) return right.flagCount - left.flagCount;
  return left.priority - right.priority;
}

export function resolveDominantRoute(gameState = {}, routeConfig = {}) {
  const candidates = configuredTargets(routeConfig)
    .map((target) => routeCandidate(target, gameState, routeConfig))
    .filter((candidate) => candidate.affection > 0 || candidate.flagCount > 0)
    .sort(compareCandidates);

  return candidates[0] || configuredTargets(routeConfig)[0] || COMMON_ROUTE;
}

export function resolveRouteLock(gameState = {}, routeConfig = {}, options = {}) {
  const threshold = Number.isFinite(options.threshold)
    ? Number(options.threshold)
    : Number(routeConfig.routeLockThreshold ?? 6);
  const explicitRouteId = latestExplicitLockChoice(gameState, routeConfig);
  const candidates = configuredTargets(routeConfig)
    .map((target) => routeCandidate(target, gameState, routeConfig))
    .filter((candidate) => candidate.affection >= threshold && candidate.hasSeed);

  if (explicitRouteId) {
    const explicitCandidate = candidates.find((candidate) => candidate.id === explicitRouteId);
    if (explicitCandidate) return { ...explicitCandidate, reason: 'explicit-lock' };
  }

  const [winner] = candidates.sort(compareCandidates);
  if (winner) return { ...winner, reason: 'threshold' };

  return { ...COMMON_ROUTE, reason: 'fallback' };
}
