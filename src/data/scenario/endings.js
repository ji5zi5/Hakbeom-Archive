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
    "text": "내일도 내가 먼저 갈게. 오늘 닫은 마지막 페이지는 같이 천천히 다시 열자.",
    "variants": [
      {
        "requiredFlags": [
          "hyeongyeom_route"
        ],
        "text": "현겸아, 내일은 비가 안 와도 같은 우산을 핑계로 삼지 않을게."
      },
      {
        "requiredFlags": [
          "ukhyun_route"
        ],
        "text": "욱현아, 내일은 접힌 여백에 둘의 글씨를 나란히 남기자."
      },
      {
        "requiredFlags": [
          "jaeseong_route"
        ],
        "text": "재성아, 내일도 송출하지 않을 목소리로 너를 부를게."
      },
      {
        "requiredFlags": [
          "sangwon_route"
        ],
        "text": "상원아, 공개하지 않을 한 줄은 오늘처럼 둘이서만 지키자."
      },
      {
        "requiredFlags": [
          "sanguk_route"
        ],
        "text": "상욱아, 내일은 먼저 멈추고 물어봐 줘. 그러면 내가 네 옆으로 갈게."
      },
      {
        "requiredFlags": [
          "junhyeok_route"
        ],
        "text": "준혁아, 내일도 하나쯤은 계산하지 않은 길로 남겨 두자."
      },
      {
        "requiredFlags": [
          "dohun_route"
        ],
        "text": "도훈아, 내일도 그 영수증은 놀리지 말고 잘 접어 둬."
      },
      {
        "requiredFlags": [
          "haeum_route"
        ],
        "text": "하음아, 내일은 박자를 세지 않아도 같은 템포로 있자."
      },
      {
        "requiredFlags": [
          "yunho_route"
        ],
        "text": "윤호야, 내일은 덜 기다리고 더 물어봐. 그래도 선배라고 불러 줘."
      },
      {
        "default": true,
        "text": "내일도 내가 먼저 갈게. 오늘 닫은 마지막 페이지는 같이 천천히 다시 열자."
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
    "text": "현겸은 젖은 교문 앞에서 우산을 접었다. 이제 같은 우산은 만날 핑계가 아니었다. 학범이 손잡이를 내밀자 그는 리본을 고쳐 묶고, “비 안 와도 이 길로 가자”라고 말했다.",
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
    "text": "욱현은 노트를 접지 않고 학범에게 돌려줬다. 여백에는 이제 두 사람의 글씨가 번갈아 남아 있었다. 마지막 줄은 일부러 비워 두었고, 둘은 내일의 답장을 위해 책갈피를 꽂았다.",
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
    "text": "재성은 방송실의 사적인 녹음을 어디에도 틀지 않았다. 마이크는 꺼져 있었고 문은 닫혀 있었다. 둘만 들은 목소리는 파일명이 아니라, 다음에 다시 부를 약속으로 남았다.",
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
    "text": "상원은 아카이브 기록에 “증언 완료”라고만 남겼다. 하지만 가장 중요한 한 줄은 공개 목록에 올리지 않았다. 학범의 떨린 글씨는 닫힌 파일 안에서만 안전했다.",
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
    "text": "상욱은 교문까지 먼저 뛰지 않았다. 반사적으로 손이 나가려 할 때마다 멈추고 학범의 표정을 먼저 확인했다. 그렇게 배운 속도로, 둘은 늦은 하굣길을 걸어서 통과했다.",
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
    "text": "준혁은 지도에서 최단 경로를 지웠다. 한 갈래만은 끝까지 최적화하지 않기로 했다. 학범이 표시한 돌아가는 길 위에 둘의 이름과 “소요 시간 미정”이 나란히 남았다.",
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
    "text": "도훈은 영수증 뒤의 고백을 반듯하게 접어 지갑에 넣었다. 놀릴 말은 많았지만 쓰지 않았다. 대신 구겨지지 않게 손바닥으로 한 번 눌러 펴고, 학범에게 따뜻한 캔 하나를 밀어 주었다.",
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
    "text": "하음은 메트로놈을 켜지 않았다. 학범이 숨을 고르자 하음도 같은 길이로 숨을 골랐다. 둘은 숫자를 세지 않고도 같은 템포를 지켰고, 틀린 박자까지 조용히 다시 맞췄다.",
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
    "text": "윤호는 옥상 문 뒤에서 오래 기다리지 않았다. 궁금한 것은 먼저 물었고, 그래도 대답 끝에는 늘 “선배”가 붙었다. 학범이 이름을 부르면 그는 바로 옆으로 와, 같은 난간에 마지막 페이지를 말렸다.",
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
    "text": "현겸은 학범이 먼저 내민 우산 손잡이를 잡았다. 비가 약해질 때까지 둘은 교문 앞을 떠나지 않았다. 이제 우산은 핑계가 아니라, 천천히 집에 돌아가는 방식이었다.",
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
    "text": "학범은 복도 끝에서 현겸을 먼저 불렀다. 대답은 짧은 손짓뿐이었지만, 둘은 우산꽂이 앞에서 핑계 없이 다시 만나기로 했다.",
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
    "text": "비가 그친 뒤에도 학범은 우산을 급히 접지 않았다. 말하지 못한 문장은 남았지만, 내일 핑계 없이 먼저 다가갈 방향만은 분명했다.",
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
