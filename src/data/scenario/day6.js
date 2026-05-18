export const day6Scenes = [
  {
    "id": "day6-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-6",
    "sectionTitle": "Day 6: 기록되지 않은 하루",
    "mood": "warm",
    "text": "Day 6 · 기록되지 않은 하루",
    "nextId": "day6-opening",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day6-opening",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-6",
    "name": "학범",
    "role": "독백",
    "place": "아카이브실",
    "text": "아카이브실 책상에 우산 물자국, 접힌 노트, 영수증, 문소리 메모가 한꺼번에 올라왔다. 학범은 남을 위해 정리한 일은 숱하게 떠올렸지만, 자신이 도움을 받은 순간은 빈칸으로 남겨 두었다는 사실을 처음 보았다.",
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
    "id": "day6-morning-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-6",
    "name": "단체방",
    "role": "메시지",
    "text": "아침 조회 전, 아카이브 단체방에 조용한 알림이 이어졌다.",
    "messages": [
      {
        "from": "sangwon",
        "text": "출입 기록지는 내가 가져갈게. 오늘은 네 반응도 빠뜨리지 않을 거야."
      },
      {
        "from": "dohun",
        "text": "편의점 쪽 화면은 확인 가능. 정보값은 나중에 받고, 일단 밥부터 먹어라."
      },
      {
        "from": "haeum",
        "text": "음악실 열쇠 받아 뒀어. 문소리 맞춰 보려면 네가 지치지 않는 속도가 필요해."
      },
      {
        "from": "hakbeom",
        "text": "고마워. 오늘은 단서랑 같이, 우리가 서로 어떻게 도왔는지도 적어 보자."
      }
    ],
    "nextId": "day6-choice-morning",
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day6-choice-morning",
    "type": "choice",
    "choices": [
      "기록 쪽 단서를 먼저 정리한다.",
      "현장 쪽 단서를 먼저 확인한다.",
      "감정 쪽 단서를 먼저 묻는다."
    ],
    "rewards": [
      {
        "affection": {
          "sangwon": 1,
          "junhyeok": 1
        },
        "flags": [
          "day6_records_first"
        ]
      },
      {
        "affection": {
          "sanguk": 1,
          "dohun": 1,
          "yunho": 1
        },
        "flags": [
          "day6_field_first"
        ]
      },
      {
        "affection": {
          "hyeongyeom": 1,
          "ukhyun": 1,
          "jaeseong": 1,
          "haeum": 1
        },
        "flags": [
          "day6_heart_first"
        ]
      }
    ],
    "next": [
      "day6-records-first",
      "day6-field-first",
      "day6-heart-first"
    ]
  },
  {
    "id": "day6-records-first",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-6",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브실",
    "text": "상원은 출입 기록과 영수증 시간을 한 줄에 맞춰 붙였고, 준혁은 지도 가장자리에 일부러 돌아가는 길을 그렸다. “정답만 좁히지 말고 네가 숨 돌릴 자리도 남겨.” 학범은 빨간 펜이 처음으로 자신을 몰아세우지 않는다고 느꼈다.",
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
    "nextId": "day6-merge-first"
  },
  {
    "id": "day6-field-first",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 체육관 창고 상자를 번쩍 들어 올리다 뒤쪽에 끼어 있던 봉투를 찾아냈고, 도훈은 복도 끝에서 CCTV 담당자에게 받은 시간을 흔들었다. 윤호는 문밖에서 젖은 종이를 말리다가 학범이 부르자 그제야 안으로 들어왔다.",
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
    "nextId": "day6-merge-first"
  },
  {
    "id": "day6-heart-first",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-6",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸은 책상 모서리의 물기를 닦을 작은 수건과 따뜻한 빵을 내밀었다. 욱현은 노트에서 세 줄만 표시했고, 재성은 복도 소음을 녹음하다가 “학범 표정은 방송 금지”라고 웃었다. 하음은 메트로놈을 낮게 맞춰 학범의 숨부터 세었다.",
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
    "nextId": "day6-merge-first"
  },
  {
    "id": "day6-merge-first",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-6",
    "name": "학범",
    "role": "독백",
    "place": "아카이브실",
    "text": "정리표는 사건의 방향만 보여 주지 않았다. 누가 무엇을 들고 왔는지보다, 학범이 누구 앞에서 어깨를 내려놓았는지가 더 선명하게 남았다.",
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
    "id": "day6-hyeongyeom-beat-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-6",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸은 젖은 우산 자국을 닦을 수건을 가져와 책상 아래에 말없이 깔았다. “네가 또 아침을 건너뛴 것 같아서.” 빵 봉지가 증거물 사이에 놓이자, 학범은 도움에도 온도가 있다는 걸 알았다.",
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
    "id": "day6-hyeongyeom-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "우산 손잡이에 묻은 물방울은 사건의 방향보다 학범이 얼마나 자주 혼자 버텼는지를 보여 주었다. 현겸은 결론을 재촉하지 않고, 빵을 다 먹을 때까지 옆자리를 비워 두지 않았다.",
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
    "id": "day6-hyeongyeom-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "“기다리는 건 할 수 있어. 그런데 네가 괜찮은 척하는 건 못 본 척하기 싫어.” 현겸의 말은 부드러웠지만, 학범이 자기 피로를 기록하게 만드는 힘이 있었다."
  },
  {
    "id": "day6-hyeongyeom-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸은 우산을 가져가며 “오늘은 내가 챙긴 걸 네가 잊지 않았으면 좋겠어”라고 했다. 학범은 도움받은 일을 지우지 않으려 손등에 작은 점을 찍었다."
  },
  {
    "id": "day6-hyeongyeom-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-6",
    "name": "현겸",
    "role": "메시지",
    "text": "현겸에게서 정리한 단서보다 조용한 안부가 먼저 도착했다.",
    "messages": [
      {
        "from": "hyeongyeom",
        "text": "수건은 내일 돌려줘도 돼. 빵은 오늘 안에 먹어."
      },
      {
        "from": "hakbeom",
        "text": "먹었어. 덕분에 손이 덜 떨렸어."
      },
      {
        "from": "hyeongyeom",
        "text": "그럼 됐어. 다음엔 네가 먼저 힘들다고 말해."
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
    "id": "day6-hyeongyeom-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸이 남긴 수건 냄새가 아직 책상에 있었다. 학범은 사건이 끝나기 전에도 누군가는 자신을 먼저 먹이고, 쉬게 하고, 기다릴 수 있다는 사실을 받아들였다.",
    "effect": {
      "target": "hyeongyeom",
      "type": "ellipsis"
    }
  },
  {
    "id": "day6-ukhyun-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "욱현은 노트를 펼쳐 세 줄에만 얇은 표시를 했다. “다 이상한 건 아니야. 많이 표시하면 네가 더 헤맬 것 같아서.” 짧은 배려가 여백처럼 남았다.",
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
    "id": "day6-ukhyun-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "표시된 글씨는 흔들림이 모두 달랐다. 욱현은 설명을 줄였고, 학범은 그 침묵 덕분에 오히려 자신이 무엇을 무서워하는지 들을 수 있었다.",
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
    "id": "day6-ukhyun-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "“네 글씨는 급할 때 오른쪽으로 기울어.” 욱현은 사실만 말한 척했지만, 그만큼 오래 학범의 서류를 봐 왔다는 고백이기도 했다."
  },
  {
    "id": "day6-ukhyun-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "욱현은 노트 모서리를 접지 않고 그대로 밀어 놓았다. “오늘 건 숨기지 마. 네가 도움받은 줄도 표시해 둬.”",
    "effect": {
      "target": "ukhyun",
      "type": "ellipsis"
    }
  },
  {
    "id": "day6-ukhyun-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-6",
    "name": "욱현",
    "role": "메시지",
    "text": "욱현에게서 정리한 단서보다 조용한 안부가 먼저 도착했다.",
    "messages": [
      {
        "from": "ukhyun",
        "text": "별표 세 개만 봐. 나머지는 네가 쉴 때까지 덮어 둬."
      },
      {
        "from": "hakbeom",
        "text": "알겠어. 표시해 줘서 고마워."
      },
      {
        "from": "ukhyun",
        "text": "고마우면 안 접고 읽어."
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
    "id": "day6-ukhyun-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "도서관 구석자리",
    "text": "학범은 노트의 별표 옆에 자기 이름을 작게 적었다. 욱현의 도움은 큰 소리 없이도, 놓친 줄을 정확히 붙잡아 주었다."
  },
  {
    "id": "day6-jaeseong-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "재성은 방송실 문을 반쯤 열어 복도 소음을 녹음했다. “네 긴장까지 잡히면 편집해야겠네.” 웃는 목소리였지만 녹음 버튼은 학범이 고개를 끄덕인 뒤에야 눌렀다.",
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
    "id": "day6-jaeseong-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "스피커 잡음 사이에서 어제의 발소리가 분리되자 재성은 과장되게 박수를 쳤다. 그 장난 덕분에 학범은 처음으로 단서를 보며 웃었다.",
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
    "id": "day6-jaeseong-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "“방송 사고는 수습하면 되는데, 네가 혼자 무너지는 건 싫어.” 재성은 마이크를 끄고 말했고, 꺼진 불빛 아래라서 더 선명했다.",
    "effect": {
      "target": "jaeseong",
      "type": "ellipsis"
    }
  },
  {
    "id": "day6-jaeseong-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "재성은 녹음 파일 제목을 ‘학범 회장님 금지된 한숨’으로 저장하려다 지웠다. 대신 “나중에 네가 듣고 괜찮을 이름으로 해”라고 했다."
  },
  {
    "id": "day6-jaeseong-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-6",
    "name": "재성",
    "role": "메시지",
    "text": "재성에게서 정리한 단서보다 조용한 안부가 먼저 도착했다.",
    "messages": [
      {
        "from": "jaeseong",
        "text": "복도 소음 파일 보냈다. 네 한숨은 편집했으니 안심해."
      },
      {
        "from": "hakbeom",
        "text": "그런 것까지 들렸어?"
      },
      {
        "from": "jaeseong",
        "text": "청취자 보호 차원. 내일은 덜 참아라."
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
    "id": "day6-jaeseong-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "학범은 웃다가도 목이 막히는 느낌을 기록했다. 재성의 도움은 소란스러웠지만, 그 소란은 학범이 너무 조용히 버티지 않게 해 주었다."
  },
  {
    "id": "day6-sangwon-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브실",
    "text": "상원은 증거를 지나치게 반듯하게 분류하다가 학범의 표정 앞에서 펜을 멈췄다. “이건 사실란에 넣어도 될까, 아니면 네가 말할 때까지 비워 둘까.”",
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
    "id": "day6-sangwon-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브실",
    "text": "파일철은 완벽했지만 학범의 반응 칸만 비어 있었다. 상원은 그 빈칸을 불편해하면서도 억지로 채우지 않았다.",
    "variants": [
      {
        "requiredFlags": [
          "sangwon_route_seed"
        ],
        "text": "이미 상원 쪽으로 마음이 기울었던 탓일까. 학범은 아카이브 원본 옆의 작은 흔적보다 상원의 숨소리에 먼저 반응했다."
      }
    ],
    "effect": {
      "target": "sangwon",
      "type": "ellipsis"
    }
  },
  {
    "id": "day6-sangwon-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브실",
    "text": "“네가 어떤 순서로 흔들렸는지도 놓치고 싶지 않아.” 상원의 말은 다정함과 집착 사이에 있었고, 학범은 그 경계까지 함께 기록했다."
  },
  {
    "id": "day6-sangwon-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브실",
    "text": "상원은 수정테이프를 내려놓고 “오늘 네가 받은 도움은 원본으로 남겨”라고 했다. 틀린 글씨를 견디는 얼굴이 평소보다 어려워 보였다."
  },
  {
    "id": "day6-sangwon-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-6",
    "name": "상원",
    "role": "메시지",
    "text": "상원에게서 정리한 단서보다 조용한 안부가 먼저 도착했다.",
    "messages": [
      {
        "from": "sangwon",
        "text": "반응 칸은 비워 뒀어. 네 말 없이는 안 채울게."
      },
      {
        "from": "hakbeom",
        "text": "그게 더 고마워."
      },
      {
        "from": "sangwon",
        "text": "어렵지만 해볼게. 원본은 원본답게 남겨야 하니까."
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
    "id": "day6-sangwon-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브실",
    "text": "정리된 파일 속에서 유일하게 삐뚤어진 줄이 학범의 눈에 들어왔다. 상원이 남긴 도움은 완벽한 표가 아니라, 지우지 않은 반응이었다.",
    "effect": {
      "target": "sangwon",
      "type": "heart"
    }
  },
  {
    "id": "day6-sanguk-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 창고 상자를 옮기다 뒤에 끼어 있던 봉투를 찾아냈다. “봐, 힘쓰는 것도 쓸모 있지?” 웃음은 컸지만, 학범이 놀라자 바로 손을 멈췄다.",
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
    "id": "day6-sanguk-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "봉투에는 축제 배치표 조각이 들어 있었다. 상욱은 당장 뛰어나가려다가 학범의 숨이 가쁜 걸 보고, 처음으로 출발선을 뒤로 물렸다.",
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
    "id": "day6-sanguk-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "“내가 먼저 움직이면 네가 덜 힘들 줄 알았어.” 상욱은 땀 묻은 손으로 신발 끈만 만지작거렸다. 빠른 마음에도 배울 속도가 있었다."
  },
  {
    "id": "day6-sanguk-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "상욱은 남은 상자를 혼자 들지 않고 학범에게 가벼운 파일 하나만 맡겼다. “같이 하는 표시. 무거운 건 내가 들고.”",
    "effect": {
      "target": "sanguk",
      "type": "heart"
    }
  },
  {
    "id": "day6-sanguk-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-6",
    "name": "상욱",
    "role": "메시지",
    "text": "상욱에게서 정리한 단서보다 조용한 안부가 먼저 도착했다.",
    "messages": [
      {
        "from": "sanguk",
        "text": "봉투 찾은 거 봤지? 나 오늘 꽤 쓸모 있었지?"
      },
      {
        "from": "hakbeom",
        "text": "응. 멈춰 준 것도."
      },
      {
        "from": "sanguk",
        "text": "그게 더 어렵더라. 그래도 연습할게."
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
    "id": "day6-sanguk-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 복도",
    "text": "체육관 복도 끝에서 학범은 봉투보다 상욱이 멈춘 순간을 더 오래 기억했다. 도움은 달려오는 것뿐 아니라, 기다리는 것일 수도 있었다."
  },
  {
    "id": "day6-junhyeok-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "도서관 지도 테이블",
    "text": "준혁은 지도 위 최단 경로를 지우고 작은 우회를 그렸다. “효율은 떨어지지만 네가 사람을 덜 마주치는 길.” 계산이 처음으로 학범의 피로를 기준으로 삼았다.",
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
    "id": "day6-junhyeok-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "도서관 지도 테이블",
    "text": "우회로 옆에는 예상 소요 시간이 적혀 있었다. 준혁은 감정 변수를 싫어한다고 말하면서도, 그 변수를 위해 자를 다시 댔다.",
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
    "id": "day6-junhyeok-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "도서관 지도 테이블",
    "text": "“정답만 찾으면 네가 빠질 가능성이 높아.” 무심한 문장이었지만, 학범은 그 안에 자신을 포함시키려는 의도를 읽었다.",
    "effect": {
      "target": "junhyeok",
      "type": "heart"
    }
  },
  {
    "id": "day6-junhyeok-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "도서관 지도 테이블",
    "text": "준혁은 지도를 접지 않고 학범 쪽으로 돌려 놓았다. “선택은 네가 해. 나는 길이 닫히지 않게 해 둘게.”"
  },
  {
    "id": "day6-junhyeok-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-6",
    "name": "준혁",
    "role": "메시지",
    "text": "준혁에게서 정리한 단서보다 조용한 안부가 먼저 도착했다.",
    "messages": [
      {
        "from": "junhyeok",
        "text": "우회로 지도 찍어 보냈다. 효율은 낮지만 피로도도 낮아."
      },
      {
        "from": "hakbeom",
        "text": "나 기준으로 다시 그려 줬네."
      },
      {
        "from": "junhyeok",
        "text": "이번 문제의 기준에 너도 포함돼야 하니까."
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
    "id": "day6-junhyeok-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "도서관 지도 테이블",
    "text": "학범은 돌아가는 선을 손가락으로 따라갔다. 준혁의 도움은 길을 줄이는 대신, 학범이 사라지지 않는 쪽으로 길을 남겼다."
  },
  {
    "id": "day6-dohun-beat-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "도훈은 편의점 CCTV 시간을 받아 왔지만 어떤 부탁을 했는지는 끝내 말하지 않았다. “정보값은 영업비밀. 대신 너 점심값은 내가 냈다 치자.”",
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
    "id": "day6-dohun-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "영수증 뒷면에는 시간보다 먼저 학범이 자주 사던 음료가 적혀 있었다. 도훈은 장난으로 덮었지만, 이미 오래 신경 쓴 흔적이었다.",
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
    "id": "day6-dohun-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "“착각하지 마. 네가 쓰러지면 조사 귀찮아져서 그래.” 도훈의 말끝은 비뚤었고, 손에 쥐여 준 캔은 차갑지 않게 데워져 있었다."
  },
  {
    "id": "day6-dohun-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "도훈은 CCTV 캡처를 넘기며 “오늘은 외상”이라고 했다. 학범이 이유를 묻자, 그는 잠깐 눈을 피하고 “고마워할 틈은 줘야지”라고 했다."
  },
  {
    "id": "day6-dohun-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-6",
    "name": "도훈",
    "role": "메시지",
    "text": "도훈에게서 정리한 단서보다 조용한 안부가 먼저 도착했다.",
    "messages": [
      {
        "from": "dohun",
        "text": "CCTV 값은 외상. 밥값은 내가 이긴 걸로 해."
      },
      {
        "from": "hakbeom",
        "text": "뭘 이겼는데?"
      },
      {
        "from": "dohun",
        "text": "네가 굶는 꼴 안 본 거. 큰 승리지."
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
    "id": "day6-dohun-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "학범은 영수증을 증거물 봉투가 아니라 노트 사이에 넣었다. 도훈의 도움은 늘 거래처럼 왔지만, 계산서에는 마음이 빠져 있었다.",
    "effect": {
      "target": "dohun",
      "type": "chatter"
    }
  },
  {
    "id": "day6-haeum-beat-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-6",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 메트로놈을 낮게 켜고 문소리 녹음과 박자를 맞췄다. “네 숨이 빨라지면 소리도 다르게 들려. 먼저 너부터 맞추자.”",
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
    "id": "day6-haeum-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "딸깍이는 박자 사이에서 문이 열린 시간이 드러났다. 하음은 발견보다 학범의 어깨가 내려가는 순간에 더 안도했다.",
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
    "id": "day6-haeum-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "“괜찮다고 말하기 전에 한 번만 숨 쉬어.” 하음은 답을 재촉하지 않았고, 학범은 그 느린 간격에서 겁을 들킬 수 있었다."
  },
  {
    "id": "day6-haeum-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 메트로놈을 끄며 “오늘 도움은 조용해도 남아”라고 했다. 음악실의 침묵이 처음으로 비어 있지 않았다.",
    "effect": {
      "target": "haeum",
      "type": "chatter"
    }
  },
  {
    "id": "day6-haeum-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-6",
    "name": "하음",
    "role": "메시지",
    "text": "하음에게서 정리한 단서보다 조용한 안부가 먼저 도착했다.",
    "messages": [
      {
        "from": "haeum",
        "text": "메트로놈은 내일도 가져갈게. 급하면 박자부터 보내."
      },
      {
        "from": "hakbeom",
        "text": "박자를 문자로 어떻게 보내?"
      },
      {
        "from": "haeum",
        "text": "점 하나만 찍어도 돼. 읽을게."
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
    "id": "day6-haeum-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "학범은 문소리보다 자기 호흡이 먼저 적힌 메모를 보았다. 하음의 도움은 사건을 맞추기 전에, 학범의 박자를 되찾게 했다."
  },
  {
    "id": "day6-yunho-beat-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-6",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 아카이브실 밖에서 젖은 종이를 말리고 있었다. 학범이 이름을 부르자 그제야 들어와 “선배가 부르면 들어가도 되는 줄 알았어요”라고 했다.",
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
    "id": "day6-yunho-beat-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "종이에는 옥상 난간에 붙었던 테이프 자국이 남아 있었다. 윤호는 손끝을 떨면서도 학범에게 먼저 보이려 애썼다.",
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
    "id": "day6-yunho-beat-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "“기다리는 건 괜찮은데, 선배가 혼자 다 하는 건 싫어요.” 윤호는 후배답게 말하려다 끝내 자기 고집을 숨기지 못했다.",
    "effect": {
      "target": "yunho",
      "type": "chatter"
    }
  },
  {
    "id": "day6-yunho-beat-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 자료를 건네고도 문 가까이에 서 있었다. 학범이 의자를 가리키자, 그는 놀란 얼굴로 “옆에 있어도 돼요?”라고 물었다."
  },
  {
    "id": "day6-yunho-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-6",
    "name": "윤호",
    "role": "메시지",
    "text": "윤호에게서 정리한 단서보다 조용한 안부가 먼저 도착했다.",
    "messages": [
      {
        "from": "yunho",
        "text": "선배, 오늘 안으로 들어오라고 해 줘서 좋았어요."
      },
      {
        "from": "hakbeom",
        "text": "다음엔 기다리지 말고 말해도 돼."
      },
      {
        "from": "yunho",
        "text": "네. 그래도 선배가 불러 주면 더 좋아요."
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
    "id": "day6-yunho-beat-06",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "학범은 윤호가 문턱을 넘은 순간을 단서 옆에 적었다. 도움은 기다림에서 시작됐지만, 오늘은 한 걸음 안으로 들어왔다."
  },
  {
    "id": "day6-pair-hyeongyeom-sangwon-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-6",
    "name": "현겸",
    "role": "조사 페어",
    "place": "복도와 기록 사이",
    "text": "현겸은 학범의 식은 빵 봉지를 먼저 치웠고, 상원은 그 시간이 기록표에 비어 있음을 짚었다.",
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
    "id": "day6-pair-hyeongyeom-sangwon-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상원",
    "role": "조사 페어",
    "place": "복도와 기록 사이",
    "text": "한 사람은 몸을 챙겼고, 한 사람은 빈칸을 지켰다. 학범은 도움의 모양이 달라도 자신을 향할 수 있다는 걸 배웠다."
  },
  {
    "id": "day6-pair-hyeongyeom-sangwon-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "아카이브실 책상 위에는 수건과 파일철이 나란히 놓였다. 그 둘 사이에서 학범의 하루가 조금 덜 흐릿해졌다.",
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
    "id": "day6-pair-ukhyun-junhyeok-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-6",
    "name": "욱현",
    "role": "조사 페어",
    "place": "복도와 기록 사이",
    "text": "욱현은 글씨 눌림을 보았고, 준혁은 지도 위 동선을 다시 계산했다.",
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
    "id": "day6-pair-ukhyun-junhyeok-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "준혁",
    "role": "조사 페어",
    "place": "복도와 기록 사이",
    "text": "노트의 떨림과 지도 우회로가 만났을 때, 빠진 시간은 도망이 아니라 망설임에 가까워졌다."
  },
  {
    "id": "day6-pair-ukhyun-junhyeok-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 말 없는 표시와 건조한 계산이 각자 다른 방식으로 자신을 덜 다치게 하려 했음을 알았다.",
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
    "id": "day6-pair-jaeseong-dohun-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-6",
    "name": "재성",
    "role": "조사 페어",
    "place": "복도와 기록 사이",
    "text": "재성은 복도 소음을 골라냈고, 도훈은 편의점 화면 시간을 맞췄다.",
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
    "id": "day6-pair-jaeseong-dohun-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "도훈",
    "role": "조사 페어",
    "place": "복도와 기록 사이",
    "text": "둘의 농담은 시끄러웠지만, 그 사이에 학범이 웃을 틈과 먹을 틈이 생겼다."
  },
  {
    "id": "day6-pair-jaeseong-dohun-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 장난 뒤에 숨은 걱정을 증거 봉투가 아니라 자기 노트에 적었다.",
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
    "id": "day6-pair-sanguk-yunho-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-6",
    "name": "상욱",
    "role": "조사 페어",
    "place": "복도와 기록 사이",
    "text": "상욱은 상자를 들었고, 윤호는 문밖에서 종이를 말렸다.",
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
    "id": "day6-pair-sanguk-yunho-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "윤호",
    "role": "조사 페어",
    "place": "복도와 기록 사이",
    "text": "빠른 손과 오래 기다린 손이 같은 봉투를 학범 앞에 놓았다."
  },
  {
    "id": "day6-pair-sanguk-yunho-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 누군가 달려오고 누군가 불릴 때까지 기다리는 사이에서, 도움을 청하는 목소리도 필요하다고 느꼈다.",
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
    "id": "day6-pair-haeum-hyeongyeom-01",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-6",
    "name": "하음",
    "role": "조사 페어",
    "place": "복도와 기록 사이",
    "text": "하음은 박자를 낮췄고, 현겸은 빵 봉지를 다시 밀어 주었다.",
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
    "id": "day6-pair-haeum-hyeongyeom-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "현겸",
    "role": "조사 페어",
    "place": "복도와 기록 사이",
    "text": "숨을 고르는 일과 배를 채우는 일이 단서 정리보다 먼저 올 수도 있었다."
  },
  {
    "id": "day6-pair-haeum-hyeongyeom-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "학범",
    "role": "독백",
    "place": "복도와 기록 사이",
    "text": "학범은 그들의 조용한 고집 덕분에 오늘의 결론을 급히 닫지 않았다.",
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
    "id": "day6-choice-evening",
    "type": "choice",
    "choices": [
      "단체방에 오늘의 결론을 공유한다.",
      "아카이브실에 혼자 남아 다시 읽는다.",
      "현겸에게 먼저 괜찮다고 말한다."
    ],
    "rewards": [
      {
        "affection": {
          "sangwon": 1,
          "junhyeok": 1,
          "dohun": 1
        },
        "flags": [
          "day6_shared_report"
        ]
      },
      {
        "affection": {
          "ukhyun": 1,
          "jaeseong": 1,
          "haeum": 1
        },
        "flags": [
          "day6_solo_review"
        ]
      },
      {
        "affection": {
          "hyeongyeom": 2,
          "yunho": 1,
          "sanguk": 1
        },
        "flags": [
          "day6_checked_in"
        ]
      }
    ],
    "next": [
      "day6-evening-report",
      "day6-evening-solo",
      "day6-evening-hyeongyeom"
    ]
  },
  {
    "id": "day6-evening-report",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브실",
    "text": "상원이 새 표를 완성하자 학범은 마지막 칸에 자기 글씨를 더했다. “도움을 받은 일.” 상원은 그 줄만큼은 고치지 않고 빈 여백을 넓게 남겨 두었다.",
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
    "nextId": "day6-closing"
  },
  {
    "id": "day6-evening-solo",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-6",
    "name": "학범",
    "role": "독백",
    "place": "아카이브실",
    "text": "아카이브실에 혼자 남은 학범은 오늘 받은 빵 봉지와 메모, 지도 조각을 나란히 놓았다. 해결하지 못한 단서보다, 돌려받은 호의가 더 오래 손에 남았다.",
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
    "nextId": "day6-closing"
  },
  {
    "id": "day6-evening-hyeongyeom",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-6",
    "name": "현겸",
    "role": "동급생",
    "place": "중정 벤치",
    "text": "현겸에게 먼저 밥 먹었다고 말하자, 그는 짧게 웃고는 “그럼 오늘은 내가 한 가지는 도운 거네”라고 답했다. 학범은 그 말이 보고서보다 든든하다고 생각했다.",
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
    "nextId": "day6-closing"
  },
  {
    "id": "day6-closing",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-6",
    "name": "학범",
    "role": "독백",
    "place": "아카이브실",
    "text": "빈칸 정리의 끝에서 학범은 기록장 아래에 한 줄을 적었다. “도움을 받는 것도 기록해야 한다.” 펜 끝이 멈춘 자리에, 처음으로 자기 몫의 하루가 남았다.",
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
    "nextId": "day7-chapter-card"
  }
];
