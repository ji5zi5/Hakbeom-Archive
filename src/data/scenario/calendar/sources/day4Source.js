export const day4Scenes = [
  {
    id: 'season1-bridge-after-promise',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-3',
    name: '학범',
    role: '독백',
    place: '비가 그친 교문',
    text: '현겸의 손을 놓기 전에 학생회 문화제 준비 채팅방이 울렸다. 상원이 보낸 사진 속 학생회 기록실 책상 위에는 아직 제목만 적힌 남색 기록집, `학범 아카이브`가 놓여 있었다.',
    directives: [
      { type: 'BCG', src: '/assets/bg/school-courtyard-blue-hour.png', transition: 'fade-in' },
      { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'surprised' },
      { type: 'SE', cue: 'message' }
    ],
    nextId: 'choice-season1-continue'
  },
  {
    id: 'choice-season1-continue',
    type: 'choice',
    choices: [
      '문화제 기록집을 계속 준비한다.',
      '오늘의 약속도 기록집에 남기고 계속한다.'
    ],
    rewards: [
      { flags: ['archive_room_opened'], unlockedGallery: ['cg-archive-room'], unlockedRecollections: ['rec-day4'] },
      { flags: ['archive_room_opened', 'promise_kept_into_season'], unlockedGallery: ['cg-archive-room'], unlockedRecollections: ['rec-day4'] }
    ],
    next: ['day4-chapter-card', 'day4-chapter-card']
  },
  {
    id: 'day4-chapter-card',
    type: 'banner',
    kind: 'chapter',
    chapter: 'day-4',
    sectionTitle: 'Day 4: 방과 후 동아리 순회',
    mood: 'warm',
    text: 'Day 4 · 방과 후 동아리 순회',
    nextId: 'day4-archive-room-open',
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' }
    ]
  },
  {
    id: 'day4-archive-room-open',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '학범',
    role: '학생회 기록 담당',
    place: '학생회 기록실',
    text: '방과 후, 학범은 빈 기록집 첫 장에 문화제 부서 목록을 적었다. 방송실, 체육관, 음악실, 도서관, 매점, 옥상. 장소 이름을 쓰는 것만으로도 누군가를 만나러 가는 일처럼 느껴졌다.',
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
      { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' }
    ]
  },
  {
    id: 'day4-ukhyun-library-visit',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '욱현',
    role: '도서관 전시 담당',
    place: '도서관 창가',
    text: '욱현은 전시용 책갈피 묶음을 학범 앞에 내려놓았다. “도서관 사진도 필요하지. 네가 오면 조용해질 줄 알았는데, 이상하게 페이지 넘기는 소리가 더 잘 들려.”',
    effect: { target: 'ukhyun', type: 'ellipsis' },
    directives: [
      { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' },
      { type: 'SCG', id: 'ukhyun', name: '욱현', action: 'enter', pos: 3, expression: 'quiet', transition: 'fade-in' },
      { type: 'E', target: 'ukhyun', effect: 'ellipsis', motion: 'nod' }
    ]
  },

  {
    id: 'day4-sangwon-records',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '상원',
    role: '학생회 기록 담당',
    place: '학생회 기록실',
    text: '학범, 기록 양식은 이렇게 가자. 상원은 부서명 옆에 담당자 이름을 반듯하게 적었다. “네가 누구를 오래 바라봤는지는 칸 밖에 남겨둘게. 그건 공식 기록이 아니니까.”',
    effect: { target: 'sangwon', type: 'question' },
    directives: [
      { type: 'SCG', id: 'sangwon', name: '상원', action: 'enter', pos: 3, expression: 'serious', transition: 'enter-left' },
      { type: 'E', target: 'sangwon', effect: 'question', motion: 'nod' }
    ]
  },
  {
    id: 'day4-archive-weight',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '학범',
    role: '학생회 기록 담당',
    text: '상원이 넘기는 페이지마다 학범의 손이 멈췄다. 학범은 펜을 내려놓고 말했다. “부담스럽긴 한데, 네가 아무렇게나 넘기지 않는 건 알아.” 상원의 시선이 그제야 조금 풀렸다.'
  },
  {
    id: 'day4-sanguk-corridor',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '상욱',
    role: '운동부',
    place: '체육관 복도',
    text: '상욱은 체육관 행사 포스터를 들고 달려오다 학범 앞 세 걸음에서 멈췄다. “사진 찍으러 온 거면 같이 뛰어도 돼. 아니, 네 속도에 맞춰 뛸게.”',
    effect: { target: 'sanguk', type: 'chatter' },
    directives: [
      { type: 'BCG', src: '/assets/bg/gym-corridor-evening.png', transition: 'fade-in' },
      { type: 'SCG', id: 'sangwon', action: 'move', pos: 2, motion: 'straight' },
      { type: 'SCG', id: 'sanguk', name: '상욱', action: 'enter', pos: 4, expression: 'energetic', transition: 'enter-right' },
      { type: 'E', target: 'sanguk', effect: 'chatter', motion: 'bounce' }
    ]
  },
  {
    id: 'day4-junhyeok-clue',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '준혁',
    role: '문화제 동선 담당',
    place: '학생회 기록실',
    text: '준혁은 지도 위에 사진 촬영 동선을 그렸다. “효율만 따지면 네가 전부 혼자 돌면 돼. 그런데 그러면 기록집에 네가 없어. 그건 설계 실패야.”',
    effect: { target: 'junhyeok', type: 'ellipsis' },
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
      { type: 'SCG', id: 'sanguk', action: 'move', pos: 5, motion: 'straight' },
      { type: 'SCG', id: 'junhyeok', name: '준혁', action: 'enter', pos: 3, expression: 'thinking', transition: 'fade-in' },
      { type: 'E', target: 'junhyeok', effect: 'ellipsis', motion: 'nod' }
    ]
  },
  {
    id: 'day4-dohun-message',
    type: 'phone',
    kind: 'phone',
    chapter: 'day-4',
    name: '도훈',
    role: '메시지',
    text: '학생회장님, 매점 협찬표 확보. 복숭아 음료 쿠폰도 하나 빼놨다. 걱정돼서 그런 건 아니고, 네가 쓰러지면 기록 담당이 비니까.',
    messages: [
      { from: 'dohun', text: '매점 협찬표 확보.' },
      { from: 'dohun', text: '복숭아 음료 쿠폰도 하나 빼놨다. 네 취향인 건 우연.' },
      { from: 'hakbeom', text: '우연치고 너무 정확한데.' },
      { from: 'dohun', text: '', pending: true }
    ],
    nextId: 'day4-haeum-sound'
  },
  {
    id: 'day4-haeum-sound',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '하음',
    role: '음악실 담당',
    place: '음악실 앞',
    text: '하음은 음악실 문을 반쯤 열고 손가락으로 책상 모서리를 세 번 두드렸다. “공연 일정은 여기 있어. 그리고 네 발걸음, 오늘은 조금 빨라. 급하면 한 박자 쉬어도 돼.”',
    effect: { target: 'haeum', type: 'question' },
    directives: [
      { type: 'BCG', src: '/assets/bg/music-room-late-afternoon.png', transition: 'fade-in' },
      { type: 'SCG', id: 'junhyeok', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'haeum', name: '하음', action: 'enter', pos: 2, expression: 'gentle', transition: 'enter-left' },
      { type: 'E', target: 'haeum', effect: 'question', motion: 'nod' }
    ]
  },
  {
    id: 'day4-yunho-courtyard',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '윤호',
    role: '후배 / 옥상 담당',
    place: '중정 벤치',
    text: '윤호는 옥상 휴게 공간 배치도를 양손으로 들고 기다리고 있었다. “선배가 올 줄 알았어요. 아니, 오셨으면 좋겠다고 생각해서 먼저 와 있었어요.”',
    effect: { target: 'yunho', type: 'ellipsis' },
    directives: [
      { type: 'SCG', id: 'haeum', action: 'move', pos: 4, motion: 'straight' },
      { type: 'SCG', id: 'yunho', name: '윤호', action: 'enter', pos: 3, expression: 'serious', transition: 'fade-in' },
      { type: 'E', target: 'yunho', effect: 'ellipsis', motion: 'nod' }
    ]
  },
  {
    id: 'day4-hyeongyeom-arrival',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-4',
    name: '현겸',
    role: '동급생',
    place: '중정 입구',
    text: '현겸은 기록집보다 학범의 얼굴부터 보았다. “혼자 다 돌려고 했지. 네가 괜찮다고 말할 때 표정은 별로 괜찮지 않아서, 나도 따라가도 돼?”',
    effect: { target: 'hyeongyeom', type: 'heart' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', name: '현겸', action: 'enter', pos: 5, src: '/assets/character/hyungyeom.png', expression: 'quiet', transition: 'enter-right' },
      { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod' }
    ]
  },
  {
    id: 'day4-paper-fragment',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '학범',
    role: '학생회 기록 담당',
    text: '학범은 빈칸 옆에 장소 이름을 적다가 펜을 멈췄다. “말투까지 남기고 싶어. 누가 어떤 얼굴로 나를 기다렸는지, 그건 내가 직접 봤으니까.”',
    nextId: 'choice-day4-core-focus'
  },
  {
    id: 'choice-day4-core-focus',
    type: 'choice',
    choices: [
      '현겸의 우산 손잡이를 다시 잡는다.',
      '욱현의 책갈피 여백에 답을 남긴다.',
      '재성의 꺼 둔 마이크 앞에 선다.'
    ],
    rewards: [
      { affection: { hyeongyeom: 20 }, flags: ['hyeongyeom_route_seed', 'hyeongyeom_date_day4_umbrella_handle'] },
      { affection: { ukhyun: 20 }, flags: ['ukhyun_route_seed', 'ukhyun_date_day4_library_margin'] },
      { affection: { jaeseong: 20 }, flags: ['jaeseong_route_seed', 'jaeseong_date_day4_muted_mic'] }
    ],
    next: ['day4-hyeongyeom-focus', 'day4-ukhyun-focus', 'day4-jaeseong-focus']
  },
  {
    id: 'day4-hyeongyeom-focus',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-4',
    name: '현겸',
    role: '동급생',
    place: '중정 입구',
    text: '“네가 먼저 잡으면, 나도 더는 우연이라고 안 할게. 손 놓고 싶으면 지금 말해. 아니면 나, 오늘 네 쪽으로 더 기울 거야.”',
    nextId: 'day4-moe-jaeseong-mic-check'
  },
  {
    id: 'day4-ukhyun-focus',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '욱현',
    role: '도서관 전시 담당',
    place: '도서관 창가',
    text: '욱현은 책갈피 여백을 학범 쪽으로 밀었다. “답을 크게 쓰지 않아도 돼. 네 글씨라는 걸 알아볼 만큼만 남겨.” 학범이 한 줄을 적자, 그는 페이지를 접지 않고 오래 바라봤다.',
    nextId: 'day4-moe-jaeseong-mic-check'
  },
  {
    id: 'day4-jaeseong-focus',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '재성',
    role: '방송부',
    place: '방송실',
    text: '재성은 마이크 전원을 끄고서야 웃었다. “켜져 있으면 네 목소리를 다 같이 듣잖아. 오늘 건 나만 들을래.” 작게 낮춘 목소리가 학범의 이름을 한 번 더 불렀다.',
    nextId: 'day4-moe-jaeseong-mic-check'
  },
  {
    id: 'day4-moe-jaeseong-mic-check',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '재성',
    role: '방송부',
    place: '방송실',
    text: '재성은 마이크 볼륨을 낮추고 학범 쪽으로 몸을 기울였다. “지금부터는 테스트 방송 아냐. 그러니까 네가 작게 웃는 소리, 나만 들을게.”',
    effect: { target: 'jaeseong', type: 'heart' },
    directives: [
      { type: 'BCG', src: '/assets/bg/broadcast-room.png', transition: 'fade-in' },
      { type: 'E', target: 'jaeseong', effect: 'heart', motion: 'bounce' }
    ]
  },
  {
    id: 'day4-moe-sanguk-tape',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '상욱',
    role: '운동부',
    place: '체육관 복도',
    text: '상욱은 포스터 테이프를 뜯다 학범 손끝이 닿자 바로 멈췄다. “아, 미안! 급하게 하면 또 앞서가니까. 이번엔 네가 붙이라는 곳에 내가 뛸게.”',
    effect: { target: 'sanguk', type: 'blush' },
    directives: [
      { type: 'BCG', src: '/assets/bg/gym-corridor-evening.png', transition: 'fade-in' },
      { type: 'E', target: 'sanguk', effect: 'blush', motion: 'shake' }
    ]
  },
  {
    id: 'day4-moe-haeum-footstep',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '하음',
    role: '음악실 담당',
    place: '음악실',
    text: '하음은 건반 위에 손을 올렸다가 학범의 발걸음에 맞춰 첫 음을 눌렀다. “지금 박자 좋아. 서두르지 않는 소리라서, 같이 있으면 숨이 편해져.”',
    effect: { target: 'haeum', type: 'heart' },
    directives: [
      { type: 'BCG', src: '/assets/bg/music-room-late-afternoon.png', transition: 'fade-in' },
      { type: 'E', target: 'haeum', effect: 'heart', motion: 'nod' }
    ]
  },

  {
    id: 'choice-day4-focus-a',
    type: 'choice',
    choices: [
      '상원과 학생회 기록 양식을 고친다.',
      '상욱과 체육관 이벤트 사진을 찍는다.',
      '준혁과 문화제 동선을 다시 그린다.'
    ],
    rewards: [
      { affection: { sangwon: 20 }, flags: ['sangwon_route_seed', 'archive_record_checked', 'sangwon_date_day4_record_margin'] },
      { affection: { sanguk: 20 }, flags: ['sanguk_route_seed', 'gym_corridor_checked', 'sanguk_date_day4_finish_line'] },
      { affection: { junhyeok: 20 }, flags: ['junhyeok_route_seed', 'route_map_drawn', 'junhyeok_date_day4_route_map'] }
    ],
    next: ['day4-sangwon-focus', 'day4-sanguk-focus', 'day4-junhyeok-focus']
  },
  {
    id: 'day4-sangwon-focus',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '상원',
    role: '학생회 기록 담당',
    text: '상원은 학범의 글씨가 삐뚤어진 칸을 고치지 않았다. “네가 피곤한 날이라는 것도 기록의 일부야. 다만 누구를 보고 나서 손이 멈췄는지는, 네가 허락할 때만 적을게.”',
    effect: { target: 'sangwon', type: 'question' },
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
      { type: 'SCG', id: 'sangwon', action: 'move', pos: 3, motion: 'straight' },
      { type: 'E', target: 'sangwon', effect: 'question', motion: 'nod' }
    ],
    nextId: 'day4-focus-a-merge'
  },
  {
    id: 'day4-sanguk-focus',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '상욱',
    role: '운동부',
    place: '체육관 복도',
    text: '상욱은 카메라 앞에서 먼저 뛰어가다 말고 돌아왔다. “이번엔 내가 먼저 안 갈게. 네가 셔터 누를 때까지 여기서 멈춰 있을게.”',
    effect: { target: 'sanguk', type: 'chatter' },
    directives: [
      { type: 'BCG', src: '/assets/bg/gym-corridor-evening.png', transition: 'fade-in' },
      { type: 'SCG', id: 'sanguk', action: 'move', pos: 3, motion: 'straight' },
      { type: 'E', target: 'sanguk', effect: 'chatter', motion: 'bounce' }
    ],
    nextId: 'day4-focus-a-merge'
  },
  {
    id: 'day4-junhyeok-focus',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '준혁',
    role: '문화제 동선 담당',
    text: '준혁은 최단 경로 옆에 일부러 돌아가는 선을 하나 더 그렸다. “여기는 효율이 없어. 그런데 네가 숨 돌릴 수 있다면 삭제할 이유도 없어.”',
    effect: { target: 'junhyeok', type: 'ellipsis' },
    directives: [
      { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' },
      { type: 'SCG', id: 'junhyeok', action: 'move', pos: 3, motion: 'straight' },
      { type: 'E', target: 'junhyeok', effect: 'ellipsis', motion: 'nod' }
    ],
    nextId: 'day4-focus-a-merge'
  },
  {
    id: 'day4-focus-a-merge',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '학범',
    role: '학생회 기록 담당',
    text: '학범은 양식, 사진, 동선표를 한 장 위에 모았다. “오늘은 도움받은 쪽도 내 이름으로 남길게.” 상원과 상욱과 준혁의 시선이 동시에 올라오자, 학범은 도망가지 않고 웃었다.'
  },
  {
    id: 'choice-day4-focus-b',
    type: 'choice',
    choices: [
      '도훈에게 매점 협찬 쿠폰을 받는다.',
      '하음과 음악실 공연 일정을 맞춘다.',
      '윤호와 옥상 휴게 공간을 확인한다.'
    ],
    rewards: [
      { affection: { dohun: 20 }, flags: ['dohun_route_seed', 'cctv_favor', 'dohun_date_day4_counter_joke'] },
      { affection: { haeum: 20 }, flags: ['haeum_route_seed', 'door_sound_memory', 'haeum_date_day4_slow_tempo'] },
      { affection: { yunho: 20 }, flags: ['yunho_route_seed', 'wet_paper_kept', 'yunho_date_day4_rooftop_wind'] }
    ],
    next: ['day4-dohun-focus', 'day4-haeum-focus', 'day4-yunho-focus']
  },
  {
    id: 'day4-dohun-focus',
    type: 'phone',
    kind: 'phone',
    mood: 'warm',
    chapter: 'day-4',
    name: '도훈',
    role: '메시지',
    text: '복숭아 음료 쿠폰 하나 남겨뒀다. 네가 좋아하는 거라서가 아니라, 내가 먼저 집었을 뿐이야. 착각은 하지 말고 받아.',
    messages: [
      { from: 'dohun', text: '복숭아 음료 쿠폰 하나 남겨뒀다.' },
      { from: 'hakbeom', text: '내가 좋아하는 거 기억했어?' },
      { from: 'dohun', text: '기억력 좋으면 죄냐. 빨리 와, 녹는다.' }
    ],
    replies: [
      '그럼 네가 직접 건네줘.',
      '기억해 준 건 고맙다고 할게.',
      '착각 안 할 테니까 먼저 기다려.'
    ],
    rewards: [
      { affection: { dohun: 6 }, flags: ['dohun_phone_day4_direct_reply'] },
      { affection: { dohun: 6 }, flags: ['dohun_phone_day4_gentle_reply'] },
      { affection: { dohun: 6 }, flags: ['dohun_phone_day4_tease_reply'] }
    ],
    next: ['day4-focus-b-merge', 'day4-focus-b-merge', 'day4-focus-b-merge']
  },
  {
    id: 'day4-haeum-focus',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '하음',
    role: '음악실 담당',
    text: '하음은 공연 시간표 마지막 줄을 비워 두었다. “여긴 네가 정해. 이번 문화제 기록집에는 네 박자도 들어가야 하니까.”',
    effect: { target: 'haeum', type: 'heart' },
    directives: [
      { type: 'BCG', src: '/assets/bg/music-room-late-afternoon.png', transition: 'fade-in' },
      { type: 'SCG', id: 'haeum', action: 'move', pos: 3, motion: 'straight' },
      { type: 'E', target: 'haeum', effect: 'heart', motion: 'nod' }
    ],
    nextId: 'day4-focus-b-merge'
  },
  {
    id: 'day4-yunho-focus',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-4',
    name: '윤호',
    role: '후배 / 옥상 담당',
    text: '윤호는 옥상 난간에 기대지 않고 문 앞에서 기다렸다. “선배가 들어오기 전까지는 정리 끝냈다고 말 안 하려고 했어요. 같이 본 풍경이어야 기록에 남길 수 있잖아요.”',
    effect: { target: 'yunho', type: 'heart' },
    directives: [
      { type: 'BCG', src: '/assets/bg/rooftop-after-rain.png', transition: 'fade-in' },
      { type: 'SCG', id: 'yunho', action: 'move', pos: 3, motion: 'straight' },
      { type: 'E', target: 'yunho', effect: 'heart', motion: 'nod' }
    ],
    nextId: 'day4-focus-b-merge'
  },
  {
    id: 'day4-focus-b-merge',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-4',
    name: '현겸',
    role: '동급생',
    text: '현겸은 학범이 받아 든 쿠폰과 시간표와 옥상 배치도를 차례로 보았다. “다들 네가 혼자 무리할까 봐 챙기는 거네. 나도 같은 이유로 여기 있어.”',
    effect: { target: 'hyeongyeom', type: 'question' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', action: 'move', pos: 4, motion: 'straight' },
      { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'surprised' },
      { type: 'E', target: 'hyeongyeom', effect: 'question', motion: 'nod' }
    ]
  },
  {
    id: 'day4-archive-close',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-4',
    name: '학범',
    role: '학생회 기록 담당',
    place: '학생회 기록실',
    text: '학범은 오늘 만난 장소를 적고 마지막 줄을 비워 두었다. “내일은 방송실까지 갈게. 오늘 못 들은 목소리도 내가 직접 들을 거야.” 방과 후는 아직 끝나지 않은 약속처럼 길었다.',
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
      { type: 'SCG', id: 'sangwon', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sanguk', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'junhyeok', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'haeum', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'yunho', action: 'delete', transition: 'fade-out' }
    ],
    nextId: 'day5-chapter-card'
  }
];
