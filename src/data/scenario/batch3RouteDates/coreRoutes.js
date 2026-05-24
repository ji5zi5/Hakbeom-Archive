import { datingSimProfiles } from '../../routeConfig.js';

export const CORE_ROUTE_DATE_BATCH_ID = 'route-date-2026-05-batch3-core';

export const coreRouteDateIds = ['hyeongyeom', 'ukhyun', 'jaeseong'];

const routeSpecs = {
  hyeongyeom: {
    name: '현겸',
    role: '동급생',
    place: '비 갠 교문',
    backgroundId: 'day9-hyeongyeom-rumor',
    effect: 'heart',
    expression: 'blush',
    invitation: '“말이 돈 뒤에 바로 가면, 네가 나를 피한 것처럼 보이잖아. 오늘은 내가 기다렸다고 해도 돼? 네 손이 오면, 나도 안 피할게.”',
    reaction: '“네 대답 들었으니까 이제 나도 말할게. 손잡이 위에 네 손이 남아 있으면, 나 기다린 거 티 나도 괜찮아.”',
    phoneLead: '오늘 네가 먼저 와 줘서 좋았어. 손잡이 놓기 싫었던 거, 티 났어?',
    reply: '티 났어. 그래서 나도 안 놓은 거야. 내일은 내가 먼저 잡을게.',
    returnText: '“그럼 내일은 네가 먼저 잡아.” “응. 비가 안 와도 네 쪽으로 갈게.”',
    choiceReactions: [
      '“그럼 내일은 네가 먼저야? 나, 기다려도 된다는 뜻으로 들을게.”',
      '“조금만 더 걸을래? 이 거리, 이번엔 둘 다 피하지 말자.”',
      '“믿어 준다는 말, 생각보다 세다. 나, 욕심내도 되는 줄 알잖아. 그래도 멈추라고 하면 멈출게.”'
    ],
    choices: [
      '내일은 내가 먼저 기다리겠다고 낮게 말한다.',
      '우산 손잡이를 같이 잡은 채 조금 더 걷자고 묻는다.',
      '남의 말보다 네 기다림을 먼저 믿겠다고 답한다.'
    ],
    replies: [
      '내일은 내가 먼저 잡을게.',
      '우산은 네 쪽으로 기울이고, 나는 네 쪽으로 갈게.',
      '오늘 기다린 마음, 내일 내가 갚을게.'
    ]
  },
  ukhyun: {
    name: '욱현',
    role: '도서위원',
    place: '도서관 창가',
    backgroundId: 'day9-ukhyun-rumor',
    effect: 'ellipsis',
    expression: 'quiet',
    invitation: '“오늘은 접지 않을게. 네가 읽고 싶으면 창가 옆에 있을게. 싫으면 그대로 돌려줘도 돼. 그래도… 네가 와 주면 좋겠어.”',
    reaction: '“크게 답하지 않아도 돼. 네 글씨면 알아봐. 그리고 네가 여기 앉아 준 건, 내가 안 접어 둘게.”',
    phoneLead: '창가 자리, 내일도 비워 둘게. 강요는 아니야.',
    reply: '내일 창가 자리로 갈게. 접지 않은 말, 나도 그대로 들을게.',
    returnText: '“오면 좋고.” “아니, 정정할게. 안 와도 기다릴 거야. 그래도 네가 오면 더 좋아.”',
    choiceReactions: [
      '“천천히 읽어. 나 도망갈 생각 없어. 네가 다 읽을 때까지 옆에 있을게.”',
      '“여기 앉아. 가까워도 괜찮으면 더 가까이 와도 돼. 나는 오늘 안 숨을래.”',
      '“고맙다는 말, 그렇게 작게 하지 마. 나 혼자 여러 번 다시 듣게 되잖아.”'
    ],
    choices: [
      '접지 않은 메모를 그대로 읽겠다고 말한다.',
      '도서관 창가에 같이 앉고 싶다고 답한다.',
      '숨기지 않아 줘서 고맙다고 말한다.'
    ],
    replies: [
      '내일 창가 자리로 갈게.',
      '접지 않은 말, 나도 접지 않을게.',
      '기다린다는 말 고마워.'
    ]
  },
  jaeseong: {
    name: '재성',
    role: '방송부',
    place: '방송실 복도',
    backgroundId: 'day9-jaeseong-rumor',
    effect: 'question',
    expression: 'confident',
    invitation: '“오늘은 방송 말고 비공개 멘트. 마이크 꺼졌고, 네 목소리는 나만 들을게. 다시 말해 달라면 몇 번이든 할게.”',
    reaction: '“장난으로 넘기면 편한데, 지금은 그러기 싫다. 네가 방금 말한 거, 나만 다시 듣고 싶어.”',
    phoneLead: '비공개 멘트 다시 듣고 싶으면 방송실 예약해 둘게.',
    reply: '방송실 예약, 나도 확인할게. 오늘 비공개 멘트 계속 생각났어.',
    returnText: '“다음 멘트는 네가 정해.” “그럼 첫 문장은 이걸로 할게. 내일도 너한테만 말할게.”',
    choiceReactions: [
      '“비공개 요청 접수. 근데 나 지금 긴장한 거 티 나? 티 나면… 네 책임이다.”',
      '“그럼 다음 말은 너한테만 들려줄게. 표시등 꺼질 때까지 기다려.”',
      '“오, 선공 들어오네. 이건 내가 졌다. 대신 다음 대사는 내가 가져갈게.”'
    ],
    choices: [
      '네 목소리는 비공개로 더 듣고 싶다고 답한다.',
      '마이크 없이도 충분히 들렸다고 말한다.',
      '다음 멘트는 내가 먼저 하겠다고 받아친다.'
    ],
    replies: [
      '방송실 예약, 나도 같이 확인할게.',
      '오늘 비공개 멘트 계속 생각났어.',
      '다음엔 내가 먼저 말할 차례야.'
    ]
  }
};

function dateFlag(routeId) {
  return `${routeId}_date_day9_private_signal`;
}

function phoneFlag(routeId) {
  return `${routeId}_phone_day9_after_date`;
}

function dateToneFlag(routeId, index) {
  return `${routeId}_date_day9_tone_${index + 1}`;
}

function phoneToneFlag(routeId, index) {
  return `${routeId}_phone_day9_reply_${index + 1}`;
}

function sceneIds(routeId) {
  return [
    `date-day9-${routeId}-invite`,
    `date-day9-${routeId}-choice`,
    `date-day9-${routeId}-reaction`,
    `phone-day9-${routeId}-after-date`,
    `date-day9-${routeId}-return`
  ];
}

export const coreRouteDateMatrix = coreRouteDateIds.map((routeId) => {
  const ids = sceneIds(routeId);
  const spec = routeSpecs[routeId];
  return {
    routeId,
    ownership: 'core',
    profileId: routeId,
    day: 9,
    expansionBatch: CORE_ROUTE_DATE_BATCH_ID,
    arcId: `${routeId}-day9-private-date-loop`,
    dateMotif: `${spec.place}에서 ${spec.name}이 소문 뒤에 숨겨 둔 사적인 신호를 건네고, 학범이 답장 톤으로 관계를 정한다.`,
    memoryLabel: datingSimProfiles[routeId]?.latestMemoryLabel || spec.place,
    previousSceneId: `day9-free-${routeId}-close`,
    entrySceneId: ids[0],
    exitSceneId: ids[ids.length - 1],
    returnSceneId: 'day9-free-hub-b',
    sceneIds: ids,
    payoffConsumerSceneIds: [ids[2], ids[4], 'day11-opening', 'day11-moe-route-message'],
    backgroundIds: [routeSpecs[routeId].backgroundId],
    memoryFlags: [dateFlag(routeId)],
    phoneFlags: [phoneFlag(routeId)],
    payoffOnlyFlags: [`memory_payoff_${routeId}_day9_private_signal_seen`],
    affectionBudget: {
      existingThroughDay10: 82,
      batch3PreLock: 18,
      requiredDay10LockTotal: 100,
      day11ToTerminal: 0,
      requiredTerminalEligibilityTotal: 100,
      cappedTotal: 100
    }
  };
});

function buildCoreRouteDateScenes(routeId) {
  const spec = routeSpecs[routeId];
  const matrix = coreRouteDateMatrix.find((entry) => entry.routeId === routeId);
  const [inviteId, choiceId, reactionId, phoneId, returnId] = matrix.sceneIds;
  const backgroundSrc = `/assets/bg/${spec.backgroundId}.png`;
  const commonDateFlag = dateFlag(routeId);
  const commonPhoneFlag = phoneFlag(routeId);

  return [
    {
      id: inviteId,
      type: 'dialogue',
      chapter: 'day-9',
      mood: 'confession',
      routeId,
      expansionBatch: CORE_ROUTE_DATE_BATCH_ID,
      batchModule: 'batch3RouteDates',
      arcId: matrix.arcId,
      name: spec.name,
      role: spec.role,
      place: spec.place,
      text: spec.invitation,
      effect: { target: routeId, type: spec.effect },
      directives: [
        { type: 'BCG', src: backgroundSrc, transition: 'fade-in' },
        { type: 'SCG', id: routeId, name: spec.name, action: 'enter', pos: 3, expression: spec.expression, transition: 'fade-in' },
        { type: 'E', target: routeId, effect: spec.effect, motion: spec.effect === 'heart' ? 'nod' : 'shake' }
      ],
      nextId: choiceId
    },
    {
      id: choiceId,
      type: 'choice',
      chapter: 'day-9',
      mood: 'confession',
      routeId,
      expansionBatch: CORE_ROUTE_DATE_BATCH_ID,
      batchModule: 'batch3RouteDates',
      arcId: matrix.arcId,
      place: spec.place,
      text: `“${spec.name}, 이 시간은 네게 어떻게 남길까?”`,
      choices: spec.choices,
      rewards: spec.choices.map((_, index) => ({
        affection: { [routeId]: 12 },
        flags: [commonDateFlag, dateToneFlag(routeId, index)]
      })),
      next: spec.choices.map(() => reactionId)
    },
    {
      id: reactionId,
      type: 'dialogue',
      chapter: 'day-9',
      mood: 'warm',
      routeId,
      expansionBatch: CORE_ROUTE_DATE_BATCH_ID,
      batchModule: 'batch3RouteDates',
      arcId: matrix.arcId,
      name: spec.name,
      role: spec.role,
      place: spec.place,
      text: spec.reaction,
      variants: spec.choices.map((choice, index) => ({
        requiredFlags: [dateToneFlag(routeId, index)],
        text: `${spec.reaction} ${spec.choiceReactions[index] || ''}`.trim()
      })),
      effect: { target: routeId, type: spec.effect },
      directives: [
        { type: 'E', target: routeId, effect: spec.effect, motion: spec.effect === 'heart' ? 'zoom' : 'nod' }
      ],
      nextId: phoneId
    },
    {
      id: phoneId,
      type: 'phone',
      kind: 'phone',
      chapter: 'day-9',
      mood: 'warm',
      routeId,
      expansionBatch: CORE_ROUTE_DATE_BATCH_ID,
      batchModule: 'batch3RouteDates',
      arcId: matrix.arcId,
      name: spec.name,
      role: '메시지',
      place: '밤의 메시지',
      text: spec.phoneLead,
      messages: [
        { from: routeId, text: spec.phoneLead, read: true },
        { from: 'hakbeom', text: spec.reply, read: true },
        { from: routeId, pending: true }
      ],
      replies: spec.replies,
      rewards: spec.replies.map((_, index) => ({
        affection: { [routeId]: 6 },
        flags: [commonPhoneFlag, phoneToneFlag(routeId, index)]
      })),
      next: spec.replies.map(() => returnId),
      directives: [
        { type: 'BCG', src: backgroundSrc, transition: 'hold' },
        { type: 'SE', cue: 'message' }
      ]
    },
    {
      id: returnId,
      type: 'dialogue',
      chapter: 'day-9',
      mood: 'warm',
      routeId,
      expansionBatch: CORE_ROUTE_DATE_BATCH_ID,
      batchModule: 'batch3RouteDates',
      arcId: matrix.arcId,
      name: '학범',
      role: '독백',
      place: spec.place,
      text: spec.returnText,
      variants: [
        {
          requiredFlags: [commonDateFlag, commonPhoneFlag],
          affection: { [routeId]: { min: 70 } },
          text: `${spec.returnText} “내일 한 사람을 골라야 한다면, 나 ${spec.name}한테 갈게. 발걸음이 이미 그쪽으로 가고 있어.”`
        },
        {
          requiredFlags: [commonDateFlag, commonPhoneFlag],
          text: `${spec.returnText} “낮에 한 약속이랑 밤에 보낸 답장, 둘 다 접어 두지 않을게.”`
        },
        {
          default: true,
          text: spec.returnText
        }
      ],
      nextId: matrix.returnSceneId
    }
  ];
}

export const coreRouteDateScenes = coreRouteDateIds.flatMap(buildCoreRouteDateScenes);

export const coreRouteDateSceneBackgroundBindings = coreRouteDateMatrix.flatMap((route) => (
  route.sceneIds.map((sceneId) => ({
    sceneId,
    routeId: route.routeId,
    backgroundId: route.backgroundIds[0]
  }))
));

const routeChoiceIndex = {
  hyeongyeom: 0,
  ukhyun: 1,
  jaeseong: 2
};

const earlySeedStep = {
  hyeongyeom: { sceneId: 'choice-approach', choice: 0 },
  ukhyun: { sceneId: 'choice-day3-route-focus', choice: 1 },
  jaeseong: { sceneId: 'choice-day3-route-focus', choice: 2 }
};

const lockSteps = {
  hyeongyeom: [
    { sceneId: 'day10-choice-lock-group', choice: 0 },
    { sceneId: 'day10-choice-lock-rain-record', choice: 0 }
  ],
  ukhyun: [
    { sceneId: 'day10-choice-lock-group', choice: 1 },
    { sceneId: 'day10-choice-lock-signal-text', choice: 0 }
  ],
  jaeseong: [
    { sceneId: 'day10-choice-lock-group', choice: 1 },
    { sceneId: 'day10-choice-lock-signal-text', choice: 1 }
  ]
};

export const coreRouteDateCommittedScripts = Object.fromEntries(
  coreRouteDateIds.map((routeId) => [
    routeId,
    {
      preLock: [
        earlySeedStep[routeId],
        ...['day6', 'day7', 'day8', 'day9'].map((dayKey) => ({
          sceneId: `${dayKey}-free-hub-a`,
          choice: routeChoiceIndex[routeId]
        })),
        { sceneId: `date-day9-${routeId}-choice`, choice: 0 },
        { sceneId: `phone-day9-${routeId}-after-date`, reply: 0 }
      ],
      lock: lockSteps[routeId],
      requiredDateFlags: [dateFlag(routeId)],
      requiredPhoneFlags: [phoneFlag(routeId)]
    }
  ])
);
