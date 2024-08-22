import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import store from './redux/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

LogBox.ignoreAllLogs(true);
export default function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Provider>
  );
}
