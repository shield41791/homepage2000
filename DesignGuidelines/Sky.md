# Jisu's Sky Garden — 디자인 가이드

2000년대 초반(2000~2004년경) 개인 홈페이지 감성을 재현한 가상 인물 "Jisu"의 개인 홈페이지. 레퍼런스는 `References/SkyBackground` 폴더의 스크린샷(지오시티즈류 하늘/구름 배경 개인 홈페이지들 — Wienerville, Jay Jay the Jet Plane, Windows95.com, Huan Tran's Home Page 등). 브라우저 크롬(넷스케이프/익스플로러 UI)은 참고 대상에서 제외하고 웹페이지 자체 디자인만 반영.

---

## 1. 컨셉 & 톤

- 화면 전체를 쓰는 풀블리드 레이아웃, 카드형 컨테이너 없음.
- 정렬은 실제로 완벽하지 않게, 투박한 배치를 의도적으로 유지.
- 텍스트는 영문. 콘텐츠 톤은 당시 채팅체/통신체 (`hiya~`, `^^`, `ㅋㅋ`, `ㅠㅠ` 등을 영문 문장에도 섞어 사용).

## 2. 배경 & 색상

- 배경: 사용자 제공 하늘/구름 사진(`uploads/wp2808032-windows-98-background.jpg`)을 타일링(`background-repeat: repeat`, 1024×768 타일 크기).
- 링크 기본 `#1f4fd6`, hover `#ff5fa8`.
- 강조 제목/섹션 헤더 `#0d5fc0`.
- NEW 배지 `#ff3333`.
- 프레임/구분선 보더 컬러 `#6a95c7` (진한 하늘색), 보조 라인 `#cfe4fb`.
- 이미지 placeholder는 대각선 스트라이프(`#d6ecff` / `#fff`) + `#6a95c7` 2px 보더 + 모노스페이스 라벨.
- 타이틀 로고 텍스트는 검정(`#111`)에 흰색 텍스트섀도우로 엠보싱 효과.

## 3. 타이포그래피

- 본문 및 타이틀 모두 `Times New Roman` 계열 세리프로 통일 (SkyBackground 레퍼런스들이 브라우저 기본 세리프를 그대로 쓰는 경향을 반영).
- 목록/리스트 항목, 강조 문구에는 bold를 적극적으로 사용.
- 캡션/코드성 텍스트는 모노스페이스.

## 4. 레이아웃

- 상단: 타이틀 로고(이중선 보더 하단) + 사이트 주소 서브텍스트.
- 좌측: 세로 텍스트 링크 메뉴 (Home / Profile / Notices / Board / Photos / Videos / Projects), 현재 페이지는 핑크(`#ff5fa8`)로 표시.
- 본문: 화면 전체 폭 사용 (가운데 좁은 컬럼으로 가두지 않음).
- 이미지 placeholder를 본문 곳곳에 배치 (프로필 사진, 스냅샷 그리드, 게시판 미리보기 썸네일 등).
- 구분선(`<hr>`, 2px solid `#6a95c7`)을 섹션 사이마다 적극 사용.

## 5. 사이트 구조 & 페이지

- **Home** (`지수의 하늘정원.dc.html`) — 소개 문구 + 스냅샷 그리드 + 게시판별(Notices/Free Board/Daily Diary) 최신글 미리보기.
- **Profile** — 프로필 사진, 소개, 좋아하는 것, 스냅샷, 연락처 링크.
- **Notices** — NO/SUBJECT/DATE/HIT 목록, 게시글 클릭 시 `PostDetail.dc.html`로 이동.
- **Board** — 카테고리 탭(Free/Diary/Travelogue/Dev Log) + NO/SUBJECT/NAME/DATE/HIT 목록, 상세 페이지 연결.
- **Photos** — 탭(All/Photos/Illustration/Webtoon/Screenshots) + 썸네일 그리드.
- **Videos** — 썸네일 그리드 + 재생 아이콘 오버레이(실제 재생 없음).
- **Projects** — 썸네일 그리드, 새 탭 링크 placeholder.
- **PostDetail** — Notices/Board 공용 상세 페이지. URL 쿼리 `?id=`로 게시글 데이터를 매핑해서 렌더링.

## 6. 앞으로 확장 가능한 부분 (미구현)

- 대문(스플래시), 마퀴 공지, BGM 플레이어, 방문자 카운터/실시간 시계, 마우스 트레일/스파클, 날씨 파티클 — 초기 버전에 있었으나 사용자 요청으로 현재 제거된 상태. 필요시 재도입 가능.

## 7. 하지 말 것

- OS 크롬(타이틀바, 버튼 등) 차용 금지.
- 카드형 둥근 컨테이너 / 그림자 남발 금지.
- 스톡 아이콘 세트 사용 금지.
- 지나치게 정돈된 정렬 금지 (레트로 감성 훼손).
