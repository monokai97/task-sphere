import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSync } from '../hooks/useSync';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

// Mock de BroadcastChannel
class MockBroadcastChannel {
  name: string;
  onmessage: ((event: any) => void) | null = null;
  static instances: MockBroadcastChannel[] = [];
  
  constructor(name: string) {
    this.name = name;
    MockBroadcastChannel.instances.push(this);
  }
  postMessage = vi.fn();
  close = vi.fn();
}

vi.stubGlobal('BroadcastChannel', MockBroadcastChannel);

describe('Sync: Cache Invalidation (Hito 3.3.3)', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    vi.clearAllMocks();
    MockBroadcastChannel.instances = [];
    queryClient = new QueryClient();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('should invalidate queries when matching TASK_UPDATED event is received', async () => {
    const guestId = 'guest-123';
    const invalidateSpy = vi.spyOn(queryClient, 'invalidateQueries');

    renderHook(() => useSync(guestId), { wrapper });
    const channel = MockBroadcastChannel.instances[0];

    // Simular recepción de mensaje de otra pestaña
    act(() => {
      channel.onmessage!({
        data: { type: 'TASK_UPDATED', guestId: 'guest-123' },
      });
    });

    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['tasks', 'guest-123'] });
  });

  it('should not invalidate queries for a different guestId', async () => {
    const guestId = 'guest-123';
    const invalidateSpy = vi.spyOn(queryClient, 'invalidateQueries');

    renderHook(() => useSync(guestId), { wrapper });
    const channel = MockBroadcastChannel.instances[0];

    // Simular recepción de mensaje de otro invitado
    act(() => {
      channel.onmessage!({
        data: { type: 'TASK_UPDATED', guestId: 'guest-999' },
      });
    });

    expect(invalidateSpy).not.toHaveBeenCalled();
  });
});
