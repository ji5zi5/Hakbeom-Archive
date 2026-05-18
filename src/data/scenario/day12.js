export const day12Scenes = [
  {
    "id": "day12-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-12",
    "sectionTitle": "Day 12: 문화제 리허설",
    "mood": "school",
    "text": "Day 12 · 문화제 리허설",
    "nextId": "day12-opening",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-courtyard-blue-hour.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-opening",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "학범",
    "role": "학생회",
    "place": "축제 리허설장",
    "text": "축제 리허설장은 종이꽃과 케이블, 아직 붙지 않은 이름표로 가득했다. 학범은 무대가 고백을 대신해 주지 않는다는 사실을 가장 먼저 배웠다.",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-courtyard-blue-hour.png",
        "transition": "fade-in"
      },
      {
        "type": "BGM",
        "cue": "bgmSchool",
        "fadeMs": 700
      }
    ]
  },
  {
    "id": "day12-moe-route-rehearsal-slip",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-12",
    "name": "학범",
    "role": "독백",
    "place": "문화제 리허설장",
    "text": "리허설의 실수는 이상하게도 두 사람의 거리를 더 쉽게 줄였다.",
    "variants": [
      {
        "requiredFlags": [
          "route_lock_hyeongyeom"
        ],
        "text": "현겸은 리허설 동선을 놓치고도 학범 손목만은 놓치지 않았다. “미안. 길은 틀렸는데, 네가 옆에 있는 건 맞는 것 같아서.”"
      },
      {
        "requiredFlags": [
          "route_lock_ukhyun"
        ],
        "text": "욱현은 전시 순서표를 한 장 떨어뜨리고 바로 주웠다. “손이 미끄러졌어. 네가 가까이 오면 글씨보다 네 얼굴을 먼저 보게 돼.”"
      },
      {
        "requiredFlags": [
          "route_lock_jaeseong"
        ],
        "text": "재성은 큐시트를 거꾸로 들고도 태연했다. “방송 실수? 아니, 네가 앞줄에 서면 세계가 잠깐 뒤집히는 건 자연 현상이야.”"
      },
      {
        "requiredFlags": [
          "route_lock_sangwon"
        ],
        "text": "상원은 체크리스트 한 칸을 비워 둔 채 펜을 멈췄다. “여긴 고치지 않을래. 네가 웃은 시간이라, 수치로 바꾸기 아까워.”"
      },
      {
        "requiredFlags": [
          "route_lock_sanguk"
        ],
        "text": "상욱은 결승선 테이프를 너무 빨리 펼치다가 멈췄다. “아, 또 앞서갔다. 네가 준비됐다고 할 때까지 팔 이렇게 들고 있을게.”"
      },
      {
        "requiredFlags": [
          "route_lock_junhyeok"
        ],
        "text": "준혁은 무대 이동 시간을 계산하다 숫자를 지웠다. “이상해. 네가 옆에 있으면 대기 시간이 손실이 아니라 보상처럼 느껴져.”"
      },
      {
        "requiredFlags": [
          "route_lock_dohun"
        ],
        "text": "도훈은 매점 메뉴판 가격을 잘못 붙이고 얼굴을 붉혔다. “네가 웃으니까 손이 삐끗한 거야. 책임져. 아니, 웃지 말라는 뜻은 아니고.”"
      },
      {
        "requiredFlags": [
          "route_lock_haeum"
        ],
        "text": "하음은 첫 음을 한 박자 늦게 눌렀다. “네가 숨 고르는 소리를 기다렸어. 틀린 게 아니라, 같이 시작하고 싶었던 거야.”"
      },
      {
        "requiredFlags": [
          "route_lock_yunho"
        ],
        "text": "윤호는 옥상 안내 표지판을 거꾸로 들고 굳었다. “선배가 봐주니까 긴장했어요. 그래도… 다시 하면 더 잘할 수 있어요.”"
      }
    ]
  },
  {
    "id": "day12-moe-route-praise",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-12",
    "name": "학범",
    "role": "독백",
    "place": "문화제 리허설장",
    "text": "칭찬은 리허설 대사보다 더 어색했고, 그래서 더 오래 남았다.",
    "variants": [
      {
        "requiredFlags": [
          "route_lock_hyeongyeom"
        ],
        "text": "현겸은 학범이 “잘했어”라고 하자 귀끝까지 붉어졌다. “그 말 들으려고 한 건 아닌데… 들으니까 내일도 잘하고 싶어졌어.”"
      },
      {
        "requiredFlags": [
          "route_lock_ukhyun"
        ],
        "text": "욱현은 칭찬을 듣고 노트 모서리만 만졌다. “알겠어. 오늘 이 페이지는 접어 둘게. 나중에 다시 읽고 싶으니까.”"
      },
      {
        "requiredFlags": [
          "route_lock_jaeseong"
        ],
        "text": "재성은 “잘했어” 한마디에 과장되게 가슴을 눌렀다. “큰일 났네. 이 목소리로 칭찬받으면 나, 다음 멘트 다 진심으로 해버려.”"
      },
      {
        "requiredFlags": [
          "route_lock_sangwon"
        ],
        "text": "상원은 고개를 끄덕이다 작게 웃었다. “네가 칭찬한 문장은 수정 안 해. 오탈자가 있어도 원문 보존.”"
      },
      {
        "requiredFlags": [
          "route_lock_sanguk"
        ],
        "text": "상욱은 칭찬을 듣고 제자리에서 두 번 뛰었다가 멈췄다. “뛰고 싶을 만큼 좋은데, 네 앞이라 멋있게 참고 있어.”"
      },
      {
        "requiredFlags": [
          "route_lock_junhyeok"
        ],
        "text": "준혁은 무표정하게 “확인”이라고 답했다. 하지만 동선표 여백에는 학범의 칭찬 시간이 분 단위로 적혀 있었다."
      },
      {
        "requiredFlags": [
          "route_lock_dohun"
        ],
        "text": "도훈은 “그 정도는 기본이지”라고 말했지만 메뉴판 뒤에 얼굴을 숨겼다. 귀가 빨개져서 가격표 숫자가 흔들렸다."
      },
      {
        "requiredFlags": [
          "route_lock_haeum"
        ],
        "text": "하음은 칭찬을 듣고 악보를 가슴에 안았다. “그 말, 오늘 마지막 음으로 써도 돼? 오래 울리게 두고 싶어.”"
      },
      {
        "requiredFlags": [
          "route_lock_yunho"
        ],
        "text": "윤호는 “잘했어”를 듣자 고개를 깊이 숙였다. “선배가 말해주면… 저, 다음엔 조금 덜 떨 수 있을 것 같아요.”"
      }
    ]
  },
  {
    "id": "day12-moe-route-near-hand",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-12",
    "name": "학범",
    "role": "독백",
    "place": "문화제 리허설장",
    "text": "리허설이 끝날 무렵, 잡지 않은 손 사이에도 고백 직전의 열이 남았다.",
    "variants": [
      {
        "requiredFlags": [
          "route_lock_hyeongyeom"
        ],
        "text": "현겸의 손등이 학범 손등에 닿았다. 그는 물러서지 않고 작게 물었다. “이 정도 거리는 괜찮아? 아니면… 조금 더 가까워도 돼?”"
      },
      {
        "requiredFlags": [
          "route_lock_ukhyun"
        ],
        "text": "욱현은 책을 넘기다 손끝이 닿자 페이지를 멈췄다. “미안. 그런데 지금 넘기면 이 순간까지 넘어갈 것 같아서.”"
      },
      {
        "requiredFlags": [
          "route_lock_jaeseong"
        ],
        "text": "재성은 마이크 선을 정리하다 학범 손 가까이에서 멈췄다. “잡아도 되냐고 물어보는 방송 멘트, 지금 하면 너무 티 나지?”"
      },
      {
        "requiredFlags": [
          "route_lock_sangwon"
        ],
        "text": "상원은 펜을 건네며 손끝을 조심스럽게 뗐다. “기록으로 남기지 않을 거라서 더 조심하는 거야. 네 허락이 먼저니까.”"
      },
      {
        "requiredFlags": [
          "route_lock_sanguk"
        ],
        "text": "상욱은 손을 뻗었다가 주먹을 쥐고 참았다. “잡고 싶은데, 네가 먼저 괜찮다고 할 때까지 여기서 대기.”"
      },
      {
        "requiredFlags": [
          "route_lock_junhyeok"
        ],
        "text": "준혁은 손이 닿은 시간을 계산하다 포기했다. “초 단위로 세면 이상해져. 그냥… 짧지 않았으면 좋겠어.”"
      },
      {
        "requiredFlags": [
          "route_lock_dohun"
        ],
        "text": "도훈은 캔을 건네다 손끝이 닿자 괜히 툴툴댔다. “차갑지? 그러니까 빨리 잡— 아니, 캔을 잡으라고.”"
      },
      {
        "requiredFlags": [
          "route_lock_haeum"
        ],
        "text": "하음은 악보를 넘기는 손을 멈췄다. “지금 박자, 조금 빨라졌어. 네 손이 가까워서 그런 거면… 나도 같아.”"
      },
      {
        "requiredFlags": [
          "route_lock_yunho"
        ],
        "text": "윤호는 손을 모으다 조심스레 풀었다. “선배 손 잡으면 너무 욕심일까요? 오늘은 물어보는 연습부터 해볼게요.”"
      }
    ]
  },
  {
    "id": "day12-route-gate",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "학범",
    "role": "학생회",
    "place": "축제 리허설장",
    "endingGate": true,
    "routeGate": true,
    "endingNext": {
      "hyeongyeom": "day12-hyeongyeom-rehearsal",
      "ukhyun": "day12-ukhyun-rehearsal",
      "jaeseong": "day12-jaeseong-rehearsal",
      "sangwon": "day12-sangwon-rehearsal",
      "sanguk": "day12-sanguk-rehearsal",
      "junhyeok": "day12-junhyeok-rehearsal",
      "dohun": "day12-dohun-rehearsal",
      "haeum": "day12-haeum-rehearsal",
      "yunho": "day12-yunho-rehearsal",
      "good": "day12-hyeongyeom-rehearsal",
      "normal": "day12-hyeongyeom-rehearsal",
      "quiet": "day12-hyeongyeom-rehearsal",
      "default": "day12-hyeongyeom-rehearsal"
    },
    "text": "명단의 빈자리는 하나였다. 학범은 박수받을 장면이 아니라, 함께 실수해도 괜찮을 사람에게 향했다."
  },
  {
    "id": "day12-hyeongyeom-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸은 우산 소품을 펴며 손잡이 각도가 학범 쪽으로 기울지 않게 붙잡았다. 손끝이 같은 천 아래 머물 만큼 가까웠지만, 다른 배우가 부르자 그는 한 발 먼저 물러났다.",
    "nextId": "day12-hyeongyeom-stage",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-courtyard-blue-hour.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "name": "현겸",
        "action": "enter",
        "pos": 3,
        "expression": "quiet",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-hyeongyeom-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "같은 우산",
    "text": "우산 소품의 비닐이 꺼진 조명 아래서 작게 접혔다. 학범이 손을 내밀자 현겸은 잡기 직전 멈추고 “지금 잡으면 안 놓을 것 같아”라고 낮게 말했다.",
    "nextId": "day12-hyeongyeom-signal"
  },
  {
    "id": "day12-hyeongyeom-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸은 결국 우산 손잡이를 학범에게 넘겼다. “오늘은 네가 놓으라고 하면 놓을게.” 비도 없는데, 둘 사이의 숨이 우산 아래에 오래 고였다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "hyeongyeom",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-ukhyun-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현은 도서관 불이 꺼지는 시간까지 큐시트를 접어 쥐고 있었다. 학범이 옆에 서자 종이 모서리와 손끝이 닿았지만, 그는 먼저 펼치지 않았다.",
    "nextId": "day12-ukhyun-stage",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/library-window.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "name": "욱현",
        "action": "enter",
        "pos": 3,
        "expression": "smile",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-ukhyun-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "접힌 노트",
    "text": "큐시트가 접히는 소리 뒤, 욱현의 숨이 메모지 가장자리만큼 가까이 들렸다. 학범은 대신 읽어 주려다 멈췄고, 욱현은 “내가 말할게” 하고 종이를 내려놓았다.",
    "nextId": "day12-ukhyun-signal"
  },
  {
    "id": "day12-ukhyun-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "“안 괜찮아.” 욱현은 그 한 문장만 말하고 더 붙잡지 않았다. 손을 놓은 뒤에도 접힌 노트의 온기가 학범 손끝에 남아 있었다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "ukhyun",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "ukhyun",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-jaeseong-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "재성은 리허설 시작 전 한 번 객석을 웃겼다. 하지만 꺼진 조명 아래 학범이 가까이 서자, 그는 마이크를 켜지 않고 숨만 삼켰다.",
    "nextId": "day12-jaeseong-stage",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/broadcast-room.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "name": "재성",
        "action": "enter",
        "pos": 3,
        "expression": "confident",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-jaeseong-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "방송실 너머",
    "text": "방송실 유리에 빨간 녹음등이 꺼진 채 비쳤고, 재성의 어깨가 학범과 닿을 만큼 가까워졌다. 그는 농담을 꺼내려다 웃지 않았고, “이건 녹음 안 할래”라고 말했다.",
    "nextId": "day12-jaeseong-signal"
  },
  {
    "id": "day12-jaeseong-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "재성은 손을 뻗었다가 마이크 선만 정리했다. “나도 떨려.” 장난을 붙이지 않은 목소리가 스피커 없는 방에 오래 남았다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "jaeseong",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "jaeseong",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-sangwon-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "문화제 기록집",
    "text": "상원은 리허설 변경표를 들고 학범의 숨이 흔들린 순간까지 적으려 했다. 펜 끝이 가까워지자 학범의 손끝이 종이 위에 먼저 닿았다.",
    "nextId": "day12-sangwon-stage",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "name": "상원",
        "action": "enter",
        "pos": 3,
        "expression": "serious",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-sangwon-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "문화제 기록집",
    "text": "펜 끝이 학범의 이름 바로 앞에서 멈췄다. 상원은 바로 기록하지 않았고, 빈칸 위에 손을 올린 채 “네가 허락할 때까지 비워 둘게”라고 말했다.",
    "nextId": "day12-sangwon-signal"
  },
  {
    "id": "day12-sangwon-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "문화제 기록집",
    "text": "상원은 괄호를 지우지도 채우지도 않았다. 기록지 모서리가 접힌 뒤에도 쓰지 않는 침묵이 남아, 학범은 그 공백을 처음으로 안전하게 느꼈다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "sangwon",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "sangwon",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-sanguk-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "상욱은 떨어진 현수막을 잡으러 뛰어왔다가 학범 바로 앞에서 멈췄다. 숨이 가빠 현수막 끈이 둘 사이에서 흔들렸지만, 그는 손목을 잡지 않고 주먹을 폈다.",
    "nextId": "day12-sanguk-stage",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/gym-corridor-evening.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "name": "상욱",
        "action": "enter",
        "pos": 3,
        "expression": "energetic",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-sanguk-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "체육관 동선",
    "text": "학범은 상욱의 숨을 세며 무대 중앙에 세웠다. 꺼진 조명 아래 둘만 남은 것처럼 조용해지자, 상욱은 “말하면 멈출게” 하고 먼저 한 발 물러났다.",
    "nextId": "day12-sanguk-signal"
  },
  {
    "id": "day12-sanguk-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "“멈추는 것도 할 수 있어.” 상욱은 손을 내밀었다가 스스로 내려놓았다. 학범은 그 참는 속도가 달려온 숨보다 더 뜨겁게 느껴졌다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "sanguk",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "sanguk",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-junhyeok-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "지도 위 빈칸",
    "text": "준혁은 이동 동선을 줄이다가 학범과 어깨가 닿는 좁은 통로를 남겼다. “의도한 건 맞아.” 그는 인정했지만, 학범의 숨이 막히자 곧바로 선 하나를 지웠다.",
    "nextId": "day12-junhyeok-stage",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/library-window.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "name": "준혁",
        "action": "enter",
        "pos": 3,
        "expression": "thinking",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-junhyeok-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "지도 위 빈칸",
    "text": "지도 위 빨간 선이 마지막 조명 아래서 끊겨 보였다. 준혁은 가까운 경로를 가리키던 손끝을 멈추고 “통제처럼 보이면 말해”라고 낮게 말했다.",
    "nextId": "day12-junhyeok-signal"
  },
  {
    "id": "day12-junhyeok-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "지도 위 빈칸",
    "text": "“정답보다 네가 필요해.” 준혁은 그 말을 기록하지 않았다. 대신 막았던 경로를 열어 두고, 학범이 먼저 나갈 수 있게 문 옆으로 비켜섰다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "junhyeok",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "junhyeok",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-dohun-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "도훈은 장비 오류를 농담으로 넘기려다 학범과 손끝이 스치자 웃음을 멈췄다. 편의점 불빛 같은 무대 뒤에서 그는 “괜찮냐”를 장난 없이 물었다.",
    "nextId": "day12-dohun-stage",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/convenience-store-night.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "name": "도훈",
        "action": "enter",
        "pos": 3,
        "expression": "tease",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-dohun-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "편의점 불빛",
    "text": "편의점 봉투가 장비 상자 옆에서 바스락거렸다. 도훈은 더 가까이 오려다 멈췄다. “나 지금 웃기면 안 되는 거지.” 학범이 고개를 끄덕이자 그는 처음으로 먼저 물러났다.",
    "nextId": "day12-dohun-signal"
  },
  {
    "id": "day12-dohun-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "“미안. 방금 질투나서 웃겼어.” 도훈은 웃지 않았다. 학범은 그가 놓아 준 손끝의 빈자리가, 사과보다 더 오래 남는다는 걸 알았다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "dohun",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "dohun",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-haeum-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 꺼진 조명 아래 피아노 앞에서 학범의 숨을 먼저 들었다. 손끝이 건반 위에 닿자 두 사람의 박자가 가까워졌지만, 그는 아직 음을 누르지 않았다.",
    "nextId": "day12-haeum-stage",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/music-room-late-afternoon.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "name": "하음",
        "action": "enter",
        "pos": 3,
        "expression": "gentle",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-haeum-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "해질녘 음악실",
    "text": "학범은 메트로놈을 자기 앞에 놓고 숨을 골랐다. 하음은 건반 하나만큼 남은 거리에서 박자를 맞추다가, 더 가까워지기 전에 먼저 손을 내려놓았다.",
    "nextId": "day12-haeum-signal"
  },
  {
    "id": "day12-haeum-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "“여기까지만 해도 충분해.” 하음은 말하지 않은 다음 음을 남겼다. 음악실의 정적은 끝난 리허설보다 오래 두 사람 사이에 머물렀다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "haeum",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "haeum",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-yunho-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 옥상 리허설에서 학범 뒤가 아니라 옆 표시선에 섰다. 이름표 끈이 바람에 같은 방향으로 흔들렸지만, 선배가 돌아보기 전까지 그는 부르지 않았다.",
    "nextId": "day12-yunho-stage",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/rooftop-after-rain.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "name": "윤호",
        "action": "enter",
        "pos": 3,
        "expression": "quiet",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-yunho-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "비 갠 옥상",
    "text": "옥상 난간을 스친 바람이 둘 사이의 표시선을 지웠다. 학범이 손목을 잡으려 하자 윤호는 먼저 손을 내리고 “제가 먼저 기대면 안 되니까요”라고 말했다.",
    "nextId": "day12-yunho-signal"
  },
  {
    "id": "day12-yunho-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "“옆에 있어도 돼요?” 윤호는 웃지 않고 물었다. 학범이 이름을 불러 주자, 그는 물러나지 않는 대신 손을 놓고 선배라는 말을 아주 늦게 삼켰다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "yunho",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "yunho",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-merge",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "학범",
    "role": "독백",
    "place": "무대 뒤",
    "text": "리허설이 끝났을 때 무대에 남은 것은 완벽한 동선이 아니었다. 학범은 각자가 드러낸 약점 때문에, 선택한 마음이 더 실제가 되었다고 느꼈다.",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-courtyard-blue-hour.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "action": "delete",
        "transition": "fade-out"
      }
    ]
  },
  {
    "id": "choice-day12-rehearsal-focus",
    "type": "choice",
    "choices": [
      "무대 뒤 동선을 다시 본다.",
      "방송실 로그를 확인한다.",
      "문화제 기록집을 복사한다."
    ],
    "rewards": [
      {
        "flags": [
          "day12_stage_route"
        ]
      },
      {
        "flags": [
          "day12_broadcast_route"
        ]
      },
      {
        "flags": [
          "day12_archive_route"
        ]
      }
    ],
    "next": [
      "day12-stage-check",
      "day12-broadcast-check",
      "day12-archive-copy"
    ]
  },
  {
    "id": "day12-stage-check",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "무대 뒤",
    "text": "커튼 뒤에는 발자국 대신 꽃가루가 남아 있었다. 누군가 일부러 동선을 흐린 흔적이었다.",
    "nextId": "day12-after-check",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/gym-corridor-evening.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-broadcast-check",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "방송실",
    "text": "방송 로그에는 없는 호출음이 세 번 끼어 있었다. 재생할 때마다 학범의 이름만 또렷했다.",
    "nextId": "day12-after-check",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/broadcast-room.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-archive-copy",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "학생회 기록실",
    "text": "기록집을 복사하자 빈 줄이 검게 떠올랐다. 그 줄에는 “고백은 기록보다 늦으면 안 된다”라고 적혀 있었다.",
    "nextId": "day12-after-check",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-after-check",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "tense",
    "name": "학범",
    "role": "독백",
    "place": "복도",
    "text": "세 준비 기록은 다른 장소에서 나왔지만 같은 결론을 가리켰다. 기록을 대신 맡은 사람은 학범에게 누군가를 고르라고 강요하는 게 아니라, 고른 마음을 끝까지 책임지라고 묻고 있었다."
  },
  {
    "id": "day12-closing",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "독백",
    "place": "복도 창가",
    "text": "창밖에는 축제 전날의 조명이 하나둘 켜졌다. 학범은 유리창에 비친 자신의 표정이 더 이상 도망치는 얼굴이 아니라는 걸 처음으로 인정했다.",
    "nextId": "day13-chapter-card"
  }
];
