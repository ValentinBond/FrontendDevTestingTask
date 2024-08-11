import { useMemo } from 'react';

import { GROUP_LENGTH } from '@constants/index';

type PropsType = {
  cells?: string;
  height?: string;
};

export const useRoundField = ({ cells, height }: PropsType) => {
  return useMemo(() => {
    let row: string[] = [];
    const groups: Record<number, { rowStart: number; rowEnd: number }> = {};
    const cellsList = cells?.split(',') || [];
    const rowLength = cellsList.length / Number(height);
    const roundField: string[][] = [];

    cellsList.forEach((cell) => {
      const columnNumber = row.length;

      if (cell === GROUP_LENGTH) {
        groups[columnNumber] = {
          rowStart: groups[columnNumber] ? groups[columnNumber].rowStart : roundField.length,
          rowEnd: groups[columnNumber] ? groups[columnNumber].rowEnd + 1 : roundField.length,
        };
      }

      row.push(cell);

      if (row.length === rowLength) {
        roundField.push(row);
        row = [];
      }
    });

    return {
      roundField,
      groups,
    };
  }, [cells, height]);
};
