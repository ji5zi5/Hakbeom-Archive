export const day5Scenes = [
  {
    id: 'day5-chapter-card',
    type: 'banner',
    kind: 'chapter',
    chapter: 'day-5',
    sectionTitle: 'Day 5: 여섯 갈래의 방과 후',
    mood: 'warm',
    text: 'Day 5 · 여섯 갈래의 방과 후',
    nextId: 'day5-morning-archive',
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' }
    ]
  },
  {
    id: 'day5-morning-archive',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '학범',
    role: '학생회',
    place: '아카이브실',
    text: '아침의 아카이브실 책상에는 여섯 개의 표식이 놓였다. 상원의 정정표, 상욱의 남색 실밥, 준혁의 접힌 지도, 도훈이 찍어 보낸 영수증 사진, 하음의 박자 메모, 윤호가 말린 종이 조각. 전부 손에 잡히는 것들인데도 학범의 이름만 만지면 자꾸 속이 비었다.',
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
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
    place: '아카이브실',
    text: '상원은 칠판을 여섯 칸으로 나눴다. 오전엔 기록, 실밥, 동선. 방과 후엔 영수증과 영상, 문소리, 말린 종이. 학범, 네가 무엇부터 볼지 정해. 단서보다 네 반응이 먼저 사라지면 안 되니까.',
    effect: { target: 'sangwon', type: 'question' },
    directives: [
      { type: 'SCG', id: 'sangwon', name: '상원', action: 'enter', pos: 3, expression: 'serious', transition: 'fade-in' },
      { type: 'E', target: 'sangwon', effect: 'question', motion: 'nod' }
    ]
  },
  {
    id: 'choice-day5-school-shift',
    type: 'choice',
    choices: [
      '상원과 아카이브 원본을 맞춘다.',
      '상욱과 체육관 복도를 다시 뛴다.',
      '준혁과 도서관에서 동선을 그린다.'
    ],
    rewards: [
      { affection: { sangwon: 2 }, flags: ['sangwon_route_seed', 'day5_records_copy'] },
      { affection: { sanguk: 2 }, flags: ['sanguk_route_seed', 'day5_gym_trace'] },
      { affection: { junhyeok: 2 }, flags: ['junhyeok_route_seed', 'day5_library_map'] }
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
    place: '아카이브실',
    text: '상원은 면장갑을 건네고 정정표의 붉은 선을 가리켰다. 출입 명단에서 학범의 이름만 두 번 고쳐져 있었다. 누가 지운 걸 다시 쓴 흔적이었다. 장갑 안쪽이 미리 따뜻해서, 학범은 그가 오래 기다렸다는 걸 먼저 알아차렸다.',
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
    text: '파일 가장자리의 눌린 자국은 학범의 필압과 닮았지만 끝에서 자꾸 끊겼다. 상원은 그 부분을 투명 필름으로 덮었다. 네가 선택한 흔적이면, 누가 지우기 전에 보존해야 해. 다만 네가 싫다면 기록하지 않을게.'
  },
  {
    id: 'day5-sangwon-small-smile',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '상원',
    role: '학생회 기록 담당',
    text: '상원은 펜을 내려놓고 처음으로 빈칸을 남겼다. 오늘 네 표정은 적지 않을게. 대신 네가 직접 말할 때까지, 이 정정표가 네 선택을 대신 훼손하지 못하게 지킬 거야.',
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
    text: '상욱은 체육관 복도 바닥에 테이프로 짧은 표시를 붙였다. 실밥이 걸린 창고 문고리와 아카이브실 쪽 계단 사이를 몇 번이나 왕복한 뒤라 운동화 끈이 풀려 있었다. 내가 먼저 뛰면 빠르긴 한데, 네가 어디서 멈췄는지는 못 보겠더라.',
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
    text: '상욱은 학범보다 두 걸음 앞서 나가다 되돌아왔다. 미안, 또 앞질렀다. 네 발소리가 여기서 작아졌어. 무서웠던 거야, 아니면 누가 뒤에 남는 게 신경 쓰였던 거야?',
    effect: { target: 'sanguk', type: 'heart' },
    directives: [
      { type: 'E', target: 'sanguk', effect: 'heart', motion: 'bounce' }
    ]
  },
  {
    id: 'day5-sanguk-found-thread',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '학범',
    role: '학생회',
    text: '문턱 아래에 하나 더 남아 있던 실밥은 창고 커튼의 색과 달랐다. 상욱은 주먹을 쥐었다가 폈다. 당장 쫓고 싶은데, 지금은 여기서 네 대답을 기다리는 게 맞지? 그 말이 실밥보다 오래 학범의 손에 남았다.',
    nextId: 'day5-lunch-merge'
  },
  {
    id: 'day5-junhyeok-library-corner',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '준혁',
    role: '자료 조사 담당',
    place: '도서관 구석자리',
    text: '준혁은 도서관 창가에 학교 지도를 고정하고 자로 세 갈래 선을 그었다. 가장 빠른 길, 비를 피하는 길, 누군가를 기다릴 수 있는 길. 그는 세 번째 선만 일부러 연필을 눌러 그었다.',
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
    mood: 'tense',
    chapter: 'day-5',
    name: '준혁',
    role: '자료 조사 담당',
    text: '아카이브실에서 체육관까지 최단 경로를 고르면 매점 CCTV에 찍히지 않아. 그런데 영수증 시간과 젖은 종이 위치를 맞추려면 누군가 돌아가야 해. 효율로는 설명이 안 되는 길이 하나 남아.',
    effect: { target: 'junhyeok', type: 'question' },
    directives: [
      { type: 'E', target: 'junhyeok', effect: 'question', motion: 'nod' }
    ]
  },
  {
    id: 'day5-junhyeok-quiet-tease',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '준혁',
    role: '자료 조사 담당',
    text: '준혁은 지도 한쪽에 작은 X를 쳤다. 정답만 보면 여기서 끝인데, 네가 자꾸 그 길을 피하니까 답이 바뀌어. 귀찮아도 좋아. 네가 피하는 길까지 계산해야 네 사건이 되니까.',
    effect: { target: 'junhyeok', type: 'chatter' },
    directives: [
      { type: 'E', target: 'junhyeok', effect: 'chatter', motion: 'nod' }
    ],
    nextId: 'day5-lunch-merge'
  },
  {
    id: 'day5-lunch-merge',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '학범',
    role: '독백',
    place: '아카이브실',
    text: '점심 종이 울릴 때 학범은 오전의 단서를 파일에 끼웠다. 정정표는 지워진 이름을, 실밥은 앞서 달린 발을, 지도는 일부러 돌아간 길을 남겼다. 세 단서 모두 사건 바깥보다 학범의 망설임 안쪽을 향하고 있었다.',
    variants: [
      { requiredFlags: ['day5_records_copy'], text: '점심 종이 울릴 때, 상원의 정정표는 누가 학범의 이름을 지우려 했는지보다 누가 다시 남기려 했는지를 보여주고 있었다.' },
      { requiredFlags: ['day5_gym_trace'], text: '점심 종이 울릴 때, 상욱이 쥔 남색 실밥은 도망의 흔적보다 멈추려다 찢긴 마음에 가까워 보였다.' },
      { requiredFlags: ['day5_library_map'], text: '점심 종이 울릴 때, 준혁의 지도 위에서 가장 비효율적인 길만 학범이 오래 바라보는 선으로 남았다.' }
    ],
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
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
    text: '학생회장님, 오후 증거 세트 도착. 매점 영수증, 음악실 문소리, 옥상 종이 중 어디부터 확인할래?',
    messages: [
      { from: 'dohun', text: '영수증 원본 찾았음. CCTV 시간도 대조 가능.' },
      { from: 'haeum', text: '오늘 음악실 비어 있어. 같은 문을 직접 닫아볼 수 있어.' },
      { from: 'yunho', text: '종이는 완전히 말랐어요. 햇빛에 비추면 뒷글씨가 보일지도 몰라요.' },
      { from: 'hakbeom', text: '고마워. 이번엔 내가 보고 싶은 순서로 확인할게.' }
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
      '도훈과 매점 CCTV를 확인한다.',
      '하음과 음악실 문소리를 듣는다.',
      '윤호와 옥상에서 종이를 말린다.'
    ],
    rewards: [
      { affection: { dohun: 2 }, flags: ['dohun_route_seed', 'day5_cctv_check'] },
      { affection: { haeum: 2 }, flags: ['haeum_route_seed', 'day5_music_room_echo'] },
      { affection: { yunho: 2 }, flags: ['yunho_route_seed', 'day5_rooftop_paper'] }
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
    place: '밤의 편의점',
    text: '편의점 계산대 아래에서 도훈은 구겨진 영수증 묶음을 꺼냈다. 복숭아 음료는 이미 학범 쪽으로 밀려 있었다. 정보값 선불. 네 취향을 맞힌 건 우연이라고 해둘게. 부담되면 농담으로 처리하고.',
    effect: { target: 'dohun', type: 'chatter' },
    directives: [
      { type: 'BCG', src: '/assets/bg/convenience-store-night.png', transition: 'fade-in' },
      { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sangwon', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sanguk', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'junhyeok', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'haeum', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'yunho', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'dohun', name: '도훈', action: 'enter', pos: 3, expression: 'tease', transition: 'enter-right' },
      { type: 'E', target: 'dohun', effect: 'chatter', motion: 'bounce' }
    ]
  },
  {
    id: 'day5-dohun-receipt',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '도훈',
    role: '정보통',
    text: '영수증에는 6시 18분, 복숭아 음료 하나와 투명 파일 한 묶음이 찍혀 있었다. CCTV 속 인물은 얼굴을 가렸지만 계산대에 파일을 올려놓는 손이 떨렸다. 도훈은 시간을 동그라미 치고, 네가 혼자 확인했으면 이 손 떨림은 못 봤을걸, 하고 웃었다.'
  },
  {
    id: 'day5-dohun-trade-promise',
    type: 'dialogue',
    mood: 'warm',
    chapter: 'day-5',
    name: '도훈',
    role: '정보통',
    text: '도훈은 영수증을 접어 학범의 주머니에 넣었다. 빚은 나중에 받을게. 오늘은 네가 나한테 먼저 물어봤다는 사실만으로 충분히 비싸. 마지막 말은 장난처럼 들렸지만 시선은 웃지 않았다.',
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
    text: '해질녘 음악실에서 하음은 메트로놈을 가장 느린 속도로 맞췄다. 그리고 아카이브실과 같은 낡은 문을 세 번 닫았다. 첫 번째는 급한 소리, 두 번째는 겁먹은 소리, 세 번째는 누군가를 깨우지 않으려는 소리였다.',
    effect: { target: 'haeum', type: 'ellipsis' },
    directives: [
      { type: 'BCG', src: '/assets/bg/music-room-late-afternoon.png', transition: 'fade-in' },
      { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sangwon', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sanguk', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'junhyeok', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'dohun', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'yunho', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'haeum', name: '하음', action: 'enter', pos: 3, expression: 'gentle', transition: 'fade-in' },
      { type: 'E', target: 'haeum', effect: 'ellipsis', motion: 'nod' }
    ]
  },
  {
    id: 'day5-haeum-door-rhythm',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '하음',
    role: '음악실 담당',
    text: '하음은 세 번째 소리 뒤에 손을 멈췄다. 어제는 여기서 숨이 하나 섞였어. 네가 괜찮다고 말하기 전의 숨이랑 닮았어. 그래서 단서라기보다, 누군가의 망설임처럼 들렸어.'
  },
  {
    id: 'day5-haeum-soft-promise',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-5',
    name: '하음',
    role: '음악실 담당',
    text: '하음은 메트로놈을 끄고 학범의 박자에 맞춰 손가락을 접었다. 무서운 소리도 네 호흡으로 다시 세면 작아져. 다음에 또 이런 문 앞에 서면, 먼저 괜찮은 척하지 말고 나한테 박자를 줘.',
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
    role: '후배 / 풍기 도우미',
    place: '비 갠 옥상',
    text: '옥상 난간 아래에서 윤호는 말린 종이를 클립보드에 고정해 두고 있었다. 바람이 불 때마다 몸을 종이 쪽으로 기울였지만, 학범이 다가오자 한 걸음 물러났다. 선배가 먼저 보셔야 할 것 같아서요.',
    effect: { target: 'yunho', type: 'ellipsis' },
    directives: [
      { type: 'BCG', src: '/assets/bg/rooftop-after-rain.png', transition: 'fade-in' },
      { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sangwon', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'sanguk', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'junhyeok', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'dohun', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'haeum', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'yunho', name: '윤호', action: 'enter', pos: 3, expression: 'quiet', transition: 'fade-in' },
      { type: 'E', target: 'yunho', effect: 'ellipsis', motion: 'nod' }
    ]
  },
  {
    id: 'day5-yunho-wet-paper',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '윤호',
    role: '후배 / 풍기 도우미',
    text: '햇빛에 비춘 종이 뒷면에는 `보관` 뒤로 `돌려줄 것`이 이어져 있었다. 아래쪽에는 학범이 예전에 쓴 축제 프로젝트 제목, `마음을 미루지 않는 기록`, 일부가 번져 있었다. 윤호는 선배가 부르기 전까지는 손을 대지 않았다.'
  },
  {
    id: 'day5-yunho-slow-burn',
    type: 'dialogue',
    mood: 'confession',
    chapter: 'day-5',
    name: '윤호',
    role: '후배 / 풍기 도우미',
    text: '윤호는 종이를 건네며 겨우 눈을 들었다. 제가 계속 뒤에만 있으면 선배가 혼자 앞에 서게 되잖아요. 오늘은 이름 불러주시면 바로 옆으로 갈게요. 기다리는 것도 단서가 될 수 있다면요.',
    effect: { target: 'yunho', type: 'heart' },
    directives: [
      { type: 'E', target: 'yunho', effect: 'heart', motion: 'nod' }
    ],
    nextId: 'day5-evening-merge'
  },
  {
    id: 'day5-evening-merge',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '학범',
    role: '독백',
    place: '아카이브실',
    text: '방과 후의 세 단서까지 파일에 꽂자 여섯 개의 탭이 생겼다. 정정표, 실밥, 지도, 영수증, 박자 메모, 말린 종이. 모두 바깥을 가리키는 척했지만, 끝은 학범의 빈 첫 페이지 쪽으로 둥글게 말려 있었다.',
    variants: [
      { requiredFlags: ['day5_cctv_check'], text: '도훈이 건넨 영수증 시간은 학범의 주머니에서 작게 접혔다. 농담으로 덮인 손길도 결국 학범이 혼자 보지 않게 하려는 확인이었다.' },
      { requiredFlags: ['day5_music_room_echo'], text: '하음과 맞춘 문소리는 학범의 호흡에 남았다. 닫힌 문 뒤에도 누군가는 학범이 괜찮은 척을 멈출 박자를 듣고 있었다.' },
      { requiredFlags: ['day5_rooftop_paper'], text: '윤호와 비춘 말린 종이에는 `돌려줄 것`과 축제 초안의 제목이 함께 남았다. 기다림은 뒤처짐이 아니라, 학범이 직접 부를 자리를 비워두는 일이었다.' }
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
    text: '학범아, 오늘 단서가 여섯 개나 됐다며. 현겸은 파일보다 학범의 손을 먼저 봤다. 이상하게 무섭기보다 다행이야. 네가 늘 남의 기록만 들고 있었는데, 이번엔 네 손을 봐주는 사람이 생긴 거니까.',
    effect: { target: 'hyeongyeom', type: 'heart' },
    directives: [
      { type: 'SCG', id: 'hyeongyeom', name: '현겸', action: 'enter', pos: 4, src: '/assets/character/hyungyeom.png', expression: 'quiet', transition: 'enter-right' },
      { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod' }
    ]
  },
  {
    id: 'day5-season-hook',
    type: 'dialogue',
    mood: 'tense',
    chapter: 'day-5',
    name: '학범',
    role: '학생회',
    place: '아카이브실',
    text: '학범은 여섯 탭을 첫 페이지 뒤에 끼웠다. 페이지 맨 위에는 아직 아무 문장도 없었다. 다만 빈칸이 더 이상 공포처럼 보이지 않았다. 누가 만든 파일인지보다, 누구 앞에서 첫 줄을 쓸 수 있는지가 다음 조사의 방향이 되었다.',
    directives: [
      { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
      { type: 'SCG', id: 'dohun', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'haeum', action: 'delete', transition: 'fade-out' },
      { type: 'SCG', id: 'yunho', action: 'delete', transition: 'fade-out' }
    ],
    nextId: 'day6-chapter-card'
  }
];
