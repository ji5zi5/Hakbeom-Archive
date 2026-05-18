export const endingScenes = [
  {
    "id": "ending-promise",
    "skipTarget": true,
    "type": "dialogue",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "빗속의 교문",
    "endingGate": true,
    "endingNext": {
      "hyeongyeom": "ending-hyeongyeom",
      "ukhyun": "ending-ukhyun",
      "jaeseong": "ending-jaeseong",
      "sangwon": "ending-sangwon",
      "sanguk": "ending-sanguk",
      "junhyeok": "ending-junhyeok",
      "dohun": "ending-dohun",
      "haeum": "ending-haeum",
      "yunho": "ending-yunho",
      "good": "ending-good",
      "normal": "ending-normal",
      "quiet": "ending-quiet"
    },
    "text": "내일도 내가 먼저 갈게. 오늘 쓴 마지막 페이지를 같이 확인하자.",
    "variants": [
      {
        "requiredFlags": [
          "hyeongyeom_route"
        ],
        "text": "현겸아, 내일은 비가 안 와도 내가 먼저 우산을 펼칠게."
      },
      {
        "requiredFlags": [
          "ukhyun_route"
        ],
        "text": "욱현아, 내일 답장은 접어 두지 않고 네 앞에서 쓸게."
      },
      {
        "requiredFlags": [
          "jaeseong_route"
        ],
        "text": "재성아, 내일은 마이크 없이도 내가 먼저 너를 부를게."
      },
      {
        "requiredFlags": [
          "sangwon_route"
        ],
        "text": "상원아, 오늘 이 문장은 고치지 말고 그대로 남겨 줘."
      },
      {
        "requiredFlags": [
          "sanguk_route"
        ],
        "text": "상욱아, 내일은 뛰어도 좋지만 마지막엔 같이 걸어가자."
      },
      {
        "requiredFlags": [
          "junhyeok_route"
        ],
        "text": "준혁아, 내일은 가장 빠른 길 말고 네가 있는 길로 갈게."
      },
      {
        "requiredFlags": [
          "dohun_route"
        ],
        "text": "도훈아, 내일도 대가 없이 진짜 말을 하나 더 줄게."
      },
      {
        "requiredFlags": [
          "haeum_route"
        ],
        "text": "하음아, 내일 첫 박자는 내가 낼 테니 같이 맞춰 줘."
      },
      {
        "requiredFlags": [
          "yunho_route"
        ],
        "text": "윤호야, 내일도 뒤가 아니라 내 옆에서 같이 보자."
      },
      {
        "default": true,
        "text": "내일도 내가 먼저 갈게. 오늘 쓴 마지막 페이지를 같이 확인하자."
      }
    ],
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
      },
      {
        "type": "E",
        "target": "ukhyun",
        "effect": "heart",
        "motion": "nod"
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
    "id": "ending-hyeongyeom",
    "terminal": true,
    "type": "dialogue",
    "name": "현겸",
    "role": "현겸 엔딩",
    "place": "같은 우산의 고백",
    "text": "현겸은 젖은 교문 앞에서 우산을 접었다. 학범이 먼저 펼친 우산 아래로 둘이 들어가자, 그는 손잡이에 새 리본을 묶었다. “비 안 와도 이 길로 가자.”",
    "effect": {
      "target": "hyeongyeom",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "heart",
        "motion": "zoom",
        "se": "promise"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "STOP_BGM"
      }
    ]
  },
  {
    "id": "ending-ukhyun",
    "terminal": true,
    "type": "dialogue",
    "name": "욱현",
    "role": "욱현 엔딩",
    "place": "접힌 노트의 답장",
    "text": "욱현은 노트를 접지 않고 학범에게 돌려줬다. 첫 줄에는 학범의 답, 둘째 줄에는 욱현의 답이 나란히 있었다. 둘은 도서관 반납함에 빈 책갈피 하나를 꽂았다.",
    "effect": {
      "target": "ukhyun",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "ukhyun",
        "effect": "heart",
        "motion": "zoom",
        "se": "promise"
      },
      {
        "type": "SCG",
        "id": "ukhyun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "STOP_BGM"
      }
    ]
  },
  {
    "id": "ending-jaeseong",
    "terminal": true,
    "type": "dialogue",
    "name": "재성",
    "role": "재성 엔딩",
    "place": "방송실 너머의 목소리",
    "text": "재성은 방송실 녹음 파일을 저장하지 않았다. 대신 마이크를 끄고 학범을 불렀고, 학범은 같은 거리에서 대답했다. 둘만 들은 목소리가 오늘의 엔딩 멘트가 됐다.",
    "effect": {
      "target": "jaeseong",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "jaeseong",
        "effect": "heart",
        "motion": "zoom",
        "se": "promise"
      },
      {
        "type": "SCG",
        "id": "jaeseong",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "STOP_BGM"
      }
    ]
  },
  {
    "id": "ending-sangwon",
    "terminal": true,
    "type": "dialogue",
    "name": "상원",
    "role": "상원 엔딩",
    "place": "고쳐 쓴 마지막 줄",
    "text": "상원은 마지막 기록의 오탈자를 보고도 고치지 않았다. 학범의 떨린 글씨 옆에 “증언 완료”라고만 적고 파일을 닫았다.",
    "effect": {
      "target": "sangwon",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "sangwon",
        "effect": "heart",
        "motion": "zoom",
        "se": "promise"
      },
      {
        "type": "SCG",
        "id": "sangwon",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "STOP_BGM"
      }
    ]
  },
  {
    "id": "ending-sanguk",
    "terminal": true,
    "type": "dialogue",
    "name": "상욱",
    "role": "상욱 엔딩",
    "place": "멈춰 선 결승선",
    "text": "상욱은 교문까지 먼저 뛰지 않았다. 학범이 한 걸음 내딛을 때마다 보폭을 맞췄고, 둘은 늦은 하굣길을 걸어서 통과했다.",
    "effect": {
      "target": "sanguk",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "sanguk",
        "effect": "heart",
        "motion": "zoom",
        "se": "promise"
      },
      {
        "type": "SCG",
        "id": "sanguk",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "STOP_BGM"
      }
    ]
  },
  {
    "id": "ending-junhyeok",
    "terminal": true,
    "type": "dialogue",
    "name": "준혁",
    "role": "준혁 엔딩",
    "place": "함께 그린 지도",
    "text": "준혁은 지도에서 최단 경로를 지웠다. 학범이 표시한 돌아가는 길 위에 둘의 이름을 쓰고, “소요 시간 미정”이라고 남겼다.",
    "effect": {
      "target": "junhyeok",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "junhyeok",
        "effect": "heart",
        "motion": "zoom",
        "se": "promise"
      },
      {
        "type": "SCG",
        "id": "junhyeok",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "STOP_BGM"
      }
    ]
  },
  {
    "id": "ending-dohun",
    "terminal": true,
    "type": "dialogue",
    "name": "도훈",
    "role": "도훈 엔딩",
    "place": "농담 뒤의 진심",
    "text": "도훈은 영수증 뒤의 고백을 접어 지갑에 넣었다. 놀릴 말은 많았지만 쓰지 않았고, 대신 학범에게 따뜻한 캔 하나를 밀어 주었다.",
    "effect": {
      "target": "dohun",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "dohun",
        "effect": "heart",
        "motion": "zoom",
        "se": "promise"
      },
      {
        "type": "SCG",
        "id": "dohun",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "STOP_BGM"
      }
    ]
  },
  {
    "id": "ending-haeum",
    "terminal": true,
    "type": "dialogue",
    "name": "하음",
    "role": "하음 엔딩",
    "place": "기다려 준 박자",
    "text": "하음은 메트로놈을 학범 앞에 놓았다. 학범이 첫 박자를 두드리자 하음이 다음 박자를 맞췄고, 둘은 틀린 박자까지 웃으며 다시 시작했다.",
    "effect": {
      "target": "haeum",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "haeum",
        "effect": "heart",
        "motion": "zoom",
        "se": "promise"
      },
      {
        "type": "SCG",
        "id": "haeum",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "STOP_BGM"
      }
    ]
  },
  {
    "id": "ending-yunho",
    "terminal": true,
    "type": "dialogue",
    "name": "윤호",
    "role": "윤호 엔딩",
    "place": "비가 그친 옥상",
    "text": "윤호는 옥상 문 뒤에서 기다리지 않았다. 학범이 이름을 부르자 바로 옆으로 와 섰고, 둘은 같은 난간에 마지막 페이지를 말렸다.",
    "effect": {
      "target": "yunho",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "yunho",
        "effect": "heart",
        "motion": "zoom",
        "se": "promise"
      },
      {
        "type": "SCG",
        "id": "yunho",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "STOP_BGM"
      }
    ]
  },
  {
    "id": "ending-good",
    "terminal": true,
    "type": "dialogue",
    "name": "현겸",
    "role": "굿 엔딩",
    "place": "같은 우산의 약속",
    "text": "현겸은 학범이 먼저 내민 우산 손잡이를 잡았다. 비가 약해질 때까지 둘은 교문 앞을 떠나지 않고 내일 걸을 길을 정했다.",
    "effect": {
      "target": "hyeongyeom",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "heart",
        "motion": "zoom",
        "se": "promise"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      },
      {
        "type": "STOP_BGM"
      }
    ]
  },
  {
    "id": "ending-normal",
    "terminal": true,
    "type": "dialogue",
    "name": "학범",
    "role": "노멀 엔딩",
    "place": "내일도 복도에서",
    "text": "학범은 복도 끝에서 현겸을 먼저 불렀다. 대답은 짧은 손짓뿐이었지만, 둘은 같은 우산꽂이 앞에서 다시 만나기로 했다.",
    "effect": {
      "target": "hyeongyeom",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "blush",
        "motion": "nod"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      }
    ]
  },
  {
    "id": "ending-quiet",
    "terminal": true,
    "type": "dialogue",
    "name": "학범",
    "role": "조용한 엔딩",
    "place": "비가 그친 뒤",
    "text": "비가 그친 뒤에도 학범은 우산을 접지 않았다. 말하지 못한 문장은 남았지만, 내일 먼저 다가갈 방향만은 분명했다.",
    "effect": {
      "target": "hyeongyeom",
      "type": "ellipsis"
    },
    "directives": [
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "ellipsis",
        "motion": "nod"
      },
      {
        "type": "SCG",
        "id": "hyeongyeom",
        "action": "delete",
        "transition": "fade-out"
      }
    ]
  }
];
