import { useQuery } from '@tanstack/react-query';
import { retrieveRound, retrieveRoundsList } from '@api/rounds.tsx';

export const useRetrieveRoundsListQuery = () => {
  return useQuery({
    queryKey: ['rounds'],
    queryFn: retrieveRoundsList,
  });
};

export const useRetrieveRoundQuery = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ['round', id],
    queryFn: () => retrieveRound({ id }),
    enabled: !!id,
  });
};
