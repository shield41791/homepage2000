export interface BoardPost {
  no?: number;
  title: string;
  author?: string;
  date: string;
  views?: number;
  isNew?: boolean;
  onClick?: () => void;
}
/**
 * @startingPoint section="Components" subtitle="Green NO/SUBJECT/NAME/DATE/HIT board table" viewport="700x320"
 */
export interface BoardListProps {
  posts: BoardPost[];
  showNo?: boolean;
  showName?: boolean;
  showHit?: boolean;
  /** Shown in the "✿ TOTAL : N PAGE : x/y" strip above the table — omit to hide the strip. */
  total?: number;
  page?: number;
  totalPages?: number;
}
