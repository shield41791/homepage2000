The nested double-border box used to contain every panel on the site — sidebar boxes, home intro, board frames.

```jsx
<Frame header="MENU" accent="blue">
  <div>...menu links...</div>
</Frame>

<Frame accent="green" padded={false}>
  <table>...board rows...</table>
</Frame>
```

Variants: `header` adds the 궁서 title bar; `headerRight` appends a "more▷" style link; `accent="green"` switches border/header tint for board-style content; `double` swaps to the 3px double-line border used for profile photos and video modals.
