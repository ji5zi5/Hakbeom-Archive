# New Routes Free-Action Seed Rework Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make 상원, 상욱, 준혁, 도훈, 하음, 윤호 follow the same dating-sim structure as the repaired Day 1–3 routes: direct free actions, remembered route seed flags, and emotional route-lock choices.

**Architecture:** Keep the existing Vite/React VN engine and modular scenario graph intact. Reword and reinforce Day 4–5 action hubs, add semantic contract tests for the six newer routes, add Day 6–9 memory variants that react to early flags, and make Day 10 route locks read like emotional commitments instead of investigation menus.

**Tech Stack:** Vite, React 18, ES modules, scenario modules under `src/data/scenario/`, Node `assert` contract tests in `tests/ui-contract.test.mjs`.

---

## File Map

- Modify `tests/ui-contract.test.mjs` — add semantic tests for six new route action hubs, early route seed flags, direct dialogue scenes, memory variants, and emotional Day 10 lock wording.
- Modify `src/data/scenario/day4.js` — reword first six-route introduction choices into direct Hakbeom actions; tune focus scenes to include physical action and personal tension.
- Modify `src/data/scenario/day5.js` — reword second six-route action pass into direct actions; tune route scenes so each has one remembered object/action.
- Modify `src/data/scenario/day6.js` — add or strengthen variants that acknowledge Day 4/5 seed flags for 상원/상욱/준혁/도훈/하음/윤호.
- Modify `src/data/scenario/day7.js` — add conflict/jealousy variants that remember which route got early attention.
- Modify `src/data/scenario/day8.js` — add investigation-pair variants that are romantic memory, not pure mystery summary.
- Modify `src/data/scenario/day9.js` — add festival-pressure variants that convert earlier action flags into route tension.
- Modify `src/data/scenario/day10.js` — reword group and route-lock choices into emotional commitment actions.
- Modify `docs/scenario-authoring.md` — extend the free-action rule so every route must have at least two pre-lock action seeds and one later memory variant.

## Route Contract

Use this exact route contract in tests and prose so future edits stay consistent.

```js
const newRouteFreeActionContracts = [
  {
    routeId: 'sangwon',
    name: '상원',
    day4Choice: '상원에게 출입 명단의 내 이름을 직접 짚어 달라고 한다.',
    day5Choice: '상원에게 기록하지 않을 표정을 하나 남겨 둔다.',
    day4Scene: 'day4-sangwon-focus',
    day5Scene: 'day5-sangwon-archive-desk',
    earlyFlags: ['archive_record_checked', 'day5_records_copy'],
    lockChoice: '상원에게 내 선택을 기록 말고 기억해 달라고 한다.'
  },
  {
    routeId: 'sanguk',
    name: '상욱',
    day4Choice: '상욱과 체육관 복도 끝까지 같이 뛰어본다.',
    day5Choice: '상욱과 운동장 한 바퀴를 같은 속도로 돈다.',
    day4Scene: 'day4-sanguk-focus',
    day5Scene: 'day5-sanguk-gym-start',
    earlyFlags: ['gym_corridor_checked', 'day5_gym_trace'],
    lockChoice: '상욱과 현장을 다시 달리다 손목을 붙잡는다.'
  },
  {
    routeId: 'junhyeok',
    name: '준혁',
    day4Choice: '준혁이 비워 둔 지도 칸에 내 동선을 그린다.',
    day5Choice: '준혁과 일부러 돌아가는 길을 다시 계산한다.',
    day4Scene: 'day4-junhyeok-focus',
    day5Scene: 'day5-junhyeok-library-corner',
    earlyFlags: ['route_map_drawn', 'day5_library_map'],
    lockChoice: '준혁의 지도 위에 가장 비효율적인 길을 고른다.'
  },
  {
    routeId: 'dohun',
    name: '도훈',
    day4Choice: '도훈에게 CCTV 대신 영수증 시간을 먼저 묻는다.',
    day5Choice: '도훈과 편의점 불빛 아래 영수증을 접는다.',
    day4Scene: 'day4-dohun-focus',
    day5Scene: 'day5-dohun-store-arrival',
    earlyFlags: ['cctv_favor', 'day5_cctv_check'],
    lockChoice: '도훈에게 농담 말고 걱정한 이유를 묻는다.'
  },
  {
    routeId: 'haeum',
    name: '하음',
    day4Choice: '하음과 음악실 문을 한 번 더 닫아 본다.',
    day5Choice: '하음의 박자에 맞춰 괜찮은 척을 멈춘다.',
    day4Scene: 'day4-haeum-focus',
    day5Scene: 'day5-haeum-music-room',
    earlyFlags: ['door_sound_memory', 'day5_music_room_echo'],
    lockChoice: '하음에게 문소리보다 내 숨을 들어 달라고 한다.'
  },
  {
    routeId: 'yunho',
    name: '윤호',
    day4Choice: '윤호가 말린 종이를 내 손으로 받아든다.',
    day5Choice: '윤호가 기다린 옥상으로 내가 먼저 올라간다.',
    day4Scene: 'day4-yunho-focus',
    day5Scene: 'day5-yunho-rooftop',
    earlyFlags: ['wet_paper_kept', 'day5_rooftop_paper'],
    lockChoice: '윤호가 기다린 옥상으로 늦지 않게 올라간다.'
  }
];
```

## Task 1: Add New Route Free-Action Contract Tests

**Files:**
- Modify: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Insert the contract constant after the existing Day 1–3 free-action assertions**

Add this block after the existing `day2ActionChoice` and Day 3 emotional route-choice assertions area, keeping it before the final scenario validation calls.

```js
const newRouteFreeActionContracts = [
  {
    routeId: 'sangwon',
    name: '상원',
    day4Choice: '상원에게 출입 명단의 내 이름을 직접 짚어 달라고 한다.',
    day5Choice: '상원에게 기록하지 않을 표정을 하나 남겨 둔다.',
    day4Scene: 'day4-sangwon-focus',
    day5Scene: 'day5-sangwon-archive-desk',
    earlyFlags: ['archive_record_checked', 'day5_records_copy'],
    lockChoice: '상원에게 내 선택을 기록 말고 기억해 달라고 한다.'
  },
  {
    routeId: 'sanguk',
    name: '상욱',
    day4Choice: '상욱과 체육관 복도 끝까지 같이 뛰어본다.',
    day5Choice: '상욱과 운동장 한 바퀴를 같은 속도로 돈다.',
    day4Scene: 'day4-sanguk-focus',
    day5Scene: 'day5-sanguk-gym-start',
    earlyFlags: ['gym_corridor_checked', 'day5_gym_trace'],
    lockChoice: '상욱과 현장을 다시 달리다 손목을 붙잡는다.'
  },
  {
    routeId: 'junhyeok',
    name: '준혁',
    day4Choice: '준혁이 비워 둔 지도 칸에 내 동선을 그린다.',
    day5Choice: '준혁과 일부러 돌아가는 길을 다시 계산한다.',
    day4Scene: 'day4-junhyeok-focus',
    day5Scene: 'day5-junhyeok-library-corner',
    earlyFlags: ['route_map_drawn', 'day5_library_map'],
    lockChoice: '준혁의 지도 위에 가장 비효율적인 길을 고른다.'
  },
  {
    routeId: 'dohun',
    name: '도훈',
    day4Choice: '도훈에게 CCTV 대신 영수증 시간을 먼저 묻는다.',
    day5Choice: '도훈과 편의점 불빛 아래 영수증을 접는다.',
    day4Scene: 'day4-dohun-focus',
    day5Scene: 'day5-dohun-store-arrival',
    earlyFlags: ['cctv_favor', 'day5_cctv_check'],
    lockChoice: '도훈에게 농담 말고 걱정한 이유를 묻는다.'
  },
  {
    routeId: 'haeum',
    name: '하음',
    day4Choice: '하음과 음악실 문을 한 번 더 닫아 본다.',
    day5Choice: '하음의 박자에 맞춰 괜찮은 척을 멈춘다.',
    day4Scene: 'day4-haeum-focus',
    day5Scene: 'day5-haeum-music-room',
    earlyFlags: ['door_sound_memory', 'day5_music_room_echo'],
    lockChoice: '하음에게 문소리보다 내 숨을 들어 달라고 한다.'
  },
  {
    routeId: 'yunho',
    name: '윤호',
    day4Choice: '윤호가 말린 종이를 내 손으로 받아든다.',
    day5Choice: '윤호가 기다린 옥상으로 내가 먼저 올라간다.',
    day4Scene: 'day4-yunho-focus',
    day5Scene: 'day5-yunho-rooftop',
    earlyFlags: ['wet_paper_kept', 'day5_rooftop_paper'],
    lockChoice: '윤호가 기다린 옥상으로 늦지 않게 올라간다.'
  }
];
```

- [ ] **Step 2: Add Day 4 and Day 5 choice wording tests**

Insert this directly after the constant.

```js
const day4FocusA = scenario.find((item) => item.id === 'choice-day4-focus-a');
const day4FocusB = scenario.find((item) => item.id === 'choice-day4-focus-b');
const day5SchoolShift = scenario.find((item) => item.id === 'choice-day5-school-shift');
const day5AfterSchoolShift = scenario.find((item) => item.id === 'choice-day5-after-school-shift');

assert.deepEqual(
  day4FocusA?.choices,
  newRouteFreeActionContracts.slice(0, 3).map((route) => route.day4Choice),
  'Day 4 first new-route hub should use direct Hakbeom action choices.'
);
assert.deepEqual(
  day4FocusB?.choices,
  newRouteFreeActionContracts.slice(3).map((route) => route.day4Choice),
  'Day 4 second new-route hub should use direct Hakbeom action choices.'
);
assert.deepEqual(
  day5SchoolShift?.choices,
  newRouteFreeActionContracts.slice(0, 3).map((route) => route.day5Choice),
  'Day 5 first new-route hub should be a second direct-action pass.'
);
assert.deepEqual(
  day5AfterSchoolShift?.choices,
  newRouteFreeActionContracts.slice(3).map((route) => route.day5Choice),
  'Day 5 second new-route hub should be a second direct-action pass.'
);
```

- [ ] **Step 3: Add seed flag, direct scene, and memory variant tests**

Insert this after the choice wording tests.

```js
const day10StartIndex = scenario.findIndex((item) => item.id === 'day10-chapter-card');
const preDay10Rewards = scenario
  .slice(0, day10StartIndex)
  .flatMap((item) => item.rewards || []);
const allVariantFlags = scenario
  .flatMap((item) => item.variants || [])
  .flatMap((variant) => variant.requiredFlags || variant.flags || []);

for (const route of newRouteFreeActionContracts) {
  for (const flag of route.earlyFlags) {
    assert.ok(
      preDay10Rewards.some((reward) => reward.affection?.[route.routeId] > 0 && (reward.flags || []).includes(flag)),
      `${route.name} should earn affection and ${flag} before Day 10 route lock.`
    );
    assert.ok(
      allVariantFlags.includes(flag),
      `${route.name} should have at least one later variant that remembers ${flag}.`
    );
  }

  for (const sceneId of [route.day4Scene, route.day5Scene]) {
    const scene = scenario.find((item) => item.id === sceneId);
    assert.equal(scene?.name, route.name, `${sceneId} should be a direct ${route.name} scene.`);
    assert.match(
      scene?.text || '',
      /(학범|선배|네가|너|내가|같이|손|이름|숨|기록|지도|영수증|종이|박자)/,
      `${sceneId} should include direct interaction material, not a pure case-summary narration.`
    );
  }
}
```

- [ ] **Step 4: Add Day 10 emotional lock wording tests**

Insert this after the memory variant test.

```js
assert.deepEqual(
  scenario.find((item) => item.id === 'day10-choice-lock-group')?.choices,
  [
    '비와 기록 사이에서 먼저 부를 이름을 고른다.',
    '글과 목소리 사이에서 숨겨둔 답을 고른다.',
    '현장과 밤 사이에서 같이 돌아갈 사람을 고른다.'
  ],
  'Day 10 route-lock group choice should read like emotional commitment, not evidence sorting.'
);

for (const route of newRouteFreeActionContracts) {
  assert.ok(
    scenario.some((item) => item.type === 'choice' && (item.choices || []).includes(route.lockChoice)),
    `${route.name} route lock should use an emotional action choice: ${route.lockChoice}`
  );
}
```

- [ ] **Step 5: Run the test and verify RED**

Run:

```bash
npm test
```

Expected: FAIL with one of these assertion labels:

```txt
Day 4 first new-route hub should use direct Hakbeom action choices.
Day 10 route-lock group choice should read like emotional commitment, not evidence sorting.
```

## Task 2: Reword Day 4 New-Route Free Actions

**Files:**
- Modify: `src/data/scenario/day4.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Replace `choice-day4-focus-a.choices`**

In `src/data/scenario/day4.js`, replace the existing `choices` array for `choice-day4-focus-a` with:

```js
choices: [
  '상원에게 출입 명단의 내 이름을 직접 짚어 달라고 한다.',
  '상욱과 체육관 복도 끝까지 같이 뛰어본다.',
  '준혁이 비워 둔 지도 칸에 내 동선을 그린다.'
],
```

- [ ] **Step 2: Replace `choice-day4-focus-b.choices`**

Replace the existing `choices` array for `choice-day4-focus-b` with:

```js
choices: [
  '도훈에게 CCTV 대신 영수증 시간을 먼저 묻는다.',
  '하음과 음악실 문을 한 번 더 닫아 본다.',
  '윤호가 말린 종이를 내 손으로 받아든다.'
],
```

- [ ] **Step 3: Rewrite Day 4 focus scene text for direct action**

Replace each target scene `text` with these exact strings.

```js
// day4-sangwon-focus
text: '상원은 출입 명단을 학범 쪽으로 돌려 놓았다. 학범은 자기 이름 옆에 남은 두 번째 선을 손끝으로 짚었다. 상원은 그 손끝을 따라 시선을 내리며 말했다. “네가 직접 짚은 기록이면, 아무도 대신 지웠다고 우길 수 없어.”',

// day4-sanguk-focus
text: '상욱은 체육관 복도 끝까지 먼저 뛰려다 멈췄다. 이번엔 학범의 속도에 맞춰 다시 출발했다. “나 혼자 빠른 건 의미 없더라. 네가 멈춘 자리까지 같이 가야 단서도, 네 표정도 안 놓쳐.”',

// day4-junhyeok-focus
text: '준혁은 지도 가운데 빈칸을 비워 둔 채 펜을 건넸다. 학범이 자기 동선을 그리자 그는 최단거리 선을 지웠다. “네가 고른 길이 비효율적이면, 그 비효율이 답이야.”',

// day4-dohun-focus phone text
text: '좋아, CCTV보다 영수증 시간이 먼저지. 학범 학생회장님이 직접 물어본 거니까 정보값은 할인. 대신 네가 혼자 확인하려던 건 나중에 따로 따질 거야.',

// day4-haeum-focus
text: '하음은 음악실 문고리를 학범에게 넘겼다. 학범이 문을 닫자 늦은 울림이 복도에 남았다. 하음은 그 박자에 맞춰 손가락을 접었다. “이 소리 뒤에 네 숨이 섞였어. 그래서 다시 들어보고 싶었어.”',

// day4-yunho-focus
text: '윤호는 말린 종이를 내밀다가 멈췄다. 학범이 직접 받아 들자 그제야 손을 놓았다. “선배가 먼저 잡아 주면, 제가 기다린 게 방해가 아니라 자리였다고 믿을 수 있을 것 같아서요.”',
```

- [ ] **Step 4: Run syntax and targeted contract check**

Run:

```bash
node --check src/data/scenario/day4.js
npm test
```

Expected: `node --check` passes. `npm test` still fails on Day 5 or Day 10 wording because those tasks are not implemented yet.

## Task 3: Reword Day 5 Second-Pass Free Actions

**Files:**
- Modify: `src/data/scenario/day5.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Replace `choice-day5-school-shift.choices`**

```js
choices: [
  '상원에게 기록하지 않을 표정을 하나 남겨 둔다.',
  '상욱과 운동장 한 바퀴를 같은 속도로 돈다.',
  '준혁과 일부러 돌아가는 길을 다시 계산한다.'
],
```

- [ ] **Step 2: Replace `choice-day5-after-school-shift.choices`**

```js
choices: [
  '도훈과 편의점 불빛 아래 영수증을 접는다.',
  '하음의 박자에 맞춰 괜찮은 척을 멈춘다.',
  '윤호가 기다린 옥상으로 내가 먼저 올라간다.'
],
```

- [ ] **Step 3: Rewrite key Day 5 route scene text**

Replace these scene `text` fields.

```js
// day5-sangwon-archive-desk
text: '상원은 면장갑 대신 빈 라벨 하나를 건넸다. “오늘 네 표정은 기록하지 않을게.” 학범이 라벨을 파일 안쪽에 붙이자, 상원은 처음으로 펜을 닫았다. 남기지 않는 선택도 네 선택이라는 듯이.',

// day5-sanguk-gym-start
text: '상욱은 운동장 시작선에서 학범을 기다렸다. 평소라면 먼저 튀어나갔을 발이 오늘은 학범의 첫걸음에 맞춰 움직였다. “나 속도 맞추는 거 못하는 줄 알았는데, 너랑이면 배우고 싶어.”',

// day5-junhyeok-library-corner
text: '준혁은 가장 빠른 길 위에 자를 올려놓고도 선을 긋지 않았다. 학범이 일부러 돌아가는 길을 다시 계산하자 그는 고개를 끄덕였다. “효율을 버렸는데도 답이 맞으면, 그건 감정 쪽 변수야.”',

// day5-dohun-store-arrival
text: '편의점 불빛 아래에서 도훈은 영수증을 반으로 접었다. 학범이 같은 방향으로 접자 그는 웃음을 삼켰다. “증거 훼손은 아니고, 둘만 알아보는 표시. 이런 건 CCTV보다 오래 남거든.”',

// day5-haeum-music-room
text: '하음은 메트로놈을 켜지 않고 학범의 호흡을 기다렸다. 학범이 괜찮은 척을 멈추자, 음악실은 이상하게 조용해졌다. “그 박자가 진짜야. 급하게 맞추지 않아도 돼.”',

// day5-yunho-rooftop
text: '옥상 문을 연 건 이번엔 학범이었다. 윤호는 난간 옆에서 기다리다 급히 자세를 고쳤다. “선배가 먼저 와 주실 줄 몰랐어요.” 기쁜 말인데도, 늦게 들킬까 봐 목소리가 낮았다.',
```

- [ ] **Step 4: Run syntax and contract check**

Run:

```bash
node --check src/data/scenario/day5.js
npm test
```

Expected: `node --check` passes. `npm test` still fails on memory variants or Day 10 wording.

## Task 4: Add Day 6–9 Memory Variants for New Routes

**Files:**
- Modify: `src/data/scenario/day6.js`
- Modify: `src/data/scenario/day7.js`
- Modify: `src/data/scenario/day8.js`
- Modify: `src/data/scenario/day9.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Locate the route-specific scene blocks**

Run this command and use the line numbers to edit the scenes for each route.

```bash
grep -n "sangwon_route_seed\|sanguk_route_seed\|junhyeok_route_seed\|dohun_route_seed\|haeum_route_seed\|yunho_route_seed" src/data/scenario/day6.js src/data/scenario/day7.js src/data/scenario/day8.js src/data/scenario/day9.js
```

Expected: each day file has one block for each of the six route seed flags.

- [ ] **Step 2: Add or replace Day 6 variants with Day 4/5 early flags**

For the first matching scene per route in `src/data/scenario/day6.js`, ensure the scene has a `variants` array containing these entries before any broader route seed variant.

```js
{ requiredFlags: ['archive_record_checked', 'day5_records_copy'], text: '상원은 학범이 직접 짚었던 이름 옆에 새 라벨을 붙이지 않았다. “기록하지 않기로 한 표정은 아직 비워둘게. 대신 네가 고른 순서만은 내가 잊지 않을 거야.”' }
{ requiredFlags: ['gym_corridor_checked', 'day5_gym_trace'], text: '상욱은 복도 끝까지 뛰던 속도를 일부러 늦췄다. “그때 같이 뛰어서 알았어. 네가 멈추는 순간엔 내가 앞서가면 안 된다는 거.”' }
{ requiredFlags: ['route_map_drawn', 'day5_library_map'], text: '준혁은 학범이 그린 비효율적인 선을 지우지 않았다. “네가 돌아간 길은 오차가 아니야. 누군가를 기다리는 경로는 원래 계산이 늦어.”' }
{ requiredFlags: ['cctv_favor', 'day5_cctv_check'], text: '도훈은 접힌 영수증을 책상에 톡 올렸다. “CCTV보다 먼저 나한테 물어본 거, 아직 유효해. 그래서 이번엔 내가 먼저 숨겨 둔 걱정부터 꺼낼게.”' }
{ requiredFlags: ['door_sound_memory', 'day5_music_room_echo'], text: '하음은 문소리보다 학범의 숨을 먼저 들었다. “괜찮은 척 멈춘 박자를 기억해. 오늘도 그 박자로 말해도 돼.”' }
{ requiredFlags: ['wet_paper_kept', 'day5_rooftop_paper'], text: '윤호는 말린 종이를 두 손으로 감쌌다가 학범 쪽으로 밀었다. “선배가 먼저 와 주신 날부터, 기다리는 자리가 조금 욕심나졌어요.”' }
```

- [ ] **Step 3: Add Day 7 conflict variants**

For each matching route scene in `src/data/scenario/day7.js`, place one route-specific variant that references the same early flags. Use these exact texts.

```js
{ requiredFlags: ['archive_record_checked', 'day5_records_copy'], text: '상원은 다른 이름이 학범 옆에 적히는 순간에도 펜을 세우지 않았다. “질투는 기록하면 더 커져. 그래서 오늘은 안 적을게. 그래도 내가 본 건 사라지지 않아.”' }
{ requiredFlags: ['gym_corridor_checked', 'day5_gym_trace'], text: '상욱은 누가 학범을 불러 세우자 바로 뛰려다가 멈췄다. “나 지금 가면 방해지? 근데 네가 불편하면, 말 안 해도 내가 옆에 설게.”' }
{ requiredFlags: ['route_map_drawn', 'day5_library_map'], text: '준혁은 지도 위에서 학범과 다른 이름 사이의 거리를 재지 않았다. “계산하면 티 나니까 안 할게. 대신 네가 고른 길이 바뀌면 바로 알 수 있어.”' }
{ requiredFlags: ['cctv_favor', 'day5_cctv_check'], text: '도훈은 농담을 꺼내려다 영수증을 접었다. “걱정한 이유 묻기 전까진 장난으로 버틸 생각이었는데, 오늘은 좀 어렵네.”' }
{ requiredFlags: ['door_sound_memory', 'day5_music_room_echo'], text: '하음은 다른 목소리 사이에서도 학범의 숨이 흔들리는 박자를 찾아냈다. “누구랑 있어도 네가 무리하는 소리는 들려. 그래서 더 조용히 기다릴게.”' }
{ requiredFlags: ['wet_paper_kept', 'day5_rooftop_paper'], text: '윤호는 선배라는 호칭을 조금 늦게 불렀다. 늦어진 만큼 시선은 오래 머물렀다. “저도 옆에 서고 싶은데, 먼저 말하면 선배가 곤란하실까 봐요.”' }
```

- [ ] **Step 4: Add Day 8 investigation-romance variants**

For each matching route scene in `src/data/scenario/day8.js`, add the variant text below.

```js
{ requiredFlags: ['archive_record_checked', 'day5_records_copy'], text: '상원은 증거 봉투 대신 빈 페이지를 펼쳤다. “오늘 네가 직접 말한 것만 남길게. 내가 아는 네 선택이 많아질수록, 함부로 적으면 안 된다는 것도 알겠어.”' }
{ requiredFlags: ['gym_corridor_checked', 'day5_gym_trace'], text: '상욱은 단서를 찾는 동안에도 학범의 보폭을 놓치지 않았다. “뛰는 건 내가 할게. 네가 멈춰야 하는 순간만 나한테 알려줘.”' }
{ requiredFlags: ['route_map_drawn', 'day5_library_map'], text: '준혁은 가장 합리적인 추론을 접고 학범이 돌아본 방향을 따라 선을 그었다. “이 사건, 네 마음을 빼면 설명이 안 돼. 귀찮지만 그게 맞아.”' }
{ requiredFlags: ['cctv_favor', 'day5_cctv_check'], text: '도훈은 CCTV 화면을 끄고 학범의 얼굴을 봤다. “증거보다 네 반응이 먼저야. 내가 정보통이어도, 오늘은 그 순서 안 바꿀래.”' }
{ requiredFlags: ['door_sound_memory', 'day5_music_room_echo'], text: '하음은 문 뒤의 소리를 맞히기보다 학범이 말하기 전의 정적을 기다렸다. “조사보다 먼저 쉬어도 돼. 네 숨이 흐트러지면 단서도 같이 흐려져.”' }
{ requiredFlags: ['wet_paper_kept', 'day5_rooftop_paper'], text: '윤호는 젖은 종이의 뒷글씨보다 학범이 그것을 쥔 손을 먼저 보았다. “선배가 또 혼자 책임지려고 하면, 이번엔 제가 먼저 올라갈게요.”' }
```

- [ ] **Step 5: Add Day 9 festival-pressure variants**

For each matching route scene in `src/data/scenario/day9.js`, add the variant text below.

```js
{ requiredFlags: ['archive_record_checked', 'day5_records_copy'], text: '축제 준비 명단에서 상원은 학범 이름 옆의 빈칸을 오래 비워두었다. “네가 누구를 부를지는 네가 쓰는 게 맞아. 그래도 내가 기다린 시간은 지우지 않을게.”' }
{ requiredFlags: ['gym_corridor_checked', 'day5_gym_trace'], text: '상욱은 축제 물품을 들고 뛰다가 학범 앞에서 정확히 멈췄다. “이번엔 안 앞질렀지? 네 옆에 서는 연습, 계속 하고 있었어.”' }
{ requiredFlags: ['route_map_drawn', 'day5_library_map'], text: '준혁은 축제 동선을 정리하다가 가장 먼 길에 표시를 남겼다. “이 길이면 둘이 오래 걷게 돼. 비효율적이지. 그래서 후보에 넣었어.”' }
{ requiredFlags: ['cctv_favor', 'day5_cctv_check'], text: '도훈은 매점 지원표를 흔들며 웃었지만 영수증 접힌 선을 펴지 않았다. “축제 끝나면 정보값 받을 거야. 농담 말고, 네 시간으로.”' }
{ requiredFlags: ['door_sound_memory', 'day5_music_room_echo'], text: '하음은 리허설 박자를 멈추고 학범에게 손짓했다. “오늘은 문소리 말고 네가 들어오는 소리에 맞출게. 네가 늦어도 곡은 안 끝내.”' }
{ requiredFlags: ['wet_paper_kept', 'day5_rooftop_paper'], text: '윤호는 옥상 출입표를 접어 주머니에 넣었다. “축제 날에도 여기서 기다릴게요. 선배가 먼저 와 주신 날을 제가 너무 오래 기억해서요.”' }
```

- [ ] **Step 6: Run syntax and contract check**

Run:

```bash
node --check src/data/scenario/day6.js
node --check src/data/scenario/day7.js
node --check src/data/scenario/day8.js
node --check src/data/scenario/day9.js
npm test
```

Expected: `node --check` passes. `npm test` still fails only on Day 10 lock wording if Task 5 is not done yet.

## Task 5: Reword Day 10 Route Lock Choices

**Files:**
- Modify: `src/data/scenario/day10.js`
- Test: `tests/ui-contract.test.mjs`

- [ ] **Step 1: Replace `day10-choice-lock-group.choices`**

```js
"choices": [
  "비와 기록 사이에서 먼저 부를 이름을 고른다.",
  "글과 목소리 사이에서 숨겨둔 답을 고른다.",
  "현장과 밤 사이에서 같이 돌아갈 사람을 고른다."
],
```

- [ ] **Step 2: Replace `day10-choice-lock-rain-record.choices`**

```js
"choices": [
  "현겸에게 비가 안 와도 같이 걷자고 말한다.",
  "상원에게 내 선택을 기록 말고 기억해 달라고 한다.",
  "하음에게 문소리보다 내 숨을 들어 달라고 한다."
],
```

- [ ] **Step 3: Replace `day10-choice-lock-signal-text.choices`**

```js
"choices": [
  "욱현의 접힌 노트에 내 답을 직접 적는다.",
  "재성에게 꺼진 마이크 앞에서 진짜 목소리를 낸다.",
  "준혁의 지도 위에 가장 비효율적인 길을 고른다."
],
```

- [ ] **Step 4: Replace `day10-choice-lock-field-night.choices`**

```js
"choices": [
  "상욱과 현장을 다시 달리다 손목을 붙잡는다.",
  "도훈에게 농담 말고 걱정한 이유를 묻는다.",
  "윤호가 기다린 옥상으로 늦지 않게 올라간다."
],
```

- [ ] **Step 5: Run syntax and contract check**

Run:

```bash
node --check src/data/scenario/day10.js
npm test
```

Expected: both commands pass.

## Task 6: Document the All-Route Free-Action Rule

**Files:**
- Modify: `docs/scenario-authoring.md`

- [ ] **Step 1: Extend the existing `초반 자유행동 / 장소 선택 규칙` section**

Add this paragraph and table after the current Day 2 example.

```md
### 모든 route seed 필수 계약

route lock 전 모든 공략 후보는 최소 두 번의 직접 자유행동 seed를 가져야 한다. 첫 번째 seed는 첫 만남/장소 행동, 두 번째 seed는 같은 캐릭터에게 다시 다가가는 행동이어야 한다. 이후 Day 6–9 중 최소 한 장면은 `variants.requiredFlags`로 두 seed 중 하나를 기억해야 하고, Day 10 route lock 선택지는 조사/증거가 아니라 같이 있고 싶은 사람을 고르는 감정 행동이어야 한다.

| Route | 1차 seed | 2차 seed | Day 10 lock 감정 행동 |
| --- | --- | --- | --- |
| 상원 | 출입 명단의 내 이름을 직접 짚기 | 기록하지 않을 표정 남기기 | 내 선택을 기록 말고 기억해 달라고 하기 |
| 상욱 | 체육관 복도 끝까지 같이 뛰기 | 같은 속도로 한 바퀴 돌기 | 다시 달리다 손목을 붙잡기 |
| 준혁 | 지도 빈칸에 내 동선 그리기 | 일부러 돌아가는 길 계산하기 | 가장 비효율적인 길 고르기 |
| 도훈 | 영수증 시간을 먼저 묻기 | 편의점 불빛 아래 영수증 접기 | 농담 말고 걱정한 이유 묻기 |
| 하음 | 음악실 문을 다시 닫아 보기 | 박자에 맞춰 괜찮은 척 멈추기 | 문소리보다 내 숨을 들어 달라고 하기 |
| 윤호 | 말린 종이를 내 손으로 받기 | 기다린 옥상으로 먼저 올라가기 | 기다리는 옥상으로 늦지 않게 가기 |
```

- [ ] **Step 2: Run markdown diff check**

Run:

```bash
git diff --check docs/scenario-authoring.md
```

Expected: no output.

## Task 7: Full Verification and Commit

**Files:**
- Verify all modified files.
- Commit all changes.

- [ ] **Step 1: Run syntax checks**

```bash
node --check src/data/scenario/day4.js
node --check src/data/scenario/day5.js
node --check src/data/scenario/day6.js
node --check src/data/scenario/day7.js
node --check src/data/scenario/day8.js
node --check src/data/scenario/day9.js
node --check src/data/scenario/day10.js
```

Expected: no output and exit code 0.

- [ ] **Step 2: Run repository tests**

```bash
npm test
node .omx/normalized-dup-scan.mjs
npm run test:story-lines
npm run build
git diff --check
```

Expected:

```txt
npm test exits 0
node .omx/normalized-dup-scan.mjs prints groups 0
npm run test:story-lines prints at least 10000 total lines
npm run build exits 0
git diff --check prints no output
```

- [ ] **Step 3: Run VN flow QA**

```bash
set -euo pipefail
npm run dev -- --host 127.0.0.1 --port 5175 > .omx/tmp/vn-dev.log 2>&1 &
VN_DEV_PID=$!
trap 'kill $VN_DEV_PID 2>/dev/null || true' EXIT
sleep 3
VN_QA_BASE_URL=http://127.0.0.1:5175 npm run qa:vn
```

Expected JSON contains every check with `"status": "passed"`, `"assetErrors": 0`, `"playRejects": 0`, and `"bgmEvents": 0`.

- [ ] **Step 4: Commit with Lore protocol**

```bash
git add tests/ui-contract.test.mjs src/data/scenario/day4.js src/data/scenario/day5.js src/data/scenario/day6.js src/data/scenario/day7.js src/data/scenario/day8.js src/data/scenario/day9.js src/data/scenario/day10.js docs/scenario-authoring.md
git commit -m "Make every route seed player-driven" -m "Rework the six newer routes so Day 4-5 choices are concrete Hakbeom actions, Day 6-9 variants remember early flags, and Day 10 locks read as emotional commitments instead of evidence sorting.\n\nConstraint: Keep the existing 3-choice UI and longform scenario graph intact.\nRejected: Building a full calendar/free-roam scheduler | too broad for this pass and unnecessary for current engine contracts.\nConfidence: high\nScope-risk: moderate\nDirective: New route candidates must ship with two pre-lock action seeds plus at least one later requiredFlags memory variant.\nTested: node --check src/data/scenario/day4.js && node --check src/data/scenario/day5.js && node --check src/data/scenario/day6.js && node --check src/data/scenario/day7.js && node --check src/data/scenario/day8.js && node --check src/data/scenario/day9.js && node --check src/data/scenario/day10.js\nTested: npm test\nTested: node .omx/normalized-dup-scan.mjs\nTested: npm run test:story-lines\nTested: npm run build\nTested: VN_QA_BASE_URL=http://127.0.0.1:5175 npm run qa:vn\nNot-tested: Manual full readthrough of all nine route endings." 
```

## Self-Review

- Spec coverage: all six newer routes have two pre-lock action choices, direct route scenes, remembered variants, and Day 10 lock wording tasks.
- Placeholder scan: no placeholder paths, no undefined route IDs, no unresolved scene IDs.
- Type consistency: the plan uses existing scenario fields only: `choices`, `rewards`, `flags`, `affection`, `variants`, `requiredFlags`, `text`, and `next`.
- Scope control: no engine rewrite, no new assets, no new dependencies, no UI layout changes.
