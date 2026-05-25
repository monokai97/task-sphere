import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useQueryClient } from '@tanstack/react-query';
import { Providers } from '../app/providers';
import { queryClient } from '../lib/query-client';

describe('TanStack Query: Infrastructure (Hito 3.2.1)', () => {
  
  it('should initialize QueryClient with custom SQLite retry policy', () => {
    // Verificar la configuración de reintentos
    const retryFn = queryClient.getDefaultOptions().queries?.retry as any;
    
    // Simular fallo de SQLite_BUSY
    const error = new Error('SQLITE_BUSY');
    
    // Debería permitir reintentos (true) para failureCount < 3
    expect(retryFn(0, error)).toBe(true);
    expect(retryFn(1, error)).toBe(true);
    expect(retryFn(2, error)).toBe(true);
    
    // Debería parar (false) después
    expect(retryFn(3, error)).toBe(false);
  });

  it('should provide QueryClient via Providers context', () => {
    let clientFromContext: any = null;

    function TestConsumer() {
      clientFromContext = useQueryClient();
      return null;
    }

    render(
      <Providers>
        <TestConsumer />
      </Providers>
    );

    expect(clientFromContext).toBe(queryClient);
  });
});
