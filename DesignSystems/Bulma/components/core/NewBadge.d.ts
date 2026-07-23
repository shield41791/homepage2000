export interface NewBadgeProps {
  /** Render the badge at all — pass the item's "has new content" flag. */
  show?: boolean;
  /** Badge text, defaults to "N" (renders as "[N]" in red). */
  label?: string;
}
