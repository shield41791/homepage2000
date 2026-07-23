export interface Photo {
  title: string;
  thumb?: string;
  isNew?: boolean;
  onClick?: () => void;
}
/**
 * @startingPoint section="Components" subtitle="사진첩 thumbnail grid, striped placeholders" viewport="700x260"
 */
export interface PhotoGridProps {
  photos: Photo[];
  /** Grid columns — 4 on desktop, 2 on mobile. */
  columns?: number;
}
