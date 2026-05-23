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
    invitation: '현겸은 접힌 우산 손잡이를 학범 쪽으로 밀어 놓고 말했다. “소문 끝나고 바로 가면, 오늘은 내가 기다리는 쪽이 될 것 같아서.”',
    reaction: '현겸은 대답을 듣고서야 우산 끝을 낮췄다. 기다리는 마음을 들킨 사람처럼 조용히 웃었지만, 학범 쪽으로 한 걸음은 더 가까워졌다.',
    phoneLead: '오늘은 네가 먼저 걸어와 줘서 좋았어.',
    reply: '학범은 “내일도 내가 먼저 갈게”라고 적은 뒤 전송 버튼 위에서 손가락을 멈췄다.',
    returnText: '현겸은 마지막 답장을 길게 쓰지 않았다. 대신 “응. 기다릴게”라는 두 단어가 학범의 밤을 오래 붙잡았다.',
    choiceReactions: [
      '현겸은 “그럼 내일은 네가 먼저야?”라고 묻고는, 대답을 기다리기 전에 웃어 버렸다.',
      '현겸은 손잡이를 조금 내밀었다. 닿을 듯 말 듯한 거리가 둘 다에게 충분히 길었다.',
      '현겸은 고개를 숙였다가 작게 끄덕였다. “믿어 준다는 말, 생각보다 세다.”'
    ],
    choices: [
      '내일은 내가 먼저 기다리겠다고 말한다.',
      '우산 손잡이를 같이 잡아도 되냐고 묻는다.',
      '소문보다 네 마음을 먼저 믿겠다고 답한다.'
    ],
    replies: [
      '내일은 내가 먼저 갈게.',
      '우산은 네 쪽으로 조금 더 기울여 줘.',
      '오늘 기다려 줘서 고마웠어.'
    ]
  },
  ukhyun: {
    name: '욱현',
    role: '도서위원',
    place: '도서관 창가',
    backgroundId: 'day9-ukhyun-rumor',
    effect: 'ellipsis',
    expression: 'quiet',
    invitation: '욱현은 책갈피 대신 접지 않은 메모를 내밀었다. “오늘은 숨겨 두지 않을게. 네가 읽고 싶으면, 옆에서 기다릴 수 있어.”',
    reaction: '욱현은 시선을 노트에 둔 채 고개만 끄덕였다. 짧은 대답이었지만, 접힌 선이 없는 종이는 이미 충분히 솔직했다.',
    phoneLead: '창가 자리, 내일도 비워 둘게. 강요는 아니야.',
    reply: '학범은 화면에 뜬 짧은 문장을 몇 번이나 다시 읽었다. 욱현의 기다림은 말수가 적어서 더 분명했다.',
    returnText: '욱현은 “오면 좋고”라고 보낸 뒤 곧바로 “안 와도 기다릴 거야”를 덧붙였다. 학범은 그 두 번째 문장이 진짜 답이라는 걸 알았다.',
    choiceReactions: [
      '욱현은 메모를 접지 않은 채 밀어 줬다. “천천히 읽어. 도망갈 생각 없어.”',
      '욱현은 창가 의자를 말없이 빼 두었다. 비어 있던 자리가 대답보다 먼저 가까워졌다.',
      '욱현은 시선을 피했지만 메모 모서리는 학범 쪽으로 남겨 두었다. “그 말은… 저장해 둘게.”'
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
    invitation: '재성은 꺼진 마이크를 학범 손에 쥐여 주고 웃었다. “오늘은 방송 말고 비공개 멘트. 네가 원하면 다시 녹음할게.”',
    reaction: '재성은 장난스럽게 웃다가도 학범의 답을 들은 순간 목소리를 낮췄다. 마이크가 꺼져 있어서 다행이라는 듯 진심이 더 선명했다.',
    phoneLead: '비공개 멘트 다시 듣고 싶으면 방송실 예약해 둘게.',
    reply: '학범은 재성의 메시지 끝에 붙은 웃는 표시가 농담인지 고백인지 오래 구분하지 못했다.',
    returnText: '재성은 “다음 멘트는 네가 정해”라고 보냈다. 장난처럼 보낸 문장인데도, 학범에게는 초대장처럼 도착했다.',
    choiceReactions: [
      '재성은 마이크를 내려놓고 웃었다. “비공개 요청 접수. 근데 나 긴장한 거 티 나?”',
      '재성은 손가락으로 꺼진 표시등을 톡 쳤다. “그럼 다음 말은 너한테만 들려줄게.”',
      '재성은 잠깐 말문이 막혔다가 웃었다. “오, 선공 들어오네. 이건 내가 졌다.”'
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
      arcId: matrix.arcId,
      place: spec.place,
      text: `${spec.name}과의 사적인 시간을 어떻게 기억할까?`,
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
      arcId: matrix.arcId,
      name: '학범',
      role: '독백',
      place: spec.place,
      text: spec.returnText,
      variants: [
        {
          requiredFlags: [commonDateFlag, commonPhoneFlag],
          affection: { [routeId]: { min: 70 } },
          text: `${spec.returnText} 다음날 한 사람을 골라야 한다면, 학범의 발걸음은 자연스럽게 ${spec.name} 쪽으로 기울 것 같았다.`
        },
        {
          requiredFlags: [commonDateFlag, commonPhoneFlag],
          text: `${spec.returnText} 낮의 약속과 밤의 답장이 겹치자, 다음 선택은 생각보다 조용히 정리됐다.`
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
