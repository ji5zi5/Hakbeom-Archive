export const episodeInfo = {
  title: '학범 러브',
  sectionTitle: '프롤로그: 비 오는 방과 후',
  summary: '비가 내리던 방과 후, 학범은 학생회실 앞에서 우산을 잃어버린 현겸과 마주친다. 사소한 농담과 선택이 어색한 공기를 바꾸고, 학범은 같은 우산 아래에서 다음 약속을 정한다.',
  skipToId: 'ending-promise',
  endingRules: [
    {
      id: 'good',
      title: '굿 엔딩: 같은 우산의 약속',
      affection: { hyeongyeom: 6 },
      flags: ['shared_umbrella', 'slow_walk', 'promise_hand']
    },
    {
      id: 'normal',
      title: '노멀 엔딩: 내일도 복도에서',
      affection: { hyeongyeom: 3 },
      flags: ['promise_hand']
    },
    {
      id: 'quiet',
      title: '조용한 엔딩: 비가 그친 뒤',
      default: true
    }
  ]
};

export const scenario = [
  {
    id: 'opening',
    type: 'dialogue',
    mood: 'rain',
    name: '학범',
    role: '방과 후',
    place: '방과 후 복도',
    text: '비가 오기 시작했다. 학생회 서류를 다 정리했을 때쯤, 복도에는 빗소리만 남아 있었다.',
    directives: [
      { type: 'BCG', src: '/assets/ui/image0_13_6.jpg', transition: 'fade-in' }
    ]
  },
  {
    id: 'meet-after-school',
    type: 'dialogue',
    mood: 'rain',
    name: '현겸',
    role: '동급생',
    place: '학생회실 앞',
    text: '학범아, 아직 안 갔어? 혹시 우산 하나 더 있어?',
    effect: { target: 'hyeongyeom', type: 'question' },
    directives: [
      {
        type: 'SCG',
        id: 'hyeongyeom',
        name: '현겸',
        action: 'enter',
        pos: 3,
        src: '/assets/character/hyungyeom.png',
        expression: 'normal',
        transition: 'enter-right'
      },
      { type: 'E', target: 'hyeongyeom', effect: 'question', motion: 'nod', se: 'question' },
      { type: 'SE', cue: 'voice-soft' }
    ]
  },
  {
    id: 'prologue-title',
    type: 'banner',
    text: '비 오는 방과 후, 학범의 우산 아래로 현겸이 들어왔다.',
    summary: '학범에게 평범한 방과 후가 조금 다른 분위기로 바뀌기 시작한다.'
  },
  {
    id: 'quiet-room',
    type: 'dialogue',
    mood: 'tense',
    name: '학범',
    role: '독백',
    place: '학생회실',
    text: '창가에 선 현겸은 젖은 앞머리를 손끝으로 넘겼다. 이상하게, 그 순간만 빗소리가 멀어진 것 같았다.',
    directives: [
      { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'wet', motion: 'zoom' }
    ]
  },
  {
    id: 'tease',
    type: 'dialogue',
    mood: 'warm',
    name: '현겸',
    role: '동급생',
    text: '왜 그렇게 봐? 나랑 둘이 있는 게 그렇게 어색해?',
    effect: { target: 'hyeongyeom', type: 'heart' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'bounce', se: 'heart' }
    ]
  },
  {
    id: 'choice-approach',
    type: 'choice',
    choices: [
      '우산, 같이 쓸래?',
      '학생회 일은 여기까지. 내가 데려다줄게.',
      '오늘따라 네가 신경 쓰여.'
    ],
    rewards: [
      { affection: { hyeongyeom: 2 }, flags: ['shared_umbrella'] },
      { affection: { hyeongyeom: 1 }, flags: ['student_council_help'] },
      { affection: { hyeongyeom: 3 }, flags: ['direct_compliment'] }
    ],
    next: ['branch-umbrella', 'branch-help', 'branch-compliment']
  },
  {
    id: 'branch-umbrella',
    type: 'dialogue',
    name: '현겸',
    role: '동급생',
    text: '그 말, 먼저 해줘서 다행이다. 나 혼자 부탁하려니까 좀 떨렸거든.',
    effect: { target: 'hyeongyeom', type: 'blush' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'blush' },
      { type: 'E', target: 'hyeongyeom', effect: 'blush', motion: 'nod' }
    ],
    nextId: 'after-approach'
  },
  {
    id: 'branch-help',
    type: 'dialogue',
    name: '현겸',
    role: '동급생',
    text: '역시 학범이는 그런 식으로 말하네. 책임감 있는 척하면서 다정한 거, 좀 반칙이야.',
    effect: { target: 'hyeongyeom', type: 'chatter' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'chatter', motion: 'bounce', se: 'chatter' }
    ],
    nextId: 'after-approach'
  },
  {
    id: 'branch-compliment',
    type: 'dialogue',
    name: '현겸',
    role: '동급생',
    text: '갑자기 그런 말을 하면 내가 뭐라고 해야 돼? 그래도… 싫지는 않아.',
    effect: { target: 'hyeongyeom', type: 'blush' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'blush', motion: 'shake' },
      { type: 'SE', cue: 'blush' }
    ],
    nextId: 'after-approach'
  },
  {
    id: 'after-approach',
    type: 'dialogue',
    name: '학범',
    role: '독백',
    text: '가볍게 던진 말이었는데, 현겸의 귀끝이 조금 붉어진 걸 보고 학범은 괜히 시선을 피했다.',
    variants: [
      {
        flags: ['direct_compliment'],
        text: '솔직하게 말한 뒤라 그런지, 현겸의 귀끝이 붉어진 순간 학범의 심장도 같이 뛰었다.'
      },
      {
        flags: ['student_council_help'],
        text: '도와주겠다고 말했을 뿐인데, 현겸의 안도한 표정 때문에 학범은 괜히 더 다정해지고 싶어졌다.'
      }
    ]
  },
  {
    id: 'hallway-lights',
    type: 'dialogue',
    name: '학범',
    role: '학생회',
    place: '현관',
    text: '복도 불 꺼진다. 갈 거면 지금 가자. 아니면… 조금만 더 같이 있어도 되고.',
    effect: { target: 'hyeongyeom', type: 'ellipsis' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', action: 'move', pos: 4, motion: 'straight' },
      { type: 'E', target: 'hyeongyeom', effect: 'ellipsis' }
    ]
  },
  {
    id: 'choice-walk-home',
    type: 'choice',
    choices: [
      '조금만 천천히 걷자고 한다.',
      '편의점에서 따뜻한 걸 사주겠다고 한다.'
    ],
    rewards: [
      { affection: { hyeongyeom: 2 }, flags: ['slow_walk'] },
      { affection: { hyeongyeom: 1 }, flags: ['warm_cocoa'] }
    ],
    next: ['walk-slow', 'walk-store']
  },
  {
    id: 'walk-slow',
    type: 'dialogue',
    name: '현겸',
    role: '동급생',
    text: '좋아. 오늘은 나도 급하게 가고 싶지 않았어.',
    effect: { target: 'hyeongyeom', type: 'heart' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', action: 'move', pos: 3, motion: 'straight' },
      { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod' }
    ],
    nextId: 'under-umbrella'
  },
  {
    id: 'walk-store',
    type: 'dialogue',
    name: '현겸',
    role: '동급생',
    text: '그럼 코코아. 학범이가 사주는 거면, 조금 더 달아도 괜찮을 것 같아.',
    effect: { target: 'hyeongyeom', type: 'chatter' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', action: 'move', pos: 3, motion: 'straight' },
      { type: 'E', target: 'hyeongyeom', effect: 'chatter', motion: 'bounce' }
    ],
    nextId: 'under-umbrella'
  },
  {
    id: 'under-umbrella',
    type: 'dialogue',
    mood: 'rain',
    name: '학범',
    role: '독백',
    place: '교문 앞',
    text: '작은 우산 아래에서 어깨가 스쳤다. 학범은 아무 말 없이 우산을 현겸 쪽으로 더 기울였다.',
    variants: [
      {
        flags: ['shared_umbrella'],
        text: '먼저 같이 쓰자고 말한 건 학범이었다. 그래서 작은 우산 아래 어깨가 스칠 때마다, 그 선택이 유난히 크게 느껴졌다.'
      }
    ],
    directives: [
      { type: 'E', flash: true, color: '#FFFFFF', opacity: 0.36, transition: 'flash', se: 'rain-step' }
    ]
  },
  {
    id: 'rain-crosswalk',
    type: 'dialogue',
    name: '현겸',
    role: '동급생',
    place: '횡단보도',
    text: '학범아, 신호 바뀌어도 조금만 천천히 가자. 이상하게 오늘은 집에 빨리 도착하기 싫어.',
    effect: { target: 'hyeongyeom', type: 'ellipsis' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'ellipsis', motion: 'nod' }
    ]
  },
  {
    id: 'rain-memory',
    type: 'dialogue',
    name: '학범',
    role: '독백',
    text: '그 말에 학범은 낮에 현겸이 학생회실 문 앞에서 몇 번이나 말을 고르던 모습을 떠올렸다. 부탁은 우산 하나였지만, 사실은 다른 대답을 기다린 것 같았다.',
    variants: [
      {
        flags: ['slow_walk'],
        text: '천천히 걷자고 한 뒤부터 현겸의 걸음도 학범의 속도에 맞춰졌다. 부탁은 우산 하나였지만, 사실은 함께 늦어지는 시간을 기다린 것 같았다.'
      },
      {
        flags: ['warm_cocoa'],
        text: '편의점 봉투에서 아직 따뜻한 코코아 냄새가 났다. 부탁은 우산 하나였지만, 현겸은 학범이 건넨 온기까지 오래 쥐고 있었다.'
      }
    ]
  },
  {
    id: 'choice-honesty',
    type: 'choice',
    choices: [
      '솔직하게 내일도 만나고 싶다고 말한다.',
      '장난처럼 넘기며 손을 내민다.'
    ],
    rewards: [
      { affection: { hyeongyeom: 2 }, flags: ['honest_tomorrow'] },
      { affection: { hyeongyeom: 1 }, flags: ['playful_hand'] }
    ],
    next: ['promise-honest', 'promise-joke']
  },
  {
    id: 'promise-honest',
    type: 'dialogue',
    name: '학범',
    role: '학생회',
    text: '내일도 만나고 싶어. 비가 와서가 아니라, 네가 기다릴지도 모른다고 생각하니까.',
    effect: { target: 'hyeongyeom', type: 'heart' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'zoom', se: 'promise' }
    ],
    nextId: 'promise'
  },
  {
    id: 'promise-joke',
    type: 'dialogue',
    name: '학범',
    role: '학생회',
    text: '그럼 학생회장 권한으로 내일도 동행 허가. 대신 지각하면 나한테 먼저 연락해.',
    effect: { target: 'hyeongyeom', type: 'chatter' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'chatter', motion: 'bounce' }
    ],
    nextId: 'promise'
  },
  {
    id: 'promise',
    type: 'dialogue',
    mood: 'confession',
    name: '현겸',
    role: '동급생',
    text: '내일도 비 오면, 오늘처럼 같이 가자. 비가 안 와도… 네가 괜찮다면.',
    effect: { target: 'hyeongyeom', type: 'blush' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'smile' },
      { type: 'E', target: 'hyeongyeom', effect: 'blush', motion: 'zoom', se: 'promise' }
    ]
  },
  {
    id: 'phone-vibration',
    type: 'banner',
    chapter: 'day-1',
    text: '현겸에게서 온 메시지: “오늘, 같이 걸어서 좋았어.”',
    summary: '짧은 메시지 하나가 학범의 답장을 몇 번이나 고치게 만든다.',
    directives: [
      { type: 'SE', cue: 'message' }
    ]
  },
  {
    id: 'phone-evening-message',
    type: 'phone',
    kind: 'phone',
    chapter: 'day-1',
    name: '현겸',
    role: '메시지',
    text: '집 도착했어. 우산은 내일 돌려줄게. 아니, 돌려주러 갈 핑계가 생겼다고 해야 하나.',
    replies: [
      '나도 내일 네가 오는 핑계를 기다릴게.',
      '그럼 우산 보관료는 네 웃음으로 받을게.'
    ],
    rewards: [
      { affection: { hyeongyeom: 1 }, flags: ['message_waiting'] },
      { affection: { hyeongyeom: 1 }, flags: ['message_tease'] }
    ],
    next: ['reply-warm', 'reply-playful'],
    directives: [
      { type: 'SE', cue: 'message' }
    ]
  },
  {
    id: 'choice-reply-tone',
    type: 'choice',
    previewOnly: true,
    choices: [
      '오늘 고마웠다고 바로 답장한다.',
      '조금 뜸을 들였다가 장난스럽게 답한다.'
    ],
    rewards: [
      { affection: { hyeongyeom: 1 }, flags: ['warm_reply'] },
      { affection: { hyeongyeom: 1 }, flags: ['playful_reply'] }
    ],
    next: ['reply-warm', 'reply-playful']
  },
  {
    id: 'reply-warm',
    type: 'dialogue',
    name: '학범',
    role: '메시지',
    text: '나도 좋았어. 내일은 비가 안 와도 같이 걷자.',
    variants: [
      {
        flags: ['honest_tomorrow'],
        text: '나도 좋았어. 아까 말한 거, 장난 아니야. 내일은 비가 안 와도 같이 걷자.'
      }
    ],
    nextId: 'day2-morning'
  },
  {
    id: 'reply-playful',
    type: 'dialogue',
    name: '학범',
    role: '메시지',
    text: '학생회장 승인: 내일도 동행 가능. 단, 현겸이 먼저 웃어야 함.',
    variants: [
      {
        flags: ['playful_hand'],
        text: '학생회장 승인: 내일도 동행 가능. 단, 오늘처럼 손 내밀면 이번엔 네가 먼저 잡아야 함.'
      }
    ],
    effect: { target: 'hyeongyeom', type: 'chatter' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'chatter', motion: 'bounce' }
    ],
    nextId: 'day2-morning'
  },
  {
    id: 'day2-morning',
    type: 'banner',
    chapter: 'day-2',
    text: '다음 날 아침, 비는 그쳤지만 학범은 현겸이 기다릴 복도를 먼저 떠올렸다.',
    summary: '둘째 날, 어제의 선택들이 복도와 메시지 사이에서 조금씩 다른 온도로 돌아온다.',
    directives: [
      { type: 'BCG', src: '/assets/ui/image0_13_6.jpg', transition: 'fade-in' }
    ],
    nextId: 'day2-morning-message'
  },
  {
    id: 'day2-morning-message',
    type: 'phone',
    chapter: 'day-2',
    kind: 'phone',
    name: '현겸',
    role: '메시지',
    text: '어제 우산 고마웠어. 오늘 점심시간에 잠깐 볼 수 있어?',
    replies: [
      '갈게. 기다려.',
      '학생회장 일정 확인 후 승인.'
    ],
    rewards: [
      { affection: { hyeongyeom: 2 }, flags: ['day2_direct_reply', 'warm_reply'] },
      { affection: { hyeongyeom: 1 }, flags: ['day2_playful_reply'] }
    ],
    next: ['day2-rooftop-direct', 'day2-rooftop-playful'],
    directives: [
      { type: 'SE', cue: 'message' }
    ]
  },
  {
    id: 'day2-rooftop-direct',
    type: 'dialogue',
    chapter: 'day-2',
    name: '학범',
    role: '점심시간',
    place: '옥상 앞 계단',
    text: '답장을 보내자마자 학범은 점심시간이 유난히 멀게 느껴졌다. 기다리겠다는 말이 이렇게 긴 약속이 될 줄은 몰랐다.',
    nextId: 'day2-hallway'
  },
  {
    id: 'day2-rooftop-playful',
    type: 'dialogue',
    chapter: 'day-2',
    name: '학범',
    role: '점심시간',
    place: '옥상 앞 계단',
    text: '장난스럽게 답했지만, 학범은 휴대폰을 내려놓지 못했다. 현겸이 웃으면서 올 장면을 벌써 상상하고 있었다.',
    nextId: 'day2-hallway'
  },
  {
    id: 'day2-hallway',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-2',
    name: '현겸',
    role: '동급생',
    place: '아침 복도',
    text: '학범아. 우산 돌려주려고 일찍 왔는데, 네가 먼저 와 있을 줄은 몰랐어.',
    variants: [
      {
        flags: ['message_waiting'],
        text: '학범아. 어제 네 답장 때문에 일찍 왔어. 기다린다고 했으니까, 진짜 기다려주는지 보고 싶었거든.'
      },
      {
        flags: ['message_tease'],
        text: '학범아. 우산 보관료가 내 웃음이라며? 그럼 아침부터 정산하러 온 거야.'
      }
    ],
    effect: { target: 'hyeongyeom', type: 'blush' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'smile' },
      { type: 'E', target: 'hyeongyeom', effect: 'blush', motion: 'nod' }
    ]
  },
  {
    id: 'day2-lunch-note',
    type: 'dialogue',
    chapter: 'day-2',
    name: '학범',
    role: '독백',
    place: '점심시간',
    text: '현겸은 우산을 돌려준 뒤에도 학범의 책상 근처를 맴돌았다. 어제보다 말수는 적었지만, 시선은 더 오래 머물렀다.',
    variants: [
      {
        flags: ['warm_reply'],
        text: '현겸은 우산을 돌려준 뒤에도 학범의 책상 근처를 맴돌았다. 따뜻했던 답장 때문인지, 시선이 마주칠 때마다 먼저 웃어주었다.'
      },
      {
        flags: ['playful_reply'],
        text: '현겸은 우산을 돌려준 뒤에도 학범의 책상 근처를 맴돌았다. 어제의 장난을 기억하는 듯, 눈이 마주칠 때마다 웃음을 참았다.'
      }
    ]
  },
  {
    id: 'day2-after-school',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-2',
    name: '현겸',
    role: '동급생',
    place: '방과 후 복도',
    text: '오늘은 비 안 오네. 그래도 같이 걸어도 돼? 어제 약속, 비 때문만은 아니었잖아.',
    variants: [
      {
        flags: ['day2_direct_reply'],
        text: '오늘은 비 안 오네. 그래도 같이 걸어도 돼? 아침에 기다린다고 해준 거, 하루 종일 생각났어.'
      },
      {
        flags: ['day2_playful_reply'],
        text: '오늘은 비 안 오네. 그래도 같이 걸어도 돼? 학생회장 승인, 아직 유효한 거지?'
      }
    ],
    nextId: 'choice-promise'
  },
  {
    id: 'choice-promise',
    type: 'choice',
    choices: [
      '손을 잡는다.'
    ],
    rewards: [
      { affection: { hyeongyeom: 2 }, flags: ['promise_hand'] }
    ],
    next: ['ending-promise']
  },
  {
    id: 'ending-promise',
    skipTarget: true,
    type: 'dialogue',
    mood: 'confession',
    name: '학범',
    role: '학생회',
    place: '빗속의 교문',
    endingGate: true,
    endingNext: {
      good: 'ending-good',
      normal: 'ending-normal',
      quiet: 'ending-quiet'
    },
    text: '그럼 약속이다. 내일은 내가 먼저 기다릴게.',
    effect: { target: 'hyeongyeom', type: 'heart' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod' }
    ]
  },
  {
    id: 'ending-good',
    terminal: true,
    type: 'dialogue',
    name: '현겸',
    role: '굿 엔딩',
    place: '같은 우산의 약속',
    text: '내일은 내가 먼저 기다릴게. 그러니까 학범이도, 오늘처럼 나를 못 본 척하지 말고 바로 와.',
    effect: { target: 'hyeongyeom', type: 'heart' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'zoom', se: 'promise' },
      { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' }
    ]
  },
  {
    id: 'ending-normal',
    terminal: true,
    type: 'dialogue',
    name: '학범',
    role: '노멀 엔딩',
    place: '내일도 복도에서',
    text: '현겸은 대답 대신 손을 흔들었다. 학범은 그 손짓이 내일도 같은 복도에서 이어질 약속이라는 걸 알았다.',
    effect: { target: 'hyeongyeom', type: 'blush' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'blush', motion: 'nod' },
      { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' }
    ]
  },
  {
    id: 'ending-quiet',
    terminal: true,
    type: 'dialogue',
    name: '학범',
    role: '조용한 엔딩',
    place: '비가 그친 뒤',
    text: '비는 그쳤고, 말하지 못한 문장만 우산 끝에 맺혔다. 그래도 학범은 내일 현겸을 보면 먼저 인사하겠다고 마음먹었다.',
    effect: { target: 'hyeongyeom', type: 'ellipsis' },
    directives: [
      { type: 'E', target: 'hyeongyeom', effect: 'ellipsis', motion: 'nod' },
      { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' }
    ]
  }
];
