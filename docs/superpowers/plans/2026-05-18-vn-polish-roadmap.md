# VN Polish Roadmap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the five missing dating-sim polish layers: BGM/ambient direction, richer save slots, chapter/day presentation, stronger Hyungyeom character expression flow, and expanded phone/SNS scenes.

**Architecture:** Keep scenario data declarative and push reusable logic into small engine modules. `BAVisualNovel.jsx` stays the orchestration/render layer, while audio, chapter, save summary, character profile, and phone normalization get pure helpers with semantic tests before UI wiring.

**Tech Stack:** Vite, React 18 function components/hooks, ES modules, SVG/HTML hybrid UI, Node `assert` contract tests, localStorage save codec.

---

## Scope Check

This is five related subsystems, but they share the same VN runtime and scenario contract. Implement them as five milestones in order so every milestone leaves the game runnable and testable. Do not add dependencies. Do not replace the existing BA-style SVG layout unless a task explicitly names a component and class to change.

## File Structure

- Create `src/engine/audioEngine.js`: pure BGM/ambient directive normalization, volume clamp helpers, audio state reducer.
- Create `src/engine/chapterEngine.js`: pure chapter/day label resolution and chapter-card visibility rules.
- Create `src/engine/saveSummary.js`: save-slot title, chapter, line preview, affection label, and thumbnail summary builder.
- Create `src/data/characterProfiles.js`: Hyungyeom expression-to-asset metadata with safe fallback to `hyungyeom.png`.
- Create `src/engine/phoneEngine.js`: phone message normalization for speaker side, typing, read receipts, and reply labels.
- Modify `src/engine/directorEngine.js`: recognize `BGM` and `AMBIENT` directives and store `audio` state in director state.
- Modify `src/engine/saveCodec.js`: persist normalized save summary metadata and clamp all settings ranges.
- Modify `src/engine/scenarioValidator.js`: validate BGM/ambient directives, chapter metadata, character expressions, and phone message arrays.
- Modify `src/components/BAVisualNovel.jsx`: add audio playback refs/effects, chapter card overlay, improved save slot card, expression source resolution, and richer phone UI.
- Modify `src/data/scenario.js`: add chapter/day beats, BGM/ambient cues, richer phone events, expression changes, and route variants.
- Modify `src/data/routeConfig.js`: add chapter labels and optional save thumbnail metadata.
- Modify `src/styles.css`: style chapter card, save cards, phone chat bubbles, BGM controls, and subtle expression/phone transitions.
- Modify `tests/ui-contract.test.mjs`: add semantic tests for new pure helpers and contract tests for UI integration.
- Modify `docs/scenario-authoring.md` and `docs/development-guide.md`: document new scenario directives and editing rules.
- Modify `README.md`: add runtime feature summary and preview URLs for chapter/phone/save smoke checks.

---

## Milestone 1: BGM / Ambient / Director Timeline

### Task 1.1: Add pure audio directive engine

**Files:**
- Create: `src/engine/audioEngine.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing semantic tests**

Add this import near the other engine imports:

```js
import {
  applyAudioDirective,
  applyAudioItem,
  clampVolumePercent,
  createAudioState,
  resolveAudioCue
} from '../src/engine/audioEngine.js';
```

Add these assertions near the existing director tests:

```js
assert.equal(clampVolumePercent(-20), 0);
assert.equal(clampVolumePercent(45), 45);
assert.equal(clampVolumePercent(999), 100);

const namedAudio = { rain: '/assets/bgm/rain.mp3', cafe: '/assets/bgm/cafe.mp3' };
assert.equal(resolveAudioCue('rain', namedAudio), '/assets/bgm/rain.mp3');
assert.equal(resolveAudioCue('/assets/bgm/direct.mp3', namedAudio), '/assets/bgm/direct.mp3');
assert.equal(resolveAudioCue('missing', namedAudio), '');

const bgmAudio = applyAudioDirective(createAudioState(), { type: 'BGM', cue: 'rain', fadeMs: 900 }, namedAudio);
assert.deepEqual(bgmAudio.bgm, { id: 'rain', src: '/assets/bgm/rain.mp3', fadeMs: 900, loop: true });
assert.equal(bgmAudio.key, 'bgm:rain|ambient:');

const ambientAudio = applyAudioItem(createAudioState(), {
  id: 'audio-scene',
  directives: [
    { type: 'BGM', cue: 'cafe' },
    { type: 'AMBIENT', cue: 'rain', id: 'rain-loop', volume: 35 }
  ]
}, namedAudio);
assert.equal(ambientAudio.bgm.src, '/assets/bgm/cafe.mp3');
assert.equal(ambientAudio.ambient[0].id, 'rain-loop');
assert.equal(ambientAudio.ambient[0].volume, 35);
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
npm test
```

Expected: FAIL because `src/engine/audioEngine.js` does not exist.

- [ ] **Step 3: Implement the pure module**

Create `src/engine/audioEngine.js`:

```js
import { safeText } from '../utils/vnText.js';
import { normalizeDirectiveType, safeClassName } from './directorEngine.js';

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
  const raw = typeof cue === 'string' ? cue : cue?.src || cue?.cue || cue?.id || cue?.name;
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
  const id = safeClassName(directive.id || directive.cue || directive.name || fallbackId);
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
  const type = normalizeDirectiveType(directive);
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
    const targetId = safeClassName(directive.id || directive.cue || directive.name || '');
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
```

- [ ] **Step 4: Run tests**

Run:

```bash
npm test
```

Expected: PASS for new audio engine tests.

- [ ] **Step 5: Commit**

```bash
git add src/engine/audioEngine.js tests/ui-contract.test.mjs
git commit -m "Model VN loop audio as director state

Constraint: Audio directives must stay declarative in scenario data.
Confidence: high
Scope-risk: narrow
Directive: Keep playback side effects out of audioEngine.js.
Tested: npm test"
```

### Task 1.2: Store BGM and ambient state in director state

**Files:**
- Modify: `src/engine/directorEngine.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing director integration tests**

Add `audio` assertions after the existing `directorResult` test:

```js
const audioDirectorResult = applyDirectorItem(
  { backgroundSrc: null, backgroundTransition: '', characters: [], overlays: [], soundCues: [], soundKey: '', audio: createAudioState() },
  { id: 'bgm-test', directives: [{ type: 'BGM', src: '/assets/bgm/rain.mp3', id: 'rain-main' }] },
  {}
);
assert.equal(audioDirectorResult.audio.bgm.id, 'rain-main');
assert.equal(audioDirectorResult.audio.bgm.src, '/assets/bgm/rain.mp3');
assert.match(audioDirectorResult.audio.key, /bgm:rain-main/);
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
npm test
```

Expected: FAIL because `directorResult.audio` is undefined.

- [ ] **Step 3: Import and wire audio state**

In `src/engine/directorEngine.js`, add:

```js
import { applyAudioDirective, createAudioState } from './audioEngine.js';
```

Update `createDirectorState()` to include:

```js
audio: createAudioState(defaults.audio)
```

Update the initial `next` object in `applyDirectorItem()` to include:

```js
audio: createAudioState(state.audio)
```

Inside the directive loop, before the overlay branch, add:

```js
if (type === 'bgm' || type === 'music' || type === 'ambient' || type === 'ambience' || type === 'stop-bgm' || type === 'stop-ambient') {
  next = { ...next, audio: applyAudioDirective(next.audio, directive, defaults.sounds || {}) };
  continue;
}
```

- [ ] **Step 4: Run tests**

Run:

```bash
npm test
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/engine/directorEngine.js tests/ui-contract.test.mjs
git commit -m "Persist loop audio in VN director state

Constraint: Scene replay must rebuild visual and audio direction together.
Confidence: high
Scope-risk: narrow
Directive: Future replay changes must preserve directorState.audio.
Tested: npm test"
```

### Task 1.3: Add runtime BGM playback and config control

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/styles.css`
- Modify: `src/App.jsx`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing UI contract tests**

Add source assertions:

```js
assert.match(
  component,
  /const bgmAudioRef = useRef\(null\)[\s\S]*const ambientAudioRefs = useRef\(new Map\(\)\)/,
  'BAVisualNovel should keep dedicated BGM and ambient audio refs.'
);

assert.match(
  component,
  /directorState\.audio\?\.key[\s\S]*settings\.bgmVolume[\s\S]*playLoopAudio/,
  'BAVisualNovel should react to director audio changes and BGM volume settings.'
);

assert.doesNotMatch(
  component,
  /<ConfigRange label="BGM 준비중"[\s\S]*disabled/,
  'BGM config should be enabled after BGM playback exists.'
);

assert.match(
  app,
  /bgmRain:[\s\S]*'\/assets\/bgm\/rainy-after-school\.mp3'/,
  'App should expose named BGM cues to the VN runtime.'
);
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
npm test
```

Expected: FAIL on missing refs/playback and App cue mapping.

- [ ] **Step 3: Add loop playback helpers inside `BAVisualNovel.jsx`**

Add near `playAudio()`:

```js
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
  const audio = existingAudio || new Audio();
  if (audio.src !== new URL(src, window.location.href).href) {
    audio.src = src;
  }
  audio.loop = true;
  audio.volume = Math.max(0, Math.min(1, volume));
  audio.play?.().catch(() => undefined);
  return audio;
}
```

Add refs beside the existing timer refs:

```js
const bgmAudioRef = useRef(null);
const ambientAudioRefs = useRef(new Map());
```

Add an effect after the SE effect:

```js
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
```

Update `ConfigModal` BGM range:

```jsx
<ConfigRange label="BGM 볼륨" min="0" max="100" value={settings.bgmVolume} onChange={(value) => onChange({ bgmVolume: value })} suffix="%" />
```

- [ ] **Step 4: Add named cue placeholders in `App.jsx`**

Update `sounds`:

```js
sounds={{
  click: '',
  choice: '',
  confirm: '',
  bgmRain: '/assets/bgm/rainy-after-school.mp3',
  bgmWarm: '/assets/bgm/warm-promise.mp3',
  ambientRain: '/assets/bgm/rain-loop.mp3'
}}
```

Create the folder so future assets have a documented location:

```bash
mkdir -p public/assets/bgm
```

Do not add empty binary files. Missing audio paths are allowed because playback failures are caught.

- [ ] **Step 5: Run tests and build**

Run:

```bash
npm test
npm run build
```

Expected: PASS and production build succeeds.

- [ ] **Step 6: Commit**

```bash
git add src/components/BAVisualNovel.jsx src/styles.css src/App.jsx tests/ui-contract.test.mjs public/assets/bgm
git commit -m "Play declarative VN loop audio cues

Constraint: Prototype may reference future audio assets without bundling binaries.
Rejected: Adding audio dependencies | Native HTMLAudioElement is sufficient for loop playback.
Confidence: medium
Scope-risk: moderate
Directive: Keep user gesture playback failures non-fatal.
Tested: npm test; npm run build
Not-tested: Real BGM asset playback because no audio files are bundled."
```

---

## Milestone 2: Save Slot Card Polish

### Task 2.1: Add save summary builder

**Files:**
- Create: `src/engine/saveSummary.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing tests**

Add import:

```js
import { buildSaveSummary } from '../src/engine/saveSummary.js';
```

Add semantic assertions:

```js
const saveSummary = buildSaveSummary({
  item: { id: 'day2-rooftop', chapter: 'day-2', sectionTitle: 'Day 2: 옥상', text: '오늘도 우산 가져왔어.' },
  gameState: { affection: { hyeongyeom: 7 } },
  routeConfig: routeConfigData,
  backgroundSrc: '/assets/ui/image0_13_6.jpg'
});
assert.equal(saveSummary.itemId, 'day2-rooftop');
assert.equal(saveSummary.chapterTitle, 'Day 2: 옥상');
assert.equal(saveSummary.linePreview, '오늘도 우산 가져왔어.');
assert.equal(saveSummary.affectionLabel, '같은 우산의 약속');
assert.equal(saveSummary.thumbnail, '/assets/ui/image0_13_6.jpg');
```

- [ ] **Step 2: Run test to verify it fails**

Run `npm test`.

Expected: FAIL because `saveSummary.js` does not exist.

- [ ] **Step 3: Implement builder**

Create `src/engine/saveSummary.js`:

```js
import { safeText } from '../utils/vnText.js';

function getAffectionTarget(routeConfig) {
  return typeof routeConfig?.affectionTarget === 'string'
    ? { id: routeConfig.affectionTarget, max: 10 }
    : routeConfig?.affectionTarget || { id: 'hyeongyeom', max: 10 };
}

function getAffectionLabel(value, routeConfig) {
  const labels = [...(routeConfig?.affectionLabels || [])].sort((a, b) => Number(a.min || 0) - Number(b.min || 0));
  return labels.reduce((label, current) => (value >= Number(current.min || 0) ? current.label : label), labels[0]?.label || '관계 기록 없음');
}

export function buildSaveSummary({ item, gameState, routeConfig, backgroundSrc = '' }) {
  const target = getAffectionTarget(routeConfig);
  const affectionValue = Number(gameState?.affection?.[target.id] || 0);
  const text = safeText(item?.text || item?.summary || item?.place || item?.name || '');
  return {
    itemId: safeText(item?.id),
    chapter: safeText(item?.chapter || item?.day || ''),
    chapterTitle: safeText(item?.sectionTitle || item?.episodeTitle || item?.place || '스토리'),
    linePreview: text.length > 72 ? `${text.slice(0, 72)}…` : text,
    affectionTarget: target.id,
    affectionValue,
    affectionLabel: getAffectionLabel(affectionValue, routeConfig),
    thumbnail: item?.thumbnail || item?.backgroundSrc || backgroundSrc || ''
  };
}
```

- [ ] **Step 4: Run tests**

Run `npm test`.

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/engine/saveSummary.js tests/ui-contract.test.mjs
git commit -m "Summarize VN saves as route-aware cards

Constraint: Save slots need useful metadata without reading React UI state.
Confidence: high
Scope-risk: narrow
Directive: Keep save summary generation pure and testable.
Tested: npm test"
```

### Task 2.2: Persist and render richer save cards

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/engine/saveCodec.js`
- Modify: `src/styles.css`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing tests**

Add assertions:

```js
assert.match(
  component,
  /import \{ buildSaveSummary \} from '\.\.\/engine\/saveSummary\.js';/,
  'BAVisualNovel should use saveSummary for slot metadata.'
);
assert.match(
  saveCodec,
  /summary:[\s\S]*normalizeSaveSummary/,
  'Save codec should persist normalized summary metadata.'
);
assert.match(
  component,
  /className="save-slot-thumb"[\s\S]*className="save-slot-affection"/,
  'Save slots should render thumbnail and affection metadata.'
);
```

Add a normalize assertion:

```js
const normalizedSummarySave = normalizeSavePayload(
  {
    version: 1,
    index: 0,
    itemId: scenario[0].id,
    summary: {
      chapterTitle: 'Day 1',
      linePreview: 'line',
      affectionLabel: 'label',
      affectionValue: 3,
      thumbnail: '/assets/ui/image0_13_6.jpg'
    },
    gameState: {},
    settings: {},
    directorState: null,
    log: []
  },
  { scenario, fallbackIndex: 0 }
);
assert.equal(normalizedSummarySave.summary.chapterTitle, 'Day 1');
assert.equal(normalizedSummarySave.summary.affectionValue, 3);
```

- [ ] **Step 2: Run test to verify it fails**

Run `npm test`.

Expected: FAIL on missing summary integration.

- [ ] **Step 3: Update save codec**

In `src/engine/saveCodec.js`, add:

```js
function normalizeSaveSummary(value) {
  const summary = isPlainObject(value) ? value : {};
  return {
    itemId: typeof summary.itemId === 'string' ? summary.itemId : '',
    chapter: typeof summary.chapter === 'string' ? summary.chapter : '',
    chapterTitle: typeof summary.chapterTitle === 'string' ? summary.chapterTitle : '',
    linePreview: typeof summary.linePreview === 'string' ? summary.linePreview : '',
    affectionTarget: typeof summary.affectionTarget === 'string' ? summary.affectionTarget : '',
    affectionValue: Number.isFinite(Number(summary.affectionValue)) ? Number(summary.affectionValue) : 0,
    affectionLabel: typeof summary.affectionLabel === 'string' ? summary.affectionLabel : '',
    thumbnail: typeof summary.thumbnail === 'string' ? summary.thumbnail : ''
  };
}
```

Add to both returned payload objects:

```js
summary: normalizeSaveSummary(payload?.summary)
```

and in `createSavePayload()`:

```js
summary: normalizeSaveSummary(summary)
```

Update the function signature:

```js
export function createSavePayload({ index, itemId, mode, title, line, summary, gameState, settings, directorState, log, ending }) {
```

- [ ] **Step 4: Use save summary in `BAVisualNovel.jsx`**

Import:

```js
import { buildSaveSummary } from '../engine/saveSummary.js';
```

In `buildSavePayload()`, pass:

```js
summary: buildSaveSummary({ item, gameState, routeConfig, backgroundSrc: directorState?.backgroundSrc || backgroundSrc })
```

Update `SaveLoadModal` slot body:

```jsx
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
```

- [ ] **Step 5: Add CSS**

Add:

```css
.save-slot {
  grid-template-columns: 96px 1fr 150px;
  align-items: center;
  min-height: 86px;
}

.save-slot-thumb {
  width: 82px;
  height: 54px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(42, 84, 118, .45), rgba(255, 255, 255, .24));
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .55);
}

.save-slot-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.save-slot-main,
.save-slot-side {
  display: grid;
  gap: 4px;
}

.save-slot-affection {
  color: #57c3c2;
  font-weight: 800;
  font-size: 12px;
}
```

- [ ] **Step 6: Run tests and build**

Run:

```bash
npm test
npm run build
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/components/BAVisualNovel.jsx src/engine/saveCodec.js src/styles.css tests/ui-contract.test.mjs
git commit -m "Render saves as useful route snapshots

Constraint: Slot cards must remain readable without adding image generation or new assets.
Confidence: high
Scope-risk: moderate
Directive: Save summary schema changes require saveCodec normalization tests.
Tested: npm test; npm run build"
```

---

## Milestone 3: Chapter / Day System

### Task 3.1: Add chapter metadata helper

**Files:**
- Create: `src/engine/chapterEngine.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing tests**

Add import:

```js
import { getChapterInfo, shouldShowChapterCard } from '../src/engine/chapterEngine.js';
```

Add assertions:

```js
const chapterInfo = getChapterInfo({ chapter: 'day-2', sectionTitle: 'Day 2: 아침', place: '교실' }, { previousItem: { chapter: 'day-1' } });
assert.equal(chapterInfo.chapter, 'day-2');
assert.equal(chapterInfo.title, 'Day 2: 아침');
assert.equal(chapterInfo.place, '교실');
assert.equal(shouldShowChapterCard({ chapter: 'day-2' }, { chapter: 'day-1' }), true);
assert.equal(shouldShowChapterCard({ chapter: 'day-2' }, { chapter: 'day-2' }), false);
```

- [ ] **Step 2: Run test to verify it fails**

Run `npm test`.

Expected: FAIL because `chapterEngine.js` does not exist.

- [ ] **Step 3: Implement helper**

Create `src/engine/chapterEngine.js`:

```js
import { safeText } from '../utils/vnText.js';

export function shouldShowChapterCard(item, previousItem = null) {
  if (!item) return false;
  if (item.chapterCard === false) return false;
  if (item.type === 'banner' && item.kind === 'chapter') return true;
  const currentChapter = safeText(item.chapter || item.day);
  const previousChapter = safeText(previousItem?.chapter || previousItem?.day);
  return Boolean(currentChapter && currentChapter !== previousChapter);
}

export function getChapterInfo(item, { previousItem = null, fallbackTitle = '스토리' } = {}) {
  return {
    visible: shouldShowChapterCard(item, previousItem),
    chapter: safeText(item?.chapter || item?.day),
    title: safeText(item?.sectionTitle || item?.episodeTitle || item?.place || fallbackTitle),
    place: safeText(item?.place || ''),
    mood: safeText(item?.mood || '')
  };
}
```

- [ ] **Step 4: Run tests**

Run `npm test`.

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/engine/chapterEngine.js tests/ui-contract.test.mjs
git commit -m "Define explicit VN chapter transitions

Constraint: Chapter presentation should be derived from scenario metadata.
Confidence: high
Scope-risk: narrow
Directive: Do not hardcode day labels inside React components.
Tested: npm test"
```

### Task 3.2: Render chapter cards and add scenario day beats

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/data/scenario.js`
- Modify: `src/styles.css`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing tests**

Add assertions:

```js
assert.match(
  component,
  /import \{ getChapterInfo \} from '\.\.\/engine\/chapterEngine\.js';/,
  'BAVisualNovel should derive chapter cards through chapterEngine.'
);
assert.match(
  component,
  /<ChapterCard\s+info=\{chapterInfo\}/,
  'BAVisualNovel should render a ChapterCard overlay.'
);
assert.match(
  scenarioSource,
  /kind:\s*'chapter'[\s\S]*chapter:\s*'day-1'[\s\S]*kind:\s*'chapter'[\s\S]*chapter:\s*'day-2'/,
  'Scenario should include explicit Day 1 and Day 2 chapter transition beats.'
);
assert.match(
  styles,
  /\.chapter-card[\s\S]*?animation:\s*chapterCardIn/i,
  'Chapter card should have its own polished transition.'
);
```

- [ ] **Step 2: Run test to verify it fails**

Run `npm test`.

Expected: FAIL on missing ChapterCard integration.

- [ ] **Step 3: Wire chapter info in `BAVisualNovel.jsx`**

Import:

```js
import { getChapterInfo } from '../engine/chapterEngine.js';
```

Add after `routeStatus`:

```js
const previousItem = scenario[index - 1] || null;
const chapterInfo = useMemo(() => getChapterInfo(item, { previousItem, fallbackTitle: episodeInfo.sectionTitle || episodeInfo.title }), [episodeInfo.sectionTitle, episodeInfo.title, item, previousItem]);
```

Render above `EndingToast`:

```jsx
<ChapterCard info={chapterInfo} />
```

Add component:

```jsx
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
```

- [ ] **Step 4: Add scenario chapter beats**

In `src/data/scenario.js`, ensure the first day opening beat has:

```js
{
  id: 'day1-chapter-card',
  type: 'banner',
  kind: 'chapter',
  chapter: 'day-1',
  sectionTitle: 'Day 1: 비 오는 방과 후',
  mood: 'rain',
  text: 'Day 1 · 비 오는 방과 후',
  nextId: 'opening',
  directives: [
    { type: 'BGM', cue: 'bgmRain', fadeMs: 900 },
    { type: 'AMBIENT', id: 'ambientRain', cue: 'ambientRain', volume: 42 }
  ]
}
```

Ensure the second day starts with:

```js
{
  id: 'day2-chapter-card',
  type: 'banner',
  kind: 'chapter',
  chapter: 'day-2',
  sectionTitle: 'Day 2: 우산을 돌려주는 아침',
  mood: 'warm',
  text: 'Day 2 · 우산을 돌려주는 아침',
  nextId: 'day2-morning',
  directives: [
    { type: 'BGM', cue: 'bgmWarm', fadeMs: 900 },
    { type: 'STOP_AMBIENT', id: 'ambientRain' }
  ]
}
```

Update any `nextId` that previously jumped directly from day 1 to `day2-morning` so it points to `day2-chapter-card`.

- [ ] **Step 5: Add CSS**

```css
.chapter-card {
  position: absolute;
  left: 50%;
  top: 46px;
  transform: translateX(-50%);
  width: min(520px, 72%);
  padding: 16px 24px;
  border-radius: 18px;
  color: #f8fbff;
  text-align: center;
  background: linear-gradient(135deg, rgba(15, 37, 61, .88), rgba(46, 106, 142, .72));
  box-shadow: 0 16px 42px rgba(0, 0, 0, .25), inset 0 0 0 1px rgba(255, 255, 255, .42);
  pointer-events: none;
  z-index: 18;
  animation: chapterCardIn 1400ms ease both;
}

.chapter-card span {
  display: block;
  color: #57c3c2;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.chapter-card strong {
  display: block;
  margin-top: 3px;
  font-size: 22px;
  letter-spacing: -.02em;
}

.chapter-card em {
  display: block;
  margin-top: 4px;
  font-style: normal;
  color: rgba(255, 255, 255, .78);
  font-size: 13px;
}

@keyframes chapterCardIn {
  0% { opacity: 0; transform: translate(-50%, -12px) scale(.98); }
  16% { opacity: 1; transform: translate(-50%, 0) scale(1); }
  78% { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, -4px) scale(1); }
}
```

- [ ] **Step 6: Run tests and build**

Run:

```bash
npm test
npm run build
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/components/BAVisualNovel.jsx src/data/scenario.js src/styles.css tests/ui-contract.test.mjs
git commit -m "Make day transitions feel like VN chapters

Constraint: Chapter changes must be scenario-authored, not inferred from array positions.
Confidence: high
Scope-risk: moderate
Directive: Keep chapter cards short enough not to block dialogue flow.
Tested: npm test; npm run build"
```

---

## Milestone 4: Hyungyeom Character Expression Flow

### Task 4.1: Add character profile metadata

**Files:**
- Create: `src/data/characterProfiles.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing tests**

Add import:

```js
import { characterProfiles, resolveCharacterAsset } from '../src/data/characterProfiles.js';
```

Add assertions:

```js
assert.equal(characterProfiles.hyeongyeom.name, '현겸');
assert.equal(resolveCharacterAsset({ id: 'hyeongyeom', expression: 'smile' }), '/assets/character/hyungyeom.png');
assert.equal(resolveCharacterAsset({ id: 'missing', src: '/assets/character/custom.png' }), '/assets/character/custom.png');
```

- [ ] **Step 2: Run test to verify it fails**

Run `npm test`.

Expected: FAIL because `characterProfiles.js` does not exist.

- [ ] **Step 3: Implement profiles with safe fallback**

Create `src/data/characterProfiles.js`:

```js
export const characterProfiles = {
  hyeongyeom: {
    id: 'hyeongyeom',
    name: '현겸',
    baseSrc: '/assets/character/hyungyeom.png',
    expressions: {
      normal: '/assets/character/hyungyeom.png',
      smile: '/assets/character/hyungyeom.png',
      blush: '/assets/character/hyungyeom.png',
      wet: '/assets/character/hyungyeom.png',
      surprised: '/assets/character/hyungyeom.png',
      quiet: '/assets/character/hyungyeom.png'
    }
  }
};

export function resolveCharacterAsset(character) {
  const profile = characterProfiles[character?.id];
  const expression = character?.expression || 'normal';
  return profile?.expressions?.[expression] || profile?.baseSrc || character?.src || '';
}
```

- [ ] **Step 4: Run tests**

Run `npm test`.

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/data/characterProfiles.js tests/ui-contract.test.mjs
git commit -m "Centralize Hyungyeom expression assets

Constraint: Only hyungyeom.png exists now, so expressions must fallback safely.
Confidence: high
Scope-risk: narrow
Directive: Add real expression PNG paths here when assets exist.
Tested: npm test"
```

### Task 4.2: Use expression assets and route variants

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/data/scenario.js`
- Modify: `src/styles.css`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing tests**

Add assertions:

```js
assert.match(
  component,
  /import \{ resolveCharacterAsset \} from '\.\.\/data\/characterProfiles\.js';/,
  'CharacterSprite should resolve expression-specific assets through characterProfiles.'
);
assert.match(
  characterSpriteSource,
  /const resolvedSrc = resolveCharacterAsset\(character\)[\s\S]*href=\{resolvedSrc\}/,
  'CharacterSprite should render the resolved expression asset.'
);
assert.match(
  scenarioSource,
  /variants:\s*\[[\s\S]*requiredFlags:[\s\S]*shared_umbrella[\s\S]*text:/,
  'Scenario should include route-state text variants for Hyungyeom reactions.'
);
assert.match(
  scenarioSource,
  /expression:\s*'surprised'[\s\S]*expression:\s*'quiet'/,
  'Scenario should use a broader Hyungyeom expression vocabulary.'
);
```

- [ ] **Step 2: Run test to verify it fails**

Run `npm test`.

Expected: FAIL on missing profile integration and scenario variants.

- [ ] **Step 3: Update `CharacterSprite`**

Import:

```js
import { resolveCharacterAsset } from '../data/characterProfiles.js';
```

Inside `CharacterSprite`, add after `currentExpression`:

```js
const resolvedSrc = resolveCharacterAsset(character);
```

Change image condition and href:

```jsx
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
```

- [ ] **Step 4: Add expression animation CSS**

```css
.character-wrap.expression-blush .character-sprite {
  filter: saturate(1.08) brightness(1.03) drop-shadow(0 0 12px rgba(255, 125, 176, .25));
}

.character-wrap.expression-surprised {
  animation: expressionPop 420ms ease both;
}

.character-wrap.expression-quiet .character-sprite {
  filter: saturate(.92) brightness(.96);
}

@keyframes expressionPop {
  0% { transform: translateY(0) scale(1); }
  45% { transform: translateY(-5px) scale(1.012); }
  100% { transform: translateY(0) scale(1); }
}
```

- [ ] **Step 5: Add route-state variants to scenario**

On one day 2 dialogue after the phone branch, add:

```js
variants: [
  {
    requiredFlags: ['shared_umbrella'],
    text: '어제 우산 같이 쓴 거, 아직도 생각나. 학범이는 아무렇지 않은 척하려다 말을 삼켰다.'
  },
  {
    requiredFlags: ['playful_reply'],
    text: '어제 답장, 좀 장난스러웠지. 현겸은 웃음을 참는 얼굴로 학범이를 올려다봤다.'
  }
]
```

Add expression changes across existing SCG directives:

```js
{ type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'surprised', effect: 'question' }
{ type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'quiet' }
```

- [ ] **Step 6: Run tests and build**

Run:

```bash
npm test
npm run build
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/components/BAVisualNovel.jsx src/data/scenario.js src/styles.css tests/ui-contract.test.mjs
git commit -m "Make Hyungyeom react through route-aware expressions

Constraint: Character art is currently a single PNG with expression-class polish.
Confidence: high
Scope-risk: moderate
Directive: Keep scenario variants tied to flags, not hidden index checks.
Tested: npm test; npm run build"
```

---

## Milestone 5: Phone / SNS Expansion

### Task 5.1: Add phone message normalizer

**Files:**
- Create: `src/engine/phoneEngine.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing tests**

Add import:

```js
import { normalizePhoneMessages, normalizePhoneReplies } from '../src/engine/phoneEngine.js';
```

Add assertions:

```js
const phoneMessages = normalizePhoneMessages({
  name: '현겸',
  text: '집 도착했어.',
  messages: [
    { from: 'hyeongyeom', text: '우산 고마워.', read: true },
    { from: 'hakbeom', text: '내일 봐.', pending: true }
  ]
});
assert.equal(phoneMessages[0].side, 'other');
assert.equal(phoneMessages[1].side, 'me');
assert.equal(phoneMessages[1].pending, true);

const phoneReplies = normalizePhoneReplies({ replies: ['바로 답장한다.'], next: ['reply-warm'] });
assert.deepEqual(phoneReplies[0], { index: 0, text: '바로 답장한다.', targetId: 'reply-warm' });
```

- [ ] **Step 2: Run test to verify it fails**

Run `npm test`.

Expected: FAIL because `phoneEngine.js` does not exist.

- [ ] **Step 3: Implement phone engine**

Create `src/engine/phoneEngine.js`:

```js
import { safeText } from '../utils/vnText.js';

export function normalizePhoneMessages(item) {
  const messages = Array.isArray(item?.messages) && item.messages.length > 0
    ? item.messages
    : [{ from: item?.from || 'hyeongyeom', text: item?.text || '', read: true }];

  return messages
    .map((message, index) => {
      const from = safeText(message.from || message.sender || 'hyeongyeom');
      return {
        id: safeText(message.id || `${item?.id || 'phone'}-${index}`),
        from,
        side: from === 'hakbeom' || from === 'me' ? 'me' : 'other',
        name: safeText(message.name || (from === 'hakbeom' || from === 'me' ? '학범' : item?.name || '현겸')),
        text: safeText(message.text),
        read: message.read !== false,
        pending: Boolean(message.pending || message.typing)
      };
    })
    .filter((message) => message.text || message.pending);
}

export function normalizePhoneReplies(item) {
  const replies = Array.isArray(item?.replies) ? item.replies : [];
  return replies.map((reply, index) => ({
    index,
    text: safeText(reply),
    targetId: safeText(item?.next?.[index] || item?.choiceNext?.[index] || '')
  }));
}
```

- [ ] **Step 4: Run tests**

Run `npm test`.

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/engine/phoneEngine.js tests/ui-contract.test.mjs
git commit -m "Normalize phone scenes as chat timelines

Constraint: Phone routes must still behave like existing reply choices.
Confidence: high
Scope-risk: narrow
Directive: Keep phoneEngine pure; React should only render normalized messages.
Tested: npm test"
```

### Task 5.2: Render phone chat bubbles and add richer phone content

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/data/scenario.js`
- Modify: `src/styles.css`
- Modify: `src/engine/scenarioValidator.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing tests**

Add assertions:

```js
assert.match(
  component,
  /import \{ normalizePhoneMessages, normalizePhoneReplies \} from '\.\.\/engine\/phoneEngine\.js';/,
  'PhoneMessageScene should use phoneEngine normalization.'
);
assert.match(
  component,
  /className=\{`phone-bubble phone-bubble-\$\{message\.side\}`\}/,
  'Phone UI should render left/right chat bubbles.'
);
assert.match(
  component,
  /className="phone-typing"/,
  'Phone UI should support typing/pending message indicators.'
);
assert.match(
  scenarioSource,
  /messages:\s*\[[\s\S]*from:\s*'hyeongyeom'[\s\S]*from:\s*'hakbeom'[\s\S]*replies:/,
  'Scenario should author phone scenes as multi-message timelines.'
);
assert.match(
  scenarioValidator,
  /messages[\s\S]*phone message text is required/,
  'Scenario validator should validate phone message arrays.'
);
```

- [ ] **Step 2: Run test to verify it fails**

Run `npm test`.

Expected: FAIL on phone UI and validator contracts.

- [ ] **Step 3: Update phone scene render**

Import:

```js
import { normalizePhoneMessages, normalizePhoneReplies } from '../engine/phoneEngine.js';
```

Replace top of `PhoneMessageScene` with:

```js
const messages = normalizePhoneMessages(item);
const replies = normalizePhoneReplies(item);
```

Replace the message body with:

```jsx
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
```

Replace reply mapping with:

```jsx
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
```

- [ ] **Step 4: Add phone CSS**

```css
.phone-chat-list {
  display: grid;
  gap: 10px;
  max-height: 226px;
  overflow: hidden;
  padding-right: 2px;
}

.phone-bubble {
  display: grid;
  gap: 3px;
  max-width: 78%;
  padding: 10px 12px;
  border-radius: 16px;
  font-size: 13px;
  line-height: 1.42;
  box-shadow: 0 8px 18px rgba(13, 31, 48, .12);
}

.phone-bubble-other {
  justify-self: start;
  color: #1b3348;
  background: rgba(255, 255, 255, .92);
  border-bottom-left-radius: 5px;
}

.phone-bubble-me {
  justify-self: end;
  color: white;
  background: linear-gradient(135deg, #48b9c4, #3479c8);
  border-bottom-right-radius: 5px;
}

.phone-bubble-name {
  font-size: 10px;
  font-weight: 900;
  opacity: .65;
}

.phone-bubble em {
  justify-self: end;
  font-size: 10px;
  font-style: normal;
  opacity: .72;
}

.phone-typing {
  letter-spacing: .2em;
  animation: phoneTypingPulse 920ms ease-in-out infinite;
}

@keyframes phoneTypingPulse {
  0%, 100% { opacity: .35; }
  50% { opacity: 1; }
}
```

- [ ] **Step 5: Validate phone message arrays**

In `src/engine/scenarioValidator.js`, inside phone validation, add:

```js
if (Array.isArray(item.messages)) {
  item.messages.forEach((message, messageIndex) => {
    if (!message || typeof message !== 'object') {
      errors.push(`${item.id}: phone message ${messageIndex} must be an object.`);
      return;
    }
    if (!message.text && !message.pending && !message.typing) {
      errors.push(`${item.id}: phone message text is required unless pending is true.`);
    }
  });
}
```

- [ ] **Step 6: Expand scenario phone scenes**

Change the evening phone scene to use timeline messages:

```js
messages: [
  { from: 'hyeongyeom', text: '집 도착했어. 우산은 내일 돌려줄게.', read: true },
  { from: 'hyeongyeom', text: '그리고 오늘... 고마웠어.', read: true },
  { from: 'hakbeom', text: '나도 오늘 좋았어.', read: true }
],
replies: ['내일 기다릴게.', '보관료는 네 웃음으로 받을게.'],
```

Add a second day phone beat with a pending message:

```js
messages: [
  { from: 'hakbeom', text: '옥상 먼저 가 있을게.', read: true },
  { from: 'hyeongyeom', text: '', pending: true }
]
```

- [ ] **Step 7: Run tests and build**

Run:

```bash
npm test
npm run build
```

Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add src/components/BAVisualNovel.jsx src/data/scenario.js src/styles.css src/engine/scenarioValidator.js tests/ui-contract.test.mjs
git commit -m "Turn phone scenes into VN chat timelines

Constraint: Existing phone reply routing must keep working as choice routing.
Confidence: high
Scope-risk: moderate
Directive: Validate phone messages before adding new SNS-style beats.
Tested: npm test; npm run build"
```

---

## Cross-Cutting Cleanup and Documentation

### Task 6.1: Clamp persisted settings ranges

**Files:**
- Modify: `src/engine/saveCodec.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing test**

Update the existing `normalizedClampedSave` assertion to include out-of-range values:

```js
settings: { textSpeedMs: -50, autoDelayMs: 999999, bgmVolume: 999, seVolume: -10 },
```

Then assert:

```js
assert.deepEqual(normalizedClampedSave.settings, {
  textSpeedMs: 8,
  autoDelayMs: 2600,
  bgmVolume: 100,
  seVolume: 0
});
```

- [ ] **Step 2: Run test to verify it fails**

Run `npm test`.

Expected: FAIL because settings are not clamped.

- [ ] **Step 3: Implement settings clamp**

In `saveCodec.js`, add:

```js
function clampNumber(value, min, max) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return undefined;
  return Math.min(max, Math.max(min, numeric));
}
```

Replace `normalizeSettings()` numeric assignments:

```js
const textSpeedMs = clampNumber(value.textSpeedMs, 8, 60);
if (textSpeedMs !== undefined) settings.textSpeedMs = textSpeedMs;
const autoDelayMs = clampNumber(value.autoDelayMs, 500, 2600);
if (autoDelayMs !== undefined) settings.autoDelayMs = autoDelayMs;
const bgmVolume = clampNumber(value.bgmVolume, 0, 100);
if (bgmVolume !== undefined) settings.bgmVolume = bgmVolume;
const seVolume = clampNumber(value.seVolume, 0, 100);
if (seVolume !== undefined) settings.seVolume = seVolume;
```

- [ ] **Step 4: Run tests**

Run `npm test`.

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/engine/saveCodec.js tests/ui-contract.test.mjs
git commit -m "Clamp persisted VN settings to UI ranges

Constraint: localStorage payloads are untrusted and can contain arbitrary numbers.
Confidence: high
Scope-risk: narrow
Directive: Keep settings ranges aligned with ConfigRange props.
Tested: npm test"
```

### Task 6.2: Document new authoring contracts

**Files:**
- Modify: `docs/scenario-authoring.md`
- Modify: `docs/development-guide.md`
- Modify: `README.md`

- [ ] **Step 1: Update scenario authoring docs**

Add sections with these exact contracts:

```md
### `BGM` / `AMBIENT`

`BGM` changes the looping music track. `AMBIENT` adds a looping background sound such as rain. Use named cues from `App.jsx` or direct `/assets/bgm/...` paths.

```js
{ type: 'BGM', cue: 'bgmRain', fadeMs: 900 }
{ type: 'AMBIENT', id: 'ambientRain', cue: 'ambientRain', volume: 42 }
{ type: 'STOP_AMBIENT', id: 'ambientRain' }
```

### Chapter cards

Use `kind: 'chapter'`, `chapter`, and `sectionTitle` on a banner scene when a day starts.

```js
{ id: 'day2-chapter-card', type: 'banner', kind: 'chapter', chapter: 'day-2', sectionTitle: 'Day 2: 우산을 돌려주는 아침' }
```

### Phone timelines

Phone scenes may use `messages` for chat bubbles. `from: 'hakbeom'` renders on the right; other senders render on the left. `pending: true` renders a typing indicator.
```

- [ ] **Step 2: Update development guide**

Add the new files to the project structure table and mention:

```md
- Audio playback side effects stay in `BAVisualNovel.jsx`; audio directive calculation stays in `src/engine/audioEngine.js`.
- Save card display metadata is built by `src/engine/saveSummary.js`; do not duplicate summary formatting inside modal JSX.
- Phone display data is normalized by `src/engine/phoneEngine.js` before rendering.
```

- [ ] **Step 3: Update README feature list**

Add:

```txt
- BGM/ambient directive state and BGM volume config
- Day/chapter transition card
- Save/load slot cards with chapter, preview, affection, thumbnail
- Hyungyeom expression profile fallback
- Phone/SNS chat bubbles with read/typing presentation
```

- [ ] **Step 4: Run validation**

Run:

```bash
npm test
npm run build
npm audit --audit-level=moderate
```

Expected: PASS and no moderate-or-higher audit findings.

- [ ] **Step 5: Commit**

```bash
git add docs/scenario-authoring.md docs/development-guide.md README.md
git commit -m "Document the polished VN authoring contracts

Constraint: Scenario authors need directive rules before adding more route content.
Confidence: high
Scope-risk: narrow
Directive: Keep docs updated with every new scenario DSL field.
Tested: npm test; npm run build; npm audit --audit-level=moderate"
```

---

## Final Verification

- [ ] Run full checks:

```bash
npm test
npm run build
npm audit --audit-level=moderate
```

- [ ] Start the dev server:

```bash
npm run dev
```

- [ ] Smoke these URLs manually or with screenshot helper:

```txt
http://localhost:5173/
http://localhost:5173/?id=day1-chapter-card
http://localhost:5173/?id=phone-evening-message
http://localhost:5173/?id=day2-chapter-card
http://localhost:5173/?screen=game&id=ending-promise
```

- [ ] Check browser console: no uncaught React/runtime errors.
- [ ] Check title START, LOAD, CONFIG, GALLERY modals still layer above title screen.
- [ ] Check SAVE slot card displays chapter title, line preview, affection label, and date.
- [ ] Check BGM/ambient missing files do not crash playback.
- [ ] Check phone replies still route to the intended next scene.
- [ ] Check terminal endings do not wrap to opening.

## Plan Self-Review

- Spec coverage: all five requested priorities are covered by Milestones 1 through 5, with cross-cutting save/settings/docs cleanup in Milestone 6.
- Placeholder scan: the plan contains concrete file paths, commands, test snippets, implementation snippets, and commit commands for each task.
- Type consistency: helper names are consistent across tasks: `audioEngine`, `chapterEngine`, `saveSummary`, `characterProfiles`, and `phoneEngine` are imported by the same names used in tests and React integration.
