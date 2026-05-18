export const day4Scenes = [
  {
      id: 'season1-bridge-after-promise',
      type: 'dialogue',
      mood: 'confession',
      chapter: 'day-3',
      name: '학범',
      role: '독백',
      place: '비가 그친 교문',
      text: '현겸의 손을 놓기 전에 학생회 단체방이 먼저 울었다. 상원이 보낸 사진 속 아카이브실 문은 잠금쇠가 풀려 있었고, 책상 위에는 학범이 쓴 적 없는 제목, `학범 아카이브`가 놓여 있었다.',
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
        '아카이브 기록을 계속 조사한다.',
        '오늘의 약속을 엔딩으로 남긴다.'
      ],
      rewards: [
        { flags: ['archive_room_opened'], unlockedGallery: ['cg-archive-room'], unlockedRecollections: ['rec-day4'] },
        { flags: ['chapter1_early_ending'] }
      ],
      next: ['day4-chapter-card', 'ending-promise']
    },
  {
      id: 'day4-chapter-card',
      type: 'banner',
      kind: 'chapter',
      chapter: 'day-4',
      sectionTitle: 'Day 4: 아카이브실의 새 이름들',
      mood: 'tense',
      text: 'Day 4 · 아카이브실의 새 이름들',
      nextId: 'day4-archive-room-open',
      directives: [
        { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' }
      ]
    },
  {
      id: 'day4-archive-room-open',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-4',
      name: '학범',
      role: '학생회',
      place: '아카이브실',
      text: '방과 후의 아카이브실은 닫혀 있어야 했다. 그런데 손잡이는 안쪽에서 밀린 듯 비뚤어져 있었고, 책상 한가운데의 남색 파일에는 `학범 아카이브`라는 라벨과 아무 문장도 없는 첫 페이지가 끼워져 있었다.',
      directives: [
        { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' }
      ]
    },
  {
      id: 'day4-sangwon-records',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-4',
      name: '상원',
      role: '학생회 기록 담당',
      place: '아카이브실',
      text: '학범, 손대지 마. 출입 기록부터 맞춰야 해. 원본 파일은 사라졌고, 대신 네 이름이 적힌 이 파일만 남았어. 이상한 건 문이 열린 시간이 네가 학생회실을 비운 십오 분과 겹친다는 거야.',
      effect: { target: 'sangwon', type: 'question' },
      directives: [
        { type: 'SCG', id: 'sangwon', name: '상원', action: 'enter', pos: 3, expression: 'serious', transition: 'enter-left' },
        { type: 'E', target: 'sangwon', effect: 'question', motion: 'nod' }
      ]
    },
  {
      id: 'day4-archive-weight',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-4',
      name: '학범',
      role: '독백',
      text: '상원은 찢긴 출석 정정표를 파일 옆에 놓고, 학범의 손이 첫 페이지로 가기 전에 펜으로 막았다. 지키려는 동작처럼 보였지만, 학범은 그가 자기 망설임까지 줄 세우려 한다는 걸 느꼈다.'
    },
  {
      id: 'day4-sanguk-corridor',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-4',
      name: '상욱',
      role: '운동부',
      place: '체육관 복도',
      text: '잠깐, 이거랑 같은 천 아니야? 상욱은 숨을 몰아쉬며 복도에서 주운 남색 실밥을 내밀었다. 체육관 창고 문고리에 걸려 있었대. 누가 뛰다 찢긴 건지, 들고 달리다 멈춘 건지는 아직 모르고.',
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
      mood: 'tense',
      chapter: 'day-4',
      name: '준혁',
      role: '자료 조사 담당',
      place: '아카이브실',
      text: '준혁은 말없이 바닥에 지도를 펼쳤다. 아카이브실에서 체육관으로 가려면 중정을 지나는 게 빠른데, 젖은 발자국은 매점 쪽으로 꺾여 있었다. 빠른 길을 버린 사람이 있으면 목적은 도망이 아니야.',
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
      text: '학생회장님, 매점 사장님이 어제 영수증 묶음을 아직 안 버렸대. CCTV도 지워지기 전이고. 내가 걱정돼서 본 건 아니고, 그냥 정보값이 오르기 전에 잡아둔 거임.',
      messages: [
        { from: 'dohun', text: '아카이브실 문 열렸다며.' },
        { from: 'dohun', text: '6시대 영수증이랑 CCTV, 아직 남아 있어. 내가 먼저 말 걸어둘게.' },
        { from: 'hakbeom', text: '왜 그렇게 빨리 움직였어?' },
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
      place: '중정 입구',
      text: '하음은 손가락으로 책상 모서리를 세 번 두드렸다. 어제 음악실에서 들은 문소리가 이 박자였어. 오래된 아카이브실 문은 마지막에 낮게 끌리는데, 그 뒤 발소리는 뛰지 않았어. 누군가 들킬까 봐가 아니라, 깨울까 봐 조심한 소리였어.',
      effect: { target: 'haeum', type: 'question' },
      directives: [
        { type: 'BCG', src: '/assets/bg/school-courtyard-blue-hour.png', transition: 'fade-in' },
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
      role: '후배 / 풍기 도우미',
      place: '중정 벤치',
      text: '윤호는 옥상 계단 아래에서 기다리다 접힌 종이를 꺼냈다. 비에 젖었다 말라붙은 조각에는 `보관`이라는 글자만 남아 있었다. 선배 글씨 같아서 버릴 수가 없었어요. 가까이 와도 될까요.',
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
      text: '학범아, 혼자 읽지 마. 현겸은 파일을 보지 않고 학범의 얼굴부터 확인했다. 어제 우산 아래에서 네가 느리게 걷던 걸 기억해. 누가 그 시간까지 파일에 넣었다면, 나도 옆에서 봐야 해.',
      effect: { target: 'hyeongyeom', type: 'heart' },
      directives: [
        { type: 'SCG', id: 'hyeongyeom', name: '현겸', action: 'enter', pos: 5, src: '/assets/character/hyungyeom.png', expression: 'quiet', transition: 'enter-right' },
        { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod' }
      ]
    },
  {
      id: 'day4-paper-fragment',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-4',
      name: '학범',
      role: '독백',
      text: '파일의 첫 페이지는 끝까지 비어 있었다. 다만 아래쪽에 빗물이 스민 자국이 밑줄처럼 말라붙어 있었다. 여섯 사람이 가져온 단서는 전부 손에 잡히는데, 정작 학범이 써야 할 문장만 없었다.'
    },
  {
      id: 'choice-day4-focus-a',
      type: 'choice',
      choices: [
        '상원과 기록 원본을 대조한다.',
        '상욱과 체육관 복도를 확인한다.',
        '준혁과 동선을 다시 그린다.'
      ],
      rewards: [
        { affection: { sangwon: 2 }, flags: ['sangwon_route_seed', 'archive_record_checked'] },
        { affection: { sanguk: 2 }, flags: ['sanguk_route_seed', 'gym_corridor_checked'] },
        { affection: { junhyeok: 2 }, flags: ['junhyeok_route_seed', 'route_map_drawn'] }
      ],
      next: ['day4-sangwon-focus', 'day4-sanguk-focus', 'day4-junhyeok-focus']
    },
  {
      id: 'day4-sangwon-focus',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-4',
      name: '상원',
      role: '학생회 기록 담당',
      text: '상원은 출석 정정표와 원본 목록을 나란히 맞췄다. 네가 고른 순서도 남겨둘게. 지우려는 게 아니야, 학범. 누가 네 선택을 대신 정리하기 전에 우리가 먼저 증거로 묶어두자는 뜻이야.',
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
      text: '상욱은 실밥을 손바닥에 올려놓고 이미 복도 쪽으로 몸을 돌렸다. 먼저 뛰어보고 올게. 아니, 같이 가자. 네가 멈추는 지점을 내가 지나쳐 버리면 단서보다 중요한 걸 놓칠 것 같아서.',
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
      mood: 'tense',
      chapter: 'day-4',
      name: '준혁',
      role: '자료 조사 담당',
      text: '준혁은 지도 가장자리의 빈칸을 학범 쪽으로 밀었다. 최단 경로는 이미 틀렸어. 누군가 일부러 돌아갔고, 네가 어느 지점에서 걸음을 늦추는지 알아야 그 우회가 보일 거야.',
      effect: { target: 'junhyeok', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
        { type: 'SCG', id: 'junhyeok', action: 'move', pos: 3, motion: 'straight' },
        { type: 'E', target: 'junhyeok', effect: 'ellipsis', motion: 'nod' }
      ],
      nextId: 'day4-focus-a-merge'
    },
  {
      id: 'day4-focus-a-merge',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-4',
      name: '학범',
      role: '독백',
      text: '기록 원본, 남색 실밥, 우회 동선은 서로 다른 장소에서 왔지만 한 가지를 가리켰다. 누군가는 아카이브를 열어 학범의 행적을 훔친 게 아니라, 학범이 스스로 말하지 않은 순간만 골라 남겨두고 있었다.'
    },
  {
      id: 'choice-day4-focus-b',
      type: 'choice',
      choices: [
        '도훈에게 CCTV 부탁을 확인한다.',
        '하음에게 문소리 기억을 더 묻는다.',
        '윤호와 젖은 종이 조각을 살핀다.'
      ],
      rewards: [
        { affection: { dohun: 2 }, flags: ['dohun_route_seed', 'cctv_favor'] },
        { affection: { haeum: 2 }, flags: ['haeum_route_seed', 'door_sound_memory'] },
        { affection: { yunho: 2 }, flags: ['yunho_route_seed', 'wet_paper_kept'] }
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
      text: '좋아, 영수증 시간은 내가 잡아둘게. 복숭아 음료 하나면 거래 성립. 아, 걱정돼서 먼저 움직인 건 가격에 포함 안 함.',
      messages: [
        { from: 'dohun', text: '확인 완료. 6시 18분에 접힌 우산 하나가 매점 앞을 지나감.' },
        { from: 'hakbeom', text: '얼굴은 보여?' },
        { from: 'dohun', text: '얼굴은 흐림. 대신 영수증 시간이 네가 기억한 시간보다 7분 빨라.' }
      ],
      nextId: 'day4-focus-b-merge'
    },
  {
      id: 'day4-haeum-focus',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-4',
      name: '하음',
      role: '음악실 담당',
      text: '하음은 문틀에 귀를 대고 다시 손가락을 세 번 접었다. 이 문은 닫힌 뒤에 한 박자 늦게 울려. 어제 내가 들은 건 그 다음의 멈춤이야. 학범이 숨을 참았을 때랑 비슷해서 그냥 지나칠 수 없었어.',
      effect: { target: 'haeum', type: 'heart' },
      directives: [
        { type: 'BCG', src: '/assets/bg/school-courtyard-blue-hour.png', transition: 'fade-in' },
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
      role: '후배 / 풍기 도우미',
      text: '윤호는 말라붙은 종이를 양손으로 받쳐 들었다. 선배 이름이 번졌는데도 `돌려줄 것`이라는 글자는 남았어요. 제가 너무 멀리서 기다리면 또 놓칠까 봐, 오늘은 여기까지 왔어요.',
      effect: { target: 'yunho', type: 'heart' },
      directives: [
        { type: 'BCG', src: '/assets/bg/school-courtyard-blue-hour.png', transition: 'fade-in' },
        { type: 'SCG', id: 'yunho', action: 'move', pos: 3, motion: 'straight' },
        { type: 'E', target: 'yunho', effect: 'heart', motion: 'nod' }
      ],
      nextId: 'day4-focus-b-merge'
    },
  {
      id: 'day4-focus-b-merge',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-4',
      name: '현겸',
      role: '동급생',
      text: '학범아, 이건 범인이 자랑하려고 남긴 흔적 같지 않아. 현겸은 빈 첫 페이지를 보고 말했다. 네가 늘 남의 부탁을 대신 적었으니까, 이번엔 누군가 네 차례를 비워둔 것 같아.',
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
      role: '학생회',
      place: '아카이브실',
      text: '학범은 파일을 덮지 못하고 첫 페이지의 빗물 밑줄을 손끝으로 따라갔다. 원본의 첫 장은 사라진 게 아니라 비어 있었다. 내일부터는 단서를 찾는 척하면서, 이 빈칸이 누구 앞에서 무서워지는지 확인해야 했다.',
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
