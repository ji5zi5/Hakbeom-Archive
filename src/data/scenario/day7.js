export const day7Scenes = [
  {
    "id": "day7-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-7",
    "sectionTitle": "Day 7: 비 오는 귀갓길",
    "mood": "warm",
    "text": "Day 7 · 비 오는 귀갓길",
    "nextId": "day7-opening",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day7-opening",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-7",
    "name": "학범",
    "role": "독백",
    "place": "학생회 기록실",
    "text": "빗소리가 복도를 채우자 학범은 우산을 꺼냈다. “오늘은 우산 하나로 모두를 피하지 말자. 내가 먼저, 같이 걷고 싶은 사람에게 갈 거야.”",
    "nextId": "day7-free-hub-a",
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
    "id": "day7-moe-hyeongyeom-umbrella-edge",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "현겸",
    "role": "동급생",
    "place": "현관 앞",
    "text": "현겸은 우산 끝을 학범 쪽으로 살짝 밀었다. “나한테 너무 기울이지 마. 네 어깨 젖으면 내가 먼저 알아채고, 그러면 또 신경 쓰이잖아.”",
    "effect": {
      "target": "hyeongyeom",
      "type": "blush"
    },
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-gate-rain.png",
        "transition": "fade-in"
      },
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "blush",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day7-moe-jaeseong-rain-broadcast",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "재성은 빗소리를 배경음처럼 낮춰 녹음 버튼 옆에 손을 올렸다. “오늘 방송실에 우산 없는 거, 사실 알았어. 핑계가 필요했거든. 너랑 더 말할 핑계.”",
    "effect": {
      "target": "jaeseong",
      "type": "chatter"
    },
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/broadcast-room.png",
        "transition": "fade-in"
      },
      {
        "type": "E",
        "target": "jaeseong",
        "effect": "chatter",
        "motion": "bounce"
      }
    ]
  },
  {
    "id": "day7-moe-yunho-stair-wait",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "윤호",
    "role": "후배 / 옥상 담당",
    "place": "옥상 계단",
    "text": "윤호는 젖은 계단 위에서 교복 소매를 꼭 쥐고 있었다. “선배가 올 줄 알았어요. 아니요, 올 거라고 믿고 싶어서 먼저 기다렸어요.”",
    "effect": {
      "target": "yunho",
      "type": "heart"
    },
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/rooftop-after-rain.png",
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
    "id": "day7-morning-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-7",
    "name": "문화제 준비 채팅방",
    "role": "메시지",
    "text": "등교 직후 문화제 준비 채팅방에는 확인보다 반박이 먼저 올라왔다.",
    "messages": [
      {
        "from": "sangwon",
        "text": "매점 쿠폰 시간이 틀렸다고 단정하지 마. 기록을 부정하면 남는 게 없어."
      },
      {
        "from": "dohun",
        "text": "그럼 영수증은 장식이냐? 농담 아니고, 이 시간표 이상해."
      },
      {
        "from": "haeum",
        "text": "문 닫히는 소리는 두 번이었어. 누군가 숨긴 게 아니라 누군가 망설였을 수도 있어."
      },
      {
        "from": "hakbeom",
        "text": "오늘은 결론보다 서로 말하는 방식부터 조심하자. 나도 중간에서 숨지 않을게."
      }
    ],
    "nextId": "day7-choice-morning",
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day7-choice-morning",
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
          "day7_records_first"
        ]
      },
      {
        "affection": {
          "sanguk": 10,
          "dohun": 10,
          "yunho": 10
        },
        "flags": [
          "day7_field_first"
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
          "day7_heart_first"
        ]
      }
    ],
    "next": [
      "day7-records-first",
      "day7-field-first",
      "day7-heart-first"
    ]
  },
  {
    "id": "day7-records-first",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-7",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "상원은 “기록이 남아야 얼굴도 지켜진다”고 말했고, 준혁은 감정을 제외한 경우의 수만 칠판에 남겼다. 현겸이 “그 기록 안에 학범 표정은 어디 있어?”라고 묻자 방 안의 공기가 종이처럼 팽팽해졌다.",
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
    "nextId": "day7-merge-first"
  },
  {
    "id": "day7-field-first",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 더 찾겠다며 복도로 뛰쳐나가려 했고, 윤호는 후배가 끼어들면 방해가 될까 봐 문턱에서 멈췄다. 도훈은 분위기를 깨려고 농담을 던졌지만, 재성은 그 말투가 진심을 지우는 방식이라고 받아쳤다.",
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
    "nextId": "day7-merge-first"
  },
  {
    "id": "day7-heart-first",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-7",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "하음은 학범의 손이 떨리는 박자를 먼저 짚었고, 현겸은 괜찮다는 말만 반복했다. 욱현은 노트 가장자리의 떨림을 기억라고 했지만, 준혁은 “재현 불가능한 감각”이라며 선을 그었다.",
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
    "nextId": "day7-merge-first"
  },
  {
    "id": "day7-merge-first",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-7",
    "name": "학범",
    "role": "독백",
    "place": "학생회 기록실",
    "text": "학범은 모두를 진정시키려다 자신이 또 중재자 자리로 물러났다는 걸 깨달았다. 기록집이 묻는 것은 소문이 아니라, 학범이 누구의 불안을 대신 떠안고 있는지였다.",
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
    "id": "day7-hyeongyeom-beat-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-7",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸은 상원이 기록지를 다시 들이밀자 학범 앞에 조용히 섰다. “지금 얼굴부터 봐. 숫자는 안 울지만 사람은 울어.” 다정한 말이 처음으로 날카로웠다.",
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
    "id": "day7-hyeongyeom-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "상원은 얼굴은 흐려져도 기록은 남는다고 답했다. 현겸은 입술을 깨물었고, 학범은 자신을 두고 두 방식의 걱정이 맞부딪히는 소리를 들었다.",
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
    "id": "day7-hyeongyeom-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "“괜찮다고 하면 다 넘어가 줄 거야?” 현겸의 질문은 학범에게 향했지만, 사실 자신이 가장 피하던 말이기도 했다."
  },
  {
    "id": "day7-hyeongyeom-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸은 우산을 접으며 “나는 기다릴 수 있는데, 네가 매번 중간에만 서는 건 못 기다리겠어”라고 말했다."
  },
  {
    "id": "day7-hyeongyeom-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-7",
    "name": "현겸",
    "role": "메시지",
    "text": "현겸의 메시지는 빗소리처럼 늦게 도착했다. 먼저 사과하지 않으면 접은 우산도 다시 펴질 것 같았다.",
    "messages": [
      {
        "from": "hyeongyeom",
        "text": "오늘 말 세게 해서 미안. 그래도 네 얼굴을 그냥 넘기기 싫었어."
      },
      {
        "from": "hakbeom",
        "text": "나도 중간에 숨으려고 했어."
      },
      {
        "from": "hyeongyeom",
        "text": "내일은 숨으면 우산으로 가려 줄게. 대신 같이 있어."
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
    "id": "day7-hyeongyeom-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "학범은 현겸의 침묵이 위로만은 아니라는 걸 알았다. 기다림도 오래 쌓이면 서운함이 되고, 그 서운함까지 오늘 기록해야 했다.",
    "effect": {
      "target": "hyeongyeom",
      "type": "ellipsis"
    }
  },
  {
    "id": "day7-ukhyun-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "욱현은 노트의 미세한 눌림을 기억라고 했고, 준혁은 재현할 수 없으면 배제해야 한다고 했다. “사람 손이 기계냐.” 욱현의 낮은 목소리가 드물게 거칠어졌다.",
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
    "id": "day7-ukhyun-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "준혁의 자가 노트 위를 지나가자 욱현은 손바닥으로 여백을 가렸다. 학범은 말 없는 배려가 처음으로 방어가 되는 걸 보았다.",
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
    "id": "day7-ukhyun-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "“네가 못 읽는다고 없는 건 아니야.” 욱현은 준혁을 보며 말했지만, 학범은 그 문장이 자기 침묵에도 꽂히는 걸 느꼈다."
  },
  {
    "id": "day7-ukhyun-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "욱현은 표시한 줄을 접어 숨기려다 멈췄다. “나도 숨기면 똑같아지니까.”",
    "effect": {
      "target": "ukhyun",
      "type": "ellipsis"
    }
  },
  {
    "id": "day7-ukhyun-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-7",
    "name": "욱현",
    "role": "메시지",
    "text": "욱현의 답장은 한 줄뿐이었지만, 보내기 전 지운 흔적까지 보일 만큼 오래 멈춰 있었다.",
    "messages": [
      {
        "from": "ukhyun",
        "text": "준혁 말이 틀린 건 아닌데, 전부는 아니야."
      },
      {
        "from": "hakbeom",
        "text": "네가 본 떨림도 적어 둘게."
      },
      {
        "from": "ukhyun",
        "text": "적기만 하지 말고 네 것도 말해."
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
    "id": "day7-ukhyun-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "노트는 펼쳐져 있었고, 방 안은 어색했다. 욱현의 관찰은 정확했지만, 정확해서 누군가를 다치게 할 수도 있었다."
  },
  {
    "id": "day7-jaeseong-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "재성은 굳은 분위기를 풀려고 안내방송 흉내를 냈고, 도훈은 “그렇게 웃기면 진짜 말도 장난처럼 들린다”고 받아쳤다. 웃음이 두 사람 사이에서 뚝 끊겼다.",
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
    "id": "day7-jaeseong-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "도훈의 농담은 피하는 말이었고, 재성의 농담은 보여 주는 말이었다. 둘 다 가벼워 보였지만, 학범은 어느 쪽도 쉽게 웃을 수 없었다.",
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
    "id": "day7-jaeseong-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "“마이크 앞이라고 다 연기는 아니야.” 재성이 드물게 정색하자, 도훈도 영수증을 구겼다.",
    "effect": {
      "target": "jaeseong",
      "type": "ellipsis"
    }
  },
  {
    "id": "day7-jaeseong-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "재성은 방송실 유리를 등지고 “내 진심까지 효과음 취급하지 마”라고 말했다. 학범은 그의 능글맞음 뒤에 숨은 자존심을 보았다."
  },
  {
    "id": "day7-jaeseong-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-7",
    "name": "재성",
    "role": "메시지",
    "text": "재성은 문화제 준비 채팅방이 아닌 개인 채팅으로 들어왔다. 농담을 붙이지 못한 첫 알림이었다.",
    "messages": [
      {
        "from": "jaeseong",
        "text": "오늘은 분위기 못 살렸네. 일부러 안 살린 것도 있고."
      },
      {
        "from": "hakbeom",
        "text": "진심이 장난처럼 들리면 억울하지."
      },
      {
        "from": "jaeseong",
        "text": "응. 내일은 꺼진 마이크로 말할래."
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
    "id": "day7-jaeseong-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "꺼진 마이크 옆에서 재성은 더 이상 분위기를 살리지 않았다. 그 침묵이 오히려 오늘의 갈등을 가장 크게 들려주었다."
  },
  {
    "id": "day7-sangwon-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "상원은 틀린 시간을 고치겠다며 학범의 메모까지 다시 쓰려 했다. “기록이 흩어지면 선택도 흩어져.” 통제하려는 손끝이 학범의 글씨를 덮었다.",
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
    "id": "day7-sangwon-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "현겸의 반박 이후에도 상원은 물러서지 않았다. 그는 학범을 지키고 싶어서 기록했지만, 지키려는 마음이 학범의 자리를 좁혔다.",
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
    "id": "day7-sangwon-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "“내가 놓치면 네가 멀어질 것 같아.” 상원은 처음으로 이유를 말했다. 그 말이 다정해서, 더 위험하게 들렸다."
  },
  {
    "id": "day7-sangwon-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "상원은 수정펜 뚜껑을 닫으며 “네가 틀려도 남길 수 있어?”라고 스스로에게 묻듯 중얼거렸다."
  },
  {
    "id": "day7-sangwon-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-7",
    "name": "상원",
    "role": "메시지",
    "text": "상원은 정리표 사진 대신 빈칸 하나만 보냈다. 오늘은 기록보다 사과를 먼저 고르려는 듯했다.",
    "messages": [
      {
        "from": "sangwon",
        "text": "네 메모 위에 내 글씨 덮은 거 사과할게."
      },
      {
        "from": "hakbeom",
        "text": "지우지 않고 말해 줘서 고마워."
      },
      {
        "from": "sangwon",
        "text": "기록이 증언이 되려면 네 자리를 남겨야겠지."
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
    "id": "day7-sangwon-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "학범은 상원의 기록이 증언이 되려면 자신을 소유하지 않아야 한다는 걸 보았다. 그 경계가 오늘 처음으로 흔들렸다.",
    "effect": {
      "target": "sangwon",
      "type": "heart"
    }
  },
  {
    "id": "day7-sanguk-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 기다리지 못하고 복도 끝으로 달렸다가 잘못된 창고 문을 열었다. 뒤늦게 따라온 윤호가 “선배 말부터 들어야 했어요”라고 작게 말했다.",
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
    "id": "day7-sanguk-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 후배가 물러서는 모습을 답답해했고, 윤호는 앞서가는 상욱을 무모하다고 봤다. 둘 다 학범을 생각했지만, 한쪽은 너무 빨랐고 다른 쪽은 너무 멀었다.",
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
    "id": "day7-sanguk-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "“가만히 있으면 놓치잖아!” 상욱의 목소리에 윤호가 움찔했다. 학범은 도움도 속도를 잃으면 압박이 된다는 걸 느꼈다."
  },
  {
    "id": "day7-sanguk-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 빈 창고 앞에서 숨을 몰아쉬었다. “미안. 네가 부르기도 전에 뛰었어.”",
    "effect": {
      "target": "sanguk",
      "type": "heart"
    }
  },
  {
    "id": "day7-sanguk-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-7",
    "name": "상욱",
    "role": "메시지",
    "text": "상욱의 메시지는 짧은 숨 표시처럼 연달아 도착했다. 뛰어간 뒤에야 멈춰야 했던 말을 찾은 모양이었다.",
    "messages": [
      {
        "from": "sanguk",
        "text": "잘못 뛰어서 미안. 너 부르기도 전에 나갔어."
      },
      {
        "from": "hakbeom",
        "text": "돌아와 줬잖아."
      },
      {
        "from": "sanguk",
        "text": "다음엔 뛰어도 돌아보면서 뛸게. 그게 되나 모르겠지만."
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
    "id": "day7-sanguk-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱의 빠른 마음은 준비 기록을 놓치게 했다. 학범은 그가 돌아와 사과하는 순간까지 함께 기록하기로 했다."
  },
  {
    "id": "day7-junhyeok-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "도서관 지도 테이블",
    "text": "준혁은 지도 위 불가능한 시간을 지우며 “감정 증언은 오차가 크다”고 했다. 욱현의 눈썹이 아주 조금 올라갔고, 그 작은 변화가 방 안을 얼렸다.",
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
    "id": "day7-junhyeok-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "도서관 지도 테이블",
    "text": "정답에 가까워질수록 준혁은 학범의 표정을 덜 보았다. 그는 틀린 선을 정확히 지웠지만, 그 선을 붙잡고 있던 마음까지 지웠다.",
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
    "id": "day7-junhyeok-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "도서관 지도 테이블",
    "text": "“맞는 말이면 충분한가?” 학범이 묻자 준혁은 바로 답하지 못했다. 계산은 빨랐지만, 상처의 속도는 예상하지 못했다.",
    "effect": {
      "target": "junhyeok",
      "type": "heart"
    }
  },
  {
    "id": "day7-junhyeok-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "도서관 지도 테이블",
    "text": "준혁은 자를 내려놓고 “효율적으로 말하면 안 되는 상황도 있나 보네”라고 했다. 사과처럼 서툰 문장이었다."
  },
  {
    "id": "day7-junhyeok-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-7",
    "name": "준혁",
    "role": "메시지",
    "text": "준혁은 위치 좌표 대신 문장 하나를 보냈다. 계산으로 덮기에는 늦은 사과였다.",
    "messages": [
      {
        "from": "junhyeok",
        "text": "정답만 남기면 충분하다고 생각했어. 오늘은 아니었고."
      },
      {
        "from": "hakbeom",
        "text": "알아줘서 됐어."
      },
      {
        "from": "junhyeok",
        "text": "비효율적인 사과지만 필요하면 더 할게."
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
    "id": "day7-junhyeok-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "도서관 지도 테이블",
    "text": "지도에는 정답에 가까운 선만 남았지만 방 안은 멀어져 있었다. 준혁의 똑똑함이 오늘은 모두를 편하게 하지 못했다."
  },
  {
    "id": "day7-dohun-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "도훈은 “그럼 소문은 문고리냐?”고 농담했다가 재성의 표정을 보고 말을 삼켰다. 피하려고 던진 말이 누군가의 진심을 건드렸다.",
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
    "id": "day7-dohun-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "그는 영수증을 흔들며 가볍게 굴었지만, 손끝은 계속 구겨진 모서리를 펴고 있었다. 학범은 도훈이 긴장할수록 더 웃는다는 걸 알았다.",
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
    "id": "day7-dohun-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "“나도 진지하게 말할 줄 알아.” 도훈은 그렇게 말하고도 바로 농담을 붙이려 했다. 스스로도 침묵을 견디지 못하는 얼굴이었다."
  },
  {
    "id": "day7-dohun-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "도훈은 캔을 내려놓고 “미안. 아까 건 도망친 거 맞아”라고 짧게 말했다."
  },
  {
    "id": "day7-dohun-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-7",
    "name": "도훈",
    "role": "메시지",
    "text": "도훈은 이모티콘을 세 번 지운 뒤에야 말을 보냈다. 장난으로 덮으면 더 틀릴 걸 아는 밤이었다.",
    "messages": [
      {
        "from": "dohun",
        "text": "아까 농담은 실패. 아니, 도망."
      },
      {
        "from": "hakbeom",
        "text": "말해 줘서 고마워."
      },
      {
        "from": "dohun",
        "text": "고맙다는 말 비싸다니까. 그래도 이번엔 받아둘게."
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
    "id": "day7-dohun-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "장난은 도훈의 방패였지만 오늘은 방패가 너무 커서 사람을 가렸다. 학범은 그가 방패를 내린 몇 초를 놓치지 않았다.",
    "effect": {
      "target": "dohun",
      "type": "chatter"
    }
  },
  {
    "id": "day7-haeum-beat-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-7",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 모두를 진정시키려다 자기 손끝이 떨리는 걸 숨겼다. 현겸이 “너도 괜찮아?”라고 묻자, 그는 웃는 대신 메트로놈만 다시 켰다.",
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
    "id": "day7-haeum-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "그는 학범의 호흡을 맞추면서도 자신의 박자는 계속 늦췄다. 남을 달래는 일이 익숙해서, 자기 불안은 소리 없이 뒤로 밀렸다.",
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
    "id": "day7-haeum-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "“나까지 불안하면 안 되잖아.” 하음의 말에 현겸이 고개를 저었다. 학범은 위로하는 사람에게도 위로가 필요하다는 걸 보았다."
  },
  {
    "id": "day7-haeum-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 메트로놈을 멈추고 “사실 나도 무서웠어. 네가 계속 괜찮다고 할까 봐”라고 말했다.",
    "effect": {
      "target": "haeum",
      "type": "chatter"
    }
  },
  {
    "id": "day7-haeum-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-7",
    "name": "하음",
    "role": "메시지",
    "text": "하음의 메시지는 박자를 세듯 천천히 도착했다. 남을 달래던 사람이 처음으로 자기 불안을 적었다.",
    "messages": [
      {
        "from": "haeum",
        "text": "나도 무서웠다는 말, 보내고 나니까 더 떨린다."
      },
      {
        "from": "hakbeom",
        "text": "말해 줘서 다행이야."
      },
      {
        "from": "haeum",
        "text": "그럼 내일은 내 박자도 숨기지 않을게."
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
    "id": "day7-haeum-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "음악실은 조용해졌지만 학범은 그 조용함 속에서 하음의 숨을 들었다. 안정은 누군가의 불안을 숨겨서 만들어지는 게 아니었다."
  },
  {
    "id": "day7-yunho-beat-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-7",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 상욱이 뛰쳐나간 뒤에도 문가에 남아 있었다. “후배가 끼어들면 선배가 곤란할까 봐요.” 그 말에 상욱은 더 답답한 얼굴이 됐다.",
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
    "id": "day7-yunho-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "기다림은 예의였지만, 오늘은 스스로를 지우는 방식이기도 했다. 학범이 이름을 부르기 전까지 윤호는 계속 한 발 뒤에 서 있었다.",
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
    "id": "day7-yunho-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "“선배가 부르지 않으면 저는 여기 있는 게 맞잖아요.” 윤호의 목소리는 얌전했지만, 그 안쪽에는 선택받고 싶은 조급함이 있었다.",
    "effect": {
      "target": "yunho",
      "type": "chatter"
    }
  },
  {
    "id": "day7-yunho-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 젖은 종이를 쥐고 “저도 같이 찾고 싶어요. 뒤에서만 말고요”라고 했다."
  },
  {
    "id": "day7-yunho-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-7",
    "name": "윤호",
    "role": "메시지",
    "text": "윤호는 ‘선배’라는 말 앞에서 오래 멈춘 뒤 보냈다. 기다리기만 해서는 닿지 않는다는 걸 안 듯했다.",
    "messages": [
      {
        "from": "yunho",
        "text": "선배, 저도 같이 찾고 싶다고 말해서 후회는 안 해요."
      },
      {
        "from": "hakbeom",
        "text": "후회하지 않게 해 줄게."
      },
      {
        "from": "yunho",
        "text": "그 말이면 오늘은 충분해요."
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
    "id": "day7-yunho-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "학범은 윤호의 기다림을 더는 미덕으로만 적을 수 없었다. 옆에 서고 싶다는 마음을 후배 자리 뒤에 숨기면, 준비 기록도 사람도 늦어진다."
  },
  {
    "id": "day7-pair-hyeongyeom-sangwon-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-7",
    "name": "현겸",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "현겸은 학범의 얼굴을 보라 했고, 상원은 얼굴보다 오래 남는 기록을 붙잡았다.",
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
    "id": "day7-pair-hyeongyeom-sangwon-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상원",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "둘의 걱정은 같은 곳을 향하지 않았다. 한쪽은 지금의 떨림을, 다른 한쪽은 멀어질 가능성을 두려워했다."
  },
  {
    "id": "day7-pair-hyeongyeom-sangwon-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 자신을 두고 벌어진 논쟁에서 더는 조용한 판정자만 할 수 없다는 걸 깨달았다.",
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
    "id": "day7-pair-ukhyun-junhyeok-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-7",
    "name": "욱현",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "욱현은 손글씨의 떨림을 믿었고, 준혁은 같은 결과가 다시 나와야 한다고 맞섰다.",
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
    "id": "day7-pair-ukhyun-junhyeok-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "준혁",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "기억와 감각 사이에서 노트가 구겨질 뻔했다."
  },
  {
    "id": "day7-pair-ukhyun-junhyeok-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 정확함이 누군가의 관찰을 무시할 때 얼마나 차갑게 들리는지 보았다.",
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
    "id": "day7-pair-jaeseong-dohun-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-7",
    "name": "재성",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "재성은 웃기 위해 말했고, 도훈은 들키지 않기 위해 웃었다.",
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
    "id": "day7-pair-jaeseong-dohun-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "도훈",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "농담끼리 부딪히자 가벼움은 더 이상 가볍지 않았다."
  },
  {
    "id": "day7-pair-jaeseong-dohun-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 분위기를 살리는 말과 진심을 숨기는 말이 서로를 상처낼 수 있음을 알았다.",
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
    "id": "day7-pair-sanguk-yunho-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-7",
    "name": "상욱",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "상욱은 바로 뛰어야 한다고 했고, 윤호는 선배 허락 없이는 안 된다고 물러섰다.",
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
    "id": "day7-pair-sanguk-yunho-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "윤호",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "너무 앞선 마음과 너무 뒤에 선 마음 사이에서 준비 기록은 잠시 길을 잃었다."
  },
  {
    "id": "day7-pair-sanguk-yunho-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 도움의 속도를 자신이 정하지 않으면 모두가 다친다는 사실을 기록했다.",
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
    "id": "day7-pair-haeum-hyeongyeom-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-7",
    "name": "하음",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "하음은 불안을 이름 붙였고, 현겸은 괜찮다는 말로 덮으려 했다.",
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
    "id": "day7-pair-haeum-hyeongyeom-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "현겸",
    "role": "준비 페어",
    "place": "복도와 기록 사이",
    "text": "두 사람 모두 학범을 진정시키려 했지만, 한쪽은 말했고 한쪽은 삼켰다."
  },
  {
    "id": "day7-pair-haeum-hyeongyeom-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 위로도 때로는 회피가 된다는 것을, 조용한 음악실에서 배웠다.",
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
    "id": "day7-choice-evening",
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
          "day7_shared_report"
        ]
      },
      {
        "affection": {
          "ukhyun": 10,
          "jaeseong": 10,
          "haeum": 10
        },
        "flags": [
          "day7_solo_review"
        ]
      },
      {
        "affection": {
          "hyeongyeom": 20,
          "yunho": 10,
          "sanguk": 10
        },
        "flags": [
          "day7_checked_in"
        ]
      }
    ],
    "next": [
      "day7-evening-report",
      "day7-evening-solo",
      "day7-evening-hyeongyeom"
    ]
  },
  {
    "id": "day7-evening-report",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "학생회 기록실",
    "text": "문화제 준비 채팅방에 중간 결론을 올리려던 학범의 손이 멈췄다. 상원은 전송 버튼을 기다렸지만, 학범은 처음으로 “아직 내 생각을 쓰지 않았어”라고 말했다.",
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
    "nextId": "day7-closing"
  },
  {
    "id": "day7-evening-solo",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-7",
    "name": "학범",
    "role": "독백",
    "place": "학생회 기록실",
    "text": "복도 불이 하나씩 꺼지는 동안 학범은 맞지 않는 시간표를 다시 보았다. 이상한 것은 숫자만이 아니었다. 모두가 학범을 도우려다 자기 약점을 가장 먼저 드러냈다.",
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
    "nextId": "day7-closing"
  },
  {
    "id": "day7-evening-hyeongyeom",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-7",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸은 사과 대신 오래 침묵했다. 그러고는 “괜찮냐고만 묻는 것도 도망일 수 있겠다”라고 낮게 말했다. 학범은 그 솔직함이 오늘의 어떤 기억보다 아팠다.",
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
    "nextId": "day7-closing"
  },
  {
    "id": "day7-closing",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-7",
    "name": "학범",
    "role": "독백",
    "place": "학생회 기록실",
    "text": "학범은 기록장에 적었다. “괜찮다는 말만 돌려주지 않기.” 소문보다 더 크게 남은 건, 자기 이름을 기다리던 목소리들이었다.",
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
    "nextId": "day8-chapter-card"
  }
];
