# Tasks: Rollback & Error Handling (Hito 3.2.3)

1. [ ] Actualizar el hook `useToggleTask` en `src/hooks/useTasks.ts` añadiendo el callback `onError`.
2. [ ] Implementar la lógica de restauración de caché en `useToggleTask` usando el parámetro `context`.
3. [ ] Añadir el callback `onSettled` para invalidar la query de tareas.
4. [ ] Repetir el proceso para el hook `useDeleteTask`, asegurando que la tarea "reaparezca" si el borrado falla.
5. [ ] Implementar el manejo de errores para `useUpdatePosition` (reordenamiento), devolviendo la tarea a su lugar original si SQLite falla.
6. [ ] Integrar la llamada a `toast.error` (usando una interfaz de notificaciones base para la Fase 4).
7. [ ] Validar que las mutaciones optimistas no causan "loops" de refetch si se encadenan múltiples errores.
