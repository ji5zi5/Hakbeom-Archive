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
    { affection: { hyeongyeom: 1 }, flags: ['warm_reply'] },
    { affection: { hyeongyeom: 1 }, flags: ['playful_reply'] }
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
    { affection: { hyeongyeom: 1 }, flags: ['message_waiting'] },
    { affection: { hyeongyeom: 1 }, flags: ['message_tease'] }
  ],
  next: ['reply-warm', 'reply-playful']
}
```

## 보상과 플래그

`rewards`는 선택지/답장 결과를 기록한다.

- `affection`: 호감도 변경. `routeConfig.affectionTarget.max`를 넘지 않도록 엔진이 clamp한다.
- `flags`: 이후 분기, variants, 갤러리 해금 조건에 사용한다.
- `gallery`, `unlockedGallery`, `galleryItem`: `routeConfig.galleryItems`에 존재하는 ID만 사용한다.
- `recollections`, `unlockedRecollections`, `recollectionItem`: `routeConfig.recollectionItems`에 존재하는 ID만 사용한다.
- `ending`/`endings`: terminal ending ID 또는 route config ending ID와 맞아야 한다.

## 분기와 도달 가능성

- `nextId`, `next`, `choiceNext`, `endingNext`, `skipToId`는 모두 실제 존재하는 ID여야 한다.
- `endingNext`는 ending gate에서만 사용한다.
- 정상 장면은 시작점에서 도달 가능해야 한다. 도달 불가능하면 validator가 `unreachable non-preview scene` 에러를 낸다.
- 의도적으로 정상 흐름에서 제외하는 장면은 `previewOnly: true`를 붙인다.

## 엔딩 규칙

`episodeInfo.endingRules`는 위에서부터 검사된다.

- `default: true`인 rule은 fallback이다.
- `affection`과 `flags` 조건이 모두 맞으면 해당 ending route가 선택된다.
- `endingGate: true` 장면은 `endingNext`로 실제 terminal 장면을 고른다.

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
