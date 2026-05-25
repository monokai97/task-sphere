import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useTasks } from '../hooks/useTasks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

// Mock de BroadcastChannel para Vitest/JSDOM
class MockBroadcastChannel {
  name: string;
  onmessage: ((event: any) => void) | null = null;
  static instances: MockBroadcastChannel[] = [];
  
  // Hacemos que cada instancia comparta un spy común o sea el mismo spy
  static postMessageSpy = vi.fn();
  static closeSpy = vi.fn();

  constructor(name: string) {
    this.name = name;
    MockBroadcastChannel.instances.push(this);
  }
  postMessage = MockBroadcastChannel.postMessageSpy;
  close = MockBroadcastChannel.closeSpy;
}

vi.stubGlobal('BroadcastChannel', MockBroadcastChannel);

// Mock de fetch
global.fetch = vi.fn();

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Sync: Mutation Event Emission (Hito 3.3.2)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    MockBroadcastChannel.instances = [];
  });

  it('should broadcast TASKS_UPDATED event on successful toggleTask mutation', async () => {
    const guestId = 'guest-123';
    (fetch as any).mockResolvedValueOnce({ ok: true, json: async () => [] }); // Fetch inicial

    const { result } = renderHook(() => useTasks(guestId), { wrapper });

    // Mock para la mutación exitosa
    (fetch as any).mockResolvedValueOnce({ ok: true, json: async () => ({}) });

    result.current.toggleTask.mutate('task-1');

    await waitFor(() => {
      const channel = MockBroadcastChannel.instances[0];
      expect(channel.postMessage).toHaveBeenCalledWith({
        type: 'TASKS_UPDATED',
        guestId: 'guest-123',
      });
    });
  });

  it('should broadcast TASKS_UPDATED event on successful deleteTask mutation', async () => {
    const guestId = 'guest-123';
    (fetch as any).mockResolvedValueOnce({ ok: true, json: async () => [] });

    const { result } = renderHook(() => useTasks(guestId), { wrapper });

    // Mock para mutación exitosa
    (fetch as any).mockResolvedValueOnce({ ok: true });

    result.current.deleteTask.mutate('task-1');

    await waitFor(() => {
      const channel = MockBroadcastChannel.instances[0];
      expect(channel.postMessage).toHaveBeenCalledWith({
        type: 'TASKS_UPDATED',
        guestId: 'guest-123',
      });
    });
  });
});
