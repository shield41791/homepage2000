export interface SidebarMenuItem {
  label: string;
  active?: boolean;
  isNew?: boolean;
  onClick?: () => void;
}
export interface SidebarMenuGroup {
  /** Group header text, e.g. "MENU", "자료실", "커뮤니티". */
  title: string;
  items: SidebarMenuItem[];
}
/**
 * @startingPoint section="Components" subtitle="172px grouped nav sidebar with mini-profile box" viewport="700x420"
 */
export interface SidebarMenuProps {
  groups: SidebarMenuGroup[];
  /** Caption under the mini profile thumbnail, e.g. "。 쭈 요 。". */
  profileLabel?: string;
  /** Optional profile thumbnail image URL — omit to show the striped placeholder. */
  profileImg?: string;
}
