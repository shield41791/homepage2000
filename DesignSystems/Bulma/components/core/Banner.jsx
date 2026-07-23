import React from 'react';

export function Banner({ title = "OOO's HomePage", domain = 'yourname.wo.to', onLogoClick, mobile = false }) {
  const logoSize = mobile ? 34 : 58;
  return (
    <div style={{ background: 'linear-gradient(180deg,var(--color-banner-grad-top),var(--color-banner-grad-bottom))', padding: mobile ? '9px 12px' : '14px 30px 8px', borderBottom: '2px solid var(--color-banner-border)', display: 'flex', alignItems: mobile ? 'center' : 'flex-end', gap: mobile ? 8 : 14 }}>
      <div onClick={onLogoClick} style={{ border: '2px solid var(--blue-800)', padding: 1, background: 'var(--color-surface)', cursor: onLogoClick ? 'pointer' : 'default', flex: 'none' }}>
        <div style={{ width: logoSize, height: logoSize, border: '1px solid var(--blue-400)', background: 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 8px,var(--color-placeholder-stripe-b) 8px,var(--color-placeholder-stripe-b) 16px)' }} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div onClick={onLogoClick} style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, fontSize: mobile ? 22 : 'var(--text-logo)', color: '#7ab8f0', textShadow: mobile ? '1px 1px 0 #2f6699' : '2px 2px 0 #2f6699', letterSpacing: mobile ? 0 : 2, cursor: onLogoClick ? 'pointer' : 'default' }}>{title}</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: mobile ? 9 : 'var(--text-body)', color: '#3d6ea6', paddingBottom: mobile ? 0 : 8 }}>{domain} ✦˚</div>
      </div>
    </div>
  );
}
