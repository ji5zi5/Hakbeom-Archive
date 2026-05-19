# Hakbeom Archive Season 1 Story Expansion Plan

## Target

Hakbeom Archive should no longer feel like a 3-minute prototype. Season 1 targets:

- **Minimum:** 90분 perceived playtime.
- **Preferred:** 2–3시간 across common story, route seeds, phone/SNS scenes, and route payoff.
- **Replay value:** 3–5 replays should reveal different route scenes, not only different ending text.

## Content Budget

| Layer | Batch 1 target | Season 1 target |
| --- | ---: | ---: |
| Common story beats | 25–40 | 320–450 |
| Route-specific beats | 12–18 | 180–300 |
| Meaningful choices | 3–5 | 36–54 |
| Phone/SNS scenes | 1–2 | 24–36 |
| Direct generated map/background pool | 12 accepted direct assets | 500 production assets |
| Korean displayed chars | 6k–10k | 70k–110k |

Batch 1 is not the full season. It must open the longform continuation naturally and make the world feel bigger immediately. As of 2026-05-19, the background target is upgraded from a small scene bundle to a 500-map production pool.

## Route Cast

Existing routes:

- **현겸 / hyeongyeom:** 정실 순애. Rainy hallway, umbrella promise, quiet sincerity, main emotional anchor.
- **욱현 / ukhyun:** 무표정 쿨데레. Library/note motif, careful observation, delayed honesty.
- **재성 / jaeseong:** 능글 플러팅. Broadcast-room motif, confident performance, signals through voice.

New route scaffolds:

- **상원 / sangwon:** student council records lead; precise, responsible culture-festival route with a soft yandere edge. He notices Hakbeom's choices too carefully and must learn where recording becomes control.
- **상욱 / sanguk:** 직진 댕댕이. Gym corridor/sports route; direct, warm, physical comedy, protective energy.
- **준혁 / junhyeok:** 무심한 두뇌파. Library/exam-study route; quiet logic, maps, dry humor.
- **도훈 / dohun:** 장난치는 츤데레. Convenience-store/night errand route; casual, street-smart, mischievous loyalty.
- **하음 / haeum:** 치유계. Music-room/sound route; gentle, emotional memory, atmosphere-heavy route.
- **윤호 / yunho:** junior / 후배 route; courtyard/rooftop, rain-afterglow, polite “선배” speech, quiet loyalty, and soft jealousy. He is not horror-yandere; he is a 후배 who wants to be the person Hakbeom finds most comfortable.

## Route Archetype Rules

- **상원:** 기록집착 얀데레. Use calm, exact sentences; he should sound like he remembers Hakbeom's choices too precisely. Avoid overt violence; the unsettling part is control, memory, and “I know who you chose.”
- **현겸:** 정실 순애. Keep the umbrella/rain promise as the emotional home base. He should be sincere and quietly brave rather than flashy.
- **욱현:** 무표정 쿨데레. Keep sentences short, observational, and delayed. He hides care inside notes and precise observations.
- **재성:** 능글 플러팅. Let him tease with stage/broadcast language, then drop the act for direct sincerity at key beats.
- **상욱:** 직진 댕댕이. Use motion, running, and protective action. He should act first and then get embarrassed.
- **준혁:** 무심한 두뇌파. Use maps, logic, and dry humor. He should sound calm even when confessing.
- **도훈:** 장난치는 츤데레. Start with jokes and information-broker confidence, then reveal protective sincerity.
- **하음:** 치유계. Use sound, rhythm, breath, and waiting. He should soothe tension without erasing it.
- **윤호:** 후배 선배집착. He should address Hakbeom as `선배` in route scenes. His jealousy is quiet and self-effacing, not threatening.

Photo policy: until user supplies PNGs, new profiles use `baseSrc: ''`. Story can use names/dialogue/phone messages, but must not reference missing character images in SCG directives.

## Season Structure

### Act 1 — School Routine Opens / Days 4–6

- **Day 4: 문화제 기록 담당**
  - Bridge from the umbrella promise into the culture-festival recordbook.
  - Introduce 상원, 상욱, 준혁, 도훈, 하음, 윤호.
  - Use two 3-option focus choices.
  - End with Hakbeom realizing the recordbook is becoming an album of who he spends spring with.

- **Day 5: 작은 소문**
  - Small rumor day: “Hakbeom will confess at the festival.”
  - Each route reacts through location-specific school-life scenes and one choice.

- **Day 6: 시험 공부**
  - Exam-study day with library/student-council/classroom/music-room study groups.
  - Phone/SNS follow-ups react to at least three route flags.

### Act 2 — Route Pressure / Days 7–10

- Rainy walk-home, festival group assignment, and first misunderstanding beats.
- Festival/broadcast/music/sports preparation arc.
- Day 10 route-lock gate with deterministic tie-breaks.

### Act 3 — Route Payoff / Days 11–14

- At least three locked routes receive deep payoff first.
- Remaining routes receive meaningful intermediate endings.
- Festival confession place and final recordbook sentence change by route.

## Batch 1 Required Backgrounds

Batch 1 must add exactly these generated raster backgrounds:

1. `archive-club-room-evening.png`
2. `school-courtyard-blue-hour.png`
3. `gym-corridor-evening.png`

Each background requires:

- PNG at `1129x524` under `public/assets/bg/`.
- `.prompt.txt` sidecar.
- `agent-sprite-forge-manifest.json` entry with original generated source, dimensions, bytes, sha256, prompt path.
- At least one scenario `BCG` directive reference.


## 500-Map Background Expansion

The production map/background expansion plan lives in `docs/superpowers/plans/2026-05-19-500-map-expansion.md`. Use that plan before generating new route-specific art: story demand first, five parallel generation lanes, batches of 50, and no `derivedFrom`/tint-only backgrounds.

## Batch Roadmap

1. **Batch 1 — Day 4 foundation**
   - Roadmap/docs, route/profile scaffolds, bridge flow, Day 4 introduction, 3 backgrounds, tests.
2. **Batch 2 — Day 5 route seeds**
   - First modularize `src/data/scenario.js`, then add six 3–5 beat mini-routes and first route flags.
   - Batch 2 started 2026-05-18: scenario data is split under `src/data/scenario/`; Day 5 adds the first route-seed pass for 상원/상욱/준혁/도훈/하음/윤호.
   - New generated backgrounds: `music-room-late-afternoon.png`, `convenience-store-night.png`, `rooftop-after-rain.png`.
3. **Batch 3 — Days 6–9 free-action rewrite**
   - Phone/SNS density, route variants, study/rain/festival/rumor dating beats.
   - 2026-05-19 autoresearch pass: Day 6–9 openings now route into 3×3 free-action hubs. Each route gets a four-beat dialogue branch with Hakbeom's direct answer and high-affection variants. Temporary derived backgrounds were removed; route-specific map expansion now waits for the 500 direct-generation production plan. The late story shifts away from mystery/culprit language toward rehearsal, rumor, jealousy, and confession build-up.
4. **Batch 4 — Days 9–10 lock**
   - Festival arc, route-lock helper, route-lock tests.
   - Ultragoal pass: Day 9 adds festival pressure scenes; Day 10 adds a 3×3 route-lock choice structure so nine routes stay selectable without exceeding the 3-choice UI limit.
5. **Batch 5 — Days 11–14 payoff**
   - Route endings, final culture-festival confession, gallery/recollection completion.
   - Ultragoal pass: Day 11–14 now use deterministic `endingGate` + `routeGate` route gates for all nine `route_lock_<id>` flags, add route-specific payoff scenes, resolve the shared “Hakbeom Archive” recordbook motif, and reconnect through `ending-promise` into route terminal endings.

## Route Lock Rules

Before hard route locks ship:

1. Explicit latest `route_lock_<id>` flag wins.
2. Higher affection wins.
3. Higher route-specific flag count wins.
4. Most recent route interaction wins if tracked.
5. Static fallback priority: 현겸 → 상원 → 하음 → 윤호 → 욱현 → 재성 → 준혁 → 상욱 → 도훈.
6. If no route is eligible, use the common route.

## Authoring Checklist

- Keep every normal-flow scene reachable.
- Keep choice/phone branching to 3 visible options or fewer.
- Use placeholder-safe profiles until character photos exist.
- Add route targets before rewards reference them.
- Add direct-generated background PNG + prompt + manifest `sourceGeneratedImage` before scenario BCG reference is committed; do not use `derivedFrom`/tint-only variants as production backgrounds.
- Run `npm test`, `npm run build`, `npm audit --audit-level=moderate`, `git diff --check` before handoff.
