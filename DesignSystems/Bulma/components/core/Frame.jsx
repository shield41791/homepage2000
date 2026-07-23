import React from 'react';

export function Frame({ header, headerRight, accent = 'blue', double = false, padded = true, children, style }) {
  const outer = accent === 'green' ? 'var(--color-board-header-bg)' : 'var(--color-frame-border-outer)';
  const inner = accent === 'green' ? 'var(--green-400)' : 'var(--color-frame-border-inner)';
  const wrap = double
    ? { border: '3px double ' + outer, padding: '2px', background: 'var(--color-surface)' }
    : { border: '2px solid ' + outer, padding: '1px', background: 'var(--color-surface)' };
  return (
    <div style={{ ...wrap, ...style }}>
      <div style={{ border: '1px solid ' + inner, background: 'var(--color-surface)' }}>
        {header && (
          <div style={{ background: 'var(--color-frame-header-bg)', color: 'var(--color-frame-header-text)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-body-lg)', padding: '3px 8px', borderBottom: '1px dotted var(--blue-600)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{header}</span>
            {headerRight && <span style={{ fontWeight: 400, fontSize: 'var(--text-body)', color: 'var(--color-board-accent-text)' }}>{headerRight}</span>}
          </div>
        )}
        <div style={padded ? { padding: '10px 12px' } : undefined}>{children}</div>
      </div>
    </div>
  );
}
