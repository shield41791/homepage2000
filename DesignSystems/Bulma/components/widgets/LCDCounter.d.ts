export interface LCDCounterProps {
  /** Today's visit count, e.g. "128". Pass zero-padded strings if you want fixed width digits. */
  today: string | number;
  /** All-time visit count, e.g. "004231". */
  total: string | number;
}
