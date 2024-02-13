type Props = {
  data: { date: string; score: number };
};

export const Score = ({ data }: Props) => {
  const { date, score } = data;
  return (
    <div>
      <p>{date}</p>
      <p>{score}</p>
    </div>
  );
};
