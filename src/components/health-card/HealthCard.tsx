import { useEffect, useRef } from 'react';
import { CardInfo, CardType, CardValue } from '@config/types/types';
import { Button } from './Button';
import { Input } from './Input';
import { FlexForm } from './FlexForm';
import { Label } from './Label';
import { CardContainer } from './CardContainer';

const cards: Record<CardType, CardInfo> = {
  bloodPressure: { label: 'Blood Pressure', unit: 'mmHg' },
  weight: { label: 'Weight', unit: 'kg' },
  bloodGlucoseLevel: { label: 'Blood Glucose Level', unit: 'mg/dL' },
};

interface Props {
  type: CardType;
  state: CardValue;
  onSubmit: (val: CardValue, type: CardType) => void;
}

export default function HealthCard({
  type,
  state = { value: '', submitted: false },
  onSubmit,
}: Props) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.value = state.value;
    }
  }, [state]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const intFromStr = parseInt(ref.current?.value || '', 10);
    if (isNaN(intFromStr) || intFromStr < 1) {
      alert('Please enter a positive number');
    } else {
      onSubmit(
        {
          value: intFromStr.toString(),
          submitted: true,
        },
        type
      );
    }
  }

  return (
    <CardContainer>
      <p>{cards[type].label}</p>
      {!state.submitted && (
        <FlexForm onSubmit={handleSubmit}>
          <Input
            ref={ref}
            type='number'
            name={type}
            id={type}
            defaultValue={state.value}
          />
          <Label htmlFor={type}>{cards[type].unit}</Label>
          <br />
          <Button>Submit</Button>
        </FlexForm>
      )}
      {state.submitted && <p>{state.value}</p>}
    </CardContainer>
  );
}
