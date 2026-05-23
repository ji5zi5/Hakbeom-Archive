import {
  ROUTE_DATE_BATCH3_ID,
  routeDateBatch3BackgroundBindings,
  routeDateBatch3Routes,
  routeDateRouteSpecs
} from './routeDateMatrix.js';

const backgroundBySceneId = new Map(
  routeDateBatch3BackgroundBindings.map((binding) => [binding.sceneId, binding.backgroundId])
);

function backgroundDirective(sceneId, transition = 'fade-in') {
  return {
    type: 'BCG',
    src: `/assets/bg/${backgroundBySceneId.get(sceneId)}.png`,
    transition
  };
}

function enterDirective(route, spec) {
  return {
    type: 'SCG',
    id: route.id,
    name: route.name,
    action: 'enter',
    pos: 3,
    expression: spec.expression,
    transition: 'fade-in'
  };
}

function routeSceneBase(route, sceneId, spec, overrides = {}) {
  return {
    id: sceneId,
    chapter: 'day-7',
    mood: 'confession',
    routeId: route.id,
    expansionBatch: ROUTE_DATE_BATCH3_ID,
    arcId: route.arcId,
    batchModule: 'batch3RouteDates',
    place: spec.place,
    ...overrides
  };
}

function dateToneFlag(routeId, index) {
  return `${routeId}_date_day7_tone_${index + 1}`;
}

function phoneToneFlag(routeId, index) {
  return `${routeId}_phone_day7_reply_${index + 1}`;
}

function buildRouteDateScenes(route) {
  const spec = routeDateRouteSpecs[route.id];
  const [memoryFlag] = route.memoryFlags;
  const [phoneFlag] = route.phoneFlags;
  const [payoffOnlyFlag] = route.payoffOnlyFlags;
  const [inviteId, choiceId, reactionId, phoneId, closeId] = route.sceneIds;

  return [
    routeSceneBase(route, inviteId, spec, {
      type: 'dialogue',
      arcStage: 'invite',
      name: route.name,
      role: spec.role,
      text: spec.invitation,
      effect: { target: route.id, type: spec.effect },
      directives: [
        backgroundDirective(inviteId),
        enterDirective(route, spec),
        { type: 'E', target: route.id, effect: spec.effect, motion: spec.effect === 'chatter' ? 'bounce' : 'nod' }
      ],
      nextId: choiceId
    }),
    routeSceneBase(route, choiceId, spec, {
      type: 'choice',
      arcStage: 'date-choice',
      text: `${route.name}과 빗소리 사이에 남길 말을 고른다.`,
      choices: spec.choices,
      rewards: spec.choices.map((_, index) => ({
        affection: { [route.id]: 10 },
        flags: [memoryFlag, payoffOnlyFlag, dateToneFlag(route.id, index)]
      })),
      next: spec.choices.map(() => reactionId)
    }),
    routeSceneBase(route, reactionId, spec, {
      type: 'dialogue',
      arcStage: 'date-reaction',
      name: route.name,
      role: spec.role,
      text: spec.reaction,
      variants: spec.choices.map((choice, index) => ({
        requiredFlags: [memoryFlag, dateToneFlag(route.id, index)],
        text: `${spec.reaction} 학범이 고른 말, “${choice}”는 둘만 아는 데이트 기억으로 남았다.`
      })),
      directives: [
        backgroundDirective(reactionId, 'hold'),
        { type: 'E', target: route.id, effect: spec.effect, motion: spec.effect === 'heart' ? 'zoom' : 'nod' }
      ],
      nextId: phoneId
    }),
    routeSceneBase(route, phoneId, spec, {
      type: 'phone',
      kind: 'phone',
      arcStage: 'phone-followup',
      name: route.name,
      role: '메시지',
      text: `${route.name}에게서 데이트 후 메시지가 도착했다.`,
      messages: [
        { from: route.id, text: spec.phoneLead, read: true },
        { from: 'hakbeom', text: '나도 아직 그 장면에서 못 나오고 있어.', read: true },
        { from: route.id, pending: true }
      ],
      replies: spec.replies,
      rewards: spec.replies.map((_, index) => ({
        affection: { [route.id]: 8 },
        flags: [phoneFlag, phoneToneFlag(route.id, index)]
      })),
      next: spec.replies.map(() => closeId),
      directives: [
        backgroundDirective(phoneId, 'hold'),
        { type: 'SE', cue: 'message' }
      ]
    }),
    routeSceneBase(route, closeId, spec, {
      type: 'dialogue',
      arcStage: 'memory-payoff',
      name: '학범',
      role: '답장 후',
      text: spec.close,
      variants: spec.replies.map((reply, index) => ({
        requiredFlags: [phoneFlag, phoneToneFlag(route.id, index)],
        text: `${spec.close} 방금 보낸 답장, “${reply}”는 Day 10에 한 사람을 떠올릴 때 가장 먼저 돌아올 문장이 되었다.`
      })),
      directives: [
        backgroundDirective(closeId, 'hold')
      ],
      nextId: route.returnSceneId
    })
  ];
}

export function buildRouteDateBatch3Scenes(routes = routeDateBatch3Routes) {
  return routes.flatMap(buildRouteDateScenes);
}
