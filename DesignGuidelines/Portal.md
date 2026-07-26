# NetVantage — 디자인 노트

1997~2001년경 미국형 종합 포털사이트 감성 재현 프로젝트. References/WhiteBusiness(internet.com, eBay, Excite, Wal-Mart Online, GeoCities, Yahooligans), References/Bulma(게시판 테이블) 참고.

## 사이트
- 이름: NetVantage / 태그라인: "Your Gateway to the Internet"
- 콘셉트: 검색·뉴스·쇼핑·메일·커뮤니티를 한 화면에 모은 가상 종합 포털

## 비주얼 시스템
- 폭: 780px 고정, 화면 중앙 정렬 (800x600 해상도 시대 관례)
- 배경: 흰색 / 본문 폰트: Times New Roman(serif) 13px — 당시 브라우저 기본값 느낌
- 헤더/바 폰트: Arial, Helvetica — 로고, 탭, 섹션 바에만 사용
- 링크색: #0000EE(기본) / #551A8B(방문) / hover #CC0000 — 브라우저 기본 팔레트
- 로고: 검정+빨강(#CC0000) 워드마크 박스 (internet.com 스타일 오마주)
- 섹션 헤더: 검정 바탕 + 흰색 Arial bold ("CATEGORIES", "TODAY'S HEADLINES" 등)
- 상단 유틸리티 바: 노란빛 안내 바(#FFF2CC) — 공지/이벤트성 문구
- 표(table) 기반 레이아웃, cellpadding/cellspacing 위주 — CSS 대신 옛 마크업 문법 재현
- NEW! 표시: 빨강 굵은 텍스트, GIF 대신 텍스트로 처리

## 구조 (todo)
- [x] 메인 (메인.dc.html)
- [ ] 검색결과
- [ ] 뉴스
- [ ] 쇼핑/커머스
- [ ] 커뮤니티 게시판 (Bulma07~11 NO/SUBJECT/NAME/DATE/HIT 테이블 참고)

## 원칙
- 실사용성보다 당시 UI 문법(투박함, 표 레이아웃, 브라우저 기본 링크색) 재현이 최우선
- 개인 홈페이지 감성(방명록/BGM) 배제, 기업형 정돈된 톤 유지
- 배너/광고 영역은 image-slot으로 사용자가 실제 이미지 채울 수 있게 처리
