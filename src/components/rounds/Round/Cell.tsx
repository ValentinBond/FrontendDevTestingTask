import './round.css';

type PropsType = {
  cell: string;
};

export const Cell = ({ cell }: PropsType) => {
  return (
    <div className="field__cell">
      <img src={`/${cell}.png`} alt="cell" />
    </div>
  );
};
