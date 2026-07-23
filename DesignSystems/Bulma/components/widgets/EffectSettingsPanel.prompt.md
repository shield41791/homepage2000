Slide-down settings strip opened from the footer's "[화면효과 설정]" link — radio-picks the cursor-trail weather particle, plus an accessibility "reduce motion" checkbox that must be honored globally (stop trails/sparkles/marquees).

```jsx
<EffectSettingsPanel effect="snow" onEffectChange={setEffect}
  reduceMotion={false} onToggleReduceMotion={toggleReduce} onClose={closePanel} />
```
