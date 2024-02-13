import styles from "./Score.module.css";

type Props = {
  data: { date: string; score: number };
};

export const Score = ({ data }: Props) => {
  const { date, score } = data;
  return (
    <div className={styles.container}>
      <p>{date}</p>
      <p>{score}</p>
    </div>
  );
};
