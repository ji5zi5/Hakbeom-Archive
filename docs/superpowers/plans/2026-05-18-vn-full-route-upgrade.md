# VN Full Route Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the current short VN prototype into a stronger single-route dating sim with visible choice consequences, richer route events, message/recollection systems, stable presentation, and route unlock feedback.

**Architecture:** Keep the current Vite/React stack and avoid new dependencies. Add small, focused data/helper modules around the existing `BAVisualNovel.jsx` instead of expanding it further. Preserve the Blue Archive-style presentation while adding VN-specific state, conditional scenario branches, gallery/replay data, and read/skip behavior.

**Tech Stack:** React 18, Vite, plain CSS/SVG, Node `assert` contract tests, optional Playwright screenshot scripts.

---

## File Structure

- Modify `src/components/BAVisualNovel.jsx`: integrate new helpers, render phone/recollection/gallery UI, update skip/read behavior.
- Modify `src/data/scenario.js`: expand the route into chapters, events, conditional lines, unlock metadata, and ending routes.
- Create `src/data/routeConfig.js`: route thresholds, gallery/recollection definitions, affection labels.
- Create `src/utils/vnState.js`: affection/flag/read/unlock helpers.
- Create `src/utils/vnText.js`: dialogue wrapping and text reveal helpers currently embedded in the component.
- Modify `src/styles.css`: phone UI, gallery/recollection panels, route feedback, scene polish.
- Modify `tests/ui-contract.test.mjs`: add contract tests before each implementation task.
- Create or update `scripts/capture-vn-regression.mjs`: visual smoke captures for route, phone, gallery, and ending states.

## Task 1: Lock Current Layout and Add Missing VN Contract Tests

**Files:**
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add failing contract assertions for new modules**

Add assertions that require:

```js
const routeConfig = readFileSync('src/data/routeConfig.js', 'utf8');
const vnState = readFileSync('src/utils/vnState.js', 'utf8');
const vnText = readFileSync('src/utils/vnText.js', 'utf8');

assert.match(routeConfig, /export const routeConfig = \{[\s\S]*?affectionLabels[\s\S]*?galleryItems[\s\S]*?recollectionItems/);
assert.match(vnState, /export function applyRouteRewards[\s\S]*?export function markLineRead[\s\S]*?export function unlockGalleryItem/);
assert.match(vnText, /export function wrapDialogueText[\s\S]*?export function getVisibleDialogueLines/);
```

- [ ] **Step 2: Add failing tests for feature expectations**

Add assertions for scenario and UI contracts:

```js
assert.match(scenarioSource, /chapter:\s*'day-2'/, 'Scenario should include a second-day route chapter.');
assert.match(scenarioSource, /kind:\s*'phone'/, 'Scenario should include phone message events.');
assert.match(component, /function PhoneMessageScene/, 'Phone message scene should be renderable.');
assert.match(component, /function GalleryModal/, 'Gallery/recollection modal should exist.');
assert.match(component, /readLines[\s\S]*?skipReadOnly/, 'Skip should respect read-line state.');
```

- [ ] **Step 3: Run RED test**

Run: `npm test`

Expected: FAIL mentioning missing `routeConfig.js`, `vnState.js`, `vnText.js`, and new components.

## Task 2: Extract Text and VN State Helpers

**Files:**
- Create: `src/utils/vnText.js`
- Create: `src/utils/vnState.js`
- Modify: `src/components/BAVisualNovel.jsx`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Move dialogue text helpers to `src/utils/vnText.js`**

Create:

```js
export const DIALOGUE_WRAP_CHARS = 48;
export const DIALOGUE_WRAP_WIDTH = 760;
export const DIALOGUE_MAX_LINES = 3;

export function safeText(value) {
  return value == null ? '' : String(value);
}

export function measureDialogueText(text) {
  return [...safeText(text)].reduce((width, char) => {
    if (/[a-z0-9]/i.test(char)) return width + 10.4;
    if (/\s/.test(char)) return width + 6.5;
    if (/[,.'"!?()[\]{}:;~`]/.test(char)) return width + 6.8;
    return width + 20.2;
  }, 0);
}

export function wrapDialogueText(text, options = {}) {
  const limit = options.maxChars ?? DIALOGUE_WRAP_CHARS;
  const maxWidth = options.maxWidth ?? DIALOGUE_WRAP_WIDTH;
  const maxLines = options.maxLines ?? DIALOGUE_MAX_LINES;
  const words = safeText(text).replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > limit || measureDialogueText(candidate) > maxWidth) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, maxLines);
}

export function getVisibleDialogueLines(text, visibleCount) {
  let remaining = visibleCount;
  return wrapDialogueText(text).map((line) => {
    const visible = line.slice(0, Math.max(0, Math.min(remaining, line.length)));
    remaining -= line.length + 1;
    return visible;
  });
}
```

- [ ] **Step 2: Create `src/utils/vnState.js`**

Create:

```js
export function uniqueValues(values) {
  return [...new Set(values.filter(Boolean))];
}

export function applyRouteRewards(gameState, reward = {}, choiceMeta = null) {
  const affection = { ...(gameState.affection || {}) };
  for (const [target, delta] of Object.entries(reward.affection || {})) {
    affection[target] = (affection[target] || 0) + Number(delta || 0);
  }
  return {
    ...gameState,
    affection,
    flags: uniqueValues([...(gameState.flags || []), ...(reward.flags || [])]),
    choices: choiceMeta ? [...(gameState.choices || []), choiceMeta] : (gameState.choices || []),
    readLines: gameState.readLines || [],
    unlockedGallery: gameState.unlockedGallery || [],
    unlockedRecollections: gameState.unlockedRecollections || []
  };
}

export function markLineRead(gameState, itemId) {
  if (!itemId) return gameState;
  return { ...gameState, readLines: uniqueValues([...(gameState.readLines || []), itemId]) };
}

export function unlockGalleryItem(gameState, itemId) {
  if (!itemId) return gameState;
  return { ...gameState, unlockedGallery: uniqueValues([...(gameState.unlockedGallery || []), itemId]) };
}
```

- [ ] **Step 3: Import helpers in `BAVisualNovel.jsx` and remove duplicates**

Use:

```js
import { getVisibleDialogueLines, safeText, wrapDialogueText } from '../utils/vnText.js';
import { applyRouteRewards, markLineRead, unlockGalleryItem, uniqueValues } from '../utils/vnState.js';
```

- [ ] **Step 4: Run tests**

Run: `npm test`

Expected: PASS for extraction-related assertions, remaining feature tests may still fail.

## Task 3: Expand Scenario Into a Full Single Route

**Files:**
- Create: `src/data/routeConfig.js`
- Modify: `src/data/scenario.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Create route metadata**

Create `src/data/routeConfig.js`:

```js
export const routeConfig = {
  affectionTarget: 'hyeongyeom',
  affectionLabels: [
    { min: 0, label: '어색함' },
    { min: 4, label: '신경 쓰임' },
    { min: 8, label: '가까워짐' },
    { min: 12, label: '특별함' }
  ],
  galleryItems: [
    { id: 'cg-umbrella', title: '같은 우산', unlockFlag: 'shared_umbrella' },
    { id: 'cg-message', title: '늦은 답장', unlockFlag: 'warm_reply' },
    { id: 'cg-promise', title: '내일의 약속', unlockFlag: 'promise_hand' }
  ],
  recollectionItems: [
    { id: 'rec-day1', title: '비 오는 방과 후', startId: 'opening' },
    { id: 'rec-message', title: '현겸의 메시지', startId: 'phone-vibration' },
    { id: 'rec-ending', title: '빗속의 교문', startId: 'ending-promise' }
  ]
};
```

- [ ] **Step 2: Add route chapters to scenario**

Extend `scenario` with clear chapters:

```js
{
  id: 'day2-morning-message',
  chapter: 'day-2',
  kind: 'phone',
  type: 'phone',
  name: '현겸',
  text: '어제 우산 고마웠어. 오늘 점심시간에 잠깐 볼 수 있어?',
  replies: ['갈게. 기다려.', '학생회장 일정 확인 후 승인.'],
  rewards: [
    { affection: { hyeongyeom: 2 }, flags: ['day2_direct_reply'] },
    { affection: { hyeongyeom: 1 }, flags: ['day2_playful_reply'] }
  ],
  next: ['day2-rooftop-direct', 'day2-rooftop-playful']
}
```

Add at least three second-day beats: message, rooftop/lunch conversation, late confession buildup.

- [ ] **Step 3: Add conditional reaction lines**

Use fields that can be resolved by flags:

```js
variants: [
  { flags: ['direct_compliment'], text: '어제 네 말, 계속 생각났어.' },
  { flags: ['student_council_help'], text: '역시 학범이는 챙겨주는 쪽이구나.' },
  { default: true, text: '오늘도 비가 올 것 같아.' }
]
```

- [ ] **Step 4: Run tests**

Run: `npm test`

Expected: PASS scenario metadata assertions.

## Task 4: Implement Phone Message Scene and Choice Rewards

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/styles.css`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add failing tests for phone scene rendering**

Assert `PhoneMessageScene` receives `replies`, renders `phone-reply`, and calls `onChoose`.

- [ ] **Step 2: Implement `PhoneMessageScene`**

Add component:

```jsx
function PhoneMessageScene({ visible, item, uiHidden, onChoose }) {
  return (
    <g className="scene scene-phone" style={{ display: visible ? 'inline' : 'none' }}>
      <SceneBackground backgroundSrc={item?.backgroundSrc || '/assets/ui/image0_13_6.jpg'} />
      {!uiHidden && (
        <foreignObject x="327" y="58" width="475" height="408">
          <div className="phone-ui">
            <div className="phone-head">현겸</div>
            <div className="phone-message">{safeText(item?.text)}</div>
            <div className="phone-replies">
              {(item?.replies || []).map((reply, index) => (
                <button key={reply} type="button" onClick={() => onChoose(index)}>{reply}</button>
              ))}
            </div>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
```

- [ ] **Step 3: Route `mode === 'phone'` into the render tree**

In the main SVG, render:

```jsx
<PhoneMessageScene visible={mode === 'phone'} item={item} uiHidden={uiHidden} onChoose={choose} />
```

Update `choose` to read `item.replies` when `item.type === 'phone'`.

- [ ] **Step 4: Style phone UI**

Add CSS:

```css
.phone-ui { height: 100%; border-radius: 28px; background: rgba(245,250,255,.94); padding: 22px; font-family: inherit; }
.phone-head { font-weight: 900; text-align: center; color: #24384c; }
.phone-message { margin: 34px 0; padding: 14px 16px; border-radius: 18px; background: #dff4ff; font-weight: 800; }
.phone-replies { display: grid; gap: 10px; }
.phone-replies button { border: 0; border-radius: 999px; padding: 12px 14px; font-weight: 900; background: #fff; color: #24384c; }
```

- [ ] **Step 5: Verify**

Run: `npm test && npm run build`.

## Task 5: Add Gallery and Recollection Unlock UI

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/styles.css`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add modal state**

Add:

```js
const [galleryOpen, setGalleryOpen] = useState(false);
```

Add a `GALLERY` button to the title menu and game system menu only if it does not clutter the top-left controls; prefer title menu + quick menu.

- [ ] **Step 2: Implement `GalleryModal`**

Component should read `routeConfig.galleryItems` and `gameState.unlockedGallery`:

```jsx
function GalleryModal({ open, gameState, onClose }) {
  const unlocked = new Set(gameState.unlockedGallery || []);
  return (
    <div className="ba-modal-layer gallery-panel" aria-hidden={open ? 'false' : 'true'}>
      <div className="ba-modal-card gallery-card">
        <div className="ba-modal-head"><span className="ba-modal-title">Gallery</span><button onClick={onClose}>×</button></div>
        <div className="gallery-grid">
          {routeConfig.galleryItems.map((item) => <div key={item.id} className={unlocked.has(item.id) ? 'gallery-tile' : 'gallery-tile locked'}>{unlocked.has(item.id) ? item.title : 'LOCKED'}</div>)}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Unlock gallery items when flags appear**

After reward application, map flags to gallery unlocks with `unlockGalleryItem`.

- [ ] **Step 4: Verify**

Run: `npm test`, then manually select choices that unlock one item and capture screenshot.

## Task 6: Make Choices Visibly Matter Later

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/data/scenario.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add variant resolver test**

Require a helper:

```js
assert.match(component, /function resolveItemText\(item, gameState\)[\s\S]*?variants/);
```

- [ ] **Step 2: Implement `resolveItemText`**

```js
function resolveItemText(item, gameState) {
  const flags = new Set(gameState.flags || []);
  const variant = (item?.variants || []).find((candidate) =>
    candidate.default || (candidate.flags || []).every((flag) => flags.has(flag))
  );
  return variant?.text || item?.text || '';
}
```

Use it for `fullText` and log lines.

- [ ] **Step 3: Add at least five variant lines**

Add variants to day-2 and ending buildup lines so earlier choices alter wording.

- [ ] **Step 4: Verify**

Use a Playwright script to choose two different first choices and assert later line text differs.

## Task 7: Improve Skip, Read State, and Replay Feel

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/utils/vnState.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Mark lines read on display**

When `item.id` changes:

```js
setGameState((current) => markLineRead(current, item.id));
```

- [ ] **Step 2: Respect `skipReadOnly`**

Skip should stop if `settings.skipReadOnly` is true and the next line is unread.

- [ ] **Step 3: Add read state to saves**

Ensure `buildSavePayload` includes `gameState.readLines`, unlocked gallery, and recollections through existing `gameState`.

- [ ] **Step 4: Verify**

Run `npm test`; manually confirm skip does not jump through unread new content.

## Task 8: Visual/Sound Polish Pass

**Files:**
- Modify: `src/data/scenario.js`
- Modify: `src/styles.css`
- Add optional placeholders under `public/assets/bg/` and `public/assets/se/`

- [ ] **Step 1: Add background placeholders**

If no new art is available, add CSS/SVG-backed pseudo backgrounds by reusing `image0_13_6.jpg` plus overlays. Do not add external dependencies.

- [ ] **Step 2: Add scene mood metadata**

Use:

```js
mood: 'rain' | 'warm' | 'tense' | 'confession'
```

Map mood to subtle overlay color and optional SE cue.

- [ ] **Step 3: Tune character presentation**

Add CSS classes for expression variants:

```css
.expression-blush .character-sprite { filter: saturate(1.08) brightness(1.04); }
.expression-wet .character-sprite { filter: saturate(.95) brightness(.96); }
.expression-smile .character-sprite { filter: saturate(1.04) contrast(1.03); }
```

- [ ] **Step 4: Verify screenshots**

Capture:

```bash
LD_LIBRARY_PATH=$PWD/.deps/root/usr/lib/x86_64-linux-gnu node scripts/capture-page.mjs 'http://127.0.0.1:5175/?id=day2-morning-message' .omx/visual/day2-message.png
```

## Task 9: End-to-End Regression and Handoff

**Files:**
- Create: `scripts/capture-vn-regression.mjs`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Create regression capture script**

Script should capture title, normal dialogue, choice, phone UI, gallery, and one ending.

- [ ] **Step 2: Run full verification**

Run:

```bash
npm test && npm run build && npm audit --audit-level=moderate
```

Expected: exit code 0 and `found 0 vulnerabilities`.

- [ ] **Step 3: Manual smoke path**

Run dev server and click through:
1. START
2. First choice
3. Phone reply choice
4. Final promise choice
5. Confirm ending does not wrap to opening
6. Open gallery and confirm unlocked tile

- [ ] **Step 4: Commit checkpoint**

If this workspace is a git repo:

```bash
git add src tests scripts public docs

git commit -m "Make the VN route feel complete" -m "Tested: npm test && npm run build && npm audit --audit-level=moderate"
```

If no git repo exists, report changed files and verification evidence instead.

## Self-Review

- Spec coverage: route depth, choice consequence, phone UI, gallery/recollection, read/skip, visual polish, and testing are covered.
- Placeholder scan: no implementation step depends on undefined files without a creation step.
- Type consistency: `gameState.flags`, `gameState.readLines`, `gameState.unlockedGallery`, and route IDs are consistently named.
- Scope note: this is large but still one coherent milestone: a complete single-route prototype, not multiple routes.
