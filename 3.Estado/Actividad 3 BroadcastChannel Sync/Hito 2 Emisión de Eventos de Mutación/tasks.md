# Tasks: Emisión de Eventos de Mutación (Hito 3.3.2)

1. [ ] Importar la función `broadcast` desde `src/hooks/useSync.ts` dentro de `src/hooks/useTasks.ts`.
2. [ ] Localizar las mutaciones de `toggleTask`, `deleteTask` y `createTask`.
3. [ ] Añadir el callback `onSuccess` a cada una de estas mutaciones.
4. [ ] Implementar la llamada a `broadcast({ type: 'TASKS_UPDATED', guestId })` dentro del `onSuccess`.
5. [ ] Asegurar que el `guestId` esté disponible en el hook `useTasks` para enviarlo en el payload.
6. [ ] Validar que el mensaje cumple con la interfaz `SyncEvent`.
7. [ ] Realizar una prueba visual enviando un log al realizar las acciones de tarea.
