import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useSync } from '../hooks/useSync';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

// Mock de BroadcastChannel para Vitest/JSDOM
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

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Hooks: useSync (Hito 3.3.1)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    MockBroadcastChannel.instances = [];
  });

  it('should initialize BroadcastChannel with the correct name', () => {
    renderHook(() => useSync('guest-1'), { wrapper });
    
    expect(MockBroadcastChannel.instances.length).toBe(1);
    expect(MockBroadcastChannel.instances[0].name).toBe('todo_sync');
  });

  it('should invalidate queries when receiving TASK_UPDATED for correct guestId', () => {
    const invalidateQueriesSpy = vi.spyOn(queryClient, 'invalidateQueries');
    
    renderHook(() => useSync('guest-1'), { wrapper });
    
    const channel = MockBroadcastChannel.instances[0];
    
    channel.onmessage!({
      data: { type: 'TASK_UPDATED', guestId: 'guest-1' }
    });

    expect(invalidateQueriesSpy).toHaveBeenCalledWith({ queryKey: ['tasks', 'guest-1'] });
  });

  it('should ignore TASK_UPDATED for different guestId', () => {
    const invalidateQueriesSpy = vi.spyOn(queryClient, 'invalidateQueries');
    
    renderHook(() => useSync('guest-1'), { wrapper });
    
    const channel = MockBroadcastChannel.instances[0];
    
    channel.onmessage!({
      data: { type: 'TASK_UPDATED', guestId: 'guest-99' }
    });

    expect(invalidateQueriesSpy).not.toHaveBeenCalled();
  });
});
