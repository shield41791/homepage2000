import React from 'react';

export function FooterPlayer({ trackLabel, playing, muted, onTogglePlay, onToggleMute, onToggleSettings, copyright, mobile = false }) {
  return (
    <div style={{ borderTop: '2px solid var(--color-banner-border)', background: 'var(--color-surface)', padding: mobile ? '8px 12px' : '8px 24px', display: 'flex', alignItems: 'center', gap: mobile ? 8 : 12, flexWrap: 'wrap', fontFamily: 'var(--font-ui-mono)', fontSize: 11 }}>
      <div style={{ width: mobile ? 16 : 18, height: mobile ? 16 : 18, borderRadius: '50%', background: 'radial-gradient(circle,#666,#111)', flex: 'none', animation: playing ? 'dc-spin 3s linear infinite' : 'none' }} />
      {!mobile && <span style={{ color: 'var(--color-frame-header-text)', fontWeight: 700 }}>BGM Player</span>}
      <div style={{ width: mobile ? undefined : 230, flex: mobile ? 1 : 'none', overflow: 'hidden', whiteSpace: 'nowrap', color: 'var(--color-board-accent-text)' }}>
        <span style={{ display: 'inline-block', animation: 'dc-marquee-2 10s linear infinite' }}>♪ now playing : {trackLabel} ♪</span>
      </div>
      <span onClick={onTogglePlay} style={{ cursor: 'pointer', color: 'var(--color-link)' }}>{playing ? '❚❚' : '▶'}{!mobile && ' 재생'}</span>
      <span onClick={onToggleMute} style={{ cursor: 'pointer', color: 'var(--color-link)' }}>{muted ? '🔇' : '🔊'}{!mobile && ' 소리'}</span>
      {!mobile && <span style={{ color: 'var(--gray-200)' }}>|</span>}
      {!mobile && <span onClick={onToggleSettings} style={{ cursor: 'pointer', color: 'var(--color-link)' }}>[화면효과 설정]</span>}
      {!mobile && <span style={{ marginLeft: 'auto', color: 'var(--gray-300)' }}>{copyright}</span>}
      <style>{'@keyframes dc-spin{to{transform:rotate(360deg)}}@keyframes dc-marquee-2{from{transform:translateX(100%)}to{transform:translateX(-100%)}}'}</style>
    </div>
  );
}
