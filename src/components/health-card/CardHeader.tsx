interface Props {
  label: string;
}

export default function CardHeader({ label }: Props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>{label}</p>
      <p style={{ cursor: 'pointer' }} onClick={() => alert('Todo')}>
        ⚙️
      </p>
    </div>
  );
}
