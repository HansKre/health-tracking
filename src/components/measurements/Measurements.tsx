import { HealthCard } from '@components';
import { AppState, CardType, CardValue } from 'types/types';
import Trend from './Trend';

interface Props {
  date: Date;
  state: AppState;
  onSubmit(val: CardValue, type: CardType): void;
}
export default function Measurements({ date, state, onSubmit }: Props) {
  return (
    <>
      <HealthCard
        type={'bloodPressure'}
        state={state[date.toLocaleDateString()]?.bloodPressure}
        onSubmit={onSubmit}
        trend={<Trend type={'bloodPressure'} date={date} appState={state} />}
      />
      <HealthCard
        type={'weight'}
        state={state[date.toLocaleDateString()]?.weight}
        onSubmit={onSubmit}
        trend={<Trend type={'weight'} date={date} appState={state} />}
      />
      <HealthCard
        type={'bloodGlucoseLevel'}
        state={state[date.toLocaleDateString()]?.bloodGlucoseLevel}
        onSubmit={onSubmit}
        trend={
          <Trend type={'bloodGlucoseLevel'} date={date} appState={state} />
        }
      />
    </>
  );
}
