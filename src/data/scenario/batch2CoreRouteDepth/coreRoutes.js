import {
  ROUTE_DEPTH_BATCH2_CORE_MODULE,
  ROUTE_DEPTH_BATCH2_ID,
  routeDepthBatch2CoreBackgroundBindings,
  routeDepthBatch2CoreRouteIds,
  routeDepthBatch2CoreRoutes,
  routeDepthBatch2CoreSceneMetadata
} from './routeDepthBatch2CoreMatrix.js';

const coreRouteSpecs = {
  hyeongyeom: {
    name: '현겸',
    role: '동급생',
    expression: 'quiet',
    effect: 'heart',
    motion: 'nod',
    place: '비 갠 교문 뒤편',
    beats: [
      {
        speaker: 'route',
        mood: 'warm',
        place: '비 갠 교문 뒤편',
        text: '현겸은 접힌 우산 손잡이를 학범 쪽으로 밀어 놓고 한참 말이 없었다. “축제가 끝났는데도 네가 먼저 걸어가면 이상하게 불안해. 고백을 들었는데, 아직도 핑계를 하나 더 찾는 내가 좀 답답하지.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'warm',
        place: '비 갠 교문 뒤편',
        text: '학범은 손잡이 반대편을 잡았다. “답답한 게 아니라 확인하고 싶은 거잖아. 그럼 오늘은 내가 먼저 확인해 줄게. 나는 아직도 네 옆으로 가고 싶어.”'
      },
      {
        speaker: 'route',
        mood: 'tense',
        place: '축제 천막 아래',
        text: '현겸은 천막 끝에 남은 빗물을 바라보았다. “다른 애들이 네 이름을 부를 때마다 손이 먼저 움직여. 잡으면 안 되는 걸 아는데, 혼자 돌아가지 말라고 말하고 싶어져.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'confession',
        place: '축제 천막 아래',
        text: '학범은 도망치듯 웃지 않았다. “잡아도 돼. 대신 몰래 잡지 말고 내 앞에서 말해. 나도 네가 가지 말라고 하면, 왜 남고 싶은지 제대로 대답할게.”'
      },
      {
        speaker: 'route',
        mood: 'tense',
        place: '불 꺼진 전시 복도',
        text: '전시 복도 불이 하나씩 꺼지자 현겸은 우산을 품에 안았다. “네가 다정한 사람인 건 좋아. 그런데 그 다정함 안에서 내가 특별하다고 욕심내도 되는지 아직 무서워.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'warm',
        place: '불 꺼진 전시 복도',
        text: '학범은 우산 끝을 자기 쪽으로 기울였다. “특별해서 내가 이렇게 천천히 말하는 거야. 모두에게 다정하고 싶어도, 같은 우산 아래에 남기고 싶은 사람은 너야.”'
      },
      {
        speaker: 'route',
        mood: 'confession',
        place: '젖은 교문 그림자',
        text: '현겸은 손잡이를 놓지 않은 채 낮게 물었다. “그럼 내일 비가 안 와도 불러도 돼? 우산이 없어도, 네가 먼저 내 이름을 들어 줬으면 좋겠어.”',
        highText: '현겸은 더 숨기지 않고 학범의 손끝을 붙잡았다. “그럼 내일 비가 안 와도 불러도 돼? 오늘처럼 반만 잡는 게 아니라, 네가 괜찮다면 제대로 잡고 싶어.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'confession',
        place: '비 갠 교문 뒤편',
        text: '학범은 고개를 끄덕이고 먼저 현겸의 이름을 불렀다. “현겸아. 내일도, 비가 안 와도, 네가 부르면 돌아볼게. 이제 우리 사이에 핑계는 없어도 돼.”'
      }
    ]
  },
  ukhyun: {
    name: '욱현',
    role: '도서위원',
    expression: 'quiet',
    effect: 'ellipsis',
    motion: 'nod',
    place: '도서관 창가',
    beats: [
      {
        speaker: 'route',
        mood: 'warm',
        place: '도서관 창가',
        text: '욱현은 반납함 위에 새 노트를 펼쳐 두었다. 빈 첫 줄만 접혀 있었다. “끝난 이야기처럼 보이면 사람들이 덮어. 나는 아직 덮기 싫어서, 네가 읽을 문장을 남겨 뒀어.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'warm',
        place: '도서관 창가',
        text: '학범은 접힌 첫 줄을 펴지 않고 손끝으로 눌렀다. “읽을게. 대신 네가 숨겨 둔 답을 맞히는 게임으로 만들지 말자. 오늘은 네 목소리로 들려줘.”'
      },
      {
        speaker: 'route',
        mood: 'tense',
        place: '닫힌 서가 사이',
        text: '욱현은 서가 사이에서 한 걸음 늦게 멈췄다. “네가 다른 사람에게 웃을 때마다 문장이 길어져. 질투라고 쓰면 간단한데, 그렇게 쓰면 내가 너무 쉽게 들킬 것 같았어.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'confession',
        place: '닫힌 서가 사이',
        text: '학범은 노트 가장자리를 자기 쪽으로 당겼다. “들켜도 돼. 나도 네가 접어 둔 마음을 모른 척하기 싫어. 질투라고 쓰면, 나는 옆에 있고 싶다고 답할게.”'
      },
      {
        speaker: 'route',
        mood: 'tense',
        place: '축제 후 도서관',
        text: '방명록을 정리하던 욱현은 학범 이름 아래 빈칸을 오래 보았다. “네 이름 옆에 내 글씨를 남기면, 네 선택을 빌린 것처럼 보일까 봐 멈췄어.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'warm',
        place: '축제 후 도서관',
        text: '학범은 빈칸에 작은 표시를 했다. “빌린 게 아니라 같이 쓰는 거야. 내 선택은 내가 말할게. 네 글씨는 그 옆에서 내가 돌아볼 곳을 알려 줘.”'
      },
      {
        speaker: 'route',
        mood: 'confession',
        place: '읽지 않은 쪽지 앞',
        text: '욱현은 접힌 노트를 학범 손바닥 위에 올렸다. “그럼 마지막 줄은 네가 읽기 전에 말할게. 가까이 있어. 책갈피처럼 조용해도, 내가 놓치지 않게.”',
        highText: '욱현은 접힌 노트를 학범 손바닥 위에 올리고 시선을 피하지 않았다. “마지막 줄은 네가 읽기 전에 말할게. 가까이 있어. 조용한 사람도 욕심낼 수 있다는 걸 네가 알게.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'confession',
        place: '도서관 창가',
        text: '학범은 노트를 접지 않고 가방 안쪽에 넣었다. “가까이 있을게. 네 문장을 내가 보관할게. 다음 장은 도망치지 않고, 네 옆에서 같이 펼치자.”'
      }
    ]
  },
  jaeseong: {
    name: '재성',
    role: '방송부',
    expression: 'confident',
    effect: 'question',
    motion: 'bounce',
    place: '방송실 문 앞',
    beats: [
      {
        speaker: 'route',
        mood: 'warm',
        place: '방송실 문 앞',
        text: '재성은 꺼진 마이크를 손가락으로 두드리다 웃음을 멈췄다. “오늘은 방송 멘트 없어. 네가 대답해 준 뒤로, 장난을 켜면 진짜 목소리가 작아질 것 같아서.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'warm',
        place: '방송실 문 앞',
        text: '학범은 녹음 버튼이 꺼진 걸 확인하고 재성을 바라봤다. “작아져도 들을게. 대신 농담 뒤로 숨으면 다시 물어볼 거야. 지금 네 목소리가 듣고 싶어.”'
      },
      {
        speaker: 'route',
        mood: 'tense',
        place: '무대 뒤 케이블 박스',
        text: '재성은 케이블을 정리하다 멈췄다. “네 이름이 호출될 때마다 내가 먼저 대답하고 싶었어. 웃기지? 마이크도 꺼져 있는데, 내 쪽으로만 들렸으면 했어.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'confession',
        place: '무대 뒤 케이블 박스',
        text: '학범은 헤드폰 한쪽을 받아 들었다. “안 웃겨. 네가 내 이름에 먼저 반응했다는 게 좋아. 나도 재성이 목소리면 사람들 속에서도 바로 알아볼 수 있어.”'
      },
      {
        speaker: 'route',
        mood: 'tense',
        place: '비공개 방송실',
        text: '방송실 문이 닫히자 재성은 평소보다 낮게 말했다. “내가 분위기 좋게 넘기면 네가 편할 줄 알았어. 그런데 네가 진심으로 와 주니까, 이번엔 내가 가볍게 굴면 안 될 것 같아.”'
      },
      {
        speaker: 'hakbeom',
        mood: 'warm',
        place: '비공개 방송실',
        text: '학범은 볼륨 다이얼을 한 칸 낮췄다. “가볍게 굴지 않아도 괜찮아. 네 진심이 서툴면, 그 서툰 부분까지 내가 듣고 있을게.”'
      },
      {
        speaker: 'route',
        mood: 'confession',
        place: '꺼진 마이크 앞',
        text: '재성은 마이크 전원을 끝까지 끄고 학범에게만 들리게 말했다. “그럼 마지막 멘트. 나, 네가 다른 호출에 가기 전에 한 번은 내 이름으로 멈춰 줬으면 해.”',
        highText: '재성은 마이크 전원을 끝까지 끄고 더 가까이 낮춰 말했다. “그럼 마지막 멘트. 오늘은 네가 다른 호출에 가기 전에, 내 이름 때문에 멈췄다고 믿어도 돼?”'
      },
      {
        speaker: 'hakbeom',
        mood: 'confession',
        place: '방송실 문 앞',
        text: '학범은 대답 대신 재성의 이름을 먼저 불렀다. “재성아. 지금 멈췄어. 앞으로도 네 목소리가 나를 부르면, 장난인지 진심인지 피하지 않고 들을게.”'
      }
    ]
  }
};

const metadataBySceneId = new Map(routeDepthBatch2CoreSceneMetadata.map((entry) => [entry.sceneId, entry]));
const backgroundBySceneId = new Map(routeDepthBatch2CoreBackgroundBindings.map((entry) => [entry.sceneId, entry.backgroundId]));
const routeById = new Map(routeDepthBatch2CoreRoutes.map((route) => [route.id, route]));

function buildCoreBatch2Scene(routeId, index) {
  const route = routeById.get(routeId);
  const spec = coreRouteSpecs[routeId];
  const sceneId = route.sceneIds[index];
  const metadata = metadataBySceneId.get(sceneId);
  const backgroundId = backgroundBySceneId.get(sceneId);
  const beat = spec.beats[index];
  const speakerIsHakbeom = beat.speaker === 'hakbeom';

  return {
    id: sceneId,
    type: 'dialogue',
    chapter: 'day-14',
    mood: beat.mood,
    routeId,
    expansionBatch: ROUTE_DEPTH_BATCH2_ID,
    arcId: metadata.arcId,
    arcStage: metadata.arcStage,
    batchModule: ROUTE_DEPTH_BATCH2_CORE_MODULE,
    name: speakerIsHakbeom ? '학범' : spec.name,
    role: speakerIsHakbeom ? '선택' : spec.role,
    place: beat.place || spec.place,
    text: beat.text,
    nextId: index < route.sceneIds.length - 1 ? route.sceneIds[index + 1] : route.returnSceneId,
    effect: speakerIsHakbeom ? undefined : { target: routeId, type: spec.effect },
    directives: [
      { type: 'BCG', src: `/assets/bg/${backgroundId}.png`, transition: index % 2 === 0 ? 'fade-in' : 'hold' },
      { type: 'SCG', id: routeId, name: spec.name, action: index === 0 ? 'enter' : 'update', pos: 3, expression: spec.expression, transition: 'fade-in' },
      { type: 'E', target: routeId, effect: spec.effect, motion: spec.motion }
    ],
    variants: beat.highText ? [
      {
        affection: { [routeId]: { min: 85 } },
        text: beat.highText
      }
    ] : undefined
  };
}

export const coreRouteDepthBatch2Scenes = routeDepthBatch2CoreRouteIds.flatMap((routeId) =>
  Array.from({ length: 8 }, (_, index) => buildCoreBatch2Scene(routeId, index))
);
