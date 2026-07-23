import React from 'react';

export function ProjectGrid({ projects, columns = 4 }) {
  return (
    <div style={{ border: '2px solid var(--color-frame-border-outer)', padding: 10 }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns},1fr)`, gap: 10 }}>
        {projects.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid var(--blue-600)', padding: 3, background: 'var(--color-surface)', cursor: 'pointer' }}>
              <div style={{ width: '100%', height: 100, background: p.thumb ? `url(${p.thumb}) center/cover` : 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 8px,var(--color-placeholder-stripe-b) 8px,var(--color-placeholder-stripe-b) 16px)' }} />
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-frame-header-text)', padding: '5px 2px 0' }}>◈ {p.title} {p.isNew && <span style={{ color: 'var(--color-new-badge)', fontSize: 9 }}>[N]</span>}</div>
              <div style={{ fontSize: 10, color: 'var(--gray-600)', padding: '2px 2px 4px' }}>{p.tagline}</div>
              <div style={{ fontSize: 10, color: 'var(--color-board-accent-text)', padding: '0 2px 2px' }}>↗ {p.host}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
