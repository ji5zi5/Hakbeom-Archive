function toList(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function numberOrDefault(value, fallback) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function hasFiniteNumber(value) {
  return value !== undefined && Number.isFinite(Number(value));
}

function flagSet(gameState = {}) {
  return new Set(toList(gameState.flags));
}

export function affectionConditionMatches(gameState = {}, affectionCondition = {}) {
  const affection = gameState.affection || {};
  return Object.entries(affectionCondition || {}).every(([target, condition]) => {
    const value = Number(affection[target] || 0);
    if (typeof condition === 'number') return value >= condition;
    if (condition == null || typeof condition !== 'object') return false;
    if (!hasFiniteNumber(condition.min) && !hasFiniteNumber(condition.max)) return false;
    const min = numberOrDefault(condition.min, Number.NEGATIVE_INFINITY);
    const max = numberOrDefault(condition.max, Number.POSITIVE_INFINITY);
    if (min > max) return false;
    return value >= min && value <= max;
  });
}

export function variantMatchesState(variant = {}, gameState = {}) {
  if (!variant || variant.default) return false;
  const flags = flagSet(gameState);
  const requiredFlags = toList(variant.requiredFlags || variant.flags);
  if (!requiredFlags.every((flag) => flags.has(flag))) return false;
  return affectionConditionMatches(gameState, variant.affection || {});
}
