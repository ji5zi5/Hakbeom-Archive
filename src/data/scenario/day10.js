export const day10Scenes = [
  {
    "id": "day10-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-10",
    "sectionTitle": "Day 10: 중간 고백 전야",
    "mood": "confession",
    "text": "Day 10 · 중간 고백 전야",
    "nextId": "day10-opening",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/rooftop-after-rain.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day10-opening",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "학범",
    "role": "독백",
    "place": "비 갠 옥상",
    "text": "축제 전야의 옥상은 이상할 정도로 조용했다. 학범은 아홉 개의 이름을 바라보다가, 오늘은 사건보다 자신의 마음을 먼저 정리해야 한다는 걸 알았다.",
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
        "action": "delete",
        "transition": "fade-out"
      }
    ]
  },
  {
    "id": "day10-choice-lock-group",
    "type": "choice",
    "choices": [
      "비와 기록의 약속을 떠올린다.",
      "글과 목소리의 신호를 떠올린다.",
      "현장과 밤의 단서를 떠올린다."
    ],
    "rewards": [
      {
        "flags": [
          "day10_group_rain_record"
        ]
      },
      {
        "flags": [
          "day10_group_signal_text"
        ]
      },
      {
        "flags": [
          "day10_group_field_night"
        ]
      }
    ],
    "next": [
      "day10-choice-lock-rain-record",
      "day10-choice-lock-signal-text",
      "day10-choice-lock-field-night"
    ]
  },
  {
    "id": "day10-choice-lock-rain-record",
    "type": "choice",
    "choices": [
      "현겸에게 먼저 괜찮다고 말한다.",
      "상원과 기록의 빈칸을 맡는다.",
      "하음과 문소리의 진심을 듣는다."
    ],
    "rewards": [
      {
        "affection": {
          "hyeongyeom": 3
        },
        "flags": [
          "hyeongyeom_route_seed",
          "route_lock_hyeongyeom",
          "day10_locked_hyeongyeom"
        ]
      },
      {
        "affection": {
          "sangwon": 3
        },
        "flags": [
          "sangwon_route_seed",
          "route_lock_sangwon",
          "day10_locked_sangwon"
        ]
      },
      {
        "affection": {
          "haeum": 3
        },
        "flags": [
          "haeum_route_seed",
          "route_lock_haeum",
          "day10_locked_haeum"
        ]
      }
    ],
    "next": [
      "day10-lock-hyeongyeom",
      "day10-lock-sangwon",
      "day10-lock-haeum"
    ]
  },
  {
    "id": "day10-lock-hyeongyeom",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "학범은 빈 페이지를 접어 현겸의 손이 닿는 쪽으로 밀었다. 그리고 먼저 우산 손잡이를 잡듯 손을 내밀었다. 현겸은 그 손을 급히 붙잡지 않고, 학범이 다가온 만큼만 천천히 맞잡았다.",
    "nextId": "day10-hyeongyeom-prelock-reflection",
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
      },
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "heart",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day10-lock-sangwon",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "학범은 기록 카드의 날짜 칸을 비워 둔 채 상원 앞에 놓았다. 상원은 늘 누르던 카드 모서리에서 손을 떼고, 대신 펜을 학범 쪽으로 돌려 주었다. 고치지 않겠다는 약속이 그 빈칸에 먼저 앉았다.",
    "nextId": "day10-sangwon-prelock-reflection",
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
      },
      {
        "type": "E",
        "target": "sangwon",
        "effect": "heart",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day10-lock-haeum",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "하음",
    "role": "음악실 담당",
    "place": "문소리의 박자",
    "text": "학범은 난간을 두 번 두드리고 잠깐 쉬었다. 하음은 그 쉼표를 빼앗지 않고 같은 간격으로 손끝을 맞췄다. 둘 사이의 박자는 위로가 아니라, 학범이 먼저 시작한 대답이 되었다.",
    "nextId": "day10-haeum-prelock-reflection",
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
      },
      {
        "type": "E",
        "target": "haeum",
        "effect": "heart",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day10-choice-lock-signal-text",
    "type": "choice",
    "choices": [
      "욱현의 접힌 노트에 답한다.",
      "재성의 방송 신호를 따라간다.",
      "준혁과 지도의 마지막 선을 긋는다."
    ],
    "rewards": [
      {
        "affection": {
          "ukhyun": 3
        },
        "flags": [
          "ukhyun_route_seed",
          "route_lock_ukhyun",
          "day10_locked_ukhyun"
        ]
      },
      {
        "affection": {
          "jaeseong": 3
        },
        "flags": [
          "jaeseong_route_seed",
          "route_lock_jaeseong",
          "day10_locked_jaeseong"
        ]
      },
      {
        "affection": {
          "junhyeok": 3
        },
        "flags": [
          "junhyeok_route_seed",
          "route_lock_junhyeok",
          "day10_locked_junhyeok"
        ]
      }
    ],
    "next": [
      "day10-lock-ukhyun",
      "day10-lock-jaeseong",
      "day10-lock-junhyeok"
    ]
  },
  {
    "id": "day10-lock-ukhyun",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "학범은 접힌 노트를 끝까지 펼쳐, 빈 줄 첫머리에 자기 글씨를 남겼다. 욱현은 말없이 그 페이지가 다시 접히지 않게 손바닥으로 눌렀다. 늦은 답장은 숨지 않고 책상 위에 놓였다.",
    "nextId": "day10-ukhyun-prelock-reflection",
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
      },
      {
        "type": "E",
        "target": "ukhyun",
        "effect": "heart",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day10-lock-jaeseong",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "재성",
    "role": "방송부",
    "place": "방송 신호",
    "text": "학범은 방송 콘솔의 전원을 끄고 재성 쪽으로 돌아섰다. 재성은 습관처럼 장난 멘트를 올리려다 입을 다물고, 헤드셋을 책상 위에 내려놓았다. 꺼진 마이크 앞에서만 들리는 목소리가 남았다.",
    "nextId": "day10-jaeseong-prelock-reflection",
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
      },
      {
        "type": "E",
        "target": "jaeseong",
        "effect": "heart",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day10-lock-junhyeok",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "학범은 지도에서 가장 짧은 선을 지우고, 준혁이 서 있는 난간 쪽으로 돌아가는 길을 새로 그었다. 준혁은 자를 내려놓고 그 삐뚤어진 선을 그대로 받아들였다. 비효율적인 경로가 처음으로 목적지가 되었다.",
    "nextId": "day10-junhyeok-prelock-reflection",
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
      },
      {
        "type": "E",
        "target": "junhyeok",
        "effect": "heart",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day10-choice-lock-field-night",
    "type": "choice",
    "choices": [
      "상욱과 현장을 다시 달린다.",
      "도훈과 밤의 CCTV를 확인한다.",
      "윤호와 젖은 종이를 지킨다."
    ],
    "rewards": [
      {
        "affection": {
          "sanguk": 3
        },
        "flags": [
          "sanguk_route_seed",
          "route_lock_sanguk",
          "day10_locked_sanguk"
        ]
      },
      {
        "affection": {
          "dohun": 3
        },
        "flags": [
          "dohun_route_seed",
          "route_lock_dohun",
          "day10_locked_dohun"
        ]
      },
      {
        "affection": {
          "yunho": 3
        },
        "flags": [
          "yunho_route_seed",
          "route_lock_yunho",
          "day10_locked_yunho"
        ]
      }
    ],
    "next": [
      "day10-lock-sanguk",
      "day10-lock-dohun",
      "day10-lock-yunho"
    ]
  },
  {
    "id": "day10-lock-sanguk",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "학범이 고개를 들자 상욱은 반사적으로 뛰려다 운동화 앞코를 바닥에 붙였다. 그는 숨을 고르고 한 걸음만 다가와 멈췄다. 학범이 남은 거리를 걸어오도록 기다리는 몸이 대답이 되었다.",
    "nextId": "day10-sanguk-prelock-reflection",
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
      },
      {
        "type": "E",
        "target": "sanguk",
        "effect": "heart",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day10-lock-dohun",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "도훈",
    "role": "정보통",
    "place": "CCTV 시간",
    "text": "학범은 도훈이 건네려던 영수증 장난을 조용히 접어 돌려주었다. 도훈은 웃음 값을 매기는 척하던 손을 주머니에서 빼고 빈 손바닥을 보였다. 아무것도 숨기지 않은 손이 먼저 떨렸다.",
    "nextId": "day10-dohun-prelock-reflection",
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
      },
      {
        "type": "E",
        "target": "dohun",
        "effect": "heart",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day10-lock-yunho",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "마른 종이",
    "text": "학범은 ‘윤호야’ 하고 이름을 먼저 불렀다. 윤호는 반사적으로 뒤에 서려던 발을 멈추고, 학범의 옆자리로 한 칸 움직였다. 후배라는 거리 대신 나란히 선 어깨가 대답했다.",
    "nextId": "day10-yunho-prelock-reflection",
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
      },
      {
        "type": "E",
        "target": "yunho",
        "effect": "heart",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day10-hyeongyeom-prelock-reflection",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸과 보낸 시간은 늘 기다림의 모양을 하고 있었다. 학범은 그 기다림을 더 오래 시험하지 않기로 하고, 비가 오지 않는 날에도 먼저 같은 길로 걸어가겠다고 적었다.",
    "nextId": "day10-locked-merge",
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
    "id": "day10-ukhyun-prelock-reflection",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현과의 시간은 접힌 종이처럼 조용했지만, 펼치면 반드시 읽어야 할 줄이 있었다. 학범은 대답을 미루지 않겠다는 뜻으로 노트 모서리를 접지 않은 채 남겨 두었다.",
    "nextId": "day10-locked-merge",
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
    "id": "day10-jaeseong-prelock-reflection",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "재성",
    "role": "방송부",
    "place": "방송 신호",
    "text": "재성과의 시간은 늘 소리가 먼저였지만, 학범은 꺼진 마이크 앞에서 더 선명해지는 목소리를 배웠다. 그래서 대답은 방송용 멘트가 아니라 단 한 사람에게 건네는 낮은 문장이 되었다.",
    "nextId": "day10-locked-merge",
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
    "id": "day10-sangwon-prelock-reflection",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "상원과의 시간은 빽빽한 기록 사이에 남겨 둔 여백으로 학범을 불렀다. 학범은 그 여백을 지우지 않고, 누가 증인이 되어 줄지 스스로 쓰겠다고 마음먹었다.",
    "nextId": "day10-locked-merge",
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
    "id": "day10-sanguk-prelock-reflection",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "상욱과의 시간은 늘 달려오는 발소리로 시작했지만, 오늘 학범에게 필요한 것은 도착보다 멈춤이었다. 학범은 상욱이 기다려 준 자리까지 직접 걸어가기로 했다.",
    "nextId": "day10-locked-merge",
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
    "id": "day10-junhyeok-prelock-reflection",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "준혁과의 시간은 틀리지 않는 선을 찾는 일처럼 보였지만, 학범은 이제 일부러 돌아가는 길을 고를 수 있었다. 그 길 끝에 준혁이 있다면 효율은 더 이상 기준이 아니었다.",
    "nextId": "day10-locked-merge",
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
    "id": "day10-dohun-prelock-reflection",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "도훈",
    "role": "정보통",
    "place": "CCTV 시간",
    "text": "도훈과의 시간은 농담으로 포장된 확인이었다. 학범은 웃음값을 치르는 대신 솔직한 문장 하나를 내밀기로 했고, 도훈이 그것을 놀리지 않을 거라고 믿었다.",
    "nextId": "day10-locked-merge",
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
    "id": "day10-haeum-prelock-reflection",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "하음",
    "role": "음악실 담당",
    "place": "문소리의 박자",
    "text": "하음과의 시간은 흔들리는 숨을 들키고도 무너지지 않는 법을 알려 주었다. 학범은 누군가의 박자에 따라가는 대신, 자신이 먼저 낸 박자에 하음을 초대하기로 했다.",
    "nextId": "day10-locked-merge",
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
    "id": "day10-yunho-prelock-reflection",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "마른 종이",
    "text": "윤호와의 시간은 뒤에서 기다리는 발끝으로 남아 있었다. 학범은 그 거리를 그대로 두지 않기로 하고, 선배라는 호칭보다 먼저 윤호의 이름을 부르겠다고 정했다.",
    "nextId": "day10-locked-merge",
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
    "id": "day10-locked-merge",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "학범",
    "role": "독백",
    "place": "아카이브실",
    "text": "이름 하나를 마음속에 더 깊게 적은 뒤에도, 사건은 끝나지 않았다. 하지만 학범은 이제 빈칸이 무섭지 않았다. 누군가를 선택한다는 건, 나머지를 버리는 일이 아니라 자신이 어디에 서 있는지 밝히는 일이었다.",
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
    "id": "day10-final-message",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "현겸",
    "role": "동급생",
    "place": "메시지",
    "text": "그날 밤, 현겸에게서 짧은 메시지가 왔다. “학범아, 네가 어디를 보든 난 네가 도망치지 않았다는 걸 알아.” 학범은 답장을 쓰기 전에 오래 숨을 골랐다."
  },
  {
    "id": "day10-closing",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-10",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브실",
    "text": "축제 전야의 마지막 기록에는 날짜도, 이름도 없었다. 다만 “내일 돌려줄 것”이라는 문장 아래에 새 줄이 생겼다. 학범은 그 줄에 자신이 고른 이름을 적었다.",
    "nextId": "day11-chapter-card",
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
  }
];
