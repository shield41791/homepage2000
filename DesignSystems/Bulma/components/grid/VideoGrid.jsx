import React from 'react';

export function VideoGrid({ videos, columns = 3 }) {
  return (
    <div style={{ border: '2px solid var(--color-frame-border-outer)', padding: 10 }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns},1fr)`, gap: 10 }}>
        {videos.map((v, i) => (
          <div key={i} onClick={v.onClick} style={{ border: '1px solid var(--blue-600)', padding: 3, background: 'var(--color-surface)', cursor: 'pointer' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100%', height: 110, background: v.thumb ? `url(${v.thumb}) center/cover` : 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 8px,var(--color-placeholder-stripe-b) 8px,var(--color-placeholder-stripe-b) 16px)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-surface)', fontSize: 30, textShadow: '0 0 6px #000' }}>▶</div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-frame-header-text)', padding: '4px 2px 0' }}>{v.title} {v.isNew && <span style={{ color: 'var(--color-new-badge)', fontSize: 9 }}>[N]</span>}</div>
            <div style={{ fontSize: 10, color: 'var(--gray-500)', padding: '0 2px' }}>{v.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
