import React from 'react';

export function Marquee({ text, dotted = true, speed = 15 }) {
  return (
    <div>
      {dotted && <div style={{ background: 'var(--color-surface)', color: 'var(--blue-600)', fontSize: 9, letterSpacing: 4, padding: '2px 0', overflow: 'hidden', whiteSpace: 'nowrap', borderBottom: '1px solid var(--blue-300)' }}>{'•∘'.repeat(40)}</div>}
      <div style={{ background: '#2b0f2b', overflow: 'hidden', whiteSpace: 'nowrap', padding: '4px 0' }}>
        <span style={{ display: 'inline-block', fontFamily: 'var(--font-heading)', color: 'var(--color-lcd-fg)', fontSize: 13, animation: `dc-marquee ${speed}s linear infinite` }}>{text}</span>
      </div>
      <style>{'@keyframes dc-marquee{from{transform:translateX(110%)}to{transform:translateX(-110%)}}'}</style>
    </div>
  );
}
