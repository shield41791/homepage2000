# The Loremaster's Hall — Design Document

A 2000–2004-era personal fan homepage, deliberately recreated with the crude, unpolished web design conventions of that period rather than a modern reinterpretation.

## Concept
Persona: Aldric, an American fantasy hobbyist (Tolkien-style epics, tabletop D&D, fantasy RPGs) who shares his personal collection — maps, artwork, painted miniatures, book covers, campaign notes — on a homemade site. All copy is in English.

## References
- **References/FantasyGamer** (main visual reference, Everlore screenshots): stone/parchment textures, gold ornamental logo, top tab menu, boxed sidebar, ad banner, gold divider bar.
- **References/Bulma**: board/announcement table layout (No./Title/Author/Date/Views).
- Browser chrome in the screenshots (IE, etc.) is not referenced — only the page content itself.

## Site Structure (per homepage2000/common-structure.md)
Entrance → Home → About / Announcements / Forum / Gallery / Videos / Projects
Shared header (banner + gold divider + decorative tab strip + ad banner + static intro line), boxed sidebar menu, and a static footer note repeat across all interior pages.
No membership system — no login, signup, or member counts. Sidebar instead shows Site Stats (posts/images/total visitors) plus Guestbook/Favorites/Site Map buttons (all "not ready yet" placeholders).

## Files
- `Entrance.dc.html` — splash: logo, welcome text, ENTER button, visitor counter
- `Home.dc.html` — latest forum updates + announcements, banner exchange grid
- `Profile.dc.html` — About Aldric: photo, stats, interests, favorites, contact (ICQ/AIM/E-mail)
- `Notice.dc.html` — Announcements board (table)
- `Board.dc.html` — Forum: General / Campaign Notes / Book Club tabs
- `Photos.dc.html` — Gallery: ALL / Maps / Artwork / Miniatures / Book Covers tabs + grid
- `Videos.dc.html` — Video grid → click opens playback dialog
- `Projects.dc.html` — Small tools grid (Campaign Wiki, Dice Calculator, Map Index)
- `PostView.dc.html` — shared detail page for board/notice/photo posts (`?board=&id=`)

No authoring/editing UI — content is static, CMS assumed external.

## Visual System
- Background: cracked-stone cross-hatched texture (`#a8a292`/`#9a9484` repeating gradients).
- Frame: 800px fixed width, olive-grey panel (`#a39c88`) with dark-brown border (`#4a3c1a`).
- Banner: painted teal/purple textured background, flanking illustration placeholders (castle / dragon), italic gold logo with hard drop shadow.
- Divider: gold/bronze diamond repeating bar beneath the banner.
- Decorative tab strip: flat olive-brown bar, gold text (MAP / RACES / SPELLBOOK / ARTIFACTS / BESTIARY / GUILD) — flavor only, not real navigation.
- Ad banner: black box with red border placeholder (period clutter).
- Intro line: single static text bar under the ad banner (no scrolling/ticker effects).
- Sidebar: parchment (`#f3ead0`) boxes — site menu, Site Stats, then three outset-bordered buttons (Guestbook / Favorites / Site Map).
- Footer: plain static text bar, no animation ("Site under construction — thank you for visiting.").
- Fonts: Georgia/Times New Roman serif throughout.
- Colors: headers bronze-gold (`#8a6d1a`), links brown (`#7a4a12`)/hover red (`#b5231f`), active menu dark red (`#7a1010`), body dark brown (`#3a2e10`).
- Tables (Forum/Announcements): olive-bronze header bar (`#6b5a1f`) with hard black border, Bulma-referenced structure.
- Buttons/inputs: flat, hard outset/inset borders — no gradients, rounded corners, or soft shadows.
- Images: striped placeholder blocks with monospace captions (no real assets).
- **No marquee/ticker/blinking elements anywhere** — removed per brief as inconsistent with a calmer classic-fantasy tone.

## Tone & Copy
Understated, hobbyist voice — a guy sharing his campaign notes and collection, not a corporate site. No emoji.

## Known Constraints
- No real images/photos — all placeholders.
- No membership system: guestbook, favorites, and site map links show a "not ready yet" alert.
