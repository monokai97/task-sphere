# Tasks: Evento en Create (Hito 3.3.2.3)

1. [ ] Localizar `useCreateTask` en `src/hooks/useTasks.ts`.
2. [ ] Añadir `onSuccess` al objeto de configuración de `useMutation`.
3. [ ] Implementar la llamada a `broadcast({ type: 'TASKS_UPDATED', guestId })` dentro del `onSuccess`.
4. [ ] Verificar que la lógica de invalidación en el listener (Hito 3, Actividad 3) está lista para manejar este tipo de evento.
5. [ ] Validar que el objeto de evento coincide con la interfaz global.
