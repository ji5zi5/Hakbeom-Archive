export const day11Scenes = [
  {
    "id": "day11-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-11",
    "sectionTitle": "Day 11: 선택 다음 날의 확인",
    "mood": "warm",
    "text": "Day 11 · 선택 다음 날의 확인",
    "nextId": "day11-opening",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-morning-hallway.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day11-opening",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "아침 복도",
    "text": "학범은 빈 출석부 맨 아래에 어제 쓴 이름을 다시 보았다. 복도는 아직 덜 깬 색이었고, 오늘은 그 이름을 숨길 곳이 없었다.",
    "variants": [
      {
        "requiredFlags": [
          "route_lock_hyeongyeom"
        ],
        "text": "학범은 교문 우산꽂이 앞에서 현겸의 파란 리본을 먼저 알아봤다. 기다림을 확인하러 온 줄 알았는데, 오늘은 자신이 먼저 손잡이를 잡고 있었다."
      },
      {
        "requiredFlags": [
          "route_lock_ukhyun"
        ],
        "text": "학범의 책상에는 접히지 않은 메모가 한 장 놓여 있었다. 욱현은 답을 숨기지 않겠다는 듯 빈칸을 넓게 남겨 두었다."
      },
      {
        "requiredFlags": [
          "route_lock_jaeseong"
        ],
        "text": "방송실 표시등은 꺼져 있었지만 재성의 쪽지는 스피커 아래 붙어 있었다. “오늘 첫 목소리는 네가 정해.” 학범은 그 문장을 오래 들여다봤다."
      },
      {
        "requiredFlags": [
          "route_lock_sangwon"
        ],
        "text": "상원은 출입 명단을 들고도 학범의 이름 옆에 아무 표시를 하지 않았다. 빈칸을 남기는 일이 그에게는 처음 보는 배려처럼 보였다."
      },
      {
        "requiredFlags": [
          "route_lock_sanguk"
        ],
        "text": "체육관 쪽에서 급한 발소리가 오다가 학범 앞 세 걸음에서 멈췄다. 상욱은 숨을 고르고서야 “같이 갈래?”라고 물었다."
      },
      {
        "requiredFlags": [
          "route_lock_junhyeok"
        ],
        "text": "준혁은 지도의 최단 경로를 접어 가방에 넣었다. 대신 일부러 돌아가는 복도에 동그라미를 치고 학범이 따라올 시간을 남겨 두었다."
      },
      {
        "requiredFlags": [
          "route_lock_dohun"
        ],
        "text": "편의점 봉투가 학생회실 손잡이에 걸려 있었다. 영수증 뒤에는 도훈의 글씨로 “오늘은 대가 안 받음. 대신 밥 먹어.”라고 적혀 있었다."
      },
      {
        "requiredFlags": [
          "route_lock_haeum"
        ],
        "text": "음악실 문은 반쯤 열려 있었고 낮은 건반 하나가 천천히 울렸다. 하음은 학범의 걸음이 맞춰질 때까지 다음 음을 누르지 않았다."
      },
      {
        "requiredFlags": [
          "route_lock_yunho"
        ],
        "text": "옥상 계단 중간에서 윤호가 내려오고 있었다. 평소처럼 뒤에 서려다 멈춘 그는, 학범의 옆자리를 비워 둔 채 손을 흔들었다."
      },
      {
        "default": true,
        "text": "학범은 교문 우산꽂이 앞에서 현겸의 파란 리본을 먼저 알아봤다. 기다림을 확인하러 온 줄 알았는데, 오늘은 자신이 먼저 손잡이를 잡고 있었다."
      }
    ],
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-morning-hallway.png",
        "transition": "fade-in"
      },
      {
        "type": "BGM",
        "cue": "bgmWarm",
        "fadeMs": 700
      }
    ]
  },
  {
    "id": "day11-route-gate",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "독백",
    "place": "아침 복도",
    "endingGate": true,
    "routeGate": true,
    "endingNext": {
      "hyeongyeom": "day11-hyeongyeom-morning",
      "ukhyun": "day11-ukhyun-morning",
      "jaeseong": "day11-jaeseong-morning",
      "sangwon": "day11-sangwon-morning",
      "sanguk": "day11-sanguk-morning",
      "junhyeok": "day11-junhyeok-morning",
      "dohun": "day11-dohun-morning",
      "haeum": "day11-haeum-morning",
      "yunho": "day11-yunho-morning",
      "good": "day11-hyeongyeom-morning",
      "normal": "day11-hyeongyeom-morning",
      "quiet": "day11-hyeongyeom-morning",
      "default": "day11-hyeongyeom-morning"
    },
    "text": "선택은 밤새 사라지지 않았다. 학범은 어제 적은 이름을 주머니에 넣고, 가장 먼저 확인하고 싶은 얼굴 쪽으로 걸었다."
  },
  {
    "id": "day11-hyeongyeom-morning",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸은 아카이브 명단을 보고도 아무 말 하지 않았다. 학범이 지나간 다른 이름들 위에 시선이 잠깐 멈췄고, 그는 우산 손잡이만 더 세게 쥐었다.",
    "nextId": "day11-hyeongyeom-desk",
    "effect": {
      "target": "hyeongyeom",
      "type": "heart"
    },
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
    "id": "day11-hyeongyeom-desk",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "같은 우산",
    "text": "학범이 “그건 어제 정리한 이름들이야”라고 말하자 현겸은 고개만 끄덕였다. 질투를 꺼내지 않으려는 침묵 때문에 우산 아래가 더 좁아졌다.",
    "nextId": "day11-hyeongyeom-promise"
  },
  {
    "id": "day11-hyeongyeom-promise",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "confession",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "“알아. 그래도 오늘은 나랑 가.” 현겸은 그 말 뒤에 바로 물러나지 않았다. 학범은 우산 손잡이를 쥔 손끝의 힘이, 가지 말라는 말보다 오래 남는다고 느꼈다.",
    "nextId": "day11-merge",
    "effect": {
      "target": "hyeongyeom",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "blush",
        "motion": "zoom",
        "se": "promise"
      }
    ]
  },
  {
    "id": "day11-ukhyun-morning",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현은 학범이 아카이브에서 다시 펼친 페이지 번호를 먼저 말했다. 너무 낮은 목소리라 책장 넘기는 소리에 묻힐 뻔했지만, 학범은 그가 밤새 어디를 보고 있었는지 알아차렸다.",
    "nextId": "day11-ukhyun-desk",
    "effect": {
      "target": "ukhyun",
      "type": "heart"
    },
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
    "id": "day11-ukhyun-desk",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "접힌 노트",
    "text": "“그 페이지, 네가 세 번 읽었어.” 욱현은 탓하지 않았고, 그래서 더 가까웠다. 학범은 변명 대신 노트 가장자리를 눌러 접힌 자국을 폈다.",
    "nextId": "day11-ukhyun-promise"
  },
  {
    "id": "day11-ukhyun-promise",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "confession",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현은 책을 덮으며 “다른 줄로 넘어가도, 난 네가 돌아온 줄을 알아”라고 말했다. 학범은 그 조용한 확인이 고백보다 더 오래 붙잡는 방식임을 알았다.",
    "nextId": "day11-merge",
    "effect": {
      "target": "ukhyun",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "ukhyun",
        "effect": "blush",
        "motion": "zoom",
        "se": "promise"
      }
    ]
  },
  {
    "id": "day11-jaeseong-morning",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "재성은 “어제 인기 많으셨네?” 하고 한 번 웃었다. 그러나 학범이 대답하기 전, 그는 마이크 스위치를 내리고 장난을 멈췄다.",
    "nextId": "day11-jaeseong-desk",
    "effect": {
      "target": "jaeseong",
      "type": "heart"
    },
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
    "id": "day11-jaeseong-desk",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "방송실 너머",
    "text": "“방송용으로 묻는 거 아니야.” 재성의 비공개 목소리가 유리창 안쪽에 낮게 남았다. 학범은 웃어 넘길 말을 찾지 못하고 꺼진 마이크만 바라봤다.",
    "nextId": "day11-jaeseong-promise"
  },
  {
    "id": "day11-jaeseong-promise",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "confession",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "재성은 녹음 버튼에서 손을 뗀 채 “네가 고른 이름, 남들이 듣게 안 해”라고 말했다. 학범은 농담이 사라진 자리에 남은 목소리가 더 위험하게 다정하다고 느꼈다.",
    "nextId": "day11-merge",
    "effect": {
      "target": "jaeseong",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "jaeseong",
        "effect": "blush",
        "motion": "zoom",
        "se": "promise"
      }
    ]
  },
  {
    "id": "day11-sangwon-morning",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "상원은 어제 학범이 고른 이름이 적힌 기록지를 파일 맨 앞에 끼워 두었다. “삭제 요청은 받지 않을게.” 평소 같은 문장이었지만 끝이 조금 단단했다.",
    "nextId": "day11-sangwon-desk",
    "effect": {
      "target": "sangwon",
      "type": "heart"
    },
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
    "id": "day11-sangwon-desk",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브 원본",
    "text": "학범이 “그건 임시 기록 아니었어?”라고 묻자 상원은 펜 뚜껑을 닫았다. “임시였으면 네 손글씨까지 보관하지 않았어.”",
    "nextId": "day11-sangwon-promise"
  },
  {
    "id": "day11-sangwon-promise",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "confession",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "“네가 나를 선택한 증거야.” 상원은 그 말을 쓰지 않고 말했다. 지우지 않는 기록 앞에서 학범은 처음으로 누군가의 집착이 조용히 자신을 기다릴 수도 있다고 생각했다.",
    "nextId": "day11-merge",
    "effect": {
      "target": "sangwon",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "sangwon",
        "effect": "blush",
        "motion": "zoom",
        "se": "promise"
      }
    ]
  },
  {
    "id": "day11-sanguk-morning",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "상욱은 복도 끝에서 숨이 가쁘게 달려왔다. 학범이 아무 일도 없던 얼굴을 하려는 순간, 그는 한 발 앞에서 멈춰 “그렇게 지나가지 마”라고 말했다.",
    "nextId": "day11-sanguk-desk",
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
    "id": "day11-sanguk-desk",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "체육관 동선",
    "text": "학범은 괜찮다고 말하려다 상욱의 젖은 앞머리와 빠른 숨을 보았다. 상욱은 손목에 닿기 직전 손을 멈췄고, 그 참는 동작이 붙잡는 말보다 선명했다.",
    "nextId": "day11-sanguk-promise"
  },
  {
    "id": "day11-sanguk-promise",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "confession",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "“어제부터 달라졌잖아. 나만 모른 척 못 해.” 상욱은 끝내 손을 잡지 않고 옆으로 섰다. 학범은 그가 먼저 멈춘 거리 안에서 대답을 피할 수 없었다.",
    "nextId": "day11-merge",
    "effect": {
      "target": "sanguk",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "sanguk",
        "effect": "blush",
        "motion": "zoom",
        "se": "promise"
      }
    ]
  },
  {
    "id": "day11-junhyeok-morning",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "준혁은 지도 위 한 경로를 붉은 선으로 막아 두었다. “네가 돌아갈 수 있는 길 하나를 없앴어.” 설명은 침착했지만 손끝은 자를 놓지 못했다.",
    "nextId": "day11-junhyeok-desk",
    "effect": {
      "target": "junhyeok",
      "type": "heart"
    },
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
    "id": "day11-junhyeok-desk",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "지도 위 빈칸",
    "text": "학범이 이유를 묻자 준혁은 “그 길로 가면 다른 이름을 먼저 만나니까”라고 답했다. 계산처럼 들리게 하려 했지만, 마지막 음절에서 질투가 들켰다.",
    "nextId": "day11-junhyeok-promise"
  },
  {
    "id": "day11-junhyeok-promise",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "confession",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "“내가 그렇게 만들었어.” 준혁은 막힌 길 옆에 새 선을 그렸다. 학범은 통제라는 단어보다, 그가 처음으로 숨기지 않은 필요가 더 무겁게 다가왔다.",
    "nextId": "day11-merge",
    "effect": {
      "target": "junhyeok",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "junhyeok",
        "effect": "blush",
        "motion": "zoom",
        "se": "promise"
      }
    ]
  },
  {
    "id": "day11-dohun-morning",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "도훈은 “와, 어제 아주 바쁘셨네” 하고 웃었다. 웃음은 한 박자만 갔고, 곧바로 낮아진 목소리가 물었다. “그래서 어젯밤엔 누구랑 있었는데?”",
    "nextId": "day11-dohun-desk",
    "effect": {
      "target": "dohun",
      "type": "heart"
    },
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
    "id": "day11-dohun-desk",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "편의점 불빛",
    "text": "학범이 답을 미루자 도훈은 편의점 봉투를 내려놓았다. 농담이 빠진 얼굴은 낯설었고, 학범은 그가 웃지 않을 때 더 쉽게 상처받는다는 걸 알았다.",
    "nextId": "day11-dohun-promise"
  },
  {
    "id": "day11-dohun-promise",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "confession",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "“됐어. 말하기 싫으면 말하지 마.” 도훈은 먼저 물러나는 척했지만 시선은 학범의 손에 남았다. 학범은 그 질투가 장난보다 솔직한 보호처럼 느껴졌다.",
    "nextId": "day11-merge",
    "effect": {
      "target": "dohun",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "dohun",
        "effect": "blush",
        "motion": "zoom",
        "se": "promise"
      }
    ]
  },
  {
    "id": "day11-haeum-morning",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 음악실 문을 닫고 메트로놈을 껐다. “숨부터 맞출게.” 그의 손끝이 학범의 박자를 짚자, 말보다 조용한 지시가 먼저 닿았다.",
    "nextId": "day11-haeum-desk",
    "effect": {
      "target": "haeum",
      "type": "heart"
    },
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
    "id": "day11-haeum-desk",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "해질녘 음악실",
    "text": "학범이 들이마시는 속도가 흐트러지자 하음은 낮게 숫자를 세었다. 두 사람의 숨이 같은 간격에 놓이자, 음악실 정적이 어깨가 닿는 거리만큼 좁아졌다.",
    "nextId": "day11-haeum-promise"
  },
  {
    "id": "day11-haeum-promise",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "confession",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 더 가까워지기 전에 먼저 손을 내렸다. “여기까지만.” 그 참아 낸 거리가 다정해서, 학범은 말하지 않은 다음 박자를 오래 듣고 있었다.",
    "nextId": "day11-merge",
    "effect": {
      "target": "haeum",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "haeum",
        "effect": "blush",
        "motion": "zoom",
        "se": "promise"
      }
    ]
  },
  {
    "id": "day11-yunho-morning",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 옥상 난간 옆에서 먼저 와 기다리고 있었다. 학범이 얼굴을 들기 전까지 그는 아무 말도 하지 않았고, 눈이 마주친 뒤에야 아주 낮게 “선배”라고 불렀다.",
    "nextId": "day11-yunho-desk",
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
    "id": "day11-yunho-desk",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "비 갠 옥상",
    "text": "“어제 이름, 저 혼자 크게 생각한 거 아니죠?” 윤호는 웃지 않았다. 학범이 한 걸음 다가서자 그는 물러나지 않고, 대신 손에 든 이름표만 꼭 쥐었다.",
    "nextId": "day11-yunho-promise"
  },
  {
    "id": "day11-yunho-promise",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "confession",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 “선배가 부르면 갈게요. 안 불러도 기다릴 거고요”라고 말했다. 학범은 그 말끝의 호칭이 허락을 구하면서도 이미 곁을 정해 둔 소리임을 알았다.",
    "nextId": "day11-merge",
    "effect": {
      "target": "yunho",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "yunho",
        "effect": "blush",
        "motion": "zoom",
        "se": "promise"
      }
    ]
  },
  {
    "id": "day11-merge",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "독백",
    "place": "아카이브실",
    "text": "각자의 아침은 달랐지만 결론은 같았다. 학범이 고른 이름은 단서 목록의 항목이 아니라, 오늘을 함께 시작할 사람의 자리였다.",
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
    "id": "choice-day11-archive-stance",
    "type": "choice",
    "choices": [
      "상대의 불안을 먼저 묻는다.",
      "사건의 진실을 끝까지 추적한다.",
      "둘 다 놓치지 않겠다고 말한다."
    ],
    "rewards": [
      {
        "flags": [
          "day11_care_first"
        ]
      },
      {
        "flags": [
          "day11_truth_first"
        ]
      },
      {
        "flags": [
          "day11_together_first"
        ]
      }
    ],
    "next": [
      "day11-stance-care",
      "day11-stance-truth",
      "day11-stance-together"
    ]
  },
  {
    "id": "day11-stance-care",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브실",
    "text": "학범은 증거보다 먼저 상대가 밤새 괜찮았는지 물었다. 그 한마디 때문에 아카이브실의 공기가 조금 부드러워졌다.",
    "nextId": "day11-phone-night"
  },
  {
    "id": "day11-stance-truth",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브실",
    "text": "학범은 기록의 순서를 다시 맞췄다. 마음을 정했기 때문에, 오히려 사건을 끝까지 볼 힘이 생겼다.",
    "nextId": "day11-phone-night"
  },
  {
    "id": "day11-stance-together",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브실",
    "text": "학범은 둘 중 하나만 고르지 않겠다고 말했다. 마음도 사건도 혼자 처리하지 않는다는 선언이었다.",
    "nextId": "day11-phone-night"
  },
  {
    "id": "day11-phone-night",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-11",
    "name": "학범",
    "role": "메시지",
    "place": "밤의 메시지",
    "text": "그날 밤, 학범은 답장을 쓰기 전에 한 번 더 숨을 골랐다.",
    "messages": [
      {
        "from": "system",
        "text": "아카이브 카드 사진이 도착했습니다.",
        "read": true
      },
      {
        "from": "hakbeom",
        "text": "오늘 고마웠어. 내일은 내가 먼저 말할게.",
        "read": true
      },
      {
        "from": "partner",
        "typing": true
      }
    ],
    "replies": [
      "내일 아침에 직접 보자고 답한다.",
      "오늘의 단서를 정리해 보낸다.",
      "괜히 장난스러운 이모티콘을 보낸다."
    ],
    "rewards": [
      {
        "flags": [
          "day11_reply_direct"
        ]
      },
      {
        "flags": [
          "day11_reply_record"
        ]
      },
      {
        "flags": [
          "day11_reply_playful"
        ]
      }
    ],
    "next": [
      "day11-reply-direct",
      "day11-reply-record",
      "day11-reply-playful"
    ]
  },
  {
    "id": "day11-reply-direct",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "독백",
    "place": "자기 방",
    "text": "학범은 짧게 “내일 직접 말할게”라고 보냈다. 화면 너머의 침묵이 오히려 대답처럼 따뜻했다.",
    "nextId": "day11-closing"
  },
  {
    "id": "day11-reply-record",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "독백",
    "place": "자기 방",
    "text": "학범은 단서를 세 줄로 정리했다. 마지막 줄에는 자신도 모르게 “혼자 하지 말기”라고 적혀 있었다.",
    "nextId": "day11-closing"
  },
  {
    "id": "day11-reply-playful",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "warm",
    "name": "학범",
    "role": "독백",
    "place": "자기 방",
    "text": "학범은 장난스러운 이모티콘을 보냈다가 곧바로 후회했다. 하지만 돌아온 웃음 표시 때문에 밤은 조금 덜 길어졌다.",
    "nextId": "day11-closing"
  },
  {
    "id": "day11-closing",
    "type": "dialogue",
    "chapter": "day-11",
    "mood": "tense",
    "name": "학범",
    "role": "독백",
    "place": "자기 방",
    "text": "잠들기 직전, 카드 사진의 가장자리에 보이지 않던 문장이 떠올랐다. “축제 리허설, 마지막 줄을 확인할 것.” 학범은 알람을 한 시간 앞당겼다.",
    "nextId": "day12-chapter-card"
  }
];
