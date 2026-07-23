Fixed 172px-wide sidebar: mini-profile box, then boxed menu groups with right-aligned links (bulma convention) and a boxed active-page indicator.

```jsx
<SidebarMenu
  profileLabel="。 쭈 요 。"
  groups={[
    { title: 'MENU', items: [{ label: '홈', active: true }, { label: '프로필', onClick: goProfile }] },
    { title: '자료실', items: [{ label: '사진첩', isNew: true, onClick: goPhotos }] },
  ]}
/>
```

Pair with `LCDCounter` and a "best view 1024*768" caption underneath (see the homepage UI kit) to complete the sidebar.
