export const day2Scenes = [
  {
      id: 'day2-chapter-card',
      type: 'banner',
      kind: 'chapter',
      chapter: 'day-2',
      sectionTitle: 'Day 2: 문화제 기록 담당',
      mood: 'warm',
      text: 'Day 2 · 문화제 기록 담당',
      nextId: 'day2-morning',
      directives: [
        { type: 'BGM', cue: 'bgmWarm', fadeMs: 900 },
        { type: 'STOP_AMBIENT', id: 'ambientRain' }
      ]
    },
  {
      id: 'day2-morning',
      type: 'banner',
      chapter: 'day-2',
      text: '다음 날 아침, 학범은 평소보다 일찍 등교했다. 회의 자료를 핑계로 삼았지만, 신발장 쪽에서 젖지 않은 우산을 들고 있을 현겸을 먼저 떠올렸다.',
      summary: '돌려받는 것은 우산이고, 이어지는 것은 어제 미처 다 하지 못한 말이다.',
      directives: [
        { type: 'BCG', src: '/assets/bg/school-morning-hallway.png', transition: 'fade-in' }
      ],
      nextId: 'day2-morning-message'
    },
  {
      id: 'day2-ukhyun-morning-bridge',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-2',
      sectionTitle: 'Day 2: 접힌 노트의 답장',
      name: '욱현',
      role: '도서위원',
      place: '도서관 창가',
      text: '아침 도서관 창가에는 학범이 접어 둔 답장이 먼저 놓여 있었다. 욱현은 그것을 펼치지 않고 손끝으로 눌렀다. “읽기 전에 물어볼게. 오늘도 직접 확인하러 온 거지?”',
      effect: { target: 'ukhyun', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'jaeseong', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'ukhyun', name: '욱현', action: 'enter', pos: 3, expression: 'quiet', transition: 'fade-in' },
        { type: 'E', target: 'ukhyun', effect: 'ellipsis', motion: 'nod' }
      ],
      nextId: 'choice-day2-free-action'
    },
  {
      id: 'day2-jaeseong-morning-bridge',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-2',
      sectionTitle: 'Day 2: 꺼진 마이크의 아침',
      name: '재성',
      role: '방송부',
      place: '방송실 앞',
      text: '아침 방송 전, 재성은 온에어 불을 켜지 않은 채 학범을 기다리고 있었다. “어제 네가 왔던 거, 아무 데도 안 남겼어. 대신 오늘 네가 먼저 온 건 내가 기억해도 되지?”',
      effect: { target: 'jaeseong', type: 'question' },
      directives: [
        { type: 'BCG', src: '/assets/bg/broadcast-room.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'ukhyun', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'jaeseong', name: '재성', action: 'enter', pos: 3, expression: 'confident', transition: 'fade-in' },
        { type: 'E', target: 'jaeseong', effect: 'question', motion: 'bounce' }
      ],
      nextId: 'choice-day2-free-action'
    },
  {
      id: 'day2-morning-message',
      type: 'phone',
      chapter: 'day-2',
      kind: 'phone',
      name: '현겸',
      role: '메시지',
      text: '우산 말려뒀어. 접는 선까지 똑바로 맞췄으니까 확인하러 와.',
      messages: [
        { from: 'hyeongyeom', text: '우산 말려뒀어.', read: true },
        { from: 'hyeongyeom', text: '접는 선까지 똑바로 맞췄으니까 확인하러 와.', read: true },
        { from: 'hakbeom', text: '학생회 물품 검수처럼 들리는데.', read: true },
        { from: 'hyeongyeom', text: '', pending: true }
      ],
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
      text: '답장을 보내자마자 학범은 오전 회의록의 오탈자를 세 번이나 놓쳤다. 기다리겠다는 말은 짧았는데, 그 말이 하루의 중심을 옮겨 놓았다.',
      nextId: 'day2-hallway'
    },
  {
      id: 'day2-rooftop-playful',
      type: 'dialogue',
      chapter: 'day-2',
      name: '학범',
      role: '점심시간',
      place: '옥상 앞 계단',
      text: '장난으로 답했는데도 휴대폰을 뒤집어 놓을 수 없었다. 현겸이 웃으며 우산 손잡이를 내미는 장면이, 수업 종보다 먼저 머릿속에 울렸다.',
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
      text: '학범아. 우산 여기. 어제처럼 젖은 곳 하나 없이 말렸어. 그런데 네가 먼저 와 있으면, 내가 돌려주러 온 티가 너무 나잖아.',
      variants: [
        {
          requiredFlags: ['shared_umbrella'],
          text: '어제 같이 썼던 우산이 생각나서, 접을 때마다 손이 느려졌어. 현겸은 아무렇지 않은 척했지만 손잡이 끝을 놓지 않았다.'
        },
        {
          requiredFlags: ['playful_reply'],
          text: '어제 답장 때문에 웃다가 잠깐 멈췄어. 장난인 줄 아는데, 그래도 기다리게 되더라.'
        },
        {
          flags: ['message_waiting'],
          text: '학범아. 네가 기다린다고 했으니까 확인하러 왔어. 우산 반납보다 그쪽이 더 궁금했거든.'
        },
        {
          flags: ['message_tease'],
          text: '학범아. 우산 보관료가 웃음이라며? 아침 첫 정산은 좀 부끄러운데, 그래도 받아갈 거지?'
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
      text: '점심이 끝날 즈음, 기록집에는 새 이름들이 늘어났고 현겸은 우산을 돌려준 뒤에도 바로 돌아서지 않았다. 여러 사람의 부탁이 쌓일수록, 학범은 자기 손에 다시 무언가를 쥐여 주려는 마음이 누구에게 향하는지 더 의식하게 됐다.',
      variants: [
        {
          flags: ['warm_reply'],
          text: '현겸은 우산을 돌려준 뒤에도 학범의 책상 옆에 조금 더 머물렀다. 따뜻한 답장을 받은 사람처럼, 눈이 마주칠 때마다 먼저 웃어주었다.'
        },
        {
          flags: ['playful_reply'],
          text: '현겸은 우산을 돌려준 뒤에도 학범의 책상 근처를 지나쳤다 돌아왔다. 어제의 장난을 떠올리는지, 말끝마다 웃음을 삼켰다.'
        }
      ],
      nextId: 'choice-day2-free-action'
    },
  {
      id: 'choice-day2-free-action',
      type: 'choice',
      chapter: 'day-2',
      choices: [
        '현겸에게 우산을 핑계로 한 번 더 말을 건다.',
        '도서관 창가에서 욱현의 답장을 기다린다.',
        '방송실에서 재성이 꺼 둔 마이크 앞에 선다.'
      ],
      rewards: [
        { affection: { hyeongyeom: 1 }, flags: ['hyeongyeom_day2_umbrella_excuse'] },
        { affection: { ukhyun: 1 }, flags: ['ukhyun_day2_library'] },
        { affection: { jaeseong: 1 }, flags: ['jaeseong_day2_broadcast'] }
      ],
      next: ['day2-action-hyeongyeom', 'day2-action-ukhyun', 'day2-action-jaeseong']
    },
  {
      id: 'day2-action-hyeongyeom',
      type: 'dialogue',
      mood: 'confession',
      chapter: 'day-2',
      name: '현겸',
      role: '동급생',
      place: '방과 후 복도',
      text: '“우산 핑계 아직 유효해?” 현겸은 빈손인데도 학범 곁에 섰다. “비가 안 오면, 이번엔 네가 다른 핑계를 만들어 줘.”',
      effect: { target: 'hyeongyeom', type: 'heart' },
      directives: [
        { type: 'SCG', id: 'hyeongyeom', name: '현겸', action: 'enter', pos: 3, src: '/assets/character/hyungyeom.png', expression: 'blush', transition: 'fade-in' },
        { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod', se: 'heart' }
      ],
      nextId: 'day2-introduction-briefing'
    },
  {
      id: 'day2-action-ukhyun',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-2',
      name: '욱현',
      role: '도서위원',
      place: '도서관 창가',
      text: '“기다릴 줄은 몰랐어.” 욱현은 책갈피처럼 접힌 쪽지를 학범 앞에 밀었다. “어제 네가 펼친 줄, 아직 그대로야. 답도 그대로고.”',
      effect: { target: 'ukhyun', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'ukhyun', name: '욱현', action: 'enter', pos: 3, expression: 'quiet', transition: 'enter-left' },
        { type: 'E', target: 'ukhyun', effect: 'ellipsis', motion: 'nod', se: 'question' }
      ],
      nextId: 'day2-introduction-briefing'
    },
  {
      id: 'day2-action-jaeseong',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-2',
      name: '재성',
      role: '방송부',
      place: '방송실',
      text: '“마이크 꺼 둔 거 확인하러 온 거야?” 재성은 헤드폰 한쪽을 학범에게 걸어 주었다. “그럼 이제 방송용 말 말고, 네가 듣고 싶은 말 해 봐.”',
      effect: { target: 'jaeseong', type: 'question' },
      directives: [
        { type: 'BCG', src: '/assets/bg/broadcast-room.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'jaeseong', name: '재성', action: 'enter', pos: 3, expression: 'confident', transition: 'enter-right' },
        { type: 'E', target: 'jaeseong', effect: 'question', motion: 'bounce', se: 'question' }
      ],
      nextId: 'day2-introduction-briefing'
    },
  {
      id: 'day2-introduction-briefing',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '학범',
      role: '학생회 기록 담당',
      place: '학생회 기록실',
      text: '짧은 자유 시간이 끝나자 학범은 협조 요청서 더미를 다시 들었다. 누구에게 마음이 기울든, 기록 담당으로서는 문화제를 함께 만드는 사람들을 모두 만나야 했다.',
      directives: [
        { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'ukhyun', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'jaeseong', action: 'delete', transition: 'fade-out' }
      ],
      nextId: 'day2-moe-hyeongyeom-lunch-side'
    },

  {
      id: 'day2-moe-hyeongyeom-lunch-side',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '현겸',
      role: '동급생',
      place: '학생회 기록실 앞',
      text: '현겸은 협조 요청서 더미 위에 작은 메모를 올려 두었다. “무리하면 말해. 오늘은 네가 누구를 만나든, 끝나고 돌아올 자리 정도는 내가 맡아둘게.”',
      effect: { target: 'hyeongyeom', type: 'heart' },
      directives: [
        { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod' }
      ],
      nextId: 'day2-moe-sangwon-pen-line'
    },
  {
      id: 'day2-moe-sangwon-pen-line',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '상원',
      role: '학생회 기록 담당',
      place: '학생회 기록실',
      text: '상원은 학범의 펜 끝이 멈춘 줄에 작은 표시를 했다. “여기서 네 표정이 바뀌었어. 기록하지 말라고 하면 안 할게. 대신 네가 모른 척하지는 마.”',
      effect: { target: 'sangwon', type: 'ellipsis' },
      directives: [
        { type: 'E', target: 'sangwon', effect: 'ellipsis', motion: 'nod' }
      ],
      nextId: 'day2-moe-jaeseong-preview'
    },
  {
      id: 'day2-moe-jaeseong-preview',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '재성',
      role: '방송부',
      place: '방송실 앞',
      text: '재성은 방송실 문틈으로 고개만 내밀었다. “기록 담당님, 홍보 영상 예고편 찍자. 제목은 ‘학범이가 웃으면 방송사고가 난다’ 어때?”',
      effect: { target: 'jaeseong', type: 'chatter' },
      directives: [
        { type: 'E', target: 'jaeseong', effect: 'chatter', motion: 'bounce' }
      ],
      nextId: 'day2-festival-briefing'
    },

  {
      id: 'day2-festival-briefing',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '학범',
      role: '학생회 기록 담당',
      place: '학생회 기록실',
      text: '학생회 기록실 책상 위에는 문화제 협조 요청서가 쌓였다. 학범은 기록집 첫 장에 “봄날의 방과 후”라고 적었다가, 오늘 새로 만날 이름들이 그 제목을 완성할지도 모른다고 생각했다.',
      directives: [
        { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' }
      ],
      nextId: 'day2-sangwon-forms'
    },
  {
      id: 'day2-sangwon-forms',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '상원',
      role: '학생회 기록 담당',
      place: '학생회 기록실',
      text: '상원은 양식 칸을 반듯하게 맞추며 학범의 펜을 가져갔다. “네 글씨는 급하면 오른쪽으로 기울어. 오늘은 내가 줄 맞출 테니까, 너는 누구를 먼저 만나고 싶은지만 정해.”',
      effect: { target: 'sangwon', type: 'question' },
      directives: [
        { type: 'SCG', id: 'sangwon', name: '상원', action: 'enter', pos: 3, expression: 'serious', transition: 'fade-in' },
        { type: 'E', target: 'sangwon', effect: 'question', motion: 'nod' }
      ],
      nextId: 'day2-ukhyun-library-request'
    },
  {
      id: 'day2-ukhyun-library-request',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '욱현',
      role: '도서관 전시 담당',
      place: '도서관 창가',
      text: '욱현은 전시 도서 목록 사이에 작은 노트를 끼워 두었다. “필요한 자료 적어 놨어. 네가 말하기 전에 찾는 편이 빠를 것 같아서.” 말은 짧았지만, 노트 모서리는 학범이 펼치기 좋게 접혀 있었다.',
      effect: { target: 'ukhyun', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' },
        { type: 'SCG', id: 'sangwon', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'ukhyun', name: '욱현', action: 'enter', pos: 3, expression: 'quiet', transition: 'fade-in' },
        { type: 'E', target: 'ukhyun', effect: 'ellipsis', motion: 'nod' }
      ],
      nextId: 'day2-jaeseong-broadcast-invite'
    },
  {
      id: 'day2-jaeseong-broadcast-invite',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '재성',
      role: '방송부',
      place: '방송실',
      text: '재성은 마이크 테스트 버튼을 톡톡 누르며 웃었다. “문화제 홍보 영상에 기록 담당 목소리도 필요하지 않아? 학범아, 긴장하면 더 귀엽게 녹음될 것 같은데.”',
      effect: { target: 'jaeseong', type: 'chatter' },
      directives: [
        { type: 'BCG', src: '/assets/bg/broadcast-room.png', transition: 'fade-in' },
        { type: 'SCG', id: 'ukhyun', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'jaeseong', name: '재성', action: 'enter', pos: 3, expression: 'confident', transition: 'enter-right' },
        { type: 'E', target: 'jaeseong', effect: 'chatter', motion: 'bounce' }
      ],
      nextId: 'day2-sanguk-gym-poster'
    },
  {
      id: 'day2-sanguk-gym-poster',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '상욱',
      role: '운동부',
      place: '체육관 복도',
      text: '상욱은 포스터를 붙이다 테이프를 이마에 붙이고도 크게 웃었다. “사진 찍어도 돼! 대신 기록집에 이상하게 나오면 네가 직접 다시 찍어줘. 나, 네 앞에서는 잘 보이고 싶거든.”',
      effect: { target: 'sanguk', type: 'chatter' },
      directives: [
        { type: 'BCG', src: '/assets/bg/gym-corridor-evening.png', transition: 'fade-in' },
        { type: 'SCG', id: 'jaeseong', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'sanguk', name: '상욱', action: 'enter', pos: 3, expression: 'energetic', transition: 'enter-right' },
        { type: 'E', target: 'sanguk', effect: 'chatter', motion: 'bounce' }
      ],
      nextId: 'day2-junhyeok-map-note'
    },
  {
      id: 'day2-junhyeok-map-note',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '준혁',
      role: '문화제 동선 담당',
      place: '도서관 앞 복도',
      text: '준혁은 행사 동선표에 빨간 선을 하나 더 그었다. “이 길은 효율이 낮아. 그런데 네가 사진 찍다가 길 잃을 확률을 줄여. 그러니까 채택.”',
      effect: { target: 'junhyeok', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' },
        { type: 'SCG', id: 'sanguk', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'junhyeok', name: '준혁', action: 'enter', pos: 3, expression: 'thinking', transition: 'fade-in' },
        { type: 'E', target: 'junhyeok', effect: 'ellipsis', motion: 'nod' }
      ],
      nextId: 'day2-dohun-coupon'
    },
  {
      id: 'day2-dohun-coupon',
      type: 'phone',
      kind: 'phone',
      chapter: 'day-2',
      name: '도훈',
      role: '메시지',
      text: '매점 협찬 쿠폰 하나 확보. 고맙다고 하면 가격 올라감.',
      messages: [
        { from: 'dohun', text: '매점 협찬 쿠폰 하나 확보.' },
        { from: 'dohun', text: '네가 좋아하는 복숭아 음료도 목록에 있더라.' },
        { from: 'hakbeom', text: '그걸 왜 기억해?' },
        { from: 'dohun', text: '정보통이라서. 다른 뜻 없음. 아마도.' }
      ],
      directives: [
        { type: 'SE', cue: 'message' }
      ],
      nextId: 'day2-haeum-performance-list'
    },
  {
      id: 'day2-haeum-performance-list',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '하음',
      role: '음악실 담당',
      place: '음악실',
      text: '하음은 공연 순서표를 넘기다 마지막 칸을 비워 두었다. “여긴 아직 정하지 않았어. 기록 담당이 어떤 봄을 남기고 싶은지 듣고 나서 맞추고 싶어서.”',
      effect: { target: 'haeum', type: 'heart' },
      directives: [
        { type: 'BCG', src: '/assets/bg/music-room-late-afternoon.png', transition: 'fade-in' },
        { type: 'SCG', id: 'junhyeok', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'haeum', name: '하음', action: 'enter', pos: 3, expression: 'gentle', transition: 'fade-in' },
        { type: 'E', target: 'haeum', effect: 'heart', motion: 'nod' }
      ],
      nextId: 'day2-yunho-rooftop-wait'
    },
  {
      id: 'day2-yunho-rooftop-wait',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-2',
      name: '윤호',
      role: '후배 / 옥상 담당',
      place: '옥상 문 앞',
      text: '윤호는 옥상 배치도를 품에 안고 문 앞에 서 있었다. “선배가 오시면 보여드리려고요. 먼저 정리해도 되지만, 같이 본 풍경을 기록에 넣고 싶었어요.”',
      effect: { target: 'yunho', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/rooftop-after-rain.png', transition: 'fade-in' },
        { type: 'SCG', id: 'haeum', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'yunho', name: '윤호', action: 'enter', pos: 3, expression: 'quiet', transition: 'fade-in' },
        { type: 'E', target: 'yunho', effect: 'ellipsis', motion: 'nod' }
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
      text: '오늘은 비 안 오네. 그래도 하굣길 같이 걸어도 돼? 우산을 돌려줬다고 어제 일이 끝나버리면, 좀 아쉬울 것 같아서.',
      variants: [
        {
          flags: ['day2_direct_reply'],
          text: '오늘은 비 안 오네. 그래도 같이 걸어도 돼? 아침에 기다려준 얼굴이 하루 종일 자꾸 생각났어.'
        },
        {
          flags: ['day2_playful_reply'],
          text: '오늘은 비 안 오네. 그래도 같이 걸어도 돼? 학생회장 승인서에 유효기간은 안 적혀 있었잖아.'
        }
      ],
      directives: [
        { type: 'SCG', id: 'ukhyun', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'jaeseong', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'hyeongyeom', name: '현겸', action: 'enter', pos: 3, src: '/assets/character/hyungyeom.png', expression: 'smile', transition: 'fade-in' }
      ],
      nextId: 'day3-chapter-card'
    }
];
