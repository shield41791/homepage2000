export interface BannerProps {
  /** Site wordmark text, rendered in var(--font-logo). */
  title?: string;
  /** Small domain/tagline line under the wordmark, e.g. "yourname.wo.to". */
  domain?: string;
  /** Click handler on the logo box + wordmark — typically navigates home. */
  onLogoClick?: () => void;
  /** Compact single-row layout for the mobile 1-column reflow. */
  mobile?: boolean;
}
