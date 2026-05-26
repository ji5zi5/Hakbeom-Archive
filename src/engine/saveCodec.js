export const SAVE_VERSION = 3;

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function isDirectorState(value) {
  return isPlainObject(value)
    && Array.isArray(value.characters)
    && Array.isArray(value.overlays)
    && Array.isArray(value.soundCues);
}

function uniqueList(value) {
  return [...new Set((Array.isArray(value) ? value : []).filter(Boolean))];
}

function uniqueStringList(value, knownValues = null) {
  const knownSet = knownValues instanceof Set ? knownValues : null;
  return [
    ...new Set(
      (Array.isArray(value) ? value : [])
        .filter((entry) => typeof entry === 'string' && entry.length > 0)
        .filter((entry) => !knownSet || knownSet.has(entry))
    )
  ];
}

function clampNumber(value, min, max) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return undefined;
  return Math.min(max, Math.max(min, numeric));
}

function clampAffection(target, value, routeConfig) {
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

function shouldScaleLegacyAffection(target, score, routeConfig, legacyScale) {
  if (!legacyScale) return false;
  const configuredTargets = Array.isArray(routeConfig?.affectionTargets) ? routeConfig.affectionTargets : [];
  const matchedTarget = configuredTargets.find((entry) => entry?.id === target);
  const max = Number(matchedTarget?.max ?? routeConfig?.affectionTarget?.max ?? 0);
  return max >= 100 && score > 0 && score <= 10;
}

function normalizeAffection(value, routeConfig, { legacyScale = false } = {}) {
  if (!isPlainObject(value)) return {};
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, score]) => Number.isFinite(Number(score)))
      .map(([target, score]) => {
        const numeric = Number(score);
        const migrated = shouldScaleLegacyAffection(target, numeric, routeConfig, legacyScale)
          ? numeric * 10
          : numeric;
        return [target, clampAffection(target, migrated, routeConfig)];
      })
  );
}

export function collectCalendarEventIdsFromScenario(scenario) {
  const ids = new Set();
  for (const item of Array.isArray(scenario) ? scenario : []) {
    for (const candidate of [
      item?.calendarEventId,
      item?.eventCardId,
      item?.calendar?.eventId,
      item?.metadata?.calendarEventId,
      item?.meta?.calendarEventId
    ]) {
      if (typeof candidate === 'string' && candidate) ids.add(candidate);
    }
    for (const candidate of [
      ...(Array.isArray(item?.calendarEventIds) ? item.calendarEventIds : []),
      ...(Array.isArray(item?.calendar?.eventIds) ? item.calendar.eventIds : [])
    ]) {
      if (typeof candidate === 'string' && candidate) ids.add(candidate);
    }
  }
  return [...ids];
}

function resolveKnownCalendarEventIds({ calendarEventIds, scenario } = {}) {
  if (Array.isArray(calendarEventIds)) return new Set(calendarEventIds.filter((id) => typeof id === 'string' && id));
  const derivedIds = collectCalendarEventIdsFromScenario(scenario);
  return derivedIds.length > 0 ? new Set(derivedIds) : null;
}

function normalizeCalendarHistory(value, knownEventIds) {
  if (!Array.isArray(value)) return [];
  return value
    .filter(isPlainObject)
    .map((entry) => {
      const eventId = typeof entry.eventId === 'string' ? entry.eventId : '';
      if (eventId && knownEventIds && !knownEventIds.has(eventId)) return null;
      return {
        eventId,
        routeId: typeof entry.routeId === 'string' ? entry.routeId : '',
        day: Number.isFinite(Number(entry.day)) ? clampNumber(entry.day, 4, 14) : 4,
        slot: typeof entry.slot === 'string' ? entry.slot : '',
        location: typeof entry.location === 'string' ? entry.location : '',
        outcome: typeof entry.outcome === 'string' ? entry.outcome : '',
        label: typeof entry.label === 'string' ? entry.label : ''
      };
    })
    .filter(Boolean);
}

function normalizeInvitations(value, knownEventIds) {
  if (!isPlainObject(value)) return {};
  return Object.fromEntries(
    Object.entries(value)
      .filter(([eventId]) => typeof eventId === 'string' && eventId && (!knownEventIds || knownEventIds.has(eventId)))
      .map(([eventId, invitation]) => [
        eventId,
        isPlainObject(invitation)
          ? {
              routeId: typeof invitation.routeId === 'string' ? invitation.routeId : '',
              status: typeof invitation.status === 'string' ? invitation.status : '',
              tone: typeof invitation.tone === 'string' ? invitation.tone : ''
            }
          : { status: typeof invitation === 'string' ? invitation : invitation === true ? 'accepted' : '' }
      ])
  );
}

function normalizeCalendarState(value, options = {}) {
  const state = isPlainObject(value) ? value : {};
  const knownEventIds = resolveKnownCalendarEventIds(options);
  return {
    currentDay: clampNumber(state.currentDay, 4, 14) ?? 4,
    usedEventIds: uniqueStringList(state.usedEventIds, knownEventIds),
    availableEventIds: uniqueStringList(state.availableEventIds, knownEventIds),
    completedEventIds: uniqueStringList(state.completedEventIds, knownEventIds),
    dateHistory: normalizeCalendarHistory(state.dateHistory, knownEventIds),
    invitations: normalizeInvitations(state.invitations, knownEventIds)
  };
}

function normalizeRelationshipMemory(value, options = {}) {
  const knownEventIds = resolveKnownCalendarEventIds(options);
  if (!Array.isArray(value)) return [];
  return value
    .filter(isPlainObject)
    .map((memory) => {
      const eventId = typeof memory.eventId === 'string' ? memory.eventId : '';
      if (eventId && knownEventIds && !knownEventIds.has(eventId)) return null;
      return {
        eventId,
        routeId: typeof memory.routeId === 'string' ? memory.routeId : '',
        kind: typeof memory.kind === 'string' ? memory.kind : '',
        label: typeof memory.label === 'string' ? memory.label : ''
      };
    })
    .filter(Boolean);
}

function normalizeGameState(value, routeConfig, options = {}) {
  const state = isPlainObject(value) ? value : {};
  return {
    affection: normalizeAffection(state.affection, routeConfig, options),
    flags: uniqueList(state.flags),
    choices: Array.isArray(state.choices) ? state.choices.filter(isPlainObject) : [],
    endings: uniqueList(state.endings),
    readLines: uniqueList(state.readLines),
    unlockedGallery: uniqueList(state.unlockedGallery),
    unlockedRecollections: uniqueList(state.unlockedRecollections),
    calendar: normalizeCalendarState(state.calendar, options),
    relationshipMemory: normalizeRelationshipMemory(state.relationshipMemory, options)
  };
}

function normalizeSettings(value) {
  if (!isPlainObject(value)) return {};
  const settings = {};
  const textSpeedMs = clampNumber(value.textSpeedMs, 8, 60);
  if (textSpeedMs !== undefined) settings.textSpeedMs = textSpeedMs;
  const autoDelayMs = clampNumber(value.autoDelayMs, 500, 2600);
  if (autoDelayMs !== undefined) settings.autoDelayMs = autoDelayMs;
  const bgmVolume = clampNumber(value.bgmVolume, 0, 100);
  if (bgmVolume !== undefined) settings.bgmVolume = bgmVolume;
  const seVolume = clampNumber(value.seVolume, 0, 100);
  if (seVolume !== undefined) settings.seVolume = seVolume;
  if (typeof value.skipReadOnly === 'boolean') settings.skipReadOnly = value.skipReadOnly;
  return settings;
}

function normalizeBoolean(value) {
  return value === true;
}

export function normalizeSaveSummary(value) {
  const summary = isPlainObject(value) ? value : {};
  return {
    itemId: typeof summary.itemId === 'string' ? summary.itemId : '',
    chapter: typeof summary.chapter === 'string' ? summary.chapter : '',
    chapterTitle: typeof summary.chapterTitle === 'string' ? summary.chapterTitle : '',
    chapterLabel: typeof summary.chapterLabel === 'string' ? summary.chapterLabel : '',
    linePreview: typeof summary.linePreview === 'string' ? summary.linePreview : '',
    affectionTarget: typeof summary.affectionTarget === 'string' ? summary.affectionTarget : '',
    affectionValue: Number.isFinite(Number(summary.affectionValue)) ? Number(summary.affectionValue) : 0,
    affectionLabel: typeof summary.affectionLabel === 'string' ? summary.affectionLabel : '',
    routeId: typeof summary.routeId === 'string' ? summary.routeId : '',
    routeName: typeof summary.routeName === 'string' ? summary.routeName : '',
    routeLabel: typeof summary.routeLabel === 'string' ? summary.routeLabel : '',
    routeLocked: normalizeBoolean(summary.routeLocked),
    routeProgressText: typeof summary.routeProgressText === 'string' ? summary.routeProgressText : '',
    latestMemoryLabel: typeof summary.latestMemoryLabel === 'string' ? summary.latestMemoryLabel : '',
    thumbnail: typeof summary.thumbnail === 'string' ? summary.thumbnail : ''
  };
}

function findScenarioIndex(scenario, itemId) {
  return scenario.findIndex((item) => item.id === itemId);
}

export function normalizeSavePayload(payload, { scenario, fallbackIndex = 0, routeConfig, calendarEventIds } = {}) {
  const items = Array.isArray(scenario) ? scenario : [];
  const safeFallback = items[fallbackIndex] ? fallbackIndex : 0;
  const byItemId = findScenarioIndex(items, payload?.itemId);
  const rawIndex = Number.isInteger(payload?.index) ? payload.index : -1;
  const byIndex = rawIndex >= 0 && rawIndex < items.length ? rawIndex : -1;
  const index = byItemId >= 0 ? byItemId : byIndex >= 0 ? byIndex : safeFallback;
  const item = items[index] || items[0] || { id: '', type: 'dialogue' };

  const payloadVersion = Number(payload?.version || 1);
  const legacyScale = payloadVersion < SAVE_VERSION;

  return {
    version: SAVE_VERSION,
    slot: typeof payload?.slot === 'string' ? payload.slot : '',
    index,
    itemId: item.id,
    mode: typeof payload?.mode === 'string' ? payload.mode : item.type || 'dialogue',
    title: typeof payload?.title === 'string' ? payload.title : item.place || item.name || '스토리',
    line: typeof payload?.line === 'string' ? payload.line : '',
    summary: normalizeSaveSummary(payload?.summary),
    gameState: normalizeGameState(payload?.gameState, routeConfig, { legacyScale, scenario, calendarEventIds }),
    settings: normalizeSettings(payload?.settings),
    directorState: isDirectorState(payload?.directorState) ? payload.directorState : null,
    log: Array.isArray(payload?.log) ? payload.log : [],
    ending: payload?.ending || null,
    savedAt: typeof payload?.savedAt === 'string' ? payload.savedAt : new Date().toISOString()
  };
}

export function createSavePayload({ index, itemId, mode, title, line, summary, gameState, settings, directorState, log, ending, routeConfig, scenario, calendarEventIds }) {
  return {
    version: SAVE_VERSION,
    index,
    itemId,
    mode: mode || 'dialogue',
    title: title || '스토리',
    line: line || '',
    summary: normalizeSaveSummary(summary),
    gameState: normalizeGameState(gameState, routeConfig, { scenario, calendarEventIds }),
    settings,
    directorState,
    log: Array.isArray(log) ? log : [],
    ending: ending || null,
    savedAt: new Date().toISOString()
  };
}
