import React from 'react';

export function EffectSettingsPanel({ effect, onEffectChange, reduceMotion, onToggleReduceMotion, onClose, options = ['snow', 'sakura', 'leaves', 'rain', 'none'] }) {
  const labels = { snow: '눈', sakura: '벚꽃', leaves: '낙엽', rain: '비', none: '없음' };
  return (
    <div style={{ background: 'var(--blue-50)', borderTop: '1px solid var(--blue-400)', padding: '8px 24px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', fontFamily: 'var(--font-ui-mono)', fontSize: 12 }}>
      <span style={{ color: 'var(--color-frame-header-text)', fontWeight: 700 }}>화면효과 :</span>
      {options.map(o => (
        <label key={o} style={{ display: 'flex', gap: 3, alignItems: 'center', cursor: 'pointer' }}>
          <input type="radio" checked={effect === o} onChange={() => onEffectChange && onEffectChange(o)} />{labels[o] || o}
        </label>
      ))}
      <label style={{ display: 'flex', gap: 3, alignItems: 'center', cursor: 'pointer', borderLeft: '1px solid var(--blue-400)', paddingLeft: 12 }}>
        <input type="checkbox" checked={reduceMotion} onChange={onToggleReduceMotion} />효과 줄이기
      </label>
      <span onClick={onClose} style={{ marginLeft: 'auto', color: 'var(--color-link)', cursor: 'pointer' }}>닫기 ✕</span>
    </div>
  );
}
