const clearCast = [
  'hyeongyeom',
  'ukhyun',
  'jaeseong',
  'sangwon',
  'sanguk',
  'junhyeok',
  'dohun',
  'haeum',
  'yunho'
];

const routeGroups = [
  ['hyeongyeom', 'ukhyun', 'jaeseong'],
  ['sangwon', 'sanguk', 'junhyeok'],
  ['dohun', 'haeum', 'yunho']
];

const routeMeta = {
  hyeongyeom: {
    name: '현겸',
    role: '동급생',
    expression: 'smile',
    pos: 3,
    src: '/assets/character/hyungyeom.png',
    seedFlag: 'hyeongyeom_route_seed',
    effect: 'heart',
    actionLabel: '현겸이 기다리는 복도 쪽으로 간다.'
  },
  ukhyun: {
    name: '욱현',
    role: '도서위원',
    expression: 'quiet',
    pos: 3,
    seedFlag: 'ukhyun_route_seed',
    effect: 'ellipsis',
    actionLabel: '욱현의 접힌 노트를 직접 펼쳐 본다.'
  },
  jaeseong: {
    name: '재성',
    role: '방송부',
    expression: 'confident',
    pos: 3,
    seedFlag: 'jaeseong_route_seed',
    effect: 'question',
    actionLabel: '재성이 꺼 둔 마이크 앞에 선다.'
  },
  sangwon: {
    name: '상원',
    role: '학생회 기록 담당',
    expression: 'serious',
    pos: 3,
    seedFlag: 'sangwon_route_seed',
    effect: 'question',
    actionLabel: '상원의 기록표에서 내 이름 칸을 확인한다.'
  },
  sanguk: {
    name: '상욱',
    role: '운동부',
    expression: 'energetic',
    pos: 3,
    seedFlag: 'sanguk_route_seed',
    effect: 'chatter',
    actionLabel: '상욱이 뛰어온 체육관 복도로 따라간다.'
  },
  junhyeok: {
    name: '준혁',
    role: '문화제 동선 담당',
    expression: 'thinking',
    pos: 3,
    seedFlag: 'junhyeok_route_seed',
    effect: 'ellipsis',
    actionLabel: '준혁의 지도 위 빈칸을 같이 채운다.'
  },
  dohun: {
    name: '도훈',
    role: '매점 정보통',
    expression: 'tease',
    pos: 3,
    seedFlag: 'dohun_route_seed',
    effect: 'chatter',
    actionLabel: '도훈이 숨겨 둔 쿠폰의 조건을 묻는다.'
  },
  haeum: {
    name: '하음',
    role: '음악실 담당',
    expression: 'gentle',
    pos: 3,
    seedFlag: 'haeum_route_seed',
    effect: 'heart',
    actionLabel: '하음의 박자에 맞춰 음악실 문을 연다.'
  },
  yunho: {
    name: '윤호',
    role: '후배 / 옥상 담당',
    expression: 'quiet',
    pos: 3,
    seedFlag: 'yunho_route_seed',
    effect: 'ellipsis',
    actionLabel: '윤호가 기다리는 옥상 문 앞에 선다.'
  }
};

const beatTexts = {
  day6: {
    returnId: 'day6-moe-ukhyun-red-pen',
    title: '시험 공부 후 자유행동',
    hubLead: '문제집을 덮자마자 휴대폰이 세 번 울렸다. 학범은 오늘도 기록 담당이 아니라, 누군가의 옆자리를 직접 고를 수 있었다.',
    prompt: ['먼저 누구와 공부할까?', '두 번째로 어느 장소를 확인할까?', '마지막 쉬는 시간은 누구에게 쓸까?'],
    hyeongyeom: {
      place: '비 그친 복도 창가',
      bg: '/assets/bg/day6-hyeongyeom-study.png',
      entry: '학범아, 여기 앉아. 네 문제집 젖을까 봐 창문은 닫아 뒀어. 대신 네가 답답하면 내가 먼저 조금 열어줄게.',
      answer: '그럼 오늘은 내가 먼저 부탁할게. 모르는 문제보다, 네가 왜 내 옆자리를 비워 뒀는지가 더 궁금해.',
      reaction: '그건… 네가 오면 바로 알아볼 수 있게. 다른 애들이 앉으면 곤란하잖아. 이상한 뜻은 아니고, 조금은 그런 뜻이야.',
      close: '학범은 웃으며 펜을 들었다. “한 문제 풀 때마다 하나씩 말해. 나도 틀린 답 말고 진짜 대답을 고를게.”',
      high: '현겸은 펜 끝으로 학범의 손등을 살짝 건드렸다. “그럼 첫 문제. 내 옆에 오래 앉아 줄 수 있어?”'
    },
    ukhyun: {
      place: '도서관 창가',
      bg: '/assets/bg/day6-ukhyun-study.png',
      entry: '여기. 네가 틀릴 문제만 표시했어. 전부 알려주면 네가 내일도 안 올 것 같아서.',
      answer: '그럼 나도 하나만 표시할게. 오늘 네가 일부러 남겨 둔 여백, 답 안 쓰고 기다릴게.',
      reaction: '욱현은 노트를 접다 멈췄다. “기다릴 줄 아는 사람은 드물어. 학범아, 너는 가끔 답보다 조용해서 위험해.”',
      close: '학범은 접힌 선을 손끝으로 눌렀다. “위험하면 네가 옆에서 감시해. 난 도망 안 갈게.”',
      high: '욱현은 아주 작게 웃었다. “감시는 싫어. 옆자리 예약이라고 해.”'
    },
    jaeseong: {
      place: '방송실',
      bg: '/assets/bg/day6-jaeseong-study.png',
      entry: '마이크 꺼졌어. 오늘은 방송 말고 네 목소리만 듣는 시간. 자, 첫 질문. 나 보고 긴장했어?',
      answer: '긴장했지. 네가 조용히 말하면 장난보다 더 크게 들리거든.',
      reaction: '재성은 헤드폰 한쪽을 학범에게 씌웠다. “그럼 내 목소리만 크게 해 둘게. 도망가면 잡음 처리할 거야.”',
      close: '학범은 볼륨 다이얼을 한 칸 낮췄다. “잡음 없어. 지금은 네가 바로 옆에 있는 소리만 들려.”',
      high: '재성은 웃음을 지우고 말했다. “그 말, 녹음 안 할게. 나만 기억하고 싶어졌어.”'
    },
    sangwon: {
      place: '학생회 기록실',
      bg: '/assets/bg/day6-sangwon-study.png',
      entry: '학범아, 네가 오늘 누구와 몇 분 있었는지 표로 만들었어. 이상하지? 그런데 빠뜨리면 더 불안해서.',
      answer: '상원아, 그 표를 나한테 보여줘. 감추는 것보다 같이 고치는 게 낫잖아.',
      reaction: '상원은 펜을 내려놓았다. “같이 고친다는 말, 좋다. 내가 기록하는 이유가 감시가 아니라 확인이 되니까.”',
      close: '학범은 자신의 이름 옆에 빈칸을 만들었다. “여긴 내가 쓸게. 오늘 상원이 나를 기다렸다고.”',
      high: '상원은 그 칸을 오래 보았다. “그 문장, 지우지 마. 내가 제일 먼저 확인하고 싶어.”'
    },
    sanguk: {
      place: '체육관 복도',
      bg: '/assets/bg/day6-sanguk-study.png',
      entry: '학범아! 문제집 가져왔어! 뛰면 안 된다길래 빨리 걷기만 했는데, 거의 뛰었어. 미안!',
      answer: '괜찮아. 대신 옆에서 천천히 풀자. 네 속도에 맞추려다 내가 먼저 숨찰 것 같아.',
      reaction: '상욱은 문제집을 양손으로 꼭 잡았다. “그럼 내가 네 속도 맞출게. 뛰고 싶으면 말해. 아니면 같이 멈춰 있고.”',
      close: '학범은 체육관 벽에 기대 웃었다. “오늘은 멈춰 있는 연습부터. 네가 기다려 주는 거, 생각보다 든든해.”',
      high: '상욱은 귀까지 빨개졌다. “나, 기다리는 것도 잘할 수 있어. 네가 옆에 있으면.”'
    },
    junhyeok: {
      place: '도서관 지도 테이블',
      bg: '/assets/bg/day6-junhyeok-study.png',
      entry: '효율만 보면 너는 혼자 공부하는 게 맞아. 그런데 표정 데이터를 넣으면 결론이 달라져.',
      answer: '표정 데이터까지 계산했으면, 내가 지금 무슨 얼굴인지도 맞혀 봐.',
      reaction: '준혁은 지도 가장자리에 작은 별을 찍었다. “기대 반, 경계 반. 그리고 내가 맞히길 바라는 얼굴.”',
      close: '학범은 별표 옆에 자기 펜으로 동그라미를 그렸다. “정답. 그럼 오늘 동선은 네 옆으로 수정.”',
      high: '준혁은 동그라미를 보며 낮게 말했다. “수정 사항 저장. 개인적으로 마음에 든다.”'
    },
    dohun: {
      place: '편의점 앞 테이블',
      bg: '/assets/bg/day6-dohun-study.png',
      entry: '복숭아 음료랑 초코바. 네가 밤에 공부할 때 손 가는 순서까지 맞췄다. 소름 돋으면 환불 안 됨.',
      answer: '환불 안 해. 대신 왜 내 취향을 그렇게 잘 아는지 설명은 들어야겠는데.',
      reaction: '도훈은 영수증을 접으며 시선을 피했다. “정보통이라서. 그리고 네가 좋아하는 걸 모르면 괜히 손해 보는 기분이라서.”',
      close: '학범은 음료 캔을 열었다. “그럼 오늘 정보값은 이걸로. 같이 앉아 있어 줘.”',
      high: '도훈은 장난스럽게 웃다 말았다. “같이 앉는 건 공짜로 해줄게. 너한테만.”'
    },
    haeum: {
      place: '음악실',
      bg: '/assets/bg/day6-haeum-study.png',
      entry: '학범아, 문제 풀 때 숨이 빨라져. 오늘은 정답보다 숨부터 맞춰 보자. 하나, 둘.',
      answer: '네가 세어 주면 이상하게 덜 급해져. 조금만 더 같이 맞춰 줄래?',
      reaction: '하음은 메트로놈을 끄고 학범 쪽으로 의자를 당겼다. “기계보다 네 숨이 더 정확해. 떨릴 때도, 숨기고 싶을 때도.”',
      close: '학범은 연필을 내려놓았다. “그럼 오늘은 틀린 문제보다 내 박자부터 고칠게.”',
      high: '하음은 조용히 웃었다. “고치는 게 아니라 맞춰 가는 거야. 나도 네 쪽으로.”'
    },
    yunho: {
      place: '옥상 문 앞',
      bg: '/assets/bg/day6-yunho-study.png',
      entry: '선배, 여기 앉으세요. 바람 덜 부는 쪽이에요. 제가 먼저 앉아 봤는데, 이 자리가 제일 편했어요.',
      answer: '고마워, 윤호야. 근데 네 자리는 어디야? 계속 서 있으면 내가 더 신경 쓰여.',
      reaction: '윤호는 배치도를 품에 안았다. “불러 주시면 옆에 앉을게요. 선배가 불편하지 않은 거리부터 배우고 싶어서요.”',
      close: '학범은 옆자리를 손으로 두드렸다. “그럼 지금 배워. 여기, 네 자리.”',
      high: '윤호는 조심스럽게 앉으며 말했다. “네. 오늘은 선배가 허락한 거리까지 가까워질게요.”'
    }
  },
  day7: {
    returnId: 'day7-moe-hyeongyeom-umbrella-edge',
    title: '비 오는 귀갓길과 작은 질투',
    hubLead: '갑작스러운 비와 로맨스 소문 때문에 복도는 평소보다 시끄러웠다. 학범은 해명보다 먼저, 누구에게 직접 괜찮다고 말할지 골라야 했다.',
    prompt: ['먼저 누구의 불안을 달래러 갈까?', '비가 세질 때 누구의 곁에 설까?', '마지막으로 누구에게 괜찮다고 말할까?'],
    hyeongyeom: {
      place: '젖은 복도 끝',
      bg: '/assets/bg/day7-hyeongyeom-rain.png',
      entry: '학범아, 네 이름 옆에 내 이름 붙은 거 봤어. 기분 나쁜 건 아닌데… 네가 불편하면 내가 먼저 떼어낼게.',
      answer: '불편한 건 남들이 대신 말하는 거야. 네 이름이 내 옆에 있는 건 싫지 않아.',
      reaction: '현겸은 젖은 손끝을 등 뒤로 숨겼다. “그렇게 말하면 내가 안심해도 되는 줄 알잖아.”',
      close: '학범은 우산 손잡이를 현겸 쪽으로 밀었다. “안심해. 오늘도 같이 잡자.”',
      high: '현겸은 손잡이를 잡으며 속삭였다. “그럼 나, 조금 욕심내도 돼?”'
    },
    ukhyun: {
      place: '비 내리는 도서관',
      bg: '/assets/bg/day7-ukhyun-rain.png',
      entry: '남들이 만든 문장은 구조가 나빠. 주어도 목적어도 흐려. 그런데 네 표정은 흐리지 않네.',
      answer: '내 표정까지 읽었으면, 지금 내가 누구에게 설명하고 싶은지도 알겠지.',
      reaction: '욱현은 책갈피를 학범 쪽으로 밀었다. “나한테 먼저 온 건 알겠어. 설명은 천천히 해도 돼.”',
      close: '학범은 책갈피를 받아 들었다. “천천히 말할게. 대신 접어 두지 말고 들어줘.”',
      high: '욱현은 고개를 끄덕였다. “오늘은 안 접어. 네 말은 펼쳐 둘게.”'
    },
    jaeseong: {
      place: '방송실 문 앞',
      bg: '/assets/bg/day7-jaeseong-rain.png',
      entry: '정정 방송 해줄까? “학범이는 아직 고백 안 했습니다. 단, 듣고 싶은 사람은 긴장하세요.” 이렇게.',
      answer: '장난처럼 들리게 하지 마. 재성아, 난 지금 네가 진짜로 어떤 표정인지 보고 싶어.',
      reaction: '재성은 웃음을 멈췄다. “그럼 비공개 모드. 나, 생각보다 신경 쓰였어. 네가 웃고 넘길까 봐.”',
      close: '학범은 방송실 문을 닫았다. “안 넘겨. 네가 신경 쓴 것도, 내가 여기 온 것도.”',
      high: '재성은 낮게 웃었다. “좋아. 오늘 멘트는 그걸로 충분해.”'
    },
    sangwon: {
      place: '학생회 기록실',
      bg: '/assets/bg/day7-sangwon-rain.png',
      entry: '복도에서 말이 커진 순서는 적어 뒀어. 그런데 학범아, 네 마음까지 내가 대신 적으면 안 되는 거겠지.',
      answer: '응. 그건 내가 직접 쓸게. 상원이는 옆에서 틀린 글자만 알려줘.',
      reaction: '상원은 종이를 반으로 접었다. “직접 쓰겠다는 말, 기다렸어. 내가 대신 쓰면 네 선택이 아니니까.”',
      close: '학범은 빈칸 위에 펜을 올렸다. “그럼 오늘 기록은 여기까지. 다음 줄은 내 목소리로 남길게.”',
      high: '상원은 조용히 웃었다. “네 목소리라면, 몇 번이고 다시 읽을 수 있어.”'
    },
    sanguk: {
      place: '체육관 복도',
      bg: '/assets/bg/day7-sanguk-rain.png',
      entry: '누가 이상한 말 했어? 말만 해. 아니, 때리진 않는데! 그냥 내가 먼저 뛰어가서 아닌 거라고 말할게!',
      answer: '뛰기 전에 내 말부터 들어. 상욱아, 네가 화내 준 건 고마운데 지금은 옆에 있어 줘.',
      reaction: '상욱은 운동화 앞코를 멈췄다. “옆? 그럼 안 뛸게. 네가 괜찮아질 때까지 여기 있을게.”',
      close: '학범은 젖은 수건을 건넸다. “그게 더 든든해. 오늘은 같이 천천히 걷자.”',
      high: '상욱은 수건을 받으며 웃었다. “천천히도 좋다. 너랑 같은 속도면.”'
    },
    junhyeok: {
      place: '계단참 지도 앞',
      bg: '/assets/bg/day7-junhyeok-rain.png',
      entry: '말이 퍼지는 속도는 빠른데 네 표정이 먼저 무너졌어. 문제는 근거가 아니라, 네가 혼자 버티려는 습관이고.',
      answer: '맞아. 그러니까 계산 말고 네 방식으로 조금만 옆에 있어 줘.',
      reaction: '준혁은 들고 있던 지도를 접었다. “계산 중지. 지금은 네가 말한 방식이 우선.”',
      close: '학범은 접힌 지도를 같이 잡았다. “고마워. 답 대신 손잡이를 준 기분이야.”',
      high: '준혁은 시선을 피했다. “그 표현은 비효율적인데… 나쁘지 않다.”'
    },
    dohun: {
      place: '편의점 처마 아래',
      bg: '/assets/bg/day7-dohun-rain.png',
      entry: '누가 뭐라고 했는지는 나중에 듣고, 지금 네 표정부터 해결하자. 단 거 먹어. 내가 먼저 샀다.',
      answer: '도훈아, 정보보다 네가 농담을 멈춘 이유가 더 궁금해.',
      reaction: '도훈은 막대사탕 봉지를 뜯다 멈췄다. “네가 진짜로 힘들어 보이면 장난이 안 나와. 짜증나게.”',
      close: '학범은 사탕을 받아 들었다. “그럼 오늘은 장난 말고 같이 있어 줘.”',
      high: '도훈은 고개를 돌렸다. “있잖아. 이미 그러려고 왔어.”'
    },
    haeum: {
      place: '비 오는 음악실',
      bg: '/assets/bg/day7-haeum-rain.png',
      entry: '빗소리가 너무 커서 네 숨이 묻히네. 학범아, 괜찮다는 말 말고 진짜 숨부터 들려줘.',
      answer: '괜찮은 척 그만할게. 하음아, 나 지금 조금 흔들려.',
      reaction: '하음은 피아노 뚜껑을 닫고 다가왔다. “흔들릴 때는 박자를 줄이면 돼. 내가 옆에서 세어 줄게.”',
      close: '학범은 하음의 숫자에 맞춰 숨을 골랐다. “하나, 둘. 네가 있으니까 비가 덜 시끄러워.”',
      high: '하음은 아주 낮게 말했다. “그럼 다음 비에도 나를 불러 줘.”'
    },
    yunho: {
      place: '옥상 계단',
      bg: '/assets/bg/day7-yunho-rain.png',
      entry: '선배, 복도에서 들은 말 신경 쓰이죠. 저는 괜찮아요. 아니, 괜찮은 척은 할 수 있어요.',
      answer: '괜찮은 척 안 해도 돼. 윤호야, 나한테는 후배 말고 너로 말해 줘.',
      reaction: '윤호는 젖은 배치도를 꼭 쥐었다. “그럼 말할게요. 선배가 다른 사람을 보실 때, 저는 조금 늦게 숨 쉬어요.”',
      close: '학범은 배치도를 대신 받아 말렸다. “늦게 숨 쉬지 마. 내가 네 이름도 먼저 부를게.”',
      high: '윤호는 고개를 숙였다. “그럼 저는 바로 갈게요. 선배가 부르면, 항상.”'
    }
  },
  day8: {
    returnId: 'day8-moe-sangwon-pair-form',
    title: '문화제 리허설 전의 데이트 동선',
    hubLead: '리허설 공지가 붙자 학교는 축제 냄새로 들떴다. 학범은 업무를 처리하는 척했지만, 사실은 오늘 누구와 같은 장면을 남길지 고르고 있었다.',
    prompt: ['리허설 첫 장면은 누구와 맞출까?', '준비 동선은 누구와 걸어 볼까?', '해 질 무렵 누구에게 마음을 확인할까?'],
    hyeongyeom: {
      place: '중정 벤치',
      bg: '/assets/bg/day8-hyeongyeom-festival.png',
      entry: '오늘은 비 안 오는데도 여기 왔네. 혹시 이제 우산 말고도 나랑 만날 핑계가 생긴 거야?',
      answer: '핑계가 필요 없다는 걸 확인하러 왔어. 현겸아, 그냥 네가 보고 싶었어.',
      reaction: '현겸은 꽃장식을 만지다 멈췄다. “그 말, 리허설이면 안 돼. 본番처럼 들어도 돼?”',
      close: '학범은 고개를 끄덕였다. “응. 오늘은 연습 아닌 말만 할게.”',
      high: '현겸은 웃음을 숨기지 못했다. “그럼 나도 연습 안 할래. 좋아서 떨리는 거 그대로 둘래.”'
    },
    ukhyun: {
      place: '도서관 전시 코너',
      bg: '/assets/bg/day8-ukhyun-festival.png',
      entry: '전시 순서 바꿨어. 네가 지나갈 때 제일 먼저 보이는 자리에 내 노트를 뒀어.',
      answer: '나 보라고 둔 거면 직접 말해도 돼. 내가 못 본 척하지 않을게.',
      reaction: '욱현은 노트 표지를 덮었다 열었다. “직접 말하면 너무 간단해져. 그래도 오늘은 간단해져도 괜찮을 것 같아.”',
      close: '학범은 노트 옆에 자기 이름표를 놓았다. “그럼 복잡한 건 내일로 미루고, 오늘은 같이 서자.”',
      high: '욱현은 이름표를 반듯하게 맞췄다. “같이. 그 단어는 접지 않을게.”'
    },
    jaeseong: {
      place: '방송실 리허설 부스',
      bg: '/assets/bg/day8-jaeseong-festival.png',
      entry: '리허설 멘트: “학범이는 지금 누구를 보고 있을까요?” 어때. 너무 티 나?',
      answer: '티 나도 돼. 대신 답은 방송하지 말고 나한테 먼저 물어봐.',
      reaction: '재성은 대본을 뒤집었다. “그럼 비공개 질문. 지금 나, 후보에 있어?”',
      close: '학범은 헤드폰을 건넸다. “후보라는 말로는 부족해. 네 목소리를 계속 듣고 싶어.”',
      high: '재성은 마이크를 완전히 껐다. “큰일 났다. 나 지금 진짜 대답 듣고 싶어졌어.”'
    },
    sangwon: {
      place: '아카이브 전시실',
      bg: '/assets/bg/day8-sangwon-festival.png',
      entry: '전시 순서에서 네 이름을 세 번 뺐어. 넣고 싶었는데, 네가 부담스러워할 것 같아서.',
      answer: '상원아, 뺀 것도 기록이야. 나를 배려하려고 고친 흔적, 나는 봤어.',
      reaction: '상원은 종이를 가슴 쪽으로 당겼다. “봤구나. 내가 감추려고 한 선까지.”',
      close: '학범은 빈 전시 카드 하나를 건넸다. “여긴 같이 쓰자. 감추는 기록 말고 나누는 기록으로.”',
      high: '상원은 카드를 받으며 말했다. “같이 쓰면, 내가 너를 혼자 독점하지 않아도 되겠네.”'
    },
    sanguk: {
      place: '체육관 무대 뒤',
      bg: '/assets/bg/day8-sanguk-festival.png',
      entry: '학범아, 이쪽 계단 미끄러워! 내가 먼저 내려가 볼게. 아니, 너 잡고 내려가도 돼?',
      answer: '먼저 뛰지 말고 같이 내려가. 잡아 주는 건 좋아. 대신 나도 네 손 잡을게.',
      reaction: '상욱은 손을 내밀었다가 급히 닦았다. “땀 났어. 그래도 잡아도 돼. 아니, 잡아 줘!”',
      close: '학범은 손을 잡고 계단을 내려갔다. “리허설인데 왜 이렇게 심장이 뛰냐.”',
      high: '상욱은 웃다가 숨을 삼켰다. “나도. 근데 너랑 뛰는 건 하나도 안 무서워.”'
    },
    junhyeok: {
      place: '전시 동선 지도 앞',
      bg: '/assets/bg/day8-junhyeok-festival.png',
      entry: '관람 동선에서 네가 멈출 확률이 높은 지점을 표시했어. 여기, 그리고 여기. 둘 다 내가 있는 곳이네.',
      answer: '계산이 너무 노골적인데. 그래도 맞아, 네가 있으면 멈추게 돼.',
      reaction: '준혁은 펜 뚜껑을 닫았다. “노골적인 계산은 실패 확률이 높다. 그런데 방금은 성공했네.”',
      close: '학범은 지도 한가운데 별표를 더했다. “성공 보상. 오늘 여기서 한 번 더 만나자.”',
      high: '준혁은 별표를 오래 보았다. “약속 좌표 저장. 삭제하지 않겠음.”'
    },
    dohun: {
      place: '매점 앞 임시 부스',
      bg: '/assets/bg/day8-dohun-festival.png',
      entry: '쿠폰 디자인 봐라. 네가 좋아하는 색으로 해 달라고 한 건 아니고, 우연히 내가 그렇게 골랐다.',
      answer: '우연치고 너무 정확해. 도훈아, 이제 모른 척하기 어려워졌는데?',
      reaction: '도훈은 쿠폰 묶음을 뒤로 숨겼다. “그래서 뭐. 네가 좋아하면 된 거지. 내가 왜 좋아했는지는 묻지 말고.”',
      close: '학범은 웃으며 한 장을 빼 들었다. “그 이유, 축제 끝나기 전에 직접 들을게.”',
      high: '도훈은 고개를 돌렸지만 귀가 빨갰다. “들어도 후회하지 마라. 나도 준비는 했으니까.”'
    },
    haeum: {
      place: '해질녘 음악실',
      bg: '/assets/bg/day8-haeum-festival.png',
      entry: '마지막 곡 시작 전에 조명이 한 번 낮아져. 그때 네가 어디를 보는지, 소리로 알 수 있을 것 같아.',
      answer: '그럼 나도 숨기지 않을게. 그때 네 쪽을 볼 거야.',
      reaction: '하음은 악보 위에 손을 얹었다. “말로 듣는 것보다 정확하네. 네 시선도 박자가 있어.”',
      close: '학범은 빈 악보 끝에 작은 표시를 남겼다. “내 박자가 흔들리면 잡아 줘.”',
      high: '하음은 부드럽게 답했다. “잡는 게 아니라 맞출게. 오래.”'
    },
    yunho: {
      place: '중정 조명 아래',
      bg: '/assets/bg/day8-yunho-festival.png',
      entry: '선배, 여기 조명은 저녁에 켜져요. 그때 보시면 예쁠 것 같아서… 같이 보고 싶었어요.',
      answer: '좋아. 근데 예쁜 조명보다, 네가 그걸 나랑 보고 싶었다는 게 더 좋아.',
      reaction: '윤호는 손에 든 체크리스트를 떨어뜨릴 뻔했다. “선배는 가끔, 제가 준비한 말보다 먼저 들어오세요.”',
      close: '학범은 체크리스트를 주워 건넸다. “그럼 다음 줄은 내가 쓸게. 윤호랑 같이 보기.”',
      high: '윤호는 그 줄을 보며 웃었다. “저, 그 일정은 절대 안 늦을게요.”'
    }
  },
  day9: {
    returnId: 'day9-moe-hyeongyeom-everyone-kind',
    title: '말이 커진 방과 후',
    hubLead: '복도에서 도는 말은 더 커졌지만, 이제 학범은 기록 뒤에 숨을 수 없었다. 마음이 향하는 사람마다 직접 듣고 싶은 대답이 달랐다.',
    prompt: ['흔들린 사람을 먼저 만나러 간다.', '방과 후 약속을 직접 확인한다.', '밤이 오기 전 마지막 말을 남긴다.'],
    hyeongyeom: {
      place: '비 오기 전 교문',
      bg: '/assets/bg/day9-hyeongyeom-rumor.png',
      entry: '“다들 네가 누구한테 고백할지 맞히느라 바쁘더라. 나는 맞히기보다 네가 도망치지 않았으면 좋겠어. 내 앞에서는 숨지 마.”',
      answer: '“도망 안 갈게. 현겸아, 네 앞에서는 더 숨기고 싶지 않아. 기다리게만 하는 것도 그만할게.”',
      reaction: '“그럼 내가 기다려도 되는 거지? 네가 말할 때까지 너무 멀리 가지 않고. 대신 네가 오면, 나도 바로 잡을게.”',
      close: '“기다리게만 하지 않을게. 나도 네 쪽으로 갈 거야. 오늘은 네가 먼저 기다렸으니까, 내일은 내가 먼저 갈게.”',
      high: '“그 말이면 오늘은 충분해. 내일은 조금 더 욕심낼게. 네가 먼저 온다고 했으니까, 나도 안 물러날래.”'
    },
    ukhyun: {
      place: '닫히기 전 도서관',
      bg: '/assets/bg/day9-ukhyun-rumor.png',
      entry: '남의 말은 접으면 작아져. 그런데 네 마음은 접지 마. 작아 보이면 내가 못 읽어.',
      answer: '읽어 줘. 이번에는 내가 펼쳐 둘게. 늦어도 네가 기다릴 수 있게.',
      reaction: '욱현은 책갈피를 새 페이지에 꽂았다. “기다릴 수 있어. 단, 네가 일부러 숨기지만 않으면.”',
      close: '학범은 책을 닫지 않았다. “안 숨겨. 너한테는 특히.”',
      high: '욱현은 시선을 내렸다. “좋아. 그 문장, 오늘 제일 오래 기억할게.”'
    },
    jaeseong: {
      place: '방송실 야간등',
      bg: '/assets/bg/day9-jaeseong-rumor.png',
      entry: '정정 멘트까지 썼는데, 네가 오니까 전부 유치해 보인다. 그냥 물어볼게. 나, 기다려도 돼?',
      answer: '응. 장난으로 빠져나가지 말고 기다려 줘. 나도 제대로 말하고 싶어.',
      reaction: '재성은 대본을 접어 주머니에 넣었다. “장난 안 칠게. 대신 네가 제대로 말하면, 나도 제대로 대답할 거야.”',
      close: '학범은 꺼진 마이크를 내려다봤다. “둘만 들을 수 있게 말할게.”',
      high: '재성은 숨을 작게 들이켰다. “그럼 나도 웃지 않고 들을게. 아마 조금은 떨면서.”'
    },
    sangwon: {
      place: '학생회실 야간 기록대',
      bg: '/assets/bg/day9-sangwon-rumor.png',
      entry: '학범아, 내가 적은 기록을 지울까? 네 선택이 누군가에게 보이면, 너를 가두는 문서가 될까 봐.',
      answer: '지우지 마. 대신 내 허락 없이 결론을 쓰지 말아 줘. 과정은 같이 남기자.',
      reaction: '상원은 펜을 천천히 내려놓았다. “허락. 그 단어 좋다. 내가 가장 먼저 배워야 할 규칙이네.”',
      close: '학범은 기록지 옆에 손을 올렸다. “규칙 하나 더. 상원이가 불안하면 나한테 먼저 묻기.”',
      high: '상원은 그 손을 보며 낮게 답했다. “묻는 법부터 연습할게. 널 잃기 싫어서.”'
    },
    sanguk: {
      place: '체육관 불 꺼진 관중석',
      bg: '/assets/bg/day9-sanguk-rumor.png',
      entry: '학범아, 나 기다리는 거 잘 못해. 근데 이번엔 해볼게. 네가 말할 때 내가 제일 먼저 달려가고 싶어서.',
      answer: '상욱아, 달려오는 것도 좋지만 오늘은 내 옆에 앉아 줘. 숨 고르면서 같이 기다리자.',
      reaction: '상욱은 관중석에 털썩 앉았다. “옆에 앉는 건 잘해. 아니, 지금부터 잘할게.”',
      close: '학범은 그의 옆자리에 앉았다. “그럼 시작. 첫 번째 연습은 손 닿아도 도망 안 가기.”',
      high: '상욱은 굳었다가 웃었다. “나 안 도망가. 네가 먼저 놓기 전까지.”'
    },
    junhyeok: {
      place: '복도 지도 게시판',
      bg: '/assets/bg/day9-junhyeok-rumor.png',
      entry: '네 선택지를 전부 줄이면 세 개가 남아. 도망, 침묵, 고백. 네가 첫 번째를 지웠으면 좋겠어.',
      answer: '첫 번째는 지웠어. 두 번째도 오래 못 갈 것 같아. 준혁아, 고마워.',
      reaction: '준혁은 보드마카를 건넸다. “그럼 네가 직접 마지막 선택지에 동그라미 쳐. 내가 대신 그리면 의미가 없어.”',
      close: '학범은 고백이라는 단어 아래에 작게 선을 그었다. “이건 아직 연습. 그래도 지우진 않을게.”',
      high: '준혁은 선을 바라보며 말했다. “연습치고는 선이 곧다. 신뢰 가능.”'
    },
    dohun: {
      place: '밤의 편의점',
      bg: '/assets/bg/day9-dohun-rumor.png',
      entry: '남들이 떠드는 말 때문에 네가 밥 거를 줄 알았다. 그래서 샀어. 계산은 내가 했고, 고마우면 나중에 제대로 웃어라.',
      answer: '도훈아, 너 진짜 다정한 거 티 난다. 이제 숨길 생각 없지?',
      reaction: '도훈은 봉지를 학범 쪽으로 밀었다. “없진 않은데, 너한텐 자꾸 실패해. 재수 없게.”',
      close: '학범은 봉지를 받으며 웃었다. “그 실패, 나는 꽤 좋아.”',
      high: '도훈은 입술을 꾹 눌렀다. “좋아하지 마. 아니, 좋아해도 되는데 티 내지 마. 내가 먼저 티 낼지도 모르니까.”'
    },
    haeum: {
      place: '무대 뒤 음악실',
      bg: '/assets/bg/music-room-late-afternoon.png',
      entry: '복도 말들은 박자가 빨라. 네 마음은 그 속도에 맞추지 않아도 돼. 학범아, 네 템포로 말해.',
      answer: '내 템포로 말하면 너무 늦을까 봐 겁났어. 그래도 네가 기다려 준다면 늦어도 말할게.',
      reaction: '하음은 악보를 접지 않았다. “늦는 건 괜찮아. 거짓 박자로 시작하는 게 더 아파.”',
      close: '학범은 고개를 끄덕였다. “그럼 진짜 박자로. 조금 떨려도 내 목소리로.”',
      high: '하음은 눈을 가늘게 접었다. “그 떨림까지 같이 들을게.”'
    },
    yunho: {
      place: '옥상 난간 아래',
      bg: '/assets/bg/rooftop-after-rain.png',
      entry: '선배, 제가 너무 기다리기만 하면 부담스럽죠? 그래도 오늘은 먼저 내려가고 싶지 않았어요.',
      answer: '부담 아니야. 윤호야, 네가 기다리는 마음을 내가 모르는 척한 게 미안해.',
      reaction: '윤호는 난간에서 한 걸음 물러났다. “모르는 척 아니면 됐어요. 저는 선배가 불러 주시면 그때 가도 괜찮아요.”',
      close: '학범은 그의 이름을 불렀다. “윤호야. 지금 와 줘.”',
      high: '윤호는 바로 옆으로 왔다. “네, 선배. 저 이 말 오래 기다렸어요.”'
    }
  }
};

function clearDirectives(exceptId) {
  return clearCast
    .filter((id) => id !== exceptId)
    .map((id) => ({ type: 'SCG', id, action: 'delete', transition: 'fade-out' }));
}

function enterDirective(routeId) {
  const route = routeMeta[routeId];
  const directive = {
    type: 'SCG',
    id: routeId,
    name: route.name,
    action: 'enter',
    pos: route.pos,
    expression: route.expression,
    transition: 'fade-in'
  };
  if (route.src) directive.src = route.src;
  return directive;
}

function hubId(dayKey, groupIndex) {
  return `${dayKey}-free-hub-${String.fromCharCode(97 + groupIndex)}`;
}

function branchId(dayKey, routeId, step) {
  return `${dayKey}-free-${routeId}-${step}`;
}

function buildBranch(dayKey, routeId, beat, nextId) {
  const route = routeMeta[routeId];
  return [
    {
      id: branchId(dayKey, routeId, 'entry'),
      type: 'dialogue',
      chapter: dayKey.replace('day', 'day-'),
      mood: dayKey === 'day7' || dayKey === 'day9' ? 'tense' : 'warm',
      name: route.name,
      role: route.role,
      place: beat.place,
      text: beat.entry,
      effect: { target: routeId, type: route.effect },
      directives: [
        { type: 'BCG', src: beat.bg, transition: 'fade-in' },
        ...clearDirectives(routeId),
        enterDirective(routeId),
        { type: 'E', target: routeId, effect: route.effect, motion: route.effect === 'chatter' ? 'bounce' : 'nod' }
      ],
      nextId: branchId(dayKey, routeId, 'answer')
    },
    {
      id: branchId(dayKey, routeId, 'answer'),
      type: 'dialogue',
      chapter: dayKey.replace('day', 'day-'),
      mood: 'confession',
      name: '학범',
      role: '선택',
      place: beat.place,
      text: beat.answer,
      nextId: branchId(dayKey, routeId, 'reaction')
    },
    {
      id: branchId(dayKey, routeId, 'reaction'),
      type: 'dialogue',
      chapter: dayKey.replace('day', 'day-'),
      mood: 'confession',
      name: route.name,
      role: route.role,
      place: beat.place,
      text: beat.reaction,
      effect: { target: routeId, type: route.effect },
      directives: [
        { type: 'E', target: routeId, effect: route.effect, motion: route.effect === 'heart' ? 'zoom' : 'nod' }
      ],
      nextId: branchId(dayKey, routeId, 'close')
    },
    {
      id: branchId(dayKey, routeId, 'close'),
      type: 'dialogue',
      chapter: dayKey.replace('day', 'day-'),
      mood: 'warm',
      name: routeId === 'yunho' ? '윤호' : '학범',
      role: routeId === 'yunho' ? route.role : '대답',
      place: beat.place,
      text: beat.close,
      variants: [
        {
          affection: { [routeId]: { min: 70 } },
          text: beat.high
        },
        {
          default: true,
          text: beat.close
        }
      ],
      nextId
    }
  ];
}

function buildDay(dayKey, plan) {
  const scenes = [];
  routeGroups.forEach((group, groupIndex) => {
    const currentHub = hubId(dayKey, groupIndex);
    const nextHub = groupIndex < routeGroups.length - 1 ? hubId(dayKey, groupIndex + 1) : plan.returnId;
    scenes.push({
      id: currentHub,
      type: 'choice',
      chapter: dayKey.replace('day', 'day-'),
      mood: 'warm',
      place: plan.title,
      text: groupIndex === 0 ? plan.hubLead : plan.prompt[groupIndex],
      choices: group.map((routeId) => routeMeta[routeId].actionLabel),
      rewards: group.map((routeId) => ({
        affection: { [routeId]: 8 },
        flags: [
          `${dayKey}_${routeId}_free_time`,
          `${routeId}_route_seed`
        ]
      })),
      next: group.map((routeId) => branchId(dayKey, routeId, 'entry'))
    });
    for (const routeId of group) {
      scenes.push(...buildBranch(dayKey, routeId, plan[routeId], nextHub));
    }
  });
  return scenes;
}

export const longformDatingExpansionScenes = Object.entries(beatTexts).flatMap(([dayKey, plan]) => buildDay(dayKey, plan));
