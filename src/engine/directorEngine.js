import { safeText } from '../utils/vnText.js';
import { applyAudioDirective, createAudioState } from './audioEngine.js';

function normalizeDirectives(item) {
  return Array.isArray(item?.directives) ? item.directives : [];
}

export function safeClassName(value) {
  return safeText(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'default';
}

export function normalizeDirectiveType(directive) {
  return safeText(directive?.type || directive?.cmd || directive?.command)
    .toLowerCase()
    .replace(/_/g, '-');
}

export function makeSoundKey(soundCues) {
  return soundCues
    .map((cue) => safeText(typeof cue === 'string' ? cue : cue?.src || cue?.cue || cue?.id))
    .filter(Boolean)
    .join('|');
}

export function resolveSoundCue(cue, sounds) {
  if (!cue) return '';
  if (typeof cue === 'string') {
    return sounds?.[cue] || (cue.includes('/') || cue.includes('.') ? cue : '');
  }
  const key = cue.src || cue.cue || cue.id || cue.name;
  return cue.src || sounds?.[key] || (safeText(key).includes('/') || safeText(key).includes('.') ? key : '');
}

export function createDirectorState(defaults = {}) {
  const fallbackCharacter = defaults.characterSrc
    ? [{ id: 'fallback', src: defaults.characterSrc, ...(defaults.fallbackCharacter || {}) }]
    : [];

  return {
    backgroundSrc: defaults.backgroundSrc,
    backgroundTransition: '',
    characters: fallbackCharacter,
    overlays: [],
    soundCues: [],
    soundKey: '',
    audio: createAudioState(defaults.audio)
  };
}

export function clearEphemeralCharacterState(character) {
  return {
    ...character,
    effect: undefined,
    motion: ''
  };
}

export function getMoodOverlay(mood) {
  const moodOverlays = {
    rain: { id: 'mood-rain', kind: 'rain', color: '#2b81a8', opacity: 0.10, transition: 'fade-in' },
    warm: { id: 'mood-warm', kind: 'warm', color: '#ffd876', opacity: 0.08, transition: 'fade-in' },
    tense: { id: 'mood-tense', kind: 'tense', color: '#1d2940', opacity: 0.12, transition: 'fade-in' },
    confession: { id: 'mood-confession', kind: 'confession', color: '#ff9bc0', opacity: 0.10, transition: 'fade-in' }
  };
  const overlay = moodOverlays[safeClassName(mood)];
  return overlay ? addDirectorOverlay({ overlays: [] }, overlay).overlays[0] : null;
}

export function applyDirectorItem(state, item, defaults = {}) {
  let next = {
    ...state,
    backgroundSrc: item?.backgroundSrc || state.backgroundSrc || defaults.backgroundSrc,
    backgroundTransition: '',
    characters: (state.characters || [])
      .filter((character) => !character.leaving)
      .map(clearEphemeralCharacterState),
    overlays: [],
    soundCues: [],
    audio: createAudioState(state.audio)
  };

  for (const directive of normalizeDirectives(item)) {
    const type = normalizeDirectiveType(directive);

    if (type === 'bcg' || type === 'bg' || type === 'bg_cg') {
      next = {
        ...next,
        backgroundSrc: directive.src || directive.backgroundSrc || directive.id || next.backgroundSrc,
        backgroundTransition: directive.transition || directive.motion || 'fade-in'
      };
      continue;
    }

    if (type === 'scg') {
      next = applyScgDirective(next, directive, defaults);
      continue;
    }

    if (type === 'se') {
      next.soundCues = [...next.soundCues, directive.src || directive.cue || directive.id || directive.name || directive];
      continue;
    }

    if (type === 'bgm' || type === 'music' || type === 'ambient' || type === 'ambience' || type === 'stop-bgm' || type === 'stop-ambient') {
      next = { ...next, audio: applyAudioDirective(next.audio, directive, defaults.sounds || {}) };
      continue;
    }

    if (type === 'e') {
      next = applyEffectDirective(next, directive);
      continue;
    }

    if (type === 'overlay' || type === 'mood') {
      next = addDirectorOverlay(next, directive);
    }
  }

  const moodOverlay = getMoodOverlay(item?.mood);
  if (moodOverlay) {
    next = addDirectorOverlay(next, moodOverlay);
  }

  if (item?.effect) {
    next = applyEffectDirective(next, item.effect);
  }

  next.soundKey = `${item?.id || ''}:${makeSoundKey(next.soundCues)}`;
  return next;
}

function applyScgDirective(state, directive, defaults = {}) {
  const id = directive.id || directive.character || directive.target;
  if (!id) return state;

  const action = safeText(directive.action || directive.mode || 'update').toLowerCase();
  const existing = (state.characters || []).find((character) => character.id === id);

  if (action === 'delete' || action === 'remove' || action === 'exit') {
    if (!existing) return state;
    return {
      ...state,
      characters: state.characters.map((character) => (
        character.id === id
          ? {
              ...character,
              action: 'delete',
              leaving: true,
              transition: directive.transition || 'fade-out',
              motion: directive.motion || character.motion || ''
            }
          : character
      ))
    };
  }

  const transition = directive.transition || (action === 'enter' ? 'fade-in' : existing?.transition || '');
  const motion = directive.motion || transitionToMotion(transition) || (action === 'move' ? 'straight' : existing?.motion || '');
  const nextCharacter = {
    ...(existing || {}),
    id,
    name: directive.name || existing?.name || safeText(id),
    src: directive.src || directive.image || directive.asset || existing?.src || defaults.characterSrc || '',
    action,
    position: directive.position ?? directive.pos ?? existing?.position ?? 3,
    x: directive.x ?? existing?.x,
    y: directive.y ?? existing?.y,
    width: directive.width ?? existing?.width,
    height: directive.height ?? existing?.height,
    expression: directive.expression ?? existing?.expression ?? 'normal',
    transition,
    motion,
    opacity: directive.opacity ?? existing?.opacity ?? 1,
    effect: directive.effect ?? existing?.effect,
    leaving: false
  };

  const characters = existing
    ? state.characters.map((character) => (character.id === id ? nextCharacter : character))
    : [...(state.characters || []), nextCharacter];

  return { ...state, characters };
}

function transitionToMotion(transition) {
  if (transition === 'enter-left') return 'enter-left';
  if (transition === 'enter-right') return 'enter-right';
  if (transition === 'zoom') return 'zoom';
  if (transition === 'straight') return 'straight';
  return '';
}

function applyEffectDirective(state, directive) {
  const target = directive.target || directive.id || directive.character;
  let next = state;

  if (target) {
    next = {
      ...next,
      characters: (state.characters || []).map((character) => (
        character.id === target
          ? {
              ...character,
              effect: directive.effect || directive.name || character.effect,
              motion: directive.motion || character.motion
            }
          : character
      ))
    };
  }

  if (directive.overlay || directive.flash || directive.color) {
    next = addDirectorOverlay(next, directive.overlay ? { ...directive.overlay, transition: directive.transition } : directive);
  }

  if (directive.se || directive.cue || directive.src) {
    next = {
      ...next,
      soundCues: [...(next.soundCues || []), directive.se || directive.cue || directive.src]
    };
  }

  return next;
}

function addDirectorOverlay(state, directive) {
  const overlays = state.overlays || [];
  const overlay = {
    id: directive.id || `${directive.color || directive.kind || 'overlay'}-${overlays.length}`,
    color: directive.color || (directive.kind === 'white' ? '#fff' : '#000'),
    opacity: directive.opacity ?? (directive.flash ? 0.55 : 0.28),
    transition: directive.transition || (directive.flash ? 'flash' : 'fade-in')
  };

  return { ...state, overlays: [...overlays, overlay] };
}
