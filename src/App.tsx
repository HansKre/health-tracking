import { HealthCard, MainContainer } from '@components';
import styled from 'styled-components';

const FullWidthSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function App() {
  return (
    <MainContainer>
      <h1>Health Tracking</h1>
      <FullWidthSection>
        <h2>
          {'<'} <u>today's</u> measurements {'>'}
        </h2>
        <HealthCard type={'bloodPressure'} />
        <HealthCard type={'weight'} />
        <HealthCard type={'bloodGlucoseLevel'} />
      </FullWidthSection>
    </MainContainer>
  );
}

export default App;
