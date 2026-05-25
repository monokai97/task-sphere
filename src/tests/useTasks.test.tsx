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

describe('Hooks: useTasks Optimistic Updates (Hito 3.2.2)', () => {
  it('should optimistically update task state on toggle', async () => {
    const guestId = 'guest-123';
    const mockTasks = [{ id: 'task-1', title: 'Task 1', completed: false, position: '0|a0', guest: guestId }];
    
    // Mock inicial de fetch
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockTasks,
    });

    const { result } = renderHook(() => useTasks(guestId), {
      wrapper: createWrapper(),
    });

    // Esperar a que se carguen los datos
    await waitFor(() => expect(result.current.tasks.length).toBe(1));

    // Mock para la mutación
    (fetch as any).mockResolvedValueOnce({ ok: true, json: async () => ({}) });

    // Ejecutar mutación optimista
    result.current.toggleTask.mutate('task-1');

    // Verificar estado optimista con waitFor para manejar re-renders
    await waitFor(() => {
      expect(result.current.tasks[0].completed).toBe(true);
    });
  });

  it('should optimistically remove task on delete', async () => {
    const guestId = 'guest-123';
    const mockTasks = [{ id: 'task-1', title: 'Task 1', completed: false, position: '0|a0', guest: guestId }];
    
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockTasks,
    });

    const { result } = renderHook(() => useTasks(guestId), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.tasks.length).toBe(1));

    // Mock para mutación borrado
    (fetch as any).mockResolvedValueOnce({ ok: true });

    result.current.deleteTask.mutate('task-1');

    // Verificar desaparición inmediata usando waitFor
    await waitFor(() => {
      expect(result.current.tasks.length).toBe(0);
    });
  });
});
