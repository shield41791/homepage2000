import React from 'react';

export function LCDCounter({ today, total }) {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ width: '100%', fontFamily: 'var(--font-ui-mono)', fontSize: 11, border: '2px solid var(--green-600)' }}>
      <tbody>
        <tr>
          <td style={{ background: 'var(--green-100)', color: 'var(--color-board-accent-text)', padding: '2px 5px' }}>TODAY</td>
          <td style={{ background: 'var(--color-lcd-bg)', color: 'var(--color-lcd-fg)', textAlign: 'right', padding: '2px 5px', letterSpacing: 1 }}>{today}</td>
        </tr>
        <tr>
          <td style={{ background: 'var(--green-100)', color: 'var(--color-board-accent-text)', padding: '2px 5px', borderTop: '1px solid var(--green-400)' }}>TOTAL</td>
          <td style={{ background: 'var(--color-lcd-bg)', color: 'var(--color-lcd-fg)', textAlign: 'right', padding: '2px 5px', letterSpacing: 1, borderTop: '1px solid #333' }}>{total}</td>
        </tr>
      </tbody>
    </table>
  );
}
