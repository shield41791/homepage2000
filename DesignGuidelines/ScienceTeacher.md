# Mr. Turner's Science Corner — 디자인 가이드 (Gray)

2000년대 초반(2000~2004년경) 개인 홈페이지 감성을 재현한 가상 인물 "Gary Turner"(미국 고등학교 물리과학/화학 교사)의 개인 홈페이지. 레퍼런스는 `References/Gray` 폴더의 스크린샷(옛 Yahoo!, Ren & Stimpy 팬페이지, Cyprus Online 등 실버/그레이 톤 개인·포털 홈페이지들). 브라우저 크롬(넷스케이프/익스플로러 UI)은 참고 대상에서 제외하고 웹페이지 자체 디자인만 반영. 게시판류 레이아웃은 `References/Bulma/bulma07~11.png`도 부분 참고.

---

## 1. 컨셉 & 톤

- 실버/그레이 톤의 투박한 Windows 95~98풍 베젤(bevel) UI. 카드형 둥근 컨테이너, 그림자 남발 없음 — 대신 outset/inset 보더로 입체감 표현.
- 정렬은 완벽하지 않게, 각진 배치를 의도적으로 유지.
- 텍스트는 영문. 톤은 성실하고 소박한 교사 화법(`^^`, `lol`, `:-)` 정도의 절제된 이모티콘만 사용, 여성향 채팅체는 사용하지 않음).

## 2. 배경 & 색상

- 배경: 타일 이미지 대신 CSS 크로스해치 패턴으로 마블/노이즈 질감 재현 (`repeating-linear-gradient` 두 겹, 배경색 `#c6c6c6`).
- 패널: outset 2px 보더(`#fff #808080 #808080 #fff`) + 배경 `#d6d6d6`(외곽), 본문 영역은 inset 보더 + 배경 `#ececec`.
- 링크 기본 `#0000cc`, hover `#cc2200`.
- 강조 제목/섹션 헤더 `#1c355f`(네이비).
- NEW 배지 `#dd2222`.
- 내비게이션 버튼: 기본 `linear-gradient(180deg,#9db3d9,#3d5686)` + outset 보더(`#d8e2f2 #16233f #16233f #d8e2f2`); 현재 페이지는 레드 계열 `linear-gradient(180deg,#e0949c,#9c2c38)` + 보더(`#ffd9dd #601018 #601018 #ffd9dd`).
- 이미지 placeholder는 대각선 스트라이프(`#dcdcdc` / `#f4f4f4`) + `#888` 2px 보더 + 모노스페이스 라벨.
- 타이틀 로고 텍스트는 스틸 블루 그라디언트(`#a9c0e8 → #3d5686 → #16233f`)에 `background-clip: text`로 엠보싱, 흰색 텍스트섀도우 곁들임.
- 방문자 카운터는 검정 배경 + 초록 모노스페이스 LED 스타일(`#33ff66`), outset 프레임.

## 3. 타이포그래피

- 본문: `Times New Roman`, Times, serif.
- 제목/버튼/내비게이션/테이블 헤더: `Arial`, `Arial Black`, Helvetica, sans-serif, bold 위주.
- 카운터/코드성 텍스트: `Courier New`, monospace.

## 4. 레이아웃

- 상단: 이중선(`4px double #7a7a7a`) 보더 하단의 헤더 바(그라디언트 회색) + 스틸 블루 엠보싱 타이틀 로고 + 사이트 주소 서브텍스트.
- 좌측: 세로 베젤 버튼 메뉴(Home/Profile/Notice/Board/Photos/Videos/Projects), 현재 페이지는 레드 그라디언트로 표시, 신규 글 있는 메뉴에 `[N]` 표시.
- 본문: 좌측 메뉴 옆 inset 패널, 최대 폭 900px로 가운데 정렬(당시 800~1024 해상도 기준).
- 구분선: 실선(`2px solid #999`) 또는 이중선(`3px double`), 장식 요소는 최소화(꽃/별 유니코드는 Home에서만 절제해 사용).
- 게시판/공지사항: NO/SUBJECT/(NAME)/DATE/HIT 테이블형 리스트, 헤더는 네이비 bold, 신규글 빨간 `[N]`.
- 사진첩/동영상: 회색 아웃라인(`border: 2px solid #999`) 프레임 안에 셀 경계선(1px solid #999) 그리드, 배경은 투명(그레이 배경 비쳐 보임), 하단 `[1] 2 3` 페이징.
- 프로젝트: 그리드 썸네일, 클릭 시 새 탭에서 외부 링크 오픈(공통 구조 기준 준수).
- 동영상 상세: 다이알로그(모달) — 자체 배경/보더로 구현, OS 크롬 아님.

## 5. 사이트 구조 & 페이지

- **Entrance** (`Entrance.dc.html`) — 대문. 타이틀, 환영 문구, ENTER 버튼(점멸 애니메이션, 최소 불투명도 유지), 방문자 카운터(오늘/총).
- **Home** — 소개 문구 + 교사 사진 placeholder + 공지사항/게시판 최신글 미리보기.
- **Profile** — 사진, 자기소개, 관심사, 좋아하는 것, 연락처(이메일/ICQ/메신저).
- **Notice** — NO/SUBJECT/DATE/HIT 목록, 클릭 시 `PostView.dc.html?id=`로 이동.
- **Board** — 카테고리 탭(Free Talk/Classroom Diary/Field Trip Log/Experiment Log) + NO/SUBJECT/NAME/DATE/HIT 목록.
- **PostView** — Notice/Board/Photos 공용 상세 페이지, `id` 쿼리로 데이터 매핑.
- **Photos** — 탭(All/Classroom/Experiments/Field Trips) + 그리드 썸네일 + 페이징.
- **Videos** — 그리드 썸네일(재생 삼각形 아이콘 오버레이) + 클릭 시 모달 다이알로그(실제 재생 없음).
- **Projects** — 그리드 썸네일, 클릭 시 새 탭에서 외부 링크.

## 6. 하지 말 것

- OS 크롬(타이틀바, 창 버튼 등) 차용 금지.
- 카드형 둥근 컨테이너 / 그림자 남발 금지 — 항상 outset/inset 보더로 입체감 표현.
- 스톡 아이콘 세트 사용 금지, SVG로 직접 그림 그리기 금지 — 이미지는 항상 스트라이프 placeholder.
- 지나치게 정돈된 정렬 금지(레트로 감성 훼손).
- CTA/링크가 애니메이션으로 완전히 사라지는 연출 금지(가독성 유지, 최소 불투명도 확보).
