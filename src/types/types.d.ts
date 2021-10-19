export type CardType = 'bloodPressure' | 'weight' | 'bloodGlucoseLevel';

export interface CardInfo {
  label: string;
  unit: string;
}

export type CardValue = {
  value: string;
  submitted: boolean;
};

type Measures = Record<CardType, CardValue>;

type MeasureDate = string;

export type AppState = Record<MeasureDate, Measures>;
