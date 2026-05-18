# Detailed Authorial Story Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite Hakbeom Archive with a fully planned Day 1–14 story spine before touching prose, so every scene feels authored rather than generated.

**Architecture:** Keep the VN data graph stable while replacing displayed prose. Use `docs/story-rewrite-flow.md` as the high-level bible, this document as the detailed beat sheet, and `tests/ui-contract.test.mjs` as the regression gate against generated/template prose.

**Tech Stack:** Vite + React scenario modules under `src/data/scenario/`, Node `assert` tests, `validateScenario()`, `npm run test:story-lines`, existing route lock/ending gate engine.

---

## 0. Rewrite Philosophy

The rewrite is not “make current text prettier.” It is a new authorial pass over the same VN graph.

### Keep

- Scene IDs and route mechanics.
- 3-choice maximum UI contract.
- Existing background assets and route gates.
- The “Hakbeom Archive” title/mystery premise.
- 학범 as protagonist, not a separate narrator named `나`.

### Replace

- Any sentence that only swaps character names or motifs.
- Any story-visible `Day N` meta phrase outside chapter cards.
- Any route branch where the emotional beat can be exchanged with another character.
- Any confession line with the form “내가 고른 건 단서가 아니라 너야.”
- Any investigation paragraph where a character simply explains a clue without personal stakes.

### New Core Question

Not: “Who stole the archive?”

Instead: **“Who can 학범 show the blank page of himself to?”**

---

## 1. Full Season Spine

### Opening Condition

학범 is reliable because he is afraid of being personally needed. He can organize paperwork, solve student council problems, and remember everyone else’s requests, but he avoids writing down his own wishes.

### Inciting Emotion

현겸 enters under 학범’s umbrella. The umbrella is the first time 학범 does not only “help” someone; he wants the moment to last.

### Inciting Incident

The archive room opens by itself. Inside is a folder titled `학범 아카이브`. It contains fragments of things 학범 did for others, but the final page is blank.

### Midpoint Shift

The characters are not just suspects or helpers. Each one has been keeping a different version of 학범:

- the 학범 who waits,
- the 학범 who reads silence,
- the 학범 who hears a voice,
- the 학범 who gets recorded,
- the 학범 who is protected,
- the 학범 who chooses a route,
- the 학범 who laughs at bad jokes,
- the 학범 who breathes again,
- the 학범 who is called 선배.

### Route Lock Meaning

Day 10 is not a romance popularity vote. 학범 chooses who gets to see the blank page before it is filled.

### Final Truth

The archive was not made by one villain. It was assembled from traces everyone left because 학범 kept disappearing behind his responsibilities. The blank page stays blank because the story refuses to write 학범’s confession for him.

---

## 2. Route Character Arc Matrix

| Route | 학범 sees them as | Their flaw | What they need from 학범 | Route ending action |
| --- | --- | --- | --- | --- |
| 현겸 | first safe place | waits quietly until he almost disappears | 학범 must come first, not only respond | 학범 opens the umbrella first |
| 욱현 | unread note | hides care behind short observations | 학범 must answer in writing or plain words | 학범 leaves the note unfolded |
| 재성 | charming voice | turns sincerity into performance | 학범 must ask for the voice without the mic | 학범 turns the mic off before confessing |
| 상원 | perfect record | confuses preserving with possessing | 학범 must let one true record remain | 학범 writes a line without timestamp |
| 상욱 | immediate rescue | runs before listening | 학범 must show that staying can be brave | they walk back instead of running |
| 준혁 | correct route | trusts logic over emotional timing | 학범 must choose the inefficient path | 학범 marks a route because 준혁 is there |
| 도훈 | safe joke | jokes before he can be rejected | 학범 must pay honesty as the “fee” | 도훈 accepts a sentence without teasing |
| 하음 | quiet recovery | comforts until his own fear vanishes | 학범 must ask what rhythm 하음 wants | 학범 starts the tempo |
| 윤호 | waiting junior | stays behind 학범 to avoid burdening him | 학범 must call him forward by name | 윤호 stands beside, not behind |

---

## 3. Day-by-Day Detailed Beat Plan

### Day 1 — 비 오는 방과 후

**Purpose:** establish 학범’s responsibility habit and 현겸 as the emotional baseline.

Required beats:

1. Student council room after closing; 학범 sorts other people’s request forms.
2. Rain starts harder than forecast; hallway lights flicker.
3. 현겸 appears outside, soaked but pretending it is fine.
4. 학범 offers help; choice changes tone:
   - practical: lend umbrella,
   - gentle: walk together,
   - playful: tease to lower tension.
5. Under umbrella, 현겸 notices 학범 always remembers everyone else’s things.
6. Crosswalk pause: 학범 realizes he is walking slower on purpose.
7. Honesty choice: admit he wanted to walk longer or cover it with a joke.
8. Night phone: 현겸 sends a short message, then a second delayed message that implies he deleted something.

Do not write:

- generic “비가 왔다” mood only.
- 현겸 instantly confessing.
- 학범 narrating like a detached third party.

### Day 2 — 우산을 돌려주는 아침

**Purpose:** make the first promise intentional.

Required beats:

1. 학범 arrives early but pretends it is because of student council.
2. 현겸 has already dried the umbrella carefully.
3. Rooftop or hallway scene where the returned umbrella does not end the connection.
4. 현겸 asks for a small future plan without calling it a date.
5. 학범 chooses direct warmth or playful deflection.
6. End with the idea that the umbrella was an excuse, not the reason.

### Day 3 — 비가 그친 뒤의 선택지

**Purpose:** widen the romantic field without breaking the 현겸 baseline.

Required beats:

1. 현겸 and 학범 have a continuing rhythm from Day 1–2.
2. 욱현 returns a note 학범 forgot, but has marked one line 학범 did not remember writing.
3. 재성 uses a broadcast cue to call 학범 out, half-joking.
4. Choice asks which kind of attention 학범 answers:
   - quiet note,
   - public voice,
   - existing umbrella promise.
5. End with the first explicit “promise” choice that can feed later route affection.

### Day 4 — 열려 있던 아카이브실

**Purpose:** introduce the mystery and new cast through action.

Required beats:

1. 학범 finds archive room open; not scary, but personally invasive.
2. `학범 아카이브` folder sits on the desk; first page has only his name and an empty line.
3. 상원 enters already holding a corrected attendance sheet; he knows too much about who entered.
4. 상욱 rushes in with a physical clue from the gym corridor.
5. 준혁 quietly maps everyone’s movement and finds an impossible route.
6. 도훈 sends a message about convenience-store CCTV, then appears like he was not worried.
7. 하음 recognizes the door sound pattern.
8. 윤호 waits outside/rooftop with a dried paper fragment and calls 학범 `선배`.
9. Two 3-choice screens decide which first clues 학범 follows.
10. Closing: first page remains blank except for a rain stain shaped like an underline.

### Day 5 — 여섯 갈래의 방과 후

**Purpose:** each new route gets a real location, clue, and emotional color.

Morning choice set:

| Choice | Scene | Clue | Emotional beat |
| --- | --- | --- | --- |
| 상원 | archive desk | attendance correction | he wants to keep 학범’s choices from being erased |
| 상욱 | gym corridor | torn thread | he acts before thinking and almost misses 학범’s hesitation |
| 준혁 | library map | impossible route | he solves the map but notices 학범 avoids his own route |

Afternoon choice set:

| Choice | Scene | Clue | Emotional beat |
| --- | --- | --- | --- |
| 도훈 | convenience store | receipt/CCTV time | joke is a cover for already checking on 학범 |
| 하음 | music room | door rhythm | he hears the pause in 학범’s breathing |
| 윤호 | rooftop | dried paper | he waits at a distance until 학범 calls him closer |

Closing beat:

The archive folder gains six clue tabs, but the blank page still has no sentence. 학범 realizes the clues are not pointing outward; they are circling him.

### Day 6 — 빈칸 정리

**Purpose:** everyone helps; 학범 learns what each form of care feels like.

Common beats:

1. Morning group chat should not say “Day 6.” It should sound like real classmates coordinating before school.
2. 학범 lays all clues on the archive desk.
3. Each route mini-scene shows a different help style.
4. Pair scenes compare help styles without formulaic “same clue/different way” wording.
5. Closing: 학범 writes one line in his notebook: “도움을 받는 것도 기록해야 한다.”

Route mini-scene targets:

| Route | Day 6 scene idea |
| --- | --- |
| 현겸 | quietly brings a towel for the wet umbrella marks, notices 학범 skipped breakfast |
| 욱현 | marks three suspicious lines but only speaks one sentence |
| 재성 | records ambient hallway noise, jokes that 학범 looks like a banned broadcast topic |
| 상원 | files evidence too neatly, then hesitates before writing 학범’s reaction |
| 상욱 | carries boxes and accidentally reveals a hidden envelope behind them |
| 준혁 | redraws the route map with one deliberately inefficient detour for 학범’s sake |
| 도훈 | trades for CCTV access but refuses to say what favor he paid |
| 하음 | uses metronome taps to match door sounds |
| 윤호 | waits outside the room until 학범 asks him to come in |

### Day 7 — 모순 충돌

**Purpose:** each character’s flaw complicates the mystery.

Common beats:

1. A timestamp contradiction appears: CCTV, door sound, and route map cannot all be true.
2. The cast splits into different theories.
3. 학범 gets pulled into mediating instead of choosing what he feels.
4. Pair scenes are actual clashes.
5. Closing: 학범 realizes the archive is forcing him to stop being only the mediator.

Pair conflict targets:

| Pair | Conflict |
| --- | --- |
| 현겸 + 상원 | 현겸 asks if 기록 matters more than 학범’s face; 상원 says faces fade, records stay |
| 욱현 + 준혁 | 욱현 trusts a tiny handwriting tremor; 준혁 wants reproducible proof |
| 재성 + 도훈 | both joke, but 재성 performs while 도훈 dodges |
| 상욱 + 윤호 | 상욱 rushes to search; 윤호 waits because he thinks juniors should not interfere |
| 하음 + 현겸 | both calm 학범, but 하음 names the anxiety 현겸 avoids saying |

### Day 8 — 축제 전야의 개인 약속

**Purpose:** create emotional reasons for the Day 10 lock.

Common beats:

1. Festival rehearsal notices go up.
2. Each character gives or asks for a small promise.
3. Phone messages are intimate, not status reports.
4. 학범 cannot answer everyone equally anymore.
5. Closing: blank page gains a title line: “내가 미루지 말아야 할 말.”

Route promise targets:

| Route | Promise |
| --- | --- |
| 현겸 | “비가 안 와도 같은 길로 가자.” |
| 욱현 | “답이 늦어도 읽을게.” |
| 재성 | “마이크 없는 목소리로 말할게.” |
| 상원 | “네 선택을 지우지 않겠다.” |
| 상욱 | “먼저 뛰더라도 돌아와서 기다리겠다.” |
| 준혁 | “정답보다 네가 있는 길을 보겠다.” |
| 도훈 | “장난치기 전에 한 번은 진짜로 묻겠다.” |
| 하음 | “네 박자를 내가 따라가겠다.” |
| 윤호 | “선배 뒤가 아니라 옆에 서고 싶다.” |

### Day 9 — 이름 없는 카드

**Purpose:** pressure before lock; every route fear becomes visible.

Do not use one repeated “표식 발견” opener. Use different triggers:

| Route | Trigger | Fear shown |
| --- | --- | --- |
| 현겸 | umbrella tag missing from display | he may be only a rainy-day memory |
| 욱현 | his note is pinned unread | he may be read too late |
| 재성 | broadcast script turns his line into a joke | sincerity may sound like performance |
| 상원 | attendance correction changes 학범’s chosen route | records may overwrite choice |
| 상욱 | gym delivery arrives after the bell | he may be late when needed |
| 준혁 | map’s correct route bypasses his location | correct answer may not be wanted |
| 도훈 | receipt joke gets misunderstood | joking may ruin honesty |
| 하음 | metronome matches another scene | 학범 may follow another rhythm |
| 윤호 | rooftop sign says “staff only” | he may remain outside as junior |

### Day 10 — 빈 페이지를 맡길 사람

**Purpose:** route lock as emotional decision.

Required lock scene structure:

1. 학범 notices the blank page is no longer a clue but a confession space.
2. Three 3-choice screens remain.
3. Every selected route has a unique body action:
   - 현겸: 학범 picks up the umbrella before calling him.
   - 상원: 학범 lets the pen rest on an uncorrected line.
   - 하음: 학범 taps the rhythm first.
   - 욱현: 학범 unfolds the note instead of waiting.
   - 재성: 학범 turns down the broadcast volume.
   - 준혁: 학범 chooses the longer route on the map.
   - 상욱: 학범 walks to him before 상욱 can run.
   - 도훈: 학범 puts the receipt on the table and says the joke is over.
   - 윤호: 학범 opens the rooftop door and says his name.
4. Closing: route lock is framed as “I will not show this page to everyone the same way.”

### Day 11 — 선택 다음 날

**Purpose:** confirm the choice through awkward intimacy.

Each route start must be different:

| Route | Morning scene |
| --- | --- |
| 현겸 | umbrella is already beside 학범’s desk, dry this time |
| 욱현 | note is returned with one punctuation mark changed |
| 재성 | broadcast booth cue light is off, but he waits there anyway |
| 상원 | attendance correction has one blank field he refuses to fill alone |
| 상욱 | gym shoes are outside class, laces tied too tightly |
| 준혁 | route map has one erased shortcut |
| 도훈 | convenience-store bag on 학범’s chair, receipt folded inside |
| 하음 | metronome ticks in the empty music room before class |
| 윤호 | rooftop key is returned with both hands and a bow |

### Day 12 — 축제 리허설

**Purpose:** expose the chosen character’s weakness through stage action.

| Route | Rehearsal problem | Emotional turn |
| --- | --- | --- |
| 현겸 | rain sound cue fails | shares one mic without hiding |
| 욱현 | line is missing from script | writes what he cannot say aloud |
| 재성 | broadcast goes live accidentally | turns off performance voice |
| 상원 | unauthorized correction marks appear | learns not every true thing needs timestamp |
| 상욱 | prop falls near 학범 | catches it, then waits instead of rushing |
| 준혁 | stage route changes last minute | accepts inefficient movement |
| 도훈 | backstage errand reveals hidden note | apologizes before joking |
| 하음 | metronome stops | lets 학범 set the tempo |
| 윤호 | script requires using 학범’s name | struggles between `선배` and name |

### Day 13 — 원본 분실

**Purpose:** final crisis built from route flaw.

| Route | Crisis | 학범’s response |
| --- | --- | --- |
| 현겸 | 현겸 tries to step back so 학범 is not burdened | 학범 asks him to stay under the umbrella |
| 욱현 | 욱현 hides the note because it exposes too much | 학범 says unread truth is still truth |
| 재성 | 재성 lied in broadcast log to protect 학범 | 학범 asks for the unedited voice |
| 상원 | 상원’s record control nearly traps the choice | 학범 tells him a record can witness without owning |
| 상욱 | 상욱 runs ahead and loses the clue | 학범 waits until he returns, then walks with him |
| 준혁 | 준혁’s correct deduction hurts emotionally | 학범 chooses the route that is kind, not shortest |
| 도훈 | 도훈’s joke lands as dismissal | 학범 makes him answer seriously |
| 하음 | 하음 comforts everyone except himself | 학범 asks what he is afraid of |
| 윤호 | 윤호 waits too far away | 학범 calls him closer by name |

### Day 14 — 학범 아카이브 개방일

**Purpose:** reveal truth and give route-specific confession form.

Shared truth:

- The archive gathered traces from many people.
- The “culprit” is not an enemy; the archive is a mirror.
- The blank final page can only be completed by 학범.

Route confession forms:

| Route | Confession method | Last image |
| --- | --- | --- |
| 현겸 | 학범 opens umbrella first | two hands on one handle |
| 욱현 | 학범 writes reply on the unfolded note | note left open on desk |
| 재성 | 학범 turns off mic before speaking | silent broadcast light |
| 상원 | 학범 writes one untimestamped line | record left deliberately imperfect |
| 상욱 | 학범 runs first, then slows to walk | untied shoelace retied together |
| 준혁 | 학범 marks an inefficient route | map with no destination label |
| 도훈 | 학범 pays “information fee” with honesty | two drinks, no receipt joke |
| 하음 | 학범 starts rhythm | metronome restarted by two hands |
| 윤호 | 학범 calls “윤호야” | 후배 beside him, not behind |

### Endings — Route Closure

Each ending is a short after-scene, not another explanation of the mystery.

| Ending | Closure |
| --- | --- |
| 현겸 | walking home even when it does not rain |
| 욱현 | choosing not to fold the last note |
| 재성 | deleting the recording because memory is enough |
| 상원 | leaving one record line uncorrected |
| 상욱 | practicing walking pace together |
| 준혁 | drawing routes for dates, not investigations |
| 도훈 | buying drinks without making it a trade |
| 하음 | syncing breath before music |
| 윤호 | entering the rooftop side by side |

---

## 4. Implementation Sequence

### Task 1: Add the No-Generated-Prose Test Gate

**Files:**
- Modify: `tests/ui-contract.test.mjs`

- [ ] Add `displayedStoryTexts()` and `assertNoDisplayedStoryPattern()` helpers.
- [ ] Add no-template regexes for known bad phrases.
- [ ] Run `npm test` and confirm the test fails before rewrite.

Expected red-state phrases include:

```txt
Day 6의 첫 단서
같은 질문을 다른 목소리
축제 준비물 사이에서 자기 이름이 적힌 작은 표식
옥상 바람이 잠깐 멈춘 것 같았다
사라진 원본 이야기를 듣자마자 표정을 굳혔다
같은 방향을 보고 있다는 증거
이 사건, 누가 꾸민 건지 이제 알겠어
내가 고른 건 단서가 아니라 너야
```

### Task 2: Rewrite Day 1–3

**Files:**
- Modify: `src/data/scenario/day1.js`
- Modify: `src/data/scenario/day2.js`
- Modify: `src/data/scenario/day3.js`

- [ ] Preserve IDs and choice graph.
- [ ] Replace text with the Day 1–3 beat plan above.
- [ ] Run `npm test`.

### Task 3: Rewrite Day 4–5

**Files:**
- Modify: `src/data/scenario/day4.js`
- Modify: `src/data/scenario/day5.js`

- [ ] Preserve two 3-choice groups in each day.
- [ ] Replace introduction/exposition prose with action-based scenes.
- [ ] Run `npm test`.

### Task 4: Rewrite Day 6–8 From Scratch

**Files:**
- Modify: `src/data/scenario/day6.js`
- Modify: `src/data/scenario/day7.js`
- Modify: `src/data/scenario/day8.js`

- [ ] Keep IDs/directives/rewards.
- [ ] Rewrite all displayed `text` and `messages[].text` except chapter labels.
- [ ] Make Day 6 help, Day 7 conflict, Day 8 promise.
- [ ] Run targeted grep and `npm test`.

### Task 5: Rewrite Day 9–10

**Files:**
- Modify: `src/data/scenario/day9.js`
- Modify: `src/data/scenario/day10.js`

- [ ] Replace repeated pressure opener with route-specific trigger/fear.
- [ ] Replace route lock repeated opener with body-action commitment scenes.
- [ ] Run `npm test`.

### Task 6: Rewrite Day 11–14

**Files:**
- Modify: `src/data/scenario/day11.js`
- Modify: `src/data/scenario/day12.js`
- Modify: `src/data/scenario/day13.js`
- Modify: `src/data/scenario/day14.js`

- [ ] Preserve all route gates.
- [ ] Use the Day 11–14 route tables above.
- [ ] Remove all current repeated scaffolds.
- [ ] Run `npm test`.

### Task 7: Rewrite Endings

**Files:**
- Modify: `src/data/scenario/endings.js`

- [ ] Preserve terminal IDs.
- [ ] Make endings route after-scenes.
- [ ] Run `npm test`.

### Task 8: Final Verification

Run:

```bash
npm test
npm run test:story-lines
npm run build
git diff --check
```

Expected:

- No scenario validator errors.
- Scenario line count remains over 10,000.
- Build succeeds.
- No whitespace errors.

---

## 5. Definition of Done

This rewrite is done only when:

- No displayed story text matches the no-template regex list.
- Day 6–8 no longer have exact repeated route beat paragraphs.
- Every route has a unique fear, promise, crisis, confession form, and ending action.
- 학범’s internal arc is visible: helper → mediator → chooser → author of his own blank page.
- All tests/build/line-count checks pass.
