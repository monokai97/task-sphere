import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { TaskContract } from '../lib/validation/tasks';
import { useSync } from './useSync';

/**
 * Hook para gestionar las tareas del invitado.
 * Incluye queries, mutaciones optimistas y sincronización cross-tab.
 */
export function useTasks(guestId: string) {
  const queryClient = useQueryClient();
  const taskQueryKey = ['tasks', guestId];
  const { broadcast } = useSync(guestId);

  // Fetch tareas
  const { data: tasks = [] } = useQuery<TaskContract[]>({
    queryKey: taskQueryKey,
    queryFn: async () => {
      const res = await fetch(`/api/tasks?guestId=${guestId}`);
      if (!res.ok) throw new Error('Error al cargar tareas');
      return res.json();
    },
  });

  // Mutación para alternar estado
  const toggleTask = useMutation({
    mutationFn: async (taskId: string) => {
      const res = await fetch(`/api/tasks/${taskId}/toggle`, { method: 'POST' });
      if (!res.ok) throw new Error('Error al alternar estado');
      return res.json();
    },
    onMutate: async (taskId: string) => {
      await queryClient.cancelQueries({ queryKey: taskQueryKey });
      const previousTasks = queryClient.getQueryData<TaskContract[]>(taskQueryKey);

      queryClient.setQueryData(taskQueryKey, (old: TaskContract[] = []) =>
        old.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
      );

      return { previousTasks };
    },
    onSuccess: () => {
      broadcast('TASKS_UPDATED');
    },
    onError: (err, _taskId, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(taskQueryKey, context.previousTasks);
      }
      console.error('Toggle Error:', err);
      // toast.error('No se pudo actualizar la tarea'); // Integración Fase 4
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: taskQueryKey });
    },
  });

  // Mutación para borrado lógico (optimista)
  const deleteTask = useMutation({
    mutationFn: async (taskId: string) => {
      const res = await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Error al eliminar tarea');
    },
    onMutate: async (taskId: string) => {
      await queryClient.cancelQueries({ queryKey: taskQueryKey });
      const previousTasks = queryClient.getQueryData<TaskContract[]>(taskQueryKey);

      queryClient.setQueryData(taskQueryKey, (old: TaskContract[] = []) =>
        old.filter((t) => t.id !== taskId)
      );

      return { previousTasks };
    },
    onSuccess: () => {
      broadcast('TASKS_UPDATED');
    },
    onError: (err, _taskId, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(taskQueryKey, context.previousTasks);
      }
      console.error('Delete Error:', err);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: taskQueryKey });
    },
  });

  // Mutación para creación de tarea (optimista)
  const createTask = useMutation({
    mutationFn: async (newTask: Omit<TaskContract, 'id'>) => {
      const res = await fetch(`/api/tasks`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
      });
      if (!res.ok) throw new Error('Error al crear tarea');
      return res.json();
    },
    onMutate: async (newTask) => {
      await queryClient.cancelQueries({ queryKey: taskQueryKey });
      const previousTasks = queryClient.getQueryData<TaskContract[]>(taskQueryKey);

      queryClient.setQueryData(taskQueryKey, (old: TaskContract[] = []) => [
        ...old,
        { ...newTask, id: 'temp-id' } as TaskContract,
      ]);

      return { previousTasks };
    },
    onSuccess: () => {
      broadcast('TASKS_UPDATED');
    },
    onError: (err, _task, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(taskQueryKey, context.previousTasks);
      }
      console.error('Create Error:', err);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: taskQueryKey });
    },
  });

  return { tasks, toggleTask, deleteTask, createTask };
}
