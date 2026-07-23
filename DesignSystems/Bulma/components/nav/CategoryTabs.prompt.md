Category filter row used above board lists and the photo album (자유/일기/여행기/개발일지, ALL/사진/일러스트/...).

```jsx
<CategoryTabs tabs={[
  { label: '자유게시판', active: true },
  { label: '일기', isNew: true, onClick: () => setCat('diary') },
]} />
```
