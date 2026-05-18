export const day9Scenes = [
  {
    "id": "day9-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-9",
    "sectionTitle": "Day 9: 축제 준비의 소문",
    "mood": "warm",
    "text": "Day 9 · 축제 준비의 소문",
    "nextId": "day9-opening",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day9-opening",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-9",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브실",
    "text": "축제 준비 명단이 아카이브실에 도착했다. 사라진 기록과 상관없어 보였던 축제 일정표에는, 이상하게도 학범이 조사한 아홉 명의 이름이 같은 시간대에 묶여 있었다.",
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
    "id": "day9-festival-phone",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-9",
    "name": "축제 준비방",
    "role": "메시지",
    "text": "축제 준비 단체방이 단서처럼 울렸다.",
    "messages": [
      {
        "from": "sangwon",
        "text": "축제 준비 명단에 없는 빈칸이 있어."
      },
      {
        "from": "jaeseong",
        "text": "방송 리허설 명단에도 같은 빈칸이 있음. 좀 무대 냄새 나는데?"
      },
      {
        "from": "dohun",
        "text": "매점 발주표에도 빈칸 발견. 빈칸 인기 많네."
      },
      {
        "from": "hakbeom",
        "text": "오늘은 축제 준비하면서 그 빈칸을 같이 보자."
      }
    ],
    "nextId": "day9-choice-prep",
    "directives": [
      {
        "type": "SE",
        "cue": "message"
      }
    ]
  },
  {
    "id": "day9-choice-prep",
    "type": "choice",
    "choices": [
      "무대와 방송 준비를 본다.",
      "기록과 동선 준비를 본다.",
      "음식과 휴식 공간을 본다."
    ],
    "rewards": [
      {
        "affection": {
          "jaeseong": 1,
          "haeum": 1,
          "hyeongyeom": 1
        },
        "flags": [
          "day9_stage_pressure"
        ]
      },
      {
        "affection": {
          "sangwon": 1,
          "junhyeok": 1,
          "sanguk": 1
        },
        "flags": [
          "day9_record_pressure"
        ]
      },
      {
        "affection": {
          "dohun": 1,
          "yunho": 1,
          "ukhyun": 1
        },
        "flags": [
          "day9_rest_pressure"
        ]
      }
    ],
    "next": [
      "day9-stage-prep",
      "day9-record-prep",
      "day9-rest-prep"
    ]
  },
  {
    "id": "day9-stage-prep",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "재성",
    "role": "방송부",
    "place": "방송실",
    "text": "재성은 리허설 대본을 흔들며 말했다. “무대는 거짓말을 싫어해. 누가 빈칸을 만들었든, 조명 아래로 나오게 되어 있어.”",
    "nextId": "day9-merge-prep",
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
    "id": "day9-record-prep",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-9",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브실",
    "text": "상원은 축제 준비 명단과 사라진 결재표를 나란히 놓았다. 두 종이의 빈칸은 서로 다른 종이인데도 같은 모양으로 비어 있었다.",
    "nextId": "day9-merge-prep",
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
    "id": "day9-rest-prep",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-9",
    "name": "도훈",
    "role": "정보통",
    "place": "밤의 편의점",
    "text": "도훈은 발주표를 접어 학범에게 내밀었다. “축제 날 음료가 모자라면 난리 나거든. 근데 이 빈칸은 물건 이름이 아니라 사람 이름 자리야.”",
    "nextId": "day9-merge-prep",
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
    "id": "day9-merge-prep",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-9",
    "name": "학범",
    "role": "독백",
    "place": "축제 준비 복도",
    "text": "축제 준비는 사건을 숨기지 않았다. 오히려 사람들을 한곳에 모아, 학범이 더 이상 선택을 미룰 수 없게 만들고 있었다.",
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
    "id": "day9-hyeongyeom-pressure-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-9",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "우산 보관함 맨 아래에서 젖은 비닐 포장지가 나왔다. 현겸은 그 안쪽에 남은 빗방울 자국을 보며, 학범에게 자신이 비 오는 날의 우연으로만 접혀 버릴까 봐 처음으로 말을 늦췄다.",
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
    "id": "day9-hyeongyeom-pressure-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "“학범아, 오늘 네가 웃는 척하는 거 티 나.” 현겸의 말은 작았지만 가장 먼저 우산을 기울여 주는 사람처럼 다정했다. 학범은 그 걱정을 단서보다 먼저 받아들였다.",
    "variants": [
      {
        "requiredFlags": [
          "hyeongyeom_route_seed"
        ],
        "text": "현겸 쪽으로 이미 마음이 기운 탓인지, 학범은 같은 말도 더 오래 붙잡았다. 축제 소음 속에서 현겸의 목소리만 이상하게 선명했다."
      }
    ]
  },
  {
    "id": "day9-hyeongyeom-pressure-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "축제 준비표의 우산 대여 칸에는 현겸이 지운 이름 하나가 남아 있었다. 그는 손끝으로 그 자리를 덮고 “네가 먼저 젖는 건 이제 싫어”라고 말했다."
  },
  {
    "id": "day9-hyeongyeom-pressure-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "학범",
    "role": "독백",
    "place": "같은 우산",
    "text": "학범은 현겸 옆에서 비닐 포장지를 접었다. 잃어버린 기록보다 오래 남는 것은, 말없이 어깨를 가까이 붙여 주는 사람이라는 생각이 들었다."
  },
  {
    "id": "day9-ukhyun-pressure-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "도서관 반납함에는 반쯤 접힌 메모가 꽂혀 있었다. 욱현은 학범이 예전에 밑줄 친 문장 옆 빈 여백을 손끝으로 눌렀고, 끝내 읽히지 못한 답장처럼 남을까 봐 시선을 먼저 거두었다.",
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
    "id": "day9-ukhyun-pressure-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "“웃는 척, 티 나.” 욱현의 말은 짧았다. 하지만 접힌 노트 끝에 덧붙인 작은 별표처럼, 걱정은 정확히 학범에게 닿았다.",
    "variants": [
      {
        "requiredFlags": [
          "ukhyun_route_seed"
        ],
        "text": "욱현 쪽으로 이미 마음이 기운 탓인지, 학범은 같은 말도 더 오래 붙잡았다. 축제 소음 속에서 욱현의 목소리만 이상하게 선명했다."
      }
    ]
  },
  {
    "id": "day9-ukhyun-pressure-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "도서관에서 빌린 행사 노트 사이에는 욱현이 표시한 빈 줄이 끼워져 있었다. 그는 그 줄을 보여 주며 “답이 없던 곳이 제일 시끄럽더라”라고 속삭였다."
  },
  {
    "id": "day9-ukhyun-pressure-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "학범",
    "role": "독백",
    "place": "접힌 노트",
    "text": "학범은 욱현과 나란히 침묵을 읽었다. 사건은 누가 훔쳤느냐보다, 누가 말하지 못하게 만들었느냐를 묻는 쪽으로 기울었다."
  },
  {
    "id": "day9-jaeseong-pressure-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "재성",
    "role": "방송부",
    "place": "방송 신호",
    "text": "방송실 리허설 큐시트에는 켜지지 않은 마이크 번호 하나가 남아 있었다. 재성은 평소처럼 웃으려다 실패했고, 진심까지 방송용 농담으로 들릴까 봐 처음으로 볼륨을 낮췄다.",
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
    "id": "day9-jaeseong-pressure-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "재성",
    "role": "방송부",
    "place": "방송 신호",
    "text": "“학범, 오늘 표정 방송사고 났어.” 재성은 능글맞게 웃었지만 곧 목소리를 낮췄다. “근데 그런 건 나한테만 들켜도 되잖아.”",
    "variants": [
      {
        "requiredFlags": [
          "jaeseong_route_seed"
        ],
        "text": "재성 쪽으로 이미 마음이 기운 탓인지, 학범은 같은 말도 더 오래 붙잡았다. 축제 소음 속에서 재성의 목소리만 이상하게 선명했다."
      }
    ]
  },
  {
    "id": "day9-jaeseong-pressure-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "재성",
    "role": "방송부",
    "place": "방송 신호",
    "text": "방송 대본 여백에는 재성이 몰래 줄인 멘트가 남아 있었다. 그는 마이크 스위치를 끄고 “웃기려고 뺀 게 아니라, 네가 놀랄까 봐 뺐어”라고 말했다."
  },
  {
    "id": "day9-jaeseong-pressure-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "학범",
    "role": "독백",
    "place": "방송 신호",
    "text": "학범은 재성의 농담이 어디에서 멈추는지 처음으로 들었다. 스피커 잡음 너머에는 사건보다 먼저 숨긴 마음이 있었다."
  },
  {
    "id": "day9-sangwon-pressure-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "아카이브 원본의 수정 이력에는 상원이 모르는 공백 한 줄이 끼어 있었다. 상원은 펜을 내려놓고, 학범의 선택이 자기 기록 밖에서 조용히 바뀌는 순간을 붙잡지 못할까 두려워했다.",
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
    "id": "day9-sangwon-pressure-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "“학범, 오늘 누구 앞에서 웃는 척했는지 다 티 나.” 상원의 말은 장난처럼 시작했지만 끝에는 기록을 덮는 듯한 집착이 남았다. 학범은 그 걱정을 단서보다 먼저 받아들였다.",
    "variants": [
      {
        "requiredFlags": [
          "sangwon_route_seed"
        ],
        "text": "상원 쪽으로 이미 마음이 기운 탓인지, 학범은 같은 말도 더 오래 붙잡았다. 축제 소음 속에서 상원의 목소리만 이상하게 선명했다."
      }
    ]
  },
  {
    "id": "day9-sangwon-pressure-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "상원은 결재표의 숫자를 다시 세지 않았다. 대신 학범의 이름 옆에 작게 그은 선을 가리키며 “틀린 기록은 고치면 돼. 틀린 마음은 방치하면 안 돼”라고 했다."
  },
  {
    "id": "day9-sangwon-pressure-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "학범",
    "role": "독백",
    "place": "아카이브 원본",
    "text": "학범은 상원과 있으면 모든 감정이 항목처럼 분류될 줄 알았다. 그런데 상원은 가장 중요한 칸만 비워 두고, 학범이 직접 적을 때까지 기다렸다."
  },
  {
    "id": "day9-sanguk-pressure-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "체육관 입구의 스톱워치는 누군가 누른 채 멈춰 있었다. 상욱은 숫자가 늦게 도착한 시간을 가리키는 것만 같아, 이번에도 학범이 필요한 순간을 지나친 뒤에야 달려올까 봐 주먹을 쥐었다.",
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
    "id": "day9-sanguk-pressure-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "“학범, 오늘 숨이 평소보다 짧아.” 상욱은 말보다 먼저 학범의 가방을 들어 올렸다. “일단 걷자. 힘든 건 내가 들게.”",
    "variants": [
      {
        "requiredFlags": [
          "sanguk_route_seed"
        ],
        "text": "상욱 쪽으로 이미 마음이 기운 탓인지, 학범은 같은 말도 더 오래 붙잡았다. 축제 소음 속에서 상욱의 목소리만 이상하게 선명했다."
      }
    ]
  },
  {
    "id": "day9-sanguk-pressure-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "상욱은 체육관 동선표를 접어 주머니에 넣었다. “뛰면 닿는 거리랑, 곁에 서야 하는 거리는 달라”라는 말이 숨보다 먼저 나왔다."
  },
  {
    "id": "day9-sanguk-pressure-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "학범",
    "role": "독백",
    "place": "체육관 동선",
    "text": "학범은 상욱의 성급함이 도망이 아니라 도착 방식이라는 걸 알았다. 누가 기록을 훔쳤든, 상욱은 학범이 뒤처지는 순간부터 이미 방향을 바꾸고 있었다."
  },
  {
    "id": "day9-junhyeok-pressure-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "준혁이 펼친 동선 지도에는 가장 짧은 길 옆에 지워진 우회로가 남아 있었다. 계산은 맞았지만, 정답인 길 위에 서 있어도 학범이 자신을 선택하지 않을 수 있다는 가능성이 지도보다 선명했다.",
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
    "id": "day9-junhyeok-pressure-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "“학범, 네 웃음은 평소보다 0.5초 늦어.” 준혁은 건조하게 말하고는 지도를 접었다. “걱정한다는 뜻이야. 번역까지 필요하진 않지?”",
    "variants": [
      {
        "requiredFlags": [
          "junhyeok_route_seed"
        ],
        "text": "준혁 쪽으로 이미 마음이 기운 탓인지, 학범은 같은 말도 더 오래 붙잡았다. 축제 소음 속에서 준혁의 목소리만 이상하게 선명했다."
      }
    ]
  },
  {
    "id": "day9-junhyeok-pressure-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "준혁의 지도에는 최단 경로 대신 돌아가는 선이 그려져 있었다. 그는 “이번엔 빠른 길이 아니라 네가 덜 다치는 길로 계산했어”라고 말했다."
  },
  {
    "id": "day9-junhyeok-pressure-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "학범",
    "role": "독백",
    "place": "지도 위 빈칸",
    "text": "학범은 준혁이 숫자를 내려놓을 때 더 정확해진다는 걸 보았다. 사건의 빈칸은 논리로 좁아졌지만, 마음의 빈칸은 기다림으로만 좁아졌다."
  },
  {
    "id": "day9-dohun-pressure-01",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "도훈",
    "role": "정보통",
    "place": "CCTV 시간",
    "text": "매점 영수증 뒷면에는 도훈이 장난삼아 붙이던 가격표가 떼어진 자국만 있었다. 그는 빈 손바닥을 보며, 농담을 걷어내면 학범에게 내밀 문장이 하나도 남지 않을까 봐 웃음을 삼켰다.",
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
    "id": "day9-dohun-pressure-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "도훈",
    "role": "정보통",
    "place": "CCTV 시간",
    "text": "“학생회장님, 오늘 연기력 별로네.” 도훈은 웃으며 캔을 던졌다. “받아. 걱정해서 주는 거 아니고, 정보값 선불이야. 착각하지 말고.”",
    "variants": [
      {
        "requiredFlags": [
          "dohun_route_seed"
        ],
        "text": "도훈 쪽으로 이미 마음이 기운 탓인지, 학범은 같은 말도 더 오래 붙잡았다. 축제 소음 속에서 도훈의 목소리만 이상하게 선명했다."
      }
    ]
  },
  {
    "id": "day9-dohun-pressure-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "도훈",
    "role": "정보통",
    "place": "CCTV 시간",
    "text": "도훈은 편의점 영수증 뒤에 적은 농담을 찢지 못하고 있었다. “이거 웃긴 척하려고 쓴 건데, 사실 네가 혼자 계산할까 봐 무서웠어.”"
  },
  {
    "id": "day9-dohun-pressure-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "학범",
    "role": "독백",
    "place": "CCTV 시간",
    "text": "학범은 도훈의 장난이 가벼워서가 아니라 무거운 걸 들어 올리려고 튀어 오른다는 걸 알았다. 사건은 아직 차가웠지만, 캔 따는 소리는 둘 사이를 조금 데웠다."
  },
  {
    "id": "day9-haeum-pressure-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-9",
    "name": "하음",
    "role": "음악실 담당",
    "place": "문소리의 박자",
    "text": "음악실 보면대에는 박자가 하나씩 밀린 악보가 놓여 있었다. 하음은 학범의 숨이 다른 사람의 박자에 맞춰 멀어지는 상상을 하자, 처음으로 ‘괜찮다’는 말을 끝까지 하지 못했다.",
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
    "id": "day9-haeum-pressure-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "하음",
    "role": "음악실 담당",
    "place": "문소리의 박자",
    "text": "“학범아, 오늘 숨소리가 조금 빨라.” 하음은 피아노 뚜껑을 천천히 닫았다. “괜찮아. 대답은 네 박자에 맞춰서 해도 돼.”",
    "variants": [
      {
        "requiredFlags": [
          "haeum_route_seed"
        ],
        "text": "하음 쪽으로 이미 마음이 기운 탓인지, 학범은 같은 말도 더 오래 붙잡았다. 축제 소음 속에서 하음의 목소리만 이상하게 선명했다."
      }
    ]
  },
  {
    "id": "day9-haeum-pressure-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "하음",
    "role": "음악실 담당",
    "place": "문소리의 박자",
    "text": "하음은 음악실 박자표를 축제 순서표 위에 겹쳐 놓았다. “불안하면 빨라져. 그런데 너는 자꾸 혼자 맞추려고 해”라는 말이 낮게 내려앉았다."
  },
  {
    "id": "day9-haeum-pressure-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "학범",
    "role": "독백",
    "place": "문소리의 박자",
    "text": "학범은 하음 곁에서 처음으로 서두르지 않는 추리를 했다. 누가 기록을 숨겼는지는 아직 흐렸지만, 둘의 호흡은 틀린 마디를 다시 찾고 있었다."
  },
  {
    "id": "day9-yunho-pressure-01",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-9",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "마른 종이",
    "text": "옥상 난간 밑에는 ‘보조 인원’이라고 적힌 낡은 명찰이 말라붙어 있었다. 윤호는 그것을 떼어 손에 쥐고도, 선배가 자신을 후배 자리 밖으로 불러주지 않으면 영영 뒤에만 남을까 봐 입술을 깨물었다.",
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
    "id": "day9-yunho-pressure-02",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "마른 종이",
    "text": "“선배, 오늘 괜찮은 척하는 거... 조금 티 났어요.” 윤호의 말은 조심스럽게 시작했지만 끝에는 기다림이 남았다. 학범은 그 걱정을 단서보다 먼저 받아들였다.",
    "variants": [
      {
        "requiredFlags": [
          "yunho_route_seed"
        ],
        "text": "윤호 쪽으로 이미 마음이 기운 탓인지, 학범은 같은 말도 더 오래 붙잡았다. 축제 소음 속에서 윤호의 목소리만 이상하게 선명했다."
      }
    ]
  },
  {
    "id": "day9-yunho-pressure-03",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "마른 종이",
    "text": "윤호는 안전 표지판 뒤에 붙은 쪽지를 떼지 못하고 서 있었다. ‘기다림’이라는 글자를 본 뒤에도, 그는 선배의 표정을 먼저 확인했다."
  },
  {
    "id": "day9-yunho-pressure-04",
    "type": "dialogue",
    "mood": "warm",
    "chapter": "day-9",
    "name": "학범",
    "role": "독백",
    "place": "마른 종이",
    "text": "학범은 윤호가 한 걸음 물러서는 이유를 조금 알 것 같았다. 후배의 기다림은 포기가 아니라, 불러 줄 때 정확히 달려가기 위한 준비였다."
  },
  {
    "id": "day9-closing",
    "type": "dialogue",
    "mood": "tense",
    "chapter": "day-9",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브실",
    "text": "축제 준비가 끝난 뒤, 학범의 기록장에는 아홉 갈래의 표시가 남았다. 다음 날이면 그중 하나를 더 분명히 선택해야 한다는 예감이, 빈칸보다 무겁게 내려앉았다.",
    "nextId": "day10-chapter-card",
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
