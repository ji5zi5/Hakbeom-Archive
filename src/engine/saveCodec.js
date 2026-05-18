export const SAVE_VERSION = 1;

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

function clampAffection(target, value, routeConfig) {
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

function normalizeAffection(value, routeConfig) {
  if (!isPlainObject(value)) return {};
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, score]) => Number.isFinite(Number(score)))
      .map(([target, score]) => [target, clampAffection(target, Number(score), routeConfig)])
  );
}

function normalizeGameState(value, routeConfig) {
  const state = isPlainObject(value) ? value : {};
  return {
    affection: normalizeAffection(state.affection, routeConfig),
    flags: uniqueList(state.flags),
    choices: Array.isArray(state.choices) ? state.choices.filter(isPlainObject) : [],
    endings: uniqueList(state.endings),
    readLines: uniqueList(state.readLines),
    unlockedGallery: uniqueList(state.unlockedGallery),
    unlockedRecollections: uniqueList(state.unlockedRecollections)
  };
}

function normalizeSettings(value) {
  if (!isPlainObject(value)) return {};
  const settings = {};
  if (Number.isFinite(value.textSpeedMs)) settings.textSpeedMs = value.textSpeedMs;
  if (Number.isFinite(value.autoDelayMs)) settings.autoDelayMs = value.autoDelayMs;
  if (Number.isFinite(value.bgmVolume)) settings.bgmVolume = value.bgmVolume;
  if (Number.isFinite(value.seVolume)) settings.seVolume = value.seVolume;
  if (typeof value.skipReadOnly === 'boolean') settings.skipReadOnly = value.skipReadOnly;
  return settings;
}

function findScenarioIndex(scenario, itemId) {
  return scenario.findIndex((item) => item.id === itemId);
}

export function normalizeSavePayload(payload, { scenario, fallbackIndex = 0, routeConfig } = {}) {
  const items = Array.isArray(scenario) ? scenario : [];
  const safeFallback = items[fallbackIndex] ? fallbackIndex : 0;
  const byItemId = findScenarioIndex(items, payload?.itemId);
  const rawIndex = Number.isInteger(payload?.index) ? payload.index : -1;
  const byIndex = rawIndex >= 0 && rawIndex < items.length ? rawIndex : -1;
  const index = byItemId >= 0 ? byItemId : byIndex >= 0 ? byIndex : safeFallback;
  const item = items[index] || items[0] || { id: '', type: 'dialogue' };

  return {
    version: SAVE_VERSION,
    slot: typeof payload?.slot === 'string' ? payload.slot : '',
    index,
    itemId: item.id,
    mode: typeof payload?.mode === 'string' ? payload.mode : item.type || 'dialogue',
    title: typeof payload?.title === 'string' ? payload.title : item.place || item.name || '스토리',
    line: typeof payload?.line === 'string' ? payload.line : '',
    gameState: normalizeGameState(payload?.gameState, routeConfig),
    settings: normalizeSettings(payload?.settings),
    directorState: isDirectorState(payload?.directorState) ? payload.directorState : null,
    log: Array.isArray(payload?.log) ? payload.log : [],
    ending: payload?.ending || null,
    savedAt: typeof payload?.savedAt === 'string' ? payload.savedAt : new Date().toISOString()
  };
}

export function createSavePayload({ index, itemId, mode, title, line, gameState, settings, directorState, log, ending }) {
  return {
    version: SAVE_VERSION,
    index,
    itemId,
    mode: mode || 'dialogue',
    title: title || '스토리',
    line: line || '',
    gameState,
    settings,
    directorState,
    log: Array.isArray(log) ? log : [],
    ending: ending || null,
    savedAt: new Date().toISOString()
  };
}
