import { Fragment } from 'react';

import { useRoundField } from '@hooks/useRoundField.tsx';
import { Spinner } from '@components/shared';
import { GROUP_LENGTH } from '@constants/index';
import { useRetrieveRoundQuery } from '@queries/index';

import { Cell } from './Cell.tsx';
import { CellGroup } from './CellGroup.tsx';

import './round.css';

type PropsType = {
  id: string;
};

export const Round = ({ id }: PropsType) => {
  const columnsWithGroup = new Map();
  const { isFetching, error, data } = useRetrieveRoundQuery({ id });

  const { groups, gameField } = useRoundField({
    cells: data?.items,
    height: data?.height,
  });

  if (isFetching) return <Spinner size="3" />;

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="field">
      {gameField.map((row, index) => {
        return (
          <Fragment key={index}>
            {row.map((cell, idx) => {
              if (cell !== GROUP_LENGTH) return <Cell key={idx + index} cell={cell} />;

              if (columnsWithGroup.get(idx)) return null;

              columnsWithGroup.set(idx, true);

              const { rowEnd, rowStart } = groups[idx];

              return <CellGroup key={idx + index} rowIndex={idx} rowEnd={rowEnd} rowStart={rowStart} cell={cell} />;
            })}
          </Fragment>
        );
      })}
    </div>
  );
};
