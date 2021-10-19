interface Props {
  label: string;
  onEditClicked(): void;
}

export default function CardHeader({ label, onEditClicked }: Props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>{label}</p>
      <p style={{ cursor: 'pointer' }} onClick={onEditClicked}>
        ⚙️
      </p>
    </div>
  );
}
