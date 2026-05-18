export const day8Scenes = [
  {
    "id": "day8-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-8",
    "sectionTitle": "Day 8: 문화제 조 편성",
    "mood": "tense",
    "text": "Day 8 · 문화제 조 편성",
    "nextId": "day8-opening",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day8-opening",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-8",
    "name": "학범",
    "role": "독백",
    "place": "학생회 기록실",
    "text": "축제 리허설 공지가 게시판에 붙자 학교는 종이꽃 냄새와 케이블 소리로 들떴다. 기록집의 빈 페이지도 더 이상 업무표처럼 보이지 않았다. 내일을 앞둔 약속들이 그 여백을 조용히 두드렸다.",
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
    "id": "day8-moe-sangwon-pair-form",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "상원은 조 편성표에서 학범 이름 옆 빈칸을 오래 바라봤다. “네가 원하지 않는 조합은 쓰지 않을게. 대신 원하는 쪽을 숨기면, 그건 내가 못 고쳐.”",
    "effect": {
      "target": "sangwon",
      "type": "ellipsis"
    },
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      },
      {
        "type": "E",
        "target": "sangwon",
        "effect": "ellipsis",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day8-moe-sanguk-name-tag",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 명찰 두 개를 들고 뛰어오다 학범 앞에서 멈췄다. “네 이름 옆에 내 이름 붙이면 너무 티 나? 티 나도 좋긴 한데, 먼저 물어보려고.”",
    "effect": {
      "target": "sanguk",
      "type": "heart"
    },
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/gym-corridor-evening.png",
        "transition": "fade-in"
      },
      {
        "type": "E",
        "target": "sanguk",
        "effect": "heart",
        "motion": "bounce"
      }
    ]
  },
  {
    "id": "day8-moe-dohun-coupon-reserve",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "도훈",
    "role": "매점 정보통",
    "place": "매점 앞",
    "text": "도훈은 협찬 쿠폰 더미에서 학범이 좋아하는 맛만 따로 빼 두었다. “우연히 남은 거야. 네가 좋아하는 거라 남긴 건 아니고… 아, 그렇게 보지 마.”",
    "effect": {
      "target": "dohun",
      "type": "blush"
    },
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/convenience-store-night.png",
        "transition": "fade-in"
      },
      {
        "type": "E",
        "target": "dohun",
        "effect": "blush",
        "motion": "shake"
      }
    ]
  },
  {
    "id": "day8-morning-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-8",
    "name": "문화제 준비 채팅방",
    "role": "메시지",
    "text": "축제 전야 아침, 문화제 준비 채팅방에는 보고보다 약속에 가까운 말들이 도착했다.",
    "messages": [
      {
        "from": "sangwon",
        "text": "리허설 동선표는 준비했어. 그래도 내일 네 선택을 내가 대신 정리하진 않을게."
      },
      {
        "from": "dohun",
        "text": "매점 앞 조명 켜지는 시간 알아냈다. 필요하면 불러. 장난치기 전에 진짜로 물어볼게."
      },
      {
        "from": "haeum",
        "text": "음악실 메트로놈 가져갈게. 내일은 네가 먼저 박자를 정해 줘."
      },
      {
        "from": "hakbeom",
        "text": "각자 고마워. 오늘 받은 말들은 준비 기록 칸이 아니라 약속 칸에 적어 둘게."
      }
    ],
    "nextId": "day8-choice-morning",
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day8-choice-morning",
    "type": "choice",
    "choices": [
      "기록 쪽 준비 기록을 먼저 정리한다.",
      "방과 후 쪽 준비 기록을 먼저 확인한다.",
      "감정 쪽 준비 기록을 먼저 묻는다."
    ],
    "rewards": [
      {
        "affection": {
          "sangwon": 10,
          "junhyeok": 10
        },
        "flags": [
          "day8_records_first"
        ]
      },
      {
        "affection": {
          "sanguk": 10,
          "dohun": 10,
          "yunho": 10
        },
        "flags": [
          "day8_field_first"
        ]
      },
      {
        "affection": {
          "hyeongyeom": 10,
          "ukhyun": 10,
          "jaeseong": 10,
          "haeum": 10
        },
        "flags": [
          "day8_heart_first"
        ]
      }
    ],
    "next": [
      "day8-records-first",
      "day8-field-first",
      "day8-heart-first"
    ]
  },
  {
    "id": "day8-records-first",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-8",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "상원은 리허설 표 맨 아래에 “수정 금지”라고 적은 칸을 만들었다. 준혁은 가장 짧은 길 위에 작은 우회 표시를 더했다. 두 사람은 말없이, 내일 학범이 정답이 아닌 길을 골라도 지우지 않겠다고 약속했다.",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
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
        "effect": "question",
        "motion": "nod"
      }
    ],
    "nextId": "day8-merge-first"
  },
  {
    "id": "day8-field-first",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 무대 뒤 계단을 먼저 뛰어 내려갔다가 중간에서 돌아와 학범을 기다렸다. 도훈은 영수증 뒷면에 장난 없는 질문 하나를 적어 건넸고, 윤호는 옥상 열쇠를 두 손으로 내밀며 “내일은 선배 옆에 서도 돼요?”라고 물었다.",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/gym-corridor-evening.png",
        "transition": "fade-in"
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
        "effect": "chatter",
        "motion": "bounce"
      }
    ],
    "nextId": "day8-merge-first"
  },
  {
    "id": "day8-heart-first",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-8",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸은 비 예보가 없는데도 같은 하굣길을 말했고, 욱현은 늦은 답도 읽겠다고 노트에 적었다. 재성은 꺼진 마이크 앞에서만 할 말이 있다고 웃었고, 하음은 학범이 먼저 친 박자에 자기 손끝을 맞췄다.",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-courtyard-blue-hour.png",
        "transition": "fade-in"
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
    ],
    "nextId": "day8-merge-first"
  },
  {
    "id": "day8-merge-first",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-8",
    "name": "학범",
    "role": "독백",
    "place": "학생회 기록실",
    "text": "약속은 문화제 준비의 해답처럼 한곳으로 모이지 않았다. 오히려 저마다 다른 방향에서 학범을 불렀고, 학범은 이제 모두에게 같은 대답을 돌려줄 수 없다는 사실을 알았다.",
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
    "id": "day8-hyeongyeom-beat-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-8",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸은 비 예보가 없는 하늘을 보고도 접은 우산을 들고 왔다. “내일 비가 안 와도 같은 길로 가자.” 부탁은 작았지만, 학범의 내일 한쪽을 조용히 예약했다.",
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
        "effect": "ellipsis",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day8-hyeongyeom-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "우산은 더 이상 준비 기록이 아니라 약속처럼 책상에 기대어 있었다. 학범은 그 손잡이를 보며, 누군가와 천천히 걷고 싶은 마음을 미루지 못했다.",
    "variants": [
      {
        "requiredFlags": [
          "hyeongyeom_route_seed"
        ],
        "text": "이미 현겸 쪽으로 마음이 기울었던 탓일까. 학범은 같은 우산의 약속 옆의 작은 흔적보다 현겸의 숨소리에 먼저 반응했다."
      }
    ],
    "effect": {
      "target": "hyeongyeom",
      "type": "question"
    }
  },
  {
    "id": "day8-hyeongyeom-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "“네가 먼저 오지 않아도 돼. 그래도 이번엔 네가 생각나서 걷고 싶어.” 현겸은 기다림을 강요하지 않고 길만 남겼다."
  },
  {
    "id": "day8-hyeongyeom-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸은 돌아서기 전 “내일 사람 많으면 내 쪽으로 와”라고 했다. 피난처가 아니라, 떠올려 달라는 말이었다."
  },
  {
    "id": "day8-hyeongyeom-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-8",
    "name": "현겸",
    "role": "메시지",
    "text": "현겸에게서 축제 전야의 화면에는 내일을 부탁하는 말들이 켜졌다.",
    "messages": [
      {
        "from": "hyeongyeom",
        "text": "비 안 와도 같은 길. 기억해 줘."
      },
      {
        "from": "hakbeom",
        "text": "응. 우산 없어도 기억할게."
      },
      {
        "from": "hyeongyeom",
        "text": "그래도 나는 가져갈래. 핑계가 있으면 덜 떨리니까."
      }
    ],
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day8-hyeongyeom-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "밤이 되자 학범은 우산이 필요 없는 날에도 현겸을 생각했다. 약속은 비를 핑계로 삼지 않고도 남을 수 있었다.",
    "effect": {
      "target": "hyeongyeom",
      "type": "ellipsis"
    }
  },
  {
    "id": "day8-ukhyun-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "욱현은 노트 한쪽에 “답이 늦어도 읽음”이라고 적어 건넸다. “대신 안 읽은 척하지 마.” 무표정한 부탁이 축제 전야의 소음 속에서 또렷했다.",
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
        "effect": "question",
        "motion": "nod"
      }
    ],
    "effect": {
      "target": "ukhyun",
      "type": "question"
    }
  },
  {
    "id": "day8-ukhyun-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "접히지 않은 노트는 학범의 책상 위에서 계속 펼쳐져 있었다. 욱현은 답을 재촉하지 않았지만, 흐려지게 두지도 않겠다는 얼굴이었다.",
    "variants": [
      {
        "requiredFlags": [
          "ukhyun_route_seed"
        ],
        "text": "이미 욱현 쪽으로 마음이 기울었던 탓일까. 학범은 접힌 노트 옆의 작은 흔적보다 욱현의 숨소리에 먼저 반응했다."
      }
    ]
  },
  {
    "id": "day8-ukhyun-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "“네가 늦게 말해도 돼. 나는 늦게라도 읽을게.” 짧은 문장이 학범의 미룬 마음을 직접 겨눴다."
  },
  {
    "id": "day8-ukhyun-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "욱현은 별표 대신 작은 빈 사각형을 그렸다. “내일 네가 직접 채워. 내가 대신 체크하지 않을게.”",
    "effect": {
      "target": "ukhyun",
      "type": "ellipsis"
    }
  },
  {
    "id": "day8-ukhyun-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-8",
    "name": "욱현",
    "role": "메시지",
    "text": "욱현에게서 축제 전야의 화면에는 내일을 부탁하는 말들이 켜졌다.",
    "messages": [
      {
        "from": "ukhyun",
        "text": "답 늦어도 읽을게. 안 온 척은 안 할 거야."
      },
      {
        "from": "hakbeom",
        "text": "늦지 않게 해볼게."
      },
      {
        "from": "ukhyun",
        "text": "늦어도 돼. 대신 네 문장으로 와."
      }
    ],
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day8-ukhyun-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "학범은 노트를 닫지 못했다. 누군가 기다리겠다고 말하는 방식이 이렇게 조용하고 고집스러울 수 있다는 걸 알았다."
  },
  {
    "id": "day8-jaeseong-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "재성은 방송실 리허설 대본에서 자기 멘트를 지우고 마이크 전원을 껐다. “내일 네 앞에서는 이 목소리로 말할게. 송출 안 되는 쪽.”",
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
        "effect": "chatter",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day8-jaeseong-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "빨간 cue 불이 꺼지자 재성의 농담도 낮아졌다. 학범은 그가 무대 밖의 진심을 따로 아껴 두고 있었다는 걸 보았다.",
    "variants": [
      {
        "requiredFlags": [
          "jaeseong_route_seed"
        ],
        "text": "이미 재성 쪽으로 마음이 기울었던 탓일까. 학범은 방송실 신호 옆의 작은 흔적보다 재성의 숨소리에 먼저 반응했다."
      }
    ]
  },
  {
    "id": "day8-jaeseong-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "“사람들 앞에서 잘하는 말 말고, 너한테만 들리는 말.” 재성은 웃었지만 이번엔 도망치지 않았다.",
    "effect": {
      "target": "jaeseong",
      "type": "ellipsis"
    }
  },
  {
    "id": "day8-jaeseong-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "재성은 녹음본을 만들지 않았다. “내일 네 표정은 저장 말고 기억할래.”"
  },
  {
    "id": "day8-jaeseong-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-8",
    "name": "재성",
    "role": "메시지",
    "text": "재성에게서 축제 전야의 화면에는 내일을 부탁하는 말들이 켜졌다.",
    "messages": [
      {
        "from": "jaeseong",
        "text": "내일 마이크 없는 목소리 예약 가능?"
      },
      {
        "from": "hakbeom",
        "text": "방송실 밖이면 가능할지도."
      },
      {
        "from": "jaeseong",
        "text": "좋아. 청취자 한 명이면 충분하네."
      }
    ],
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day8-jaeseong-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "학범은 꺼진 마이크를 보고도 재성의 목소리를 떠올렸다. 약속은 들리는 크기가 아니라 누구에게 향하는지로 정해졌다."
  },
  {
    "id": "day8-sangwon-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "상원은 축제 동선표 아래에 학범의 선택 칸을 만들고, 그 옆에 “수정하지 않음”이라고 썼다. “네가 고르면 내가 맞춰 적을게. 고르게 만들진 않을게.”",
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
    "id": "day8-sangwon-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "그는 평소처럼 표를 완성하려다 학범의 빈칸 앞에서 멈췄다. 완벽함보다 신뢰를 택하는 손이 낯설게 떨렸다.",
    "variants": [
      {
        "requiredFlags": [
          "sangwon_route_seed"
        ],
        "text": "이미 상원 쪽으로 마음이 기울었던 탓일까. 학범은 문화제 기록집 옆의 작은 흔적보다 상원의 숨소리에 먼저 반응했다."
      }
    ],
    "effect": {
      "target": "sangwon",
      "type": "ellipsis"
    }
  },
  {
    "id": "day8-sangwon-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "“내 기록 밖에서 바뀌어도, 네 선택이면 남길게.” 상원은 자신에게 더 어려운 약속을 골랐다."
  },
  {
    "id": "day8-sangwon-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "상원은 수정테이프를 학범에게 맡겼다. “내일 내가 선 넘으면 지워.”"
  },
  {
    "id": "day8-sangwon-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-8",
    "name": "상원",
    "role": "메시지",
    "text": "상원에게서 축제 전야의 화면에는 내일을 부탁하는 말들이 켜졌다.",
    "messages": [
      {
        "from": "sangwon",
        "text": "네 선택은 지우지 않겠다. 방금 적고도 손이 근질거려."
      },
      {
        "from": "hakbeom",
        "text": "그 약속 믿어 볼게."
      },
      {
        "from": "sangwon",
        "text": "틀려도 네 글씨면 남길게."
      }
    ],
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day8-sangwon-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "학범은 통제하지 않겠다는 말이 상원에게 얼마나 무거운지 알았다. 그래서 그 약속은 어떤 기억보다 진하게 남았다.",
    "effect": {
      "target": "sangwon",
      "type": "heart"
    }
  },
  {
    "id": "day8-sanguk-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 계단을 두 칸씩 내려가다 중간에서 멈춰 학범을 기다렸다. “먼저 뛰어도 돌아올게. 네가 안 보이면 이긴 게 아니잖아.”",
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
        "effect": "ellipsis",
        "motion": "nod"
      }
    ],
    "effect": {
      "target": "sanguk",
      "type": "ellipsis"
    }
  },
  {
    "id": "day8-sanguk-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "그의 운동화 끈은 또 헐거웠지만, 오늘은 출발보다 돌아보는 속도가 빨랐다. 학범은 그 변화가 약속처럼 들렸다.",
    "variants": [
      {
        "requiredFlags": [
          "sanguk_route_seed"
        ],
        "text": "이미 상욱 쪽으로 마음이 기울었던 탓일까. 학범은 체육관 복도 옆의 작은 흔적보다 상욱의 숨소리에 먼저 반응했다."
      }
    ]
  },
  {
    "id": "day8-sanguk-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "“내일 네가 부르면 뛰고, 안 부르면 옆에서 걸을게. 어려운데 해볼게.” 상욱은 솔직하게 웃었다."
  },
  {
    "id": "day8-sanguk-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 무거운 소품을 내려놓고 학범 손에 가벼운 리본만 건넸다. “같이 들었다는 표시.”",
    "effect": {
      "target": "sanguk",
      "type": "heart"
    }
  },
  {
    "id": "day8-sanguk-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-8",
    "name": "상욱",
    "role": "메시지",
    "text": "상욱에게서 축제 전야의 화면에는 내일을 부탁하는 말들이 켜졌다.",
    "messages": [
      {
        "from": "sanguk",
        "text": "먼저 뛰어도 돌아와서 기다릴게. 진짜로."
      },
      {
        "from": "hakbeom",
        "text": "기다리는 거 어려워하지 않았어?"
      },
      {
        "from": "sanguk",
        "text": "어려워. 그래서 약속하는 거야."
      }
    ],
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day8-sanguk-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "학범은 빠른 마음이 천천히 배우는 장면을 보았다. 축제 전야의 약속은 결승선보다 돌아오는 길에 있었다."
  },
  {
    "id": "day8-junhyeok-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "도서관 지도 테이블",
    "text": "준혁은 무대 동선의 최단 경로에 X표를 치고 관객석 뒤로 도는 선을 그렸다. “정답은 저쪽인데, 네가 있을 가능성은 이쪽이 높아.”",
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
        "effect": "question",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day8-junhyeok-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "도서관 지도 테이블",
    "text": "그는 비효율이라는 말을 싫어하면서도 선을 지우지 않았다. 학범은 자신을 위해 남겨진 돌아가는 길을 오래 바라봤다.",
    "variants": [
      {
        "requiredFlags": [
          "junhyeok_route_seed"
        ],
        "text": "이미 준혁 쪽으로 마음이 기울었던 탓일까. 학범은 도서관 지도 옆의 작은 흔적보다 준혁의 숨소리에 먼저 반응했다."
      }
    ]
  },
  {
    "id": "day8-junhyeok-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "도서관 지도 테이블",
    "text": "“내일은 정답보다 네 위치를 먼저 볼게.” 준혁의 약속은 건조했지만, 그래서 더 피하지 않는 말처럼 들렸다.",
    "effect": {
      "target": "junhyeok",
      "type": "heart"
    }
  },
  {
    "id": "day8-junhyeok-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "도서관 지도 테이블",
    "text": "준혁은 지도 접는 법까지 바꿨다. 펼치면 가장 먼저 보이는 곳에 학범의 자리 표시가 있었다."
  },
  {
    "id": "day8-junhyeok-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-8",
    "name": "준혁",
    "role": "메시지",
    "text": "준혁에게서 축제 전야의 화면에는 내일을 부탁하는 말들이 켜졌다.",
    "messages": [
      {
        "from": "junhyeok",
        "text": "정답보다 네가 있는 길을 보겠다. 문장 이상한가?"
      },
      {
        "from": "hakbeom",
        "text": "아니. 알아들었어."
      },
      {
        "from": "junhyeok",
        "text": "그럼 됐어. 내일 지도는 접지 않을게."
      }
    ],
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day8-junhyeok-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "도서관 지도 테이블",
    "text": "학범은 길이 사람을 향할 수도 있다는 걸 배웠다. 준혁의 약속은 빠른 결론을 포기한 자리에 남았다."
  },
  {
    "id": "day8-dohun-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "도훈은 영수증 뒷면을 내밀었다. 앞면에는 시간, 뒷면에는 “내일 진짜로 괜찮냐고 묻기”라고 적혀 있었다. “웃지 마. 나도 안 웃을 거니까.”",
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
        "effect": "chatter",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day8-dohun-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "그는 장난을 참으려는 얼굴로 음료수 두 개를 책상에 올렸다. 정보값이라는 말은 나오지 않았다.",
    "variants": [
      {
        "requiredFlags": [
          "dohun_route_seed"
        ],
        "text": "이미 도훈 쪽으로 마음이 기울었던 탓일까. 학범은 밤의 편의점 옆의 작은 흔적보다 도훈의 숨소리에 먼저 반응했다."
      }
    ],
    "effect": {
      "target": "dohun",
      "type": "heart"
    }
  },
  {
    "id": "day8-dohun-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "“내일 농담하기 전에 한 번은 진심으로 물을게.” 도훈은 어렵게 말하고, 도망치듯 캔 따는 소리를 냈다."
  },
  {
    "id": "day8-dohun-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "도훈은 영수증을 구기지 않고 반듯하게 접었다. “이번 건 계산서 아님. 기억용.”"
  },
  {
    "id": "day8-dohun-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-8",
    "name": "도훈",
    "role": "메시지",
    "text": "도훈에게서 축제 전야의 화면에는 내일을 부탁하는 말들이 켜졌다.",
    "messages": [
      {
        "from": "dohun",
        "text": "내일 장난치기 전에 진짜로 물어볼게. 괜찮냐고."
      },
      {
        "from": "hakbeom",
        "text": "그럼 나도 진짜로 대답할게."
      },
      {
        "from": "dohun",
        "text": "큰일났네. 농담보다 어렵다."
      }
    ],
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day8-dohun-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "학범은 도훈이 농담을 멈춘 짧은 틈을 받았다. 그 틈이 내일 떠올려 달라는 그의 방식이었다.",
    "effect": {
      "target": "dohun",
      "type": "chatter"
    }
  },
  {
    "id": "day8-haeum-beat-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-8",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 메트로놈을 학범 쪽으로 돌려 놓았다. “내일은 네가 먼저 시작해. 내가 따라갈게.” 치유하는 사람의 손이 처음으로 기다렸다.",
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
    ],
    "effect": {
      "target": "haeum",
      "type": "heart"
    }
  },
  {
    "id": "day8-haeum-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "박자는 아직 울리지 않았는데도 음악실은 약속으로 가득 찼다. 학범은 누군가가 자기 속도를 맞춰 주겠다고 말하는 일을 가볍게 넘길 수 없었다.",
    "variants": [
      {
        "requiredFlags": [
          "haeum_route_seed"
        ],
        "text": "이미 하음 쪽으로 마음이 기울었던 탓일까. 학범은 문소리의 잔향 옆의 작은 흔적보다 하음의 숨소리에 먼저 반응했다."
      }
    ]
  },
  {
    "id": "day8-haeum-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "“네가 빠르면 빠른 대로, 느리면 느린 대로.” 하음은 웃었지만 자기 불안을 숨기지 않으려 손을 내려놓았다."
  },
  {
    "id": "day8-haeum-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 악보 위 빈 마디를 가리켰다. “여긴 네가 정해 줘. 내가 먼저 채우지 않을게.”",
    "effect": {
      "target": "haeum",
      "type": "chatter"
    }
  },
  {
    "id": "day8-haeum-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-8",
    "name": "하음",
    "role": "메시지",
    "text": "하음에게서 축제 전야의 화면에는 내일을 부탁하는 말들이 켜졌다.",
    "messages": [
      {
        "from": "haeum",
        "text": "내일 네 박자를 내가 따라갈게. 먼저 시작해 줘."
      },
      {
        "from": "hakbeom",
        "text": "틀리면?"
      },
      {
        "from": "haeum",
        "text": "같이 다시 맞추면 돼."
      }
    ],
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day8-haeum-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "학범은 처음으로 자기 박자를 남에게 부탁해도 된다고 느꼈다. 하음의 약속은 조용했지만, 빈 페이지 위에서 오래 울렸다."
  },
  {
    "id": "day8-yunho-beat-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-8",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 옥상 열쇠를 양손으로 내밀며 물었다. “선배, 내일은 뒤가 아니라 옆에 서고 싶어요.” 예의 바른 목소리 끝이 떨렸다.",
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
        "effect": "ellipsis",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day8-yunho-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "그는 후배 자리라는 말을 여러 번 삼켰다. 학범이 이름을 불러 주기 전에도, 오늘은 한 발 앞으로 나와 있었다.",
    "variants": [
      {
        "requiredFlags": [
          "yunho_route_seed"
        ],
        "text": "이미 윤호 쪽으로 마음이 기울었던 탓일까. 학범은 비 갠 옥상 옆의 작은 흔적보다 윤호의 숨소리에 먼저 반응했다."
      }
    ]
  },
  {
    "id": "day8-yunho-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "“불편하면 물러날게요. 그래도 한 번은 말하고 싶었어요.” 윤호는 기다림 대신 부탁을 골랐다.",
    "effect": {
      "target": "yunho",
      "type": "chatter"
    }
  },
  {
    "id": "day8-yunho-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 말라붙은 종이를 학범과 같은 높이에서 펼쳤다. 더 이상 문턱 너머가 아니었다."
  },
  {
    "id": "day8-yunho-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-8",
    "name": "윤호",
    "role": "메시지",
    "text": "윤호에게서 축제 전야의 화면에는 내일을 부탁하는 말들이 켜졌다.",
    "messages": [
      {
        "from": "yunho",
        "text": "선배, 내일 옆에 서고 싶어요. 답은 내일 들어도 돼요."
      },
      {
        "from": "hakbeom",
        "text": "윤호야, 내일 이야기하자."
      },
      {
        "from": "yunho",
        "text": "네. 이름 불러 준 것만으로 오늘은 못 잘 것 같아요."
      }
    ],
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day8-yunho-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "학범은 윤호가 옆자리를 부탁한 순간을 빈 페이지 위에 오래 올려 두었다. 선배라는 호칭 뒤에 숨은 이름이 선명해졌다."
  },
  {
    "id": "day8-pair-hyeongyeom-sangwon-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-8",
    "name": "현겸",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "현겸은 같은 길을 말했고, 상원은 지우지 않을 칸을 약속했다.",
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
        "expression": "normal",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "name": "상원",
        "action": "enter",
        "pos": 4,
        "expression": "normal",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day8-pair-hyeongyeom-sangwon-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상원",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "걷자는 부탁과 남기겠다는 약속은 서로 달랐지만, 둘 다 학범이 내일 도망치지 않기를 바랐다."
  },
  {
    "id": "day8-pair-hyeongyeom-sangwon-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 우산과 기록지 사이에서 누군가를 떠올리는 일이 이미 선택의 시작임을 느꼈다.",
    "directives": [
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
    "id": "day8-pair-ukhyun-junhyeok-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-8",
    "name": "욱현",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "욱현은 늦은 답도 읽겠다고 했고, 준혁은 돌아가는 길도 보겠다고 했다.",
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
        "expression": "normal",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "name": "준혁",
        "action": "enter",
        "pos": 4,
        "expression": "normal",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day8-pair-ukhyun-junhyeok-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "준혁",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "노트와 지도는 각자 빈 곳을 남겨 두었다. 학범이 직접 채울 자리였다."
  },
  {
    "id": "day8-pair-ukhyun-junhyeok-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 기다림과 우회가 모두 자신을 재촉하지 않는 약속이라는 걸 알았다.",
    "directives": [
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
    "id": "day8-pair-jaeseong-dohun-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-8",
    "name": "재성",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "재성은 마이크를 끄겠다고 했고, 도훈은 농담 전에 진짜로 묻겠다고 했다.",
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
        "expression": "normal",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "name": "도훈",
        "action": "enter",
        "pos": 4,
        "expression": "normal",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day8-pair-jaeseong-dohun-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "도훈",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "두 사람의 목소리는 처음으로 관객 없는 곳을 향했다."
  },
  {
    "id": "day8-pair-jaeseong-dohun-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 내일 자신이 들어야 할 말들이 문화제 준비 보고가 아니라 마음의 초대라는 걸 알았다.",
    "directives": [
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
    "id": "day8-pair-sanguk-yunho-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-8",
    "name": "상욱",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "상욱은 돌아와 기다리겠다고 했고, 윤호는 옆에 서고 싶다고 했다.",
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
        "expression": "normal",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "name": "윤호",
        "action": "enter",
        "pos": 4,
        "expression": "normal",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day8-pair-sanguk-yunho-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "윤호",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "달려오는 약속과 한 발 앞으로 나오는 부탁이 무대 뒤 조명 아래 나란히 섰다."
  },
  {
    "id": "day8-pair-sanguk-yunho-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 누군가의 속도를 받아들이는 일도, 누군가의 자리를 허락하는 일도 내일의 대답이 된다는 걸 느꼈다.",
    "directives": [
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
    "id": "day8-pair-haeum-hyeongyeom-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-8",
    "name": "하음",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "하음은 학범의 박자를 따르겠다고 했고, 현겸은 비 없는 길을 함께 걷자고 했다.",
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
        "expression": "normal",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "name": "현겸",
        "action": "enter",
        "pos": 4,
        "expression": "normal",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day8-pair-haeum-hyeongyeom-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "현겸",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "호흡과 걸음은 서로 다른 리듬이었지만, 둘 다 학범이 먼저 움직이기를 기다렸다."
  },
  {
    "id": "day8-pair-haeum-hyeongyeom-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 내일을 떠올릴 때마다 자기 안의 박자와 발걸음이 동시에 울리는 것을 들었다.",
    "directives": [
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
    "id": "day8-choice-evening",
    "type": "choice",
    "choices": [
      "문화제 준비 채팅방에 오늘의 결론을 공유한다.",
      "학생회 기록실에 혼자 남아 다시 읽는다.",
      "현겸에게 먼저 괜찮다고 말한다."
    ],
    "rewards": [
      {
        "affection": {
          "sangwon": 10,
          "junhyeok": 10,
          "dohun": 10
        },
        "flags": [
          "day8_shared_report"
        ]
      },
      {
        "affection": {
          "ukhyun": 10,
          "jaeseong": 10,
          "haeum": 10
        },
        "flags": [
          "day8_solo_review"
        ]
      },
      {
        "affection": {
          "hyeongyeom": 20,
          "yunho": 10,
          "sanguk": 10
        },
        "flags": [
          "day8_checked_in"
        ]
      }
    ],
    "next": [
      "day8-evening-report",
      "day8-evening-solo",
      "day8-evening-hyeongyeom"
    ]
  },
  {
    "id": "day8-evening-report",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "상원에게 오늘의 표를 넘기자 그는 “이건 보고서가 아니라 네가 받은 말이야”라며 기록철을 닫았다. 학범은 처음으로 기록을 덜 완성해도 된다는 허락을 들었다.",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "name": "상원",
        "action": "enter",
        "pos": 3,
        "expression": "smile",
        "transition": "fade-in"
      }
    ],
    "nextId": "day8-closing"
  },
  {
    "id": "day8-evening-solo",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-8",
    "name": "학범",
    "role": "독백",
    "place": "학생회 기록실",
    "text": "축제 장식이 창문에 비치고, 학범은 빈 페이지 위에 손을 올렸다. 누구에게나 고맙다고 할 수는 있지만, 누구를 떠올리며 내일을 기다릴지는 하나씩 달라지고 있었다.",
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
    ],
    "nextId": "day8-closing"
  },
  {
    "id": "day8-evening-hyeongyeom",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-8",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸은 “비가 안 와도 같은 길로 가자”는 말을 보내 놓고 한참 답을 기다렸다. 학범은 짧게 “내일 보자”라고 썼지만, 지우지 않은 문장이 그보다 길었다.",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-courtyard-blue-hour.png",
        "transition": "fade-in"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "name": "현겸",
        "action": "enter",
        "pos": 3,
        "expression": "smile",
        "transition": "fade-in"
      },
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day8-closing"
  },
  {
    "id": "day8-closing",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-8",
    "name": "학범",
    "role": "독백",
    "place": "학생회 기록실",
    "text": "축제 전야의 끝에서 학범은 빈 페이지 맨 위에 제목처럼 적었다. “내가 미루지 말아야 할 말.” 창밖의 리허설 조명이 꺼질 때까지, 그 문장은 오래 마르지 않았다.",
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
    ],
    "nextId": "day9-chapter-card"
  }
];
