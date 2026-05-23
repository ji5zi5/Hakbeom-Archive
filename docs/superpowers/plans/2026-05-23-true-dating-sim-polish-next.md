# True Dating-Sim Polish Next Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Hakbeom Archive feel less like a linear mystery VN and more like a relationship-driven dating sim by adding repeatable date invitations, route-specific dialogue voices, visible memory payoffs, and less narration-heavy scenes.

**Architecture:** Keep the current React/Vite VN engine and scenario-first expansion model. Add focused scenario/data modules and contract tests before touching UI; only add UI polish where it exposes existing affection, flags, phone replies, save summaries, and replayable route memories.

**Tech Stack:** Vite, React function components/hooks, ES modules, declarative scenario data, Node `assert` contract tests, Playwright/VN QA scripts, generated PNG backgrounds under `public/assets/bg/`.

---

## Scope and Current Baseline

The latest Batch3 route-date work already adds route-date and phone follow-up loops under `src/data/scenario/batch3RouteDates/`, integrated through `src/data/scenario/routeDepthExpansionRegistry.js`. This next pass should not replace that work. It should deepen the dating-sim loop so the player repeatedly feels: “I chose a person, that person reacted in their own voice, the game remembered it, and a later scene changed because of it.”

Non-goals for this pass:

- Do not add a full calendar scheduler yet.
- Do not add blind bulk backgrounds; generate or assign only story-required direct PNG backgrounds.
- Do not exceed the current 3-choice / 3-phone-reply UI contract.
- Do not rewrite `BAVisualNovel.jsx` into a new engine.
- Do not use reward toast spam; relationship feedback should appear through dialogue variants, status/save summaries, phone tone, and payoff scenes.

## File Structure

- Modify `tests/ui-contract.test.mjs`: add dating-sim feel contracts before implementation.
- Modify `src/data/scenario/batch3RouteDates/routeDateMatrix.js`: add route motifs, date-tone metadata, memory payoff links, and background requirements.
- Modify `src/data/scenario/batch3RouteDates/routeDateSceneFactory.js`: generate less narration-heavy scenes with direct dialogue beats and route-specific tone.
- Modify `src/data/scenario/batch3RouteDates/coreRoutes.js`: hand-polish 현겸/욱현/재성 date scenes, phone replies, and memory callbacks.
- Modify `src/data/scenario/batch3RouteDates/clubRoutes.js`: hand-polish 상원/상욱/준혁 date scenes, phone replies, and memory callbacks.
- Modify `src/data/scenario/day10.js` through `src/data/scenario/day14.js`: add route-memory payoff variants after route lock.
- Modify `src/data/routeConfig.js`: add optional route personality tags and save/status memory labels.
- Modify `src/engine/saveSummary.js`: surface latest route memory in save summaries if already available in `gameState.flags`.
- Modify `src/engine/scenarioValidator.js`: reject over-narrated route-date scenes where a date branch lacks direct character speech.
- Modify `docs/scenario-authoring.md`: document dating-sim route-date voice, memory, and narration-ratio rules.
- Optionally add generated PNGs under `public/assets/bg/` only when a scene has no suitable existing direct-generated background.

---

## Task 1: Add Dating-Sim Feel Regression Contracts

**Files:**
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add route-date dialogue ratio assertions**

Add helper functions near existing scenario semantic helpers:

```js
function countDialogueLikeScenes(items) {
  return items.filter((item) => item.type === 'dialogue' && item.name && item.text).length;
}

function countNarrationLikeScenes(items) {
  return items.filter((item) => item.type === 'dialogue' && (!item.name || item.name === '학범') && item.text).length;
}
```

- [ ] **Step 2: Assert every route-date arc has character speech**

Use the exported Batch3 route-date scene ids and assert each route-date arc has at least two named character lines and no more narration-like lines than named lines.

```js
for (const route of routeDateBatch3Routes) {
  const arcItems = route.sceneIds.map((id) => scenarioById.get(id)).filter(Boolean);
  assert.ok(countDialogueLikeScenes(arcItems) >= 2, `${route.routeId} date needs at least two direct character dialogue beats`);
  assert.ok(
    countNarrationLikeScenes(arcItems) <= countDialogueLikeScenes(arcItems),
    `${route.routeId} date should not read like narration-first prose`
  );
}
```

- [ ] **Step 3: Run RED or confirm existing coverage**

Run:

```bash
npm test
```

Expected: either FAIL on routes that are still too generic/narrative, or PASS if current route-date content already satisfies the new contract. If it passes immediately, keep the test as a regression guard.

## Task 2: Define Route Voice and Date Motif Metadata

**Files:**
- Modify: `src/data/routeConfig.js`
- Modify: `src/data/scenario/batch3RouteDates/routeDateMatrix.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add route personality tags**

Add a `datingSimProfiles` export or field containing concise route voice rules:

```js
export const datingSimProfiles = {
  hyeongyeom: { role: '다정한 동급생', tension: '말을 아끼다가 약속으로 확인한다', latestMemoryLabel: '같은 우산 아래의 약속', noGo: ['설명충 독백'] },
  ukhyun: { role: '차분한 기록 담당', tension: '메모와 시선으로 마음을 숨긴다', latestMemoryLabel: '창가 노트에 남은 답장', noGo: ['무표정 원툴'] },
  jaeseong: { role: '능글맞은 방송 담당', tension: '장난 뒤에 진심을 숨긴다', latestMemoryLabel: '꺼진 마이크 앞의 진심', noGo: ['가벼운 농담만 반복'] },
  sangwon: { role: '직진형 선배', tension: '승부욕이 보호욕으로 바뀐다', latestMemoryLabel: '승부 뒤에 남은 손길', noGo: ['명령조만 반복'] },
  sanguk: { role: '조용한 관찰자', tension: '거리두기가 작은 배려로 무너진다', latestMemoryLabel: '멀리서 건넨 작은 배려', noGo: ['차갑기만 함'] },
  junhyeok: { role: '분위기 메이커', tension: '웃긴 말 뒤의 불안을 들킨다', latestMemoryLabel: '농담이 멈춘 순간', noGo: ['개그만 반복'] },
  dohun: { role: '무뚝뚝한 실무형', tension: '행동으로 먼저 챙긴다', latestMemoryLabel: '말없이 챙긴 귀갓길', noGo: ['감정 부재'] },
  haeum: { role: '부드러운 예술가', tension: '말보다 리듬과 감각으로 다가온다', latestMemoryLabel: '같은 박자로 맞춘 오후', noGo: ['몽환적 표현 남발'] },
  yunho: { role: '후배', tension: '존경과 질투 사이에서 솔직해진다', latestMemoryLabel: '처음으로 이름을 낮춰 부른 저녁', noGo: ['어른스러운 선배처럼 말함'] }
};
```

- [ ] **Step 2: Link profiles from date matrix**

Each matrix row should include `profileId`, `dateMotif`, and `memoryLabel`:

```js
{
  routeId: 'yunho',
  profileId: 'yunho',
  dateMotif: '후배가 먼저 예약해 둔 빈 동아리실에서, 학범에게 처음으로 반말을 연습한다.',
  memoryLabel: '처음으로 이름을 낮춰 부른 저녁'
}
```

- [ ] **Step 3: Test metadata completeness**

Assert all nine routes have a profile, date motif, memory label, memory flag, phone flag, and payoff consumer.

```bash
npm test
```

Expected: PASS only when every route has dating-sim voice metadata.

## Task 3: Rewrite Route-Date Scenes as Choice-Driven Conversations

**Files:**
- Modify: `src/data/scenario/batch3RouteDates/coreRoutes.js`
- Modify: `src/data/scenario/batch3RouteDates/clubRoutes.js`
- Modify: `src/data/scenario/batch3RouteDates/routeDateSceneFactory.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Apply one reusable beat shape**

Every route-date should follow this five-beat shape:

1. `invite`: character invites or corners Hakbeom with a concrete action.
2. `choice`: Hakbeom chooses a tone, not a plot direction.
3. `reaction`: character reacts in their own voice.
4. `touch`: a small physical/visual moment, still PG-13/15+.
5. `phone`: follow-up message that remembers the tone choice.

- [ ] **Step 2: Replace generic narration with direct speech**

Example target style for 윤호:

```js
{
  id: 'date-day7-yunho-reaction-warm',
  type: 'dialogue',
  name: '윤호',
  role: '후배',
  text: '선배가 그렇게 말하면요, 저 진짜 착각해요. 그래도 오늘은 착각한 채로 있고 싶어요.',
  variants: [
    { requiredFlags: ['yunho_phone_day7_warm_reply'], text: '선배가 그렇게 답장해 줬잖아요. 그래서 저, 오늘은 조금 욕심내도 되는 줄 알았어요.' }
  ],
  nextId: 'phone-day7-yunho-after-date'
}
```

- [ ] **Step 3: Keep choices at tone level**

Each date choice should ask how Hakbeom responds:

```js
choices: ['솔직하게 가까워지고 싶다고 말한다.', '장난처럼 넘기며 반응을 본다.', '말없이 옆자리를 비워 둔다.']
```

Avoid choices like “조사한다”, “확인한다”, “단서를 찾는다”.

- [ ] **Step 4: Run tests**

```bash
npm test
npm run test:story-lines
```

Expected: PASS, with line count preserved or increased.

## Task 4: Add Memory Payoffs After Route Lock

**Files:**
- Modify: `src/data/scenario/day10.js`
- Modify: `src/data/scenario/day11.js`
- Modify: `src/data/scenario/day12.js`
- Modify: `src/data/scenario/day13.js`
- Modify: `src/data/scenario/day14.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add payoff variants for route memories**

For each route, add at least one post-lock variant that consumes a Batch3 date flag:

```js
variants: [
  {
    requiredFlags: ['yunho_date_day7_shared_evening'],
    text: '윤호는 그날 빈 동아리실에서 연습하던 반말을 다시 삼켰다. 대신 학범의 소매를 아주 짧게 붙잡았다.'
  },
  { default: true, text: '윤호는 학범을 보자마자 자세를 고쳐 앉았다.' }
]
```

- [ ] **Step 2: Assert memory flags are consumed**

Extend the memory consumer audit so every `${routeId}_date_*` and `${routeId}_phone_*` flag appears later in a `variants.requiredFlags`, route payoff line, gallery/recollection condition, or terminal text guard.

- [ ] **Step 3: Run replay tests**

```bash
npm test
```

Expected: deterministic committed-route replay still reaches route lock 70+ and terminal eligibility 85+ for all nine routes.

## Task 5: Surface Relationship Progress Without Toast Spam

**Files:**
- Modify: `src/engine/saveSummary.js`
- Modify: `src/utils/relationshipState.js`
- Modify: `src/components/BAVisualNovel.jsx`
- Modify: `src/styles.css`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Add latest memory summary helper**

Implement a pure helper that maps flags to a short current-memory label:

```js
export function resolveLatestRouteMemory(flags = [], profiles = datingSimProfiles) {
  const latest = [...flags].reverse().find((flag) => /_(date|phone)_/.test(flag));
  if (!latest) return '';
  const routeId = Object.keys(profiles).find((id) => latest.startsWith(`${id}_`));
  return routeId ? profiles[routeId].latestMemoryLabel || profiles[routeId].role : '';
}
```

- [ ] **Step 2: Show it only in passive surfaces**

Use the result in save summary/status modal text such as `최근 기억: 처음으로 이름을 낮춰 부른 저녁`. Do not show in-scene popups after every choice.

- [ ] **Step 3: Test corrupted/empty state**

Assert empty flags return an empty label, unknown flags do not crash, and known date flags return the route label.

```bash
npm test
```

Expected: PASS.

## Task 6: Generate or Assign Only Story-Required Backgrounds

**Files:**
- Modify: `public/assets/bg/*.png` and matching `.prompt.txt` only when needed.
- Modify: `src/data/scenario/batch3RouteDates/routeDateMatrix.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Audit missing route-date background needs**

List only date scenes whose existing backgrounds do not fit the motif. Prefer existing direct-generated PNGs first.

- [ ] **Step 2: Generate direct PNG backgrounds through the repo-local generate2dmap / agent-sprite-forge workflow**

For each required scene, produce:

```txt
public/assets/bg/<route>-<day>-<motif>.png
public/assets/bg/<route>-<day>-<motif>.prompt.txt
```

Prompt files must include routeId, scene purpose, time of day, mood, and “visual novel background, no characters, no text”.

- [ ] **Step 3: Reject missing asset references**

Run:

```bash
npm test
```

Expected: PASS, with no BCG references to absent files.

## Task 7: Full Verification and Commit Discipline

**Files:**
- No required source file changes beyond completed tasks.

- [ ] **Step 1: Run standard verification**

```bash
git diff --check
npm test
npm run test:story-lines
npm run build
npm audit --audit-level=moderate
```

Expected: all commands exit 0. Build may keep the existing chunk-size warning; record it as a warning, not a failure.

- [ ] **Step 2: Run VN flow QA for UI-affecting changes**

```bash
npm run dev -- --host 127.0.0.1 --port 5202
VN_QA_BASE_URL=http://127.0.0.1:5202 npm run qa:vn
```

Expected: all VN QA checks pass, `assetErrors: 0`, `playRejects: 0`.

- [ ] **Step 3: Commit with Lore protocol**

Use one intent-focused commit per completed milestone or one squashed commit per team batch. Include `Constraint`, `Rejected`, `Confidence`, `Scope-risk`, `Directive`, `Tested`, and `Not-tested` trailers.

---

## Acceptance Criteria

- All nine routes have route-specific voice metadata, date motif, memory label, date flag, phone flag, and payoff consumer.
- Route-date branches read primarily as direct conversation, not summary narration.
- Choices ask for Hakbeom’s emotional response/tone, not investigation actions.
- Phone follow-ups respond to the chosen tone and use correct sender names.
- At least one Day 10-14 payoff line per route changes because of a date/phone memory.
- Save/status surfaces can show latest relationship memory without intrusive choice reward popups.
- No runtime choice or phone reply exceeds 3 options.
- All new backgrounds are direct PNG assets with prompt files, or existing direct-generated backgrounds are reused.
- `npm test`, `npm run test:story-lines`, `npm run build`, and VN QA pass before completion.
