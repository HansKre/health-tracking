import { useEffect, useRef } from 'react';
import { CardInfo, CardType, CardValue } from 'types/types';
import { Button } from './Button';
import { Input } from './Input';
import { FlexForm } from './FlexForm';
import { Label } from './Label';
import { CardContainer } from './CardContainer';
import { SubmittedText } from './SubmittedText';
import { SubmittedContainer } from './SubmittedContainer';
import CardHeader from './CardHeader';

const cards: Record<CardType, CardInfo> = {
  bloodPressure: { label: 'Blood Pressure', unit: 'mmHg' },
  weight: { label: 'Weight', unit: 'kg' },
  bloodGlucoseLevel: { label: 'Blood Glucose Level', unit: 'mg/dL' },
};

interface Props {
  type: CardType;
  state: CardValue;
  onSubmit: (val: CardValue, type: CardType) => void;
  trend: React.ReactNode;
}

export default function HealthCard({
  type,
  state = { value: '', submitted: false },
  onSubmit,
  trend,
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
      <CardHeader label={cards[type].label} />
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
      {state.submitted && (
        <SubmittedContainer>
          <SubmittedText>
            {state.value} {cards[type].unit}
          </SubmittedText>
          {trend}
          <SubmittedText>
            ⌀ {state.value} {cards[type].unit}
          </SubmittedText>
        </SubmittedContainer>
      )}
    </CardContainer>
  );
}
