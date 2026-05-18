import { safeText } from '../utils/vnText.js';

function normalizeAudioDirectiveType(directive) {
  return safeText(directive?.type || directive?.cmd || directive?.command)
    .trim()
    .toLowerCase()
    .replace(/_/g, '-');
}

function safeAudioId(value, fallback = 'audio') {
  return safeText(value || fallback)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || fallback;
}

export function clampVolumePercent(value, fallback = 100) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.min(100, Math.max(0, Math.round(numeric)));
}

export function createAudioState(defaults = {}) {
  return {
    bgm: defaults.bgm || null,
    ambient: Array.isArray(defaults.ambient) ? defaults.ambient : [],
    key: defaults.key || 'bgm:|ambient:'
  };
}

export function resolveAudioCue(cue, sounds = {}) {
  const raw = typeof cue === 'string'
    ? cue
    : cue?.src || cue?.cue || cue?.id || cue?.name;
  const key = safeText(raw);
  if (!key) return '';
  return sounds?.[key] || (key.includes('/') || key.includes('.') ? key : '');
}

function buildAudioKey(state) {
  const bgmId = state.bgm?.id || '';
  const ambientIds = (state.ambient || []).map((cue) => cue.id || cue.src).join(',');
  return `bgm:${bgmId}|ambient:${ambientIds}`;
}

function normalizeLoopCue(directive, sounds, fallbackId) {
  const id = safeAudioId(directive.id || directive.cue || directive.name || fallbackId, fallbackId);
  const src = resolveAudioCue(directive, sounds);
  if (!src) return null;
  return {
    id,
    src,
    fadeMs: Number.isFinite(Number(directive.fadeMs)) ? Math.max(0, Number(directive.fadeMs)) : 600,
    loop: directive.loop !== false,
    volume: clampVolumePercent(directive.volume, 100)
  };
}

export function applyAudioDirective(state, directive, sounds = {}) {
  const type = normalizeAudioDirectiveType(directive);
  let next = createAudioState(state);

  if (type === 'bgm' || type === 'music') {
    const bgm = normalizeLoopCue(directive, sounds, directive.cue || directive.id || 'bgm');
    next = { ...next, bgm };
  }

  if (type === 'ambient' || type === 'ambience') {
    const ambient = normalizeLoopCue(directive, sounds, directive.cue || directive.id || 'ambient');
    next = ambient
      ? { ...next, ambient: [...next.ambient.filter((cue) => cue.id !== ambient.id), ambient] }
      : next;
  }

  if (type === 'stop-bgm') {
    next = { ...next, bgm: null };
  }

  if (type === 'stop-ambient') {
    const targetId = safeAudioId(directive.id || directive.cue || directive.name || '', '');
    next = targetId
      ? { ...next, ambient: next.ambient.filter((cue) => cue.id !== targetId) }
      : { ...next, ambient: [] };
  }

  return { ...next, key: buildAudioKey(next) };
}

export function applyAudioItem(state, item, sounds = {}) {
  return (Array.isArray(item?.directives) ? item.directives : [])
    .reduce((current, directive) => applyAudioDirective(current, directive, sounds), createAudioState(state));
}
