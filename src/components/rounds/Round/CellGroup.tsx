import { clsx } from 'clsx';

import { GROUP_LENGTH } from '@constants/index.ts';

import './round.css';

type PropsType = {
  rowStart: number;
  rowEnd: number;
  rowIndex: number;
  cell: string;
};

export const CellGroup = ({ rowStart, rowEnd, rowIndex, cell }: PropsType) => {
  let hiddenType: 'top' | 'bottom' | null = null;
  const groupLength = rowEnd - rowStart + 1;

  const gridColumn = rowIndex + 1;
  const gridRowStart = rowStart + 1;
  const gridRowEnd = rowStart + 1 + groupLength;

  if (groupLength < Number(GROUP_LENGTH)) {
    hiddenType = rowStart === 0 ? 'top' : 'bottom';
  }

  return (
    <div
      className={clsx({
        field__cell: true,
        filed__group: true,
      })}
      style={{
        gridArea: `${gridRowStart}/ ${gridColumn} / ${gridRowEnd}`,
      }}
    >
      <div
        className={clsx({
          field__group__inner__block: true,
          'filed__group--top': hiddenType === 'bottom',
          'filed__group--bottom': hiddenType === 'top',
        })}
      >
        <img src={`/${cell}.png`} alt="cell" />
      </div>
    </div>
  );
};
