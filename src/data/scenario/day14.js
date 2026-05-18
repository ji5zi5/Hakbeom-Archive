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
    "text": "현겸은 교문 우산꽂이 옆에서 접힌 우산 두 개를 들고 있었다. 비가 오지 않는 날에도 같이 걸 수 있다는 걸 보여 주려는 준비였다.",
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
    "text": "둘은 이벤트 뒤편 보관함에서 원본을 찾았다. 첫 장에는 학범이 빌려준 우산 목록과, 누군가가 덧쓴 “기다리지 말고 부르기”라는 문장이 있었다.",
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
    "text": "현겸은 뒷장을 넘기며 낮게 말했다. “이건 훔친 기록이 아니라 네가 모두에게 남긴 마음을 돌려준 거였어.” 마지막 장은 여전히 비어 있었다.",
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
    "text": "학범은 먼저 우산을 펼쳤다. “현겸아, 오늘은 내가 너를 데리러 왔어. 좋아해. 기다리게만 두고 싶지 않아.”",
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
    "text": "현겸은 우산 안으로 들어오며 손잡이를 함께 잡았다. “그럼 나도 숨지 않을게.” 비 없는 하늘 아래, 둘은 같은 그늘을 만들었다.",
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
    "text": "욱현은 도서관 부스의 빈 방명록을 펼쳐 두고 있었다. 접힌 책갈피들은 모두 펴져 있었고, 학범이 쓸 칸만 비어 있었다.",
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
    "text": "원본은 반납함 가장 아래에서 나왔다. 첫 장에는 학범이 대신 써 준 안내문들이 붙어 있었고, 여백에는 욱현의 작은 답장이 줄지어 있었다.",
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
    "text": "욱현은 원본을 접지 않은 채 내밀었다. “누가 만든 게 아니라, 네가 남겨 둔 문장들을 우리가 주워 온 거야.” 마지막 빈칸은 학범 쪽을 향했다.",
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
    "text": "학범은 방명록 첫 줄에 적었다. “욱현아, 네 침묵을 읽는 게 좋았고, 이제는 내 답도 숨기지 않을게. 좋아해.”",
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
    "text": "욱현은 노트를 펼친 채 웃었다. “받았어.” 그는 답장을 접지 않고, 학범의 문장 옆에 자기 이름을 나란히 적었다.",
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
    "text": "재성은 방송실 문 앞에서 송출 스위치를 꺼 둔 채 기다렸다. 축제 안내 멘트는 다른 사람에게 맡겼고, 오늘 쓸 목소리만 남겨 두었다.",
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
    "text": "원본은 낡은 녹음 테이프 상자 안에 있었다. 라벨에는 학범이 도와준 방송 목록과, 재성이 녹음하지 못한 말들이 적혀 있었다.",
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
    "text": "재성은 테이프를 재생하지 않았다. “다들 네가 지나간 자리에 자기 목소리를 조금씩 남겼던 거야. 마지막은 녹음하면 안 되는 부분이고.”",
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
    "text": "학범은 마이크 전원을 내리고 말했다. “재성아, 네가 방송 밖에서 떨리는 목소리까지 좋아. 지금 내 목소리로 말할게. 좋아해.”",
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
    "text": "재성은 헤드폰을 벗어 책상에 놓았다. “이건 저장 안 할래.” 그리고 웃음기 없는 얼굴로 학범의 손을 잡았다. “대신 매일 다시 듣자.”",
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
    "text": "상원은 전시 부스 앞에서 수정 테이프를 주머니에 넣은 채 서 있었다. 학범의 선택을 고치지 않겠다는 약속처럼, 손은 파일에서 떨어져 있었다.",
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
    "text": "원본은 전시 명부 사이에 끼워져 있었다. 첫 장에는 학범이 처리한 수많은 부탁들이 있었고, 여백에는 “본인의 말은 미기재”라는 상원의 글씨가 있었다.",
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
    "text": "상원은 그 줄을 지우지 않았다. “우리가 만든 건 감시 기록이 아니야. 네가 사라지는 순간을 붙잡으려던 증언이었어.” 빈 페이지가 둘 사이에 놓였다.",
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
    "text": "학범은 시간도 번호도 붙이지 않고 적었다. “상원아, 네가 남겨 준 증언을 믿어. 그리고 너를 좋아한다는 문장은 수정하지 않을 거야.”",
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
    "text": "상원은 펜을 들었다가 내려놓았다. “그 줄은 네 글씨로 충분해.” 그는 처음으로 기록 대신 학범의 표정을 오래 보았다.",
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
    "text": "상욱은 체육관 출입구에서 뛰지 않고 기다렸다. 손에는 끊어진 테이프를 고칠 여분 끈이 있었지만, 발은 학범이 올 때까지 움직이지 않았다.",
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
    "text": "원본은 체육관 장비함 뒤에서 발견됐다. 첫 장에는 학범이 대신 뛰어다닌 준비 목록과, 상욱이 너무 늦게 본 감사 메모가 붙어 있었다.",
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
    "text": "상욱은 장비함 문을 천천히 닫았다. “다들 네가 혼자 달리던 걸 봤던 거네. 그래서 이번엔 멈춰 세우려고 한 거고.”",
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
    "text": "학범은 상욱 쪽으로 먼저 달려갔다가 바로 속도를 줄였다. “상욱아, 너한테 가고 싶어서 뛰었어. 하지만 앞으로는 같이 걷고 싶어. 좋아해.”",
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
    "text": "상욱은 반사적으로 달려오려다 웃으며 멈췄다. “알겠어. 결승선 말고 네 옆으로 갈게.” 둘은 장비함 사이 좁은 길을 걸어 나왔다.",
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
    "text": "준혁은 안내 지도 부스에서 가장 빠른 길을 표시하지 않았다. 대신 학범과 약속한 돌아가는 길 위에 작은 별표를 붙여 두었다.",
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
    "text": "원본은 미로 안내판 뒤쪽에서 나왔다. 첫 장에는 학범이 남들을 위해 찾아 준 길들이 있었고, 마지막 지도에는 목적지가 비어 있었다.",
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
    "text": "준혁은 빈 목적지를 손가락으로 짚었다. “이 파일은 네 동선을 계산한 게 아니야. 네가 어디로 가고 싶은지 묻고 있었어.”",
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
    "text": "학범은 최단 경로를 지우고 준혁이 서 있는 길에 표시했다. “준혁아, 정답이라서가 아니라 네가 있는 길이라서 가고 싶어. 좋아해.”",
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
    "text": "준혁은 잠시 계산을 멈췄다. “그럼 새 기준점은 여기네.” 그는 학범의 표시 옆에 자기 별표를 겹쳐 그렸다.",
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
    "text": "도훈은 편의점 부스 계산대 앞에서 잔돈통을 닫아 두었다. 오늘은 무언가를 얻어내는 표정이 아니라, 그냥 기다리는 얼굴이었다.",
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
    "text": "원본은 영수증 묶음 사이에 끼워져 있었다. 첫 장에는 학범이 대신 해결한 자잘한 부탁들과, 도훈이 몰래 치른 작은 대가들이 적혀 있었다.",
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
    "text": "도훈은 영수증을 접지 않았다. “누가 범인인지보다, 네가 늘 공짜로 마음을 내줬다는 게 문제였네.” 그는 이번엔 웃지 않았다.",
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
    "text": "도훈은 장난칠 타이밍을 일부러 지나 보냈다. “응. 나도.” 그는 영수증을 지갑이 아니라 셔츠 주머니에 넣었다.",
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
    "text": "하음은 음악실 부스에서 첫 박자를 비워 두고 기다렸다. 악보에는 학범이 시작할 자리만 연필로 표시되어 있었다.",
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
    "text": "원본은 피아노 의자 아래에서 나왔다. 첫 장에는 학범이 맞춰 준 사람들의 박자가 적혀 있었고, 마지막 마디는 쉼표로 남아 있었다.",
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
    "text": "하음은 쉼표를 손끝으로 짚었다. “비워 둔 건 잃어버려서가 아니라, 네가 직접 시작해야 해서였어.”",
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
    "text": "학범은 책상을 두 번 두드려 박자를 열었다. “하음아, 내 박자를 너에게 맞춰 달라고 부탁하고 싶어. 좋아해.”",
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
    "text": "하음은 세 번째 박자를 피아노로 받았다. “이번엔 나도 내 불안을 같이 들려줄게.” 둘의 박자가 전시실 소음 위에 천천히 겹쳤다.",
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
    "text": "윤호는 옥상 계단 아래가 아니라 전시 부스 옆에 서 있었다. 학범이 올 길을 비켜 주지 않고, 함께 설 자리를 남겨 두었다.",
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
    "text": "원본은 옥상 사진 전시 뒤에서 나왔다. 첫 장에는 학범이 후배들을 챙긴 기록들이 있었고, 윤호의 종이에는 “언젠가 이름으로 불러 주세요”라고 적혀 있었다.",
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
    "text": "윤호는 종이를 접지 못한 채 말했다. “다들 선배가 혼자 앞에 서는 걸 봤던 거예요. 마지막 장은 선배 옆에 누가 설지 묻고 있었고요.”",
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
    "text": "윤호는 울 것처럼 웃으며 그 자리로 들어왔다. “네, 학범 선배. 이번엔 제가 옆에서 같이 볼게요.”",
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
