import { mapLocations as canonicalMapLocations } from '../data/scenario/mapChoiceConfig.js';

const DIRECTIVE_TYPES = new Set(['BG', 'BG_CG', 'BCG', 'SCG', 'SE', 'E', 'OVERLAY', 'MOOD', 'BGM', 'MUSIC', 'AMBIENT', 'AMBIENCE', 'STOP_BGM', 'STOP_AMBIENT']);
const MAX_INTERACTIVE_OPTIONS = 3;
const MAP_CHOICE_OPTIONS = 9;

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function asList(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function addError(errors, item, message) {
  errors.push(`${item?.id || '<unknown>'}: ${message}`);
}

function hasTargets(item) {
  return asArray(item?.next || item?.choiceNext).length > 0;
}

function getNormalFlowTargets(items, index) {
  const item = items[index];
  if (!item || item.terminal || item.previewOnly) return [];

  if (item.endingNext) return Object.values(item.endingNext).filter(Boolean);
  if (item.type === 'choice' || item.type === 'mapChoice') return asArray(item.next || item.choiceNext);
  if (item.type === 'phone') {
    const replyTargets = asArray(item.next || item.choiceNext);
    if (replyTargets.length > 0) return replyTargets;
    if (item.nextId) return [item.nextId];
    return items[index + 1]?.id ? [items[index + 1].id] : [];
  }
  if (item.nextId) return [item.nextId];
  return items[index + 1]?.id ? [items[index + 1].id] : [];
}

function getReachableIds(items) {
  const byId = new Map(items.filter((item) => item?.id).map((item, index) => [item.id, { item, index }]));
  const startId = items.find((item) => item?.id && !item.previewOnly)?.id;
  const reachable = new Set();
  const pending = startId ? [startId] : [];

  while (pending.length > 0) {
    const id = pending.pop();
    if (!id || reachable.has(id)) continue;
    const entry = byId.get(id);
    if (!entry) continue;
    reachable.add(id);
    for (const target of getNormalFlowTargets(items, entry.index)) {
      if (!reachable.has(target)) pending.push(target);
    }
  }

  return reachable;
}

export function validateScenario(scenario, routeConfig) {
  const errors = [];
  const items = asArray(scenario);
  const ids = new Set();
  const galleryIds = new Set(asArray(routeConfig?.galleryItems || routeConfig?.gallery).map((entry) => entry.id));
  const recollectionIds = new Set(asArray(routeConfig?.recollectionItems || routeConfig?.recollections).map((entry) => entry.id));
  const affectionTargetIds = new Set(asArray(routeConfig?.affectionTargets).map((entry) => entry.id).filter(Boolean));
  const fallbackAffectionTarget = typeof routeConfig?.affectionTarget === 'string'
    ? routeConfig.affectionTarget
    : routeConfig?.affectionTarget?.id;
  if (fallbackAffectionTarget) affectionTargetIds.add(fallbackAffectionTarget);
  const endingIds = new Set([
    ...Object.keys(routeConfig?.endings || {}),
    ...items.filter((item) => item?.terminal).map((item) => item.id)
  ]);

  for (const item of items) {
    if (!item?.id) addError(errors, item, 'missing id');
    if (item?.id && ids.has(item.id)) addError(errors, item, 'duplicate id');
    if (item?.id) ids.add(item.id);
  }

  const requireTarget = (item, target, label) => {
    if (target && !ids.has(target)) addError(errors, item, `${label} target does not exist: ${target}`);
  };

  const validateReward = (item, reward, label) => {
    if (!reward) return;
    for (const galleryId of asList(reward.unlockedGallery || reward.gallery || reward.galleryItem)) {
      if (!galleryIds.has(galleryId)) addError(errors, item, `${label} unknown gallery unlock: ${galleryId}`);
    }
    for (const recollectionId of asList(reward.unlockedRecollections || reward.recollections || reward.recollection || reward.recollectionItem)) {
      if (!recollectionIds.has(recollectionId)) addError(errors, item, `${label} unknown recollection unlock: ${recollectionId}`);
    }
    for (const endingId of asList(reward.endings || reward.ending)) {
      if (endingId && endingIds.size > 0 && !endingIds.has(endingId)) {
        addError(errors, item, `${label} unknown ending: ${endingId}`);
      }
    }
  };

  const validateVariantAffectionCondition = (item, target, condition, label) => {
    if (affectionTargetIds.size > 0 && !affectionTargetIds.has(target)) {
      addError(errors, item, `${label} unknown variant affection target: ${target}`);
    }
    if (typeof condition === 'number') return;
    if (!isPlainObject(condition)) {
      addError(errors, item, `${label} variant affection condition for ${target} needs numeric min or max`);
      return;
    }
    const hasMin = condition.min !== undefined;
    const hasMax = condition.max !== undefined;
    const min = hasMin ? Number(condition.min) : Number.NEGATIVE_INFINITY;
    const max = hasMax ? Number(condition.max) : Number.POSITIVE_INFINITY;
    if ((!hasMin && !hasMax) || (hasMin && !Number.isFinite(min)) || (hasMax && !Number.isFinite(max))) {
      addError(errors, item, `${label} variant affection condition for ${target} needs numeric min or max`);
      return;
    }
    if (min > max) addError(errors, item, `${label} variant affection min must be <= max for ${target}`);
  };

  const validateVariant = (item, variant, index) => {
    const label = `variants[${index}]`;
    if (!isPlainObject(variant)) {
      addError(errors, item, `${label} must be an object`);
      return;
    }
    if (!variant.default && typeof variant.text !== 'string') {
      addError(errors, item, `${label} text is required`);
    }
    for (const flagField of ['requiredFlags', 'flags']) {
      const flags = variant[flagField];
      if (flags != null && !Array.isArray(flags) && typeof flags !== 'string') {
        addError(errors, item, `${label}.${flagField} must be a string or array`);
      }
    }
    if (variant.affection != null) {
      if (!isPlainObject(variant.affection)) {
        addError(errors, item, `${label} affection must be an object`);
        return;
      }
      for (const [target, condition] of Object.entries(variant.affection)) {
        validateVariantAffectionCondition(item, target, condition, label);
      }
    }
  };

  const validateMapChoice = (item) => {
    const choices = asArray(item.choices);
    const locations = asArray(item.mapLocations);
    const rewards = asArray(item.rewards);
    const nextTargets = asArray(item.next || item.choiceNext);

    if (item.options !== undefined) {
      addError(errors, item, 'mapChoice options field is invalid');
    }
    if (choices.length !== MAP_CHOICE_OPTIONS) {
      addError(errors, item, `mapChoice choices length ${choices.length} must equal ${MAP_CHOICE_OPTIONS}`);
    }
    if (!Array.isArray(item.mapLocations)) {
      addError(errors, item, 'mapChoice mapLocations are required');
    }
    if (locations.length !== MAP_CHOICE_OPTIONS) {
      addError(errors, item, `mapChoice mapLocations length ${locations.length} must equal ${MAP_CHOICE_OPTIONS}`);
    }
    if (rewards.length !== MAP_CHOICE_OPTIONS) {
      addError(errors, item, `mapChoice rewards length ${rewards.length} must equal ${MAP_CHOICE_OPTIONS}`);
    }
    if (nextTargets.length !== MAP_CHOICE_OPTIONS) {
      addError(errors, item, `mapChoice next length ${nextTargets.length} must equal ${MAP_CHOICE_OPTIONS}`);
    }

    const canonicalMatches = locations.length === canonicalMapLocations.length
      && locations.every((location, index) => {
        const canonical = canonicalMapLocations[index];
        return location?.id === canonical.id
          && location?.label === canonical.label
          && location?.routeId === canonical.routeId
          && location?.region?.x === canonical.region.x
          && location?.region?.y === canonical.region.y
          && location?.region?.w === canonical.region.w
          && location?.region?.h === canonical.region.h;
      });
    if (!canonicalMatches) {
      addError(errors, item, 'mapChoice mapLocations must match canonical location order');
    }

    if (!choices.every((choice, index) => choice === locations[index]?.label)) {
      addError(errors, item, 'mapChoice choices must match mapLocations labels');
    }

    for (const location of locations) {
      if (location?.routeId && affectionTargetIds.size > 0 && !affectionTargetIds.has(location.routeId)) {
        addError(errors, item, `mapChoice unknown routeId: ${location.routeId}`);
      }
      const region = location?.region || {};
      if (!['x', 'y', 'w', 'h'].every((key) => Number.isFinite(Number(region[key])))) {
        addError(errors, item, 'mapChoice region must include finite x/y/w/h numbers');
      }
    }
  };

  for (const item of items) {
    requireTarget(item, item.nextId, 'nextId');
    requireTarget(item, item.skipToId, 'skipToId');
    for (const [routeId, target] of Object.entries(item.endingNext || {})) {
      requireTarget(item, target, `endingNext.${routeId}`);
    }

    for (const [index, target] of asArray(item.next || item.choiceNext).entries()) {
      requireTarget(item, target, `next[${index}]`);
    }

    if (item.type === 'choice') {
      const choiceCount = asArray(item.choices).length;
      if (choiceCount > MAX_INTERACTIVE_OPTIONS) {
        addError(errors, item, `choices length ${choiceCount} exceeds max ${MAX_INTERACTIVE_OPTIONS}`);
      }
      if (asArray(item.rewards).length && asArray(item.rewards).length !== choiceCount) {
        addError(errors, item, `rewards length ${asArray(item.rewards).length} does not match choices length ${choiceCount}`);
      }
      if (asArray(item.next || item.choiceNext).length && asArray(item.next || item.choiceNext).length !== choiceCount) {
        addError(errors, item, `next length ${asArray(item.next || item.choiceNext).length} does not match choices length ${choiceCount}`);
      }
    }

    if (item.type === 'mapChoice') {
      validateMapChoice(item);
    }

    if (item.type === 'phone') {
      const replyCount = asArray(item.replies).length;
      if (replyCount > MAX_INTERACTIVE_OPTIONS) {
        addError(errors, item, `phone replies length ${replyCount} exceeds max ${MAX_INTERACTIVE_OPTIONS}`);
      }
      if (replyCount > 0 && item.nextId && hasTargets(item)) {
        addError(errors, item, 'phone reply scenes must not define nextId when next targets are present');
      }
      if (Array.isArray(item.messages)) {
        item.messages.forEach((message, messageIndex) => {
          if (!message || typeof message !== 'object') {
            addError(errors, item, `phone message ${messageIndex} must be an object.`);
            return;
          }
          if (!message.text && !message.pending && !message.typing) {
            addError(errors, item, `phone message text is required unless pending is true.`);
          }
        });
      }
      if (asArray(item.rewards).length && asArray(item.rewards).length !== replyCount) {
        addError(errors, item, `phone rewards length ${asArray(item.rewards).length} does not match replies length ${replyCount}`);
      }
      if (asArray(item.next || item.choiceNext).length && asArray(item.next || item.choiceNext).length !== replyCount) {
        addError(errors, item, `phone next length ${asArray(item.next || item.choiceNext).length} does not match replies length ${replyCount}`);
      }
    }

    for (const [index, reward] of asArray(item.rewards || item.choiceRewards).entries()) {
      validateReward(item, reward, `rewards[${index}]`);
    }
    validateReward(item, item.reward || item.routeReward, 'reward');

    for (const [index, variant] of asArray(item.variants).entries()) {
      validateVariant(item, variant, index);
    }

    for (const [index, directive] of asArray(item.directives).entries()) {
      const type = String(directive?.type || directive?.command || directive?.cmd || '').toUpperCase();
      if (type && !DIRECTIVE_TYPES.has(type)) addError(errors, item, `unknown directive type at directives[${index}]: ${type}`);
      if ((type === 'BGM' || type === 'MUSIC' || type === 'AMBIENT' || type === 'AMBIENCE') && !(directive.src || directive.cue || directive.id || directive.name)) {
        addError(errors, item, `audio directive at directives[${index}] needs src, cue, id, or name`);
      }
      if (type === 'SCG' && directive.expression && !/^[a-z0-9_-]+$/i.test(String(directive.expression))) {
        addError(errors, item, `SCG expression at directives[${index}] must be a safe token`);
      }
    }
  }

  const reachable = getReachableIds(items);
  for (const item of items) {
    if (item?.id && !item.previewOnly && !reachable.has(item.id)) {
      addError(errors, item, `unreachable non-preview scene: ${item.id}`);
    }
  }

  return { valid: errors.length === 0, errors };
}
