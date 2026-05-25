import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTasks } from '../hooks/useTasks';
import React from 'react';

// Mock de fetch global
global.fetch = vi.fn();

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('Hooks: useTasks Rollback Logic (Hito 3.2.3)', () => {
  it('should rollback local state if toggle mutation fails', async () => {
    const guestId = 'guest-rollback';
    const mockTasks = [{ id: 'task-1', title: 'Task 1', completed: false, position: '0|a0', guest: guestId }];
    
    // Mock inicial: carga exitosa
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockTasks,
    });

    const { result } = renderHook(() => useTasks(guestId), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.tasks.length).toBe(1));

    // Mock: Mutación falla (Error 500)
    (fetch as any).mockResolvedValueOnce({ ok: false });

    result.current.toggleTask.mutate('task-1');

    // Verificar rollback: debería volver a false
    await waitFor(() => {
      expect(result.current.tasks[0].completed).toBe(false);
    });
  });

  it('should rollback local state if delete mutation fails', async () => {
    const guestId = 'guest-rollback';
    const mockTasks = [{ id: 'task-1', title: 'Task 1', completed: false, position: '0|a0', guest: guestId }];
    
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockTasks,
    });

    const { result } = renderHook(() => useTasks(guestId), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.tasks.length).toBe(1));

    // Mock: Mutación falla
    (fetch as any).mockResolvedValueOnce({ ok: false });

    result.current.deleteTask.mutate('task-1');

    // Verificar rollback: tarea vuelve a aparecer
    await waitFor(() => {
      expect(result.current.tasks.length).toBe(1);
      expect(result.current.tasks[0].id).toBe('task-1');
    });
  });
});
