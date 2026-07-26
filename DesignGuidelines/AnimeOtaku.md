# Anime Overload — 디자인 가이드 (AnimeFanpage)

2000년대 초반(2000~2004년경) 개인 홈페이지 감성을 재현한 가상 인물 "Dave Callahan"(오하이오 출신, 90~2000년대 일본 애니메이션 덕후 대학생)의 개인 홈페이지. 레퍼런스는 `References/AnimeFanpage` 폴더의 스크린샷(Marmalade Boy 팬페이지, CAVV, Magellan Castle, Elaine's Japanese Animation Resort, Fruits Basket Dai Bouken 등 지오시티즈풍 애니 팬사이트). 브라우저 크롬(넷스케이프/익스플로러 UI)은 참고 대상에서 제외하고 웹페이지 자체 디자인만 반영. 게시판류 헤더 톤은 `References/Bulma/bulma07~11.png`도 부분 참고.

---

## 1. 컨셉 & 톤

- 아마추어가 직접 짠 티가 나는 조악한 HTML 페이지. 세련된 flexbox 정렬 대신 `<table>` 레이아웃, `<font>` 태그, `<hr>` 구분선을 그대로 사용.
- 박스형 컨테이너로 콘텐츠를 가두지 않고 브라우저 전체 폭을 사용(풀블리드). 사이드바 + 본문의 2단 테이블 구조.
- 색 배합이 서로 안 어울려도 그대로 둠(빨간 배너 위에 파란 타이틀 등) — 세련됨보다 시대 고증 우선.
- 텍스트는 영문, 90년대 후반~2000년대 초반 미국 오타쿠 채팅체(`lol`, `^_^`, AIM/ICQ 언급) 사용.

## 2. 배경 & 색상

- 전체 배경: 흰색(`#ffffff`) 기반, 어둡거나 화려한 그라디언트 없음.
- 상단 배너: 단색 빨강(`#cc0000`) 바탕에 파란색(`#0000ff`) 이탤릭 세리프 타이틀 — Elaine's Japanese Animation Resort의 빨강/파랑 배색을 그대로 차용.
- 사이드바: 옅은 하늘색(`#cce0f5`) 배경, 검정 1px 보더로 본문과 구분.
- 링크 기본 `#0000ee`(밑줄), hover `#cc0000`.
- 표(공지사항/게시판) 헤더: 회색(`#cccccc`) bgcolor, 셀 보더 `1px solid #999~#000`.
- 방문자 카운터: 검정 배경 + 초록 모노스페이스 LED 텍스트(`#33ff33`), Courier New.
- 이미지 자리는 항상 `<image-slot>` 플레이스홀더(사용자가 실제 애니메이션 이미지/스크린샷/팬아트를 드래그해서 채움), 테두리는 단순 1px 검정.

## 3. 타이포그래피

- 본문: `Times New Roman`, Times, serif — `<font size="3">` 등 구식 폰트 태그 사용.
- 제목: `Times New Roman` 이탤릭 볼드, 빨간색(`#cc0000`).
- 내비게이션/사이드바/작은 라벨: `Arial`, Helvetica, sans-serif.
- 카운터/URL 서브텍스트: `Courier New`, monospace.

## 4. 레이아웃

- 상단: 빨간 배너 바(타이틀 + URL 서브텍스트), 그 아래 검정 바탕 마키(marquee) 환영 문구.
- 좌측 사이드바(고정 폭 150px): "PLACES TO GO:" 텍스트 링크 목록(세로 스택), 현재 페이지는 빨간 볼드로 표시, 새 글 있는 메뉴엔 `[N]`.
- 본문: 사이드바 옆 남은 폭 전체 사용, `<table>`로 이미지+텍스트 배치, `<hr>`로 섹션 구분, 정렬은 일부러 완벽하지 않게.
- 게시판/공지사항: NO/SUBJECT/(NAME)/DATE/HIT 테이블, 신규글 빨간 `[N]`, 게시판은 카테고리 필터 텍스트 링크(`[ ALL ] [ GENERAL ] ...`).
- 사진첩/동영상: 셀 보더 있는 테이블 그리드, 동영상은 재생 삼각형 오버레이 + 클릭 시 모달(자체 보더, OS 크롬 아님).
- 프로젝트: 테이블 그리드 썸네일, 클릭 시 새 탭에서 외부 링크.
- 대문(Entrance): 사이드바 없이 중앙 정렬 단일 컬럼, 스플래시 이미지 + 타이틀 + ENTER 링크 + 방문자 카운터.

## 5. 사이트 구조 & 페이지

- **Entrance** — 대문. 스플래시 이미지, 환영 문구, "Come Inside!!!" 링크, 방문자 카운터, BGM 안내.
- **Home** — 소개 문구 + 본인 사진 + 최신 게시판/공지 미리보기 + Affiliates/방명록/사이트 통계.
- **Profile** — 사진, 자기소개, 좋아하는 애니 목록, 기타 취미, 연락처(AIM/ICQ/이메일).
- **Notice** — NO/SUBJECT/DATE/HIT 목록, 클릭 시 `PostView.dc.html?board=notice&id=`.
- **Board** — 카테고리 탭(General/Anime Talk/Fanart/Rants) + NO/SUBJECT/NAME/DATE/HIT 목록.
- **Photos** — 탭(ALL/Photos/Fanart/Wallpapers/Scans) + 그리드 썸네일.
- **Videos** — 그리드 썸네일(재생 아이콘) + 클릭 시 모달(유튜브 자리, AMV 컨셉).
- **Projects** — 그리드 썸네일, 클릭 시 새 탭 외부 링크.
- **PostView** — Notice/Board/Photos 공용 상세 페이지, `board`/`id` 쿼리로 데이터 매핑.

## 6. 하지 말 것

- 박스형 카드 컨테이너로 콘텐츠 전체를 가두지 않기(풀블리드 유지).
- 지나치게 정돈된 flexbox 정렬, 그림자, 둥근 모서리, 그라디언트 남발 금지 — 실제 텍스처는 `<table>`/`<font>`/`<hr>` 기반의 투박한 마크업으로.
- SVG로 직접 그림 그리기 금지 — 애니메이션 이미지는 항상 `<image-slot>` 플레이스홀더로 사용자가 채우도록.
- OS 브라우저 크롬(타이틀바, 창 버튼 등) 차용 금지.
