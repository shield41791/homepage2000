The bulma-green board/notice list table — used for 공지사항 and every 게시판 category.

```jsx
<BoardList total={24} page={1} totalPages={3} posts={[
  { no: 24, title: '요즘 즐기는 게임 이야기', author: '쭈요', date: '26.07.19', views: 88, isNew: true, onClick: openPost },
]} />
```

On mobile, drop `showNo`/`showName`/`showHit` to the 2-column SUBJECT/DATE layout. Pair with `Pagination` below and `PostDetail` for the opened row.
