import { HealthCard, MainContainer } from '@components';
import { useState } from 'react';
import styled from 'styled-components';
import { CardType, CardValue } from './types/types';
import { dateString, tomorrow, yesterday } from './utils/date';

const FullWidthSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ArrowButton = styled.button`
  background-color: initial;
  border: none;
`;

function App() {
  const [date, setDate] = useState(new Date());
  const [state, setState] = useState<
    Record<string, Record<CardType, CardValue>>
  >({});

  function decreaseDate() {
    setDate((prev) => yesterday(prev));
  }

  function increaseDate() {
    setDate((prev) => tomorrow(prev));
  }

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
        <div style={{ display: 'flex' }}>
          <ArrowButton onClick={decreaseDate}>{'<'}</ArrowButton>
          <h2>
            <u>{`${dateString(date)}´s`}</u> measurements
          </h2>
          <ArrowButton onClick={increaseDate}>{'>'}</ArrowButton>
        </div>
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
