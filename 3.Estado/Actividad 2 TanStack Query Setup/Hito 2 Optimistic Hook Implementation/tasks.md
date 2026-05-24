# Tasks: Optimistic Hook Implementation (Hito 3.2.2)

1. [ ] Crear el archivo `src/hooks/useTasks.ts`.
2. [ ] Implementar el query `getTasks` utilizando el `guestId` de la sesión actual.
3. [ ] Implementar la mutación `useToggleTask` con lógica `onMutate`:
    - Cancelar queries pendientes de tareas.
    - Realizar snapshot del estado previo.
    - Actualizar el caché localmente cambiando el booleano `completed`.
4. [ ] Implementar la mutación `useDeleteTask` con lógica `onMutate`:
    - Capturar snapshot.
    - Filtrar la tarea del array en el caché para que desaparezca visualmente.
5. [ ] Implementar la mutación `useUpdatePosition` integrando los strings de `LexoRank` calculados en la Actividad 1.
6. [ ] Asegurar que las mutaciones retornen el objeto de contexto `{ previousTasks }` para el manejo de errores futuro.
7. [ ] Exportar los hooks para su integración en los componentes de UI de la Fase 4.
