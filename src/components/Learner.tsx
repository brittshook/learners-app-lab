import { Score } from "./Score";
import styles from "./Learner.module.css";

type Props = {
  data: {
    name: string;
    bio: string;
    scores: { date: string; score: number }[];
  };
};

export const Learner = ({ data }: Props) => {
  const { name, bio, scores } = data;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
      <div>
        <h3>Grades</h3>
        {scores.map((score, i) => (
          <Score key={i} data={score} />
        ))}
      </div>
    </div>
  );
};
