import {
  DatePicker,
  FullWidthSection,
  MainContainer,
  Measurements,
} from '@components';
import { useState } from 'react';
import { AppState, CardType, CardValue } from './types/types';

function App() {
  const [date, setDate] = useState(new Date());

  const [state, setState] = useState<AppState>({});

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
        <Measurements date={date} state={state} onSubmit={handleSubmit} />
      </FullWidthSection>
    </MainContainer>
  );
}

export default App;
