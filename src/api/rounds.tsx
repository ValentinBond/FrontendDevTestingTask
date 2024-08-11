import { RoundsListType, RoundType } from '@models/rounds.tsx';

export const retrieveRoundsList = async (): Promise<RoundsListType> => {
  return fetch('https://60f7b35b9cdca00017454f5e.mockapi.io/api/v1/rounds').then((res) => res.json());
};

export const retrieveRound = async ({ id }: { id: string }): Promise<RoundType> => {
  return fetch(`https://60f7b35b9cdca00017454f5e.mockapi.io/api/v1/round/${id}`).then((res) => res.json());
};
