import { useMemo } from "react";
import { GROUP_LENGTH } from "@constants/index.ts";

type PropsType = {
  cells?: string;
  height?: string;
};

export const useRoundField = ({ cells, height }: PropsType) => {
  return useMemo(() => {
    let row: string[] = [];
    const groups: Record<number, { rowStart: number; rowEnd: number }> = {};
    const cellsArray = cells?.split(",") || [];
    const rowLength = cellsArray.length / Number(height);
    const gameField: string[][] = [];

    cellsArray.forEach((cell) => {
      const columnNumber = row.length;

      if (cell === GROUP_LENGTH) {
        groups[columnNumber] = {
          rowStart: groups[columnNumber]
            ? groups[columnNumber].rowStart
            : gameField.length,
          rowEnd: groups[columnNumber]
            ? groups[columnNumber].rowEnd + 1
            : gameField.length,
        };
      }

      row.push(cell);

      if (row.length === rowLength) {
        gameField.push(row);
        row = [];
      }
    });

    return {
      gameField,
      groups,
    };
  }, [cells, height]);
};
