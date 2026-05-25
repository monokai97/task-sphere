import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: (failureCount, error: any) => {
        // Reintentar si es un error de SQLite Busy
        if (error?.message?.includes('SQLITE_BUSY') || error?.code === 'P2034') {
          return failureCount < 3;
        }
        return false;
      },
    },
    mutations: {
      retry: (failureCount, error: any) => {
        if (error?.message?.includes('SQLITE_BUSY') || error?.code === 'P2034') {
          return failureCount < 3;
        }
        return false;
      },
    },
  },
});
