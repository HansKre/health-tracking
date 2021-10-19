import {
  DatePicker,
  FullWidthSection,
  HealthCard,
  MainContainer,
} from '@components';
import { useState } from 'react';
import { CardType, CardValue } from './types/types';

function App() {
  const [date, setDate] = useState(new Date());
  const [state, setState] = useState<
    Record<string, Record<CardType, CardValue>>
  >({});

  function handleSubmit(val: CardValue, type: CardType): void {
    setState((prev) => {
      const newState = {
        ...prev,
        [date.toLocaleDateString()]: {
          ...prev[date.toLocaleDateString()],
          [type]: val,
        },
      };
      return newState;
    });
  }

  return (
    <MainContainer>
      <h1>Health Tracking</h1>
      <FullWidthSection>
        <DatePicker date={date} onChange={setDate} />
        <HealthCard
          type={'bloodPressure'}
          state={state[date.toLocaleDateString()]?.bloodPressure}
          onSubmit={handleSubmit}
        />
        <HealthCard
          type={'weight'}
          state={state[date.toLocaleDateString()]?.weight}
          onSubmit={handleSubmit}
        />
        <HealthCard
          type={'bloodGlucoseLevel'}
          state={state[date.toLocaleDateString()]?.bloodGlucoseLevel}
          onSubmit={handleSubmit}
        />
      </FullWidthSection>
    </MainContainer>
  );
}

export default App;
