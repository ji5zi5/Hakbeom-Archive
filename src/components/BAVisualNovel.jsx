import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { resolveCharacterAsset } from '../data/characterProfiles.js';
import { routeConfig } from '../data/routeConfig.js';
import { getChapterInfo } from '../engine/chapterEngine.js';
import { applyDirectorItem, resolveSoundCue, safeClassName } from '../engine/directorEngine.js';
import { createSavePayload, normalizeSavePayload } from '../engine/saveCodec.js';
import { buildSaveSummary } from '../engine/saveSummary.js';
import { normalizePhoneMessages, normalizePhoneReplies } from '../engine/phoneEngine.js';
import {
  findScenarioIndexById,
  replayDirectorState,
  resolveEndingRoute,
  resolveNextIndex,
  resolveSkipTargetIndex
} from '../engine/vnEngine.js';
import { createKeyboardActivationHandler } from '../utils/accessibility.js';
import { safeText, wrapDialogueText } from '../utils/vnText.js';
import { applyRouteRewards, createInitialGameState, markLineRead, unlockGalleryItem, unlockRecollectionItem } from '../utils/vnState.js';

const STAGE = { width: 1129, height: 524 };

const NAV_BUTTON_PATH =
  'M10.0 0.4H116.0C117.5 0.4 118.3 1.9 118.0 3.7L112.2 31.9C111.8 34.2 109.8 35.8 107.1 35.8H3.9C1.4 35.8 -0.4 33.7 0.1 31.2L5.8 4.8C6.4 1.8 8.0 0.4 10.0 0.4Z';

const MENU_PANEL_PATH =
  'M14 0H241C246 0 249 3 248 8L241 61C240 65 236 68 232 68H6C2 68 -1 65 0 61L8 8C9 3 9 0 14 0Z';

const MINI_BUTTON_PATH =
  'M8 0H54C59 0 62 4 61 9L56 38C55 42 51 44 47 44H6C2 44 -1 41 0 37L5 9C6 4 4 0 8 0Z';

const CHOICE_ROW_LAYOUTS = {
  1: [230],
  2: [191, 269],
  3: [152, 230, 308]
};
const TYPE_INTERVAL_MS = 22;
const AUTO_DELAY_MS = 1250;
const EMPTY_CHARACTER = {};
const SAVE_STORAGE_KEY = 'hakbeomlove.saveSlots.v1';
const SETTINGS_STORAGE_KEY = 'hakbeomlove.settings.v1';
const AUTO_SAVE_SLOT = 'auto';
const QUICK_SAVE_SLOT = 'quick';
const MANUAL_SAVE_SLOTS = ['slot-1', 'slot-2', 'slot-3'];
const DEFAULT_SETTINGS = {
  textSpeedMs: TYPE_INTERVAL_MS,
  autoDelayMs: AUTO_DELAY_MS,
  bgmVolume: 70,
  seVolume: 80,
  skipReadOnly: true
};

const POSITION_PRESETS = {
  1: { x: -54, y: 14, width: 390, height: 520 },
  2: { x: 150, y: 8, width: 390, height: 520 },
  3: { x: 363, y: 2, width: 390, height: 520 },
  4: { x: 568, y: 8, width: 390, height: 520 },
  5: { x: 772, y: 14, width: 390, height: 520 }
};

const EFFECT_LABELS = {
  exclamation: '!',
  question: '?',
  heart: '♥',
  anger: '‼',
  sweat: '汗',
  chatter: '♪',
  ellipsis: '…',
  blush: '♡',
  sigh: '〰'
};

function firstIndexOfItem(scenario, id, mode) {
  const idTarget = id ? scenario.findIndex((item) => item.id === id) : -1;
  if (idTarget >= 0) return idTarget;

  const found = scenario.findIndex((item) => item.type === mode);
  return found >= 0 ? found : 0;
}

function getChoiceRows(choices) {
  const count = clamp(Array.isArray(choices) ? choices.length : 0, 1, 3);
  return CHOICE_ROW_LAYOUTS[count] || CHOICE_ROW_LAYOUTS[3];
}


function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function isInteractiveKeyTarget(target) {
  return Boolean(target?.closest?.('button, input, select, textarea, a, [role=\"button\"], [role=\"menuitem\"]'));
}

function getItemChoices(item) {
  if (!item) return [];
  return item.type === 'phone' ? (item.replies || []) : (item.choices || []);
}

function resolveItemText(item, gameState) {
  if (!item) return '';
  const text = ['dialogue', 'banner', 'phone'].includes(item.type) ? safeText(item.text) : '';
  const variants = Array.isArray(item.variants) ? item.variants : [];
  const flags = new Set(gameState?.flags || []);
  const matchedVariant = variants.find((candidate) => (
    !candidate.default && (candidate.requiredFlags || candidate.flags || []).every((flag) => flags.has(flag))
  ));
  const defaultVariant = variants.find((candidate) => candidate.default);
  return safeText(matchedVariant?.text ?? defaultVariant?.text ?? text);
}

function getItemText(item, gameState) {
  return resolveItemText(item, gameState);
}

function buildLogLine(item, gameState) {
  if (!item) return '';
  if (item.type === 'dialogue') return `${item.name || '???'}${item.role ? ` / ${item.role}` : ''}: ${resolveItemText(item, gameState)}`;
  if (item.type === 'banner') return `[연출] ${resolveItemText(item, gameState)}`;
  if (item.type === 'phone') return `[메시지] ${item.name || '???'}: ${resolveItemText(item, gameState)}`;
  if (item.type === 'choice') return `[선택지] ${getItemChoices(item).join(' / ')}`;
  return '';
}

function playAudio(src, volume = 0.65) {
  if (!src) return;
  try {
    const audio = new Audio(src);
    audio.volume = Math.max(0, Math.min(1, volume));
    audio.play().catch(() => undefined);
  } catch {
    // Audio is optional. Missing files should not break the VN engine.
  }
}

function stopAudio(audio) {
  if (!audio) return;
  audio.pause();
  audio.src = '';
}

function playLoopAudio(src, volume = 0.6, existingAudio = null) {
  if (!src) {
    stopAudio(existingAudio);
    return null;
  }

  try {
    const audio = existingAudio || new Audio();
    const resolvedSrc = new URL(src, window.location.href).href;
    if (audio.src !== resolvedSrc) audio.src = src;
    audio.loop = true;
    audio.volume = Math.max(0, Math.min(1, volume));
    audio.play?.().catch(() => undefined);
    return audio;
  } catch {
    return existingAudio;
  }
}

function applyRouteUnlocks(gameState) {
  const flags = new Set(gameState.flags || []);
  let next = gameState;

  for (const galleryItem of routeConfig.galleryItems || []) {
    if (galleryItem.unlockFlag && flags.has(galleryItem.unlockFlag)) {
      next = unlockGalleryItem(next, galleryItem.id);
    }
  }

  for (const recollectionItem of routeConfig.recollectionItems || []) {
    if (recollectionItem.unlockFlag && flags.has(recollectionItem.unlockFlag)) {
      next = unlockRecollectionItem(next, recollectionItem.id);
    }
  }

  return next;
}

function applyReadUnlocks(gameState, itemId) {
  let next = gameState;
  for (const recollectionItem of routeConfig.recollectionItems || []) {
    if (recollectionItem.startId === itemId) {
      next = unlockRecollectionItem(next, recollectionItem.id);
    }
  }
  return next;
}

function getStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function readJsonStorage(key, fallback) {
  try {
    const storage = getStorage();
    if (!storage) return fallback;
    const raw = storage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJsonStorage(key, value) {
  try {
    const storage = getStorage();
    if (!storage) return false;
    storage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function readSaveSlots() {
  return readJsonStorage(SAVE_STORAGE_KEY, {});
}

function persistSaveSlot(slot, payload) {
  const slots = readSaveSlots();
  const nextSlots = {
    ...slots,
    [slot]: {
      ...payload,
      slot,
      savedAt: new Date().toISOString()
    }
  };
  writeJsonStorage(SAVE_STORAGE_KEY, nextSlots);
  return nextSlots[slot];
}

function buildSavePayload({ index, item, gameState, ending, settings, directorState, log }) {
  return createSavePayload({
    index,
    itemId: item?.id || '',
    mode: item?.type || 'dialogue',
    title: item?.place || item?.name || '스토리',
    line: getItemText(item, gameState) || getItemChoices(item).join(' / ') || '',
    summary: buildSaveSummary({
      item,
      gameState,
      routeConfig,
      backgroundSrc: directorState?.backgroundSrc || ''
    }),
    gameState,
    ending,
    settings,
    directorState,
    log
  });
}

function readSettings() {
  return {
    ...DEFAULT_SETTINGS,
    ...readJsonStorage(SETTINGS_STORAGE_KEY, {})
  };
}

function persistSettings(settings) {
  writeJsonStorage(SETTINGS_STORAGE_KEY, settings);
}

function findLatestSave(slots) {
  return Object.values(slots || {})
    .filter(Boolean)
    .sort((a, b) => safeText(b.savedAt).localeCompare(safeText(a.savedAt)))[0] || null;
}

export function BAVisualNovel({
  scenario,
  episodeInfo = {},
  initialMode = 'dialogue',
  initialItemId = '',
  initialScreen = 'game',
  initialAuto = false,
  backgroundSrc = '/assets/bg/school-rain-hallway.png',
  characterSrc = '',
  character = EMPTY_CHARACTER,
  sounds = {},
  showHud = false,
  onChoice,
  onSkip
}) {
  const initialIndex = useMemo(() => firstIndexOfItem(scenario, initialItemId, initialMode), [scenario, initialItemId, initialMode]);
  const directorDefaults = useMemo(() => ({
    backgroundSrc,
    characterSrc,
    fallbackCharacter: character,
    endingRules: episodeInfo.endingRules || [],
    routeConfig,
    sounds
  }), [backgroundSrc, characterSrc, character, episodeInfo.endingRules, sounds]);
  const [screen, setScreen] = useState(initialScreen);
  const [index, setIndex] = useState(initialIndex);
  const [directorState, setDirectorState] = useState(() => replayDirectorState(scenario, initialIndex, directorDefaults));
  const [gameState, setGameState] = useState(createInitialGameState);
  const [saveSlots, setSaveSlots] = useState(() => readSaveSlots());
  const [saveLoadMode, setSaveLoadMode] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [settings, setSettings] = useState(() => readSettings());
  const [ending, setEnding] = useState(null);
  const [auto, setAuto] = useState(initialAuto);
  const [menuOpen, setMenuOpen] = useState(false);
  const [backlogOpen, setBacklogOpen] = useState(false);
  const [skipOpen, setSkipOpen] = useState(false);
  const [uiHidden, setUiHidden] = useState(false);
  const [log, setLog] = useState([]);
  const [roleX, setRoleX] = useState(205);
  const [visibleCount, setVisibleCount] = useState(0);

  const speakerNameRef = useRef(null);
  const autoTimerRef = useRef(null);
  const typeTimerRef = useRef(null);
  const loggedKeyRef = useRef('');
  const bgmAudioRef = useRef(null);
  const ambientAudioRefs = useRef(new Map());

  const item = scenario[index] ?? scenario[0];
  const mode = item?.type ?? 'dialogue';
  const sceneBackgroundSrc = directorState.backgroundSrc || item?.backgroundSrc || backgroundSrc;
  const sceneCharacters = directorState.characters;
  const sceneOverlays = directorState.overlays;
  const fullText = resolveItemText(item, gameState);
  const previousItem = scenario[index - 1] || null;
  const chapterInfo = useMemo(
    () => getChapterInfo(item, { previousItem, fallbackTitle: episodeInfo.sectionTitle || episodeInfo.title }),
    [episodeInfo.sectionTitle, episodeInfo.title, item, previousItem]
  );
  const typedText = mode === 'dialogue' || mode === 'banner'
    ? fullText.slice(0, visibleCount)
    : fullText;
  const typing = fullText.length > 0 && visibleCount < fullText.length && (mode === 'dialogue' || mode === 'banner');

  const pushLog = useCallback((line) => {
    setLog((prev) => {
      if (!line || prev[prev.length - 1] === line) return prev;
      const next = [...prev, line];
      return next.length > 120 ? next.slice(next.length - 120) : next;
    });
  }, []);

  const finishTyping = useCallback(() => {
    window.clearInterval(typeTimerRef.current);
    setVisibleCount(fullText.length);
  }, [fullText.length]);

  const resetToIndex = useCallback((nextIndex, nextGameState = createInitialGameState(), nextEnding = null) => {
    const safeIndex = clamp(nextIndex, 0, Math.max(0, scenario.length - 1));
    const startingItemId = scenario[safeIndex]?.id;
    const stateForIndex = startingItemId
      ? applyReadUnlocks(markLineRead(nextGameState, startingItemId), startingItemId)
      : nextGameState;
    setGameState(stateForIndex);
    setEnding(nextEnding);
    setDirectorState(replayDirectorState(scenario, safeIndex, directorDefaults));
    setIndex(safeIndex);
    setScreen('game');
  }, [directorDefaults, scenario]);

  const jumpToIndex = useCallback((nextIndex) => {
    if (nextIndex < 0 || nextIndex >= scenario.length) return;
    setDirectorState((current) => applyDirectorItem(current, scenario[nextIndex], directorDefaults));
    setIndex(nextIndex);
  }, [directorDefaults, scenario]);

  const startNewGame = useCallback(() => {
    resetToIndex(initialIndex);
    setMenuOpen(false);
    setBacklogOpen(false);
    setSkipOpen(false);
    setSaveLoadMode(null);
    setSettingsOpen(false);
    setGalleryOpen(false);
    setLog([]);
    setRewardFeedback(null);
  }, [initialIndex, resetToIndex]);

  const saveGame = useCallback((slot = QUICK_SAVE_SLOT) => {
    const saved = persistSaveSlot(slot, buildSavePayload({
      index,
      item,
      gameState,
      ending,
      settings,
      directorState,
      log
    }));
    setSaveSlots(readSaveSlots());
    return saved;
  }, [directorState, ending, gameState, index, item, log, settings]);

  const loadGame = useCallback((payloadOrSlot) => {
    const slots = readSaveSlots();
    const payload = typeof payloadOrSlot === 'string' ? slots[payloadOrSlot] : payloadOrSlot;
    if (!payload) return false;
    const safePayload = normalizeSavePayload(payload, { scenario, fallbackIndex: initialIndex, routeConfig });
    const safeIndex = safePayload.index;
    const safeGameState = { ...createInitialGameState(), ...safePayload.gameState };
    setGameState(safeGameState);
    setEnding(safePayload.ending || null);
    setSettings({ ...DEFAULT_SETTINGS, ...settings, ...safePayload.settings });
    setDirectorState(safePayload.directorState || replayDirectorState(scenario, safeIndex, directorDefaults));
    setIndex(safeIndex);
    setLog(safePayload.log);
    setScreen('game');
    setSaveLoadMode(null);
    setSettingsOpen(false);
    setGalleryOpen(false);
    setRewardFeedback(null);
    return true;
  }, [directorDefaults, initialIndex, scenario, settings]);

  const continueLatest = useCallback(() => {
    const latest = findLatestSave(readSaveSlots());
    if (latest) {
      loadGame(latest);
      return;
    }
    startNewGame();
  }, [loadGame, startNewGame]);

  const updateSettings = useCallback((patch) => {
    setSettings((current) => {
      const nextSettings = { ...current, ...patch };
      persistSettings(nextSettings);
      return nextSettings;
    });
  }, []);

  const goNextRaw = useCallback(() => {
    setMenuOpen(false);
    const currentItem = scenario[index];
    if (currentItem?.type === 'choice' || currentItem?.type === 'phone') return;
    const targetIndex = resolveNextIndex({
      scenario,
      index,
      currentItem,
      ending,
      gameState,
      endingRules: episodeInfo.endingRules || []
    });
    if (targetIndex < 0) return;
    jumpToIndex(targetIndex);
  }, [ending, episodeInfo.endingRules, gameState, index, jumpToIndex, scenario]);

  const next = useCallback(() => {
    if (screen !== 'game' || saveLoadMode || settingsOpen || galleryOpen || skipOpen || backlogOpen) return;
    if (uiHidden) {
      setUiHidden(false);
      return;
    }
    if (typing) {
      finishTyping();
      return;
    }
    goNextRaw();
  }, [backlogOpen, finishTyping, galleryOpen, goNextRaw, saveLoadMode, screen, settingsOpen, skipOpen, typing, uiHidden]);

  const setMode = useCallback((nextMode) => {
    setMenuOpen(false);
    setUiHidden(false);
    const targetIndex = firstIndexOfItem(scenario, '', nextMode);
    setDirectorState(replayDirectorState(scenario, targetIndex, directorDefaults));
    setIndex(targetIndex);
  }, [directorDefaults, scenario]);

  const choose = useCallback((choiceIndex) => {
    const current = scenario[index];
    if (current?.type !== 'choice' && current?.type !== 'phone') return;
    const options = getItemChoices(current);
    const value = options[choiceIndex];
    if (!value) return;
    playAudio(sounds.choice || sounds.click, settings.seVolume / 100);
    pushLog(`${current.type === 'phone' ? '답장' : '선택'}: ${value}`);
    onChoice?.({ choiceIndex, value, item: current });
    setMenuOpen(false);

    const targetId = current.next?.[choiceIndex] || current.choiceNext?.[choiceIndex];
    const targetIndex = targetId ? scenario.findIndex((line) => line.id === targetId) : -1;
    setGameState((previous) => applyRouteUnlocks(applyRouteRewards(previous, current, choiceIndex, routeConfig)));
    const fallbackIndex = index + 1 < scenario.length ? index + 1 : -1;
    const nextIndex = targetIndex >= 0 ? targetIndex : fallbackIndex;
    if (nextIndex >= 0) jumpToIndex(nextIndex);
  }, [index, jumpToIndex, onChoice, pushLog, scenario, settings.seVolume, sounds.choice, sounds.click]);

  const openMenu = useCallback((event) => {
    event?.stopPropagation?.();
    playAudio(sounds.click, settings.seVolume / 100);
    setMenuOpen((value) => !value);
    setBacklogOpen(false);
    setSkipOpen(false);
  }, [settings.seVolume, sounds.click]);

  const toggleAuto = useCallback((event) => {
    event?.stopPropagation?.();
    playAudio(sounds.click, settings.seVolume / 100);
    setAuto((value) => !value);
  }, [settings.seVolume, sounds.click]);

  const hideUi = useCallback((event) => {
    event?.stopPropagation?.();
    playAudio(sounds.click, settings.seVolume / 100);
    setMenuOpen(false);
    setUiHidden(true);
  }, [settings.seVolume, sounds.click]);

  const openBacklog = useCallback((event) => {
    event?.stopPropagation?.();
    playAudio(sounds.click, settings.seVolume / 100);
    setMenuOpen(false);
    setBacklogOpen(true);
  }, [settings.seVolume, sounds.click]);

  const openSkip = useCallback((event) => {
    event?.stopPropagation?.();
    playAudio(sounds.click, settings.seVolume / 100);
    setMenuOpen(false);
    setSkipOpen(true);
  }, [settings.seVolume, sounds.click]);

  const openGallery = useCallback((event) => {
    event?.stopPropagation?.();
    playAudio(sounds.click, settings.seVolume / 100);
    setMenuOpen(false);
    setBacklogOpen(false);
    setSkipOpen(false);
    setGalleryOpen(true);
  }, [settings.seVolume, sounds.click]);

  const closeModals = useCallback(() => {
    setBacklogOpen(false);
    setSkipOpen(false);
    setGalleryOpen(false);
  }, []);

  const confirmSkip = useCallback(() => {
    playAudio(sounds.confirm || sounds.click, settings.seVolume / 100);
    const { targetIndex, unread } = resolveSkipTargetIndex({
      scenario,
      index,
      item,
      episodeInfo,
      gameState,
      settings
    });
    pushLog(`[스킵] ${episodeInfo.title || '현재 이야기'} ${unread ? '읽지 않은 문장 앞에서 정지' : '요약 확인 후 이동'}: ${targetIndex + 1}번째 줄`);
    onSkip?.({ from: index, to: targetIndex, item, unread });
    setSkipOpen(false);
    setMenuOpen(false);
    jumpToIndex(targetIndex);
  }, [episodeInfo, gameState, index, item, jumpToIndex, onSkip, pushLog, scenario, settings, sounds.click, sounds.confirm]);

  useEffect(() => {
    setDirectorState(replayDirectorState(scenario, initialIndex, directorDefaults));
    setIndex(initialIndex);
  }, [directorDefaults, initialIndex, scenario]);

  useEffect(() => {
    if (screen !== 'game' || !item?.id) return;
    setGameState((current) => applyReadUnlocks(markLineRead(current, item.id), item.id));
  }, [item?.id, screen]);

  useEffect(() => {
    if (screen !== 'game' || !item?.id) return;
    const saved = persistSaveSlot(AUTO_SAVE_SLOT, buildSavePayload({
      index,
      item,
      gameState,
      ending,
      settings,
      directorState,
      log
    }));
    if (saved) setSaveSlots(readSaveSlots());
  }, [directorState, ending, gameState, index, item, log, screen, settings]);

  useEffect(() => {
    if (!item?.endingGate) return;
    const route = resolveEndingRoute(gameState, episodeInfo.endingRules || []);
    if (!route) return;
    setEnding((current) => (current?.id === route.id ? current : route));
    setGameState((current) => current.endings?.includes(route.id)
      ? current
      : { ...current, endings: [...(current.endings || []), route.id] });
  }, [episodeInfo.endingRules, gameState, item]);

  useEffect(() => {
    const line = buildLogLine(item, gameState);
    const key = `${index}:${item?.id || ''}:${line}`;
    if (loggedKeyRef.current === key) return;
    loggedKeyRef.current = key;
    pushLog(line);
  }, [gameState, index, item, pushLog]);

  useEffect(() => {
    window.clearInterval(typeTimerRef.current);
    const text = fullText;
    if (mode !== 'dialogue' && mode !== 'banner') {
      setVisibleCount(text.length);
      return undefined;
    }

    setVisibleCount(0);
    if (!text) return undefined;

    typeTimerRef.current = window.setInterval(() => {
      setVisibleCount((count) => {
        const nextCount = count + 1;
        if (nextCount >= text.length) {
          window.clearInterval(typeTimerRef.current);
          return text.length;
        }
        return nextCount;
      });
    }, settings.textSpeedMs || TYPE_INTERVAL_MS);

    return () => window.clearInterval(typeTimerRef.current);
  }, [fullText, index, mode, settings.textSpeedMs]);

  useEffect(() => {
    if (item?.se) playAudio(item.se, settings.seVolume / 100);
    directorState.soundCues
      .map((cue) => resolveSoundCue(cue, sounds))
      .filter(Boolean)
      .forEach((cue) => playAudio(cue, settings.seVolume / 100));
  }, [directorState.soundKey, item, settings.seVolume, sounds]);

  useEffect(() => {
    const audioState = directorState.audio || { bgm: null, ambient: [] };
    const bgmVolume = settings.bgmVolume / 100;
    const ambientVolume = Math.max(0, Math.min(1, bgmVolume * 0.72));

    bgmAudioRef.current = playLoopAudio(audioState.bgm?.src || '', bgmVolume, bgmAudioRef.current);

    const activeAmbientIds = new Set((audioState.ambient || []).map((cue) => cue.id));
    for (const cue of audioState.ambient || []) {
      const existing = ambientAudioRefs.current.get(cue.id) || null;
      const nextAudio = playLoopAudio(cue.src, ambientVolume * ((cue.volume ?? 100) / 100), existing);
      if (nextAudio) ambientAudioRefs.current.set(cue.id, nextAudio);
    }

    for (const [id, audio] of ambientAudioRefs.current.entries()) {
      if (!activeAmbientIds.has(id)) {
        stopAudio(audio);
        ambientAudioRefs.current.delete(id);
      }
    }
  }, [directorState.audio?.key, settings.bgmVolume]);

  useEffect(() => () => {
    stopAudio(bgmAudioRef.current);
    for (const audio of ambientAudioRefs.current.values()) stopAudio(audio);
  }, []);

  useLayoutEffect(() => {
    if (mode !== 'dialogue' || !speakerNameRef.current) return;
    let cancelled = false;
    const measure = () => {
      if (cancelled || !speakerNameRef.current) return;
      try {
        const box = speakerNameRef.current.getBBox();
        setRoleX(Math.round(box.x + box.width + 13));
      } catch {
        setRoleX(205);
      }
    };

    measure();
    requestAnimationFrame(measure);
    if (document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => undefined);
    }

    return () => {
      cancelled = true;
    };
  }, [item?.name, mode]);

  useEffect(() => {
    window.clearTimeout(autoTimerRef.current);
    if (!auto || mode === 'choice' || mode === 'phone' || typing || skipOpen || backlogOpen || uiHidden) return undefined;
    autoTimerRef.current = window.setTimeout(goNextRaw, settings.autoDelayMs || AUTO_DELAY_MS);
    return () => window.clearTimeout(autoTimerRef.current);
  }, [auto, backlogOpen, goNextRaw, index, mode, settings.autoDelayMs, skipOpen, typing, uiHidden]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setBacklogOpen(false);
        setSkipOpen(false);
        setGalleryOpen(false);
        setSaveLoadMode(null);
        setSettingsOpen(false);
        setUiHidden(false);
        return;
      }

      if (isInteractiveKeyTarget(event.target)) return;

      const gameplayReady = screen === 'game' && !saveLoadMode && !settingsOpen && !galleryOpen && !skipOpen && !backlogOpen;
      if (event.key === ' ' || event.key === 'Enter') {
        if (!gameplayReady) return;
        event.preventDefault();
        next();
        return;
      }

      if (!gameplayReady) return;

      if (event.key === 'a' || event.key === 'A') toggleAuto(event);
      if (event.key === 'm' || event.key === 'M') openMenu(event);
      if (event.key === 'h' || event.key === 'H') hideUi(event);
      if (event.key === 'l' || event.key === 'L') openBacklog(event);
      if (event.key === 's' || event.key === 'S') openSkip(event);
      if (event.key === 'g' || event.key === 'G') openGallery(event);
      if (event.key === 'F5') saveGame(QUICK_SAVE_SLOT);
      if (event.key === 'F9') loadGame(QUICK_SAVE_SLOT);
      if (event.key === '1') setMode('dialogue');
      if (event.key === '2') setMode('banner');
      if (event.key === '3') setMode('choice');
      if (event.key === '4') setMode('phone');
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [backlogOpen, galleryOpen, hideUi, loadGame, next, openBacklog, openGallery, openMenu, openSkip, saveGame, saveLoadMode, screen, setMode, settingsOpen, skipOpen, toggleAuto]);

  const handleSvgClick = useCallback((event) => {
    const target = event.target;
    if (target?.closest?.('.nav-button, .quick-menu, .choice-row, .phone-reply, .space-key-svg')) return;
    next();
  }, [next]);

  return (
    <main className="viewport">
      <section
        className="game"
        data-mode={mode}
        data-screen={screen}
        data-auto={auto ? 'on' : 'off'}
        data-menu={menuOpen ? 'open' : 'closed'}
        data-ui-hidden={uiHidden ? 'true' : 'false'}
      >
        <svg
          className="ba-svg"
          viewBox={`0 0 ${STAGE.width} ${STAGE.height}`}
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Blue Archive style visual novel UI"
          onClick={handleSvgClick}
        >
          <Defs />

          <DialogueScene
            visible={mode === 'dialogue'}
            uiHidden={uiHidden}
            backgroundSrc={sceneBackgroundSrc}
            characters={sceneCharacters}
            overlays={sceneOverlays}
            item={item}
            fullText={fullText}
            text={typedText}
            roleX={roleX}
            speakerNameRef={speakerNameRef}
            onNext={next}
          />

          <BannerScene
            visible={mode === 'banner'}
            uiHidden={uiHidden}
            backgroundSrc={sceneBackgroundSrc}
            characters={sceneCharacters}
            overlays={sceneOverlays}
            text={typedText}
          />

          <PhoneMessageScene
            visible={mode === 'phone'}
            uiHidden={uiHidden}
            backgroundSrc={sceneBackgroundSrc}
            characters={sceneCharacters}
            overlays={sceneOverlays}
            item={item}
            text={fullText}
            onChoose={choose}
          />

          <ChoiceScene
            visible={mode === 'choice'}
            uiHidden={uiHidden}
            backgroundSrc={sceneBackgroundSrc}
            characters={sceneCharacters}
            overlays={sceneOverlays}
            choices={item?.type === 'choice' ? getItemChoices(item) : []}
            onChoose={choose}
          />

          <PlaceTag visible={mode === 'dialogue' && !uiHidden && Boolean(item?.place)} text={item?.place || ''} />

          {!uiHidden && (
            <TopNav
              auto={auto}
              menuOpen={menuOpen}
              onAutoClick={toggleAuto}
              onMenuClick={openMenu}
              onHideClick={hideUi}
              onBacklogClick={openBacklog}
              onSkipClick={openSkip}
            />
          )}
        </svg>

        {uiHidden && (
          <button type="button" className="restore-ui" onClick={() => setUiHidden(false)}>
            UI 표시
          </button>
        )}

        <BacklogModal open={backlogOpen} log={log} onClose={closeModals} />

        <SkipSummaryModal
          open={skipOpen}
          episodeInfo={episodeInfo}
          item={item}
          onCancel={closeModals}
          onConfirm={confirmSkip}
        />

        {screen === 'game' && !uiHidden && (
          <div className="game-system-buttons" aria-label="시스템 메뉴">
            <button type="button" onClick={() => setSaveLoadMode('save')}>SAVE</button>
            <button type="button" onClick={() => setSaveLoadMode('load')}>LOAD</button>
            <button type="button" onClick={openGallery}>CG</button>
          </div>
        )}

        <TitleScreen
          open={screen === 'title'}
          canContinue={Boolean(findLatestSave(saveSlots))}
          onStart={startNewGame}
          onContinue={continueLatest}
          onLoad={() => setSaveLoadMode('load')}
          onGallery={openGallery}
          onConfig={() => setSettingsOpen(true)}
        />

        <SaveLoadModal
          mode={saveLoadMode}
          slots={saveSlots}
          onSave={(slot) => saveGame(slot)}
          onLoad={(slot) => loadGame(slot)}
          onClose={() => setSaveLoadMode(null)}
        />

        <ConfigModal
          open={settingsOpen}
          settings={settings}
          onChange={updateSettings}
          onClose={() => setSettingsOpen(false)}
        />

        <GalleryModal
          open={galleryOpen}
          gameState={gameState}
          onClose={() => setGalleryOpen(false)}
          onReplay={(startId) => {
            const targetIndex = findScenarioIndexById(scenario, startId);
            if (targetIndex >= 0) {
              setGalleryOpen(false);
              setBacklogOpen(false);
              setSkipOpen(false);
              setMenuOpen(false);
              setLog([]);
              setRewardFeedback(null);
              setDirectorState(replayDirectorState(scenario, targetIndex, directorDefaults));
              setIndex(targetIndex);
              setScreen('game');
            }
          }}
        />

        <ChapterCard info={chapterInfo} />
        <EndingToast ending={ending} />

        {showHud && (
          <div className="hud">
            1 Dialogue · 2 Banner · 3 Choice · A Auto · M Menu · H Hide · L Log · S Skip
          </div>
        )}
      </section>
    </main>
  );
}

function Defs() {
  return (
    <defs>
      <linearGradient id="dialogShadeA" x1="564.5" y1="244" x2="564.5" y2="524" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="0.4375" stopColor="#343943" stopOpacity="0.828108" />
        <stop offset="0.578125" stopColor="#232833" stopOpacity="0.915115" />
        <stop offset="1" stopColor="#121824" stopOpacity="0.87" />
      </linearGradient>

      <linearGradient id="dialogShadeB" x1="564.5" y1="265" x2="564.5" y2="524" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D9D9D9" />
        <stop offset="0.0001" stopColor="#D9D9D9" stopOpacity="0" />
        <stop offset="0.4375" stopColor="#343943" stopOpacity="0.828108" />
        <stop offset="0.578125" stopColor="#232833" stopOpacity="0.915115" />
        <stop offset="0.953125" stopColor="#121824" stopOpacity="0.87" />
      </linearGradient>

      <linearGradient id="panelWash" x1="209" y1="812" x2="971" y2="812" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BFD2DD" />
        <stop offset="0.09375" stopColor="#BFD2DD" stopOpacity="0.589474" />
        <stop offset="0.494792" stopColor="#BFD2DD" stopOpacity="0" />
        <stop offset="0.895833" stopColor="#BFD2DD" stopOpacity="0.639175" />
        <stop offset="1" stopColor="#BFD2DD" />
      </linearGradient>

      <linearGradient id="navWhiteFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFFFFF" />
        <stop offset="0.50" stopColor="#F7F9FC" />
        <stop offset="1" stopColor="#EAF0F6" />
      </linearGradient>

      <linearGradient id="autoOnFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFF174" />
        <stop offset="0.50" stopColor="#FFD842" />
        <stop offset="1" stopColor="#F1B900" />
      </linearGradient>

      <linearGradient id="menuDarkFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#314967" />
        <stop offset="1" stopColor="#263A54" />
      </linearGradient>

      <linearGradient id="menuPanelFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#F7FBFF" stopOpacity="0.92" />
        <stop offset="1" stopColor="#E9EEF2" stopOpacity="0.86" />
      </linearGradient>

      <filter id="buttonShadow" x="-16%" y="-25%" width="146%" height="170%">
        <feDropShadow dx="2.0" dy="2.8" stdDeviation="1.05" floodColor="#16304A" floodOpacity="0.32" />
      </filter>

      <filter id="menuPanelShadow" x="-15%" y="-20%" width="140%" height="155%">
        <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#071323" floodOpacity="0.26" />
        <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#16304A" floodOpacity="0.24" />
      </filter>

      <filter id="softTextShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="1.3" stdDeviation="1.2" floodColor="#06101A" floodOpacity="0.55" />
      </filter>

      <clipPath id="quickIconTileClip" clipPathUnits="userSpaceOnUse">
        <path d={MINI_BUTTON_PATH} />
      </clipPath>

      <symbol id="baSlantPanel" viewBox="207 810 766 58" preserveAspectRatio="none">
        <path d="M215.352 813.361C215.665 811.424 217.338 810 219.301 810H968.301C970.765 810 972.643 812.206 972.25 814.639L964.648 861.639C964.335 863.576 962.662 865 960.699 865H211.699C209.235 865 207.357 862.794 207.75 860.361L215.352 813.361Z" fill="white" />
        <path d="M217.346 814.898C217.637 813.223 219.091 812 220.791 812H966.845C969.015 812 970.661 813.956 970.29 816.094L962.654 860.102C962.363 861.777 960.909 863 959.209 863H213.155C210.985 863 209.339 861.044 209.71 858.906L217.346 814.898Z" fill="url(#panelWash)" />
      </symbol>

      <symbol id="baPlaceTag" viewBox="207 691 210 35" preserveAspectRatio="none">
        <path opacity="0.6" d="M207 694C207 692.343 208.343 691 210 691H413.684C415.459 691 416.846 692.533 416.669 694.3L413.758 723.3C413.604 724.833 412.314 726 410.773 726H210C208.343 726 207 724.657 207 723L207 694Z" fill="#142933" />
        <rect opacity="0.6" x="251" y="699" width="3" height="19" rx="1" fill="#D9D9D9" />
      </symbol>
    </defs>
  );
}

function SceneBackground({ backgroundSrc, transition }) {
  return (
    <image
      className={`scene-bg transition-${safeClassName(transition)}`}
      href={backgroundSrc}
      x="0"
      y="0"
      width="1129"
      height="524"
      preserveAspectRatio="xMidYMid slice"
    />
  );
}

function DirectorOverlays({ overlays = [] }) {
  return (
    <g className="director-overlays">
      {overlays.map((overlay, index) => (
        <rect
          key={overlay.id || index}
          className={`director-overlay transition-${safeClassName(overlay.transition)}`}
          width="1129"
          height="524"
          fill={overlay.color || '#000'}
          opacity={overlay.opacity ?? 0.28}
        />
      ))}
    </g>
  );
}

function DialogueTextLines({ text, visibleCount = safeText(text).length }) {
  const lines = wrapDialogueText(text);
  let remaining = visibleCount;
  return (
    <text className="dialogue-text" x="136" y="429" textAnchor="start">
      {lines.map((line, index) => {
        const visibleLine = line.slice(0, clamp(remaining, 0, line.length));
        remaining -= line.length + 1;
        return (
          <tspan key={`${index}-${line}`} x="136" dy={index === 0 ? 0 : 29} textAnchor="start">
            {visibleLine}
          </tspan>
        );
      })}
    </text>
  );
}

function DialogueScene({ visible, uiHidden, backgroundSrc, characters, overlays, item, fullText, text, roleX, speakerNameRef, onNext }) {
  return (
    <g className="scene scene-dialogue" style={{ display: visible ? 'inline' : 'none' }}>
      <SceneBackground backgroundSrc={backgroundSrc} />
      <DirectorOverlays overlays={overlays} />
      <CharacterLayer characters={characters} />
      {!uiHidden && (
        <g className="dialogue-ui">
          <g style={{ mixBlendMode: 'multiply' }}>
            <rect x="0" y="244" width="1129" height="280" fill="url(#dialogShadeA)" />
          </g>
          <g style={{ mixBlendMode: 'darken' }}>
            <rect x="0" y="265" width="1129" height="259" fill="url(#dialogShadeB)" />
          </g>
          <text ref={speakerNameRef} className="speaker-name" x="136" y="382">
            {safeText(item?.type === 'dialogue' ? item.name : '')}
          </text>
          <text className="speaker-role" x={roleX} y="382">
            {safeText(item?.type === 'dialogue' ? item.role : '')}
          </text>
          <path d="M136 397H1011" stroke="white" strokeOpacity="0.5" strokeLinecap="round" />
          <DialogueTextLines text={fullText} visibleCount={safeText(text).length} />
          <g
            className="space-key-svg"
            role="button"
            tabIndex="0"
            aria-label="Space"
            transform="translate(984 419)"
            onKeyDown={createKeyboardActivationHandler((event) => {
              event.stopPropagation();
              onNext();
            })}
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
          >
            <rect className="space-key-bg" x="0" y="0" width="66" height="24" rx="5.2" />
            <rect className="space-key-inner" x="2" y="2" width="62" height="20" rx="3.9" />
            <text className="space-key-text" x="33" y="17">Space</text>
          </g>
          <path
            id="nextMark"
            d="M1250.76 577.063C1251.35 577.939 1252.65 577.939 1253.24 577.063L1260.01 567.093C1260.69 566.097 1259.98 564.75 1258.77 564.75L1245.23 564.75C1244.02 564.75 1243.31 566.097 1243.99 567.093L1250.76 577.063Z"
            transform="translate(-207 -84)"
            fill="#57C3C2"
            stroke="#142933"
          />
        </g>
      )}
    </g>
  );
}

function BannerScene({ visible, uiHidden, backgroundSrc, characters = [], overlays = [], text }) {
  return (
    <g className="scene scene-banner" style={{ display: visible ? 'inline' : 'none' }}>
      <SceneBackground backgroundSrc={backgroundSrc} />
      <DirectorOverlays overlays={overlays} />
      <CharacterLayer characters={characters} />
      {!uiHidden && (
        <g>
          <rect width="1129" height="524" fill="#0C263D" opacity="0.16" />
          <use href="#baSlantPanel" x="185" y="230" width="760" height="58" />
          <text className="banner-text" x="565" y="267">
            {safeText(text)}
          </text>
        </g>
      )}
    </g>
  );
}

function PhoneMessageScene({ visible, uiHidden, backgroundSrc, characters = [], overlays = [], item, text, onChoose }) {
  const messages = normalizePhoneMessages(item);
  const replies = normalizePhoneReplies(item);

  return (
    <g className="scene scene-phone" style={{ display: visible ? 'inline' : 'none' }}>
      <SceneBackground backgroundSrc={backgroundSrc} />
      <DirectorOverlays overlays={overlays} />
      <CharacterLayer characters={characters} />
      {!uiHidden && (
        <foreignObject x="610" y="58" width="360" height="408">
          <div className="phone-ui">
            <div className="phone-head">
              <span>MESSAGE</span>
              <strong>{item?.name || '현겸'}</strong>
            </div>
            <div className="phone-message">{safeText(text)}</div>
            <div className="phone-chat-list">
              {messages.map((message) => (
                <div key={message.id} className={`phone-bubble phone-bubble-${message.side}`}>
                  <span className="phone-bubble-name">{message.name}</span>
                  {message.pending ? (
                    <span className="phone-typing" aria-label="입력 중">● ● ●</span>
                  ) : (
                    <span>{message.text}</span>
                  )}
                  {message.side === 'me' && message.read && <em>읽음</em>}
                </div>
              ))}
            </div>
            <div className="phone-replies">
              {replies.map((reply) => (
                <button
                  key={`${reply.index}-${reply.text}`}
                  className="phone-reply"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onChoose(reply.index);
                  }}
                >
                  {reply.text}
                </button>
              ))}
            </div>
          </div>
        </foreignObject>
      )}
    </g>
  );
}

function ChoiceScene({ visible, uiHidden, backgroundSrc, characters = [], overlays = [], choices = [], onChoose }) {
  const rows = getChoiceRows(choices);

  return (
    <g className="scene scene-choice" style={{ display: visible ? 'inline' : 'none' }}>
      <SceneBackground backgroundSrc={backgroundSrc} />
      <DirectorOverlays overlays={overlays} />
      <CharacterLayer characters={characters} />
      {!uiHidden && (
        <g>
          <rect width="1129" height="524" fill="#0C263D" opacity="0.16" />
          <g id="choiceRows">
            {rows.map((y, index) => {
              const text = choices[index];
              if (!text) return null;
              return (
                <g
                  key={index}
                  className="choice-row"
                  data-choice={index}
                  role="button"
                  tabIndex="0"
                  aria-label={`선택지 ${index + 1}: ${text}`}
                  transform={`translate(185 ${y})`}
                  onKeyDown={createKeyboardActivationHandler((event) => {
                    event.stopPropagation();
                    onChoose(index);
                  })}
                  onClick={(event) => {
                    event.stopPropagation();
                    onChoose(index);
                  }}
                >
                  <use href="#baSlantPanel" x="0" y="0" width="760" height="58" />
                  <text className="choice-text" x="380" y="37">{text}</text>
                </g>
              );
            })}
          </g>
        </g>
      )}
    </g>
  );
}

function CharacterLayer({ characters, fallbackSrc = '', fallbackCharacter = EMPTY_CHARACTER }) {
  if (!Array.isArray(characters) || characters.length === 0) {
    characters = fallbackSrc
      ? [{ id: 'fallback', src: fallbackSrc, ...fallbackCharacter }]
      : [];
  }

  return (
    <g className="character-layer">
      {characters.map((character, index) => (
        <CharacterSprite key={character.id || `${character.src}-${index}`} character={character} />
      ))}
    </g>
  );
}

function CharacterSprite({ character }) {
  const currentExpression = character.expression || 'normal';
  const resolvedSrc = resolveCharacterAsset(character);
  const preset = POSITION_PRESETS[character.position || character.pos || 3] || POSITION_PRESETS[3];
  const x = character.x ?? preset.x;
  const y = character.y ?? preset.y;
  const width = character.width ?? preset.width;
  const height = character.height ?? preset.height;
  const effectBadge = getEffectBadgeGeometry(character, width, height);
  const motionClass = character.motion ? ` motion-${safeClassName(character.motion)}` : '';
  const expressionClass = ` expression-${safeClassName(currentExpression)}`;
  const transitionClass = ` transition-${safeClassName(character.transition)}`;
  const leavingClass = character.leaving ? ' is-leaving' : '';

  return (
    <g
      className="character-anchor"
      data-character={character.id}
      transform={`translate(${x} ${y})`}
      opacity={character.opacity ?? 1}
    >
      <g
        className={`character-wrap${motionClass}${expressionClass}${transitionClass}${leavingClass}`}
        data-expression={currentExpression}
      >
        {resolvedSrc ? (
          <image
            className="character-sprite"
            href={resolvedSrc}
            x="0"
            y="0"
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid meet"
          />
        ) : (
          <CharacterPlaceholder character={character} width={width} height={height} />
        )}
        {character.effect && <EffectBadge type={character.effect} {...effectBadge} />}
      </g>
    </g>
  );
}

function getEffectBadgeGeometry(character, width, height) {
  return {
    x: clamp(character.effectX ?? width * 0.72, 18, width - 18),
    y: clamp(character.effectY ?? height * 0.16, 28, height * 0.32),
    radius: clamp(width * 0.045, 14, 20),
    fontSize: clamp(width * 0.052, 16, 22)
  };
}

function CharacterPlaceholder({ character, width, height }) {
  return (
    <g className="character-placeholder">
      <ellipse cx={width * 0.5} cy={height - 18} rx={width * 0.23} ry="18" fill="rgba(7, 18, 32, .32)" />
      <rect x={width * 0.32} y={height * 0.26} width={width * 0.36} height={height * 0.52} rx="42" fill="rgba(44, 84, 118, .74)" />
      <circle cx={width * 0.5} cy={height * 0.22} r={width * 0.12} fill="rgba(225, 240, 250, .92)" />
      <text className="character-placeholder-text" x={width * 0.5} y={height * 0.52}>{character.name || character.id}</text>
    </g>
  );
}

function EffectBadge({ type, x, y, radius, fontSize }) {
  const label = EFFECT_LABELS[type] || safeText(type).slice(0, 2) || '!';
  return (
    <g className="effect-badge-anchor" transform={`translate(${x} ${y})`}>
      <g className={`effect-badge effect-${safeClassName(type)}`}>
        <circle r={radius} fill="rgba(255,255,255,.88)" stroke="#57C3C2" strokeWidth={Math.max(1.6, radius * 0.13)} />
        <text x="0" y={fontSize * 0.34} textAnchor="middle" className="effect-text" style={{ fontSize }}>{label}</text>
      </g>
    </g>
  );
}

function PlaceTag({ visible, text }) {
  return (
    <g className="place-tag-ui" style={{ display: visible ? 'inline' : 'none' }}>
      <use href="#baPlaceTag" x="0" y="0" width="210" height="35" />
      <text className="place-text" x="66" y="23">{text}</text>
    </g>
  );
}

function TopNav({ auto, menuOpen, onAutoClick, onMenuClick, onHideClick, onBacklogClick, onSkipClick }) {
  return (
    <g id="topNav" className="top-nav" transform="translate(874 17.8)">
      <NavButton label="AUTO" active={auto} x="0" textX="58.6" onClick={onAutoClick} />
      <NavButton label="MENU" menuOpen={menuOpen} x="120.8" textX="59.4" onClick={onMenuClick} />
      {menuOpen && (
        <QuickMenu
          onHideClick={onHideClick}
          onBacklogClick={onBacklogClick}
          onSkipClick={onSkipClick}
        />
      )}
    </g>
  );
}

function NavButton({ label, active = false, menuOpen = false, x, textX, onClick }) {
  return (
    <g
      className={`nav-button ${label === 'AUTO' ? 'nav-auto' : 'nav-menu'} ${active ? 'is-active' : ''} ${menuOpen ? 'is-menu-open' : ''}`}
      role="button"
      tabIndex="0"
      aria-label={label}
      transform={`translate(${x} 0)`}
      onKeyDown={createKeyboardActivationHandler(onClick)}
      onClick={onClick}
    >
      <path className="nav-button-shadow" d={NAV_BUTTON_PATH} />
      <path className="nav-button-shape" d={NAV_BUTTON_PATH} />
      <text className="nav-text" x={textX} y="18.6">{label}</text>
    </g>
  );
}

function QuickMenu({ onHideClick, onBacklogClick, onSkipClick }) {
  return (
    <g className="quick-menu" transform="translate(-9 48)" onClick={(event) => event.stopPropagation()}>
      <path className="quick-menu-panel" d={MENU_PANEL_PATH} />
      <QuickIconButton x="22" label="UI 숨김" onClick={onHideClick} icon="hide" />
      <QuickIconButton x="92" label="백로그" onClick={onBacklogClick} icon="log" />
      <QuickIconButton x="156" label="스킵" onClick={onSkipClick} icon="skip" />
    </g>
  );
}

function QuickIconButton({ x, label, icon, onClick }) {
  return (
    <g
      className="quick-icon-button"
      transform={`translate(${x} 12)`}
      role="button"
      tabIndex="0"
      aria-label={label}
      onKeyDown={createKeyboardActivationHandler(onClick)}
      onClick={onClick}
    >
      <title>{label}</title>
      <path className="quick-icon-shape" d={MINI_BUTTON_PATH} />
      <g className="quick-icon-clip" clipPath="url(#quickIconTileClip)">
        <QuickIcon type={icon} />
      </g>
    </g>
  );
}

function QuickIcon({ type }) {
  if (type === 'hide') {
    return (
      <g className="quick-icon-glyph quick-icon-hide" strokeLinejoin="round">
        <path d="M32 18L41 9L38 6L50 5L48 17L45 14L36 23Z" />
        <path d="M27 27L18 36L21 39L10 40L12 29L15 32L24 23Z" />
      </g>
    );
  }

  if (type === 'log') {
    return (
      <g className="quick-icon-glyph" strokeLinecap="round">
        <path d="M18 14H45" />
        <path d="M17 22H44" />
        <path d="M16 30H43" />
      </g>
    );
  }

  return (
    <g className="quick-icon-glyph quick-icon-skip" strokeLinejoin="round">
      <path d="M13 13H25L36 22L25 31H13L24 22Z" />
      <path d="M28 13H40L51 22L40 31H28L39 22Z" />
    </g>
  );
}

function TitleScreen({ open, canContinue, onStart, onContinue, onLoad, onGallery, onConfig }) {
  return (
    <div className="title-screen" aria-hidden={open ? 'false' : 'true'}>
      <div className="title-bg-stripe" aria-hidden="true" />
      <div className="title-brand">
        <span className="title-logo-mark">HB</span>
        <p className="title-kicker">Blue Archive Style Visual Novel</p>
        <h1>학범 러브</h1>
        <p className="title-subtitle">비 오는 방과 후, 현겸과 시작되는 프롤로그</p>
      </div>
      <div className="title-menu" role="menu" aria-label="타이틀 메뉴">
        <button type="button" role="menuitem" onClick={onStart}>START</button>
        <button type="button" role="menuitem" onClick={onContinue} disabled={!canContinue}>CONTINUE</button>
        <button type="button" role="menuitem" onClick={onLoad}>LOAD</button>
        <button type="button" role="menuitem" onClick={onGallery}>GALLERY</button>
        <button type="button" role="menuitem" onClick={onConfig}>CONFIG</button>
      </div>
      <p className="title-footer">Hakbeom Love / Prologue</p>
    </div>
  );
}

function ChapterCard({ info }) {
  if (!info?.visible) return null;
  return (
    <div className={`chapter-card mood-${safeClassName(info.mood)}`} role="status">
      <span>{info.chapter || 'chapter'}</span>
      <strong>{info.title}</strong>
      {info.place && <em>{info.place}</em>}
    </div>
  );
}

function GalleryModal({ open, gameState, onClose, onReplay }) {
  const unlockedGallery = new Set(gameState.unlockedGallery || []);
  const unlockedRecollections = new Set(gameState.unlockedRecollections || []);

  return (
    <div className="ba-modal-layer gallery-panel" aria-hidden={open ? 'false' : 'true'}>
      <div className="ba-modal-card gallery-card" role="dialog" aria-modal="true" aria-label="갤러리">
        <div className="ba-modal-head">
          <span className="ba-modal-title">GALLERY</span>
          <button className="ba-modal-close" type="button" onClick={onClose} aria-label="닫기">×</button>
        </div>
        <div className="gallery-section">
          <h3>CG</h3>
          <div className="gallery-grid">
            {routeConfig.galleryItems.map((galleryItem) => {
              const unlocked = unlockedGallery.has(galleryItem.id);
              return (
                <div key={galleryItem.id} className={`gallery-tile ${unlocked ? 'unlocked' : 'locked'}`}>
                  {unlocked && galleryItem.src && <img src={galleryItem.src} alt="" />}
                  <strong>{unlocked ? galleryItem.title : 'LOCKED'}</strong>
                </div>
              );
            })}
          </div>
        </div>
        <div className="gallery-section recollection-section">
          <h3>RECOLLECTION</h3>
          <div className="recollection-list">
            {routeConfig.recollectionItems.map((recollectionItem) => {
              const unlocked = unlockedRecollections.has(recollectionItem.id);
              return (
                <button
                  key={recollectionItem.id}
                  type="button"
                  className={`recollection-item ${unlocked ? 'unlocked' : 'locked'}`}
                  disabled={!unlocked}
                  onClick={() => onReplay?.(recollectionItem.startId)}
                >
                  {unlocked ? recollectionItem.title : '잠긴 회상'}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function SaveLoadModal({ mode, slots, onSave, onLoad, onClose }) {
  const open = mode === 'save' || mode === 'load';
  const slotIds = [AUTO_SAVE_SLOT, QUICK_SAVE_SLOT, ...MANUAL_SAVE_SLOTS];

  return (
    <div className="ba-modal-layer save-load-panel" aria-hidden={open ? 'false' : 'true'}>
      <div className="ba-modal-card save-load-card" role="dialog" aria-modal="true" aria-label={mode === 'save' ? '세이브' : '로드'}>
        <div className="ba-modal-head">
          <span className="ba-modal-title">{mode === 'save' ? '세이브' : '로드'}</span>
          <button className="ba-modal-close" type="button" onClick={onClose} aria-label="닫기">×</button>
        </div>
        <div className="save-slot-list">
          {slotIds.map((slot) => {
            const payload = slots?.[slot];
            const protectedSlot = mode === 'save' && slot === AUTO_SAVE_SLOT;
            return (
              <button
                key={slot}
                type="button"
                className="save-slot"
                disabled={(mode === 'load' && !payload) || protectedSlot}
                onClick={() => (mode === 'save' ? onSave(slot) : onLoad(slot))}
              >
                <span className="save-slot-thumb" aria-hidden="true">
                  {payload?.summary?.thumbnail && <img src={payload.summary.thumbnail} alt="" />}
                </span>
                <span className="save-slot-main">
                  <span className="save-slot-name">{slotLabel(slot)}</span>
                  <span className="save-slot-title">{payload?.summary?.chapterTitle || payload?.title || '빈 슬롯'}</span>
                  <span className="save-slot-line">{payload?.summary?.linePreview || payload?.line || (protectedSlot ? '자동 저장 전용' : '저장된 장면이 없습니다.')}</span>
                </span>
                <span className="save-slot-side">
                  <span className="save-slot-affection">{payload?.summary?.affectionLabel || '-'}</span>
                  <span className="save-slot-date">{payload?.savedAt ? new Date(payload.savedAt).toLocaleString() : '-'}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function slotLabel(slot) {
  if (slot === AUTO_SAVE_SLOT) return 'AUTO';
  if (slot === QUICK_SAVE_SLOT) return 'QUICK';
  return slot.replace('slot-', 'SLOT ');
}

function ConfigModal({ open, settings, onChange, onClose }) {
  return (
    <div className="ba-modal-layer config-panel" aria-hidden={open ? 'false' : 'true'}>
      <div className="ba-modal-card config-card" role="dialog" aria-modal="true" aria-label="설정">
        <div className="ba-modal-head">
          <span className="ba-modal-title">CONFIG</span>
          <button className="ba-modal-close" type="button" onClick={onClose} aria-label="닫기">×</button>
        </div>
        <div className="config-list">
          <ConfigRange label="텍스트 속도" min="8" max="60" value={settings.textSpeedMs} onChange={(value) => onChange({ textSpeedMs: value })} suffix="ms" />
          <ConfigRange label="AUTO 속도" min="500" max="2600" step="100" value={settings.autoDelayMs} onChange={(value) => onChange({ autoDelayMs: value })} suffix="ms" />
          <ConfigRange label="BGM 볼륨" min="0" max="100" value={settings.bgmVolume} onChange={(value) => onChange({ bgmVolume: value })} suffix="%" />
          <ConfigRange label="SE 볼륨" min="0" max="100" value={settings.seVolume} onChange={(value) => onChange({ seVolume: value })} suffix="%" />
          <label className="config-toggle">
            <input
              type="checkbox"
              checked={Boolean(settings.skipReadOnly)}
              onChange={(event) => onChange({ skipReadOnly: event.target.checked })}
            />
            읽은 문장만 스킵
          </label>
        </div>
      </div>
    </div>
  );
}

function ConfigRange({ label, suffix = '', onChange, ...props }) {
  return (
    <label className="config-row">
      <span>{label}</span>
      <input
        type="range"
        {...props}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <strong>{props.value}{suffix}</strong>
    </label>
  );
}

function EndingToast({ ending }) {
  if (!ending) return null;
  return (
    <div className="ending-toast" role="status">
      <span>ENDING</span>
      <strong>{ending.title || ending.id}</strong>
    </div>
  );
}

function BacklogModal({ open, log, onClose }) {
  return (
    <div className="ba-modal-layer backlog-panel" aria-hidden={open ? 'false' : 'true'}>
      <div className="ba-modal-card backlog-card" role="dialog" aria-modal="true" aria-label="백로그">
        <div className="ba-modal-head">
          <span className="ba-modal-title">백로그</span>
          <button className="ba-modal-close" type="button" onClick={onClose} aria-label="닫기">×</button>
        </div>
        <div className="backlog-list">
          {log.length === 0 ? (
            <p className="backlog-empty">아직 표시할 대사가 없습니다.</p>
          ) : (
            <ol>
              {log.map((line, lineIndex) => (
                <li key={`${lineIndex}-${line}`}>{line}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

function SkipSummaryModal({ open, episodeInfo, item, onCancel, onConfirm }) {
  const sectionTitle = episodeInfo.sectionTitle || episodeInfo.title || item?.sectionTitle || item?.episodeTitle || '프롤로그';
  const summary = episodeInfo.summary || item?.summary || '선생님과 학생들이 사건을 해결하기 위해 다음 장소로 향한다.';

  return (
    <div className="ba-modal-layer skip-panel" aria-hidden={open ? 'false' : 'true'}>
      <div className="ba-modal-card skip-card" role="dialog" aria-modal="true" aria-label="스토리 스킵 요약">
        <div className="skip-header-pattern" />
        <button className="ba-modal-close skip-close" type="button" onClick={onCancel} aria-label="닫기">×</button>
        <h2 className="skip-title">요약</h2>
        <div className="skip-title-underline" />
        <h3 className="skip-section-title">{sectionTitle}</h3>
        <div className="skip-summary-box">
          <p>{summary}</p>
        </div>
        <p className="skip-question">※ 이 이야기를 스킵하시겠습니까?</p>
        <div className="skip-actions">
          <button type="button" className="skip-button skip-cancel" onClick={onCancel}>취소</button>
          <button type="button" className="skip-button skip-confirm" onClick={onConfirm}>확인</button>
        </div>
      </div>
    </div>
  );
}
