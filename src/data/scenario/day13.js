export const day13Scenes = [
  {
    "id": "day13-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-13",
    "sectionTitle": "Day 13: 잃어버린 원본과 마지막 불안",
    "mood": "tense",
    "text": "Day 13 · 잃어버린 원본과 마지막 불안",
    "nextId": "day13-opening",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day13-opening",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브실",
    "text": "축제 전날, 아카이브 원본이 있어야 할 서랍이 비어 있었다. 빈 클리어파일 안에는 학범의 이름만 적힌 봉투가 남아 있었다.",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      },
      {
        "type": "BGM",
        "cue": "bgmTense",
        "fadeMs": 700
      }
    ]
  },
  {
    "id": "day13-route-gate",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "독백",
    "place": "아카이브실",
    "endingGate": true,
    "routeGate": true,
    "endingNext": {
      "hyeongyeom": "day13-hyeongyeom-crisis",
      "ukhyun": "day13-ukhyun-crisis",
      "jaeseong": "day13-jaeseong-crisis",
      "sangwon": "day13-sangwon-crisis",
      "sanguk": "day13-sanguk-crisis",
      "junhyeok": "day13-junhyeok-crisis",
      "dohun": "day13-dohun-crisis",
      "haeum": "day13-haeum-crisis",
      "yunho": "day13-yunho-crisis",
      "good": "day13-hyeongyeom-crisis",
      "normal": "day13-hyeongyeom-crisis",
      "quiet": "day13-hyeongyeom-crisis",
      "default": "day13-hyeongyeom-crisis"
    },
    "text": "불안이 커질수록 학범은 혼자 움직이던 버릇부터 눌러 참았다. 오늘은 가장 먼저, 어제 함께 약점을 드러낸 사람에게 알리기로 했다."
  },
  {
    "id": "day13-hyeongyeom-crisis",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸은 빈 서랍 앞에서 오래 말이 없었다. 기다리면 괜찮아질 거라는 습관이 그의 표정을 더 흐리게 만들었다.",
    "nextId": "day13-hyeongyeom-search",
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
    "id": "day13-hyeongyeom-search",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "같은 우산",
    "text": "학범은 현겸을 데리고 교문 우산꽂이부터 살폈다. 현겸은 자꾸 뒤로 물러나려 했고, 학범은 그때마다 먼저 돌아서서 이름을 불렀다.",
    "nextId": "day13-hyeongyeom-fear"
  },
  {
    "id": "day13-hyeongyeom-fear",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "“네가 찾다가 힘들면 나한테 안 올까 봐 무서웠어.” 현겸은 기다림이 배려인지 도망인지 모르겠다고 털어놓았다.",
    "nextId": "day13-hyeongyeom-answer"
  },
  {
    "id": "day13-hyeongyeom-answer",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "같은 우산",
    "text": "학범은 봉투를 현겸에게 맡기고 먼저 우산을 펼쳤다. “이번엔 내가 갈게. 그러니까 너도 기다리기만 하지 마.” 현겸의 손이 우산대에 함께 닿았다.",
    "nextId": "day13-merge",
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
    "id": "day13-ukhyun-crisis",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현은 빈 서랍을 보자마자 메모를 세 장이나 꺼냈다. 말 대신 표시가 늘어날수록, 학범은 그가 겁을 먹었다는 걸 알았다.",
    "nextId": "day13-ukhyun-search",
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
    "id": "day13-ukhyun-search",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "접힌 노트",
    "text": "도서관 대출기록 앞에서 욱현은 필요한 단어를 계속 삼켰다. 학범은 펜을 건네지 않고, 그가 직접 말할 때까지 기다렸다.",
    "nextId": "day13-ukhyun-fear"
  },
  {
    "id": "day13-ukhyun-fear",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "“틀리면 네가 실망할까 봐.” 욱현은 접힌 모서리를 펴며 말했다. “그래서 말보다 증거 뒤에 숨었어.”",
    "nextId": "day13-ukhyun-answer"
  },
  {
    "id": "day13-ukhyun-answer",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "접힌 노트",
    "text": "학범은 빈 봉투에 한 줄을 적어 욱현 앞에 놓았다. “틀려도 네 말을 듣고 싶어.” 욱현은 그 답장을 접지 않고 가슴 앞에 들었다.",
    "nextId": "day13-merge",
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
    "id": "day13-jaeseong-crisis",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "재성은 방송실 로그를 뒤지며 일부러 더 시끄럽게 웃었다. 스피커가 켜질 때마다 진짜 걱정은 잡음처럼 뒤로 밀렸다.",
    "nextId": "day13-jaeseong-search",
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
    "id": "day13-jaeseong-search",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "방송실 너머",
    "text": "학범은 재성의 손에서 호출 마이크를 내려놓게 했다. 둘은 전원이 꺼진 부스 안에서, 누가 어떤 목소리로 원본을 부탁했는지 다시 들었다.",
    "nextId": "day13-jaeseong-fear"
  },
  {
    "id": "day13-jaeseong-fear",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "“농담으로 만들면 거절당해도 덜 아프잖아.” 재성은 웃지 못했다. “근데 네 일까지 그렇게 넘기면 안 되는 거였어.”",
    "nextId": "day13-jaeseong-answer"
  },
  {
    "id": "day13-jaeseong-answer",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "방송실 너머",
    "text": "학범은 녹음 파일 대신 재성의 얼굴을 봤다. “지금 목소리로 충분해.” 재성은 처음으로 대답을 저장하지 않고 고개만 끄덕였다.",
    "nextId": "day13-merge",
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
    "id": "day13-sangwon-crisis",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "상원은 사라진 서랍 번호와 시간을 빠르게 적었다. 하지만 학범의 손이 떨린 사실까지 적으려는 순간, 펜 끝이 멈췄다.",
    "nextId": "day13-sangwon-search",
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
    "id": "day13-sangwon-search",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브 원본",
    "text": "기록실에서 상원은 모든 파일을 원래 자리로 되돌리려 했다. 학범은 흐트러진 종이 하나를 일부러 남겨 두었다. 그 흔들림도 오늘의 증거였다.",
    "nextId": "day13-sangwon-fear"
  },
  {
    "id": "day13-sangwon-fear",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "“기록하지 않으면 잃을까 봐 무서워.” 상원은 낮게 말했다. “그런데 기록하려고만 해서 네가 숨을 곳을 없앴어.”",
    "nextId": "day13-sangwon-answer"
  },
  {
    "id": "day13-sangwon-answer",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브 원본",
    "text": "학범은 봉투 겉면에 시간을 쓰지 않았다. 상원은 그 빈자리를 고치지 않았다. “네가 말한 그대로 남길게.” 그 약속이 원본보다 먼저 돌아왔다.",
    "nextId": "day13-merge",
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
    "id": "day13-sanguk-crisis",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "상욱은 빈 서랍을 보자마자 복도로 뛰쳐나가려 했다. 학범이 부르자 그는 한 번 더 움직이다가, 겨우 멈춰 섰다.",
    "nextId": "day13-sanguk-search",
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
    "id": "day13-sanguk-search",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "체육관 동선",
    "text": "둘은 체육관 창고를 천천히 살폈다. 상욱은 빨리 찾을 수 있는 박스를 먼저 들려다 말고, 학범이 가리킨 낮은 선반부터 열었다.",
    "nextId": "day13-sanguk-fear"
  },
  {
    "id": "day13-sanguk-fear",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "“늦으면 또 못 지킬까 봐.” 상욱의 목소리가 거칠었다. “그래서 네 말도 끝까지 못 들었어.”",
    "nextId": "day13-sanguk-answer"
  },
  {
    "id": "day13-sanguk-answer",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "체육관 동선",
    "text": "학범은 상욱과 창고 문 앞에 나란히 앉았다. “지금은 같이 늦자.” 상욱은 달리지 않는 무릎 위에 봉투를 올려 두고 깊게 숨을 쉬었다.",
    "nextId": "day13-merge",
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
    "id": "day13-junhyeok-crisis",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "준혁은 분실 시간을 계산하더니 곧장 가장 가능성 높은 경로를 골랐다. 정답은 빨랐지만, 학범이 따라올 수 있는지는 계산 밖이었다.",
    "nextId": "day13-junhyeok-search",
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
    "id": "day13-junhyeok-search",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "지도 위 빈칸",
    "text": "학범은 준혁이 지운 느린 길을 다시 그렸다. 둘은 도서관 뒤편을 돌아갔고, 그 늦은 길에서 버려진 안내 팸플릿 조각을 발견했다.",
    "nextId": "day13-junhyeok-fear"
  },
  {
    "id": "day13-junhyeok-fear",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "“맞는 길이면 충분하다고 생각했어.” 준혁은 지도를 접었다. “그런데 네가 없는 정답은 그냥 선이더라.”",
    "nextId": "day13-junhyeok-answer"
  },
  {
    "id": "day13-junhyeok-answer",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "지도 위 빈칸",
    "text": "학범은 봉투를 지도 중앙이 아니라 준혁이 서 있는 길 위에 놓았다. 준혁은 그 위치를 새 기준점으로 표시했다.",
    "nextId": "day13-merge",
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
    "id": "day13-dohun-crisis",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "도훈은 빈 서랍을 보고도 “누가 장난 크게 치네”라고 말했다. 그러나 웃음은 끝까지 가지 못했고, 영수증 모서리가 손안에서 구겨졌다.",
    "nextId": "day13-dohun-search",
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
    "id": "day13-dohun-search",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "편의점 불빛",
    "text": "편의점 CCTV 시간표 앞에서 도훈은 농담 대신 자신이 몰래 부탁한 확인 전화를 고백했다. 학범은 정보값을 묻지 않았다.",
    "nextId": "day13-dohun-fear"
  },
  {
    "id": "day13-dohun-fear",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "“진지하게 굴면 네가 부담스러워할까 봐.” 도훈은 시선을 피했다. “그래서 중요한 말도 싸구려 농담처럼 만들었어.”",
    "nextId": "day13-dohun-answer"
  },
  {
    "id": "day13-dohun-answer",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "편의점 불빛",
    "text": "학범은 봉투를 건네며 말했다. “오늘은 값을 매기지 말자.” 도훈은 웃지 않고 받아 들었다. “응. 이건 그냥 같이 찾는 거다.”",
    "nextId": "day13-merge",
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
    "id": "day13-haeum-crisis",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 빈 서랍 앞에서 모두의 호흡을 살피다 자기 숨을 놓쳤다. 괜찮다고 말하는 목소리가 피아노 줄처럼 팽팽했다.",
    "nextId": "day13-haeum-search",
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
    "id": "day13-haeum-search",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "해질녘 음악실",
    "text": "음악실에서 하음은 문소리 박자를 맞추려 애썼지만 손끝이 자꾸 빨라졌다. 학범은 먼저 느린 박자를 두드려 그에게 맞춰 달라고 했다.",
    "nextId": "day13-haeum-fear"
  },
  {
    "id": "day13-haeum-fear",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "“네가 다른 박자로 가 버릴까 봐 무서웠어.” 하음은 작은 소리로 말했다. “그래서 내 불안은 계속 숨겼어.”",
    "nextId": "day13-haeum-answer"
  },
  {
    "id": "day13-haeum-answer",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "해질녘 음악실",
    "text": "학범은 봉투를 피아노 위에 놓고 첫 박자를 냈다. 하음은 두 번째 박자를 따라왔다. 이번에는 달래는 사람이 아니라 함께 떨리는 사람이었다.",
    "nextId": "day13-merge",
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
    "id": "day13-yunho-crisis",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 빈 서랍을 보고 바로 뒤로 물러났다. 선배 일에 자신이 끼면 방해가 될 거라는 오래된 버릇이 발끝에 걸렸다.",
    "nextId": "day13-yunho-search",
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
    "id": "day13-yunho-search",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "비 갠 옥상",
    "text": "학범은 옥상 문 앞에서 윤호를 기다렸다가 옆으로 불렀다. 둘은 난간 아래를 함께 살폈고, 마른 종이 사이에서 축제 팸플릿 조각을 찾았다.",
    "nextId": "day13-yunho-fear"
  },
  {
    "id": "day13-yunho-fear",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "“선배가 저를 후배로만 보면 어쩌나 했어요.” 윤호는 고개를 들었다. “그래서 도와주고 싶어도 뒤에 있었어요.”",
    "nextId": "day13-yunho-answer"
  },
  {
    "id": "day13-yunho-answer",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "비 갠 옥상",
    "text": "학범은 봉투를 윤호에게 맡기며 이름을 불렀다. “윤호야, 옆에서 같이 보자.” 윤호는 이번엔 뒤로 물러나지 않았다.",
    "nextId": "day13-merge",
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
    "id": "day13-merge",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "독백",
    "place": "중앙 계단",
    "text": "봉투 안에는 원본이 아니라 축제 팸플릿의 뒷면이 들어 있었다. “내일, 공개 고백 이벤트 뒤편. 빈 페이지를 직접 가져올 것.” 학범은 그 문장이 자신에게 쓰인 초대라는 걸 알았다.",
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
    "id": "choice-day13-final-risk",
    "type": "choice",
    "choices": [
      "혼자 미끼가 된다.",
      "선택한 사람에게 전부 말한다.",
      "친구들 모두에게 역할을 나눈다."
    ],
    "rewards": [
      {
        "flags": [
          "day13_self_bait"
        ]
      },
      {
        "flags": [
          "day13_full_confession"
        ]
      },
      {
        "flags": [
          "day13_team_plan"
        ]
      }
    ],
    "next": [
      "day13-risk-bait",
      "day13-risk-confess",
      "day13-risk-team"
    ]
  },
  {
    "id": "day13-risk-bait",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "중앙 계단",
    "text": "학범은 혼자 미끼가 되겠다고 적었다가, 바로 줄을 그었다. 혼자 해결하는 방식이야말로 이번 사건이 흔든 약점이었다.",
    "nextId": "day13-night-message"
  },
  {
    "id": "day13-risk-confess",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "중앙 계단",
    "text": "학범은 선택한 사람에게 전부 말하기로 했다. 숨기는 대신 맡기는 순간, 손끝의 떨림이 조금 줄었다.",
    "nextId": "day13-night-message"
  },
  {
    "id": "day13-risk-team",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "중앙 계단",
    "text": "학범은 모두에게 작은 역할을 나눴다. 마음은 하나를 향하지만, 사건은 모두의 안전 위에서 끝나야 했다.",
    "nextId": "day13-night-message"
  },
  {
    "id": "day13-night-message",
    "type": "phone",
    "kind": "phone",
    "chapter": "day-13",
    "name": "알 수 없음",
    "role": "메시지",
    "place": "밤의 화면",
    "text": "밤 11시 11분, 발신자 없는 메시지가 도착했다.",
    "messages": [
      {
        "from": "unknown",
        "text": "선택은 확인했다. 마지막 장은 축제에서 돌려준다.",
        "read": true
      },
      {
        "from": "unknown",
        "text": "단, 고백을 기록으로 대신하지 말 것.",
        "read": true
      }
    ],
    "nextId": "day13-closing"
  },
  {
    "id": "day13-closing",
    "type": "dialogue",
    "chapter": "day-13",
    "mood": "confession",
    "name": "학범",
    "role": "독백",
    "place": "자기 방",
    "text": "학범은 화면을 끄고도 한참 잠들지 못했다. 내일 돌려받아야 할 것은 원본만이 아니었다. 미뤄 둔 말, 선택한 마음, 그리고 도망치지 않는 자신이었다.",
    "nextId": "day14-chapter-card"
  }
];
