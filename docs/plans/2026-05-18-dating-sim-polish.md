# Dating-Sim Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a focused dating-sim reward loop: date/promise choices, affection-aware reactions, and special memory unlocks.

**Architecture:** Use the existing scenario, route reward, variant, gallery, and recollection systems. Keep story/state semantics in data and tests; avoid new UI/state layers unless a small metadata display is already supported by existing save/status/gallery components.

**Tech Stack:** Vite, React, ES modules, Node `assert` contract tests, Playwright QA scripts.

---

### Task 1: Lock the Date/Memory Contract

**Files:**
- Modify: `tests/ui-contract.test.mjs`
- Reference: `src/data/scenario/day2.js`
- Reference: `src/data/routeConfig.js`

**Step 1: Add failing tests**

Add semantic assertions that require:

```js
const day2FreeAction = scenario.find((item) => item.id === 'choice-day2-free-action');
assert.ok(day2FreeAction, 'Day 2 free action choice should exist.');
assert.ok(
  day2FreeAction.choices.some((choice) => /약속|데이트|같이|기다/.test(choice)),
  'Day 2 free action should read like a dating-sim promise/date choice.'
);

const promiseScene = scenario.find((item) => item.id === 'day2-promise-memory-hyeongyeom');
assert.ok(promiseScene, 'A Day 2 promise memory scene should exist.');
assert.match(promiseScene.text, /약속|둘만|기다|같이/, 'Promise memory should feel like a dating-sim payoff.');
assert.ok(
  (promiseScene.directives || []).some((directive) => ['BCG', 'BG', 'BG_CG'].includes(directive.type)),
  'Promise memory should stage a CG-like background moment.'
);

const promiseChoiceIndex = day2FreeAction.next.indexOf('day2-promise-memory-hyeongyeom');
assert.ok(promiseChoiceIndex >= 0, 'Day 2 free action should route one choice to the promise memory.');
assert.ok(day2FreeAction.rewards[promiseChoiceIndex].flags.includes('hyeongyeom_day2_promise_memory'));

assert.ok(
  routeConfigData.galleryItems.some((item) => item.id === 'cg-day2-hyeongyeom-promise' && item.unlockFlag === 'hyeongyeom_day2_promise_memory'),
  'Promise memory should unlock a gallery CG tile.'
);
assert.ok(
  routeConfigData.recollectionItems.some((item) => item.id === 'recall-day2-hyeongyeom-promise' && item.startId === 'day2-promise-memory-hyeongyeom'),
  'Promise memory should unlock a replayable recollection.'
);
```

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because the promise memory scene and metadata do not exist yet.

**Step 3: Commit?**

Do not commit failing tests alone unless stopping. Continue to Task 2.

---

### Task 2: Add Day 2 Promise Memory Content

**Files:**
- Modify: `src/data/scenario/day2.js`
- Modify: `src/data/routeConfig.js`
- Modify if needed: `docs/scenario-authoring.md`

**Step 1: Implement scenario vertical slice**

Change the first Day 2 free-action option into a stronger promise/date option and route it to a new scene:

```js
{
  id: 'day2-promise-memory-hyeongyeom',
  type: 'dialogue',
  mood: 'confession',
  chapter: 'day-2',
  name: '현겸',
  role: '동급생',
  place: '방과 후 복도',
  text: '...',
  variants: [
    {
      affection: { hyeongyeom: { min: 60 } },
      text: '...'
    }
  ],
  directives: [
    { type: 'BCG', src: '/assets/bg/school-courtyard-blue-hour.png', transition: 'fade-in' },
    { type: 'SCG', id: 'hyeongyeom', name: '현겸', action: 'enter', pos: 3, src: '/assets/character/hyungyeom.png', expression: 'blush', transition: 'fade-in' },
    { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod', se: 'heart' }
  ],
  nextId: 'day2-introduction-briefing'
}
```

Update `choice-day2-free-action` so the first branch points to this scene and rewards include:

```js
{
  affection: { hyeongyeom: 15 },
  flags: ['hyeongyeom_day2_umbrella_excuse', 'hyeongyeom_day2_promise_memory']
}
```

**Step 2: Add gallery/recollection metadata**

In `src/data/routeConfig.js`, add:

```js
{
  id: 'cg-day2-hyeongyeom-promise',
  title: '방과 후의 약속',
  routeId: 'hyeongyeom',
  chapter: 'day-2',
  hint: 'Day 2 현겸과 방과 후 약속을 만든다.',
  src: '/assets/bg/school-courtyard-blue-hour.png',
  unlockFlag: 'hyeongyeom_day2_promise_memory'
}
```

and:

```js
{
  id: 'recall-day2-hyeongyeom-promise',
  title: '방과 후의 약속',
  routeId: 'hyeongyeom',
  chapter: 'day-2',
  hint: '현겸과의 Day 2 약속 기억',
  unlockFlag: 'hyeongyeom_day2_promise_memory',
  startId: 'day2-promise-memory-hyeongyeom'
}
```

**Step 3: Run tests**

Run: `npm test`
Expected: PASS for new contract and existing scenario validation.

**Step 4: Commit**

Stage only relevant files and commit with Lore format.

---

### Task 3: Strengthen Affection-Aware Reactions

**Files:**
- Modify: `src/data/scenario/day2.js`
- Modify: `tests/ui-contract.test.mjs`

**Step 1: Add tests**

Add assertions that at least one later Day 2 scene has a variant requiring `hyeongyeom_day2_promise_memory` or affection `min: 60`.

**Step 2: Implement variants**

Add a variant to `day2-after-school` or another later scene that references the promise flag:

```js
{
  requiredFlags: ['hyeongyeom_day2_promise_memory'],
  text: '...'
}
```

Keep text short and emotionally responsive.

**Step 3: Run tests**

Run: `npm test`
Expected: PASS.

**Step 4: Commit**

Commit only scenario/test changes.

---

### Task 4: Visual and Runtime QA

**Files:**
- No source change unless QA finds a bug.
- Evidence: `.omx/visual/...` and `.omx/state/vn-flow-qa.json` are not committed unless already tracked.

**Step 1: Start dev server if needed**

Run: `npm run dev -- --host 127.0.0.1`
Expected: Vite URL on 5173 or next open port.

**Step 2: Browser inspect new scenes**

Use Playwright/capture helper on:

```bash
node scripts/capture-page.mjs 'http://127.0.0.1:<port>/?screen=game&id=day2-promise-memory-hyeongyeom' .omx/visual/dating-sim-polish/day2-promise-memory-hyeongyeom.png
node scripts/capture-page.mjs 'http://127.0.0.1:<port>/?screen=game&id=choice-day2-free-action' .omx/visual/dating-sim-polish/choice-day2-free-action.png
```

Expected: one clear character, readable dialogue/choice, no overlap.

**Step 3: Full verification**

Run:

```bash
npm test
npm run build
VN_QA_BASE_URL=http://127.0.0.1:<port> npm run qa:vn
npm audit --audit-level=moderate
git diff --check
```

Expected: all pass; Vite may warn about chunk size only.

**Step 4: Final commit or amend**

If QA fixes are needed, commit them with Lore format. Otherwise report evidence.
