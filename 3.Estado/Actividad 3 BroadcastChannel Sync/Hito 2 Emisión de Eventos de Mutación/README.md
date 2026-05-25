# Documentación del Hito: Emisión de Eventos de Mutación (Hito 3.3.2)

## Resumen
Se ha integrado el sistema de sincronización entre pestañas (`BroadcastChannel`) en el hook `useTasks.ts` para asegurar que las mutaciones (crear, alternar y borrar tareas) invaliden la caché de otras pestañas activas del mismo invitado.

## Cambios Implementados
- **Hook `useSync.ts`:** Se utiliza como canal base.
- **Hook `useTasks.ts`:**
  - Se importa y se utiliza `useSync` para obtener la función `broadcast`.
  - Se añade `onSuccess` en `toggleTask`, `deleteTask` y `createTask` que invoca `broadcast('TASKS_UPDATED')`.
  - Se garantiza que el `guestId` sea el identificador para filtrar los eventos de sincronización a través del canal `todo_sync`.

## Uso
El sistema es automático. Al realizar una mutación desde cualquier componente que utilice `useTasks(guestId)`, el evento se propaga automáticamente, forzando a otras pestañas a ejecutar `queryClient.invalidateQueries` para mantener la UI sincronizada.
