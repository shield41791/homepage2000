export interface EffectSettingsPanelProps {
  effect: string;
  onEffectChange?: (effect: string) => void;
  reduceMotion?: boolean;
  onToggleReduceMotion?: () => void;
  onClose?: () => void;
  /** Available particle effect keys. Default: snow/sakura/leaves/rain/none. */
  options?: string[];
}
