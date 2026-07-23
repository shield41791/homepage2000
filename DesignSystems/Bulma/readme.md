# Homepy2000 Design System

A design system that recreates the **look and feel of an early-2000s Korean personal homepage** (GeoCities-era / "미니홈페이지" culture) as a reusable component kit — for building nostalgic personal-site prototypes, decks, or mockups in that visual language.

## Sources

This system was built from the attached GitHub repo **[shield41791/homepage2000](https://github.com/shield41791/homepage2000)**, specifically:

- `DesignGuidelines/Bulma.md` — a full Korean-language design brief written for a fictional "쭈요의 홈페이지" (Zzuyo's Homepage) project. This is the primary source of truth for colors, type, layout, structure, and interaction rules used here.
- `References/SkyBackground/` — the main visual reference: Pinterest screenshots of real 1990s–2000s GeoCities pages with a pastel-blue sky/cloud aesthetic (also copied into this project's `References/SkyBackground/` folder for context — these are **moodboard references only**, not shippable brand assets, since they're screenshots of other people's old fan pages).
- `Samples/Bulma Style Homepage/` — a full sample implementation of the Zzuyo homepage brief, which was mined for exact component structure, copy style, and interaction patterns.
- Other `References/*` subfolders (Bulma/dragon-ball fansite screenshots, DarkGamer, FantasyGamer, Girlish, Gray, WhiteBusiness, AnimeFanpage) hold additional period references for alternate moods (anime fan page, gamer, business, etc). Only SkyBackground's pastel-blue direction was used as the primary system here — **explore the other reference folders in the repo** if you want to build sibling design systems in a different 2000s sub-genre (darker gamer sites, glittery girlish sites, business-formal sites all have distinct enough conventions to warrant their own system).

**Explore the original repo further** for more reference screenshots and the full design brief text if you want to extend or refine this system.

## What this represents

There is no single real "company" — the brief and sample describe a genre: an individual's personal homepage from ~2002, hosted on a free Korean webhost (`*.wo.to`, `*.lil.to`), with a splash gate, a bulletin-board-style board system, a photo album, a video page, and a small project showcase. The components and UI kit here are written around a generic placeholder persona ("OOO's HomePage") so they can be reused for any user's personal-site mockup — swap in a real name/handle when using it.

## Content fundamentals

- **Voice**: warm, casual, diary-like first-person. Mixes 존댓말 (polite) with cute internet-speak — `^0^`, `:)`, tildes (`~`) at sentence ends, ellipses. Example from the sample: "안녕하세요~ OOO입니다. 여긴 제가 좋아하는 게임/영화/음악/책 그리고 제가 만들고 있는 것들을 끄적여두는 개인 홈페이지구요."
- **Person**: always "I/me" (1인칭) talking to "you, visitor" — never brand-speak or corporate "we". It's a personal diary, not a product.
- **Casing**: sentence case throughout; occasional ALL CAPS only for structural labels (`MENU`, `NO`, `SUBJECT`, `TODAY`, `TOTAL`) — a period web convention, not shouting.
- **Emoji**: no emoji. Instead uses text emoticons (`^0^`, `:)`, `♡`) and dingbat/star symbols (`☆`, `♪`, `✿`, `◈`, `▣`, `。゚`) as period-accurate decoration.
- **New-content markers**: a small red bracketed `[N]` tag next to any new post/photo/menu item — never a numeric unread-count bubble.
- **Section headers**: playful breadcrumb framing like `。゚ OOO의 홈페이지 > 프로필 ゚。` rather than a plain page title.
- **Vibe**: earnest, unpolished, hobbyist — "made by one person for fun," not professionally copywritten. Slight imperfection (uneven alignment, small text) is intentional, not a bug.

## Visual foundations

- **Color**: pastel sky blue is the dominant color (`--blue-*` scale) — one, maybe two background colors per screen, per the source brief. Bulma-green (`--green-*`) is used *only* for board/list chrome (never as a page background). Black-background/green-text LCD styling for the visitor counter. Hot pink (`--pink-500`) is reserved for the `[N]` new-post badge — the only "loud" color in the system.
- **Type**: three period Korean system fonts mixed intentionally — 굴림/돋움 (Gulim/Dotum) for body and UI, 궁서 (Gungsuh) serif for headers/section titles, Comic Sans MS for the logo/wordmark and big "환영합니다!!" welcome lines. Sizes run small on purpose (body 12–13px, captions down to 9px) — this is period-authentic, not an accessibility target to "fix."
- **Backgrounds**: mostly flat white content areas; the banner uses a soft vertical pastel-blue gradient; a decorative fixed pastel-blue strip with a star pattern runs down the far right edge of the desktop layout (a nod to old fixed side-graphics). No photography-driven hero imagery — all imagery slots are placeholders (see below) since real personal photos aren't available.
- **Borders / containment**: the core motif is a **nested double border** — an outer 2px solid frame with 1px padding, then an inner 1px solid frame — used for every panel (sidebar boxes, content frames, table wrappers). A heavier 3px double border marks "precious" content (profile photo, video modal). Plain flat backgrounds, never a rounded card with a shadow — **no drop shadows anywhere**, no rounded corners (radius is 0 throughout).
- **Layout**: table-based frameset feel — fixed 172px sidebar, fluid center content, fixed 220px right-edge decorative strip on desktop. Mobile collapses to one column with a horizontally-scrolling nav strip instead of a sidebar.
- **Animation**: marquee (scrolling text) for notices and the BGM "now playing" line; a slow bob on the splash "enter" link; a spinning BGM disc icon. No transitions/fades/eases used for hover or page changes — state just swaps (period-accurate: the real thing had none). A "reduce motion" toggle in the footer settings panel is expected to be respected by any implementation using animated particles/marquees.
- **Hover / press states**: links go from `--color-link` to a slightly brighter `--color-link-hover` (`#2f6ab0` → `#3399dd`) — no underline until hover. Board rows get a faint green tint on hover. No visible "press/active" shrink states in the source material — keep interactions to color-only.
- **Imagery**: every photo/thumbnail slot that lacks a real image uses a **45°-diagonal two-tone stripe placeholder** (pastel blue / white) with a small `[설명]`-style label — never a plain gray box, never a generated image.
- **Transparency / blur**: none. This era predates backdrop blur; everything is opaque flat color.
- **Corner radius**: 0 everywhere. Rounded corners are an anti-pattern here.
- **Splash-only mood shift**: the 대문 (entry gate) page is the one place that breaks from the pastel/white system — dark navy background with a neon-blue glow, evoking a "starry night" login gate before the bright site behind it.

## Iconography

- **No icon font, no SVG icon set, no stock/emoji icons** — the source brief explicitly calls out stock icon packs as an anti-pattern (they were hard to get in 2002).
- Instead, the system leans on **Unicode dingbats and symbols already used in the source copy**: `☆ ♡ ♪ ✿ ▣ ◈ ▶ ✦ ˚ 。゚`. These are typed as plain text characters inline with copy, not rendered as icon components.
- The one recurring "icon-like" element is the **45°-stripe image placeholder** (see Visual Foundations) standing in for any real photo/graphic.
- **No logo exists in the source material** — there is no brand mark to recreate. Every place a logo would go (banner, splash) uses the striped placeholder box or the plain-type wordmark instead. If you have a real logo for your persona, drop it into `assets/` and swap it into `Banner`/`EnterGate`.

## Fonts — substitution flagged

굴림(Gulim), 돋움(Dotum), 궁서(Gungsuh), and Comic Sans MS are Windows-bundled system fonts, not distributable web fonts — no font files were available in the source repo. Tokens (`--font-body`, `--font-ui-mono`, `--font-heading`, `--font-logo`) still name these fonts first so they render correctly on any Windows machine that has them; `tokens/fonts.css` loads **Nanum Gothic, Nanum Myeongjo, and Comic Neue from Google Fonts** as the closest free substitutes for browsers without the originals. **If you have access to the real font files, please add them** — real Gulim/Dotum/Gungsuh will look noticeably more period-accurate than the substitutes.

## Index

- `styles.css` — root stylesheet, imports everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (custom properties), `fonts.css` (Google Fonts import + font stack tokens).
- `components/` — 16 React primitives grouped by concern:
  - `core/` — `Frame`, `Banner`, `Marquee`, `NewBadge`
  - `nav/` — `SidebarMenu`, `CategoryTabs`, `Pagination`
  - `widgets/` — `LCDCounter`, `FooterPlayer`, `EffectSettingsPanel`, `EnterGate`
  - `board/` — `BoardList`, `PostDetail`
  - `grid/` — `PhotoGrid`, `VideoGrid`, `ProjectGrid`
- `ui_kits/personal-homepage/` — `index.html`, an interactive click-through recreation covering splash gate, home, profile, notice, board (with categories), photo album, video grid + modal, projects, desktop + mobile layouts, and the BGM/effects footer.
- `guidelines/` — 11 foundation specimen cards (Colors ×4, Type ×3, Spacing ×2, Brand ×2) visible in the Design System tab.
- `References/SkyBackground/` — the original Pinterest moodboard screenshots used for direction (not shippable assets).
- `SKILL.md` — portable skill file for using this system in Claude Code.

## Intentional additions

- `NewBadge` — the source repeats the `[N]` marker constantly but never names it as a component; broken out here since every list/grid component needs it.
- `EffectSettingsPanel` and `EnterGate` — named directly from the brief's explicit "화면효과 설정" and "대문" requirements, not invented.

## Caveats / ask

- **No real fonts, no real logo, no real photos** — everything visual beyond color/layout is a placeholder or a Google Fonts substitute. This is a genre recreation, not a specific brand.
- The UI kit uses a generic "OOO" placeholder persona so it stays reusable — swap in real content per use.
- **Please help iterate**: if you have the actual Gulim/Dotum/Gungsuh font files, a real logo/photos, or want the system built around one of the *other* reference moods in the repo (DarkGamer, Girlish, WhiteBusiness, AnimeFanpage, Gray, FantasyGamer), tell me and I'll fold it in.
