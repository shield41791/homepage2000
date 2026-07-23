import React from 'react';

export function CategoryTabs({ tabs, size = 'md' }) {
  const pad = size === 'sm' ? '3px 10px' : '4px 12px';
  const fs = size === 'sm' ? 11 : 12;
  return (
    <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
      {tabs.map((t, i) => t.active ? (
        <div key={i} style={{ background: 'var(--color-board-header-bg)', color: 'var(--color-board-header-text)', padding: pad, fontSize: fs, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{t.label}</div>
      ) : (
        <div key={i} onClick={t.onClick} style={{ background: 'var(--green-200)', color: 'var(--color-board-accent-text)', padding: pad, fontSize: fs, border: '1px solid var(--green-500)', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}>
          {t.label}{t.isNew && <span style={{ color: 'var(--color-new-badge)', fontSize: 9, fontWeight: 700 }}> [N]</span>}
        </div>
      ))}
    </div>
  );
}
