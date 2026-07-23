export interface FooterPlayerProps {
  /** Scrolling "now playing" label. No real audio — UI shell only. */
  trackLabel: string;
  playing?: boolean;
  muted?: boolean;
  onTogglePlay?: () => void;
  onToggleMute?: () => void;
  /** Opens the EffectSettingsPanel — hidden on mobile (use a separate trigger there). */
  onToggleSettings?: () => void;
  copyright?: string;
  /** Compact mobile layout: hides labels/copyright, keeps disc + track + controls. */
  mobile?: boolean;
}
