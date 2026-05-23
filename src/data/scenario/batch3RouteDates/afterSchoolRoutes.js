import { datingSimProfiles } from '../../routeConfig.js';
import { ROUTE_DATE_AFFECTION_BUDGETS, ROUTE_DATE_BATCH3_ID } from './routeDateMatrix.js';

const afterSchoolRouteDateSpecs = {
  dohun: {
    routeId: 'dohun',
    name: '도훈',
    role: '매점 정보통',
    expression: 'tease',
    effect: 'chatter',
    arcId: 'dohun-warm-can-rain-date',
    previousSceneId: 'day7-free-dohun-close',
    returnSceneId: 'day7-moe-hyeongyeom-umbrella-edge',
    backgroundId: 'day7-dohun-rain',
    place: '편의점 처마 아래',
    motif: '비닐봉지 속 따뜻한 캔',
    memoryFlag: 'dohun_date_day7_shared_rain',
    phoneFlag: 'dohun_phone_day7_warm_reply',
    payoffOnlyFlag: 'memory_payoff_dohun_day7_rain_seen',
    invitation: '도훈은 따뜻한 캔을 학범 손에 밀어 넣고 딴청을 피웠다. “정보값 아님. 그냥 네가 추워 보여서 산 거니까 오해하지 마라.”',
    reaction: '도훈은 괜히 영수증을 접었다 폈다. 놀리는 말은 여전했지만, 학범이 고른 답 앞에서는 숨겨 둔 다정함이 먼저 들켰다.',
    phoneLead: '캔 식기 전에 마셨냐. 답 안 하면 다음엔 더 단 거 사 간다.',
    close: '학범은 도훈의 협박 같은 걱정을 읽고 캔을 굴렸다. 정보값이라고 부르기엔 너무 따뜻한 시간이 손에 남아 있었다.',
    choiceReactions: [
      '도훈은 “시간은 비싼데” 하고 투덜거리면서도, 학범 손에 쥔 캔이 식었는지 먼저 확인했다.',
      '도훈은 대답을 못 하고 영수증만 구겼다. “그렇게 말하면… 취소 못 하잖아.”',
      '도훈은 “시끄러워”라고 했지만 입꼬리는 이미 졌다. 다음엔 더 따뜻한 걸 사 오겠다는 말만 작게 남겼다.'
    ],
    choices: [
      '정보값 말고 네 시간을 달라고 한다.',
      '그 캔은 데이트 신청으로 받아도 되냐고 묻는다.',
      '다정한 거 들켰다고 놀려 준다.'
    ],
    replies: [
      '정보값 말고 네 시간이 좋아.',
      '그 캔, 데이트 신청으로 받을게.',
      '도훈아, 너 다정한 거 또 들켰어.'
    ]
  },
  haeum: {
    routeId: 'haeum',
    name: '하음',
    role: '음악실 담당',
    expression: 'gentle',
    effect: 'heart',
    arcId: 'haeum-slow-metronome-rain-date',
    previousSceneId: 'day7-free-haeum-close',
    returnSceneId: 'day7-moe-hyeongyeom-umbrella-edge',
    backgroundId: 'day7-haeum-rain',
    place: '음악실 문 앞',
    motif: '느린 박자의 메트로놈',
    memoryFlag: 'haeum_date_day7_shared_rain',
    phoneFlag: 'haeum_phone_day7_warm_reply',
    payoffOnlyFlag: 'memory_payoff_haeum_day7_rain_seen',
    invitation: '하음은 메트로놈을 일부러 느리게 맞췄다. “오늘은 네가 맞춰야 하는 박자 말고, 우리가 같이 늦어도 되는 박자로 걸어 볼래?”',
    reaction: '하음은 학범의 대답에 맞춰 메트로놈을 멈췄다. 정확한 박자보다 둘의 숨이 맞는 순간을 더 믿겠다는 듯 부드럽게 웃었다.',
    phoneLead: '오늘 박자 좋았어. 조금 느렸는데, 그래서 더 같이 걷는 느낌이었어.',
    close: '학범은 하음의 메시지를 읽으며 자기 숨을 세었다. 느린 박자는 뒤처짐이 아니라, 함께 흔들리기 위해 남겨 둔 여유였다.',
    choiceReactions: [
      '하음은 메트로놈을 한 칸 더 늦췄다. “그럼 오늘은 네 속도부터 들을게.”',
      '하음은 손끝으로 박자를 세다 학범을 봤다. “흔들리면 나도 같이 흔들리면 되지.”',
      '하음은 웃느라 첫 음을 놓쳤다. “그 말, 다시 한 번만. 박자 맞춰서 듣고 싶어.”'
    ],
    choices: [
      '네 박자에 맞춰 가겠다고 말한다.',
      '내가 흔들리면 같이 세어 달라고 부탁한다.',
      '오늘 느린 걸음이 좋았다고 고백한다.'
    ],
    replies: [
      '네 박자에 맞춰 갈게.',
      '내가 흔들리면 같이 세어 줘.',
      '오늘 느린 걸음이 좋았어.'
    ]
  },
  yunho: {
    routeId: 'yunho',
    name: '윤호',
    role: '후배 / 옥상 담당',
    expression: 'quiet',
    effect: 'ellipsis',
    arcId: 'yunho-rooftop-key-rain-date',
    previousSceneId: 'day7-free-yunho-close',
    returnSceneId: 'day7-moe-hyeongyeom-umbrella-edge',
    backgroundId: 'day7-yunho-rain',
    place: '옥상 문 앞',
    motif: '옥상 열쇠고리',
    memoryFlag: 'yunho_date_day7_shared_rain',
    phoneFlag: 'yunho_phone_day7_warm_reply',
    payoffOnlyFlag: 'memory_payoff_yunho_day7_rain_seen',
    invitation: '윤호는 옥상 열쇠고리를 손바닥 안에 숨겼다. “선배, 오늘은 좋은 후배 말고… 같이 있고 싶은 사람으로 기다려도 돼요?”',
    reaction: '윤호는 선배라는 호칭 뒤에 숨지 못하고 웃었다. 허락을 기다리던 거리보다 반 걸음 가까워진 곳에, 처음으로 자기 욕심을 세워 두었다.',
    phoneLead: '오늘 옥상 문, 일부러 바로 안 잠갔어요. 선배가 더 계실까 봐요.',
    close: '학범은 윤호의 조심스러운 메시지를 읽고 옥상 문 손잡이를 떠올렸다. 기다림은 이제 후배의 예의가 아니라, 둘 사이의 약속으로 바뀌고 있었다.',
    choiceReactions: [
      '윤호는 난간을 잡은 손에 힘을 줬다가 풀었다. “그럼… 한 걸음만 더 가도 돼요?”',
      '윤호는 “선배”를 삼키고 학범 이름을 작게 불렀다. 부르고 나서야 얼굴이 빨개졌다.',
      '윤호는 열쇠고리를 손바닥 위에 올려 보였다. “그러면 다음엔 제가 먼저 기다릴게요.”'
    ],
    choices: [
      '허락한 거리보다 조금 더 가까워도 된다고 말한다.',
      '좋은 후배 말고 윤호로 기다려 달라고 한다.',
      '다음엔 내가 먼저 옥상으로 가겠다고 약속한다.'
    ],
    replies: [
      '조금 더 가까워도 돼.',
      '좋은 후배 말고 윤호로 기다려 줘.',
      '다음엔 내가 먼저 옥상으로 갈게.'
    ]
  }
};

function subjectParticle(name) {
  if (!name) return '이';
  const lastCode = name.charCodeAt(name.length - 1);
  if (lastCode < 0xac00 || lastCode > 0xd7a3) return '이';
  return (lastCode - 0xac00) % 28 === 0 ? '가' : '이';
}

function sceneIds(routeId) {
  return [
    `date-day7-${routeId}-invite`,
    `date-day7-${routeId}-choice`,
    `date-day7-${routeId}-reaction`,
    `phone-day7-${routeId}-after-date`,
    `date-day7-${routeId}-phone-close`
  ];
}

function choiceToneFlag(routeId, index) {
  return `${routeId}_date_day7_tone_${index + 1}`;
}

function phoneToneFlag(routeId, index) {
  return `${routeId}_phone_day7_reply_${index + 1}`;
}

export const afterSchoolRouteDateMatrix = Object.values(afterSchoolRouteDateSpecs).map((spec) => {
  const ids = sceneIds(spec.routeId);
  return {
    id: spec.routeId,
    routeId: spec.routeId,
    ownership: 'after-school',
    profileId: spec.routeId,
    name: spec.name,
    day: 7,
    expansionBatch: ROUTE_DATE_BATCH3_ID,
    arcId: spec.arcId,
    dateMotif: `${spec.place}에서 ${spec.name}이 ${spec.motif}를 핑계로 학범에게 사적인 시간을 제안한다.`,
    memoryLabel: datingSimProfiles[spec.routeId]?.latestMemoryLabel || spec.motif,
    previousSceneId: spec.previousSceneId,
    entrySceneId: ids[0],
    exitSceneId: ids[ids.length - 1],
    returnSceneId: spec.returnSceneId,
    sceneIds: ids,
    payoffConsumerSceneIds: [ids[2], ids[4], 'day11-opening', 'day11-moe-route-message'],
    backgroundIds: [spec.backgroundId],
    memoryFlags: [spec.memoryFlag],
    phoneFlags: [spec.phoneFlag],
    payoffOnlyFlags: [spec.payoffOnlyFlag],
    affectionBudget: ROUTE_DATE_AFFECTION_BUDGETS[spec.routeId]
  };
});

function scgDirective(spec, action = 'enter') {
  return {
    type: 'SCG',
    id: spec.routeId,
    name: spec.name,
    action,
    pos: 3,
    expression: spec.expression,
    transition: 'fade-in'
  };
}

function buildAfterSchoolRouteDateScenes(spec) {
  const matrix = afterSchoolRouteDateMatrix.find((route) => route.routeId === spec.routeId);
  const [inviteId, choiceId, reactionId, phoneId, closeId] = matrix.sceneIds;

  return [
    {
      id: inviteId,
      type: 'dialogue',
      chapter: 'day-7',
      mood: 'warm',
      routeId: spec.routeId,
      expansionBatch: ROUTE_DATE_BATCH3_ID,
      batchModule: 'batch3RouteDates',
      dateLoop: true,
      arcId: spec.arcId,
      arcStage: 'date-invite',
      name: spec.name,
      role: spec.role,
      place: spec.place,
      text: spec.invitation,
      effect: { target: spec.routeId, type: spec.effect },
      directives: [
        { type: 'BCG', src: `/assets/bg/${spec.backgroundId}.png`, transition: 'fade-in' },
        scgDirective(spec),
        { type: 'E', target: spec.routeId, effect: spec.effect, motion: spec.effect === 'heart' ? 'zoom' : 'nod' }
      ],
      nextId: choiceId
    },
    {
      id: choiceId,
      type: 'choice',
      chapter: 'day-7',
      mood: 'warm',
      routeId: spec.routeId,
      expansionBatch: ROUTE_DATE_BATCH3_ID,
      batchModule: 'batch3RouteDates',
      dateLoop: true,
      arcId: spec.arcId,
      arcStage: 'date-choice',
      name: spec.name,
      role: spec.role,
      place: spec.place,
      text: `${spec.name}${subjectParticle(spec.name)} 건넨 시간을 학범은 어떤 온도로 받아들일까?`,
      choices: spec.choices,
      rewards: spec.choices.map((_, index) => ({
        affection: { [spec.routeId]: 12 },
        flags: [spec.memoryFlag, choiceToneFlag(spec.routeId, index)]
      })),
      next: spec.choices.map(() => reactionId)
    },
    {
      id: reactionId,
      type: 'dialogue',
      chapter: 'day-7',
      mood: 'warm',
      routeId: spec.routeId,
      expansionBatch: ROUTE_DATE_BATCH3_ID,
      batchModule: 'batch3RouteDates',
      dateLoop: true,
      arcId: spec.arcId,
      arcStage: 'date-reaction',
      name: spec.name,
      role: spec.role,
      place: spec.place,
      text: spec.reaction,
      variants: spec.choices.map((choice, index) => ({
        requiredFlags: [spec.memoryFlag, choiceToneFlag(spec.routeId, index)],
        text: `${spec.reaction} ${spec.choiceReactions[index] || ''}`.trim()
      })),
      directives: [
        { type: 'E', target: spec.routeId, effect: spec.effect, motion: spec.effect === 'chatter' ? 'bounce' : 'nod' },
        scgDirective(spec, 'update')
      ],
      nextId: phoneId
    },
    {
      id: phoneId,
      type: 'phone',
      kind: 'phone',
      chapter: 'day-7',
      mood: 'warm',
      routeId: spec.routeId,
      expansionBatch: ROUTE_DATE_BATCH3_ID,
      batchModule: 'batch3RouteDates',
      dateLoop: true,
      arcId: spec.arcId,
      arcStage: 'phone-followup',
      name: spec.name,
      role: '메시지',
      place: '밤의 메시지',
      text: spec.phoneLead,
      messages: [
        { from: spec.routeId, text: spec.phoneLead, read: true },
        { from: 'hakbeom', pending: true }
      ],
      replies: spec.replies,
      rewards: spec.replies.map((_, index) => ({
        affection: { [spec.routeId]: 6 },
        flags: [spec.phoneFlag, phoneToneFlag(spec.routeId, index)]
      })),
      next: spec.replies.map(() => closeId),
      directives: [{ type: 'SE', cue: 'message' }]
    },
    {
      id: closeId,
      type: 'dialogue',
      chapter: 'day-7',
      mood: 'warm',
      routeId: spec.routeId,
      expansionBatch: ROUTE_DATE_BATCH3_ID,
      batchModule: 'batch3RouteDates',
      dateLoop: true,
      arcId: spec.arcId,
      arcStage: 'return',
      name: '학범',
      role: '기억',
      place: spec.place,
      text: spec.close,
      variants: [
        {
          requiredFlags: [spec.memoryFlag, spec.phoneFlag],
          text: `${spec.close} 학범은 이 기억을 단순한 우연이 아니라, 나중에 다시 꺼낼 수 있는 둘만의 약속으로 저장했다.`
        },
        {
          default: true,
          text: spec.close
        }
      ],
      nextId: spec.returnSceneId
    }
  ];
}

export const afterSchoolRouteDateScenes = Object.values(afterSchoolRouteDateSpecs).flatMap(buildAfterSchoolRouteDateScenes);

export const afterSchoolRouteDateBackgroundBindings = afterSchoolRouteDateMatrix.flatMap((route) => (
  route.sceneIds.map((sceneId) => ({
    sceneId,
    routeId: route.routeId,
    backgroundId: route.backgroundIds[0]
  }))
));
