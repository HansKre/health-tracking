import { dateString, tomorrow, yesterday } from '@utils/date';
import { ArrowButton } from './ArrowButton';

interface Props {
  date: Date;
  onChange: React.Dispatch<React.SetStateAction<Date>>;
}

export default function DatePicker({ date, onChange }: Props) {
  function decreaseDate() {
    onChange((prev) => yesterday(prev));
  }

  function increaseDate() {
    onChange((prev) => tomorrow(prev));
  }

  return (
    <nav style={{ display: 'flex' }}>
      <ArrowButton onClick={decreaseDate}>{'<'}</ArrowButton>
      <h2>
        <u>{`${dateString(date)}´s`}</u> measurements
      </h2>
      <ArrowButton onClick={increaseDate}>{'>'}</ArrowButton>
    </nav>
  );
}
