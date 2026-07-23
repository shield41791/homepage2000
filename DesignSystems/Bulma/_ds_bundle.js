/* @ds-bundle: {"format":4,"namespace":"Homepy2000DesignSystem_793dff","components":[{"name":"BoardList","sourcePath":"components/board/BoardList.jsx"},{"name":"PostDetail","sourcePath":"components/board/PostDetail.jsx"},{"name":"Banner","sourcePath":"components/core/Banner.jsx"},{"name":"Frame","sourcePath":"components/core/Frame.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"NewBadge","sourcePath":"components/core/NewBadge.jsx"},{"name":"PhotoGrid","sourcePath":"components/grid/PhotoGrid.jsx"},{"name":"ProjectGrid","sourcePath":"components/grid/ProjectGrid.jsx"},{"name":"VideoGrid","sourcePath":"components/grid/VideoGrid.jsx"},{"name":"CategoryTabs","sourcePath":"components/nav/CategoryTabs.jsx"},{"name":"Pagination","sourcePath":"components/nav/Pagination.jsx"},{"name":"SidebarMenu","sourcePath":"components/nav/SidebarMenu.jsx"},{"name":"EffectSettingsPanel","sourcePath":"components/widgets/EffectSettingsPanel.jsx"},{"name":"EnterGate","sourcePath":"components/widgets/EnterGate.jsx"},{"name":"FooterPlayer","sourcePath":"components/widgets/FooterPlayer.jsx"},{"name":"LCDCounter","sourcePath":"components/widgets/LCDCounter.jsx"}],"sourceHashes":{"components/board/BoardList.jsx":"41f4060f9705","components/board/PostDetail.jsx":"9619b6cecd75","components/core/Banner.jsx":"af74129fde84","components/core/Frame.jsx":"ada8960afbd8","components/core/Marquee.jsx":"8eed2cef2dc9","components/core/NewBadge.jsx":"ababafab72dd","components/grid/PhotoGrid.jsx":"2f5b7a291bb0","components/grid/ProjectGrid.jsx":"58c6ef51fcc4","components/grid/VideoGrid.jsx":"2a2cdf50e177","components/nav/CategoryTabs.jsx":"153539475329","components/nav/Pagination.jsx":"ae9bdec72124","components/nav/SidebarMenu.jsx":"ee7976b93f70","components/widgets/EffectSettingsPanel.jsx":"9565ac7c1e37","components/widgets/EnterGate.jsx":"19523dce8dee","components/widgets/FooterPlayer.jsx":"6f32cdee76b8","components/widgets/LCDCounter.jsx":"bdbe4aa50251"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Homepy2000DesignSystem_793dff = window.Homepy2000DesignSystem_793dff || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/board/BoardList.jsx
try { (() => {
function BoardList({
  posts,
  showNo = true,
  showName = true,
  showHit = true,
  total,
  page = 1,
  totalPages = 1
}) {
  return /*#__PURE__*/React.createElement("div", null, total != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-board-accent-text)',
      marginBottom: 3,
      fontFamily: 'var(--font-ui-mono)'
    }
  }, "\u273F\u273F\u273F\u273F\u273F \xA0\xA0TOTAL : ", total, " \xA0 PAGE : ", page, "/", totalPages), /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 12,
      borderTop: '2px solid var(--color-board-header-bg)',
      borderBottom: '2px solid var(--color-board-header-bg)'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--color-board-header-bg)',
      color: 'var(--color-board-header-text)',
      fontFamily: 'var(--font-ui-mono)',
      fontWeight: 700
    }
  }, showNo && /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '5px 6px',
      width: 34,
      textAlign: 'center'
    }
  }, "NO"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '5px 10px'
    }
  }, "SUBJECT"), showName && /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '5px 6px',
      width: 80,
      textAlign: 'center'
    }
  }, "NAME"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '5px 6px',
      width: 80,
      textAlign: 'center'
    }
  }, "DATE"), showHit && /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '5px 6px',
      width: 40,
      textAlign: 'center'
    }
  }, "HIT")), posts.map((p, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    onClick: p.onClick,
    style: {
      borderBottom: '1px solid var(--color-board-row-border)',
      cursor: p.onClick ? 'pointer' : 'default'
    }
  }, showNo && /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '5px 6px',
      textAlign: 'center',
      color: 'var(--gray-400)'
    }
  }, p.no), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '5px 10px',
      color: 'var(--color-text-body)'
    }
  }, p.title, " ", p.isNew && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-new-badge)',
      fontSize: 10,
      fontWeight: 700
    }
  }, "[N]")), showName && /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '5px 6px',
      textAlign: 'center',
      color: 'var(--color-board-accent-text)'
    }
  }, p.author), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '5px 6px',
      textAlign: 'center',
      color: 'var(--gray-500)'
    }
  }, p.date), showHit && /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '5px 6px',
      textAlign: 'center',
      color: 'var(--gray-500)'
    }
  }, p.views))))));
}
Object.assign(__ds_scope, { BoardList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/board/BoardList.jsx", error: String((e && e.message) || e) }); }

// components/board/PostDetail.jsx
try { (() => {
function PostDetail({
  title,
  author,
  date,
  views,
  content,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", null, onBack && /*#__PURE__*/React.createElement("div", {
    onClick: onBack,
    style: {
      fontSize: 12,
      color: 'var(--color-link)',
      cursor: 'pointer',
      marginBottom: 8
    }
  }, "\u25C0 [ \uBAA9\uB85D\uC73C\uB85C ]"), /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 12,
      border: '1px solid var(--green-500)'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--green-200)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '6px 10px',
      color: 'var(--color-text-body)',
      fontWeight: 700,
      borderBottom: '1px solid var(--green-400)'
    }
  }, title)), /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--color-surface-tint)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '3px 10px',
      color: 'var(--gray-500)',
      fontSize: 11,
      borderBottom: '1px solid var(--green-400)'
    }
  }, "\uAE00\uC4F4\uC774: ", author, " \xA0|\xA0 ", date, " \xA0|\xA0 \uC870\uD68C ", views)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '16px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: 'var(--line-body)',
      whiteSpace: 'pre-line',
      color: 'var(--color-text-body)',
      minHeight: 120
    }
  }, content)))));
}
Object.assign(__ds_scope, { PostDetail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/board/PostDetail.jsx", error: String((e && e.message) || e) }); }

// components/core/Banner.jsx
try { (() => {
function Banner({
  title = "OOO's HomePage",
  domain = 'yourname.wo.to',
  onLogoClick,
  mobile = false
}) {
  const logoSize = mobile ? 34 : 58;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg,var(--color-banner-grad-top),var(--color-banner-grad-bottom))',
      padding: mobile ? '9px 12px' : '14px 30px 8px',
      borderBottom: '2px solid var(--color-banner-border)',
      display: 'flex',
      alignItems: mobile ? 'center' : 'flex-end',
      gap: mobile ? 8 : 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onLogoClick,
    style: {
      border: '2px solid var(--blue-800)',
      padding: 1,
      background: 'var(--color-surface)',
      cursor: onLogoClick ? 'pointer' : 'default',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: logoSize,
      height: logoSize,
      border: '1px solid var(--blue-400)',
      background: 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 8px,var(--color-placeholder-stripe-b) 8px,var(--color-placeholder-stripe-b) 16px)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onLogoClick,
    style: {
      fontFamily: 'var(--font-logo)',
      fontWeight: 700,
      fontSize: mobile ? 22 : 'var(--text-logo)',
      color: '#7ab8f0',
      textShadow: mobile ? '1px 1px 0 #2f6699' : '2px 2px 0 #2f6699',
      letterSpacing: mobile ? 0 : 2,
      cursor: onLogoClick ? 'pointer' : 'default'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: mobile ? 9 : 'var(--text-body)',
      color: '#3d6ea6',
      paddingBottom: mobile ? 0 : 8
    }
  }, domain, " \u2726\u02DA")));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Banner.jsx", error: String((e && e.message) || e) }); }

// components/core/Frame.jsx
try { (() => {
function Frame({
  header,
  headerRight,
  accent = 'blue',
  double = false,
  padded = true,
  children,
  style
}) {
  const outer = accent === 'green' ? 'var(--color-board-header-bg)' : 'var(--color-frame-border-outer)';
  const inner = accent === 'green' ? 'var(--green-400)' : 'var(--color-frame-border-inner)';
  const wrap = double ? {
    border: '3px double ' + outer,
    padding: '2px',
    background: 'var(--color-surface)'
  } : {
    border: '2px solid ' + outer,
    padding: '1px',
    background: 'var(--color-surface)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid ' + inner,
      background: 'var(--color-surface)'
    }
  }, header && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-frame-header-bg)',
      color: 'var(--color-frame-header-text)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-body-lg)',
      padding: '3px 8px',
      borderBottom: '1px dotted var(--blue-600)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, header), headerRight && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 'var(--text-body)',
      color: 'var(--color-board-accent-text)'
    }
  }, headerRight)), /*#__PURE__*/React.createElement("div", {
    style: padded ? {
      padding: '10px 12px'
    } : undefined
  }, children)));
}
Object.assign(__ds_scope, { Frame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Frame.jsx", error: String((e && e.message) || e) }); }

// components/core/Marquee.jsx
try { (() => {
function Marquee({
  text,
  dotted = true,
  speed = 15
}) {
  return /*#__PURE__*/React.createElement("div", null, dotted && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      color: 'var(--blue-600)',
      fontSize: 9,
      letterSpacing: 4,
      padding: '2px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      borderBottom: '1px solid var(--blue-300)'
    }
  }, '•∘'.repeat(40)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#2b0f2b',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-heading)',
      color: 'var(--color-lcd-fg)',
      fontSize: 13,
      animation: `dc-marquee ${speed}s linear infinite`
    }
  }, text)), /*#__PURE__*/React.createElement("style", null, '@keyframes dc-marquee{from{transform:translateX(110%)}to{transform:translateX(-110%)}}'));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/core/NewBadge.jsx
try { (() => {
function NewBadge({
  show = true,
  label = 'N'
}) {
  if (!show) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-new-badge)',
      fontSize: 9,
      fontWeight: 700
    }
  }, "[", label, "]");
}
Object.assign(__ds_scope, { NewBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NewBadge.jsx", error: String((e && e.message) || e) }); }

// components/grid/PhotoGrid.jsx
try { (() => {
function PhotoGrid({
  photos,
  columns = 4
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--color-frame-border-outer)',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns},1fr)`,
      gap: 10
    }
  }, photos.map((ph, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: ph.onClick,
    style: {
      border: '1px solid var(--blue-600)',
      padding: 3,
      background: 'var(--color-surface)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 88,
      background: ph.thumb ? `url(${ph.thumb}) center/cover` : 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 8px,var(--color-placeholder-stripe-b) 8px,var(--color-placeholder-stripe-b) 16px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--gray-700)',
      textAlign: 'center',
      paddingTop: 3,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, ph.title, " ", ph.isNew && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-new-badge)',
      fontWeight: 700
    }
  }, "[N]"))))));
}
Object.assign(__ds_scope, { PhotoGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/grid/PhotoGrid.jsx", error: String((e && e.message) || e) }); }

// components/grid/ProjectGrid.jsx
try { (() => {
function ProjectGrid({
  projects,
  columns = 4
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--color-frame-border-outer)',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns},1fr)`,
      gap: 10
    }
  }, projects.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: p.url,
    target: "_blank",
    rel: "noreferrer",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--blue-600)',
      padding: 3,
      background: 'var(--color-surface)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 100,
      background: p.thumb ? `url(${p.thumb}) center/cover` : 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 8px,var(--color-placeholder-stripe-b) 8px,var(--color-placeholder-stripe-b) 16px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--color-frame-header-text)',
      padding: '5px 2px 0'
    }
  }, "\u25C8 ", p.title, " ", p.isNew && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-new-badge)',
      fontSize: 9
    }
  }, "[N]")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--gray-600)',
      padding: '2px 2px 4px'
    }
  }, p.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--color-board-accent-text)',
      padding: '0 2px 2px'
    }
  }, "\u2197 ", p.host))))));
}
Object.assign(__ds_scope, { ProjectGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/grid/ProjectGrid.jsx", error: String((e && e.message) || e) }); }

// components/grid/VideoGrid.jsx
try { (() => {
function VideoGrid({
  videos,
  columns = 3
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--color-frame-border-outer)',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns},1fr)`,
      gap: 10
    }
  }, videos.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: v.onClick,
    style: {
      border: '1px solid var(--blue-600)',
      padding: 3,
      background: 'var(--color-surface)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 110,
      background: v.thumb ? `url(${v.thumb}) center/cover` : 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 8px,var(--color-placeholder-stripe-b) 8px,var(--color-placeholder-stripe-b) 16px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-surface)',
      fontSize: 30,
      textShadow: '0 0 6px #000'
    }
  }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--color-frame-header-text)',
      padding: '4px 2px 0'
    }
  }, v.title, " ", v.isNew && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-new-badge)',
      fontSize: 9
    }
  }, "[N]")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--gray-500)',
      padding: '0 2px'
    }
  }, v.desc)))));
}
Object.assign(__ds_scope, { VideoGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/grid/VideoGrid.jsx", error: String((e && e.message) || e) }); }

// components/nav/CategoryTabs.jsx
try { (() => {
function CategoryTabs({
  tabs,
  size = 'md'
}) {
  const pad = size === 'sm' ? '3px 10px' : '4px 12px';
  const fs = size === 'sm' ? 11 : 12;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      flexWrap: 'wrap'
    }
  }, tabs.map((t, i) => t.active ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--color-board-header-bg)',
      color: 'var(--color-board-header-text)',
      padding: pad,
      fontSize: fs,
      fontWeight: 700,
      fontFamily: 'var(--font-heading)'
    }
  }, t.label) : /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: t.onClick,
    style: {
      background: 'var(--green-200)',
      color: 'var(--color-board-accent-text)',
      padding: pad,
      fontSize: fs,
      border: '1px solid var(--green-500)',
      cursor: 'pointer',
      fontFamily: 'var(--font-heading)'
    }
  }, t.label, t.isNew && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-new-badge)',
      fontSize: 9,
      fontWeight: 700
    }
  }, " [N]"))));
}
Object.assign(__ds_scope, { CategoryTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/CategoryTabs.jsx", error: String((e && e.message) || e) }); }

// components/nav/Pagination.jsx
try { (() => {
function Pagination({
  page,
  total,
  onChange
}) {
  const pages = Array.from({
    length: total
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 12,
      color: 'var(--color-board-accent-text)'
    }
  }, pages.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    onClick: () => onChange && onChange(p),
    style: {
      cursor: onChange ? 'pointer' : 'default',
      margin: '0 2px'
    }
  }, "[", p === page ? /*#__PURE__*/React.createElement("b", null, p) : p, "]")));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/nav/SidebarMenu.jsx
try { (() => {
function SidebarMenu({
  groups,
  profileLabel,
  profileImg
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 172
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--color-frame-border-outer)',
      padding: 1,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--color-frame-border-inner)',
      padding: 6,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 64,
      background: profileImg ? undefined : 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 8px,var(--color-placeholder-stripe-b) 8px,var(--color-placeholder-stripe-b) 16px)',
      border: '1px solid var(--blue-600)',
      marginBottom: 4,
      fontSize: 9,
      color: 'var(--blue-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !profileImg && '[미니홈 사진]'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      color: 'var(--color-frame-header-text)',
      fontWeight: 700
    }
  }, profileLabel))), groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    style: {
      border: '2px solid var(--color-frame-border-outer)',
      padding: 1,
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--color-frame-border-inner)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-frame-header-bg)',
      color: 'var(--color-frame-header-text)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 13,
      textAlign: 'center',
      padding: '3px 0',
      borderBottom: '1px dotted var(--blue-600)'
    }
  }, g.title), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 8px 8px'
    }
  }, g.items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: item.onClick,
    style: item.active ? {
      textAlign: 'right',
      padding: '2px 0'
    } : {
      textAlign: 'right',
      padding: '2px 2px',
      fontSize: 12,
      color: 'var(--color-link)',
      cursor: 'pointer'
    }
  }, item.active ? /*#__PURE__*/React.createElement("span", {
    style: {
      border: '1px solid #5f8fff',
      background: 'var(--blue-100)',
      color: 'var(--blue-900)',
      fontSize: 12,
      fontWeight: 700,
      padding: '0 4px'
    }
  }, item.label) : item.label, item.isNew && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-new-badge)',
      fontSize: 9,
      fontWeight: 700
    }
  }, " [N]"))))))));
}
Object.assign(__ds_scope, { SidebarMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/SidebarMenu.jsx", error: String((e && e.message) || e) }); }

// components/widgets/EffectSettingsPanel.jsx
try { (() => {
function EffectSettingsPanel({
  effect,
  onEffectChange,
  reduceMotion,
  onToggleReduceMotion,
  onClose,
  options = ['snow', 'sakura', 'leaves', 'rain', 'none']
}) {
  const labels = {
    snow: '눈',
    sakura: '벚꽃',
    leaves: '낙엽',
    rain: '비',
    none: '없음'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--blue-50)',
      borderTop: '1px solid var(--blue-400)',
      padding: '8px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-ui-mono)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-frame-header-text)',
      fontWeight: 700
    }
  }, "\uD654\uBA74\uD6A8\uACFC :"), options.map(o => /*#__PURE__*/React.createElement("label", {
    key: o,
    style: {
      display: 'flex',
      gap: 3,
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: effect === o,
    onChange: () => onEffectChange && onEffectChange(o)
  }), labels[o] || o)), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 3,
      alignItems: 'center',
      cursor: 'pointer',
      borderLeft: '1px solid var(--blue-400)',
      paddingLeft: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: reduceMotion,
    onChange: onToggleReduceMotion
  }), "\uD6A8\uACFC \uC904\uC774\uAE30"), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      marginLeft: 'auto',
      color: 'var(--color-link)',
      cursor: 'pointer'
    }
  }, "\uB2EB\uAE30 \u2715"));
}
Object.assign(__ds_scope, { EffectSettingsPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/widgets/EffectSettingsPanel.jsx", error: String((e && e.message) || e) }); }

// components/widgets/EnterGate.jsx
try { (() => {
function EnterGate({
  title = '。。。의 홈페이지',
  subtitle,
  onEnter,
  today,
  total,
  since,
  copyright
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--color-surface)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 22,
      textAlign: 'center',
      padding: '40px 20px',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--blue-600)',
      padding: 10,
      background: 'var(--color-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      height: 240,
      border: '1px solid var(--blue-400)',
      background: 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 10px,var(--color-placeholder-stripe-b) 10px,var(--color-placeholder-stripe-b) 20px)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 28,
      fontWeight: 700,
      color: '#5a9fd6',
      letterSpacing: 6
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui-mono)',
      fontSize: 13,
      color: '#789bb5'
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    onClick: onEnter,
    style: {
      fontFamily: 'var(--font-ui-mono)',
      fontSize: 14,
      color: 'var(--color-link)',
      cursor: 'pointer',
      border: '1px solid var(--blue-600)',
      padding: '5px 20px',
      background: 'var(--blue-50)',
      animation: 'dc-bob 1.6s ease-in-out infinite'
    }
  }, "\u261E enter \uB4E4\uC5B4\uAC00\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui-mono)',
      color: '#8fa9c4',
      fontSize: 11
    }
  }, "TODAY ", today, " \xA0/\xA0 TOTAL ", total, " \xA0\xA0 since ", since), copyright && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui-mono)',
      color: '#9abae0',
      fontSize: 11,
      position: 'absolute',
      bottom: 30
    }
  }, copyright), /*#__PURE__*/React.createElement("style", null, '@keyframes dc-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}'));
}
Object.assign(__ds_scope, { EnterGate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/widgets/EnterGate.jsx", error: String((e && e.message) || e) }); }

// components/widgets/FooterPlayer.jsx
try { (() => {
function FooterPlayer({
  trackLabel,
  playing,
  muted,
  onTogglePlay,
  onToggleMute,
  onToggleSettings,
  copyright,
  mobile = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '2px solid var(--color-banner-border)',
      background: 'var(--color-surface)',
      padding: mobile ? '8px 12px' : '8px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: mobile ? 8 : 12,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-ui-mono)',
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: mobile ? 16 : 18,
      height: mobile ? 16 : 18,
      borderRadius: '50%',
      background: 'radial-gradient(circle,#666,#111)',
      flex: 'none',
      animation: playing ? 'dc-spin 3s linear infinite' : 'none'
    }
  }), !mobile && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-frame-header-text)',
      fontWeight: 700
    }
  }, "BGM Player"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: mobile ? undefined : 230,
      flex: mobile ? 1 : 'none',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      color: 'var(--color-board-accent-text)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      animation: 'dc-marquee-2 10s linear infinite'
    }
  }, "\u266A now playing : ", trackLabel, " \u266A")), /*#__PURE__*/React.createElement("span", {
    onClick: onTogglePlay,
    style: {
      cursor: 'pointer',
      color: 'var(--color-link)'
    }
  }, playing ? '❚❚' : '▶', !mobile && ' 재생'), /*#__PURE__*/React.createElement("span", {
    onClick: onToggleMute,
    style: {
      cursor: 'pointer',
      color: 'var(--color-link)'
    }
  }, muted ? '🔇' : '🔊', !mobile && ' 소리'), !mobile && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-200)'
    }
  }, "|"), !mobile && /*#__PURE__*/React.createElement("span", {
    onClick: onToggleSettings,
    style: {
      cursor: 'pointer',
      color: 'var(--color-link)'
    }
  }, "[\uD654\uBA74\uD6A8\uACFC \uC124\uC815]"), !mobile && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      color: 'var(--gray-300)'
    }
  }, copyright), /*#__PURE__*/React.createElement("style", null, '@keyframes dc-spin{to{transform:rotate(360deg)}}@keyframes dc-marquee-2{from{transform:translateX(100%)}to{transform:translateX(-100%)}}'));
}
Object.assign(__ds_scope, { FooterPlayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/widgets/FooterPlayer.jsx", error: String((e && e.message) || e) }); }

// components/widgets/LCDCounter.jsx
try { (() => {
function LCDCounter({
  today,
  total
}) {
  return /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    style: {
      width: '100%',
      fontFamily: 'var(--font-ui-mono)',
      fontSize: 11,
      border: '2px solid var(--green-600)'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      background: 'var(--green-100)',
      color: 'var(--color-board-accent-text)',
      padding: '2px 5px'
    }
  }, "TODAY"), /*#__PURE__*/React.createElement("td", {
    style: {
      background: 'var(--color-lcd-bg)',
      color: 'var(--color-lcd-fg)',
      textAlign: 'right',
      padding: '2px 5px',
      letterSpacing: 1
    }
  }, today)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      background: 'var(--green-100)',
      color: 'var(--color-board-accent-text)',
      padding: '2px 5px',
      borderTop: '1px solid var(--green-400)'
    }
  }, "TOTAL"), /*#__PURE__*/React.createElement("td", {
    style: {
      background: 'var(--color-lcd-bg)',
      color: 'var(--color-lcd-fg)',
      textAlign: 'right',
      padding: '2px 5px',
      letterSpacing: 1,
      borderTop: '1px solid #333'
    }
  }, total))));
}
Object.assign(__ds_scope, { LCDCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/widgets/LCDCounter.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BoardList = __ds_scope.BoardList;

__ds_ns.PostDetail = __ds_scope.PostDetail;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Frame = __ds_scope.Frame;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.NewBadge = __ds_scope.NewBadge;

__ds_ns.PhotoGrid = __ds_scope.PhotoGrid;

__ds_ns.ProjectGrid = __ds_scope.ProjectGrid;

__ds_ns.VideoGrid = __ds_scope.VideoGrid;

__ds_ns.CategoryTabs = __ds_scope.CategoryTabs;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SidebarMenu = __ds_scope.SidebarMenu;

__ds_ns.EffectSettingsPanel = __ds_scope.EffectSettingsPanel;

__ds_ns.EnterGate = __ds_scope.EnterGate;

__ds_ns.FooterPlayer = __ds_scope.FooterPlayer;

__ds_ns.LCDCounter = __ds_scope.LCDCounter;

})();
