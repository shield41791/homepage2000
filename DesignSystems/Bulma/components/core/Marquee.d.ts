export interface MarqueeProps {
  /** Scrolling notice text (right-to-left). */
  text: string;
  /** Show the pastel dotted separator rule above the marquee. */
  dotted?: boolean;
  /** Scroll duration in seconds — lower is faster. */
  speed?: number;
}
