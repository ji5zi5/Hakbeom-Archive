import { mapChoiceLabels, mapLocations } from './mapChoiceConfig.js';

const routeNames = {
  hyeongyeom: '현겸',
  ukhyun: '욱현',
  jaeseong: '재성',
  sangwon: '상원',
  sanguk: '상욱',
  junhyeok: '준혁',
  dohun: '도훈',
  haeum: '하음',
  yunho: '윤호'
};

const routeRoles = {
  hyeongyeom: '동급생',
  ukhyun: '도서위원',
  jaeseong: '방송부',
  sangwon: '학생회 기록 담당',
  sanguk: '운동부',
  junhyeok: '동선 담당',
  dohun: '매점 정보통',
  haeum: '음악실 담당',
  yunho: '후배'
};

const backgroundByLocation = {
  'school-gate': '/assets/bg/school-gate-rain.png',
  library: '/assets/bg/library-window.png',
  'broadcast-room': '/assets/bg/broadcast-room.png',
  'student-council-room': '/assets/bg/student-council-room-evening.png',
  gym: '/assets/bg/gym-corridor-evening.png',
  'route-board': '/assets/bg/school-courtyard-blue-hour.png',
  cafeteria: '/assets/bg/convenience-store-night.png',
  'music-room': '/assets/bg/music-room-late-afternoon.png',
  rooftop: '/assets/bg/rooftop-after-rain.png'
};

const dayFlavor = {
  1: {
    first: '새 학기 첫날이라 복도는 아직 서로의 이름을 익히는 소리로 젖어 있었다.',
    same: '첫날의 망설임이 아직 남아 있어서',
    cross: '아직 어색한 첫날인데도',
    night: '첫날 밤'
  },
  2: {
    first: '문화제 준비표가 돌기 시작한 둘째 날이라, 학범의 발걸음마다 부탁보다 약속이 먼저 따라붙었다.',
    same: '둘째 날의 준비 열기 속에서도',
    cross: '문화제 이야기가 복도를 채우는 와중에도',
    night: '둘째 날 밤'
  },
  3: {
    first: '사흘째 점심 이후, 학범은 이제 누가 기다릴지 알면서도 일부러 장소부터 골랐다.',
    same: '사흘 동안 쌓인 시선 때문에',
    cross: '사흘째라 서로의 이름이 조금 더 선명해져서',
    night: '셋째 날 밤'
  }
};

function subjectName(name) {
  return name === '윤호' ? `${name}는` : `${name}은`;
}

const firstVisitLines = {
  'school-gate': {
    lead: '교문 처마 아래에서 현겸은 접힌 우산 손잡이를 만지작거렸다.',
    quote: '“오늘은 네가 먼저 어디 갈지 정하는 날이잖아. 그래도 여기부터 와 줘서… 조금 안심했어.”',
    action: '학범이 젖은 어깨를 털어 주자 현겸은 손잡이를 더 꼭 쥐었다.'
  },
  library: {
    lead: '도서관 창가에는 욱현이 비워 둔 자리와 접히지 않은 쪽지가 있었다.',
    quote: '“네가 올 확률을 적어 두려다가 말았어. 직접 오면 숫자가 필요 없으니까.”',
    action: '학범이 의자를 당기자 욱현의 시선이 책갈피보다 먼저 움직였다.'
  },
  'broadcast-room': {
    lead: '방송실 온에어 불은 꺼져 있었고, 재성은 헤드폰 한쪽을 학범 쪽으로 내밀었다.',
    quote: '“오늘 방송은 비공개야. 네가 듣는 쪽만 켜 둘게.”',
    action: '재성은 장난스럽게 웃었지만 볼륨 다이얼을 낮추는 손끝은 조심스러웠다.'
  },
  'student-council-room': {
    lead: '학생회실 책상 위에는 상원이 학범 이름 옆에 남겨 둔 빈칸이 있었다.',
    quote: '“네가 고른 장소는 내가 적지 않을게. 대신 네가 편한 얼굴이었는지는 보고 싶어.”',
    action: '상원은 펜을 내려놓고 허락을 기다리듯 손을 책상 아래로 거두었다.'
  },
  gym: {
    lead: '체육관 복도에서 상욱은 뛰어오다 학범 앞에서 속도를 죽였다.',
    quote: '“나 먼저 달려가도 되는데, 오늘은 네 보폭에 맞출래.”',
    action: '학범이 숨을 고르자 상욱도 괜히 운동화 끈을 다시 묶었다.'
  },
  'route-board': {
    lead: '동선 게시판 앞에서 준혁은 분필로 그은 선을 손바닥으로 지웠다.',
    quote: '“최단 경로는 계산했는데, 네가 여기서 멈추면 계획을 바꾸는 게 맞아.”',
    action: '학범이 게시판을 올려다보자 준혁은 비어 있는 한 칸을 조용히 남겨 두었다.'
  },
  cafeteria: {
    lead: '매점 셔터가 반쯤 내려간 틈에서 도훈이 따뜻한 캔을 굴려 보냈다.',
    quote: '“늦게 오면 식어. 그래서 기다린 거야. 착각은 하지 말고.”',
    action: '학범이 캔을 받자 도훈은 영수증을 접으며 괜히 시선을 피했다.'
  },
  'music-room': {
    lead: '음악실 창가에서 하음은 빗소리와 피아노 잔향 사이에 자리를 비워 두었다.',
    quote: '“여기서는 빨리 말하지 않아도 돼. 네 숨이 맞을 때까지 내가 박자 잡을게.”',
    action: '학범이 문을 닫자 하음은 손끝으로 낮은 음 하나를 눌러 공기를 가라앉혔다.'
  },
  rooftop: {
    lead: '옥상 문 앞에서 윤호는 작은 표지판을 품에 안고 선배를 기다리고 있었다.',
    quote: '“선배가 오실지도 몰라서요. 좋은 후배처럼 말고… 그냥 기다리고 싶었어요.”',
    action: '학범이 한 걸음 다가가자 윤호는 표지판 대신 가방끈을 꼭 잡았다.'
  }
};

function mapReward(day, location, slot) {
  return {
    affection: { [location.routeId]: slot === 'first' ? 4 : 3 },
    flags: [`day${day}_map_${slot}_${location.id}`]
  };
}

function sceneDirectives(location, transition = 'fade-in') {
  return [
    { type: 'BCG', src: backgroundByLocation[location.id], transition }
  ];
}

function nightReplies(second) {
  return [
    `내일도 ${second.label} 쪽으로 먼저 생각날 것 같아.`,
    '오늘 말은 천천히 다시 듣고 싶어.',
    '그 말, 얼굴 보고 다시 하면 반칙이야.'
  ];
}

function nightReplyRewards(day, second) {
  const routeId = second.routeId;
  return [
    { affection: { [routeId]: 3 }, flags: [`${routeId}_phone_day${day}_direct_reply`] },
    { affection: { [routeId]: 2 }, flags: [`${routeId}_phone_day${day}_gentle_reply`] },
    { affection: { [routeId]: 1 }, flags: [`${routeId}_phone_day${day}_tease_reply`] }
  ];
}

function firstSceneMemoryVariants({ day, location, copy }) {
  if (day <= 1) return undefined;
  const previousDay = day - 1;
  const routeName = routeNames[location.routeId];
  const subject = subjectName(routeName);
  return [
    {
      requiredFlags: [`${location.routeId}_phone_day${previousDay}_direct_reply`],
      text: `${dayFlavor[day].first} ${copy.lead} 어젯밤 답장을 기억한 듯 ${subject} 학범을 보자마자 숨을 삼켰다. “그 말, 오늘 얼굴 보고 들으니까 더 위험한데.” ${copy.action}`
    },
    {
      requiredFlags: [`${location.routeId}_phone_day${previousDay}_gentle_reply`],
      text: `${dayFlavor[day].first} ${copy.lead} 어젯밤 답장처럼 서두르지 않으려는 듯 ${subject} 빈자리를 조용히 가리켰다. “천천히 얘기하자던 거, 나 아직 안 잊었어.” ${copy.action}`
    },
    {
      requiredFlags: [`${location.routeId}_phone_day${previousDay}_tease_reply`],
      text: `${dayFlavor[day].first} ${copy.lead} 어젯밤 장난스러운 답장을 떠올린 듯 ${subject} 눈을 피하면서도 웃음을 숨기지 못했다. “반칙이라고 해 놓고 또 온 건 너야.” ${copy.action}`
    }
  ];
}

function firstScene({ day, chapter, location }) {
  const routeName = routeNames[location.routeId];
  const copy = firstVisitLines[location.id];
  return {
    id: `day${day}-first-${location.id}`,
    type: 'dialogue',
    chapter,
    mood: 'warm',
    name: routeName,
    role: routeRoles[location.routeId],
    place: location.label,
    text: `${dayFlavor[day].first} ${copy.lead} ${copy.quote} ${copy.action}`,
    variants: firstSceneMemoryVariants({ day, location, copy }),
    directives: sceneDirectives(location),
    nextId: `day${day}-map-sunset-after-${location.id}`
  };
}

function secondScene({ day, chapter, first, second }) {
  const firstName = routeNames[first.routeId];
  const secondName = routeNames[second.routeId];
  const secondSubject = subjectName(secondName);
  const samePlace = first.id === second.id;
  return {
    id: `day${day}-second-${first.id}-${second.id}`,
    type: 'dialogue',
    chapter,
    mood: samePlace ? 'confession' : 'warm',
    name: secondName,
    role: routeRoles[second.routeId],
    place: second.label,
    text: samePlace
      ? `${dayFlavor[day].same} ${second.label}에 다시 들어서자 ${secondSubject} 놀란 척도 하지 못했다. “다른 데 갈 수도 있었잖아. 그런데 또 여기면, 나 오늘 조금 기대해도 돼?” 학범이 대답 대신 가까이 서자 ${secondName}의 손끝이 조용히 풀렸다.`
      : `${dayFlavor[day].cross} ${second.label}에 도착하자 ${secondSubject} 학범의 소매에 남은 ${first.label}의 공기를 먼저 알아차렸다. “${firstName}한테 들렀다 와도, 지금 여기 온 건 너잖아.” 짧은 말 뒤에 ${secondSubject} 학범이 설 자리를 한 뼘 비워 두었다.`,
    directives: sceneDirectives(second, 'fade-in'),
    nextId: `day${day}-night-${first.id}-${second.id}`
  };
}

function nightScene({ day, chapter, first, second, finalNextId }) {
  const firstName = routeNames[first.routeId];
  const secondName = routeNames[second.routeId];
  const samePlace = first.id === second.id;
  const pairText = samePlace
    ? `${dayFlavor[day].night}, ${first.label}에 두 번 온 거 나만 의미 있게 받아들인 거 아니지?`
    : `${dayFlavor[day].night}, ${first.label}에서 시작해서 ${second.label}로 온 네 하루 마지막에 내 이름이 남았으면 좋겠다.`;
  return {
    id: `day${day}-night-${first.id}-${second.id}`,
    type: 'phone',
    chapter,
    kind: 'phone',
    name: secondName,
    role: '밤 메시지',
    text: `${secondName}에게서 밤 메시지가 도착했다.`,
    messages: [
      { from: second.routeId, name: secondName, text: pairText, read: true },
      {
        from: 'hakbeom',
        text: samePlace
          ? `오늘 ${second.label}에 다시 간 건 그냥 우연이 아니었어.`
          : `${firstName}도, 너도 오늘 내 마음에 오래 남았어.`,
        read: true
      },
      { from: second.routeId, name: secondName, text: '그 말, 내일 얼굴 보고 다시 들어도 돼?', read: true }
    ],
    replies: nightReplies(second),
    rewards: nightReplyRewards(day, second),
    next: [finalNextId, finalNextId, finalNextId],
    directives: [
      { type: 'SE', cue: 'message' }
    ]
  };
}

export function createMapOpeningScenes({ day, chapter, finalNextId }) {
  return [
    {
      id: `day${day}-map-after-school`,
      type: 'mapChoice',
      chapter,
      mood: 'warm',
      choices: mapChoiceLabels,
      mapLocations,
      rewards: mapLocations.map((location) => mapReward(day, location, 'first')),
      next: mapLocations.map((location) => `day${day}-first-${location.id}`),
      directives: [
        { type: 'BCG', src: '/assets/bg/school-courtyard-blue-hour.png', transition: 'fade-in' }
      ]
    },
    ...mapLocations.map((location) => firstScene({ day, chapter, location })),
    ...mapLocations.map((first) => ({
      id: `day${day}-map-sunset-after-${first.id}`,
      type: 'mapChoice',
      chapter,
      mood: 'warm',
      choices: mapChoiceLabels,
      mapLocations,
      rewards: mapLocations.map((location) => mapReward(day, location, 'second')),
      next: mapLocations.map((second) => `day${day}-second-${first.id}-${second.id}`),
      directives: sceneDirectives(first, 'fade-in')
    })),
    ...mapLocations.flatMap((first) => (
      mapLocations.flatMap((second) => [
        secondScene({ day, chapter, first, second }),
        nightScene({ day, chapter, first, second, finalNextId })
      ])
    ))
  ];
}
