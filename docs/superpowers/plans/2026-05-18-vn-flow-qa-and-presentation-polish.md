# VN Flow QA and Presentation Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add reproducible whole-game smoke QA and polish non-dialogue presentation issues without touching story prose or reintroducing BGM/ambient placeholders.

**Architecture:** Keep QA in standalone Playwright scripts under `scripts/` and encode invariants in `tests/ui-contract.test.mjs`. Runtime fixes stay in `src/components/BAVisualNovel.jsx` and `src/styles.css`, limited to interaction, modal, transition, and feedback behavior. Scenario text files under `src/data/scenario/` are read-only for this work.

**Tech Stack:** Vite, React function components/hooks, Node ESM scripts, Playwright, Node `assert/strict` contract tests.

---

## Scope and Guardrails

- Do not edit dialogue/prose/story copy in `src/data/scenario*.js` or `src/data/scenario/**`.
- Do not add or wire BGM/ambient assets. Keep only short SFX cues in `public/assets/se/`.
- Do not add dependencies.
- Validate with `npm test`, `npm run build`, `npm audit --audit-level=moderate`, `git diff --check`, and the new VN QA script.

## File Structure

- Create: `scripts/qa-vn-flow.mjs`
  - Runs Playwright smoke QA for title, game advance, choice, phone reply, save/load, gallery, settings, ending, SFX-only audio invariants.
  - Writes JSON evidence to `.omx/state/vn-flow-qa.json`.
- Modify: `package.json`
  - Add `qa:vn` script.
- Modify: `tests/ui-contract.test.mjs`
  - Lock the new QA script contract, package script, and no-dialogue-edit/no-BGM invariants.
- Modify as needed: `src/components/BAVisualNovel.jsx`
  - Only for UI/interaction polish bugs found by QA: modal close behavior, choice feedback, background transition class propagation, audio cue resolution.
- Modify as needed: `src/styles.css`
  - Only for presentation polish bugs found by screenshots: transition timing, focus/hover affordances, modal clarity.
- Do not modify: `src/data/scenario.js`, `src/data/scenario/**`.

---

### Task 1: Add a VN flow QA contract before implementing the script

**Files:**
- Modify: `tests/ui-contract.test.mjs`
- Later create: `scripts/qa-vn-flow.mjs`
- Later modify: `package.json`

- [ ] **Step 1: Write the failing contract test**

Add this block near the existing Playwright/capture contract assertions at the top of `tests/ui-contract.test.mjs`:

```js
const vnFlowQa = existsSync('scripts/qa-vn-flow.mjs')
  ? readFileSync('scripts/qa-vn-flow.mjs', 'utf8')
  : '';

assert.match(
  packageJson,
  /"qa:vn":\s*"node scripts\/qa-vn-flow\.mjs"/,
  'Package scripts should expose reproducible VN flow QA.'
);
assert.match(
  vnFlowQa,
  /vn-flow-qa\.json[\s\S]*title-start[\s\S]*choice-approach[\s\S]*phone-reply[\s\S]*save-load[\s\S]*gallery[\s\S]*ending/,
  'VN flow QA should cover title start, choice, phone reply, save/load, gallery, and ending smoke paths.'
);
assert.match(
  vnFlowQa,
  /assetErrors[\s\S]*playRejects[\s\S]*\/assets\/bgm\//,
  'VN flow QA should record audio asset errors, playback rejections, and reject BGM usage.'
);
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
npm test
```

Expected: FAIL with `Package scripts should expose reproducible VN flow QA.` or `VN flow QA should cover...` because `qa:vn` / `scripts/qa-vn-flow.mjs` does not exist yet.

- [ ] **Step 3: Do not fix anything else in this task**

No production edits in Task 1. This task only creates a failing contract.

- [ ] **Step 4: Commit**

```bash
git add tests/ui-contract.test.mjs
git commit -m "Require reproducible VN flow QA evidence

Constraint: Dialogue text is under active manual editing and must remain untouched.
Confidence: high
Scope-risk: narrow
Directive: Keep VN QA script focused on interaction and presentation behavior only.
Tested: npm test fails on missing qa:vn contract as expected
Not-tested: Runtime Playwright flow pending implementation"
```

---

### Task 2: Add the Playwright VN flow QA script

**Files:**
- Create: `scripts/qa-vn-flow.mjs`
- Modify: `package.json`

- [ ] **Step 1: Add the package script**

In `package.json`, add this entry under `scripts`:

```json
"qa:vn": "node scripts/qa-vn-flow.mjs"
```

Keep existing scripts unchanged.

- [ ] **Step 2: Create `scripts/qa-vn-flow.mjs`**

Create the file with this content:

```js
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = process.env.VN_QA_BASE_URL || process.argv[2] || 'http://127.0.0.1:5173';
const OUT_PATH = process.env.VN_QA_OUT_PATH || '.omx/state/vn-flow-qa.json';
const VIEWPORT = { width: 1129, height: 524 };
const LOCAL_PLAYWRIGHT_LIB_DIRS = [
  path.resolve('.deps/playwright-libs/root/usr/lib/x86_64-linux-gnu'),
  path.resolve('.omx/tmp/playwright-libs/usr/lib/x86_64-linux-gnu')
];

const availableLocalLibDirs = LOCAL_PLAYWRIGHT_LIB_DIRS.filter((dir) => existsSync(dir));
if (availableLocalLibDirs.length > 0) {
  process.env.LD_LIBRARY_PATH = [
    ...availableLocalLibDirs,
    process.env.LD_LIBRARY_PATH || ''
  ].filter(Boolean).join(':');
}

function buildUrl(query) {
  const url = new URL(BASE_URL);
  const params = new URLSearchParams(query.replace(/^\?/, ''));
  params.forEach((value, key) => url.searchParams.set(key, value));
  return url.toString();
}

async function clickFirstVisible(page, locators) {
  for (const locator of locators) {
    if (await locator.count()) {
      const first = locator.first();
      if (await first.isVisible().catch(() => false)) {
        await first.click();
        return true;
      }
    }
  }
  return false;
}

async function main() {
  const { chromium } = await import('playwright');
  await mkdir(path.dirname(OUT_PATH), { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  page.setDefaultTimeout(6000);

  const consoleErrors = [];
  const assetErrors = [];
  const audioEvents = [];
  const checks = [];

  await page.exposeFunction('__pushVnQaAudioEvent', (event) => audioEvents.push(event));
  await page.addInitScript(() => {
    const NativeAudio = window.Audio;
    window.Audio = function patchedAudio(src = '') {
      const audio = new NativeAudio(src);
      const record = (event, extra = {}) => {
        const entry = {
          event,
          src: audio.currentSrc || audio.getAttribute('src') || src || '',
          loop: audio.loop,
          volume: audio.volume,
          href: window.location.href,
          time: Math.round(performance.now()),
          ...extra
        };
        window.__pushVnQaAudioEvent?.(entry);
      };
      const nativePlay = audio.play.bind(audio);
      audio.play = () => {
        record('play-call');
        const result = nativePlay();
        if (result?.then) {
          result.then(
            () => record('play-resolve'),
            (error) => record('play-reject', { error: error?.name || error?.message || String(error) })
          );
        }
        return result;
      };
      return audio;
    };
    window.Audio.prototype = NativeAudio.prototype;
  });

  page.on('console', (message) => {
    if (['error', 'warning'].includes(message.type())) {
      consoleErrors.push({ type: message.type(), text: message.text() });
    }
  });
  page.on('pageerror', (error) => consoleErrors.push({ type: 'pageerror', text: error.message }));
  page.on('response', (response) => {
    const url = response.url();
    if (/\/assets\/(se|bgm)\//.test(url) && response.status() >= 400) {
      assetErrors.push({ status: response.status(), url });
    }
  });

  async function check(label, fn) {
    const startAudio = audioEvents.length;
    try {
      await fn();
      checks.push({ label, status: 'passed', audioEvents: audioEvents.slice(startAudio) });
    } catch (error) {
      checks.push({ label, status: 'failed', message: error?.message || String(error), audioEvents: audioEvents.slice(startAudio) });
    }
  }

  await check('title-start', async () => {
    await page.goto(buildUrl('?screen=title'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.title-screen');
    await page.getByRole('menuitem', { name: 'START' }).click();
    await page.waitForSelector('.scene-dialogue');
    await page.waitForTimeout(350);
    await assertVisible(page, '.dialog-box');
  });

  await check('choice-approach', async () => {
    await page.goto(buildUrl('?screen=game&id=choice-approach'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.choice-row');
    await page.locator('.choice-row').first().click();
    await page.waitForTimeout(350);
    const bodyText = await page.locator('body').innerText();
    assert.match(bodyText, /현겸|학범/);
  });

  await check('phone-reply', async () => {
    await page.goto(buildUrl('?screen=game&id=phone-evening-message'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.phone-reply');
    await page.locator('.phone-reply').first().click();
    await page.waitForTimeout(350);
    const bodyText = await page.locator('body').innerText();
    assert.match(bodyText, /학범|현겸/);
  });

  await check('save-load', async () => {
    await page.goto(buildUrl('?screen=game&id=opening'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.game');
    await page.getByRole('button', { name: 'SAVE' }).click();
    await page.waitForSelector('.save-load-modal');
    await page.getByRole('button', { name: /저장|SAVE|Slot/i }).first().click().catch(() => undefined);
    await clickFirstVisible(page, [
      page.getByRole('button', { name: '닫기' }),
      page.getByRole('button', { name: /CLOSE/i })
    ]);
    await page.getByRole('button', { name: 'LOAD' }).click();
    await page.waitForSelector('.save-load-modal');
    await clickFirstVisible(page, [
      page.getByRole('button', { name: '닫기' }),
      page.getByRole('button', { name: /CLOSE/i })
    ]);
  });

  await check('gallery', async () => {
    await page.goto(buildUrl('?screen=title'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.title-screen');
    await page.getByRole('menuitem', { name: 'GALLERY' }).click();
    await page.waitForSelector('.gallery-modal');
    const bodyText = await page.locator('body').innerText();
    assert.match(bodyText, /ARCHIVE|CG|RECOLLECTION|LOCKED/i);
  });

  await check('settings', async () => {
    await page.goto(buildUrl('?screen=title'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.title-screen');
    await page.getByRole('menuitem', { name: 'CONFIG' }).click();
    await page.waitForSelector('.config-modal');
    const bodyText = await page.locator('body').innerText();
    assert.match(bodyText, /TEXT|SE|BGM|CONFIG/i);
  });

  await check('ending', async () => {
    await page.goto(buildUrl('?screen=game&id=ending-good'), { waitUntil: 'networkidle' });
    await page.waitForSelector('.game');
    await page.waitForTimeout(250);
    const bodyText = await page.locator('body').innerText();
    assert.match(bodyText, /엔딩|학범|현겸/);
  });

  await browser.close();

  const playRejects = audioEvents.filter((event) => event.event === 'play-reject');
  const bgmEvents = audioEvents.filter((event) => /\/assets\/bgm\//.test(event.src));
  const failedChecks = checks.filter((check) => check.status !== 'passed');
  const result = {
    checkedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    checks,
    consoleErrors,
    assetErrors,
    playRejects,
    bgmEvents
  };

  await writeFile(OUT_PATH, JSON.stringify(result, null, 2));

  assert.deepEqual(failedChecks, [], 'VN QA checks should all pass.');
  assert.deepEqual(assetErrors, [], 'VN QA should not have missing audio assets.');
  assert.deepEqual(playRejects, [], 'VN QA should not have rejected audio playback.');
  assert.deepEqual(bgmEvents, [], 'VN QA should not play BGM/ambient placeholder assets.');

  console.log(JSON.stringify({
    outPath: OUT_PATH,
    checks: checks.map(({ label, status }) => ({ label, status })),
    assetErrors: assetErrors.length,
    playRejects: playRejects.length,
    bgmEvents: bgmEvents.length
  }, null, 2));
}

async function assertVisible(page, selector) {
  const locator = page.locator(selector).first();
  await locator.waitFor({ state: 'visible' });
  assert.equal(await locator.isVisible(), true, `${selector} should be visible`);
}

await main();
```

- [ ] **Step 3: Run the contract test**

Run:

```bash
npm test
```

Expected: PASS for the new contract if the script contains required labels and `qa:vn` exists. If it fails because CSS class names differ, inspect current markup and update selectors in the script only, not scenario text.

- [ ] **Step 4: Run the QA script against the dev server**

If a dev server is already running on port 5173:

```bash
npm run qa:vn
```

If not:

```bash
npm run dev -- --host 127.0.0.1 > .omx/tmp/vite-qa.log 2>&1 &
sleep 2
npm run qa:vn
```

Expected output includes all checks with `status: passed`, `assetErrors: 0`, `playRejects: 0`, and `bgmEvents: 0`.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json scripts/qa-vn-flow.mjs tests/ui-contract.test.mjs
git commit -m "Make VN flow QA reproducible

Constraint: QA must not depend on dialogue text that is currently being edited.
Rejected: Manual-only smoke testing | it misses regressions in modal and audio behavior.
Confidence: high
Scope-risk: moderate
Directive: Keep qa:vn focused on gameplay/UI flow and do not add BGM placeholders.
Tested: npm test && npm run qa:vn
Not-tested: Full route-completion matrix beyond smoke paths"
```

---

### Task 3: Patch only non-dialogue failures found by QA

**Files:**
- Modify as needed: `src/components/BAVisualNovel.jsx`
- Modify as needed: `src/styles.css`
- Modify as needed: `tests/ui-contract.test.mjs`
- Do not modify: `src/data/scenario.js`, `src/data/scenario/**`

- [ ] **Step 1: Run QA and read evidence**

Run:

```bash
npm run qa:vn
cat .omx/state/vn-flow-qa.json
```

Expected: if all checks pass, skip this task. If any check fails, continue with the matching step below.

- [ ] **Step 2: If modal close fails, write a failing contract**

Add this assertion near modal-related tests in `tests/ui-contract.test.mjs`:

```js
assert.match(
  component,
  /onClose=\{\(\) => setSaveLoadMode\(null\)\}[\s\S]*onClose=\{\(\) => setSettingsOpen\(false\)\}[\s\S]*onClose=\{closeModals\}/,
  'Save/load, config, and archive modals should have explicit close handlers.'
);
```

Run:

```bash
npm test
```

Expected: FAIL if the close handler is missing or inconsistent.

- [ ] **Step 3: Implement minimal modal-close fix if needed**

In `src/components/BAVisualNovel.jsx`, ensure modal props use explicit close functions:

```jsx
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
  onClose={closeModals}
  onReplay={(startId) => {
    const targetIndex = findScenarioIndexById(scenario, startId);
    if (targetIndex >= 0) {
      setGalleryOpen(false);
      setBacklogOpen(false);
      setSkipOpen(false);
      setMenuOpen(false);
      setLog([]);
      setDirectorState(replayDirectorState(scenario, targetIndex, directorDefaults));
      setIndex(targetIndex);
      setScreen('game');
    }
  }}
/>
```

Run:

```bash
npm test
npm run qa:vn
```

Expected: both pass.

- [ ] **Step 4: If choice click has no feedback, write a failing contract**

Add this assertion near choice/audio tests:

```js
assert.match(
  component,
  /const choose = useCallback\(\(choiceIndex\) => \{[\s\S]*playAudio\(sounds\.choice \|\| sounds\.click, settings\.seVolume \/ 100\)[\s\S]*pushLog\(`\$\{current\.type === 'phone' \? '답장' : '선택'\}: \$\{value\}`\)/,
  'Choice and phone reply clicks should play feedback SFX and write a backlog line.'
);
```

Run:

```bash
npm test
```

Expected: FAIL if either feedback SFX or log line is missing.

- [ ] **Step 5: Implement minimal choice feedback fix if needed**

In `src/components/BAVisualNovel.jsx`, ensure `choose` contains:

```js
playAudio(sounds.choice || sounds.click, settings.seVolume / 100);
pushLog(`${current.type === 'phone' ? '답장' : '선택'}: ${value}`);
```

Run:

```bash
npm test
npm run qa:vn
```

Expected: both pass and `.omx/state/vn-flow-qa.json` includes `choice-approach` and `phone-reply` passed.

- [ ] **Step 6: If background transition looks abrupt, write a failing contract**

Add this assertion near background transition tests:

```js
assert.match(
  component,
  /const sceneBackgroundTransition = directorState\.backgroundTransition \|\| 'fade-in'[\s\S]*backgroundTransition=\{sceneBackgroundTransition\}/,
  'Scenes should pass director background transition metadata into visual layers.'
);
assert.match(
  styles,
  /\.scene-background[\s\S]*transition:\s*opacity\s+var\(--background-transition-ms,\s*560ms\)/,
  'Scene background opacity should transition with the shared presentation timing.'
);
```

Run:

```bash
npm test
```

Expected: FAIL if transition metadata or CSS timing is missing.

- [ ] **Step 7: Implement minimal transition fix if needed**

In `src/components/BAVisualNovel.jsx`, ensure the scene background transition value is derived once:

```js
const sceneBackgroundTransition = directorState.backgroundTransition || 'fade-in';
```

Pass it into every scene component:

```jsx
<DialogueScene
  visible={mode === 'dialogue'}
  uiHidden={uiHidden}
  backgroundSrc={sceneBackgroundSrc}
  backgroundTransition={sceneBackgroundTransition}
  characters={sceneCharacters}
  overlays={sceneOverlays}
  item={item}
  text={typedText}
  typing={typing}
  speakerNameRef={speakerNameRef}
  roleX={roleX}
/>
```

Repeat the `backgroundTransition={sceneBackgroundTransition}` prop for `BannerScene`, `PhoneScene`, and `ChoiceScene`.

In `src/styles.css`, ensure background transitions use a shared timing variable:

```css
.game {
  --background-transition-ms: 560ms;
}

.scene-background {
  transition: opacity var(--background-transition-ms, 560ms) ease, filter var(--background-transition-ms, 560ms) ease;
}
```

Run:

```bash
npm test
npm run qa:vn
```

Expected: both pass.

- [ ] **Step 8: Commit any non-dialogue fixes**

```bash
git add src/components/BAVisualNovel.jsx src/styles.css tests/ui-contract.test.mjs .omx/state/vn-flow-qa.json
git commit -m "Polish VN presentation flow without touching dialogue

Constraint: Story prose is actively edited outside this task.
Rejected: Rewriting scenario text | not part of QA/presentation polish.
Confidence: high
Scope-risk: moderate
Directive: Keep future polish changes covered by qa:vn evidence.
Tested: npm test && npm run qa:vn
Not-tested: Manual subjective review of every longform route"
```

---

### Task 4: Add visual capture evidence for the QA-critical screens

**Files:**
- Modify: `scripts/capture-vn-regression.mjs`
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Write failing capture contract**

Add this assertion near the existing capture script contract:

```js
assert.match(
  regressionCapture,
  /choice-approach[\s\S]*phone-evening-message[\s\S]*settings-modal[\s\S]*ending-good/,
  'VN regression capture should include QA-critical choice, phone, settings, and ending screens.'
);
```

Run:

```bash
npm test
```

Expected: FAIL if any capture target is missing.

- [ ] **Step 2: Update capture targets**

In `scripts/capture-vn-regression.mjs`, ensure the `captures` array includes these entries:

```js
const captures = [
  { name: 'title', query: '?screen=title' },
  { name: 'dialogue', query: '?screen=game&mode=dialogue' },
  { name: 'choice-approach', query: '?screen=game&id=choice-approach' },
  { name: 'phone-evening-message', query: '?screen=game&id=phone-evening-message' },
  { name: 'phone-message', query: '?screen=game&id=day2-morning-message' },
  { name: 'reply-choice', query: '?screen=game&id=choice-reply-tone' },
  { name: 'day5-music-room', query: '?screen=game&id=day5-haeum-music-room' },
  { name: 'day5-store', query: '?screen=game&id=day5-dohun-store-arrival' },
  { name: 'day5-rooftop', query: '?screen=game&id=day5-yunho-rooftop' },
  { name: 'save-modal', query: '?screen=game&id=opening', clickButton: 'SAVE' },
  { name: 'load-modal', query: '?screen=title', clickMenuItem: 'LOAD' },
  { name: 'settings-modal', query: '?screen=title', clickMenuItem: 'CONFIG' },
  { name: 'gallery', query: '?screen=title', clickText: 'GALLERY' },
  { name: 'ending-good', query: '?screen=game&id=ending-good' }
];
```

- [ ] **Step 3: Run capture against dev server**

Run:

```bash
npm test
npm run capture:vn
```

Expected: screenshots are written to `.omx/visual/vn-regression/*.png`; no skipped captures unless Playwright/browser dependencies are unavailable.

- [ ] **Step 4: Commit**

```bash
git add scripts/capture-vn-regression.mjs tests/ui-contract.test.mjs .omx/visual/vn-regression
git commit -m "Capture QA-critical VN screens

Constraint: Visual evidence should avoid scenario prose changes.
Confidence: high
Scope-risk: narrow
Directive: Update capture targets when adding new presentation-critical screens.
Tested: npm test && npm run capture:vn
Not-tested: Pixel-diff thresholds; captures are review evidence only"
```

---

### Task 5: Final verification and handoff

**Files:**
- Read: `.omx/state/vn-flow-qa.json`
- Read: `.omx/visual/vn-regression/`
- No source edits unless verification finds a blocker

- [ ] **Step 1: Run full verification**

Run:

```bash
npm test
npm run build
npm run qa:vn
npm run capture:vn
npm audit --audit-level=moderate
git diff --check
```

Expected:
- `npm test`: exit 0
- `npm run build`: exit 0; Vite chunk-size warning is acceptable if unchanged
- `npm run qa:vn`: exit 0 with `assetErrors: 0`, `playRejects: 0`, `bgmEvents: 0`
- `npm run capture:vn`: exit 0 with screenshots captured
- `npm audit --audit-level=moderate`: `found 0 vulnerabilities`
- `git diff --check`: exit 0

- [ ] **Step 2: Confirm dialogue files were not touched by this work**

Run:

```bash
git diff -- src/data/scenario.js src/data/scenario | cat
```

Expected: no diff caused by this plan. If unrelated pre-existing diffs are present, report them as pre-existing and do not modify them.

- [ ] **Step 3: Summarize evidence**

Prepare a concise report:

```md
Implemented non-dialogue VN QA/presentation polish.

Evidence:
- npm test: pass
- npm run build: pass
- npm run qa:vn: pass; assetErrors 0, playRejects 0, bgmEvents 0
- npm run capture:vn: pass; screenshots in .omx/visual/vn-regression
- npm audit --audit-level=moderate: 0 vulnerabilities
- git diff --check: pass

Not touched:
- Dialogue/prose files under src/data/scenario*.js and src/data/scenario/**

Remaining risk:
- Subjective visual taste still needs human review of screenshots.
```

- [ ] **Step 4: Commit verification artifacts if project policy allows**

If `.omx/state` and `.omx/visual` artifacts are intentionally tracked, commit them. Otherwise, leave them untracked and cite paths only.

```bash
git status --short
git commit -m "Verify VN QA and presentation polish

Constraint: Verification artifacts may remain local if .omx is ignored.
Confidence: high
Scope-risk: narrow
Directive: Use qa:vn before claiming VN interaction or SFX flow is healthy.
Tested: npm test && npm run build && npm run qa:vn && npm run capture:vn && npm audit --audit-level=moderate && git diff --check
Not-tested: Subjective review of every screenshot by the user"
```
