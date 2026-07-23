import React from 'react';

export function PostDetail({ title, author, date, views, content, onBack }) {
  return (
    <div>
      {onBack && <div onClick={onBack} style={{ fontSize: 12, color: 'var(--color-link)', cursor: 'pointer', marginBottom: 8 }}>◀ [ 목록으로 ]</div>}
      <table cellPadding="0" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, border: '1px solid var(--green-500)' }}>
        <tbody>
          <tr style={{ background: 'var(--green-200)' }}>
            <td style={{ padding: '6px 10px', color: 'var(--color-text-body)', fontWeight: 700, borderBottom: '1px solid var(--green-400)' }}>{title}</td>
          </tr>
          <tr style={{ background: 'var(--color-surface-tint)' }}>
            <td style={{ padding: '3px 10px', color: 'var(--gray-500)', fontSize: 11, borderBottom: '1px solid var(--green-400)' }}>글쓴이: {author} &nbsp;|&nbsp; {date} &nbsp;|&nbsp; 조회 {views}</td>
          </tr>
          <tr>
            <td style={{ padding: '16px 12px', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 'var(--line-body)', whiteSpace: 'pre-line', color: 'var(--color-text-body)', minHeight: 120 }}>{content}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
