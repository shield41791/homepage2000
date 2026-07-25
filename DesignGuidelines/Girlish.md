# 소이의 딸기우유 — 디자인 가이드

2000년대 초반(2000~2004년경) 개인 홈페이지 감성을 재현한 가상 인물 "소이"의 개인 홈페이지. 레퍼런스는 `References/Girlish` 폴더의 스크린샷(Sugar Cubes, ChibiUsa's Palace, Oh Pooh, Hello Kitty 연하장 페이지, Open Love Project 등 — 파스텔톤 소녀 감성 지오시티즈류 홈페이지들). 브라우저 크롬(익스플로러 UI)은 참고 대상에서 제외하고 웹페이지 자체 디자인만 반영. 게시판 표는 `References/Bulma`(bulma07~08) 참고.

---

## 1. 컨셉 & 톤

- 폭 780px 고정 컨테이너 + 핑크 보더, 화면 배경은 풀블리드 반짝이 타일.
- 정렬은 실제로 완벽하지 않게, 살짝 기운 사진·비대칭 배치를 의도적으로 유지.
- 텍스트 톤은 당시 채팅체/통신체 (`^^`, `ㅋㅋ`, `ㅠㅠ`, `*^^*` 등을 적극 사용).

## 2. 배경 & 색상

- 배경: 핑크 바탕(`#ffe1f0`)에 흰색/연핑크 물방울 반짝이 도트 타일(`radial-gradient`, 28px 반복).
- 헤더 배너: 파스텔 레인보우 세로 스트라이프(핑크·라벤더·하늘색, `repeating-linear-gradient`).
- 링크 기본 `#b04fd6`(라벤더), 현재 페이지/강조 `#ff2f8f`(핫핑크).
- NEW 배지 `#ff2266`.
- 프레임/보더 컬러 `#ff8fc7`(핑크), 점선 네비 보더 `#ff9ecf`.
- 게시판 표 헤더행 `#e3d3ff`(라벤더) + 글자 `#6a2fa6`, 셀 보더 `#eecdec`/`#c9a8e8`.
- 이미지 placeholder는 대각선 스트라이프(핑크/라벤더/하늘색 계열) + 동색 보더 + 모노스페이스 라벨.
- 타이틀 로고는 `#ff2f8f`에 흰색 `text-stroke` + 연핑크 `text-shadow`로 버블(말랑) 엠보싱 효과.

## 3. 타이포그래피

- 본문: `Gulim`, `Dotum`, sans-serif — 당시 한국 개인 홈피 기본 서체.
- 타이틀/섹션 헤더: `Comic Sans MS`, `Gungsuh`, cursive — 말랑말랑한 버블 폰트.
- 캡션/카운터/URL 서브텍스트: `Courier New`, monospace.

## 4. 레이아웃

- 상단: 레인보우 스트라이프 배너 안에 버블 타이틀 로고 + 도메인 서브텍스트(`http://strawberrymilk.wo.to`).
- 그 아래: 점선 보더 가로 네비(`Home::::Profile::::Notice::::Board::::Photos::::Videos::::Projects`), 현재 페이지는 핑크 배경 pill로 표시.
- 네비 아래: 스크롤 마퀴(환영 문구, 핑크 텍스트).
- 본문: 780px 고정 폭 안에서 좌우 컬럼 분할(Home은 본문+위젯 사이드바), 다른 페이지는 단일 컬럼.
- 장식 요소: ✧, ❀ 유니코드 별/꽃 심볼을 헤더·구분선에 산발적으로 배치.
- Home 사이드바는 Sugar Cubes 참고 — "Link me", "Guestbook", "사이트 현황" 라벤더/핑크/하늘색 라벨 박스.
- 갤러리류(Photos/Videos)는 바깥 회색 프레임(`border: 2px solid #999`) + 표 형태 그리드, 셀 경계 `1px solid #999`, 배경은 투명(핑크 배경 비침), 하단 `[1]` 페이징.
- Videos 썸네일은 반투명 원형 재생 버튼(▶) 오버레이, 클릭 시 중앙 다이얼로그(유튜브 placeholder).
- Projects는 2열 그리드, 썸네일 클릭 시 `target="_blank"`로 새 탭 이동.

## 5. 사이트 구조 & 페이지

- **Entrance** — 대문 이미지 placeholder + 버블 타이틀 + 환영 문구 + ENTER 버튼 + 방문자 카운터(LCD 스타일 흑색 박스) + BGM 안내.
- **Home** — 소개글 + 기울어진 사진 + 강아지(먼지) 소개 + 게시판/공지 최신글 미리보기 + 사이드바 위젯.
- **Profile** — 사진, 자기소개, 관심사, 좋아하는 것, 스냅샷, SNS/연락처.
- **Notice** — NO/SUBJECT/DATE/HIT 목록, 클릭 시 `PostView.dc.html?board=notice&id=`.
- **Board** — 카테고리 탭(자유/일기/여행기) + NO/SUBJECT/NAME/DATE/HIT 목록.
- **Photos** — 탭(ALL/사진/일러스트/웹툰/스크린샷) + 표 형태 썸네일 그리드.
- **Videos** — 표 형태 썸네일 그리드(재생 아이콘 오버레이) + 클릭 시 다이얼로그(실제 재생 없음).
- **Projects** — 2열 그리드, 클릭 시 새 탭에서 외부 링크.
- **PostView** — Notice/Board/Photos 공용 상세 페이지, URL 쿼리 `?board=&id=`로 매핑.

## 6. 하지 말 것

- OS 크롬(브라우저 타이틀바, 버튼 등) 차용 금지.
- 카드형 둥근 컨테이너 / 그림자 남발 금지.
- 스톡 아이콘 세트 사용 금지.
- 지나치게 정돈된 정렬 금지(레트로 감성 훼손).
