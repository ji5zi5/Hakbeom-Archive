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
    "text": "축제가 끝난 교문에서 학범은 우산을 조금 낮췄다. 마지막 페이지는 젖지 않았고, 손잡이 가까이에 남은 온기만 또렷했다. “내일도 내가 먼저 갈게. 그러니까 오늘처럼, 조금만 더 같이 있어 줘.”",
    "variants": [
      {
        "requiredFlags": [
          "route_lock_hyeongyeom"
        ],
        "text": "현겸아, 내일은 비가 안 와도 같은 우산을 펴자. 손잡이는 반씩 잡고, 핑계는 내가 만들게."
      },
      {
        "requiredFlags": [
          "route_lock_ukhyun"
        ],
        "text": "욱현아, 내일은 접힌 여백 없이 말할게. 그래도 네가 책갈피를 꽂아 주면 오래 기억할 수 있을 것 같아."
      },
      {
        "requiredFlags": [
          "route_lock_jaeseong"
        ],
        "text": "재성아, 내일도 마이크 꺼진 곳에서 불러줘. 네 장난이 멈추는 순간까지 내가 듣고 있을게."
      },
      {
        "requiredFlags": [
          "route_lock_sangwon"
        ],
        "text": "상원아, 내일의 한 줄은 공개하지 않아도 돼. 대신 네가 제일 먼저 읽어 주면 좋겠어."
      },
      {
        "requiredFlags": [
          "route_lock_sanguk"
        ],
        "text": "상욱아, 내일은 결승선 앞에서 같이 멈췄다가 같이 뛰자. 네가 기다려 준 만큼 내가 먼저 손 흔들게."
      },
      {
        "requiredFlags": [
          "route_lock_junhyeok"
        ],
        "text": "준혁아, 내일도 지도에 없는 길을 하나 남겨 두자. 네가 계산하지 못한 표정을 내가 보여줄게."
      },
      {
        "requiredFlags": [
          "route_lock_dohun"
        ],
        "text": "도훈아, 내일은 영수증 말고 네 얼굴 보고 대답할게. 그러니까 장난 뒤에 숨지 말고 기다려."
      },
      {
        "requiredFlags": [
          "route_lock_haeum"
        ],
        "text": "하음아, 내일은 악보 없이도 같은 박자로 걷자. 틀리면 웃고, 다시 맞추면 되니까."
      },
      {
        "requiredFlags": [
          "route_lock_yunho"
        ],
        "text": "윤호야, 내일은 선배보다 먼저 이름으로 불러줘. 네가 부르면 내가 바로 돌아볼게."
      },
      {
        "default": true,
        "text": "축제가 끝난 교문에서 학범은 우산을 조금 낮췄다. 마지막 페이지는 젖지 않았고, 손잡이 가까이에 남은 온기만 또렷했다. “내일도 내가 먼저 갈게. 그러니까 오늘처럼, 조금만 더 같이 있어 줘.”"
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
    "text": "현겸은 비가 약해진 뒤에도 우산을 접지 않았다. 학범이 “이제 괜찮지?”라고 묻자 그는 손잡이를 더 가까이 잡고 웃었다. “비 안 와도 이 길로 가자. 핑계 없어도, 나는 너랑 나란히 걷고 싶어.”",
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
    "text": "욱현은 노트를 접지 않고 학범에게 돌려줬다. 마지막 줄에는 둘의 글씨가 조금 삐뚤게 겹쳐 있었다. “네가 말해 준 문장, 오늘은 안 접어 둘래. 내일도 직접 들려줘. 내가 먼저 창가 자리 맡아둘게.”",
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
    "text": "재성은 방송실 문을 잠그고 마이크 전원을 다시 확인했다. “꺼졌어. 완전 비공개.” 웃음기 섞인 목소리는 곧 조용해졌다. “그러니까 한 번만 더 말해줘. 학범이가 나 좋아한다고 한 거, 나만 듣게.”",
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
    "text": "상원은 문화제 기록집에 “공식 기록 완료”라고 적고 펜을 닫았다. 가장 중요한 한 줄은 학범 손바닥 위에만 남겼다. “오늘 문장은 공개 안 할게. 대신 내일 네가 부르면, 내가 제일 먼저 알아들을게.”",
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
    "text": "상욱은 교문까지 먼저 뛰지 않았다. 학범이 손을 내밀 때까지 두 발을 꾹 붙이고 기다렸다. “나 잘 참고 있지?” 대답 대신 손이 잡히자 그는 환하게 웃었다. “그럼 이제 같이 뛰어도 돼? 아주 조금만.”",
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
    "text": "준혁은 지도에서 최단 경로를 지우고 “소요 시간 미정”이라고 적었다. 학범이 왜냐고 묻자 그는 펜을 멈춘 채 말했다. “네가 옆에 있으면 예측값이 의미 없어. 그래서 좋아. 내일도 계산 안 되는 길로 가자.”",
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
    "text": "도훈은 영수증 뒤의 “좋아함. 장난 아님.”을 반듯하게 접어 지갑에 넣었다. 학범이 웃자 그는 따뜻한 캔을 밀어 주며 투덜댔다. “놀리면 압수야. 대신 대답은 지금 해. 나, 기다리는 거 별로 못하거든.”",
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
    "text": "하음은 메트로놈을 켜지 않았다. 학범이 숨을 고르자 하음도 같은 길이로 숨을 골랐다. “오늘 박자, 조금 떨렸지. 그래도 좋아. 내일은 네가 틀려도 내가 기다려 줄게.” 빈 악보 위로 봄밤이 천천히 내려앉았다.",
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
    "text": "윤호는 옥상 문 뒤에서 오래 기다리지 않았다. 학범이 이름을 부르자 바로 옆으로 왔다. “선배… 아니, 학범 형.” 말끝이 떨렸지만 도망치지 않았다. “내일도 이렇게 불러도 돼요? 그럼 저, 더 잘 기다릴 수 있어요.”",
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
    "text": "현겸은 학범이 먼저 내민 우산 손잡이를 잡았다. 비가 약해질 때까지 둘은 교문 앞을 떠나지 않았다. “오늘은 집까지 천천히 가자. 신호 한 번 놓쳐도, 너랑이면 조금 더 좋을 것 같아.”",
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
    "text": "학범은 복도 끝에서 현겸을 먼저 불렀다. 현겸은 대답 대신 우산 손잡이를 살짝 흔들었다. “핑계 없어도 와도 돼?”라는 말에 학범이 웃자, 둘은 우산꽂이 앞에서 내일의 약속을 다시 접었다.",
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
    "text": "비가 그친 뒤에도 학범은 우산을 급히 접지 않았다. 말하지 못한 문장은 남았지만, 휴대폰에는 “내일 잠깐 볼래?”라는 메시지가 이미 적혀 있었다. 보내기 버튼 위에서 손끝이 떨려도, 방향은 분명했다.",
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
