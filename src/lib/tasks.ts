import { getPayloadClient } from './payload';

/**
 * Realiza un borrado lógico de una tarea.
 */
export async function softDeleteTask(taskId: string) {
  const payload = await getPayloadClient();
  
  return await payload.update({
    collection: 'tasks',
    id: taskId,
    data: {
      isDeleted: true,
    },
  });
}
