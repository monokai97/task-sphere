# Optimistic Hooks: TanStack Query (Phase 3, Activity 2, Hito 2)

This milestone provides the UI layer with responsive, optimistic data manipulation hooks for task management.

## Implementation Details
- **Location:** `src/hooks/useTasks.ts`
- **Pattern:** Uses TanStack Query's `onMutate`, `onError`, and `onSettled` cycle.
- **Optimistic Logic:**
  - **`onMutate`**: Immediately updates the local query cache with the predicted result, allowing the UI to reflect changes before the server confirms.
  - **`onError`**: If the server mutation fails, the cache is automatically rolled back to the previous snapshot (`previousTasks`).
  - **`onSettled`**: Triggers a re-fetch to ensure the local cache remains in sync with the source of truth (the database).

## Architectural Benefits
- **Perceived Performance:** Elimina esperas de red para acciones frecuentes (borrado, marcado como completado), cumpliendo con el objetivo de latencia de UI ultra-rápida.
- **Data Integrity:** La estrategia de rollback asegura que el estado local de la aplicación nunca se desincronice permanentemente de los datos reales del servidor en caso de errores de red o servidor.

## Maintenance
- **Queries:** Linked to `guestId`, ensuring that each guest session manages only their own task cache.
- **Extensibility:** The pattern can be reused for other task mutations, such as updating descriptions or reordering positions.
