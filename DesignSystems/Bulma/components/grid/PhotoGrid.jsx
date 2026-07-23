import React from 'react';

export function PhotoGrid({ photos, columns = 4 }) {
  return (
    <div style={{ border: '2px solid var(--color-frame-border-outer)', padding: 10 }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns},1fr)`, gap: 10 }}>
        {photos.map((ph, i) => (
          <div key={i} onClick={ph.onClick} style={{ border: '1px solid var(--blue-600)', padding: 3, background: 'var(--color-surface)', cursor: 'pointer' }}>
            <div style={{ width: '100%', height: 88, background: ph.thumb ? `url(${ph.thumb}) center/cover` : 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 8px,var(--color-placeholder-stripe-b) 8px,var(--color-placeholder-stripe-b) 16px)' }} />
            <div style={{ fontSize: 10, color: 'var(--gray-700)', textAlign: 'center', paddingTop: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {ph.title} {ph.isNew && <span style={{ color: 'var(--color-new-badge)', fontWeight: 700 }}>[N]</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
