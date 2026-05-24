 # Tasks: Evento en Delete (Hito 3.3.2.2)
      2
      3 1. [ ] Localizar `useDeleteTask` en `src/hooks/useTasks.ts`.
      4 2. [ ] Añadir `onSuccess` al objeto de configuración de
        `useMutation`.
      5 3. [ ] Implementar la llamada a `broadcast({ type: 'TASKS_UPDATED',
        guestId, deletedTaskId: id })`.
      6 4. [ ] Validar que la emisión del evento ocurra únicamente tras el
        éxito del API.
      7 5. [ ] Asegurar que el componente receptor en `useSync` maneja el
        payload completo del evento.