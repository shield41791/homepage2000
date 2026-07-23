export interface PostDetailProps {
  title: string;
  author: string;
  date: string;
  views: number;
  content: string;
  onBack?: () => void;
}
