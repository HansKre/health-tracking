export type CardType = 'bloodPressure' | 'weight' | 'bloodGlucoseLevel';

export interface CardInfo {
  label: string;
  unit: string;
}

export type CardValue = {
  value: string;
  submitted: boolean;
};
