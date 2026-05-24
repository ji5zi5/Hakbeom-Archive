export const day10Scenes = [
  {
    "id": "day10-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-10",
    "sectionTitle": "Day 10: 한 사람을 기다리는 방과 후",
    "mood": "confession",
    "text": "Day 10 · 한 사람을 기다리는 방과 후",
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
    "text": "축제 전야의 옥상은 이상할 정도로 조용했다. 학범은 아홉 개의 이름을 바라보다가, 오늘은 모두에게 다정한 척하기보다 자신의 마음을 먼저 정리해야 한다는 걸 알았다.",
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
    "id": "day10-moe-hyeongyeom-waiting-text",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-10",
    "name": "현겸",
    "role": "메시지",
    "place": "학생회 기록실",
    "text": "현겸의 메시지는 짧았다. “오늘 같이 걸을래?” 그런데 그 뒤에 붙은 “네가 늦어도 기다릴게”라는 문장이, 학범의 방과 후를 먼저 붙잡았다.",
    "effect": {
      "target": "hyeongyeom",
      "type": "heart"
    },
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
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
    "id": "day10-moe-jaeseong-private-call",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-10",
    "name": "재성",
    "role": "메시지",
    "place": "학생회 기록실",
    "text": "재성은 단체방이 아니라 개인 메시지로 보냈다. “방송실 마이크, 네 목소리만 안 잡혔어. 그러니까 공개 말고 비공개로 다시 와.”",
    "effect": {
      "target": "jaeseong",
      "type": "chatter"
    },
    "directives": [
      {
        "type": "E",
        "target": "jaeseong",
        "effect": "chatter",
        "motion": "bounce"
      }
    ]
  },
  {
    "id": "day10-moe-yunho-rooftop-call",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-10",
    "name": "윤호",
    "role": "메시지",
    "place": "학생회 기록실",
    "text": "윤호의 알림은 마지막에 도착했다. “선배, 옥상에서 기다릴게요.” 학범은 그 문장이 부탁인지 고백 직전의 숨인지 한참 구분하지 못했다.",
    "effect": {
      "target": "yunho",
      "type": "ellipsis"
    },
    "directives": [
      {
        "type": "E",
        "target": "yunho",
        "effect": "ellipsis",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day10-choice-lock-group",
    "type": "choice",
    "choices": [
      "비와 기록의 약속을 떠올린다.",
      "글과 목소리의 신호를 떠올린다.",
      "방과 후와 밤 메시지의 준비 기록을 떠올린다."
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
          "hyeongyeom": 30
        },
        "flags": [
          "hyeongyeom_route_seed",
          "route_lock_hyeongyeom",
          "day10_locked_hyeongyeom"
        ]
      },
      {
        "affection": {
          "sangwon": 30
        },
        "flags": [
          "sangwon_route_seed",
          "route_lock_sangwon",
          "day10_locked_sangwon"
        ]
      },
      {
        "affection": {
          "haeum": 30
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
    "text": "학범이 우산 아래로 한 걸음 들어오자 현겸의 시선이 젖은 어깨에 오래 머물렀다. 현겸은 손잡이를 학범 쪽으로 기울이며 낮게 말했다. “혼자 돌아가지 마. 오늘은 내가 먼저 기다렸으니까.”",
    "variants": [
      {
        "requiredFlags": [
          "hyeongyeom_date_day9_private_signal"
        ],
        "text": "학범이 우산 아래로 들어오자 현겸은 전날 같이 잡았던 손잡이를 다시 내밀었다. “어제 네가 안 놓았잖아. 그래서 나도 오늘은 숨길 생각 없어.”"
      }
    ],
    "nextId": "day10-hyeongyeom-lock-reply",
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
    "id": "day10-hyeongyeom-lock-reply",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "“네가 나한테 와 준 거, 오늘은 우산 때문이라고 안 할래.” 현겸은 손잡이를 조금 내려 학범의 눈을 마주했다. “내일 비가 안 와도 기다릴게. 대신 늦으면, 나 조금 질투할 거야.”",
    "effect": {
      "target": "hyeongyeom",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day10-hyeongyeom-prelock-reflection"
  },
  {
    "id": "day10-lock-sangwon",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "문화제 기록집",
    "text": "학범이 카드의 빈칸에 손을 얹자 상원은 펜 끝을 멈췄다. 그는 선택을 말로 흘려보내지 않겠다는 듯 학범의 이름 옆에 얇은 선을 남겼다. 지우지 않을 기억이 조용히 기록 속으로 들어갔다.",
    "nextId": "day10-sangwon-lock-reply",
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
    "id": "day10-sangwon-lock-reply",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "문화제 기록집",
    "text": "“확정이라고 적고 싶어.” 상원은 펜을 쥔 채 웃지 못했다. “하지만 네가 직접 말하기 전까지는 빈칸으로 둘게. 그 정도는 배울 수 있어.”",
    "effect": {
      "target": "sangwon",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "sangwon",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day10-sangwon-prelock-reflection"
  },
  {
    "id": "day10-lock-haeum",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "하음",
    "role": "음악실 담당",
    "place": "문소리의 박자",
    "text": "음악실의 마지막 박자가 잦아든 뒤에도 하음은 손끝을 거두지 않았다. 학범이 숨을 고르는 사이, 같은 간격의 정적이 둘 사이를 더 좁혔다. 위로처럼 시작한 박자는 대답을 기다리는 숨이 되었다.",
    "nextId": "day10-haeum-lock-reply",
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
    "id": "day10-haeum-lock-reply",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "하음",
    "role": "음악실 담당",
    "place": "문소리의 박자",
    "text": "“대답을 빨리 안 해도 돼.” 하음은 마지막 박자를 비워 두었다. “다만 오늘은 네 침묵도 나한테 들려. 그래서 조금 기뻐.”",
    "effect": {
      "target": "haeum",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "haeum",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day10-haeum-prelock-reflection"
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
          "ukhyun": 30
        },
        "flags": [
          "ukhyun_route_seed",
          "route_lock_ukhyun",
          "day10_locked_ukhyun"
        ]
      },
      {
        "affection": {
          "jaeseong": 30
        },
        "flags": [
          "jaeseong_route_seed",
          "route_lock_jaeseong",
          "day10_locked_jaeseong"
        ]
      },
      {
        "affection": {
          "junhyeok": 30
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
    "text": "학범이 돌려주려던 접힌 노트를 내밀자 욱현은 받아 가지 않았다. 그는 아직 읽지 않은 문장이 거기 있다는 듯 노트 가장자리를 손끝으로 눌렀다. 도서관 불빛 아래, 돌려주지 않은 침묵이 학범을 붙잡았다.",
    "nextId": "day10-ukhyun-lock-reply",
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
    "id": "day10-ukhyun-lock-reply",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "“늦게 와도 괜찮아.” 욱현은 노트 한쪽을 펴서 학범 쪽으로 밀었다. “대신 오면 말해. 내가 맞혔다고 넘어가지 말고.”",
    "effect": {
      "target": "ukhyun",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "ukhyun",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day10-ukhyun-prelock-reflection"
  },
  {
    "id": "day10-lock-jaeseong",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "재성",
    "role": "방송부",
    "place": "방송 신호",
    "text": "학범이 마이크를 꺼 버리자 재성의 장난도 함께 멈췄다. 그는 웃음을 방송실 밖에 두고, 비공개 호출처럼 낮은 목소리로 학범의 이름을 불렀다. 스피커에 남지 않을 떨림만 유리창 안쪽에 고였다.",
    "nextId": "day10-jaeseong-lock-reply",
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
    "id": "day10-jaeseong-lock-reply",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "재성",
    "role": "방송부",
    "place": "방송 신호",
    "text": "“방송 멘트로 하면 쉬운데.” 재성은 꺼진 마이크를 손끝으로 밀어냈다. “지금은 네가 듣는 한 사람이라서, 이상하게 떨리네.”",
    "effect": {
      "target": "jaeseong",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "jaeseong",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day10-jaeseong-prelock-reflection"
  },
  {
    "id": "day10-lock-junhyeok",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "지도 위 빈칸",
    "text": "학범이 최단 경로를 고르려는 순간, 준혁은 지도 위 자를 비스듬히 내려놓아 길을 막았다. 계산 밖의 행동이라는 걸 알면서도 그는 손을 떼지 못했다. 오차라고 부르지 못한 감정이 목적지를 바꿨다.",
    "nextId": "day10-junhyeok-lock-reply",
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
    "id": "day10-junhyeok-lock-reply",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "지도 위 빈칸",
    "text": "“예상 밖이야.” 준혁은 지도를 접지 못한 채 말했다. “그런데 싫지 않으면 변수라고 부르면 안 되겠지. 너라서 바뀐 거니까.”",
    "effect": {
      "target": "junhyeok",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "junhyeok",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day10-junhyeok-prelock-reflection"
  },
  {
    "id": "day10-choice-lock-field-night",
    "type": "choice",
    "choices": [
      "상욱과 준비 장소를 다시 달린다.",
      "도훈과 밤의 매점 협찬표를 확인한다.",
      "윤호와 젖은 종이를 지킨다."
    ],
    "rewards": [
      {
        "affection": {
          "sanguk": 30
        },
        "flags": [
          "sanguk_route_seed",
          "route_lock_sanguk",
          "day10_locked_sanguk"
        ]
      },
      {
        "affection": {
          "dohun": 30
        },
        "flags": [
          "dohun_route_seed",
          "route_lock_dohun",
          "day10_locked_dohun"
        ]
      },
      {
        "affection": {
          "yunho": 30
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
    "text": "상욱은 이름이 불리자마자 뛰어왔고, 학범의 손목 앞에서 가까스로 멈췄다. 붙잡기 전의 손끝이 떨렸지만 그는 억지로 숨을 삼켰다. 놓기 싫다는 말만은 멈추지 못해 곧장 학범에게 닿았다.",
    "nextId": "day10-sanguk-lock-reply",
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
    "id": "day10-sanguk-lock-reply",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "“나 지금 엄청 뛰고 싶은데 참는 중이야.” 상욱은 손목 앞에서 멈춘 손을 주먹으로 접었다. “네가 오라고 하면 그때 갈게. 제대로.”",
    "effect": {
      "target": "sanguk",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "sanguk",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day10-sanguk-prelock-reflection"
  },
  {
    "id": "day10-lock-dohun",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "도훈",
    "role": "정보통",
    "place": "매점 쿠폰 시간",
    "text": "편의점 불빛 아래에서 도훈의 농담이 처음으로 끊겼다. 그는 영수증을 만지작거리다 웃지 못한 채 학범이 누구와 돌아왔는지 묻지 않았다. 대신 질투가 묻은 침묵만 빈 손바닥에 남겼다.",
    "nextId": "day10-dohun-lock-reply",
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
    "id": "day10-dohun-lock-reply",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "도훈",
    "role": "정보통",
    "place": "매점 쿠폰 시간",
    "text": "“야, 지금 웃으면 안 되는 타이밍이지.” 도훈은 영수증을 접다 말고 고개를 돌렸다. “그럼 안 웃을게. 나 진짜로 네가 오길 기다렸어.”",
    "effect": {
      "target": "dohun",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "dohun",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day10-dohun-prelock-reflection"
  },
  {
    "id": "day10-lock-yunho",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "마른 종이",
    "text": "학범이 먼저 이름을 부르자 윤호는 후배답게 반 발 물러섰다. 그런데도 옥상 난간에 남은 선배라는 호칭이 더 늦게, 더 가까이 따라왔다. 부르면 바로 갈 수 있다는 대답이 숨처럼 오래 머물렀다.",
    "nextId": "day10-yunho-lock-reply",
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
    "id": "day10-yunho-lock-reply",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "마른 종이",
    "text": "“선배가 제 이름을 먼저 불러준 거, 저장해도 돼요?” 윤호는 바로 고개를 저었다. “아니요, 그냥 기억할게요. 후배 말고 저로.”",
    "effect": {
      "target": "yunho",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "yunho",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day10-yunho-prelock-reflection"
  },
  {
    "id": "day10-hyeongyeom-prelock-reflection",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-10",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "학범은 우산 손잡이에 손을 겹쳤다. “내일은 내가 먼저 갈게. 비 핑계 없어도.” 현겸은 대답 대신 손가락을 조금 더 말아 쥐었고, 그 조용한 욕심이 오늘의 선택을 확정했다.",
    "variants": [
      {
        "requiredFlags": [
          "hyeongyeom_date_day9_private_signal",
          "hyeongyeom_phone_day9_after_date"
        ],
        "text": "학범은 전날 밤 현겸이 보낸 “내일은 네가 먼저 잡아”를 떠올렸다. 그래서 이번엔 말보다 먼저 손잡이를 잡았다. 현겸은 웃음을 참지 못하고 “진짜 먼저 왔네”라고 속삭였다."
      },
      {
        "requiredFlags": [
          "hyeongyeom_phone_day9_after_date"
        ],
        "text": "휴대폰 화면에 남은 현겸의 답장이 아직 따뜻했다. 학범은 늦게 답하지 않겠다고 마음먹고, 바로 옆의 손잡이를 먼저 잡았다."
      }
    ],
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
    "text": "접힌 노트 모서리가 책상 끝에서 학범 쪽을 향해 있었다. 돌려받지 못한 문장마다 욱현의 시선이 남아 있었고, 학범은 읽지 않은 줄을 더 미루지 않겠다는 뜻으로 그 모서리를 그대로 두었다.",
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
    "text": "마이크 불이 꺼진 뒤에도 재성의 낮은 목소리는 방송실 유리에 남아 있었다. 학범은 모두에게 들리는 대답 대신, 그 비공개 목소리에만 닿는 문장을 고르기로 했다.",
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
    "place": "문화제 기록집",
    "text": "준비 명단의 빈칸이 상원의 손끝 아래에서 멈췄다. 학범은 자신의 선택을 기억으로 남기려는 그 고집을 피하지 않고, 빈칸에 스스로 이름을 남기겠다고 마음먹었다.",
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
    "text": "체육관 문 앞에는 상욱이 급히 멈춘 운동화 자국이 남아 있었다. 학범은 붙잡기 전 손목 앞에서 버틴 그 직진을 외면하지 않고, 놓고 싶지 않은 마음 쪽으로 걸어가기로 했다.",
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
    "role": "문화제 동선 담당",
    "place": "지도 위 빈칸",
    "text": "지도 위 빨간 선 하나가 최단 경로를 일부러 막고 있었다. 학범은 준혁이 통제 밖으로 밀려난 감정을 오차라고 부르지 못한다면, 그 길도 답이 될 수 있다고 생각했다.",
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
    "place": "매점 쿠폰 시간",
    "text": "편의점 불빛 아래, 도훈이 웃지 못하고 접은 영수증이 학범의 손에 남았다. 학범은 그가 삼킨 질투를 장난값으로 넘기지 않기로 하고, 불빛 아래에 솔직한 문장을 남기기로 했다.",
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
    "text": "음악실 정적 속에서 하음이 세던 박자가 학범의 숨과 겹쳤다. 학범은 가까워지는 침묵을 피하지 않고, 자신이 먼저 낸 쉼표에 하음을 초대하기로 했다.",
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
    "text": "옥상 문 앞에는 윤호가 한 걸음 뒤에서 기다린 발끝의 자리가 남아 있었다. 학범은 선배라고 부르는 목소리에만 숨지 않고, 부르면 바로 올 그 마음을 자신의 선택으로 마주하기로 했다.",
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
    "place": "학생회 기록실",
    "text": "이름 하나를 마음속에 더 깊게 적은 뒤에도, 문화제 준비는 끝나지 않았다. 하지만 학범은 이제 빈칸이 무섭지 않았다. 누군가를 선택한다는 건, 나머지를 버리는 일이 아니라 자신이 어디에 서 있는지 밝히는 일이었다.",
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
    "place": "학생회 기록실",
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
