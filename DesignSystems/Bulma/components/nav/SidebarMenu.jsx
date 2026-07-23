import React from 'react';

export function SidebarMenu({ groups, profileLabel, profileImg }) {
  return (
    <div style={{ width: 172 }}>
      <div style={{ border: '2px solid var(--color-frame-border-outer)', padding: 1, marginBottom: 12 }}>
        <div style={{ border: '1px solid var(--color-frame-border-inner)', padding: 6, textAlign: 'center' }}>
          <div style={{ width: '100%', height: 64, background: profileImg ? undefined : 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 8px,var(--color-placeholder-stripe-b) 8px,var(--color-placeholder-stripe-b) 16px)', border: '1px solid var(--blue-600)', marginBottom: 4, fontSize: 9, color: 'var(--blue-900)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{!profileImg && '[미니홈 사진]'}</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: 12, color: 'var(--color-frame-header-text)', fontWeight: 700 }}>{profileLabel}</div>
        </div>
      </div>
      {groups.map((g, gi) => (
        <div key={gi} style={{ border: '2px solid var(--color-frame-border-outer)', padding: 1, marginBottom: 11 }}>
          <div style={{ border: '1px solid var(--color-frame-border-inner)' }}>
            <div style={{ background: 'var(--color-frame-header-bg)', color: 'var(--color-frame-header-text)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, textAlign: 'center', padding: '3px 0', borderBottom: '1px dotted var(--blue-600)' }}>{g.title}</div>
            <div style={{ padding: '6px 8px 8px' }}>
              {g.items.map((item, i) => (
                <div key={i} onClick={item.onClick} style={item.active
                  ? { textAlign: 'right', padding: '2px 0' }
                  : { textAlign: 'right', padding: '2px 2px', fontSize: 12, color: 'var(--color-link)', cursor: 'pointer' }}>
                  {item.active
                    ? <span style={{ border: '1px solid #5f8fff', background: 'var(--blue-100)', color: 'var(--blue-900)', fontSize: 12, fontWeight: 700, padding: '0 4px' }}>{item.label}</span>
                    : item.label}
                  {item.isNew && <span style={{ color: 'var(--color-new-badge)', fontSize: 9, fontWeight: 700 }}> [N]</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
