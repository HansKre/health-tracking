import { SubmittedText } from '@components/health-card/SubmittedText';
import { yesterday } from '@utils/date';
import { CardType, AppState } from 'types/types';

interface Props {
  type: CardType;
  appState: AppState;
  date: Date;
}

function trendIcon(previous: number, current: number): string {
  if (current > previous) {
    return '⬆️';
  } else if (current < previous) {
    return '⬇️';
  } else {
    return '➡️';
  }
}

export default function Trend({ type, appState, date }: Props) {
  const previous = parseInt(
    appState[yesterday(date).toLocaleDateString()]?.[type]?.value
  );

  const current = parseInt(appState[date.toLocaleDateString()]?.[type]?.value);

  return <SubmittedText>{trendIcon(previous, current)}</SubmittedText>;
}
