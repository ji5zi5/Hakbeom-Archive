export const day14Scenes = [
  {
    "id": "day14-chapter-card",
    "type": "banner",
    "kind": "chapter",
    "chapter": "day-14",
    "sectionTitle": "Day 14: 봄날의 문화제",
    "mood": "confession",
    "text": "Day 14 · 봄날의 문화제",
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
    "text": "축제 당일, 학교는 평소보다 밝았고 학범은 평소보다 조용했다. 오늘 돌려받을 것은 기록집이 아니라, 남에게 맡겨 두었던 자기 문장이었다.",
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
    "id": "day14-moe-route-festival-first-look",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-14",
    "name": "학범",
    "role": "독백",
    "place": "문화제 아침",
    "text": "문화제 아침, 학범은 인파보다 먼저 한 사람의 표정을 찾았다.",
    "variants": [
      {
        "requiredFlags": [
          "route_lock_hyeongyeom"
        ],
        "text": "현겸은 교문 우산꽂이 옆에서 기다렸다. 비는 오지 않았지만, “오늘도 같이 갈래?”라는 말은 이미 우산보다 먼저 펼쳐져 있었다."
      },
      {
        "requiredFlags": [
          "route_lock_ukhyun"
        ],
        "text": "욱현은 도서관 전시 마지막 장 앞에 서 있었다. 책갈피가 꽂힌 페이지마다 학범이 지나온 봄이 조용히 숨 쉬었다."
      },
      {
        "requiredFlags": [
          "route_lock_jaeseong"
        ],
        "text": "재성은 방송실 유리창 너머로 학범을 발견하자 마이크를 내려놓았다. 오늘 첫 진심은 방송 전에 이미 시작됐다."
      },
      {
        "requiredFlags": [
          "route_lock_sangwon"
        ],
        "text": "상원은 기록실 문 앞에서 펜을 닫았다. 오늘은 적기 전에 듣고, 듣기 전에 학범의 표정을 먼저 기다리기로 한 얼굴이었다."
      },
      {
        "requiredFlags": [
          "route_lock_sanguk"
        ],
        "text": "상욱은 체육관 결승선 앞에서 한 발도 넘지 않고 있었다. 학범이 올 때까지 기다리는 일이, 그에게는 가장 큰 직진이었다."
      },
      {
        "requiredFlags": [
          "route_lock_junhyeok"
        ],
        "text": "준혁은 운동장 뒤 산책로의 최단 경로를 접어 주머니에 넣었다. 오늘 지도에는 효율보다 학범과 걷는 여백이 더 컸다."
      },
      {
        "requiredFlags": [
          "route_lock_dohun"
        ],
        "text": "도훈은 매점 부스 아래 영수증을 손바닥으로 눌렀다. 장난처럼 접힌 종이 한 장이 오늘만큼은 도망가지 못했다."
      },
      {
        "requiredFlags": [
          "route_lock_haeum"
        ],
        "text": "하음은 음악실 무대 뒤에서 빈 악보를 펼쳤다. 첫 음은 아직 없었지만, 학범이 오면 바로 맞출 수 있게 숨을 고르고 있었다."
      },
      {
        "requiredFlags": [
          "route_lock_yunho"
        ],
        "text": "윤호는 옥상 문 앞에 서서 손잡이를 놓지 못했다. 선배라는 말과 이름 사이에서, 오늘은 조금 더 용감해지려는 얼굴이었다."
      }
    ]
  },
  {
    "id": "day14-moe-route-last-check",
    "type": "dialogue",
    "mood": "confession",
    "chapter": "day-14",
    "name": "학범",
    "role": "독백",
    "place": "문화제 아침",
    "text": "마지막 확인은 일정표가 아니라, 서로에게 향한 작은 신호였다.",
    "variants": [
      {
        "requiredFlags": [
          "route_lock_hyeongyeom"
        ],
        "text": "현겸은 “우산 없어도 괜찮지?”라고 묻고는 바로 웃었다. 괜찮다는 대답보다 먼저, 같이 있고 싶다는 뜻을 확인한 듯했다."
      },
      {
        "requiredFlags": [
          "route_lock_ukhyun"
        ],
        "text": "욱현은 노트 마지막 줄을 손으로 가렸다. “먼저 보면 반칙.” 목소리는 낮았지만, 가린 손끝은 조금 떨리고 있었다."
      },
      {
        "requiredFlags": [
          "route_lock_jaeseong"
        ],
        "text": "재성은 “마이크 꺼진 거 확인 완료”라고 속삭였다. 그리고 학범만 들을 만큼 작게 “이제 진심밖에 안 남았네”라고 말했다."
      },
      {
        "requiredFlags": [
          "route_lock_sangwon"
        ],
        "text": "상원은 빈 기록 칸을 보여 주며 말했다. “여긴 네가 직접 써. 내가 제일 잘하고 싶은 일은, 오늘 네 문장을 지키는 거야.”"
      },
      {
        "requiredFlags": [
          "route_lock_sanguk"
        ],
        "text": "상욱은 손을 뻗기 전 멈췄다. “잡아도 돼?” 짧은 질문 하나가 지금까지 달려온 모든 거리보다 선명했다."
      },
      {
        "requiredFlags": [
          "route_lock_junhyeok"
        ],
        "text": "준혁은 지도에 없는 길을 가리켰다. “여긴 계산에 없어. 그래서 네가 좋다고 하면, 오늘 가장 중요한 경로가 돼.”"
      },
      {
        "requiredFlags": [
          "route_lock_dohun"
        ],
        "text": "도훈은 영수증을 내밀며 귀를 붉혔다. “읽고 웃으면 한 대야. 좋아서 웃는 건… 봐줄 수도 있고.”"
      },
      {
        "requiredFlags": [
          "route_lock_haeum"
        ],
        "text": "하음은 빈 악보 위에 학범 손을 올려 두었다. “마지막 줄은 네 속도로 써. 나는 늦어도 안 놓칠게.”"
      },
      {
        "requiredFlags": [
          "route_lock_yunho"
        ],
        "text": "윤호는 “선배”라고 부르다 멈추고 숨을 삼켰다. “오늘은 이름으로 불러도 돼요? 대답은 천천히 들어도 괜찮아요.”"
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
    "text": "마지막 장은 소란 속에서도 한 사람의 자리로 이어졌다. 학범은 관객이 많은 쪽이 아니라, 어제 약속한 곳으로 걸었다.",
    "variants": [
      {
        "requiredFlags": [
          "route_lock_hyeongyeom",
          "hyeongyeom_phone_day9_after_date"
        ],
        "text": "“내일은 네가 먼저 잡아.” “오늘이 그 내일이야. 현겸아, 관객 많은 쪽 말고 네가 기다리는 교문으로 갈게.”"
      },
      {
        "requiredFlags": [
          "route_lock_ukhyun",
          "ukhyun_phone_day9_after_date"
        ],
        "text": "“욱현아, 오늘도 창가 비워 뒀지? 나도 오늘은 접어 두지 않을게. 마지막 장은 네 옆에서 읽을게.”"
      },
      {
        "requiredFlags": [
          "route_lock_jaeseong",
          "jaeseong_phone_day9_after_date"
        ],
        "text": "“재성아, 예약 확인했어. 공개 멘트 말고 비공개 대답 들려주러 갈게. 마이크는 계속 꺼 둬.”"
      },
      {
        "requiredFlags": [
          "route_lock_sangwon",
          "sangwon_phone_day8_warm_reply"
        ],
        "text": "“상원아, 빈칸 혼자 채우지 않을게. 오늘은 같이 열 열쇠 들고 갈게. 네가 물으면 내가 직접 대답할게.”"
      },
      {
        "requiredFlags": [
          "route_lock_sanguk",
          "sanguk_phone_day8_warm_reply"
        ],
        "text": "“상욱아, 오늘도 내 옆에서 걸어도 돼. 뛰기보다 같이 멈출 수 있는 체육관으로 내가 먼저 갈게.”"
      },
      {
        "requiredFlags": [
          "route_lock_junhyeok",
          "junhyeok_phone_day8_warm_reply"
        ],
        "text": "“준혁아, 빠른 길 말고 네가 일부러 남긴 좌표로 갈게. 다시 멈춰도 되는 길이면, 나도 안 지울래.”"
      },
      {
        "requiredFlags": [
          "route_lock_dohun",
          "dohun_phone_day7_warm_reply"
        ],
        "text": "“도훈아, 농담 뒤에 숨지 않을 대답 들고 갈게. 따뜻한 캔 사진 말고, 네 얼굴 보고 말할래.”"
      },
      {
        "requiredFlags": [
          "route_lock_haeum",
          "haeum_phone_day7_warm_reply"
        ],
        "text": "“하음아, 오늘 고백은 빠르게 끝내지 않을게. 같이 늦어도 되는 음악실로, 네 박자에 맞춰 갈게.”"
      },
      {
        "requiredFlags": [
          "route_lock_yunho",
          "yunho_phone_day7_warm_reply"
        ],
        "text": "“윤호야, 옥상 문 잠그지 말고 기다려 줘. 선배라는 말 뒤가 아니라, 네 바로 옆으로 갈게.”"
      }
    ]
  },
  {
    "id": "day14-hyeongyeom-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "“우산 두 개 가져왔어. 하나는 빌려주는 거고, 하나는 핑계야. 학범아, 오늘은 돌려주고 바로 가지 말고 내 옆에 있어.”",
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
    "text": "둘은 이벤트 뒤편 보관함에서 기록집을 찾았다. 첫 장에는 학범이 빌려준 우산 목록과, 현겸이 덧쓴 “돌려준 뒤에도 부르기”라는 문장이 있었다.",
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
    "nextId": "day14-hyeongyeom-afterglow",
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
    "id": "day14-hyeongyeom-afterglow",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "현겸",
    "role": "동급생",
    "place": "같은 우산",
    "text": "현겸은 우산 손잡이를 학범과 반씩 잡고 웃었다. “오늘은 내가 더 기울일게. 네 어깨 젖으면 내가 속상하니까.” 두 사람의 손가락 사이로 봄비 냄새가 조용히 번졌다.",
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
      }
    ],
    "nextId": "day14-merge"
  },
  {
    "id": "day14-ukhyun-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "“방명록 첫 줄, 비워 뒀어. 네가 쓰기 전엔 나도 안 넘길게. 오늘은 접힌 쪽지도 전부 펼쳐 둘 거야.”",
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
    "text": "기록집은 반납함 가장 아래에서 나왔다. 첫 장에는 학범이 대신 써 준 안내문들이 붙어 있었고, 접힌 쪽지 안쪽에는 아직 읽히지 않은 한 줄이 남아 있었다.",
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
    "nextId": "day14-ukhyun-afterglow",
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
    "id": "day14-ukhyun-afterglow",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "욱현",
    "role": "도서관 도우미",
    "place": "접힌 노트",
    "text": "욱현은 접힌 노트를 펴서 학범 쪽으로 밀었다. 마지막 줄에는 “좋아해” 대신 “네가 말해 준 날”이라고 적혀 있었다. 그는 귀끝을 붉히며 “음성 기록은 내 기억에만 남길게”라고 말했다.",
    "effect": {
      "target": "ukhyun",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "ukhyun",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day14-merge"
  },
  {
    "id": "day14-jaeseong-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "“송출 스위치 꺼 놨어. 축제 멘트는 남한테 맡겼고, 오늘 내 목소리는 너한테만 쓸 거야.”",
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
    "text": "기록집은 낡은 녹음 테이프 상자 안에 있었다. 라벨에는 학범이 도와준 방송 목록과, 끝내 송출되지 않은 재성의 문장이 적혀 있었다.",
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
    "nextId": "day14-jaeseong-afterglow",
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
    "id": "day14-jaeseong-afterglow",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "재성",
    "role": "방송부",
    "place": "방송실 너머",
    "text": "재성은 꺼진 마이크 앞에서 두 손을 들었다. “방송 종료. 지금부터는 학범이 전용 채널.” 장난처럼 말했지만, 학범 이름을 부르는 목소리는 믿기 어려울 만큼 조심스러웠다.",
    "effect": {
      "target": "jaeseong",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "jaeseong",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day14-merge"
  },
  {
    "id": "day14-sangwon-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "문화제 기록집",
    "text": "상원은 전시 부스 앞에서 수정 테이프를 주머니에 넣은 채 서 있었다. 오늘의 기억을 모두에게 보일 수 있어도, 학범의 선택만큼은 둘 사이에 남겨 둘 준비였다.",
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
    "place": "문화제 기록집",
    "text": "기록집은 전시 명부 사이에 끼워져 있었다. 첫 장에는 학범이 처리한 수많은 부탁들이 있었고, 여백에는 “본인이 고를 때까지 비공개”라는 상원의 글씨가 있었다.",
    "nextId": "day14-sangwon-truth"
  },
  {
    "id": "day14-sangwon-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "문화제 기록집",
    "text": "상원은 기록부를 닫았다. “공개할 기억은 여기까지야.” 조명 스위치가 작은 소리를 냈고, 가장 중요한 줄은 둘 사이의 빈 페이지로 넘어왔다.",
    "nextId": "day14-sangwon-confession"
  },
  {
    "id": "day14-sangwon-confession",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "학생회",
    "place": "문화제 기록집",
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
    "place": "문화제 기록집",
    "text": "상원은 펜을 들었다가 내려놓았다. “그 줄은 네 글씨로 충분해.” 그는 기록부를 닫은 손으로 학범의 손등을 잠시 덮었다.",
    "nextId": "day14-sangwon-afterglow",
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
    "id": "day14-sangwon-afterglow",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "상원",
    "role": "학생회 기록 담당",
    "place": "문화제 기록집",
    "text": "상원은 기록집을 닫고 학범의 떨린 손등 위에 펜을 내려놓았다. “이건 네가 가진 문장이야. 나는 옆에서 날짜만 기억할게.” 정확한 사람의 배려가 처음으로 조금 서툴렀다.",
    "effect": {
      "target": "sangwon",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "sangwon",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day14-merge"
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
    "text": "기록집은 체육관 장비함 뒤에서 발견됐다. 첫 장에는 학범이 대신 뛰어다닌 준비 목록과, 상욱이 너무 늦게 읽은 “기다려 줘서 고마워”가 붙어 있었다.",
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
    "nextId": "day14-sanguk-afterglow",
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
    "id": "day14-sanguk-afterglow",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "상욱",
    "role": "운동부",
    "place": "체육관 동선",
    "text": "상욱은 결승선 테이프 앞에서 두 팔을 벌렸다가 다시 내려놓았다. “안아도 돼?” 학범이 고개를 끄덕이자, 그는 기다렸던 만큼 조심스럽게 한 걸음 다가왔다.",
    "effect": {
      "target": "sanguk",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "sanguk",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day14-merge"
  },
  {
    "id": "day14-junhyeok-festival",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "준혁",
    "role": "문화제 동선 담당",
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
    "text": "기록집은 미로 안내판 뒤쪽에서 나왔다. 첫 장에는 학범이 남들을 위해 찾아 준 길들이 있었고, 마지막 지도에는 접힌 자국 때문에 목적지가 보이지 않았다.",
    "nextId": "day14-junhyeok-truth"
  },
  {
    "id": "day14-junhyeok-truth",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "준혁",
    "role": "문화제 동선 담당",
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
    "role": "문화제 동선 담당",
    "place": "지도 위 빈칸",
    "text": "준혁은 잠시 계산을 멈췄다. “그럼 오늘은 최적화하지 않을게.” 그는 지도를 접어 주머니에 넣고, 비워 둔 손으로 학범의 옆자리를 가리켰다.",
    "nextId": "day14-junhyeok-afterglow",
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
    "id": "day14-junhyeok-afterglow",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "준혁",
    "role": "문화제 동선 담당",
    "place": "지도 위 빈칸",
    "text": "준혁은 지도에 없는 길 옆에 작은 하트를 그렸다가 선으로 가렸다. “표기 오류 아니야. 그냥… 너랑 있으면 필요한 기호가 늘어.” 학범이 웃자 그는 지도를 접지 못했다.",
    "effect": {
      "target": "junhyeok",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "junhyeok",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day14-merge"
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
    "text": "기록집은 영수증 묶음 사이에 끼워져 있었다. 첫 장에는 학범이 대신 해결한 부탁들과, 도훈이 접어 둔 작은 진심들이 계산되지 않은 채 적혀 있었다.",
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
    "nextId": "day14-dohun-afterglow",
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
    "id": "day14-dohun-afterglow",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "도훈",
    "role": "정보통",
    "place": "편의점 불빛",
    "text": "도훈은 영수증 뒷면을 내밀고 고개를 돌렸다. 거기엔 “좋아함. 장난 아님.”이라고 적혀 있었다. 학범이 웃자 그는 빨개진 얼굴로 “읽었으면 대답해. 놀리지 말고”라고 말했다.",
    "effect": {
      "target": "dohun",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "dohun",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day14-merge"
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
    "text": "기록집은 피아노 의자 아래에서 나왔다. 첫 장에는 학범이 맞춰 준 사람들의 박자가 적혀 있었고, 마지막 마디는 불이 꺼진 뒤에도 남는 쉼표처럼 비어 있었다.",
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
    "nextId": "day14-haeum-afterglow",
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
    "id": "day14-haeum-afterglow",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "하음",
    "role": "음악실 담당",
    "place": "해질녘 음악실",
    "text": "하음은 빈 악보 마지막 줄에 쉼표를 하나 그렸다. “오늘은 여기서 쉬자. 내일 이어서 불러도 되니까.” 학범이 고개를 끄덕이자, 하음의 박자가 조금 빨라졌다.",
    "effect": {
      "target": "haeum",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "haeum",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day14-merge"
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
    "text": "기록집은 옥상 사진 전시 뒤에서 나왔다. 첫 장에는 학범이 후배들을 챙긴 기록들이 있었고, 윤호의 종이에는 “선배가 이름으로 부르면 기다림을 끝내기”라고 적혀 있었다.",
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
    "nextId": "day14-yunho-afterglow",
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
    "id": "day14-yunho-afterglow",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "윤호",
    "role": "후배 / 풍기 도우미",
    "place": "비 갠 옥상",
    "text": "윤호는 “선배”라고 부르려다 멈추고 조심스럽게 이름을 불렀다. “학범… 형.” 짧은 호칭 하나에 얼굴이 붉어져도, 그는 이번엔 뒤로 물러나지 않았다.",
    "effect": {
      "target": "yunho",
      "type": "heart"
    },
    "directives": [
      {
        "type": "E",
        "target": "yunho",
        "effect": "heart",
        "motion": "nod"
      }
    ],
    "nextId": "day14-merge"
  },
  {
    "id": "day14-merge",
    "type": "dialogue",
    "chapter": "day-14",
    "mood": "confession",
    "name": "학범",
    "role": "독백",
    "place": "학범 아카이브 전시실",
    "text": "기록집의 마지막 장은 한 사람의 장난이 아니었다. 학범이 남들을 위해 남긴 기록과, 모두가 학범에게 돌려주고 싶었던 마음이 한 기록집에 모여 있었다. 마지막 빈 페이지는 비워 둔 것이 아니라 학범이 직접 써야 해서 비어 있었다.",
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
    "place": "학범 아카이브 전시실",
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
    "place": "학범 아카이브 전시실",
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
    "place": "학범 아카이브 전시실",
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
    "place": "학범 아카이브 전시실",
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
