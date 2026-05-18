export const day5Scenes = [
  {
    id: 'day5-chapter-card',
    type: 'banner',
    kind: 'chapter',
    chapter: 'day-5',
    sectionTitle: 'Day 5: 작은 소문',
    mood: 'warm',
    text: 'Day 5 · 작은 소문',
    nextId: 'day5-morning-archive',
    directives: [
      { type: 'BCG', src: '/assets/bg/school-morning-hallway.png', transition: 'fade-in' }
    ]
  },
  {
    id: 'day5-morning-archive',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '학범',
    role: '등교길',
    place: '교실 앞 복도',
    text: '아침 조회 전부터 교실 앞 복도는 이상하게 들떠 있었다. “학범이 문화제 때 누군가에게 고백한다던데?” 누가 시작했는지 모를 한마디가 종이꽃보다 빠르게 교실을 돌았다.',
    directives: [
      { type: 'BCG', src: '/assets/bg/school-morning-hallway.png', transition: 'fade-in' },
      { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sangwon', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sanguk', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'junhyeok', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'haeum', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'yunho', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'dohun', action: 'delete', transition: 'fade-out' }
    ]
  },
  {
    id: 'day5-record-board',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '상원',
    role: '학생회 기록 담당',
    place: '교실 앞 복도',
    text: '상원은 소문을 들은 순간 기록집 표지를 덮었다. “출처보다 중요한 건 네가 불편한지야. 원하면 내가 말 멈추게 할게. 다만 네 표정은 이미 바뀌었어.”',
    effect: { target: 'sangwon', type: 'question' },
    directives: [
      { type: 'SCG', id: 'sangwon', name: '상원', action: 'enter', pos: 3, expression: 'serious', transition: 'fade-in' },
      { type: 'E', target: 'sangwon', effect: 'question', motion: 'nod' }
    ]
  },
  {
    id: 'day5-moe-hyeongyeom-jealous',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-5',
    name: '현겸',
    role: '동급생',
    place: '교실 앞 복도',
    text: '현겸은 “누구랑 고백한다더라”는 말에 웃지 못했다. “네가 불편한 건 싫어. 그런데 상대가 누굴까 생각한 건… 나도 조금 치사하지?”',
    effect: { target: 'hyeongyeom', type: 'blush' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', name: '현겸', action: 'enter', pos: 4, src: '/assets/character/hyungyeom.png', expression: 'quiet', transition: 'enter-right' },
      { type: 'E', target: 'hyeongyeom', effect: 'blush', motion: 'nod' }
    ]
  },
  {
    id: 'day5-moe-ukhyun-shield',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '욱현',
    role: '도서위원',
    place: '도서관 앞 복도',
    text: '욱현은 소문을 묻는 학생들 사이에 조용히 서서 학범의 시선을 가려 주었다. “읽기 싫은 문장은 넘겨도 돼. 오늘은 내가 책갈피 해줄게.”',
    effect: { target: 'ukhyun', type: 'ellipsis' },
    directives: [
      { type: 'SCG', id: 'ukhyun', name: '욱현', action: 'enter', pos: 2, expression: 'quiet', transition: 'fade-in' },
      { type: 'E', target: 'ukhyun', effect: 'ellipsis', motion: 'nod' }
    ]
  },
  {
    id: 'day5-moe-jaeseong-private',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '재성',
    role: '방송부',
    place: '방송실 앞',
    text: '재성은 장난스럽게 손가락을 입술에 댔다. “이 소문, 방송 금지. 학범이가 고백할 목소리는 공개 채널 말고, 듣고 싶은 사람한테만 가야지.”',
    effect: { target: 'jaeseong', type: 'chatter' },
    directives: [
      { type: 'SCG', id: 'jaeseong', name: '재성', action: 'enter', pos: 5, expression: 'confident', transition: 'enter-right' },
      { type: 'E', target: 'jaeseong', effect: 'chatter', motion: 'bounce' }
    ]
  },

  {
    id: 'choice-day5-school-shift',
    type: 'choice',
    choices: [
      '상원과 학생회실에서 소문 대응 문구를 정한다.',
      '상욱과 체육관 포스터를 붙이러 간다.',
      '준혁과 도서관에서 문화제 동선을 확인한다.'
    ],
    rewards: [
      { affection: { sangwon: 20 }, flags: ['sangwon_route_seed', 'day5_records_copy'] },
      { affection: { sanguk: 20 }, flags: ['sanguk_route_seed', 'day5_gym_trace'] },
      { affection: { junhyeok: 20 }, flags: ['junhyeok_route_seed', 'day5_library_map'] }
    ],
    next: ['day5-sangwon-archive-desk', 'day5-sanguk-gym-start', 'day5-junhyeok-library-corner']
  },
  {
    id: 'day5-sangwon-archive-desk',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '상원',
    role: '학생회 기록 담당',
    place: '학생회실',
    text: '상원은 안내문 초안에 “확인되지 않은 말은 옮기지 않는다”라고 적었다가 학범 쪽을 보았다. “이 문장, 네 마음에도 적용돼. 아직 모르면 모른다고 적어. 대신 남이 대신 쓰게 두지는 마.”',
    effect: { target: 'sangwon', type: 'ellipsis' },
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
      { type: 'SCG', id: 'sangwon', action: 'move', pos: 3, motion: 'straight' },
      { type: 'E', target: 'sangwon', effect: 'ellipsis', motion: 'nod' }
    ]
  },
  {
    id: 'day5-sangwon-margin-note',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '학범',
    role: '독백',
    text: '상원의 글씨는 반듯했지만 마지막 칸만 비어 있었다. 학범은 그 빈칸이 압박이 아니라, 자기 말이 들어갈 자리를 남겨 둔 것임을 천천히 알아차렸다.'
  },
  {
    id: 'day5-sangwon-small-smile',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '상원',
    role: '학생회 기록 담당',
    text: '상원은 펜을 내려놓고 말했다. “오늘 네가 누구를 신경 썼는지 묻고 싶어. 하지만 대답은 기록으로 받지 않을게. 네 목소리로 들을 때까지 기다릴게.”',
    effect: { target: 'sangwon', type: 'heart' },
    directives: [
      { type: 'SCG', id: 'sangwon', action: 'update', expression: 'smile' },
      { type: 'E', target: 'sangwon', effect: 'heart', motion: 'nod' }
    ],
    nextId: 'day5-lunch-merge'
  },
  {
    id: 'day5-sanguk-gym-start',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '상욱',
    role: '운동부',
    place: '체육관 복도',
    text: '상욱은 포스터 더미를 한 팔에 끼고도 학범이 든 한 장을 뺏지 않았다. “내가 다 해주면 빠르긴 한데, 네가 어디 붙이고 싶은지 모르잖아. 같이 하자.”',
    effect: { target: 'sanguk', type: 'chatter' },
    directives: [
      { type: 'BCG', src: '/assets/bg/gym-corridor-evening.png', transition: 'fade-in' },
      { type: 'SCG', id: 'sangwon', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sanguk', name: '상욱', action: 'enter', pos: 3, expression: 'energetic', transition: 'enter-right' },
      { type: 'E', target: 'sanguk', effect: 'chatter', motion: 'bounce' }
    ]
  },
  {
    id: 'day5-sanguk-running-joke',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '상욱',
    role: '운동부',
    text: '멀리서 누군가 소문을 놀리자 상욱은 바로 돌아서려다 멈췄다. “물어보고 갈게. 네가 싫으면 내가 가고, 네가 괜찮으면 여기서 같이 붙이자.”'
  },
  {
    id: 'day5-sanguk-found-thread',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '학범',
    role: '독백',
    text: '상욱이 멈춰 선 결승선은 포스터 한 장 앞이었다. 먼저 뛰는 것보다 먼저 묻는 일이 더 어렵다는 걸, 학범은 그의 가쁜 숨에서 들었다.',
    nextId: 'day5-lunch-merge'
  },
  {
    id: 'day5-junhyeok-library-corner',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '준혁',
    role: '문화제 동선 담당',
    place: '도서관 구석자리',
    text: '준혁은 도서관 전시 동선표를 펼치고 소문이 도는 경로를 지우개로 밀어냈다. “확산 경로보다 네가 피곤해지는 지점이 더 중요해. 여기서 쉬어.”',
    effect: { target: 'junhyeok', type: 'ellipsis' },
    directives: [
      { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' },
      { type: 'SCG', id: 'sangwon', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'junhyeok', name: '준혁', action: 'enter', pos: 3, expression: 'thinking', transition: 'fade-in' },
      { type: 'E', target: 'junhyeok', effect: 'ellipsis', motion: 'nod' }
    ]
  },
  {
    id: 'day5-junhyeok-map-rule',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '준혁',
    role: '문화제 동선 담당',
    text: '준혁은 최단 경로 옆에 “학범 대피로”라고 작게 적었다. 학범이 웃자 그는 시선을 피했다. “비상 동선이야. 감정에도 비상 상황은 있으니까.”'
  },
  {
    id: 'day5-junhyeok-quiet-tease',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '준혁',
    role: '문화제 동선 담당',
    text: '“너랑 있으면 예상 시간이 계속 밀려.” 준혁은 지도를 접으며 덧붙였다. “이상하게 짜증은 안 나. 그러니까 계산 밖으로 분류해둘게.”',
    effect: { target: 'junhyeok', type: 'chatter' },
    directives: [
      { type: 'E', target: 'junhyeok', effect: 'chatter', motion: 'nod' }
    ],
    nextId: 'day5-lunch-merge'
  },
  {
    id: 'day5-lunch-merge',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '학범',
    role: '독백',
    place: '점심시간',
    text: '점심 종이 울릴 때도 소문은 완전히 가라앉지 않았다. 하지만 학범의 손에는 안내문 초안, 포스터 테이프, 접힌 동선표가 남았다. 각자 다른 방식으로 “괜찮아?”라고 묻는 대답이었다.',
    variants: [
      { requiredFlags: ['day5_records_copy'], text: '점심 종이 울릴 때, 상원의 빈칸은 소문보다 오래 남았다. 누가 대신 말하지 않도록 기다리는 칸이었다.' },
      { requiredFlags: ['day5_gym_trace'], text: '점심 종이 울릴 때, 상욱의 테이프 조각이 학범 손등에 붙어 있었다. 먼저 달리지 않고 멈춘 흔적이었다.' },
      { requiredFlags: ['day5_library_map'], text: '점심 종이 울릴 때, 준혁의 지도 위 비상 동선이 자꾸 눈에 들어왔다. 계산 밖의 배려는 생각보다 따뜻했다.' }
    ],
    directives: [
      { type: 'BCG', src: '/assets/bg/school-courtyard-blue-hour.png', transition: 'fade-in' },
      { type: 'SCG', id: 'sangwon', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sanguk', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'junhyeok', action: 'delete', transition: 'fade-out' }
    ]
  },
  {
    id: 'day5-after-school-phone',
    type: 'phone',
    kind: 'phone',
    chapter: 'day-5',
    name: '도훈',
    role: '메시지',
    text: '오후 선택지 도착. 매점 쿠폰, 음악실 공연표, 옥상 배치도. 어디부터 갈래?',
    messages: [
      { from: 'dohun', text: '매점 쿠폰 남겨놨음. 늦으면 내가 먹는다.' },
      { from: 'haeum', text: '음악실 공연표, 네 글씨 들어갈 칸 비워뒀어.' },
      { from: 'yunho', text: '옥상 배치도 확인 부탁드려요. 선배가 오면 보여드릴게요.' },
      { from: 'hakbeom', text: '이번엔 내가 가고 싶은 곳부터 갈게.' }
    ],
    nextId: 'choice-day5-after-school-shift',
    directives: [
      { type: 'SE', cue: 'message' }
    ]
  },
  {
    id: 'choice-day5-after-school-shift',
    type: 'choice',
    choices: [
      '도훈과 매점 쿠폰을 받으러 간다.',
      '하음과 음악실 공연표를 정리한다.',
      '윤호와 옥상 휴게 공간을 점검한다.'
    ],
    rewards: [
      { affection: { dohun: 20 }, flags: ['dohun_route_seed', 'day5_cctv_check'] },
      { affection: { haeum: 20 }, flags: ['haeum_route_seed', 'day5_music_room_echo'] },
      { affection: { yunho: 20 }, flags: ['yunho_route_seed', 'day5_rooftop_paper'] }
    ],
    next: ['day5-dohun-store-arrival', 'day5-haeum-music-room', 'day5-yunho-rooftop']
  },
  {
    id: 'day5-dohun-store-arrival',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '도훈',
    role: '정보통',
    place: '매점 앞',
    text: '도훈은 복숭아 음료를 이미 계산해두고도 영수증을 학범 앞에서 흔들었다. “정보값 선불. 네가 좋아하는 맛인 건 우연이라고 해둘게.”',
    effect: { target: 'dohun', type: 'chatter' },
    directives: [
      { type: 'BCG', src: '/assets/bg/convenience-store-night.png', transition: 'fade-in' },
      { type: 'SCG', id: 'dohun', name: '도훈', action: 'enter', pos: 3, expression: 'tease', transition: 'enter-right' },
      { type: 'E', target: 'dohun', effect: 'chatter', motion: 'bounce' }
    ]
  },
  {
    id: 'day5-dohun-receipt',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '도훈',
    role: '정보통',
    text: '소문 이야기가 나오자 도훈의 농담이 잠깐 끊겼다. “누가 놀리면 말해. 내가 웃겨서 묻는 게 아니라, 네가 억지로 웃는 꼴은 보기 싫어서.”'
  },
  {
    id: 'day5-dohun-trade-promise',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '도훈',
    role: '정보통',
    text: '도훈은 영수증 뒷면에 작은 글씨로 `장난 아님`이라고 적었다가 바로 접었다. 학범이 보았다는 걸 알면서도 그는 모르는 척 음료 캔을 밀어주었다.',
    effect: { target: 'dohun', type: 'heart' },
    directives: [
      { type: 'E', target: 'dohun', effect: 'heart', motion: 'nod' }
    ],
    nextId: 'day5-evening-merge'
  },
  {
    id: 'day5-haeum-music-room',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '하음',
    role: '음악실 담당',
    place: '해질녘 음악실',
    text: '해질녘 음악실에서 하음은 공연표 마지막 칸을 비워 두었다. “네가 정해. 늘 남의 박자에 맞춰주니까, 오늘은 네 박자도 악보에 넣자.”',
    effect: { target: 'haeum', type: 'ellipsis' },
    directives: [
      { type: 'BCG', src: '/assets/bg/music-room-late-afternoon.png', transition: 'fade-in' },
      { type: 'SCG', id: 'haeum', name: '하음', action: 'enter', pos: 3, expression: 'gentle', transition: 'fade-in' },
      { type: 'E', target: 'haeum', effect: 'ellipsis', motion: 'nod' }
    ]
  },
  {
    id: 'day5-haeum-door-rhythm',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '하음',
    role: '음악실 담당',
    text: '하음은 손가락으로 한 박자 쉬었다. “소문 때문에 빨라진 숨은 틀린 게 아니야. 그냥 오늘의 템포가 바뀐 거야.”'
  },
  {
    id: 'day5-haeum-soft-promise',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-5',
    name: '하음',
    role: '음악실 담당',
    text: '하음은 공연표를 학범 쪽으로 돌렸다. “다음 칸은 비워둘게. 네가 말하고 싶을 때, 내가 맞출게.”',
    effect: { target: 'haeum', type: 'heart' },
    directives: [
      { type: 'E', target: 'haeum', effect: 'heart', motion: 'nod' }
    ],
    nextId: 'day5-evening-merge'
  },
  {
    id: 'day5-yunho-rooftop',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-5',
    name: '윤호',
    role: '후배 / 옥상 담당',
    place: '비 갠 옥상',
    text: '윤호는 옥상 문 앞에서 배치도를 들고 기다리고 있었다. “선배가 올 줄 알았어요. 아니, 오셨으면 좋겠다고 생각해서 먼저 와 있었어요.”',
    effect: { target: 'yunho', type: 'ellipsis' },
    directives: [
      { type: 'BCG', src: '/assets/bg/rooftop-after-rain.png', transition: 'fade-in' },
      { type: 'SCG', id: 'yunho', name: '윤호', action: 'enter', pos: 3, expression: 'quiet', transition: 'fade-in' },
      { type: 'E', target: 'yunho', effect: 'ellipsis', motion: 'nod' }
    ]
  },
  {
    id: 'day5-yunho-wet-paper',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-5',
    name: '윤호',
    role: '후배 / 옥상 담당',
    text: '학범이 “기다렸어?”라고 묻자 윤호는 배치도 모서리를 접었다. “네. 기다리는 건 잘해요. 그런데 오늘은 선배가 부르면 바로 옆으로 가고 싶어요.”'
  },
  {
    id: 'day5-yunho-slow-burn',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-5',
    name: '윤호',
    role: '후배 / 옥상 담당',
    text: '윤호는 난간 쪽 자리에 학범 이름을 작게 써두었다가 손바닥으로 가렸다. “예약석 같은 건 아니에요. 그냥… 선배가 편했으면 해서요.”',
    effect: { target: 'yunho', type: 'heart' },
    directives: [
      { type: 'E', target: 'yunho', effect: 'heart', motion: 'nod' }
    ],
    nextId: 'day5-evening-merge'
  },
  {
    id: 'day5-evening-merge',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '학범',
    role: '독백',
    place: '학생회 기록실',
    text: '방과 후가 끝났을 때, 소문은 아직 복도에 남아 있었다. 하지만 학범의 기록집에는 복숭아 음료, 빈 공연표, 옥상 예약석 같은 작은 마음들이 먼저 적혔다.',
    variants: [
      { requiredFlags: ['day5_cctv_check'], text: '도훈이 접어 준 영수증에는 정보값보다 먼저 학범이 좋아하는 음료가 남았다. 농담 뒤의 진심은 생각보다 오래 손에 남았다.' },
      { requiredFlags: ['day5_music_room_echo'], text: '하음의 공연표 마지막 칸은 비어 있었다. 그 빈칸은 재촉이 아니라 학범의 박자를 기다리는 쉼표처럼 보였다.' },
      { requiredFlags: ['day5_rooftop_paper'], text: '윤호의 옥상 배치도에는 학범이 편히 앉을 자리가 남아 있었다. 기다림은 뒤처짐이 아니라 이름을 불러주길 바라는 방식이었다.' }
    ],
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' }
    ]
  },
  {
    id: 'day5-record-rewrite',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-5',
    name: '현겸',
    role: '동급생',
    text: '현겸은 소문 이야기를 듣고 잠깐 조용해졌다. “네가 불편하면 내가 먼저 아니라고 말할게. 그런데… 상대가 누군지 신경 쓰이는 건 맞아.”',
    effect: { target: 'hyeongyeom', type: 'heart' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', name: '현겸', action: 'enter', pos: 4, src: '/assets/character/hyungyeom.png', expression: 'quiet', transition: 'enter-right' },
      { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod' }
    ]
  },
  {
    id: 'day5-season-hook',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '학범',
    role: '학생회 기록 담당',
    place: '학생회 기록실',
    text: '학범은 기록집 첫 장 아래에 작은 글씨로 적었다. “소문은 남이 만든 문장이고, 고백은 내가 골라야 할 문장.” 문화제 준비가 갑자기 더 가까워졌다.',
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
      { type: 'SCG', id: 'dohun', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'haeum', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'yunho', action: 'delete', transition: 'fade-out' }
    ],
    nextId: 'day6-chapter-card'
  }
];
