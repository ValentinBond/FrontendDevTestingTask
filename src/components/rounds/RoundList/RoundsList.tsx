import { useState } from 'react';
import dayjs from 'dayjs';

import { Round } from '@components/rounds/Round';
import { queryClient } from '@lib/query.ts';
import { Spinner } from '@components/shared';
import { useRetrieveRoundsListQuery } from '@queries/index';

import RefreshIcon from '@assets/refresh.svg';

import './roundList.css';

export const RoundsList = () => {
  const [openRounds, setOpenRounds] = useState<Record<string, boolean>>({});

  const { isPending, error, data } = useRetrieveRoundsListQuery();

  if (isPending) return <Spinner size="3" />;

  if (error) return 'An error has occurred: ' + error.message;

  const openRound = (id: string) => {
    setOpenRounds({
      ...openRounds,
      [id]: !openRounds[id],
    });
  };

  const refreshRound = (id: string) => {
    queryClient.invalidateQueries({
      queryKey: ['round', id],
    });
  };

  return (
    <div className="list">
      <div className="list__header">
        <span>Round</span>
        <span>Date</span>
      </div>
      {data.map(({ dateTime, roundId }) => (
        <div key={roundId}>
          <div className="list__round" key={roundId} onClick={() => openRound(roundId)}>
            <span>{roundId}</span>
            <span>{dayjs(dateTime).format('M/DD/YYYY, HH:mm:ss A')}</span>
            {openRounds[roundId] ? (
              <RefreshIcon
                className="list__round__refresh_btn"
                onClick={(e) => {
                  e.stopPropagation();
                  refreshRound(roundId);
                }}
              />
            ) : null}
          </div>
          {openRounds[roundId] ? (
            <div className="list__round__field">
              <Round id={roundId} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
