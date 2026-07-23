export interface Video {
  title: string;
  desc?: string;
  thumb?: string;
  isNew?: boolean;
  onClick?: () => void;
}
/**
 * @startingPoint section="Components" subtitle="동영상 grid with play-triangle overlay" viewport="700x220"
 */
export interface VideoGridProps {
  videos: Video[];
  columns?: number;
}
