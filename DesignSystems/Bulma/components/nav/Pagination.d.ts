export interface PaginationProps {
  /** Current 1-indexed page. */
  page: number;
  /** Total page count. */
  total: number;
  onChange?: (page: number) => void;
}
