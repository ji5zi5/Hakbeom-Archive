import {
  ROUTE_DEPTH_BATCH_ID,
  routeDepthRoutes,
  routeDepthSceneBackgroundBindings,
  routeDepthSceneMetadata
} from './routeDepthBatchMatrix.js';

const routeSpecs = {
  hyeongyeom: { name: '현겸', role: '동급생', motif: '우산 손잡이', place: '비 갠 교문', effect: 'heart', expression: 'blush', voice: '조용한 순애가 질투를 숨기지 않는다' },
  ukhyun: { name: '욱현', role: '도서위원', motif: '접힌 노트', place: '도서관 창가', effect: 'ellipsis', expression: 'quiet', voice: '무표정한 쿨데레가 여백으로 고백한다' },
  jaeseong: { name: '재성', role: '방송부', motif: '꺼진 마이크', place: '방송실 복도', effect: 'question', expression: 'confident', voice: '능글맞은 플러팅 뒤의 진심을 낮춘다' },
  sangwon: { name: '상원', role: '학생회 기록 담당', motif: '수정된 기록표', place: '학생회 기록실', effect: 'ellipsis', expression: 'quiet', voice: '기록집착 얀데레가 이름 옆 빈칸을 고백으로 채운다' },
  sanguk: { name: '상욱', role: '육상부', motif: '운동화 끈', place: '체육관 복도', effect: 'heart', expression: 'smile', voice: '직진 댕댕이가 달려온 숨으로 마음을 전한다' },
  junhyeok: { name: '준혁', role: '동선 담당', motif: '접힌 지도', place: '지도 게시판 앞', effect: 'question', expression: 'quiet', voice: '무심한 두뇌파가 최단거리 대신 학범의 선택을 기다린다' },
  dohun: { name: '도훈', role: '매점 정보통', motif: '숨겨 둔 쿠폰', place: '매점 앞', effect: 'blush', expression: 'smile', voice: '장난 츤데레가 정보값 대신 진심을 내민다' },
  haeum: { name: '하음', role: '음악실 담당', motif: '느린 박자', place: '음악실 문 앞', effect: 'heart', expression: 'smile', voice: '치유계가 학범의 숨을 맞춰 주며 마음을 확인한다' },
  yunho: { name: '윤호', role: '후배', motif: '옥상 열쇠', place: '옥상 난간', effect: 'ellipsis', expression: 'quiet', voice: '후배가 선배 호칭을 놓치지 않고 기다림을 고백한다' }
};

const beatTexts = [
  (spec) => `${spec.name}은 ${spec.motif}를 학범 쪽으로 밀어 놓았다. “오늘은 내가 먼저 말하고 싶었어.” ${spec.voice}; 그래서 평소보다 느린 목소리로, 같이 있어 달라는 말을 숨기지 않았다.`,
  (spec) => `학범은 ${spec.motif} 위에 손끝을 올렸다. “기록이나 소문보다 네가 직접 말해 준 게 더 믿겨.” 대답은 짧았지만 ${spec.name}의 기다림이 향한 방향을 정확히 향했다.`,
  (spec) => `${spec.name}은 축제 소문이 번진 복도에서 ${spec.motif}를 쥔 채 한 걸음 멈췄다. “네가 모두에게 다정한 건 알아. 그런데 오늘은 그 모두 안에서 내가 어디인지 알고 싶어.”`,
  (spec) => `학범은 도망치듯 웃지 않았다. “네 자리는 따로 적어 둘 필요 없어. 나는 ${spec.motif}가 네 손에 있을 때부터 계속 보고 있었으니까.” 그 말에 ${spec.name}의 표정이 아주 조금 풀렸다.`,
  (spec) => `리허설 불빛 아래에서 ${spec.name}은 ${spec.motif}를 다시 고쳐 잡았다. 실수한 척 넘길 수 있는 순간이었지만, 이번에는 학범 이름 옆에 자기 마음을 그대로 놓았다.`,
  (spec) => `학범은 ${spec.name}의 ${spec.motif}를 눈에 담고 천천히 말했다. “내가 고르는 길이 헷갈리면 네가 다시 불러 줘. 오늘은 ${spec.name} 목소리라면 바로 돌아볼게.”`,
  (spec) => `축제 끝, ${spec.place}에 남은 ${spec.name}은 마지막으로 물었다. “선택받는다는 말, 아직 무서운데 그래도 네 대답을 듣고 싶어.” 소문은 멀어지고 둘 사이의 숨만 남았다.`,
  (spec) => `학범은 ${spec.name}의 ${spec.motif} 가까이 한 걸음 다가갔다. “내 대답은 이미 네 쪽이야. 늦게 말해서 미안해. 이제부터는 내가 먼저 네 이름을 부를게.”`
];

const metadataBySceneId = new Map(routeDepthSceneMetadata.map((entry) => [entry.sceneId, entry]));
const backgroundBySceneId = new Map(routeDepthSceneBackgroundBindings.map((entry) => [entry.sceneId, entry.backgroundId]));
const routeById = new Map(routeDepthRoutes.map((route) => [route.id, route]));

function buildScene(routeId, index) {
  const route = routeById.get(routeId);
  const spec = routeSpecs[routeId];
  const sceneId = route.sceneIds[index];
  const metadata = metadataBySceneId.get(sceneId);
  const backgroundId = backgroundBySceneId.get(sceneId);
  const speakerIsHakbeom = index % 2 === 1;
  return {
    id: sceneId,
    type: 'dialogue',
    chapter: 'day-14',
    mood: index >= 6 ? 'confession' : index >= 2 ? 'tense' : 'warm',
    routeId,
    expansionBatch: ROUTE_DEPTH_BATCH_ID,
    arcId: metadata.arcId,
    arcStage: metadata.arcStage,
    batchModule: 'batch1RouteDepth',
    name: speakerIsHakbeom ? '학범' : spec.name,
    role: speakerIsHakbeom ? '선택' : spec.role,
    place: spec.place,
    text: beatTexts[index](spec),
    nextId: index < route.sceneIds.length - 1 ? route.sceneIds[index + 1] : 'day14-merge',
    effect: speakerIsHakbeom ? undefined : { target: routeId, type: spec.effect },
    directives: [
      { type: 'BCG', src: `/assets/bg/${backgroundId}.png`, transition: index % 2 === 0 ? 'fade-in' : 'hold' },
      { type: 'SCG', id: routeId, name: spec.name, action: index === 0 ? 'enter' : 'update', pos: 3, expression: spec.expression, transition: 'fade-in' },
      { type: 'E', target: routeId, effect: spec.effect, motion: spec.effect === 'heart' ? 'nod' : 'shake' }
    ],
    variants: index === 6 ? [
      {
        affection: { [routeId]: { min: 85 } },
        text: `${spec.name}은 ${spec.motif}를 숨기지 않았다. “선택받는다는 말, 아직 무서운데… 그래도 선배가 아니라 네 대답으로 듣고 싶어.”`
      }
    ] : undefined
  };
}

export function buildRouteDepthScenes(routeIds) {
  return routeIds.flatMap((routeId) => Array.from({ length: 8 }, (_, index) => buildScene(routeId, index)));
}
