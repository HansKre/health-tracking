import styled from 'styled-components';
import mainTheme from '@styles/mainTheme';
import { useState } from 'react';

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 290px;
  padding: 1rem 1rem;
  margin: 1rem 1rem;
  border-style: dashed;
  border-width: 1px;
  border-color: ${mainTheme.palette.secondary};
  border-radius: ${mainTheme.borderRadius};
`;

const FlexForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: ${mainTheme.palette.primary};
  color: ${mainTheme.palette.button};
  border-radius: ${mainTheme.borderRadius};
  padding: ${mainTheme.paddingTB};
  margin: ${mainTheme.margin};
  border-style: none;
  font-weight: bold;
  flex: 1 100%;
  &:hover {
    background-color: ${mainTheme.secondaryPalette.primary};
    cursor: pointer;
  }
`;

const Input = styled.input`
  flex: 1;
  border-radius: ${mainTheme.borderRadius};
  padding: ${mainTheme.paddingTBLR};
  margin: ${mainTheme.margin};
  border-color: ${mainTheme.secondaryPalette.secondary};
  border-width: 1px;
  border-style: solid;
  &:focus,
  &:active,
  &:hover {
    border-color: ${mainTheme.secondaryPalette.primary};
  }
  &:focus-visible {
    outline: ${mainTheme.secondaryPalette.primary} auto 1px;
  }
`;

const Label = styled.label`
  align-self: center;
  padding: ${mainTheme.paddingTBLR};
`;

type CardType = 'bloodPressure' | 'weight' | 'bloodGlucoseLevel';
interface CardInfo {
  label: string;
  unit: string;
}

const cards: Record<CardType, CardInfo> = {
  bloodPressure: { label: 'Blood Pressure', unit: 'mmHg' },
  weight: { label: 'Weight', unit: 'kg' },
  bloodGlucoseLevel: { label: 'Blood Glucose Level', unit: 'mg/dL' },
};

interface Props {
  type: CardType;
}

export default function HealthCard({ type }: Props) {
  const [value, setValue] = useState('');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const intFromStr = parseInt(value, 10);
    if (isNaN(intFromStr) || intFromStr < 1) {
      alert('Please enter a positive number');
    } else {
      alert(value);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newVal = e.target.value;
    setValue(newVal);
  }

  return (
    <CardContainer>
      <p>{cards[type].label}</p>
      <FlexForm onSubmit={handleSubmit}>
        <Input
          type='number'
          name={type}
          id={type}
          value={value}
          onChange={handleChange}
        />
        <Label htmlFor={type}>{cards[type].unit}</Label>
        <br />
        <Button>Submit</Button>
      </FlexForm>
    </CardContainer>
  );
}
