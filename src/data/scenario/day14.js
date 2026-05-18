export const day14Scenes = [
  {
    "id": "day14-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-14",
    "sectionTitle": "Day 14: 학범 아카이브 개방일",
    "mood": "confession",
    "text": "Day 14 · 학범 아카이브 개방일",
    "nextId": "day14-opening",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-courtyard-blue-hour.png",
        "transition": "fade-in"
      }
    ]
  },
  {
    "id": "day14-opening",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "축제 정문",
    "text": "축제 당일, 학교는 평소보다 밝았고 학범은 평소보다 조용했다. 오늘 돌려받을 것은 원본이 아니라, 남에게 맡겨 두었던 자기 문장이었다.",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-courtyard-blue-hour.png",
        "transition": "fade-in"
      },
      {
        "type": "BGM",
        "cue": "bgmConfession",
        "fadeMs": 900
      }
    ]
  },
  {
    "id": "day14-route-gate",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "독백",
    "place": "축제 정문",
    "endingGate": true,
    "routeGate": true,
    "endingNext": {
      "hyeongyeom": "day14-hyeongyeom-festival",
      "ukhyun": "day14-ukhyun-festival",
      "jaeseong": "day14-jaeseong-festival",
      "sangwon": "day14-sangwon-festival",
      "sanguk": "day14-sanguk-festival",
      "junhyeok": "day14-junhyeok-festival",
      "dohun": "day14-dohun-festival",
      "haeum": "day14-haeum-festival",
      "yunho": "day14-yunho-festival",
      "good": "day14-hyeongyeom-festival",
      "normal": "day14-hyeongyeom-festival",
      "quiet": "day14-hyeongyeom-festival",
      "default": "day14-hyeongyeom-festival"
    },
    "text": "마지막 장은 소란 속에서도 한 사람의 자리로 이어졌다. 학범은 관객이 많은 쪽이 아니라, 어제 약속한 곳으로 걸었다."
  },
  {
    "id": "day14-hyeongyeom-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸은 교문 우산꽂이 옆에서 접힌 우산 두 개를 들고 있었다. 곧 비가 쏟아질 것처럼 하늘이 낮았고, 오늘은 돌려준 뒤 각자 돌아가자는 말을 누구도 꺼내지 않았다.",
    "nextId": "day14-hyeongyeom-origin",
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
    "id": "day14-hyeongyeom-origin",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "같은 우산",
    "text": "둘은 이벤트 뒤편 보관함에서 원본을 찾았다. 첫 장에는 학범이 빌려준 우산 목록과, 현겸이 덧쓴 “돌려준 뒤에도 부르기”라는 문장이 있었다.",
    "nextId": "day14-hyeongyeom-truth"
  },
  {
    "id": "day14-hyeongyeom-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸은 뒷장을 넘기며 낮게 말했다. “이건 핑계를 돌려주는 게 아니야. 핑계가 없어도 남을 수 있는지 묻는 거였어.” 빗소리가 가까워졌다.",
    "nextId": "day14-hyeongyeom-confession"
  },
  {
    "id": "day14-hyeongyeom-confession",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "같은 우산",
    "text": "학범은 먼저 우산을 펼쳤다가, 현겸이 보는 앞에서 천천히 접었다. “현겸아, 우산이 없어도 같이 가고 싶어. 오늘은 따로 집에 가기 싫어.”",
    "nextId": "day14-hyeongyeom-answer",
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
      }
    ]
  },
  {
    "id": "day14-hyeongyeom-answer",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸은 접힌 우산을 품에 안고 고개를 끄덕였다. “그럼 나도 핑계 뒤에 숨지 않을게.” 비가 내리기 시작했지만, 둘은 한참 교문을 떠나지 않았다.",
    "nextId": "day14-merge",
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
      }
    ]
  },
  {
    "id": "day14-ukhyun-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현은 도서관 부스의 빈 방명록을 펼쳐 두고 있었다. 접힌 쪽지는 책갈피처럼 사이에 꽂혀 있었고, 오래 꺼지지 않던 도서관 불빛이 마지막으로 깜박였다.",
    "nextId": "day14-ukhyun-origin",
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
    "id": "day14-ukhyun-origin",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "접힌 노트",
    "text": "원본은 반납함 가장 아래에서 나왔다. 첫 장에는 학범이 대신 써 준 안내문들이 붙어 있었고, 접힌 쪽지 안쪽에는 아직 읽히지 않은 한 줄이 남아 있었다.",
    "nextId": "day14-ukhyun-truth"
  },
  {
    "id": "day14-ukhyun-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현은 쪽지를 완전히 펼쳤다. “네가 남겨 둔 문장을 내가 너무 오래 접어 뒀어.” 도서관 불이 꺼지자, 창가의 작은 스탠드만 둘의 손을 비췄다.",
    "nextId": "day14-ukhyun-confession"
  },
  {
    "id": "day14-ukhyun-confession",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "접힌 노트",
    "text": "학범은 방명록 첫 줄에 적었다. “욱현아, 네 침묵까지 읽고 싶었어. 내 답은 이제 숨기지 않을게. 좋아해.”",
    "nextId": "day14-ukhyun-answer",
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
      }
    ]
  },
  {
    "id": "day14-ukhyun-answer",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현은 노트를 펼친 채 웃었다. “받았어.” 그는 마지막 한 줄만 비워 두었다. 내일 아침, 둘이 같이 읽기 위해서였다.",
    "nextId": "day14-merge",
    "effect": {
      "target": "ukhyun",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "ukhyun",
        "effect": "blush",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day14-jaeseong-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "재성은 방송실 문 앞에서 송출 스위치를 꺼 둔 채 기다렸다. 축제 안내 멘트는 다른 사람에게 맡겼고, 오늘 쓸 목소리는 닫힌 문 안에만 남겨 두었다.",
    "nextId": "day14-jaeseong-origin",
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
    "id": "day14-jaeseong-origin",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "방송실 너머",
    "text": "원본은 낡은 녹음 테이프 상자 안에 있었다. 라벨에는 학범이 도와준 방송 목록과, 끝내 송출되지 않은 재성의 문장이 적혀 있었다.",
    "nextId": "day14-jaeseong-truth"
  },
  {
    "id": "day14-jaeseong-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "재성은 테이프를 재생하지 않고 마이크 전원을 확인했다. 불은 꺼져 있었다. “마지막은 아무도 듣지 않아야 하니까.” 방송실 문이 조용히 닫혔다.",
    "nextId": "day14-jaeseong-confession"
  },
  {
    "id": "day14-jaeseong-confession",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "방송실 너머",
    "text": "학범은 마이크가 꺼진 걸 확인하고 말했다. “재성아, 방송 밖에서 낮아지는 네 목소리가 좋아. 지금은 너한테만 말할게. 좋아해.”",
    "nextId": "day14-jaeseong-answer",
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
      }
    ]
  },
  {
    "id": "day14-jaeseong-answer",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "재성은 헤드폰을 벗어 책상에 놓았다. “이건 저장 안 할래.” 웃음기 없는 손이 학범의 손을 찾았고, 문밖의 소음은 한동안 들어오지 못했다.",
    "nextId": "day14-merge",
    "effect": {
      "target": "jaeseong",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "jaeseong",
        "effect": "blush",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day14-sangwon-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "상원은 전시 부스 앞에서 수정 테이프를 주머니에 넣은 채 서 있었다. 오늘의 증거를 모두에게 보일 수 있어도, 학범의 선택만큼은 둘 사이에 남겨 둘 준비였다.",
    "nextId": "day14-sangwon-origin",
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
    "id": "day14-sangwon-origin",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브 원본",
    "text": "원본은 전시 명부 사이에 끼워져 있었다. 첫 장에는 학범이 처리한 수많은 부탁들이 있었고, 여백에는 “본인이 고를 때까지 비공개”라는 상원의 글씨가 있었다.",
    "nextId": "day14-sangwon-truth"
  },
  {
    "id": "day14-sangwon-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "상원은 기록부를 닫았다. “공개할 증거는 여기까지야.” 잠금쇠가 작은 소리를 냈고, 가장 중요한 줄은 둘 사이의 빈 페이지로 넘어왔다.",
    "nextId": "day14-sangwon-confession"
  },
  {
    "id": "day14-sangwon-confession",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브 원본",
    "text": "학범은 시간도 번호도 붙이지 않고 적었다. “상원아, 네가 지켜 준 빈칸에 내 선택을 쓸게. 너를 좋아해. 이 줄은 공개하지 않아도 돼.”",
    "nextId": "day14-sangwon-answer",
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
      }
    ]
  },
  {
    "id": "day14-sangwon-answer",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "아카이브 원본",
    "text": "상원은 펜을 들었다가 내려놓았다. “그 줄은 네 글씨로 충분해.” 그는 기록부를 닫은 손으로 학범의 손등을 잠시 덮었다.",
    "nextId": "day14-merge",
    "effect": {
      "target": "sangwon",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "sangwon",
        "effect": "blush",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day14-sanguk-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "상욱은 체육관 출입구에서 뛰지 않고 기다렸다. 숨은 이미 가빴지만, 이번에는 학범이 먼저 도착할 때까지 손을 뻗지 않겠다고 자신을 붙잡고 있었다.",
    "nextId": "day14-sanguk-origin",
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
    "id": "day14-sanguk-origin",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "체육관 동선",
    "text": "원본은 체육관 장비함 뒤에서 발견됐다. 첫 장에는 학범이 대신 뛰어다닌 준비 목록과, 상욱이 너무 늦게 읽은 “기다려 줘서 고마워”가 붙어 있었다.",
    "nextId": "day14-sanguk-truth"
  },
  {
    "id": "day14-sanguk-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "상욱은 장비함 문을 천천히 닫았다. “이번엔 잡기 전에 물어봐야 했는데.” 거친 숨이 조금씩 내려앉았다. “늦었다고 또 세게 붙잡으면 안 되는 거였어.”",
    "nextId": "day14-sanguk-confession"
  },
  {
    "id": "day14-sanguk-confession",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "체육관 동선",
    "text": "학범은 상욱 쪽으로 먼저 다가갔다가 바로 속도를 줄였다. “상욱아, 너한테 가고 싶었어. 하지만 앞으로는 내가 멈추면 같이 멈춰 줬으면 해. 좋아해.”",
    "nextId": "day14-sanguk-answer",
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
      }
    ]
  },
  {
    "id": "day14-sanguk-answer",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "상욱은 반사적으로 손을 뻗었다가 학범의 눈을 보고 멈췄다. “약속할게.” 손은 천천히 내려갔고, 둘의 숨이 비슷한 속도로 맞춰졌다.",
    "nextId": "day14-merge",
    "effect": {
      "target": "sanguk",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "sanguk",
        "effect": "blush",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day14-junhyeok-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "준혁은 안내 지도 부스에서 가장 빠른 길을 표시하지 않았다. 대신 접힌 지도 위에, 일부러 멀리 돌아가는 길 하나를 남겨 두었다.",
    "nextId": "day14-junhyeok-origin",
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
    "id": "day14-junhyeok-origin",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "지도 위 빈칸",
    "text": "원본은 미로 안내판 뒤쪽에서 나왔다. 첫 장에는 학범이 남들을 위해 찾아 준 길들이 있었고, 마지막 지도에는 접힌 자국 때문에 목적지가 보이지 않았다.",
    "nextId": "day14-junhyeok-truth"
  },
  {
    "id": "day14-junhyeok-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "준혁은 지도를 접어 최단 거리를 가렸다. “이 길이 제일 빠른 건 알아. 그런데 오늘은 빠른 길을 버려도 되는지, 네가 묻고 있는 것 같아.”",
    "nextId": "day14-junhyeok-confession"
  },
  {
    "id": "day14-junhyeok-confession",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "지도 위 빈칸",
    "text": "학범은 최단 경로를 지우고 준혁이 서 있는 길에 표시했다. “준혁아, 정답이 아니라도 좋아. 네가 있는 길이면 돌아가고 싶어. 좋아해.”",
    "nextId": "day14-junhyeok-answer",
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
      }
    ]
  },
  {
    "id": "day14-junhyeok-answer",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "준혁",
    "role": "자료 조사 담당",
    "place": "지도 위 빈칸",
    "text": "준혁은 잠시 계산을 멈췄다. “그럼 오늘은 최적화하지 않을게.” 그는 지도를 접어 주머니에 넣고, 비워 둔 손으로 학범의 옆자리를 가리켰다.",
    "nextId": "day14-merge",
    "effect": {
      "target": "junhyeok",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "junhyeok",
        "effect": "blush",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day14-dohun-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "도훈은 편의점 부스 계산대 앞에서 잔돈통을 닫아 두었다. 오늘은 웃길 말도, 받을 대가도 준비하지 않은 얼굴로 학범을 기다렸다.",
    "nextId": "day14-dohun-origin",
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
    "id": "day14-dohun-origin",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "편의점 불빛",
    "text": "원본은 영수증 묶음 사이에 끼워져 있었다. 첫 장에는 학범이 대신 해결한 부탁들과, 도훈이 접어 둔 작은 진심들이 계산되지 않은 채 적혀 있었다.",
    "nextId": "day14-dohun-truth"
  },
  {
    "id": "day14-dohun-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "도훈은 영수증을 접지 않았다. “지금 농담하면 안 되는 거 알지.” 그는 이번엔 웃지 않았다. “나도 알아. 그래서 오늘은 한 줄만 제대로 들을게.”",
    "nextId": "day14-dohun-confession"
  },
  {
    "id": "day14-dohun-confession",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "편의점 불빛",
    "text": "학범은 빈 영수증 뒷면에 한 문장만 적어 건넸다. “도훈아, 계산하지 않고 말할게. 좋아해.”",
    "nextId": "day14-dohun-answer",
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
      }
    ]
  },
  {
    "id": "day14-dohun-answer",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "도훈은 장난칠 타이밍을 일부러 지나 보냈다. “응. 나도.” 그는 영수증을 반듯하게 접어 지갑에 넣고, 농담 대신 학범의 손에 따뜻한 캔을 쥐여 줬다.",
    "nextId": "day14-merge",
    "effect": {
      "target": "dohun",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "dohun",
        "effect": "blush",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day14-haeum-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 음악실 부스에서 첫 박자를 비워 두고 기다렸다. 불이 낮게 줄어든 방 안에는 피아노의 마지막 울림과 둘의 숨소리만 남아 있었다.",
    "nextId": "day14-haeum-origin",
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
    "id": "day14-haeum-origin",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "해질녘 음악실",
    "text": "원본은 피아노 의자 아래에서 나왔다. 첫 장에는 학범이 맞춰 준 사람들의 박자가 적혀 있었고, 마지막 마디는 불이 꺼진 뒤에도 남는 쉼표처럼 비어 있었다.",
    "nextId": "day14-haeum-truth"
  },
  {
    "id": "day14-haeum-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 마지막 마디를 짚었다. “여긴 연주하지 않아도 들리는 부분이야.” 불빛이 더 낮아지자, 둘은 같은 숨을 세지 않고 나눴다.",
    "nextId": "day14-haeum-confession"
  },
  {
    "id": "day14-haeum-confession",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "해질녘 음악실",
    "text": "학범은 책상을 두 번 두드려 박자를 열었다. “하음아, 내 박자를 너에게 맡기고 싶어. 좋아해.”",
    "nextId": "day14-haeum-answer",
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
      }
    ]
  },
  {
    "id": "day14-haeum-answer",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 세 번째 박자를 피아노로 받았다. “이번엔 나도 내 불안을 같이 들려줄게.” 마지막 화음 뒤, 조용한 방에서 둘의 숨이 같은 길이로 남았다.",
    "nextId": "day14-merge",
    "effect": {
      "target": "haeum",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "haeum",
        "effect": "blush",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day14-yunho-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 옥상 계단 아래가 아니라 옥상 문 앞에 서 있었다. 오늘은 길을 비켜 주는 후배가 아니라, 불릴 때까지 기다림을 끝낼 사람처럼 보였다.",
    "nextId": "day14-yunho-origin",
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
    "id": "day14-yunho-origin",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "tense",
    "name": "학범",
    "role": "학생회",
    "place": "비 갠 옥상",
    "text": "원본은 옥상 사진 전시 뒤에서 나왔다. 첫 장에는 학범이 후배들을 챙긴 기록들이 있었고, 윤호의 종이에는 “선배가 이름으로 부르면 기다림을 끝내기”라고 적혀 있었다.",
    "nextId": "day14-yunho-truth"
  },
  {
    "id": "day14-yunho-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 종이를 접지 못한 채 말했다. “선배, 기다리기만 하면 좋은 후배로 남을 수는 있겠죠.” 옥상 바람이 둘 사이의 빈말을 걷어 갔다.",
    "nextId": "day14-yunho-confession"
  },
  {
    "id": "day14-yunho-confession",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "비 갠 옥상",
    "text": "학범은 한 걸음 옆으로 비켜 자리를 만들었다. “윤호야, 선배 뒤 말고 내 옆에 있어 줘. 좋아해.”",
    "nextId": "day14-yunho-answer",
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
      }
    ]
  },
  {
    "id": "day14-yunho-answer",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 울 것처럼 웃으며 그 자리로 들어왔다. “네, 학범 선배.” 기다림은 그가 불린 순간 끝났고, 대답은 옥상 난간 위에 오래 머물렀다.",
    "nextId": "day14-merge",
    "effect": {
      "target": "yunho",
      "type": "blush"
    },
    "directives": [
      {
        "type": "E",
        "target": "yunho",
        "effect": "blush",
        "motion": "nod"
      }
    ]
  },
  {
    "id": "day14-merge",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "독백",
    "place": "아카이브 전시실",
    "text": "원본의 비밀은 한 사람의 장난이 아니었다. 학범이 남들을 위해 남긴 기록과, 모두가 학범에게 돌려주고 싶었던 마음이 한 파일에 모여 있었다. 마지막 빈 페이지는 도둑맞은 것이 아니라 학범이 직접 써야 해서 비어 있었다.",
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
    "id": "choice-day14-final-word",
    "type": "choice",
    "choices": [
      "좋아한다고 분명히 말한다.",
      "고맙다고 먼저 말한다.",
      "내일도 같이 있자고 약속한다."
    ],
    "rewards": [
      {
        "flags": [
          "day14_clear_love",
          "promise_hand"
        ]
      },
      {
        "flags": [
          "day14_gratitude",
          "promise_hand"
        ]
      },
      {
        "flags": [
          "day14_tomorrow",
          "promise_hand"
        ]
      }
    ],
    "next": [
      "day14-word-love",
      "day14-word-thanks",
      "day14-word-tomorrow"
    ]
  },
  {
    "id": "day14-word-love",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브 전시실",
    "text": "학범은 좋아한다고 말했다. 단어 하나가 입 밖으로 나오자, 지난 열나흘 동안 쌓인 장면들이 한꺼번에 제자리를 찾았다.",
    "nextId": "day14-archive-answer"
  },
  {
    "id": "day14-word-thanks",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브 전시실",
    "text": "학범은 먼저 고맙다고 말했다. 좋아한다는 말은 그 뒤에 자연스럽게 따라왔고, 오히려 더 학범다운 고백이 되었다.",
    "nextId": "day14-archive-answer"
  },
  {
    "id": "day14-word-tomorrow",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "아카이브 전시실",
    "text": "학범은 내일도 같이 있자고 약속했다. 고백은 오늘 끝나는 이벤트가 아니라, 내일도 이어질 선택이었다.",
    "nextId": "day14-archive-answer"
  },
  {
    "id": "day14-archive-answer",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "warm",
    "name": "학범",
    "role": "독백",
    "place": "아카이브 전시실",
    "text": "전시실 벽에는 새 제목이 붙었다. “학범 아카이브: 미루지 않은 마지막 페이지.” 학범은 그 제목이 부끄러웠지만, 이제는 자기 글씨를 지우고 싶지 않았다."
  },
  {
    "id": "day14-closing",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "빗속의 교문",
    "text": "축제가 끝날 무렵, 하늘에서 다시 비가 내렸다. 학범은 우산을 펴고 선택한 사람 쪽으로 먼저 걸었다. 마지막 페이지는 아직 젖지 않았다.",
    "nextId": "ending-promise",
    "directives": [
      {
        "type": "BCG",
        "src": "/assets/bg/school-gate-rain.png",
        "transition": "fade-in"
      },
      {
        "type": "SE",
        "cue": "rain-step"
      }
    ]
  }
];
