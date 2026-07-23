export interface CategoryTab {
  label: string;
  active?: boolean;
  isNew?: boolean;
  onClick?: () => void;
}
/**
 * @startingPoint section="Components" subtitle="Board-green filled/outlined category tab row" viewport="700x80"
 */
export interface CategoryTabsProps {
  tabs: CategoryTab[];
  /** 'sm' for the mobile 1-column layout. */
  size?: 'sm' | 'md';
}
