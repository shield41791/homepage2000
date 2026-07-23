import React from 'react';

export function Pagination({ page, total, onChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div style={{ textAlign: 'center', marginTop: 10, fontSize: 12, color: 'var(--color-board-accent-text)' }}>
      {pages.map(p => (
        <span key={p} onClick={() => onChange && onChange(p)} style={{ cursor: onChange ? 'pointer' : 'default', margin: '0 2px' }}>
          [{p === page ? <b>{p}</b> : p}]
        </span>
      ))}
    </div>
  );
}
