# Scenario Authoring Guide

이 문서는 `src/data/scenario.js`에 시나리오를 추가할 때 지켜야 할 규칙이다. 새 대사나 루트를 넣은 뒤에는 반드시 `npm test`를 실행해서 `validateScenario()`를 통과시킨다.

## 기본 구조

- 모든 장면은 `id`가 필요하며, ID는 중복되면 안 된다.
- ID는 kebab-case를 쓴다. 예: `day2-umbrella-promise`.
- 첫 번째 non-preview 장면이 정상 플레이의 시작점이다.
- 일반 플레이에 포함되는 장면은 시작점에서 반드시 도달 가능해야 한다.
- 정상 플레이에 들어가지 않는 테스트/갤러리/프리뷰용 장면은 `previewOnly: true`를 붙인다.

```js
{
  id: 'day2-example',
  type: 'dialogue',
  name: '현겸',
  role: '동급생',
  text: '내일도 같이 걸을래?',
  nextId: 'day2-choice'
}
```

## 장면 타입별 규칙

### `dialogue`

일반 대사 장면이다. `name`, `role`, `text`, `mood`, `directives`, `effect`, `nextId`를 사용할 수 있다. `nextId`가 없으면 다음 배열 항목으로 진행한다.

### `banner`

중앙 연출 문구나 장면 전환용이다. `text`, `summary`, `directives`, `nextId`를 사용할 수 있다.

### `choice`

선택지 장면이다.

- `choices.length`, `rewards.length`, `next.length`는 같아야 한다.
- 각 `next` 값은 존재하는 장면 ID여야 한다.
- 선택지만 프리뷰로 남기고 싶으면 `previewOnly: true`를 붙인다.

```js
{
  id: 'choice-reply-tone',
  type: 'choice',
  previewOnly: true,
  choices: ['바로 답장한다.', '장난스럽게 답한다.'],
  rewards: [
    { affection: { hyeongyeom: 10 }, flags: ['warm_reply'] },
    { affection: { hyeongyeom: 10 }, flags: ['playful_reply'] }
  ],
  next: ['reply-warm', 'reply-playful']
}
```

### `phone`

메시지 답장 장면이다. 현재 런타임에서는 `phone`을 선택지처럼 처리한다.

- `replies.length`, `rewards.length`, `next.length`는 같아야 한다.
- `replies`와 `next`가 있는 phone 장면에는 `nextId`를 같이 쓰지 않는다.
- 메시지만 보여주고 다음 장면으로 넘기는 phone이 필요하면 `replies`/`next` 없이 `nextId`만 쓰는 별도 형식으로 만든다.

```js
{
  id: 'phone-evening-message',
  type: 'phone',
  name: '현겸',
  text: '집 도착했어. 우산은 내일 돌려줄게.',
  replies: ['내일 기다릴게.', '보관료는 네 웃음으로 받을게.'],
  rewards: [
    { affection: { hyeongyeom: 10 }, flags: ['message_waiting'] },
    { affection: { hyeongyeom: 10 }, flags: ['message_tease'] }
  ],
  next: ['reply-warm', 'reply-playful']
}
```

## 보상과 플래그

`rewards`는 선택지/답장 결과를 기록한다.

- `affection`: 호감도 변경. 모든 route target은 100점 만점이며 엔진이 `routeConfig.affectionTargets`/`affectionTarget.max`를 넘지 않도록 clamp한다. 일반 선택은 `+10`, 강한 route 선택은 `+20~30`을 기본 단위로 쓴다. 예: `{ affection: { ukhyun: 20 } }`.
- `flags`: 이후 분기, variants, 갤러리 해금 조건에 사용한다.
- `gallery`, `unlockedGallery`, `galleryItem`: `routeConfig.galleryItems`에 존재하는 ID만 사용한다.
- `recollections`, `unlockedRecollections`, `recollectionItem`: `routeConfig.recollectionItems`에 존재하는 ID만 사용한다.
- `ending`/`endings`: terminal ending ID 또는 route config ending ID와 맞아야 한다.

### 여러 히로인 route target

히로인을 추가할 때는 `src/data/routeConfig.js`의 `affectionTargets`에 ID/name/max를 등록하고, `src/data/characterProfiles.js`에 같은 ID의 profile을 추가한다. 실제 PNG가 없으면 `baseSrc: ''`로 두면 런타임이 이름 placeholder를 표시한다.

```js
{ id: 'ukhyun', name: '욱현', max: 100 }
{ type: 'SCG', id: 'ukhyun', name: '욱현', action: 'enter', pos: 3 }
{ affection: { ukhyun: 20 }, flags: ['ukhyun_route'] }
```

## 분기와 도달 가능성

- `nextId`, `next`, `choiceNext`, `endingNext`, `skipToId`는 모두 실제 존재하는 ID여야 한다.
- `endingNext`는 ending gate에서만 사용한다.
- 정상 장면은 시작점에서 도달 가능해야 한다. 도달 불가능하면 validator가 `unreachable non-preview scene` 에러를 낸다.
- 의도적으로 정상 흐름에서 제외하는 장면은 `previewOnly: true`를 붙인다.

## 장기 자유행동 / 대화식 확장 규칙

Day 6–9처럼 공통 루트가 길어지는 구간은 보고서형 요약으로 넘기지 않는다. 각 day opening은 `dayN-free-hub-a`로 들어가고, `a/b/c` 세 hub가 각각 3명씩 route 선택을 제공한다. 각 route branch는 다음 4-beat를 지킨다.

1. `entry`: 상대가 먼저 학범을 부르며 BCG/SCG로 장소를 연다.
2. `answer`: 학범이 직접 대답한다. 서술형 독백으로 대신하지 않는다.
3. `reaction`: 상대가 자기 말투/성격으로 흔들린다.
4. `close`: 다음 hub 또는 기존 day 본문으로 돌아가며, 70+ 호감도 variant를 넣어 관계 진전이 문장으로 보이게 한다.

배경은 `public/assets/bg/day6-<route>-study.png`, `day7-<route>-rain.png`, `day8-<route>-festival.png`, `day9-<route>-rumor.png`처럼 장면 목적이 드러나야 한다. 각 파일은 `.prompt.txt`와 manifest entry를 같이 가진다.

## 초반 자유행동 / 장소 선택 규칙

공통 루트 초반은 하루별 보고서처럼 넘기지 말고, 학범이 직접 어디로 갈지 고르는 `choice` 허브를 둔다. Day 1–2처럼 route lock 전에는 1개 정답이 아니라 현겸/욱현/재성 등 주요 인물의 장소 행동을 나란히 배치한다.

- 선택지 문장은 “조사한다/따라간다”보다 플레이어 행동과 감정이 보이게 쓴다. 예: `재성이 마이크를 꺼 둔 이유를 묻는다.`
- 각 선택은 해당 route의 `affection`과 seed flag를 반드시 남긴다. 예: `ukhyun_early_interest`, `jaeseong_day2_broadcast`.
- 초반 action scene은 최소 한 번의 직접 대사와 물리적 행동을 포함한다. 예: 노트를 펼침, 마이크를 끔, 우산 손잡이를 넘김.
- 공통 루트로 되돌아갈 때는 다른 캐릭터 SCG를 `delete`하고 현재 장면 인물을 다시 `enter`/`move`해서 화면 잔상을 남기지 않는다.
- 이후 route 진입 장면은 early flag를 `variants.requiredFlags`로 받아 “이전 선택이 기억된다”는 감각을 줘야 한다.

```js
{
  id: 'choice-day2-free-action',
  type: 'choice',
  choices: [
    '현겸과 방과 후 둘만의 약속을 잡는다.',
    '도서관 창가에서 욱현의 답장을 기다린다.',
    '방송실에서 재성이 꺼 둔 마이크 앞에 선다.'
  ],
  rewards: [
    { affection: { hyeongyeom: 15 }, flags: ['hyeongyeom_day2_umbrella_excuse', 'hyeongyeom_day2_promise_memory'] },
    { affection: { ukhyun: 10 }, flags: ['ukhyun_day2_library'] },
    { affection: { jaeseong: 10 }, flags: ['jaeseong_day2_broadcast'] }
  ],
  next: ['day2-promise-memory-hyeongyeom', 'day2-action-ukhyun', 'day2-action-jaeseong']
}
```

## 엔딩 규칙

`episodeInfo.endingRules`는 위에서부터 검사된다.

- `default: true`인 rule은 fallback이다.
- `affection`과 `flags` 조건이 모두 맞으면 해당 ending route가 선택된다.
- 100점 만점 기준으로 루트락은 보통 `70+`, normal terminal ending은 `60+`, good/캐릭터 엔딩은 `85+` 이상으로 둔다. 30점대 엔딩 조건은 너무 낮으므로 쓰지 않는다.
- `endingGate: true` 장면은 `endingNext`로 실제 terminal 장면을 고른다.
- `routeGate: true`인 중간 게이트는 Day 11–14 같은 루트 분기용이다. 플레이어에게 엔딩 UI를 띄우거나 엔딩 해금으로 기록하면 안 된다. route gate는 선택한 `route_lock_<id>` payoff를 이어 주는 용도이며, 최종 캐릭터 엔딩은 `episodeInfo.endingRules`의 85+ 호감도 조건을 별도로 통과해야 한다.
- 실제 엔딩 장면은 `terminal: true`를 붙이고, 너무 갑자기 끊기지 않도록 고백 뒤 여운/다음 약속을 포함한다. 현재 계약 테스트는 terminal ending text가 최소 150자 이상인지 확인한다.
- terminal ending에 도달하면 런타임이 `타이틀로`와 `처음부터` 버튼을 띄운다. 시나리오에서 홈 복귀용 가짜 choice를 추가하지 않는다.

```js
{
  id: 'ending-promise',
  type: 'banner',
  endingGate: true,
  endingNext: {
    good: 'ending-good',
    normal: 'ending-normal',
    quiet: 'ending-quiet'
  }
}
```

## 연출 directives

지원 directive 타입:

- `BCG`, `BG`, `BG_CG`: 배경 변경
- `SCG`: 캐릭터 등장/수정/퇴장
- `SE`: 효과음 cue
- `E`: 감정 이펙트/오버레이/효과음
- `OVERLAY`, `MOOD`: 화면 오버레이

### 배경 `BCG` asset

배경은 `public/assets/bg/` 아래 generated VN background bundle을 사용한다. 각 배경은 같은 이름의 `.prompt.txt`를 같이 둔다. 이 번들은 GitHub `agent-sprite-forge`의 repo-local `generate2dmap` 설치를 기준으로 관리하며, VN 장면 배경은 SVG가 아니라 PNG baked raster로 둔다. 장면 분위기가 바뀌면 `BCG` directive로 배경을 명시하고, 모든 장면을 `/assets/ui/image0_13_6.jpg` 하나에 몰아넣지 않는다.

```js
{ type: 'BCG', src: '/assets/bg/school-rain-hallway.png', transition: 'fade-in' }
{ type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' }
```

현재 bundle:

- `school-rain-hallway.png`
- `student-council-room-evening.png`
- `school-gate-rain.png`
- `school-morning-hallway.png`
- `library-window.png`
- `broadcast-room.png`

### `BGM` / `AMBIENT`

`BGM`은 반복 재생되는 음악을 바꾼다. `AMBIENT`는 빗소리 같은 반복 환경음을 추가한다. `cue`는 `src/App.jsx`의 `sounds` 맵에 등록된 이름을 쓰거나 `/assets/bgm/...` 직접 경로를 쓸 수 있다. 중지할 때는 `STOP_BGM`, `STOP_AMBIENT`를 쓴다.

```js
{ type: 'BGM', cue: 'bgmRain', fadeMs: 900 }
{ type: 'AMBIENT', id: 'ambientRain', cue: 'ambientRain', volume: 42 }
{ type: 'STOP_AMBIENT', id: 'ambientRain' }
{ type: 'STOP_BGM' }
```

### Chapter cards

하루나 챕터가 시작될 때는 `banner` 장면에 `kind: 'chapter'`, `chapter`, `sectionTitle`을 넣는다. 정상 흐름에 들어가는 chapter card도 일반 장면이므로 `nextId`가 실제 ID를 가리켜야 한다.

```js
{
  id: 'day2-chapter-card',
  type: 'banner',
  kind: 'chapter',
  chapter: 'day-2',
  sectionTitle: 'Day 2: 우산을 돌려주는 아침',
  text: 'Day 2 · 우산을 돌려주는 아침',
  nextId: 'day2-morning'
}
```

### Phone timelines

`phone` 장면은 기존 `text`/`replies` 외에 `messages` 배열을 가질 수 있다. `from: 'hakbeom'` 또는 `from: 'me'`는 오른쪽 말풍선, 그 외 발신자는 왼쪽 말풍선으로 렌더된다. 입력 중 표시만 필요하면 `pending: true`를 넣고 `text`는 비워도 된다.

```js
{
  id: 'phone-evening-message',
  type: 'phone',
  name: '현겸',
  text: '집 도착했어.',
  messages: [
    { from: 'hyeongyeom', text: '우산 고마워.', read: true },
    { from: 'hakbeom', text: '내일 봐.', read: true },
    { from: 'hyeongyeom', text: '', pending: true }
  ],
  replies: ['바로 답장한다.', '장난스럽게 답한다.'],
  next: ['reply-warm', 'reply-playful']
}
```

### Route text variants

분기 선택 결과에 따라 같은 장면의 문장을 바꾸려면 `variants`를 사용한다. 새 작성은 `requiredFlags`를 권장하며, 기존 `flags`도 계속 동작한다. 배열 앞쪽부터 검사되므로 더 구체적인 조건을 먼저 둔다.

```js
variants: [
  {
    requiredFlags: ['shared_umbrella'],
    affection: { hyeongyeom: { min: 60, max: 84 } },
    text: '현겸은 우산 손잡이를 먼저 내밀었다. 아직 고백은 아니지만, 기다렸다는 건 숨기지 않았다.'
  },
  {
    requiredFlags: ['shared_umbrella'],
    text: '어제 우산 같이 쓴 거, 아직도 생각나.'
  },
  {
    default: true,
    text: '현겸은 조용히 우산을 내밀었다.'
  }
]
```

`affection` 조건은 숫자(`{ hyeongyeom: 60 }`) 또는 범위(`{ hyeongyeom: { min: 60, max: 84 } }`)를 쓸 수 있다. 범위 객체는 `min`/`max` 중 하나 이상을 숫자로 가져야 하며, 오타(`minimum`)나 알 수 없는 target은 validator가 에러로 막는다. 호감도별 반응 차이는 보상 토스트 대신 본문 variants로 보여준다.

### 캐릭터 위치 `pos` / `position`

캐릭터는 5개 프리셋 구역에 세운다. 시나리오에서는 `pos` 또는 `position`을 쓸 수 있고, 값이 없으면 중앙인 `3`으로 처리된다. 실제 좌표는 `src/components/BAVisualNovel.jsx`의 `POSITION_PRESETS`가 원본이다.

| 값 | 위치 감각 | 현재 프리셋 | 주 용도 |
| --- | --- | --- | --- |
| `1` | 왼쪽 바깥쪽 | `x: -54, y: 14` | 좌측 퇴장/멀리 선 인물 |
| `2` | 왼쪽 | `x: 150, y: 8` | 2인 구도 왼쪽 |
| `3` | 중앙 | `x: 363, y: 2` | 기본 단독 등장 |
| `4` | 오른쪽 | `x: 568, y: 8` | 2인 구도 오른쪽/이동 |
| `5` | 오른쪽 바깥쪽 | `x: 772, y: 14` | 우측 퇴장/멀리 선 인물 |

처음 등장시킬 때는 `src`와 `pos`를 같이 넣는다.

```js
{
  type: 'SCG',
  id: 'hyeongyeom',
  name: '현겸',
  action: 'enter',
  pos: 3,
  src: '/assets/character/hyungyeom.png',
  expression: 'normal',
  transition: 'enter-right'
}
```

이미 등장한 캐릭터를 움직일 때는 같은 `id`로 `action: 'move'`와 새 `pos`만 넣으면 된다.

```js
{ type: 'SCG', id: 'hyeongyeom', action: 'move', pos: 4, motion: 'straight' }
```

표정만 바꿀 때는 `pos` 없이 같은 `id`에 `action: 'update'`를 쓴다.

```js
{ type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'smile' }
```

## 작성 후 체크리스트

1. 새 장면 ID가 중복되지 않는지 확인한다.
2. 모든 `next`/`nextId`/`endingNext`/`skipToId` target이 존재하는지 확인한다.
3. `choice`/`phone`의 선택지, 보상, next 배열 길이가 같은지 확인한다.
4. 정상 장면이 시작점에서 도달 가능한지 확인한다.
5. 프리뷰용 장면은 `previewOnly: true`를 붙인다.
6. 갤러리/회상 unlock ID가 `src/data/routeConfig.js`에 있는지 확인한다.
7. 실행한다.

```bash
npm test
npm run build
```

## Longform Season 1 확장 규칙

- 초반 공통 루트는 한 route만 오래 보여주지 않는다. Day 1 종료 전에는 현겸, 욱현, 재성, 상원, 상욱, 준혁, 도훈, 하음, 윤호 9명 전원이 선택과 무관하게 대사/장면으로 등장해야 한다.
- Day 2~Day 7은 아직 루트가 좁혀지기 전의 공통 일상 구간이다. 각 날짜의 표시 텍스트에는 9명 전원의 말투/모에 포인트가 고르게 남아야 하며, 특정 한 명만 계속 보여주는 구조를 피한다.
- Day 8 이후부터는 여러 히로인 그룹 중 하나를 고르는 에피소드를 배치하고, Day 10에서 명시적 `route_lock_<id>`로 좁힌 뒤 Day 14 문화제 엔딩으로 간다.
- 호감도 선택은 “누구에게 더 가까이 가는가”만 바꾸고, 필수 소개/공통 일상 구간을 건너뛰게 만들지 않는다. 선택 branch가 끝나면 공통 소개 merge로 되돌아오게 `nextId`를 명시한다.
- 조기 엔딩은 만들지 않는다. Day 3 약속, route seed, 회상 unlock은 모두 Day 4 이후 장기 루트로 이어져야 하며, 정상 진행에서 `ending-promise`로 들어가는 장면은 Day 14의 `day14-closing`뿐이어야 한다.
- 루트락(route lock)은 암묵적인 ending rule 순서에 맡기지 않는다. `route_lock_<id>` 플래그, 100점 만점 호감도(`routeLockThreshold: 70`), route-specific flag 수, 정적 우선순위를 문서화하고 테스트한다.
- Day 11–14처럼 lock 이후 분기해야 하는 장면은 `endingGate: true` + `routeGate: true` + `endingNext`를 route gate로 재사용한다. `routeGate`는 payoff 이동만 처리하고 terminal ending unlock은 기록하지 않는다. 최종 terminal ending 규칙의 `route_lock_<id>` 항목에는 해당 캐릭터 호감도 85+ 조건을 같이 둬서 route lock 플래그만으로 엔딩이 뚫리지 않게 한다.
- 캐릭터 말투는 `src/data/characterProfiles.js`의 `archetype`/`voice`/`motif`를 기준으로 맞춘다. route별 핵심 톤은 현겸=정실 순애/우산, 욱현=무표정 쿨데레/노트, 재성=능글 플러팅/방송, 상원=기록집착 얀데레/기록, 상욱=직진 댕댕이/달리기, 준혁=무심한 두뇌파/지도, 도훈=장난치는 츤데레/정보값, 하음=치유계/박자, 윤호=후배 선배집착/옥상이다. 윤호 route 대사에는 `선배` 호칭을 유지한다.
- 현재 선택지 UI는 1/2/3개 레이아웃만 계약으로 보호한다. 6명 중 고르는 장면은 두 개의 3지선다나 맥락별 초대로 나눈다.
- 사진이 아직 없는 신규 캐릭터는 `characterProfiles`에 `baseSrc: ''`로 등록하고, 시나리오에서는 missing PNG를 가리키는 SCG `src`를 쓰지 않는다.
- Generated background는 PNG, `.prompt.txt`, `agent-sprite-forge-manifest.json` provenance, scenario `BCG` reference가 한 세트다. SVG나 단색 배경으로 대체하지 않는다.
- Day 4 이후 장기 분량을 추가할 때는 `docs/story-expansion-plan.md`의 90분 최소 / 2–3시간 권장 목표와 batch roadmap을 기준으로 한다.
- 답장 선택지가 없는 `phone` 컷신은 `nextId`로 다음 장면을 지정한다. 답장 선택지가 있는 `phone` 장면은 `replies`/`rewards`/`next` 길이를 맞추고 `nextId`를 함께 쓰지 않는다.
- Batch 2부터 시나리오는 `src/data/scenario/day1.js`부터 `day14.js`, `endings.js`처럼 모듈별로 작성하고, `src/data/scenario/index.js`에서 순서를 조립한다. 외부 import는 계속 `src/data/scenario.js` facade를 사용한다.
- 10k longform 목표는 실제 source line count로 검증한다. 대량 확장 후 `npm run test:story-lines`를 실행해 `src/data/scenario*.js` 합계가 최소 10,000줄 이상인지 확인한다.

### 작가식 문장 규칙

### 성인 분위기형 로맨스 규칙

- 내부 전제: 학원도시는 성인 교육도시이며, 모든 route 캐릭터는 실존 인물이 아니라 픽션화된 성인 VN 캐릭터로 작성한다.
- 이 전제는 게임 본문에 `성인`, `19금`, `18금`, `수위`, `미성년`, `성인 인증` 같은 메타 문구로 노출하지 않는다.
- 직접적인 성행위/신체 상세 묘사 대신 암시로 처리한다: 문이 닫힘, 암전, 다음 날의 어색함, 손끝의 온기, 숨 고르기, 말하지 않은 밤.
- Day 10 이전 공통 루트는 긴장을 쌓고, Day 10 route lock 이후부터 질투/독점욕/가까운 거리감을 강화한다.
- 얀데레 기류는 심리적 압박과 선택 집착으로만 표현한다. 폭력, 강제, 명시적 성적 강압으로 쓰지 않는다.

- 표시되는 본문은 반복 템플릿으로 만들지 않는다.
- `Day 6의 첫 단서`처럼 제작 메타가 보이는 표현은 챕터 카드 밖에서 쓰지 않는다.
- 같은 장면 구조를 여러 루트에 복사하지 않는다. 루트마다 다른 장소, 행동, 감정 반전을 둔다.
- 전화 메시지는 보낸 사람의 말투로 쓴다. 진행 상황 보고 문장만 반복하지 않는다.
- 장면 하나에는 최소 하나의 물리적 행동이 있어야 한다. 예: 우산 접기, 노트 접기, 마이크 끄기, 출입 명단 누르기.

| Route | Voice anchor | Required scene material |
| --- | --- | --- |
| 현겸 | 정실 순애, 조용한 기다림 | 비, 우산, 돌아갈 자리 |
| 욱현 | 무표정 쿨데레, 짧은 관찰 | 접힌 노트, 늦은 답장, 시선 회피 |
| 재성 | 능글 플러팅 뒤의 진심 | 방송실, 마이크, 비공개 호출 |
| 상원 | 기록집착 얀데레 | 출입 명단, 선택 증거, 지우지 않는 기록 |
| 상욱 | 직진 댕댕이 | 달리기, 먼저 움직임, 멈추는 법 배우기 |
| 준혁 | 무심한 두뇌파 | 지도, 경로, 계산 밖의 배려 |
| 도훈 | 장난치는 츤데레 | 정보값, 편의점, 놀림 뒤의 보호 |
| 하음 | 치유계 | 숨, 박자, 음악실, 기다림 |
| 윤호 | 후배 선배집착 | 선배 호칭, 옥상, 기다리는 자리 |

| Route | 성인 분위기 강화 장치 | 암시 방식 |
| --- | --- | --- |
| 현겸 | 조용한 질투, 우산 아래 거리 붕괴 | 돌아가지 말라는 낮은 말, 비닐 우산 소리 |
| 욱현 | 읽지 않은 노트와 침묵의 집착 | 도서관 불이 꺼진 뒤 남은 접힌 쪽지 |
| 재성 | 장난을 멈춘 비공개 목소리 | 꺼진 마이크, 방송실 유리 너머 정적 |
| 상원 | 선택 증거를 남기는 기록 집착 | 지워지지 않는 명단, 학범 이름 옆의 선 |
| 상욱 | 숨찬 직진과 손목을 멈추는 순간 | 뛰어온 호흡, 놓지 않는 손끝 |
| 준혁 | 계산이 무너지는 통제욕 | 막힌 경로, 오차라고 부르지 못한 감정 |
| 도훈 | 농담이 끊기는 질투 | 편의점 불빛, 웃지 못한 영수증 뒷면 |
| 하음 | 느린 박자와 위험한 정적 | 음악실 밤, 같은 박자를 고르는 숨 |
| 윤호 | 후배의 기다림이 독점욕으로 기울기 | 옥상 난간, `선배`를 늦게 부르는 목소리 |
