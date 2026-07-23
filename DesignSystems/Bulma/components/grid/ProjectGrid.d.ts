export interface Project {
  title: string;
  tagline?: string;
  host?: string;
  url: string;
  thumb?: string;
  isNew?: boolean;
}
/**
 * @startingPoint section="Components" subtitle="Project cards linking out in a new tab" viewport="700x220"
 */
export interface ProjectGridProps {
  projects: Project[];
  columns?: number;
}
