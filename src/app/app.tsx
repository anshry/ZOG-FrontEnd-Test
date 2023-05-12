// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Login from 'src/components/login/login';
import styles from './app.module.scss';

import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
}

export default App;
