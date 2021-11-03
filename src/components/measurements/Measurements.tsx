import { HealthCard } from '@components';
import { useMemo } from 'react';
import { AppState, CardType, CardValue } from 'types/types';
import Trend from './Trend';

interface Props {
  date: Date;
  state: AppState;
  onSubmit(val: CardValue, type: CardType): void;
}

function calcAverage(state: AppState, type: CardType): number {
  const sum = Object.values(state).reduce(
    (prev, current) => {
      const parsed = parseInt(current[type]?.value);
      if (isNaN(parsed)) {
        return prev;
      } else {
        return { sum: prev.sum + parsed, hits: prev.hits + 1 };
      }
    },
    { sum: 0, hits: 0 }
  );
  const average = Math.round((sum.sum / sum.hits) * 10) / 10;
  return average;
}

export default function Measurements({ date, state, onSubmit }: Props) {
  const bloodPressureAverage = useMemo(
    () => calcAverage(state, 'bloodPressure'),
    [state]
  );
  const weightAverage = useMemo(() => calcAverage(state, 'weight'), [state]);
  const bloodGlucoseLevelAverage = useMemo(
    () => calcAverage(state, 'bloodGlucoseLevel'),
    [state]
  );

  return (
    <>
      <HealthCard
        type={'bloodPressure'}
        value={state[date.toLocaleDateString()]?.bloodPressure}
        onSubmit={onSubmit}
        trend={<Trend type={'bloodPressure'} date={date} appState={state} />}
        average={bloodPressureAverage}
      />
      <HealthCard
        type={'weight'}
        value={state[date.toLocaleDateString()]?.weight}
        onSubmit={onSubmit}
        trend={<Trend type={'weight'} date={date} appState={state} />}
        average={weightAverage}
      />
      <HealthCard
        type={'bloodGlucoseLevel'}
        value={state[date.toLocaleDateString()]?.bloodGlucoseLevel}
        onSubmit={onSubmit}
        trend={
          <Trend type={'bloodGlucoseLevel'} date={date} appState={state} />
        }
        average={bloodGlucoseLevelAverage}
      />
    </>
  );
}
