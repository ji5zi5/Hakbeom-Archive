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
    "text": "현겸은 빈 서랍보다 우산꽂이를 더 오래 보았다. 학범이 우산을 돌려주고 나면, 다시 만날 핑계까지 접힐까 봐 그의 손끝이 젖어 있었다.",
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
    "text": "학범은 현겸과 교문 우산꽂이부터 뒤졌다. 현겸은 “찾으면 바로 돌려줄게”라는 말을 삼켰고, 학범은 그 침묵이 작별 연습처럼 들린다는 걸 알아차렸다.",
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
    "text": "“우산을 돌려주면 끝날까 봐 무서웠어.” 현겸은 낮게 말했다. “네가 고맙다고 웃고, 그다음엔 더는 나를 부르지 않을까 봐.”",
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
    "text": "학범은 봉투를 현겸에게 맡기고 우산을 펼쳤다. “핑계가 없어도 부를게.” 현겸의 손이 손잡이 위로 겹쳤고, 둘 다 먼저 놓지 않았다.",
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
    "text": "욱현은 빈 서랍 앞에서 접어 둔 쪽지를 꺼냈다가 다시 쥐었다. 읽히지 않은 줄이 남아 있는 한, 자신이 너무 오래 침묵했다는 증거도 남아 있을 것 같았다.",
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
    "text": "도서관 대출기록 앞에서 욱현은 펜을 들지 못했다. 학범은 새 메모를 요구하지 않고, 접힌 쪽지 사이에 갇힌 숨이 먼저 풀리기를 기다렸다.",
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
    "text": "“안 읽은 줄이 있으면, 아직 기회가 남은 것처럼 보였어.” 욱현은 쪽지 모서리를 폈다. “그런데 사실은 내가 너무 늦었다는 표시 같았어.”",
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
    "text": "학범은 빈 봉투에 한 줄을 적어 욱현 앞에 놓았다. “늦어도 읽을게.” 욱현은 그 답장을 접지 않고, 가슴 앞에서 오래 붙들었다.",
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
    "text": "재성은 방송실 로그를 뒤지며 일부러 밝게 웃었다. 스피커가 켜질수록 학범에게 닿는 건 진행 멘트뿐이고, 자기 목소리는 끝내 못 들릴까 봐 겁이 났다.",
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
    "text": "학범은 재성의 손에서 호출 마이크를 내려놓게 했다. 전원이 꺼진 부스 안에서야 재성의 말끝이 흔들렸고, 학범은 그 흔들림을 놓치지 않았다.",
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
    "text": "“마이크를 켜면 다들 듣잖아.” 재성은 웃지 못했다. “근데 네가 듣는 건 내 멘트뿐이고, 진짜로 부르는 목소리는 못 알아챌까 봐 무서웠어.”",
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
    "text": "학범은 녹음 파일 대신 재성의 얼굴을 봤다. “방송 아닌 목소리도 들려.” 재성은 처음으로 대답을 저장하지 않고, 가까운 숨으로만 고개를 끄덕였다.",
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
    "text": "상원은 사라진 서랍 번호와 시간을 빠르게 적었다. 그러나 학범이 누구를 선택할지 기록하지 못한 줄만큼은, 남의 손에 빼앗길 수 있다는 생각에 펜이 멈췄다.",
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
    "text": "기록실에서 상원은 모든 파일을 원래 자리로 되돌리려 했다. 학범은 흐트러진 종이 하나를 일부러 남겨 두었고, 상원은 처음으로 정리보다 선택을 먼저 보았다.",
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
    "text": "“기록하지 않은 선택은 너무 쉽게 도난당하잖아.” 상원은 낮게 말했다. “네가 직접 고른 마음까지 누가 증거처럼 가져가 버릴까 봐 무서웠어.”",
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
    "text": "학범은 봉투 겉면에 시간을 쓰지 않았다. 상원은 그 빈자리를 고치지 않았다. “남겨야 할 것과 숨겨야 할 것, 이번엔 네가 정해.” 그 약속이 원본보다 먼저 돌아왔다.",
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
    "text": "상욱은 빈 서랍을 보자마자 복도로 뛰쳐나가려 했다. 한 번 늦었던 기억이 발목을 잡았고, 이번에도 학범에게 늦게 도착할까 봐 숨이 거칠어졌다.",
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
    "text": "둘은 체육관 창고를 천천히 살폈다. 상욱은 빨리 찾을 수 있는 박스를 들려다 말고, 학범이 닿을 수 있는 낮은 선반부터 함께 열었다.",
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
    "text": "“늦으면 또 네가 혼자 버틸까 봐.” 상욱의 목소리가 거칠었다. “그래서 이번엔 먼저 뛰어가야 한다고만 생각했어. 네가 멈추라고 하는 것도 못 듣고.”",
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
    "text": "학범은 상욱과 창고 문 앞에 나란히 앉았다. “늦어도 내 옆이면 돼.” 상욱은 달리지 않는 무릎 위에 봉투를 올려 두고, 학범의 호흡에 맞춰 천천히 숨을 골랐다.",
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
    "text": "준혁은 분실 시간을 계산하더니 곧장 가장 가능성 높은 경로를 골랐다. 그러나 끝내 계산되지 않는 하나, 학범이 떠나는 경우의 수가 지도 바깥에서 그를 흔들었다.",
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
    "text": "학범은 준혁이 지운 느린 길을 다시 그렸다. 둘은 도서관 뒤편을 돌아갔고, 준혁은 효율이 빠진 여백에서야 학범의 보폭을 확인했다.",
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
    "text": "“떠나는 경로만은 못 계산하겠더라.” 준혁은 지도를 접었다. “네가 없는 정답은 너무 깨끗해서, 오히려 아무것도 아닌 선처럼 보여.”",
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
    "text": "학범은 봉투를 지도 중앙이 아니라 준혁이 서 있는 길 위에 놓았다. 준혁은 그 위치를 새 기준점으로 표시하고, 일부러 시간을 적지 않았다.",
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
    "text": "도훈은 빈 서랍을 보고도 “누가 장난 크게 치네”라고 말했다. 그러나 웃음은 끝까지 가지 못했다. 중요한 순간까지 장난으로 보였을까 봐 영수증 모서리가 손안에서 구겨졌다.",
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
    "text": "편의점 CCTV 시간표 앞에서 도훈은 농담 대신 자신이 몰래 부탁한 확인 전화를 고백했다. 학범이 정보값을 묻지 않자, 도훈은 더는 웃음으로 계산서를 덮지 못했다.",
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
    "text": "“계속 웃기만 해서, 네가 나를 가볍게 봤을까 봐.” 도훈은 시선을 피했다. “진짜로 잡아야 할 때도 장난치는 애처럼 보였으면 어떡하나 했어.”",
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
    "text": "학범은 봉투를 건네며 말했다. “오늘은 농담으로 넘기지 말자.” 도훈은 웃지 않고 받아 들었다. “응. 이건 그냥 같이 지키는 거다.”",
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
    "text": "하음은 빈 서랍 앞에서 모두의 호흡을 살피다 자기 숨을 놓쳤다. 남들을 진정시키는 동안, 정작 자신이 학범을 잃을까 봐 떨고 있다는 걸 감추고 있었다.",
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
    "text": "음악실에서 하음은 문소리 박자를 맞추려 애썼지만 손끝이 자꾸 빨라졌다. 학범은 먼저 느린 박자를 두드려, 오늘만큼은 하음이 달래는 사람이 아니어도 된다고 알려 줬다.",
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
    "text": "“다들 괜찮게 만들면 나도 괜찮아질 줄 알았어.” 하음은 작은 소리로 말했다. “그런데 네 앞에서만은 박자가 계속 흔들렸어.”",
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
    "text": "학범은 봉투를 피아노 위에 놓고 첫 박자를 냈다. 하음은 두 번째 박자를 따라왔다. 이번에는 누군가를 달래는 박자가 아니라, 둘이 함께 버티는 떨림이었다.",
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
    "text": "윤호는 빈 서랍을 보고 바로 뒤로 물러났다. 예의 바르게 기다리는 후배로 남는 사이, 학범의 곁을 다른 사람이 차지할까 봐 발끝이 얼어붙었다.",
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
    "text": "학범은 옥상 문 앞에서 윤호를 기다렸다가 옆으로 불렀다. 윤호는 “선배 먼저”라는 말을 삼키고 난간 아래를 함께 살폈다.",
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
    "text": "“기다리면 예의 있는 후배로는 남을 수 있잖아요.” 윤호는 고개를 들었다. “근데 그러다 선배 옆자리를 영영 놓칠까 봐 무서웠어요.”",
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
    "text": "학범은 봉투를 윤호에게 맡기며 이름을 불렀다. “윤호야, 기다리지 말고 물어봐.” 윤호는 이번엔 뒤로 물러나지 않고, “네, 선배”라고 답했다.",
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
    "text": "학범은 화면을 끄고도 한참 잠들지 못했다. 내일 돌려받아야 할 것은 원본만이 아니었다. 미뤄 둔 말, 선택한 마음, 그리고 밤이 끝난 뒤에도 도망치지 않는 자신이었다.",
    "nextId": "day14-chapter-card"
  }
];
