import { applyRouteRewards, createInitialGameState } from '../utils/vnState.js';
import { resolveRouteLock } from '../utils/routeResolution.js';
import { applyDirectorItem, createDirectorState } from './directorEngine.js';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getItemChoices(item) {
  if (!item) return [];
  if (item.type === 'mapChoice') return item.choices || [];
  return item.type === 'phone' ? (item.replies || []) : (item.choices || []);
}

export function resolveSkipTargetIndex({ scenario, index, item, episodeInfo, gameState, settings }) {
  const skipToId = item?.skipToId || episodeInfo.skipToId;
  const idTarget = skipToId ? scenario.findIndex((line) => line.id === skipToId) : -1;
  const markerTarget = scenario.findIndex((line, lineIndex) => lineIndex > index && line.skipTarget === true);
  const targetIndex = idTarget >= 0 ? idTarget : markerTarget >= 0 ? markerTarget : scenario.length - 1;

  if (settings.skipReadOnly) {
    const readLines = new Set(gameState.readLines || []);
    const unreadIndex = scenario.findIndex((line, lineIndex) => (
      lineIndex > index && lineIndex <= targetIndex && line.id && !readLines.has(line.id)
    ));
    if (unreadIndex >= 0) {
      return { targetIndex: unreadIndex, unread: true };
    }
  }

  return { targetIndex, unread: false };
}

export function resolveEndingRoute(gameState, endingRules = []) {
  const flags = new Set(gameState.flags || []);
  const affection = gameState.affection || {};
  const fallback = endingRules.find((rule) => rule.default) || endingRules[endingRules.length - 1] || null;

  return endingRules.find((rule) => {
    if (rule.default) return false;
    const requiredFlags = rule.flags || [];
    const requiredAffection = rule.affection || {};
    return requiredFlags.every((flag) => flags.has(flag))
      && Object.entries(requiredAffection).every(([target, min]) => (affection[target] || 0) >= Number(min || 0));
  }) || fallback;
}

function resolveRouteGateRoute(gameState, routeConfig = {}) {
  const locked = resolveRouteLock(gameState, routeConfig, { threshold: 0 });
  return locked?.id && locked.id !== 'common' && locked.reason === 'explicit-lock' ? locked : null;
}

export function findScenarioIndexById(scenario, id) {
  if (!id) return -1;
  return scenario.findIndex((line) => line.id === id);
}

export function resolveNextIndex({ scenario, index, currentItem, ending, gameState, endingRules = [], routeConfig = {} }) {
  if (!currentItem || currentItem?.terminal) return -1;

  const route = currentItem?.endingGate
    ? currentItem.routeGate
      ? resolveRouteGateRoute(gameState, routeConfig) || ending || resolveEndingRoute(gameState, endingRules)
      : ending || resolveEndingRoute(gameState, endingRules)
    : ending;
  const endingNext = currentItem?.endingNext || null;
  const endingTargetId = endingNext
    ? endingNext[route?.id] || endingNext.default || endingNext.quiet || ''
    : '';
  const targetId = endingTargetId || currentItem?.nextId;
  const targetIndex = findScenarioIndexById(scenario, targetId);
  if (targetIndex >= 0) return targetIndex;

  return index + 1 < scenario.length ? index + 1 : -1;
}

function makeReplayStateKey(index, gameState) {
  const flags = [...(gameState.flags || [])].sort().join(',');
  const affection = Object.entries(gameState.affection || {})
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([target, value]) => `${target}:${value}`)
    .join(',');
  return `${index}|${flags}|${affection}`;
}

function inferTargetRouteId(targetId = '', routeConfig = {}) {
  const targets = Array.isArray(routeConfig.affectionTargets)
    ? routeConfig.affectionTargets
    : [routeConfig.affectionTarget].filter(Boolean);
  const safeTargetId = String(targetId || '').toLowerCase();
  const matchedTarget = targets.find((target) => safeTargetId.includes(String(target?.id || '').toLowerCase()));
  if (matchedTarget?.id) return matchedTarget.id;
  if (safeTargetId.includes('good') || safeTargetId.includes('normal') || safeTargetId.includes('quiet')) {
    return (typeof routeConfig.affectionTarget === 'string' ? routeConfig.affectionTarget : routeConfig.affectionTarget?.id) || 'hyeongyeom';
  }
  return '';
}

function replayStepScore(step, routeId) {
  if (!routeId) return 0;
  const flags = new Set(step.gameState?.flags || []);
  const affection = Number(step.gameState?.affection?.[routeId] || 0);
  const routeFlags = [...flags].filter((flag) => String(flag).includes(routeId)).length;
  return affection * 10 + routeFlags * 25;
}

function endingNextIncludesTarget(endingNext, targetId) {
  if (!endingNext || !targetId) return false;
  return Object.keys(endingNext).some((key) => endingNext[key] === targetId);
}

function targetEndingRules(options = {}) {
  const targetRouteId = String(options.targetId || '').replace(/^ending-/, '');
  if (!targetRouteId) return [];
  return (options.endingRules || []).filter((rule) => rule?.id === targetRouteId);
}

function endingRuleProgressScore(gameState, rules = []) {
  if (!rules.length) return 0;
  const flags = new Set(gameState?.flags || []);
  const affection = gameState?.affection || {};
  return Math.max(...rules.map((rule) => {
    const requiredFlags = rule.flags || [];
    const flagScore = requiredFlags.filter((flag) => flags.has(flag)).length * 5_000;
    const affectionScore = Object.entries(rule.affection || {}).reduce((sum, [target, min]) => (
      sum + Math.min(Number(affection[target] || 0), Number(min || 0)) * 100
    ), 0);
    const complete = requiredFlags.every((flag) => flags.has(flag))
      && Object.entries(rule.affection || {}).every(([target, min]) => Number(affection[target] || 0) >= Number(min || 0));
    return flagScore + affectionScore + (complete ? 100_000 : 0);
  }));
}

function replayTargetScore(step, scenario, options, routeId) {
  const targetId = options.targetId || '';
  const item = scenario[step.index] || null;
  let score = replayStepScore(step, routeId);
  score += endingRuleProgressScore(step.gameState, targetEndingRules(options));
  if (item?.id === targetId) score += 1_000_000;
  if (endingNextIncludesTarget(item?.endingNext, targetId)) score += 750_000;
  if (targetId.startsWith('ending-') && item?.endingGate) score += 250_000;
  return score;
}

export function getReplayCandidateSteps(scenario, index, gameState, options = {}) {
  const item = scenario[index];
  if (!item || item.terminal) return [];

  const endingRules = options.endingRules || [];
  if (item.endingNext) {
    if (options.targetId && Object.values(item.endingNext).includes(options.targetId)) {
      const explicitTargetIndex = findScenarioIndexById(scenario, options.targetId);
      if (explicitTargetIndex >= 0) return [{ index: explicitTargetIndex, gameState }];
    }

    const route = item.routeGate
      ? resolveRouteGateRoute(gameState, options.routeConfig) || (endingRules.length > 0 ? resolveEndingRoute(gameState, endingRules) : null)
      : endingRules.length > 0 ? resolveEndingRoute(gameState, endingRules) : null;
    const targetId = route
      ? item.endingNext[route.id] || item.endingNext.default || item.endingNext.quiet
      : item.endingNext.default || item.endingNext.quiet;
    const targetIndex = findScenarioIndexById(scenario, targetId);
    return targetIndex >= 0 ? [{ index: targetIndex, gameState }] : [];
  }

  if (item.type === 'choice' || item.type === 'mapChoice' || (item.type === 'phone' && getItemChoices(item).length > 0)) {
    const targets = item.next || item.choiceNext || [];
    const targetRouteId = inferTargetRouteId(options.targetId, options.routeConfig);
    return getItemChoices(item).map((_, choiceIndex) => {
      const targetIndex = findScenarioIndexById(scenario, targets[choiceIndex]);
      return {
        index: targetIndex >= 0 ? targetIndex : index + 1,
        gameState: applyRouteRewards(gameState, item, choiceIndex, options.routeConfig)
      };
    })
      .filter((step) => step.index >= 0 && step.index < scenario.length)
      .sort((left, right) => (
        replayTargetScore(right, scenario, options, targetRouteId)
        - replayTargetScore(left, scenario, options, targetRouteId)
      ));
  }

  const nextIdIndex = findScenarioIndexById(scenario, item.nextId);
  if (nextIdIndex >= 0) return [{ index: nextIdIndex, gameState }];
  return index + 1 < scenario.length ? [{ index: index + 1, gameState }] : [];
}

export function findReplayPath(scenario, targetIndex, currentIndex = 0, gameState = createInitialGameState(), options = {}, seen = new Set(), memo = new Set()) {
  const effectiveOptions = options.targetId ? options : { ...options, targetId: scenario[targetIndex]?.id || '' };
  if (scenario[targetIndex]?.previewOnly) return currentIndex === targetIndex ? [currentIndex] : [targetIndex];
  const replayKey = makeReplayStateKey(currentIndex, gameState);
  if (currentIndex < 0 || currentIndex >= scenario.length || seen.has(replayKey) || memo.has(replayKey)) return null;
  if (currentIndex === targetIndex) return [currentIndex];

  const nextSeen = new Set(seen);
  nextSeen.add(replayKey);

  for (const step of getReplayCandidateSteps(scenario, currentIndex, gameState, effectiveOptions)) {
    const childPath = findReplayPath(scenario, targetIndex, step.index, step.gameState, effectiveOptions, nextSeen, memo);
    if (childPath) return [currentIndex, ...childPath];
  }

  memo.add(replayKey);
  return null;
}

export function replayDirectorState(scenario, targetIndex, defaults = {}) {
  const maxIndex = clamp(targetIndex, 0, Math.max(0, scenario.length - 1));
  const targetId = scenario[maxIndex]?.id || '';
  const endingRules = defaults.endingRules || [];
  const replayPath = scenario[maxIndex]?.previewOnly
    ? [maxIndex]
    : findReplayPath(scenario, maxIndex, 0, createInitialGameState(), {
      targetId,
      endingRules,
      routeConfig: defaults.routeConfig
    }) || [maxIndex];
  let state = createDirectorState(defaults);

  for (const lineIndex of replayPath) {
    state = applyDirectorItem(state, scenario[lineIndex], defaults);
  }

  return state;
}
