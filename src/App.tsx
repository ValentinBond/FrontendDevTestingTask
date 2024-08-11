import { QueryClientProvider } from '@tanstack/react-query';
import { Theme } from '@radix-ui/themes';

import { queryClient } from '@lib/query.ts';

import { RoundsList } from '@components/rounds/RoundList/RoundsList.tsx';

import './App.css';
import '@radix-ui/themes/styles.css';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Theme>
      <RoundsList />
    </Theme>
  </QueryClientProvider>
);

export default App;
