import { CollectionAfterDeleteHook } from 'payload';

export const afterDeleteGuest: CollectionAfterDeleteHook = async ({ req, id }) => {
  const { payload } = req;
  
  // Eliminar tareas asociadas
  await payload.delete({
    collection: 'tasks',
    where: {
      guestId: {
        equals: id,
      },
    },
  });

  // Eliminar logs asociados
  await payload.delete({
    collection: 'task-logs',
    where: {
      guestId: {
        equals: id,
      },
    },
  });
};

export const afterDeleteTaskCascade: CollectionAfterDeleteHook = async ({ req, id }) => {
  const { payload } = req;

  // Eliminar logs de la tarea
  await payload.delete({
    collection: 'task-logs',
    where: {
      taskId: {
        equals: id,
      },
    },
  });
};
