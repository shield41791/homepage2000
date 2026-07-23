export interface EnterGateProps {
  /** Big serif wordmark, e.g. "쭈 요 의  홈 페 이 지". */
  title?: string;
  subtitle?: string;
  onEnter?: () => void;
  today: string | number;
  total: string | number;
  /** Founding date shown after "since". */
  since: string;
  copyright?: string;
}
