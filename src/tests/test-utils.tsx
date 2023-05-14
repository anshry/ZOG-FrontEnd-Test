import React, { ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface WrapperProps {
  children: ReactNode;
}

function customRender(ui: React.ReactElement, options?: any) {
  const queryClient = new QueryClient();
  const Wrapper: React.FC<WrapperProps> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
export { customRender as render };