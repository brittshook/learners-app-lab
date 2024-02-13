import { Score } from "./Score";

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
    <div>
      <div>
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
      <div>
        {scores.map((score, i) => (
          <Score key={i} data={score} />
        ))}
      </div>
    </div>
  );
};
