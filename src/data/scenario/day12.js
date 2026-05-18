export const day12Scenes = [
  {
    "id": "day12-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-12",
    "sectionTitle": "Day 12: 축제 리허설의 약점",
    "mood": "school",
    "text": "Day 12 · 축제 리허설의 약점",
    "nextId": "day12-opening",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-courtyard-blue-hour.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-opening",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "학범",
    "role": "학생회",
    "place": "축제 리허설장",
    "text": "축제 리허설장은 종이꽃과 케이블, 아직 붙지 않은 이름표로 가득했다. 학범은 무대가 고백을 대신해 주지 않는다는 사실을 가장 먼저 배웠다.",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-courtyard-blue-hour.png",
        "transition": "fade-in"
      },
      {
        "type": "BGM",
        "cue": "bgmSchool",
        "fadeMs": 700
      }
    ]
  },
  {
    "id": "day12-route-gate",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "학범",
    "role": "학생회",
    "place": "축제 리허설장",
    "endingGate": true,
    "routeGate": true,
    "endingNext": {
      "hyeongyeom": "day12-hyeongyeom-rehearsal",
      "ukhyun": "day12-ukhyun-rehearsal",
      "jaeseong": "day12-jaeseong-rehearsal",
      "sangwon": "day12-sangwon-rehearsal",
      "sanguk": "day12-sanguk-rehearsal",
      "junhyeok": "day12-junhyeok-rehearsal",
      "dohun": "day12-dohun-rehearsal",
      "haeum": "day12-haeum-rehearsal",
      "yunho": "day12-yunho-rehearsal",
      "good": "day12-hyeongyeom-rehearsal",
      "normal": "day12-hyeongyeom-rehearsal",
      "quiet": "day12-hyeongyeom-rehearsal",
      "default": "day12-hyeongyeom-rehearsal"
    },
    "text": "명단의 빈자리는 하나였다. 학범은 박수받을 장면이 아니라, 함께 실수해도 괜찮을 사람에게 향했다."
  },
  {
    "id": "day12-hyeongyeom-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸은 우산 소품을 접었다 폈다 하며 동선을 확인했다. 조용히 버티는 데 익숙한 그는, 학범이 멀어져도 괜찮다는 듯 뒤에 서려 했다.",
    "nextId": "day12-hyeongyeom-stage",
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
    "id": "day12-hyeongyeom-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "같은 우산",
    "text": "조명이 바뀌자 현겸은 한 발 늦게 따라왔다. 학범은 대사를 멈추고 손을 내밀었다. 기다리는 사람이 아니라 같이 들어오는 사람으로 세우고 싶었다.",
    "nextId": "day12-hyeongyeom-signal"
  },
  {
    "id": "day12-hyeongyeom-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸은 우산을 학범 쪽으로만 기울이지 않았다. “나도 젖기 싫다고 말해도 돼?” 그 질문에 학범은 처음으로 둘의 중심을 맞췄다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "hyeongyeom",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "hyeongyeom",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-ukhyun-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현은 큐시트를 접어 쥔 채 음향 신호만 바라봤다. 필요한 말은 모두 여백에 있었고, 입 밖으로 나온 것은 “괜찮아”뿐이었다.",
    "nextId": "day12-ukhyun-stage",
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
    "id": "day12-ukhyun-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "접힌 노트",
    "text": "상대역이 대사를 놓치자 욱현은 종이를 내밀려 했다. 학범은 그 손을 잡아 내리고, 지금 필요한 건 메모가 아니라 목소리라고 말했다.",
    "nextId": "day12-ukhyun-signal"
  },
  {
    "id": "day12-ukhyun-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현은 아주 짧게 숨을 들이켰다. “안 괜찮아. 그래도 네 앞에서는 말할게.” 펼쳐진 큐시트 위로 접힌 자국이 더 이상 숨지 않았다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "ukhyun",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "ukhyun",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-jaeseong-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "재성은 음향 체크를 맡자마자 객석을 웃겼다. 모두가 긴장을 풀었지만, 정작 자기 순서가 오자 그는 마이크 볼륨만 만지작거렸다.",
    "nextId": "day12-jaeseong-stage",
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
    "id": "day12-jaeseong-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "방송실 너머",
    "text": "학범은 재성의 손에서 무선 마이크를 빼앗듯 내려놓았다. “방송 말고 너로 말해.” 객석이 조용해지자 재성의 진짜 목소리가 겨우 나왔다.",
    "nextId": "day12-jaeseong-signal"
  },
  {
    "id": "day12-jaeseong-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "“나도 떨려.” 재성은 웃음을 붙이지 않았다. 학범은 그 한 문장이 어떤 애드리브보다 오래 남을 거라고 생각했다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "jaeseong",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "jaeseong",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-sangwon-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "상원은 리허설 변경 사항을 빠짐없이 적었다. 문제는 학범의 망설임까지 대본 옆에 기록하려는 순간 생겼다.",
    "nextId": "day12-sangwon-stage",
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
    "id": "day12-sangwon-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브 원본",
    "text": "학범은 상원의 펜 끝을 가볍게 눌러 멈췄다. “이건 내가 말할 때까지 비워 둬.” 상원은 불안한 표정으로도 줄을 긋지 않았다.",
    "nextId": "day12-sangwon-signal"
  },
  {
    "id": "day12-sangwon-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "“남기지 않는 것도 신뢰라면, 연습해 볼게.” 상원은 빈 괄호를 그대로 두었다. 학범은 그 공백이 자신을 가두지 않는다는 걸 느꼈다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "sangwon",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "sangwon",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-sanguk-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "상욱은 떨어진 현수막을 보자마자 무대 위로 뛰어올랐다. 빠른 손이 모두를 구했지만, 학범이 부르는 소리는 뒤늦게 들었다.",
    "nextId": "day12-sanguk-stage",
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
    "id": "day12-sanguk-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "체육관 동선",
    "text": "학범은 상욱을 무대 중앙에 세우고 숨부터 고르게 했다. “지금은 도착보다 듣는 게 먼저야.” 상욱은 주먹을 쥐었다 폈다 하며 고개를 끄덕였다.",
    "nextId": "day12-sanguk-signal"
  },
  {
    "id": "day12-sanguk-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "“멈추는 것도 할 수 있어.” 상욱은 급한 발을 바닥에 붙였다. 학범은 그 자리에 함께 서 있는 것이 오늘의 구조라고 믿었다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "sanguk",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "sanguk",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-junhyeok-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "준혁은 이동 동선을 완벽하게 줄였다. 덕분에 리허설은 빨라졌지만, 학범이 숨을 고를 시간까지 삭제된 걸 뒤늦게 알았다.",
    "nextId": "day12-junhyeok-stage",
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
    "id": "day12-junhyeok-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "지도 위 빈칸",
    "text": "학범은 일부러 돌아가는 계단을 선택했다. 준혁은 비효율적이라고 말하려다, 학범의 표정을 보고 지도에 새로운 선을 그었다.",
    "nextId": "day12-junhyeok-signal"
  },
  {
    "id": "day12-junhyeok-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "“정답은 아니지만, 네가 필요한 경로네.” 준혁의 목소리가 낮아졌다. 학범은 그가 처음으로 이유보다 사람을 먼저 본다고 느꼈다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "junhyeok",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "junhyeok",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-dohun-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "도훈은 장비 오류를 농담으로 넘겼다. 웃음은 빨랐지만, 실수한 후배가 울먹이는 걸 보고도 사과를 장난 뒤에 숨기려 했다.",
    "nextId": "day12-dohun-stage",
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
    "id": "day12-dohun-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "편의점 불빛",
    "text": "학범은 도훈에게 웃길 필요 없다고 말했다. 도훈은 입꼬리를 내린 채 후배에게 고개를 숙였고, 무대 뒤가 이상하게 조용해졌다.",
    "nextId": "day12-dohun-signal"
  },
  {
    "id": "day12-dohun-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "“미안. 방금은 내가 겁나서 웃겼어.” 도훈의 사과에는 장난이 없었다. 학범은 그 솔직함이 어떤 정보보다 비싸다고 생각했다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "dohun",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "dohun",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-haeum-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 모두의 박자를 맞춰 주느라 자기 차례를 놓쳤다. 무대 위 피아노 앞에서야 손끝이 떨리는 것이 보였다.",
    "nextId": "day12-haeum-stage",
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
    "id": "day12-haeum-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "해질녘 음악실",
    "text": "학범은 메트로놈을 하음 앞이 아니라 자기 앞에 놓았다. “이번 박자는 내가 시작할게. 네가 맞춰 줘.” 하음이 처음으로 불안을 숨기지 않았다.",
    "nextId": "day12-haeum-signal"
  },
  {
    "id": "day12-haeum-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "“나도 틀릴까 봐 무서웠어.” 하음은 고개를 숙이지 않았다. 학범이 두 번 두드리자, 하음은 세 번째 음으로 답했다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "haeum",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "haeum",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-yunho-rehearsal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 소품을 들고 계속 학범 뒤에 섰다. 누군가 자리를 바꾸자고 해도 “저는 여기면 돼요”라고 물러났다.",
    "nextId": "day12-yunho-stage",
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
    "id": "day12-yunho-stage",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "비 갠 옥상",
    "text": "학범은 윤호의 손목을 잡아 옆 표시 테이프 위에 세웠다. “뒤에서 돕는 장면 아니야. 같이 서는 장면이야.” 윤호의 눈이 크게 흔들렸다.",
    "nextId": "day12-yunho-signal"
  },
  {
    "id": "day12-yunho-signal",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "warm",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "“옆에 있어도 폐가 아니에요?” 윤호가 물었다. 학범은 이름을 불러 답했고, 윤호는 처음으로 표시선 밖으로 물러나지 않았다.",
    "nextId": "day12-merge",
    "effect": {
      "target": "yunho",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "yunho",
        "effect": "heart",
        "motion": "nod",
        "se": "heart"
      }
    ]
  },
  {
    "id": "day12-merge",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "school",
    "name": "학범",
    "role": "독백",
    "place": "무대 뒤",
    "text": "리허설이 끝났을 때 무대에 남은 것은 완벽한 동선이 아니었다. 학범은 각자가 드러낸 약점 때문에, 선택한 마음이 더 실제가 되었다고 느꼈다.",
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
    "id": "choice-day12-rehearsal-focus",
    "type": "choice",
    "choices": [
      "무대 뒤 동선을 다시 본다.",
      "방송실 로그를 확인한다.",
      "아카이브 원본을 복사한다."
    ],
    "rewards": [
      {
        "flags": [
          "day12_stage_route"
        ]
      },
      {
        "flags": [
          "day12_broadcast_route"
        ]
      },
      {
        "flags": [
          "day12_archive_route"
        ]
      }
    ],
    "next": [
      "day12-stage-check",
      "day12-broadcast-check",
      "day12-archive-copy"
    ]
  },
  {
    "id": "day12-stage-check",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "무대 뒤",
    "text": "커튼 뒤에는 발자국 대신 꽃가루가 남아 있었다. 누군가 일부러 동선을 흐린 흔적이었다.",
    "nextId": "day12-after-check",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/gym-corridor-evening.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-broadcast-check",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "방송실",
    "text": "방송 로그에는 없는 호출음이 세 번 끼어 있었다. 재생할 때마다 학범의 이름만 또렷했다.",
    "nextId": "day12-after-check",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/broadcast-room.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-archive-copy",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브실",
    "text": "원본을 복사하자 빈 줄이 검게 떠올랐다. 그 줄에는 “고백은 기록보다 늦으면 안 된다”라고 적혀 있었다.",
    "nextId": "day12-after-check",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/archive-club-room-evening.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day12-after-check",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "tense",
    "name": "학범",
    "role": "독백",
    "place": "복도",
    "text": "세 단서는 다른 장소에서 나왔지만 같은 결론을 가리켰다. 기록을 훔친 사람은 학범에게 누군가를 고르라고 강요하는 게 아니라, 고른 마음을 끝까지 책임지라고 묻고 있었다."
  },
  {
    "id": "day12-closing",
    "type": "dialogue",
    "chapter": "day-12",
    "mood": "confession",
    "name": "학범",
    "role": "독백",
    "place": "복도 창가",
    "text": "창밖에는 축제 전날의 조명이 하나둘 켜졌다. 학범은 유리창에 비친 자신의 표정이 더 이상 도망치는 얼굴이 아니라는 걸 처음으로 인정했다.",
    "nextId": "day13-chapter-card"
  }
];
