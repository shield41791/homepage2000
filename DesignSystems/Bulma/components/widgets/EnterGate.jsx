import React from 'react';

export function EnterGate({ title = '。。。의 홈페이지', subtitle, onEnter, today, total, since, copyright }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-surface)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22, textAlign: 'center', padding: '40px 20px', boxSizing: 'border-box', position: 'relative' }}>
      <div style={{ border: '2px solid var(--blue-600)', padding: 10, background: 'var(--color-surface)' }}>
        <div style={{ width: 300, height: 240, border: '1px solid var(--blue-400)', background: 'repeating-linear-gradient(45deg,var(--color-placeholder-stripe-a),var(--color-placeholder-stripe-a) 10px,var(--color-placeholder-stripe-b) 10px,var(--color-placeholder-stripe-b) 20px)' }} />
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 28, fontWeight: 700, color: '#5a9fd6', letterSpacing: 6 }}>{title}</div>
      {subtitle && <div style={{ fontFamily: 'var(--font-ui-mono)', fontSize: 13, color: '#789bb5' }}>{subtitle}</div>}
      <div onClick={onEnter} style={{ fontFamily: 'var(--font-ui-mono)', fontSize: 14, color: 'var(--color-link)', cursor: 'pointer', border: '1px solid var(--blue-600)', padding: '5px 20px', background: 'var(--blue-50)', animation: 'dc-bob 1.6s ease-in-out infinite' }}>☞ enter 들어가기</div>
      <div style={{ fontFamily: 'var(--font-ui-mono)', color: '#8fa9c4', fontSize: 11 }}>TODAY {today} &nbsp;/&nbsp; TOTAL {total} &nbsp;&nbsp; since {since}</div>
      {copyright && <div style={{ fontFamily: 'var(--font-ui-mono)', color: '#9abae0', fontSize: 11, position: 'absolute', bottom: 30 }}>{copyright}</div>}
      <style>{'@keyframes dc-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}'}</style>
    </div>
  );
}
