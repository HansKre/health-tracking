import { HealthCard } from '@components';
import { AppState, CardType, CardValue } from 'types/types';

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
      />
      <HealthCard
        type={'weight'}
        state={state[date.toLocaleDateString()]?.weight}
        onSubmit={onSubmit}
      />
      <HealthCard
        type={'bloodGlucoseLevel'}
        state={state[date.toLocaleDateString()]?.bloodGlucoseLevel}
        onSubmit={onSubmit}
      />
    </>
  );
}
