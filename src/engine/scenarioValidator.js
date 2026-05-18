const DIRECTIVE_TYPES = new Set(['BG', 'BG_CG', 'BCG', 'SCG', 'SE', 'E', 'OVERLAY', 'MOOD']);

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function asList(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function addError(errors, item, message) {
  errors.push(`${item?.id || '<unknown>'}: ${message}`);
}

export function validateScenario(scenario, routeConfig) {
  const errors = [];
  const items = asArray(scenario);
  const ids = new Set();
  const galleryIds = new Set(asArray(routeConfig?.galleryItems || routeConfig?.gallery).map((entry) => entry.id));
  const recollectionIds = new Set(asArray(routeConfig?.recollectionItems || routeConfig?.recollections).map((entry) => entry.id));
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
      if (asArray(item.rewards).length && asArray(item.rewards).length !== choiceCount) {
        addError(errors, item, `rewards length ${asArray(item.rewards).length} does not match choices length ${choiceCount}`);
      }
      if (asArray(item.next || item.choiceNext).length && asArray(item.next || item.choiceNext).length !== choiceCount) {
        addError(errors, item, `next length ${asArray(item.next || item.choiceNext).length} does not match choices length ${choiceCount}`);
      }
    }

    if (item.type === 'phone') {
      const replyCount = asArray(item.replies).length;
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

    for (const [index, directive] of asArray(item.directives).entries()) {
      const type = String(directive?.type || directive?.command || directive?.cmd || '').toUpperCase();
      if (type && !DIRECTIVE_TYPES.has(type)) addError(errors, item, `unknown directive type at directives[${index}]: ${type}`);
    }
  }

  return { valid: errors.length === 0, errors };
}
