import React from 'react';

export function BoardList({ posts, showNo = true, showName = true, showHit = true, total, page = 1, totalPages = 1 }) {
  return (
    <div>
      {total != null && <div style={{ fontSize: 11, color: 'var(--color-board-accent-text)', marginBottom: 3, fontFamily: 'var(--font-ui-mono)' }}>✿✿✿✿✿ &nbsp;&nbsp;TOTAL : {total} &nbsp; PAGE : {page}/{totalPages}</div>}
      <table cellPadding="0" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, borderTop: '2px solid var(--color-board-header-bg)', borderBottom: '2px solid var(--color-board-header-bg)' }}>
        <tbody>
          <tr style={{ background: 'var(--color-board-header-bg)', color: 'var(--color-board-header-text)', fontFamily: 'var(--font-ui-mono)', fontWeight: 700 }}>
            {showNo && <td style={{ padding: '5px 6px', width: 34, textAlign: 'center' }}>NO</td>}
            <td style={{ padding: '5px 10px' }}>SUBJECT</td>
            {showName && <td style={{ padding: '5px 6px', width: 80, textAlign: 'center' }}>NAME</td>}
            <td style={{ padding: '5px 6px', width: 80, textAlign: 'center' }}>DATE</td>
            {showHit && <td style={{ padding: '5px 6px', width: 40, textAlign: 'center' }}>HIT</td>}
          </tr>
          {posts.map((p, i) => (
            <tr key={i} onClick={p.onClick} style={{ borderBottom: '1px solid var(--color-board-row-border)', cursor: p.onClick ? 'pointer' : 'default' }}>
              {showNo && <td style={{ padding: '5px 6px', textAlign: 'center', color: 'var(--gray-400)' }}>{p.no}</td>}
              <td style={{ padding: '5px 10px', color: 'var(--color-text-body)' }}>{p.title} {p.isNew && <span style={{ color: 'var(--color-new-badge)', fontSize: 10, fontWeight: 700 }}>[N]</span>}</td>
              {showName && <td style={{ padding: '5px 6px', textAlign: 'center', color: 'var(--color-board-accent-text)' }}>{p.author}</td>}
              <td style={{ padding: '5px 6px', textAlign: 'center', color: 'var(--gray-500)' }}>{p.date}</td>
              {showHit && <td style={{ padding: '5px 6px', textAlign: 'center', color: 'var(--gray-500)' }}>{p.views}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
