# VN Hardening & Expansion Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the current Hakbeom/Hyeongyeom visual novel stable enough to expand by fixing reviewed runtime gaps, adding semantic validation/tests, and extracting the core VN engine out of the monolithic React component.

**Architecture:** Keep the current Vite + React app and UI intact while moving pure transition logic into `src/engine/`. Add small validation and codec layers before adding more content. React should render state and call engine functions; it should not own graph validation, save migration, replay search, or director command semantics long-term.

**Tech Stack:** Vite, React 18, ES modules, Node `assert`, browser `localStorage`, native `Audio`, existing SVG/CSS UI.

---

## File Structure

Create:
- `src/engine/scenarioValidator.js` — validates scenario IDs, targets, choices, rewards, directives, endings, and unlock refs.
- `src/engine/saveCodec.js` — serializes, normalizes, and migrates save payloads.
- `src/engine/vnEngine.js` — pure route/index/choice/ending/replay transition functions.
- `src/engine/directorEngine.js` — pure BCG/SCG/SE/E/overlay/mood directive application.
- `src/utils/accessibility.js` — shared keyboard activation helper for SVG pseudo-buttons.

Modify:
- `src/components/BAVisualNovel.jsx` — consume engine/save/director helpers; wire volume settings; add keyboard handlers.
- `src/utils/vnState.js` — clamp affection and normalize route-state updates.
- `src/data/routeConfig.js` — keep thresholds/max as single source of truth.
- `tests/ui-contract.test.mjs` — add semantic tests alongside current source-contract tests.
- `scripts/capture-vn-regression.mjs` — keep as optional visual smoke; do not block core test unless Playwright is declared.
- `package.json` — optionally add `test:visual` script only if Playwright becomes a dependency.

---

## Task 1: Add scenario graph validator

**Files:**
- Create: `src/engine/scenarioValidator.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add failing semantic test for scenario validity**

Append this near the scenario tests in `tests/ui-contract.test.mjs`:

```js
import { validateScenario } from '../src/engine/scenarioValidator.js';

{
  const result = validateScenario(scenario, routeConfig);
  assert.deepEqual(result.errors, [], `scenario validator errors: ${result.errors.join('\n')}`);
}
```

- [ ] **Step 2: Run test and confirm missing module failure**

Run:

```bash
npm test
```

Expected:

```txt
Error [ERR_MODULE_NOT_FOUND]: Cannot find module ... src/engine/scenarioValidator.js
```

- [ ] **Step 3: Implement validator**

Create `src/engine/scenarioValidator.js`:

```js
const DIRECTIVE_TYPES = new Set(['BG', 'BG_CG', 'BCG', 'SCG', 'SE', 'E', 'OVERLAY', 'MOOD']);

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function addError(errors, item, message) {
  errors.push(`${item?.id || '<unknown>'}: ${message}`);
}

export function validateScenario(scenario, routeConfig) {
  const errors = [];
  const items = asArray(scenario);
  const ids = new Set();
  const galleryIds = new Set(asArray(routeConfig?.gallery).map((entry) => entry.id));
  const recollectionIds = new Set(asArray(routeConfig?.recollections).map((entry) => entry.id));
  const endingIds = new Set(Object.keys(routeConfig?.endings || {}));

  for (const item of items) {
    if (!item?.id) addError(errors, item, 'missing id');
    if (ids.has(item.id)) addError(errors, item, 'duplicate id');
    ids.add(item.id);
  }

  const requireTarget = (item, target, label) => {
    if (target && !ids.has(target)) addError(errors, item, `${label} target does not exist: ${target}`);
  };

  const validateReward = (item, reward, label) => {
    if (!reward) return;
    for (const galleryId of asArray(reward.gallery)) {
      if (!galleryIds.has(galleryId)) addError(errors, item, `${label} unknown gallery unlock: ${galleryId}`);
    }
    for (const recollectionId of asArray(reward.recollections)) {
      if (!recollectionIds.has(recollectionId)) addError(errors, item, `${label} unknown recollection unlock: ${recollectionId}`);
    }
    if (reward.ending && !endingIds.has(reward.ending)) {
      addError(errors, item, `${label} unknown ending: ${reward.ending}`);
    }
  };

  for (const item of items) {
    requireTarget(item, item.nextId, 'nextId');
    requireTarget(item, item.endingNext?.good, 'endingNext.good');
    requireTarget(item, item.endingNext?.normal, 'endingNext.normal');
    requireTarget(item, item.endingNext?.bad, 'endingNext.bad');

    for (const [index, target] of asArray(item.next).entries()) {
      requireTarget(item, target, `next[${index}]`);
    }

    if (item.type === 'choice') {
      const choiceCount = asArray(item.choices).length;
      if (asArray(item.rewards).length && asArray(item.rewards).length !== choiceCount) {
        addError(errors, item, `rewards length ${asArray(item.rewards).length} does not match choices length ${choiceCount}`);
      }
      if (asArray(item.next).length && asArray(item.next).length !== choiceCount) {
        addError(errors, item, `next length ${asArray(item.next).length} does not match choices length ${choiceCount}`);
      }
    }

    if (item.type === 'phone') {
      const replyCount = asArray(item.replies).length;
      if (asArray(item.rewards).length && asArray(item.rewards).length !== replyCount) {
        addError(errors, item, `phone rewards length ${asArray(item.rewards).length} does not match replies length ${replyCount}`);
      }
      if (asArray(item.next).length && asArray(item.next).length !== replyCount) {
        addError(errors, item, `phone next length ${asArray(item.next).length} does not match replies length ${replyCount}`);
      }
    }

    for (const [index, reward] of asArray(item.rewards).entries()) {
      validateReward(item, reward, `rewards[${index}]`);
    }

    for (const [index, directive] of asArray(item.directives).entries()) {
      const type = String(directive?.type || directive?.command || '').toUpperCase();
      if (type && !DIRECTIVE_TYPES.has(type)) addError(errors, item, `unknown directive type at directives[${index}]: ${type}`);
    }
  }

  return { valid: errors.length === 0, errors };
}
```

- [ ] **Step 4: Run validation test**

Run:

```bash
npm test
```

Expected: existing tests plus validator pass.

- [ ] **Step 5: Commit checkpoint**

```bash
git add src/engine/scenarioValidator.js tests/ui-contract.test.mjs
git commit -m "Harden scenario expansion with graph validation"
```

If this checkout is not a git repository, record the changed files in the handoff instead of committing.

---

## Task 2: Fix route-state affection clamping

**Files:**
- Modify: `src/utils/vnState.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add failing test for affection max**

Append a semantic test:

```js
import { applyRouteRewards } from '../src/utils/vnState.js';

{
  const capped = applyRouteRewards(
    { affection: routeConfig.affectionTarget.max - 1, flags: {}, choices: {}, endings: {}, readLines: {}, gallery: {}, recollections: {} },
    { affection: 99 },
    'test-choice',
    routeConfig,
  );
  assert.equal(capped.affection, routeConfig.affectionTarget.max);
}
```

- [ ] **Step 2: Run test and confirm failure if unclamped**

```bash
npm test
```

Expected before implementation: affection exceeds max.

- [ ] **Step 3: Implement clamp in `src/utils/vnState.js`**

Inside `applyRouteRewards`, replace raw affection addition with:

```js
const maxAffection = Number.isFinite(routeConfig?.affectionTarget?.max)
  ? routeConfig.affectionTarget.max
  : Number.POSITIVE_INFINITY;
const minAffection = Number.isFinite(routeConfig?.affectionTarget?.min)
  ? routeConfig.affectionTarget.min
  : 0;

next.affection = Math.min(
  maxAffection,
  Math.max(minAffection, Number(next.affection || 0) + Number(reward.affection || 0)),
);
```

- [ ] **Step 4: Run tests**

```bash
npm test
npm run build
```

Expected: both pass.

- [ ] **Step 5: Commit checkpoint**

```bash
git add src/utils/vnState.js tests/ui-contract.test.mjs
git commit -m "Keep route affection within configured bounds"
```

---

## Task 3: Add versioned save codec and safer load path

**Files:**
- Create: `src/engine/saveCodec.js`
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add tests for stale index and itemId fallback**

Append:

```js
import { normalizeSavePayload } from '../src/engine/saveCodec.js';

{
  const payload = normalizeSavePayload(
    { version: 1, index: 9999, itemId: scenario[2].id, gameState: {}, settings: {}, directorState: null, log: [] },
    { scenario, fallbackIndex: 0 },
  );
  assert.equal(payload.index, 2);
  assert.equal(payload.itemId, scenario[2].id);
}

{
  const payload = normalizeSavePayload(
    { version: 1, index: 9999, itemId: 'missing-id', gameState: {}, settings: {}, directorState: { broken: true }, log: 'bad' },
    { scenario, fallbackIndex: 0 },
  );
  assert.equal(payload.index, 0);
  assert.equal(payload.itemId, scenario[0].id);
  assert.deepEqual(payload.log, []);
}
```

- [ ] **Step 2: Run test and confirm missing module failure**

```bash
npm test
```

Expected: module not found.

- [ ] **Step 3: Implement `saveCodec`**

Create `src/engine/saveCodec.js`:

```js
export const SAVE_VERSION = 1;

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function findScenarioIndex(scenario, itemId) {
  return scenario.findIndex((item) => item.id === itemId);
}

export function normalizeSavePayload(payload, { scenario, fallbackIndex = 0 } = {}) {
  const items = Array.isArray(scenario) ? scenario : [];
  const safeFallback = items[fallbackIndex] ? fallbackIndex : 0;
  const byItemId = findScenarioIndex(items, payload?.itemId);
  const rawIndex = Number.isInteger(payload?.index) ? payload.index : -1;
  const byIndex = rawIndex >= 0 && rawIndex < items.length ? rawIndex : -1;
  const index = byItemId >= 0 ? byItemId : byIndex >= 0 ? byIndex : safeFallback;
  const item = items[index] || items[0] || { id: '' };

  return {
    version: SAVE_VERSION,
    index,
    itemId: item.id,
    gameState: isPlainObject(payload?.gameState) ? payload.gameState : {},
    settings: isPlainObject(payload?.settings) ? payload.settings : {},
    directorState: isPlainObject(payload?.directorState) ? payload.directorState : null,
    log: Array.isArray(payload?.log) ? payload.log : [],
    ending: typeof payload?.ending === 'string' ? payload.ending : null,
    savedAt: typeof payload?.savedAt === 'string' ? payload.savedAt : new Date().toISOString(),
  };
}

export function createSavePayload({ index, itemId, gameState, settings, directorState, log, ending }) {
  return {
    version: SAVE_VERSION,
    index,
    itemId,
    gameState,
    settings,
    directorState,
    log: Array.isArray(log) ? log : [],
    ending: ending || null,
    savedAt: new Date().toISOString(),
  };
}
```

- [ ] **Step 4: Use codec in `BAVisualNovel.jsx`**

Import:

```js
import { createSavePayload, normalizeSavePayload } from '../engine/saveCodec.js';
```

Replace inline save payload creation with:

```js
const payload = createSavePayload({
  index,
  itemId: item.id,
  gameState,
  settings,
  directorState,
  log,
  ending,
});
```

In `loadGame`, normalize before applying:

```js
const safePayload = normalizeSavePayload(payload, { scenario, fallbackIndex: initialIndex });
const safeIndex = safePayload.index;
const safeDirectorState = safePayload.directorState || replayDirectorState(scenario, safeIndex, directorDefaults, safePayload.gameState);
```

- [ ] **Step 5: Run tests and build**

```bash
npm test
npm run build
```

Expected: both pass.

- [ ] **Step 6: Commit checkpoint**

```bash
git add src/engine/saveCodec.js src/components/BAVisualNovel.jsx tests/ui-contract.test.mjs
git commit -m "Load visual novel saves through a versioned codec"
```

---

## Task 4: Make config volume affect sound playback

**Files:**
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add source contract for volume-aware audio**

Add:

```js
assert.match(componentSource, /function playAudio\(src, volume = 0\.65\)/);
assert.match(componentSource, /audio\.volume = Math\.max\(0, Math\.min\(1, volume\)\)/);
assert.match(componentSource, /settings\.seVolume \/ 100/);
```

- [ ] **Step 2: Update `playAudio`**

Replace current `playAudio` with:

```js
function playAudio(src, volume = 0.65) {
  if (!src || typeof Audio === 'undefined') return;
  const audio = new Audio(src);
  audio.volume = Math.max(0, Math.min(1, volume));
  audio.play().catch(() => {});
}
```

- [ ] **Step 3: Pass SE volume where sounds play**

Change sound calls to:

```js
playAudio(item.se, settings.seVolume / 100);
```

and:

```js
playAudio(choiceSe, settings.seVolume / 100);
```

- [ ] **Step 4: Decide BGM slider behavior**

Until a persistent BGM track exists, change the label to make scope honest:

```jsx
<span>BGM 준비중</span>
```

or keep BGM slider but add a disabled-looking hint. Do not pretend it controls playback until BGM exists.

- [ ] **Step 5: Run tests and build**

```bash
npm test
npm run build
```

Expected: both pass.

- [ ] **Step 6: Commit checkpoint**

```bash
git add src/components/BAVisualNovel.jsx tests/ui-contract.test.mjs
git commit -m "Apply configured sound volume to VN effects"
```

---

## Task 5: Add keyboard activation helper for SVG buttons

**Files:**
- Create: `src/utils/accessibility.js`
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add helper test/contract**

Add source/import assertions:

```js
assert.match(componentSource, /import \{ createKeyboardActivationHandler \} from '\.\.\/utils\/accessibility\.js';/);
assert.match(componentSource, /onKeyDown=\{createKeyboardActivationHandler\(/);
```

- [ ] **Step 2: Create helper**

Create `src/utils/accessibility.js`:

```js
export function createKeyboardActivationHandler(onActivate) {
  return function handleKeyboardActivation(event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    onActivate?.(event);
  };
}
```

- [ ] **Step 3: Apply to SVG role buttons**

Import:

```js
import { createKeyboardActivationHandler } from '../utils/accessibility.js';
```

For each focusable SVG group using `role="button"`, add:

```jsx
onKeyDown={createKeyboardActivationHandler(() => setMenuOpen(true))}
```

Use the matching click action for each button.

- [ ] **Step 4: Run tests and build**

```bash
npm test
npm run build
```

Expected: both pass.

- [ ] **Step 5: Commit checkpoint**

```bash
git add src/utils/accessibility.js src/components/BAVisualNovel.jsx tests/ui-contract.test.mjs
git commit -m "Make SVG VN controls keyboard activatable"
```

---

## Task 6: Extract pure VN route engine

**Files:**
- Create: `src/engine/vnEngine.js`
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add import contract**

Add:

```js
assert.match(componentSource, /from '\.\.\/engine\/vnEngine\.js'/);
```

- [ ] **Step 2: Move pure functions without behavior changes**

Move these functions from `BAVisualNovel.jsx` to `src/engine/vnEngine.js`:

```js
resolveEndingRoute
resolveNextIndex
resolveSkipTargetIndex
getReplayCandidateSteps
findReplayPath
replayDirectorState
```

Export them with the same signatures. If a moved function needs `applyRouteRewards`, import it from `src/utils/vnState.js`.

- [ ] **Step 3: Import moved functions in component**

Add:

```js
import {
  findReplayPath,
  replayDirectorState,
  resolveEndingRoute,
  resolveNextIndex,
  resolveSkipTargetIndex,
} from '../engine/vnEngine.js';
```

Remove local duplicate function declarations.

- [ ] **Step 4: Add semantic route test**

Append:

```js
import { findReplayPath, resolveNextIndex } from '../src/engine/vnEngine.js';

{
  const firstChoiceIndex = scenario.findIndex((item) => item.id === 'choice-first-reaction');
  const nextIndex = resolveNextIndex(scenario, firstChoiceIndex, 0, { affection: 0, flags: {}, endings: {} });
  assert.ok(nextIndex > firstChoiceIndex);
}

{
  const targetIndex = scenario.findIndex((item) => item.id === 'ending-good');
  const path = findReplayPath(scenario, targetIndex, { affection: 10, flags: {}, endings: {} });
  assert.ok(Array.isArray(path));
  assert.ok(path.includes(targetIndex));
}
```

- [ ] **Step 5: Run tests and build**

```bash
npm test
npm run build
```

Expected: both pass and UI behavior unchanged.

- [ ] **Step 6: Commit checkpoint**

```bash
git add src/engine/vnEngine.js src/components/BAVisualNovel.jsx tests/ui-contract.test.mjs
git commit -m "Separate visual novel route transitions from React UI"
```

---

## Task 7: Extract director command engine

**Files:**
- Create: `src/engine/directorEngine.js`
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add import contract**

```js
assert.match(componentSource, /from '\.\.\/engine\/directorEngine\.js'/);
```

- [ ] **Step 2: Move directive helpers**

Move these pure helpers to `src/engine/directorEngine.js`:

```js
normalizeDirectiveCommand
resolveAssetPath
getMoodOverlay
applyDirectorItem
```

Keep function signatures stable. `applyDirectorItem` should accept all values it needs as arguments instead of reading React state.

- [ ] **Step 3: Import from component**

```js
import { applyDirectorItem, getMoodOverlay } from '../engine/directorEngine.js';
```

Remove local duplicates.

- [ ] **Step 4: Add semantic directive test**

Append:

```js
import { applyDirectorItem } from '../src/engine/directorEngine.js';

{
  const initial = { background: null, characters: {}, effects: [], sound: null, moodOverlay: null };
  const next = applyDirectorItem(initial, {
    id: 'directive-test',
    mood: 'tension',
    directives: [{ type: 'BCG', src: '/assets/ui/test.jpg' }],
  });
  assert.equal(next.background, '/assets/ui/test.jpg');
  assert.ok(next.moodOverlay);
}
```

- [ ] **Step 5: Run tests and build**

```bash
npm test
npm run build
```

Expected: both pass.

- [ ] **Step 6: Commit checkpoint**

```bash
git add src/engine/directorEngine.js src/components/BAVisualNovel.jsx tests/ui-contract.test.mjs
git commit -m "Separate director commands from visual novel rendering"
```

---

## Task 8: Add expression-ready character model

**Files:**
- Modify: `src/data/scenario.js`
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/engine/directorEngine.js`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add contract for expression directives**

```js
assert.match(scenarioSource, /expression:/);
assert.match(componentSource, /currentExpression/);
```

- [ ] **Step 2: Extend SCG directive shape in scenario**

Use this pattern in at least one Hyungyeom appearance:

```js
{
  type: 'SCG',
  id: 'hyungyeom',
  src: '/assets/character/hyungyeom.png',
  position: 'center',
  expression: 'normal',
}
```

- [ ] **Step 3: Preserve expression in director state**

When applying an SCG directive, store:

```js
characters[id] = {
  ...characters[id],
  src,
  position,
  expression: directive.expression || characters[id]?.expression || 'normal',
};
```

- [ ] **Step 4: Render expression as data attribute for future CSS/assets**

On the character image/group, add:

```jsx
data-expression={character.expression || 'normal'}
```

- [ ] **Step 5: Run tests and build**

```bash
npm test
npm run build
```

Expected: both pass.

- [ ] **Step 6: Commit checkpoint**

```bash
git add src/data/scenario.js src/components/BAVisualNovel.jsx src/engine/directorEngine.js tests/ui-contract.test.mjs
git commit -m "Prepare character rendering for expression variants"
```

---

## Task 9: Stabilize visual smoke workflow

**Files:**
- Modify: `scripts/capture-vn-regression.mjs`
- Modify: `package.json`
- Modify: `AGENTS.md` if documentation of the command is desired

- [ ] **Step 1: Decide dependency policy**

If visual capture is required for routine verification, add Playwright explicitly:

```bash
npm install -D playwright
```

If not, keep the script optional and document that it requires local Playwright/browser dependencies.

- [ ] **Step 2: Add optional script**

In `package.json`:

```json
"test:visual": "node scripts/capture-vn-regression.mjs"
```

- [ ] **Step 3: Make missing browser dependency error actionable**

In `scripts/capture-vn-regression.mjs`, catch Playwright launch failures and print:

```js
console.error('Visual capture requires Playwright browser system dependencies. Run Playwright install/deps before using npm run test:visual.');
```

- [ ] **Step 4: Run core verification**

```bash
npm test
npm run build
```

Expected: both pass. `npm run test:visual` may remain environment-dependent unless browser dependencies are installed.

- [ ] **Step 5: Commit checkpoint**

```bash
git add package.json package-lock.json scripts/capture-vn-regression.mjs
git commit -m "Document optional VN visual regression capture"
```

---

## Task 10: Content expansion plan after hardening

**Files:**
- Modify: `src/data/scenario.js`
- Modify: `src/data/routeConfig.js`
- Add assets under: `public/assets/character/`, `public/assets/ui/`, `public/assets/se/`

- [ ] **Step 1: Expand story in route-sized slices**

Add one day at a time. Each day should include:

```txt
6-10 dialogue scenes
1 phone scene
2-3 choices
1 CG/recollection unlock
1 route flag that affects later dialogue
```

- [ ] **Step 2: Keep endings data-driven**

Each new ending should have:

```js
routeConfig.endings.secret = {
  label: 'Secret Ending',
  minAffection: 9,
  requiredFlags: ['kept-promise', 'saw-hidden-scene'],
};
```

- [ ] **Step 3: Add validator coverage for new route rules**

Extend `validateScenario` to reject ending configs whose `requiredFlags` can never be set by any reward.

- [ ] **Step 4: Verify every content slice**

After each day/route slice:

```bash
npm test
npm run build
```

Expected: validator and build pass before adding the next slice.

- [ ] **Step 5: Commit each slice separately**

```bash
git add src/data/scenario.js src/data/routeConfig.js public/assets
git commit -m "Expand Hyungyeom route with day three choices"
```

---

## Recommended Execution Order

1. Task 1 — scenario validator
2. Task 2 — affection clamp
3. Task 3 — save codec
4. Task 4 — volume fix
5. Task 5 — keyboard accessibility
6. Task 6 — route engine extraction
7. Task 7 — director engine extraction
8. Task 8 — expression-ready character model
9. Task 9 — visual smoke workflow
10. Task 10 — story/content expansion

Do not start Task 10 until Tasks 1-7 pass. Otherwise content expansion will make the current monolith harder to untangle.

---

## Verification Checklist

Run after every task:

```bash
npm test
npm run build
```

Run before final handoff:

```bash
npm audit --audit-level=moderate
```

Optional visual check if dependencies are available:

```bash
npm run dev
node scripts/capture-vn-regression.mjs
```

Expected final state:
- No Critical/High code-review issues remain.
- Settings volume affects sound effects.
- Corrupt/stale saves recover safely.
- Scenario graph errors fail tests.
- Core VN route/director logic lives outside `BAVisualNovel.jsx`.
- New content can be added in route-sized slices with validator protection.
