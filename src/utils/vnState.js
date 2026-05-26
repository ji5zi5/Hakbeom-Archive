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
    unlockedRecollections: [],
    calendar: {
      currentDay: 4,
      usedEventIds: [],
      availableEventIds: [],
      completedEventIds: [],
      dateHistory: [],
      invitations: {}
    },
    relationshipMemory: []
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

function firstString(...values) {
  return values.find((value) => typeof value === 'string' && value) || '';
}

function firstFiniteNumber(...values) {
  for (const value of values) {
    const numeric = Number(value);
    if (Number.isFinite(numeric)) return numeric;
  }
  return undefined;
}

function normalizeCalendarReward(reward = {}, item = {}) {
  const calendar = reward.calendar && typeof reward.calendar === 'object' ? reward.calendar : {};
  const planVisit = reward.planVisit && typeof reward.planVisit === 'object' ? reward.planVisit : {};
  const invitation = reward.invitation && typeof reward.invitation === 'object' ? reward.invitation : {};
  const eventId = firstString(calendar.eventId, invitation.eventId, reward.calendarEventId, reward.eventId, planVisit.eventId, item.calendarEventId);
  if (!eventId) return null;

  return {
    eventId,
    routeId: firstString(calendar.routeId, invitation.routeId, planVisit.routeId, reward.routeId, item.routeId),
    day: firstFiniteNumber(calendar.day, planVisit.day, item.calendarDay),
    slot: firstString(calendar.slot, planVisit.slot, item.calendarSlot),
    location: firstString(calendar.location, planVisit.locationId, item.calendarLocation),
    outcome: firstString(calendar.outcome, calendar.status, invitation.status, 'selected'),
    label: firstString(calendar.label, planVisit.label),
    invitationStatus: firstString(calendar.invitationStatus, invitation.status),
    invitationTone: firstString(calendar.invitationTone, invitation.tone)
  };
}

function normalizeMemoryRewards(reward = {}, calendarReward = null) {
  const rawMemories = [
    ...toList(reward.memory),
    ...toList(reward.memories),
    ...toList(reward.relationshipMemory)
  ];
  return rawMemories
    .filter((memory) => memory && typeof memory === 'object')
    .map((memory) => ({
      eventId: firstString(memory.eventId, calendarReward?.eventId),
      routeId: firstString(memory.routeId, calendarReward?.routeId),
      kind: firstString(memory.kind, calendarReward?.outcome, 'date'),
      label: firstString(memory.label, calendarReward?.label)
    }))
    .filter((memory) => memory.eventId || memory.routeId || memory.label);
}

function appendUniqueObjects(items = [], additions = [], keyOf = (value) => JSON.stringify(value)) {
  const seen = new Set(items.map(keyOf));
  const next = [...items];
  for (const item of additions) {
    const key = keyOf(item);
    if (seen.has(key)) continue;
    seen.add(key);
    next.push(item);
  }
  return next;
}

function applyCalendarAndMemoryRewards(gameState, reward, item) {
  const calendarReward = normalizeCalendarReward(reward, item);
  const memoryRewards = normalizeMemoryRewards(reward, calendarReward);
  if (!calendarReward && memoryRewards.length === 0) return {};

  const currentCalendar = gameState.calendar || {};
  const calendarPatch = calendarReward ? {
    currentDay: calendarReward.day ?? currentCalendar.currentDay ?? 4,
    usedEventIds: uniqueValues([...(currentCalendar.usedEventIds || []), calendarReward.eventId]),
    availableEventIds: uniqueValues([...(currentCalendar.availableEventIds || []), calendarReward.eventId]),
    completedEventIds: uniqueValues([...(currentCalendar.completedEventIds || []), calendarReward.eventId]),
    dateHistory: appendUniqueObjects(
      currentCalendar.dateHistory || [],
      [{
        eventId: calendarReward.eventId,
        routeId: calendarReward.routeId,
        day: calendarReward.day,
        slot: calendarReward.slot,
        location: calendarReward.location,
        outcome: calendarReward.outcome,
        label: calendarReward.label
      }],
      (entry) => `${entry.eventId}|${entry.routeId}|${entry.day}|${entry.slot}|${entry.location}|${entry.outcome}|${entry.label}`
    ),
    invitations: {
      ...(currentCalendar.invitations || {}),
      [calendarReward.eventId]: {
        routeId: calendarReward.routeId,
        status: calendarReward.invitationStatus || calendarReward.outcome || 'selected',
        tone: calendarReward.invitationTone || ''
      }
    }
  } : currentCalendar;

  return {
    calendar: calendarReward ? { ...currentCalendar, ...calendarPatch } : currentCalendar,
    relationshipMemory: appendUniqueObjects(
      gameState.relationshipMemory || [],
      memoryRewards,
      (memory) => `${memory.eventId}|${memory.routeId}|${memory.kind}|${memory.label}`
    )
  };
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

  const calendarAndMemoryPatch = applyCalendarAndMemoryRewards(gameState, reward, item);

  return {
    ...gameState,
    ...calendarAndMemoryPatch,
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
