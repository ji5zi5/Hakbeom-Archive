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
    "text": "현겸은 우산꽂이 옆에서 빈손으로 서 있었다. “비 안 오는데도 여기 오면 네가 올 것 같아서.” 기다림을 숨기지 않은 말이 학범의 아침을 곧장 열었다.",
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
    "text": "학범은 매점에서 산 따뜻한 캔을 현겸에게 먼저 건넸다. 늘 받기만 하던 기다림에 처음으로 자신이 도착했다는 표시였다.",
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
    "text": "현겸은 캔을 두 손으로 감싸고 웃었다. “오늘은 네가 먼저 왔네.” 학범은 대답 대신 우산 손잡이에 새 이름표를 묶었다. 둘이 함께 쓸 우산이라는 표시였다.",
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
    "text": "욱현은 노트를 펼쳐 둔 채 학범을 기다렸다. 접힌 자국은 남아 있었지만, 오늘의 문장은 숨지 않고 첫 줄에 있었다. “어제 이름, 지우지 않았지?”",
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
    "text": "학범은 욱현의 노트 여백에 짧게 적었다. “안 지웠어.” 말로 하면 흘러갈 답이 종이 위에서는 욱현의 손끝에 오래 머물렀다.",
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
    "text": "욱현은 노트를 덮지 않았다. “읽었어. 이번엔 내가 먼저 숨기지 않을게.” 학범은 펜 뚜껑을 닫으며, 답장을 미루지 않은 자신을 처음 기록했다.",
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
    "text": "재성은 방송실 문을 열어 두고도 마이크 전원을 켜지 않았다. “오늘은 효과음 없어. 네 표정 틀리면 바로 들키거든.” 장난 끝이 드물게 조용했다.",
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
    "text": "학범은 스위치가 내려간 마이크 앞에 앉았다. 재성의 목소리는 스피커를 통하지 않자 오히려 더 가까웠고, 농담보다 먼저 숨이 들렸다.",
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
    "text": "재성은 녹음 버튼에서 손을 뗐다. “기억은 할게. 남기지는 않을게.” 학범은 그 약속이 무대보다 어려운 진심이라는 걸 알았다.",
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
    "text": "상원은 파일철을 들고도 학범에게 먼저 묻지 않았다. 출입 시간보다 학범의 얼굴을 보는 데 몇 초를 더 쓴 뒤, 그는 빈 라벨 하나를 내밀었다.",
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
    "text": "학범은 라벨에 아무 날짜도 쓰지 않았다. 상원은 불편한 듯 손가락을 움직이다가, 끝내 고치지 않았다. 통제하지 않는 기록이 둘 사이에 놓였다.",
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
    "text": "“네가 말하기 전까지는 기록하지 않을게.” 상원은 그렇게 말하고 펜을 내려놓았다. 학범은 그 침묵을 처음으로 믿어 보기로 했다.",
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
    "text": "상욱은 뛰어오다 멈춘 탓에 운동화 앞코가 바닥을 끌었다. “이번엔 안 지나쳤어.” 숨찬 고백 같은 보고에 학범은 웃음보다 안도를 먼저 느꼈다.",
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
    "text": "학범은 상욱과 체육관 문을 천천히 밀었다. 상욱은 답답해하면서도 앞서 달리지 않았고, 학범은 그 느린 보폭이 자신을 기다리는 방식임을 알았다.",
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
    "text": "“필요하면 뛸게. 그런데 네가 말할 때는 멈출게.” 상욱의 약속은 짧았다. 학범은 남색 실밥을 손바닥에 올려 두고 같이 걸어 나왔다.",
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
    "text": "준혁은 지도 대신 빈 종이를 폈다. “오늘은 네가 선을 그어.” 효율을 내려놓은 말인데도, 그의 표정은 이상하게 홀가분했다.",
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
    "text": "학범은 가장 가까운 길이 아닌 도서관 뒤편을 표시했다. 준혁은 이유를 묻지 않고 그 길의 소요 시간을 작게 적었다. 계산은 따라왔지만 선택을 앞지르지 않았다.",
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
    "text": "“비효율적이네.” 준혁이 말하고 바로 덧붙였다. “그래서 좋을 수도 있어.” 학범은 지도 한쪽에 둘이 늦어도 되는 시간을 남겨 두었다.",
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
    "text": "도훈은 평소처럼 웃으며 봉투를 흔들었다가, 학범이 묻기도 전에 웃음을 접었다. “밥은 먹었냐. 이건 농담 아니고.”",
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
    "text": "학범은 영수증을 보기 전에 샌드위치를 반으로 나눴다. 도훈은 대가를 계산하려다 말고, “고맙다” 한마디를 낯설게 삼켰다.",
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
    "text": "“나 무서우면 웃거든.” 도훈이 먼저 말했다. 학범은 그 고백을 놀리지 않았다. 대신 다음엔 웃기 전에 불러 달라고 했다.",
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
    "text": "하음은 메트로놈을 꺼 둔 채 학범을 기다렸다. “오늘 박자는 네가 정해.” 늘 맞춰 주던 사람이 처음으로 시작을 맡겼다.",
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
    "text": "학범은 손끝으로 책상을 두 번 두드렸다. 하음은 그 느린 박자에 맞춰 숨을 쉬었고, 학범은 누군가가 자신의 불안을 따라오는 감각을 배웠다.",
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
    "text": "“나도 가끔 틀릴까 봐 무서워.” 하음의 고백은 낮은 음처럼 작았다. 학범은 세 번째 박자를 먼저 두드려, 같이 틀려도 된다고 답했다.",
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
    "text": "윤호는 “선배”라고 부르려다 학범의 눈을 보고 이름표를 고쳐 잡았다. “오늘은 옆에서 걸어도 돼요?” 허락을 구하는 말끝에 기대가 섞여 있었다.",
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
    "text": "학범은 옥상으로 올라가며 윤호를 뒤에 두지 않았다. 계단참마다 나란히 멈추자, 윤호의 어깨가 조금씩 학범 쪽으로 풀렸다.",
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
    "text": "“윤호야.” 학범이 이름을 부르자 윤호가 바로 고개를 들었다. 그 짧은 호명만으로도, 기다리던 후배 자리가 조금 앞으로 옮겨졌다.",
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
