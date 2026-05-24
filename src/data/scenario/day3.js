import { createMapOpeningScenes } from './mapOpeningFactory.js';

export const day3Scenes = [
  {
      id: 'day3-chapter-card',
      type: 'banner',
      kind: 'chapter',
      chapter: 'day-3',
      sectionTitle: 'Day 3: 점심시간 선택',
      mood: 'confession',
      text: 'Day 3 · 점심시간 선택',
      nextId: 'day3-morning-message',
      directives: [
        { type: 'BGM', cue: 'bgmWarm', fadeMs: 700 },
        { type: 'BCG', src: '/assets/bg/school-morning-hallway.png', transition: 'fade-in' }
      ]
    },
  {
      id: 'day3-morning-message',
      type: 'phone',
      chapter: 'day-3',
      kind: 'phone',
      name: '현겸',
      role: '메시지',
      text: '오늘은 우산 필요 없겠다. 그래도 방과 후에 잠깐 볼 수 있어?',
      messages: [
        { from: 'hyeongyeom', text: '오늘은 우산 필요 없겠다.', read: true },
        { from: 'hyeongyeom', text: '그래도 방과 후에 잠깐 볼 수 있어?', read: true },
        { from: 'hakbeom', text: '학생회 끝나면 바로 갈게.', read: true },
        { from: 'hyeongyeom', text: '', pending: true }
      ],
      replies: [
        '기다리게 안 할게.',
        '이번엔 내가 먼저 기다릴게.'
      ],
      rewards: [
        { affection: { hyeongyeom: 10 }, flags: ['day3_fast_reply'] },
        { affection: { hyeongyeom: 20 }, flags: ['day3_wait_first'] }
      ],
      next: ['day3-library-fast', 'day3-library-wait'],
      directives: [
        { type: 'SE', cue: 'message' }
      ]
    },
  {
      id: 'day3-library-fast',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '학범',
      role: '학생회',
      place: '도서관 앞',
      text: '학범은 결재 도장을 찍자마자 서류를 덮었다. “기다리게 안 한다고 했으니까.” 말은 혼잣말처럼 작았지만, 발걸음은 이미 도서관 쪽으로 빨라졌다.',
      directives: [
        { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' }
      ],
      nextId: 'day3-library-meet'
    },
  {
      id: 'day3-library-wait',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '학범',
      role: '학생회',
      place: '도서관 앞',
      text: '학범은 약속 시간보다 일찍 도서관 앞에 섰다. “이번엔 내가 먼저 기다릴게.” 누군가에게 들려주기 전의 한마디가, 우산 없는 복도에서도 이상하게 떨렸다.',
      directives: [
        { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' }
      ],
      nextId: 'day3-library-meet'
    },
  {
      id: 'day3-library-meet',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '현겸',
      role: '동급생',
      place: '도서관 앞',
      text: '진짜 왔네. 비도 안 오는데 네가 안 오면 어쩌나 싶어서, 괜히 우산 꽂이를 한 번 더 확인했어.',
      variants: [
        {
          requiredFlags: ['day3_wait_first'],
          text: '먼저 와 있었네. 비도 안 오는데 학범이가 날 기다리는 장면은, 생각보다 마음을 놓치게 해.'
        },
        {
          requiredFlags: ['day3_fast_reply'],
          text: '빨리 왔네. 기다리게 안 한다더니, 학범이는 그런 말도 회의 안건처럼 지켜버리는구나.'
        }
      ],
      effect: { target: 'hyeongyeom', type: 'blush' },
      directives: [
        { type: 'SCG', id: 'hyeongyeom', action: 'move', pos: 3, motion: 'straight' },
        { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'blush' },
        { type: 'E', target: 'hyeongyeom', effect: 'blush', motion: 'nod' }
      ]
    },
  {
      id: 'day3-student-council-room',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-3',
      name: '학범',
      role: '학생회',
      place: '빈 학생회실',
      text: '현겸은 책을 빌리러 왔다고 했지만 책등보다 학범 쪽을 더 자주 보았다. 학범은 의자를 하나 더 빼며 물었다. “책 핑계면, 조금 더 오래 있어도 되는 거지?”',
      variants: [
        {
          requiredFlags: ['shared_umbrella'],
          text: '우산 아래에서 가까워진 거리는 비가 그친 뒤에도 줄어들지 않았다. 오히려 빈 학생회실의 침묵이 둘 사이를 더 또렷하게 만들었다.'
        },
        {
          requiredFlags: ['message_tease'],
          text: '우산 보관료 같은 농담까지 주고받았는데도, 빈 학생회실에서는 다음 말을 고르는 일이 더 조심스러웠다.'
        }
      ],
      directives: [
        { type: 'BCG', src: '/assets/bg/student-council-room-evening.png', transition: 'fade-in' }
      ]
    },
  {
      id: 'day3-moe-lunch-hyeongyeom',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '현겸',
      role: '동급생',
      place: '교실 창가',
      text: '현겸은 학범이 젓가락을 멈춘 반찬을 보고 작게 웃었다. “싫어하는 거 아직도 그대로네. 나한테 넘겨. 대신 내일은 네가 좋아하는 걸 하나 알려줘.”',
      effect: { target: 'hyeongyeom', type: 'heart' },
      directives: [
        { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod' }
      ]
    },
  {
      id: 'day3-moe-lunch-ukhyun',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '욱현',
      role: '도서위원',
      place: '도서관 옆 벤치',
      text: '욱현은 아무 말 없이 물병을 학범 쪽으로 밀었다. 학범이 고맙다고 하자 그는 시선을 노트에 둔 채 말했다. “목소리 조금 잠겼어. 알아차린 것뿐이야.”',
      effect: { target: 'ukhyun', type: 'ellipsis' },
      directives: [
        { type: 'E', target: 'ukhyun', effect: 'ellipsis', motion: 'nod' }
      ]
    },
  {
      id: 'day3-moe-lunch-dohun',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '도훈',
      role: '매점 정보통',
      place: '매점 앞',
      text: '도훈은 마지막 복숭아 음료를 학범 손에 밀어 넣고 괜히 고개를 돌렸다. “너 나랑 먹으려고 일부러 늦게 온 거지? 아니면 말고. 근데 이건 네 거야.”',
      effect: { target: 'dohun', type: 'blush' },
      directives: [
        { type: 'E', target: 'dohun', effect: 'blush', motion: 'shake' }
      ]
    },

  {
      id: 'day3-moe-lunch-jaeseong',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '재성',
      role: '방송부',
      place: '방송실 앞 복도',
      text: '재성은 매점 빵 봉지를 마이크처럼 들고 웃었다. “점심 인터뷰 갑니다. 학범이는 오늘 누구랑 먹고 싶었을까요? 참고로 내 대본엔 내 이름이 크게 적혀 있어.”',
      effect: { target: 'jaeseong', type: 'chatter' },
      directives: [
        { type: 'BCG', src: '/assets/bg/broadcast-room.png', transition: 'fade-in' },
        { type: 'E', target: 'jaeseong', effect: 'chatter', motion: 'bounce' }
      ]
    },
  {
      id: 'day3-moe-lunch-sangwon',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '상원',
      role: '학생회 기록 담당',
      place: '학생회 기록실',
      text: '상원은 점심 당번표 아래 학범의 빈 시간을 표시했다. “여긴 공식 일정이 없어. 그러니까 네가 누구와 앉고 싶은지, 오늘은 네가 직접 정해야 해.”',
      effect: { target: 'sangwon', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/archive-club-room-evening.png', transition: 'fade-in' },
        { type: 'E', target: 'sangwon', effect: 'ellipsis', motion: 'nod' }
      ]
    },
  {
      id: 'day3-moe-lunch-sanguk',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '상욱',
      role: '운동부',
      place: '체육관 앞 벤치',
      text: '상욱은 도시락을 들고 뛰어오다가 벤치 앞에서 멈췄다. “자리 맡아뒀어! 아, 네가 다른 데 앉고 싶으면 괜찮아. 그래도 한 입은 먹고 가.”',
      effect: { target: 'sanguk', type: 'chatter' },
      directives: [
        { type: 'BCG', src: '/assets/bg/gym-corridor-evening.png', transition: 'fade-in' },
        { type: 'E', target: 'sanguk', effect: 'chatter', motion: 'bounce' }
      ]
    },
  {
      id: 'day3-moe-lunch-junhyeok',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '준혁',
      role: '문화제 동선 담당',
      place: '중정 벤치',
      text: '준혁은 그늘과 바람 방향을 계산한 뒤 학범 쪽 의자를 당겼다. “여기가 소음도 낮고 이동 거리도 짧아. 네가 편하면, 내 계산은 성공이야.”',
      effect: { target: 'junhyeok', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/school-courtyard-blue-hour.png', transition: 'fade-in' },
        { type: 'E', target: 'junhyeok', effect: 'ellipsis', motion: 'nod' }
      ]
    },
  {
      id: 'day3-moe-lunch-haeum',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '하음',
      role: '음악실 담당',
      place: '음악실 창가',
      text: '하음은 도시락 뚜껑을 열기 전 학범의 숨부터 살폈다. “점심시간은 쉼표니까, 너무 빨리 넘기지 말자. 네가 천천히 먹으면 나도 맞출게.”',
      effect: { target: 'haeum', type: 'heart' },
      directives: [
        { type: 'BCG', src: '/assets/bg/music-room-late-afternoon.png', transition: 'fade-in' },
        { type: 'E', target: 'haeum', effect: 'heart', motion: 'nod' }
      ]
    },
  {
      id: 'day3-moe-lunch-yunho',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '윤호',
      role: '후배 / 옥상 담당',
      place: '옥상 문 앞',
      text: '윤호는 옥상 계단에 작은 돗자리를 접어 들고 있었다. “선배가 오실지 몰라서요. 아니, 오셨으면 좋겠어서… 자리 하나만 더 펴 뒀어요.”',
      effect: { target: 'yunho', type: 'blush' },
      directives: [
        { type: 'BCG', src: '/assets/bg/rooftop-after-rain.png', transition: 'fade-in' },
        { type: 'E', target: 'yunho', effect: 'blush', motion: 'nod' }
      ],
      nextId: 'day3-map-after-school'
    },

  ...createMapOpeningScenes({ day: 3, chapter: 'day-3', finalNextId: 'choice-day3-route-focus' }),

  {
      id: 'choice-day3-route-focus',
      type: 'choice',
      choices: [
        '현겸에게 남은 말을 직접 묻는다.',
        '욱현이 일부러 남긴 것 같은 노트를 펼친다.',
        '재성이 마이크를 꺼 둔 이유를 묻는다.'
      ],
      rewards: [
        { affection: { hyeongyeom: 10 }, flags: ['hyeongyeom_route_focus'] },
        { affection: { ukhyun: 20 }, flags: ['ukhyun_route'] },
        { affection: { jaeseong: 20 }, flags: ['jaeseong_route'] }
      ],
      next: ['choice-day3-distance', 'ukhyun-route-start', 'jaeseong-route-start']
    },
  {
      id: 'ukhyun-route-start',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '욱현',
      role: '도서위원',
      place: '도서관 창가',
      text: '학범아, 이 노트 네 거지. 회의 끝나고 창가에 두고 갔더라. 접힌 부분이 신경 쓰여서… 그냥 넘기기 어려웠어.',
      variants: [
        {
          requiredFlags: ['ukhyun_early_interest', 'ukhyun_day2_library'],
          text: '또 펼쳤네. 욱현은 학범이 쥔 노트를 보더니 아주 작게 웃었다. “첫날에도, 어제도. 학범이는 모른 척하다가 결국 직접 확인하러 오는 사람이구나.”'
        },
        {
          requiredFlags: ['ukhyun_day2_library'],
          text: '“어제 답장 기다렸잖아.” 욱현은 접힌 노트를 학범 쪽으로 밀었다. “그러니까 오늘은 내가 먼저 기다렸어. 네가 또 창가를 볼지 궁금해서.”'
        },
        {
          requiredFlags: ['ukhyun_early_interest'],
          text: '“그때 읽었지.” 욱현은 학범이 펼친 노트를 보고 시선을 비켰다. “읽고도 모른 척할 수 있는 사람인지, 한 번 더 확인하고 싶었어.”'
        }
      ],
      effect: { target: 'ukhyun', type: 'ellipsis' },
      directives: [
        { type: 'BCG', src: '/assets/bg/library-window.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'ukhyun', name: '욱현', action: 'enter', pos: 3, expression: 'quiet', transition: 'enter-left' },
        { type: 'E', target: 'ukhyun', effect: 'ellipsis', motion: 'nod' }
      ]
    },
  {
      id: 'ukhyun-note-memory',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-3',
      name: '학범',
      role: '독백',
      place: '도서관 창가',
      text: '노트의 접힌 페이지에는 학범이 쓴 안건 목록이 있었다. 마지막 줄, “나중에 말하기”라는 흐린 글씨 밑에 욱현의 작은 표시가 붙어 있었다.',
      variants: [
        {
          requiredFlags: ['ukhyun_early_interest', 'ukhyun_day2_library'],
          text: '첫날 펼친 접힌 선과 어제 기다린 창가가 같은 페이지에 겹쳐 있었다. 학범은 그제야 욱현이 마음을 숨긴 게 아니라, 대답할 자리를 비워 둔 거라는 걸 알아차렸다.'
        },
        {
          requiredFlags: ['ukhyun_day2_library'],
          text: '어제 기다린 답장은 노트 가장자리의 짧은 밑줄로 남아 있었다. 욱현은 말보다 먼저 종이를 내밀었고, 학범은 그 침묵이 선택을 요구한다는 걸 알았다.'
        },
        {
          requiredFlags: ['ukhyun_early_interest'],
          text: '첫날 학범이 펼쳤던 접힌 페이지에는 새 표시가 하나 더 늘어 있었다. “나중에 말하기” 옆에 붙은 작은 점이 이상하게 오래 눈에 남았다.'
        },
        {
          requiredFlags: ['student_council_help'],
          text: '학생회 회의 메모 한쪽에 학범이 미뤄둔 할 일이 남아 있었다. 욱현은 놓친 숫자 대신, 학범이 지운 문장 옆에 조용히 밑줄을 그어두었다.'
        }
      ]
    },
  {
      id: 'choice-ukhyun-promise',
      type: 'choice',
      choices: [
        '노트 답장은 직접 말하겠다고 한다.',
        '고맙다는 말을 노트에 적어 돌려준다.'
      ],
      rewards: [
        { affection: { ukhyun: 20 }, flags: ['ukhyun_direct_answer'] },
        { affection: { ukhyun: 10 }, flags: ['ukhyun_note_answer'] }
      ],
      next: ['ukhyun-direct-answer', 'ukhyun-note-answer']
    },
  {
      id: 'ukhyun-direct-answer',
      type: 'dialogue',
      mood: 'confession',
      chapter: 'day-3',
      name: '학범',
      role: '학생회',
      text: '글씨로만 남기면 또 “나중에”라고 적고 접어둘 것 같아서. 욱현아, 네가 읽어준 거 직접 고맙다고 말하고 싶었어.',
      effect: { target: 'ukhyun', type: 'heart' },
      directives: [
        { type: 'SCG', id: 'ukhyun', action: 'update', expression: 'blush' },
        { type: 'E', target: 'ukhyun', effect: 'heart', motion: 'zoom', se: 'promise' }
      ],
      nextId: 'season1-bridge-after-promise'
    },
  {
      id: 'ukhyun-note-answer',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '욱현',
      role: '도서위원',
      text: '답장을 노트에 적어 돌려주는 사람은 처음 봐. 그런데 이상하게 학범답다. 조용한데, 접어 넣어도 계속 보일 것 같아.',
      effect: { target: 'ukhyun', type: 'blush' },
      directives: [
        { type: 'SCG', id: 'ukhyun', action: 'update', expression: 'smile' },
        { type: 'E', target: 'ukhyun', effect: 'blush', motion: 'nod' }
      ],
      nextId: 'season1-bridge-after-promise'
    },
  {
      id: 'jaeseong-route-start',
      type: 'dialogue',
      mood: 'tense',
      chapter: 'day-3',
      name: '재성',
      role: '방송부',
      place: '방송실 앞',
      text: '학범 학생회장님, 방송실에서 호출합니다. 장비 점검이라는 핑계는 있고, 네 목소리로 확인하고 싶은 것도 있고.',
      variants: [
        {
          requiredFlags: ['jaeseong_early_signal', 'jaeseong_day2_broadcast'],
          text: '“마이크 꺼 둔 이유, 아직 궁금하지?” 재성은 온에어 불을 켜지 않은 채 웃었다. “첫날도, 어제도 왔잖아. 이제는 호출이 아니라 네가 고른 거라고 해도 되지?”'
        },
        {
          requiredFlags: ['jaeseong_day2_broadcast'],
          text: '“어제 방송실까지 왔으면서 오늘은 모른 척?” 재성은 헤드폰을 손가락에 걸고 흔들었다. “학범, 그런 척은 네 목소리에 제일 안 어울려.”'
        },
        {
          requiredFlags: ['jaeseong_early_signal'],
          text: '“그때 마이크 꺼 둔 거 기억하지?” 재성은 방송실 문을 반쯤 열어 둔 채 속삭였다. “오늘도 꺼 뒀어. 네 대답은 밖으로 내보내기 아까워서.”'
        }
      ],
      effect: { target: 'jaeseong', type: 'question' },
      directives: [
        { type: 'BCG', src: '/assets/bg/broadcast-room.png', transition: 'fade-in' },
        { type: 'SCG', id: 'hyeongyeom', action: 'delete', transition: 'fade-out' },
        { type: 'SCG', id: 'jaeseong', name: '재성', action: 'enter', pos: 3, expression: 'confident', transition: 'enter-right' },
        { type: 'E', target: 'jaeseong', effect: 'question', motion: 'bounce', se: 'question' }
      ]
    },
  {
      id: 'jaeseong-broadcast-room',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '학범',
      role: '독백',
      place: '방송실',
      text: '재성은 일부러 온에어 불을 꺼두고 학범에게 헤드폰 한쪽을 내밀었다. 장난스러운 호출이었지만, 마이크 밖에서 이름을 부르는 목소리는 이상하게 가까웠다.',
      variants: [
        {
          requiredFlags: ['jaeseong_early_signal', 'jaeseong_day2_broadcast'],
          text: '온에어 불은 첫날처럼 꺼져 있었고, 어제 학범이 섰던 자리에는 헤드폰 한쪽이 놓여 있었다. 재성은 장난처럼 웃었지만, 볼륨 노브를 내리는 손끝은 이상하게 조심스러웠다.'
        },
        {
          requiredFlags: ['jaeseong_day2_broadcast'],
          text: '어제 건넨 헤드폰이 다시 학범 쪽으로 밀려왔다. 재성은 아무도 듣지 않는 채널을 열어 두고, 이번엔 학범이 먼저 말할 때까지 기다렸다.'
        },
        {
          requiredFlags: ['jaeseong_early_signal'],
          text: '첫날 꺼져 있던 온에어 불은 오늘도 켜지지 않았다. 재성은 그 침묵을 핑계처럼 걸어 두고, 학범이 문을 닫는 소리까지 가만히 들었다.'
        },
        {
          requiredFlags: ['direct_compliment'],
          text: '재성은 학범이 솔직해지는 순간을 놓치지 않는 사람처럼 볼륨 노브를 아주 조금 낮췄다. 농담은 남겼지만, 숨소리는 방송에 태우지 않았다.'
        }
      ]
    },
  {
      id: 'choice-jaeseong-signal',
      type: 'choice',
      choices: [
        '마이크를 끄고 직접 말한다.',
        '방송 멘트처럼 장난스럽게 답한다.'
      ],
      rewards: [
        { affection: { jaeseong: 20 }, flags: ['jaeseong_direct_signal'] },
        { affection: { jaeseong: 10 }, flags: ['jaeseong_playful_signal'] }
      ],
      next: ['jaeseong-direct-signal', 'jaeseong-playful-signal']
    },
  {
      id: 'jaeseong-direct-signal',
      type: 'dialogue',
      mood: 'confession',
      chapter: 'day-3',
      name: '학범',
      role: '학생회',
      text: '방송으로 나가면 장난처럼 들릴 것 같아. 재성아, 이건 네가 헤드폰을 벗어도 들을 수 있게 말하고 싶어.',
      effect: { target: 'jaeseong', type: 'heart' },
      directives: [
        { type: 'SCG', id: 'jaeseong', action: 'update', expression: 'blush' },
        { type: 'E', target: 'jaeseong', effect: 'heart', motion: 'zoom', se: 'promise' }
      ],
      nextId: 'season1-bridge-after-promise'
    },
  {
      id: 'jaeseong-playful-signal',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '재성',
      role: '방송부',
      text: '방송 멘트로 치기엔 너무 사적인데? 학범, 그렇게 받아치면 다음 호출은 진짜 네 이름으로 예약한다.',
      effect: { target: 'jaeseong', type: 'chatter' },
      directives: [
        { type: 'SCG', id: 'jaeseong', action: 'update', expression: 'smile' },
        { type: 'E', target: 'jaeseong', effect: 'chatter', motion: 'bounce' }
      ],
      nextId: 'season1-bridge-after-promise'
    },
  {
      id: 'choice-day3-distance',
      type: 'choice',
      choices: [
        '네가 없으면 하루가 허전하다고 말한다.',
        '우산 손잡이를 내밀며 장난스럽게 넘긴다.'
      ],
      rewards: [
        { affection: { hyeongyeom: 20 }, flags: ['day3_honest_distance'] },
        { affection: { hyeongyeom: 10 }, flags: ['day3_umbrella_joke'] }
      ],
      next: ['day3-distance-honest', 'day3-distance-joke']
    },
  {
      id: 'day3-distance-honest',
      type: 'dialogue',
      mood: 'confession',
      chapter: 'day-3',
      name: '학범',
      role: '학생회',
      text: '비가 안 와도 네가 생각났어. 우산을 접어둔 자리까지 비어 보일 줄은 몰랐어.',
      effect: { target: 'hyeongyeom', type: 'heart' },
      directives: [
        { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'surprised' },
        { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'zoom', se: 'promise' }
      ],
      nextId: 'day3-before-promise'
    },
  {
      id: 'day3-distance-joke',
      type: 'dialogue',
      mood: 'warm',
      chapter: 'day-3',
      name: '학범',
      role: '학생회',
      text: '비는 안 오지만 혹시 모르니까. 오늘도 학생회장 전용 우산은 대기 중이야. 물론 대여 사유는 네가 직접 적어야 하고.',
      effect: { target: 'hyeongyeom', type: 'chatter' },
      directives: [
        { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'smile' },
        { type: 'E', target: 'hyeongyeom', effect: 'chatter', motion: 'bounce' }
      ],
      nextId: 'day3-before-promise'
    },
  {
      id: 'day3-before-promise',
      type: 'dialogue',
      mood: 'confession',
      chapter: 'day-3',
      name: '현겸',
      role: '동급생',
      place: '방과 후 교문',
      text: '학범아, 나 오늘도 비가 오면 좋겠다고 아주 조금 생각했어. 핑계가 있으면 네 옆에 서는 마음을 덜 들킬 것 같아서.',
      variants: [
        {
          requiredFlags: ['day3_honest_distance'],
          text: '학범아, 방금 말 때문에 나도 숨길 수가 없네. 오늘 하루 종일, 나도 네가 없는 쪽만 이상하게 비어 있었어.'
        },
        {
          requiredFlags: ['day3_umbrella_joke'],
          text: '그 우산, 이제 핑계로 쓰기엔 너무 자주 등장했지? 그래도 네 옆에 서고 싶은 마음은 핑계가 아니야.'
        }
      ],
      effect: { target: 'hyeongyeom', type: 'heart' },
      directives: [
        { type: 'SCG', id: 'hyeongyeom', action: 'move', pos: 4, motion: 'straight' },
        { type: 'SCG', id: 'hyeongyeom', action: 'update', expression: 'blush' },
        { type: 'E', target: 'hyeongyeom', effect: 'heart', motion: 'nod' }
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
        { affection: { hyeongyeom: 20 }, flags: ['promise_hand'] }
      ],
      next: ['season1-bridge-after-promise']
    }
];
