export const day1Scenes = [
  {
      id: 'day1-chapter-card',
      type: 'banner',
      kind: 'chapter',
      chapter: 'day-1',
      sectionTitle: 'Day 1: 비 오는 새 학기',
      mood: 'rain',
      text: 'Day 1 · 비 오는 새 학기',
      nextId: 'opening',
      directives: [
        { type: 'BGM', cue: 'bgmRain', fadeMs: 900 },
        { type: 'AMBIENT', id: 'ambientRain', cue: 'ambientRain', volume: 42 },
        { type: 'BCG', src: '/assets/bg/school-rain-hallway.png', transition: 'fade-in' }
      ]
    },
  {
      id: 'opening',
      type: 'dialogue',
      chapter: 'day-1',
      sectionTitle: 'Day 1: 비 오는 새 학기',
      mood: 'rain',
      name: '학범',
      role: '방과 후',
      place: '방과 후 복도',
      text: '학범은 마지막 건의함 메모까지 날짜순으로 꽂아 넣었다. 자기 이름으로 적힌 부탁은 한 장도 없었고, 창밖의 비만 퇴근 시간을 대신 알려주고 있었다.',
      directives: [
        { type: 'BCG', src: '/assets/bg/school-rain-hallway.png', transition: 'fade-in' }
      ]
    },
  {
      id: 'meet-after-school',
      type: 'dialogue',
      mood: 'rain',
      name: '현겸',
      role: '동급생',
      place: '학생회실 앞',
      text: '학범아. 혹시… 우산 남는 거 있어? 없으면 괜찮아. 나 원래 조금 젖는 건 괜찮거든.',
      effect: { target: 'hyeongyeom', type: 'question' },
      directives: [
        {
          type: 'SCG',
          id: 'hyeongyeom',
          name: '현겸',
          action: 'enter',
          pos: 3,
          src: '/assets/character/hyungyeom.png',
          expression: 'surprised',
          transition: 'enter-right'
        },
        { type: 'E', target: 'hyeongyeom', effect: 'question', motion: 'nod', se: 'question' },
        { type: 'SE', cue: 'voice-soft' }
      ]
    },
  {
      id: 'day1-moe-hyeongyeom-shoulder',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-1',
      name: '현겸',
      role: '동급생',
      place: '학생회실 앞',
      text: '학범아, 네 어깨 쪽만 비 맞은 거 알아? 우산을 나한테 기울이는 버릇, 다정해서 고마운데 다음엔 들키지 말고 해. 들키면… 나도 기대하게 되니까.',
      effect: { target: 'hyeongyeom', type: 'blush' },
      directives: [
        { type: 'E', target: 'hyeongyeom', effect: 'blush', motion: 'nod' }
      ]
    },
  {
      id: 'day1-moe-hyeongyeom-handkerchief',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-1',
      name: '현겸',
      role: '동급생',
      place: '학생회실 앞',
      text: '현겸은 마른 손수건을 꺼내 학범 손목에 살짝 얹었다. “빌려주는 거야. 내일 돌려줘. 그래야 내일도 너한테 올 이유가 생기잖아.”',
      effect: { target: 'hyeongyeom', type: 'heart' },
      directives: [
        { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'bounce' }
      ]
    },
  {
      id: 'prologue-title',
      type: 'banner',
      text: '학생회실 문 앞에서 현겸은 젖은 소매를 감추고 웃었다.',
      summary: '학범은 늘 부탁을 정리해 왔지만, 오늘은 현겸의 말이 더 오래 마음에 남는다.'
    },
  {
      id: 'quiet-room',
      type: 'dialogue',
      mood: 'tense',
      name: '학범',
      role: '독백',
      place: '학생회실',
      text: '현겸의 앞머리 끝에서 물방울이 책상 위로 떨어졌다. 학범은 닦을 휴지를 찾는 대신, 먼저 현겸의 표정을 살폈다.',
      directives: [
        { type: 'BCG', src: '/assets/bg/student-council-room-evening.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'wet', motion: 'zoom' }
      ]
    },
  {
      id: 'tease',
      type: 'dialogue',
      mood: 'warm',
      name: '현겸',
      role: '동급생',
      text: '왜 그렇게 조용해? 우산 빌리러 온 사람보다 빌려줄 사람이 더 긴장한 얼굴인데.',
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
      text: '응. 사실 그 말 기다렸어. 내가 먼저 부탁하면, 괜히 더 오래 같이 있고 싶은 사람처럼 보일까 봐.',
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
      text: '학생회 일처럼 말해도 다정한 건 숨길 수 없나 봐. 그럼 오늘은 회장님 책임으로 부탁할게.',
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
      text: '그렇게 바로 말하면 내가 더 젖은 척도 못 하잖아. 그래도… 신경 써줘서 좋아.',
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
      text: '학범은 평소처럼 적당한 도움말을 고르려 했지만, 현겸의 귀끝이 붉어지는 순간 문장들이 전부 쓸모없어졌다.',
      variants: [
        {
          requiredFlags: ['direct_compliment'],
          text: '솔직하게 꺼낸 말은 생각보다 오래 공중에 남았다. 현겸의 귀끝이 붉어지자 학범은 자기 목소리의 온도까지 의식했다.'
        },
        {
          requiredFlags: ['student_council_help'],
          text: '도와주겠다고 했을 뿐인데 현겸은 안심한 얼굴을 했다. 학범은 그 표정을 보고, 도움보다 더 많은 것을 건네고 싶어졌다.'
        }
      ],
      nextId: 'day1-common-ukhyun-glimpse'
    },
  {
      id: 'day1-common-ukhyun-glimpse',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-1',
      name: '욱현',
      role: '도서위원',
      place: '도서관 앞 복도',
      text: '도서관 문이 닫히기 전, 욱현이 접힌 노트를 학범 쪽으로 밀어 두었다. “회의록 빠진 페이지. 네가 나중에 찾을 것 같아서.” 짧은 말인데, 접힌 모서리는 학범 손이 닿기 쉽게 밖을 향해 있었다.',
      effect: { target: 'ukhyun', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'ukhyun', name: '욱현', action: 'enter', pos: 3, expression: 'quiet', transition: 'fade-in' },
        { type: 'E', target: 'ukhyun', effect: 'ellipsis', motion: 'nod' }
      ],
      nextId: 'day1-common-jaeseong-glimpse'
    },
  {
      id: 'day1-common-jaeseong-glimpse',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-1',
      name: '재성',
      role: '방송부',
      place: '방송실 앞',
      text: '복도 스피커에서 테스트음이 짧게 울리더니 재성이 문틈으로 웃었다. “학범, 들렸어? 방금 건 전체 방송 아니야. 네가 지나갈 때만 맞춰 본 비공개 호출.”',
      effect: { target: 'jaeseong', type: 'chatter' },
      directives: [
        { type: 'BCG', src: '/assets/bg/broadcast-room.png', transition: 'fade-in' },
        { type: 'SCG', id: 'ukhyun', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'jaeseong', name: '재성', action: 'enter', pos: 3, expression: 'confident', transition: 'enter-right' },
        { type: 'E', target: 'jaeseong', effect: 'chatter', motion: 'bounce' }
      ],
      nextId: 'day1-common-sangwon-glimpse'
    },
  {
      id: 'day1-common-sangwon-glimpse',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-1',
      name: '상원',
      role: '학생회 기록 담당',
      place: '학생회 기록실',
      text: '상원은 젖은 협조 요청서를 책상 위에 반듯하게 펴고 학범의 이름 옆에 작은 점을 찍었다. “오늘 네가 누구를 먼저 챙겼는지 적어 두진 않을게. 대신 네가 전부 혼자 하려던 건 기억할 거야.”',
      effect: { target: 'sangwon', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
        { type: 'SCG', id: 'jaeseong', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'sangwon', name: '상원', action: 'enter', pos: 3, expression: 'serious', transition: 'fade-in' },
        { type: 'E', target: 'sangwon', effect: 'ellipsis', motion: 'nod' }
      ],
      nextId: 'day1-common-sanguk-glimpse'
    },
  {
      id: 'day1-common-sanguk-glimpse',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-1',
      name: '상욱',
      role: '운동부',
      place: '체육관 복도',
      text: '상욱은 비에 젖은 포스터 더미를 들고 뛰어오다가 학범 앞에서 급하게 멈췄다. “도와줄까? 아니, 내가 먼저 묻고 움직일게. 너도 오늘 처음 보는 얼굴 많아서 정신없지?”',
      effect: { target: 'sanguk', type: 'chatter' },
      directives: [
        { type: 'BCG', src: '/assets/bg/gym-corridor-evening.png', transition: 'fade-in' },
        { type: 'SCG', id: 'sangwon', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'sanguk', name: '상욱', action: 'enter', pos: 3, expression: 'energetic', transition: 'enter-right' },
        { type: 'E', target: 'sanguk', effect: 'chatter', motion: 'bounce' }
      ],
      nextId: 'day1-common-junhyeok-glimpse'
    },
  {
      id: 'day1-common-junhyeok-glimpse',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-1',
      name: '준혁',
      role: '문화제 동선 담당',
      place: '복도 게시판 앞',
      text: '준혁은 임시 동선표 위에 비를 피하는 경로를 그려 넣었다. “최단 거리는 아니야. 하지만 네가 우산을 나눠 쓰다가 돌아올 확률까지 넣으면, 이쪽이 더 안전해.”',
      effect: { target: 'junhyeok', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/school-rain-hallway.png', transition: 'fade-in' },
        { type: 'SCG', id: 'sanguk', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'junhyeok', name: '준혁', action: 'enter', pos: 3, expression: 'thinking', transition: 'fade-in' },
        { type: 'E', target: 'junhyeok', effect: 'ellipsis', motion: 'nod' }
      ],
      nextId: 'day1-common-dohun-glimpse'
    },
  {
      id: 'day1-common-dohun-glimpse',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-1',
      name: '도훈',
      role: '매점 정보통',
      place: '매점 앞 복도',
      text: '도훈은 매점 셔터를 내리다 학범 손에 따뜻한 캔을 툭 밀어 넣었다. “비 오는 날엔 이게 잘 팔려. 네가 추워 보여서 준 건 아니고, 재고 관리야. 아마도.”',
      effect: { target: 'dohun', type: 'blush' },
      directives: [
        { type: 'BCG', src: '/assets/bg/convenience-store-night.png', transition: 'fade-in' },
        { type: 'SCG', id: 'junhyeok', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'dohun', name: '도훈', action: 'enter', pos: 3, expression: 'playful', transition: 'enter-right' },
        { type: 'E', target: 'dohun', effect: 'blush', motion: 'shake' }
      ],
      nextId: 'day1-common-haeum-glimpse'
    },
  {
      id: 'day1-common-haeum-glimpse',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-1',
      name: '하음',
      role: '음악실 담당',
      place: '음악실 앞',
      text: '하음은 열린 음악실 문틈으로 빗소리를 듣고 있었다. “오늘 복도 소리, 조금 빠르네. 네가 여기까지 오느라 숨이 가빠졌다면, 잠깐 내 박자에 쉬어도 돼.”',
      effect: { target: 'haeum', type: 'heart' },
      directives: [
        { type: 'BCG', src: '/assets/bg/music-room-late-afternoon.png', transition: 'fade-in' },
        { type: 'SCG', id: 'dohun', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'haeum', name: '하음', action: 'enter', pos: 3, expression: 'gentle', transition: 'fade-in' },
        { type: 'E', target: 'haeum', effect: 'heart', motion: 'nod' }
      ],
      nextId: 'day1-common-yunho-glimpse'
    },
  {
      id: 'day1-common-yunho-glimpse',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-1',
      name: '윤호',
      role: '후배 / 옥상 담당',
      place: '옥상 계단',
      text: '윤호는 닫힌 옥상 문 앞에서 젖은 표지판을 품에 안고 있었다. “선배, 오늘은 올라가면 미끄러워요. 그래서 제가 기다렸어요. 선배가 오실 줄 알았거든요.”',
      effect: { target: 'yunho', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/rooftop-after-rain.png', transition: 'fade-in' },
        { type: 'SCG', id: 'haeum', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'yunho', name: '윤호', action: 'enter', pos: 3, expression: 'quiet', transition: 'fade-in' },
        { type: 'E', target: 'yunho', effect: 'ellipsis', motion: 'nod' }
      ],
      nextId: 'choice-day1-after-school-action'
    },
  {
      id: 'choice-day1-after-school-action',
      type: 'choice',
      chapter: 'day-1',
      choices: [
        '현겸과 현관에서 조금 더 걷는다.',
        '도서관에 들러 욱현이 남긴 접힌 노트를 펼친다.',
        '방송실 호출에 답해 재성이 마이크를 끈 이유를 묻는다.'
      ],
      rewards: [
        { affection: { hyeongyeom: 1 }, flags: ['hyeongyeom_day1_action'] },
        { affection: { ukhyun: 1 }, flags: ['ukhyun_early_interest'] },
        { affection: { jaeseong: 1 }, flags: ['jaeseong_early_signal'] }
      ],
      next: ['day1-action-hyeongyeom', 'day1-action-ukhyun', 'day1-action-jaeseong']
    },
  {
      id: 'day1-action-hyeongyeom',
      type: 'dialogue',
      mood: 'confession',
      chapter: 'day-1',
      name: '현겸',
      role: '동급생',
      place: '현관',
      text: '“아직 안 가?” 현겸은 우산 손잡이를 놓지 않았다. “네가 다른 데 들를까 봐 기다린 거 아니야. 그냥… 오늘은 내가 먼저 같이 가자고 말하고 싶었어.”',
      effect: { target: 'hyeongyeom', type: 'heart' },
      directives: [
        { type: 'SCG', id: 'hyeongyeom', action: 'enter', pos: 3, src: '/assets/character/hyungyeom.png', expression: 'blush', transition: 'fade-in' },
        { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod', se: 'heart' }
      ],
      nextId: 'hallway-lights'
    },
  {
      id: 'day1-action-ukhyun',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-1',
      name: '욱현',
      role: '도서위원',
      place: '도서관 앞',
      text: '“그거 일부러 둔 거야.” 욱현은 학범이 펼친 노트를 보더니 시선을 피했다. “네가 읽을지 궁금했어. 안 읽으면… 내일 또 접어 둘 생각이었고.”',
      effect: { target: 'ukhyun', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'ukhyun', name: '욱현', action: 'enter', pos: 3, expression: 'quiet', transition: 'enter-left' },
        { type: 'E', target: 'ukhyun', effect: 'ellipsis', motion: 'nod', se: 'question' }
      ],
      nextId: 'hallway-lights'
    },
  {
      id: 'day1-action-jaeseong',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-1',
      name: '재성',
      role: '방송부',
      place: '방송실 앞',
      text: '“왔네, 학범.” 재성은 온에어 불을 꺼 둔 채 웃었다. “방송으로 부르면 다들 듣잖아. 네가 왜 왔는지는 나만 듣고 싶어서.”',
      effect: { target: 'jaeseong', type: 'question' },
      directives: [
        { type: 'BCG', src: '/assets/bg/broadcast-room.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'jaeseong', name: '재성', action: 'enter', pos: 3, expression: 'confident', transition: 'enter-right' },
        { type: 'E', target: 'jaeseong', effect: 'question', motion: 'bounce', se: 'question' }
      ],
      nextId: 'hallway-lights'
    },
  {
      id: 'hallway-lights',
      type: 'dialogue',
      name: '학범',
      role: '학생회',
      place: '현관',
      text: '소등 방송 곧 나와. 지금 나가면 덜 어두울 거야. 그래도 네가 괜찮으면… 조금 늦어져도 돼.',
      effect: { target: 'hyeongyeom', type: 'ellipsis' },
      directives: [
        { type: 'SCG', id: 'ukhyun', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'jaeseong', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'hyeongyeom', name: '현겸', action: 'enter', pos: 4, src: '/assets/character/hyungyeom.png', expression: 'smile', transition: 'fade-in', motion: 'straight' },
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
      text: '좋아. 나도 오늘은 신호를 한 번쯤 놓쳐도 괜찮을 것 같아.',
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
      text: '그럼 코코아로 할래. 네가 사주는 거면 뜨거워도 천천히 마실 수 있을 것 같아서.',
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
      text: '우산은 생각보다 작았다. 학범은 젖는 쪽을 계산하다가, 자기가 현겸의 보폭에 맞춰 느려지고 있다는 사실을 뒤늦게 알아차렸다.',
      variants: [
        {
          flags: ['shared_umbrella'],
          text: '같이 쓰자고 먼저 말한 사람은 학범이었다. 그래서 어깨가 스칠 때마다, 단순한 배려였다는 변명이 조금씩 물러났다.'
        }
      ],
      directives: [
        { type: 'BCG', src: '/assets/bg/school-gate-rain.png', transition: 'fade-in' },
        { type: 'E', flash: true, color: '#FFFFFF', opacity: 0.36, transition: 'flash', se: 'rain-step' }
      ]
    },
  {
      id: 'rain-crosswalk',
      type: 'dialogue',
      name: '현겸',
      role: '동급생',
      place: '횡단보도',
      text: '학범아, 초록불 깜빡이면 다음 신호 기다리자. 오늘은 빨리 도착하면 아까울 것 같아.',
      effect: { target: 'hyeongyeom', type: 'ellipsis' },
      directives: [
        { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'quiet' },
        { type: 'E', target: 'hyeongyeom', effect: 'ellipsis', motion: 'nod' }
      ]
    },
  {
      id: 'rain-memory',
      type: 'dialogue',
      name: '학범',
      role: '독백',
      text: '학범은 학생회실 앞에서 현겸이 젖은 소매를 숨기던 모습을 떠올렸다. 현겸이 빌리고 싶었던 건 우산보다, 같이 걷자는 말을 꺼낼 시간에 가까웠다.',
      variants: [
        {
          flags: ['slow_walk'],
          text: '천천히 걷자고 말한 뒤부터 현겸의 발끝도 학범의 속도를 따라왔다. 둘 다 늦어지는 쪽을 조심스럽게 선택하고 있었다.'
        },
        {
          flags: ['warm_cocoa'],
          text: '편의점 봉투 안에서 코코아가 식어 갔다. 현겸은 컵보다 우산 손잡이를 더 오래 쥐고 있었고, 학범은 그 손끝을 보지 않는 척했다.'
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
      text: '내일도 보고 싶어. 우산 때문이 아니라, 네가 또 말을 고르고 있을까 봐 그냥 지나치기 싫어.',
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
      text: '그럼 학생회장 직권으로 내일도 동행 허가. 대신 핑계가 필요하면 나한테 먼저 신청해.',
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
      text: '내일 비가 오면 오늘처럼 같이 가자. 비가 안 와도, 내가 우산 돌려주러 가면… 그때도 잠깐 걸어줄래?',
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
      text: '현겸에게서 메시지가 왔다. 짧은 문장 뒤에 한참 동안 입력 표시가 켜졌다 꺼졌다.',
      summary: '고백은 아니지만 지우다 만 문장의 자리가 학범의 밤을 붙잡는다.',
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
      text: '집 도착했어. 우산은 내일 돌려줄게.',
      messages: [
        { from: 'hyeongyeom', text: '집 도착했어. 우산은 내일 돌려줄게.', read: true },
        { from: 'hyeongyeom', text: '오늘 같이 걸어줘서 고마웠어.', read: true },
        { from: 'hyeongyeom', text: '사실은 더 쓰려다가 지웠어.', read: true },
        { from: 'hakbeom', text: '내일 천천히 들려줘.', read: true }
      ],
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
      text: '나도 좋았어. 내일 우산 돌려받을 때, 오늘 지운 말도 조금만 들려줘.',
      variants: [
        {
          flags: ['honest_tomorrow'],
          text: '나도 좋았어. 아까 말한 거, 장난 아니야. 내일은 우산보다 네가 먼저 보이면 좋겠어.'
        }
      ],
      nextId: 'day2-chapter-card'
    },
  {
      id: 'reply-playful',
      type: 'dialogue',
      name: '학범',
      role: '메시지',
      text: '학생회장 승인: 우산 반납은 직접 접수. 단, 현겸이 지운 문장까지 가져오면 가산점.',
      variants: [
        {
          flags: ['playful_hand'],
          text: '학생회장 승인: 내일도 동행 가능. 단, 오늘처럼 핑계를 내밀면 이번엔 네가 먼저 잡아야 함.'
        }
      ],
      effect: { target: 'hyeongyeom', type: 'chatter' },
      directives: [
        { type: 'E', target: 'hyeongyeom', effect: 'chatter', motion: 'bounce' }
      ],
      nextId: 'day2-chapter-card'
    }
];
