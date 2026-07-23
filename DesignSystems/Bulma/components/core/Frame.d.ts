import { ReactNode, CSSProperties } from 'react';
export interface FrameProps {
  /** Header bar text (궁서 font, blue fill). Omit for a plain bordered box. */
  header?: string;
  /** Optional right-aligned text in the header (e.g. "more▷"). */
  headerRight?: string;
  /** Border color family. 'blue' = default site frame, 'green' = board/list frame. */
  accent?: 'blue' | 'green';
  /** Use a 3px double border instead of the standard nested 2px+1px frame. */
  double?: boolean;
  /** Apply the standard 10px/12px inner padding. Set false for tables/grids that manage their own cell padding. */
  padded?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}
