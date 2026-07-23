import React from 'react';

export function NewBadge({ show = true, label = 'N' }) {
  if (!show) return null;
  return <span style={{ color: 'var(--color-new-badge)', fontSize: 9, fontWeight: 700 }}>[{label}]</span>;
}
