export function uniqueValues(values) {
  return [...new Set((values || []).filter(Boolean))];
}

export function createInitialGameState() {
  return {
    affection: {},
    flags: [],
    choices: [],
    endings: [],
    readLines: [],
    unlockedGallery: [],
    unlockedRecollections: []
  };
}

function normalizeReward(item, choiceIndex) {
  if (Number.isInteger(choiceIndex)) {
    return item?.rewards?.[choiceIndex] || item?.choiceRewards?.[choiceIndex] || {};
  }

  return item?.reward || item?.routeReward || item?.rewards || item || {};
}

function toList(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function clampAffectionValue(target, value, routeConfig) {
  const configuredTargets = Array.isArray(routeConfig?.affectionTargets) ? routeConfig.affectionTargets : [];
  const matchedTarget = configuredTargets.find((entry) => entry?.id === target);
  if (matchedTarget) {
    const min = Number.isFinite(matchedTarget.min) ? matchedTarget.min : 0;
    const max = Number.isFinite(matchedTarget.max) ? matchedTarget.max : Number.POSITIVE_INFINITY;
    return Math.min(max, Math.max(min, value));
  }

  const configuredTarget = typeof routeConfig?.affectionTarget === 'string'
    ? routeConfig.affectionTarget
    : routeConfig?.affectionTarget?.id;
  if (configuredTarget && configuredTarget !== target) return value;

  const min = Number.isFinite(routeConfig?.affectionTarget?.min)
    ? routeConfig.affectionTarget.min
    : 0;
  const max = Number.isFinite(routeConfig?.affectionTarget?.max)
    ? routeConfig.affectionTarget.max
    : Number.POSITIVE_INFINITY;

  return Math.min(max, Math.max(min, value));
}

export function applyRouteRewards(gameState = createInitialGameState(), item, choiceIndex, routeConfig = {}) {
  const reward = normalizeReward(item, choiceIndex);
  const nextAffection = { ...(gameState.affection || {}) };

  for (const [target, delta] of Object.entries(reward.affection || {})) {
    nextAffection[target] = clampAffectionValue(
      target,
      (nextAffection[target] || 0) + Number(delta || 0),
      routeConfig
    );
  }

  const choiceFlag = Number.isInteger(choiceIndex) ? `${item?.id || 'choice'}:${choiceIndex}` : '';
  const choices = Number.isInteger(choiceIndex)
    ? [
        ...(gameState.choices || []),
        {
          id: item?.id || '',
          choiceIndex,
          text: item?.choices?.[choiceIndex] || item?.replies?.[choiceIndex] || '',
          reward
        }
      ]
    : [...(gameState.choices || [])];

  return {
    ...gameState,
    affection: nextAffection,
    flags: uniqueValues([...(gameState.flags || []), ...(reward.flags || []), choiceFlag]),
    choices,
    endings: uniqueValues([...(gameState.endings || []), ...toList(reward.endings || reward.ending)]),
    readLines: uniqueValues([...(gameState.readLines || []), ...toList(reward.readLines || reward.readLine)]),
    unlockedGallery: uniqueValues([
      ...(gameState.unlockedGallery || []),
      ...toList(reward.unlockedGallery || reward.gallery || reward.galleryItem)
    ]),
    unlockedRecollections: uniqueValues([
      ...(gameState.unlockedRecollections || []),
      ...toList(reward.unlockedRecollections || reward.recollections || reward.recollection || reward.recollectionItem)
    ])
  };
}

export function markLineRead(gameState = createInitialGameState(), lineId) {
  if (!lineId || (gameState.readLines || []).includes(lineId)) return gameState;
  return {
    ...gameState,
    readLines: uniqueValues([...(gameState.readLines || []), lineId])
  };
}

export function unlockGalleryItem(gameState = createInitialGameState(), itemId) {
  if (!itemId || (gameState.unlockedGallery || []).includes(itemId)) return gameState;
  return {
    ...gameState,
    unlockedGallery: uniqueValues([...(gameState.unlockedGallery || []), itemId])
  };
}

export function unlockRecollectionItem(gameState = createInitialGameState(), itemId) {
  if (!itemId || (gameState.unlockedRecollections || []).includes(itemId)) return gameState;
  return {
    ...gameState,
    unlockedRecollections: uniqueValues([...(gameState.unlockedRecollections || []), itemId])
  };
}
