# Rollback & Error Handling (Phase 3, Activity 2, Hito 3)

This milestone introduces robust error recovery patterns to the application state management, ensuring that UI state remains consistent with the server source-of-truth.

## Implementation Details
- **Location:** `src/hooks/useTasks.ts`
- **Pattern:** Integration of `onError` and `onSettled` hooks in TanStack Query mutations.
- **Rollback Logic:**
  - `onError`: If a mutation fails (e.g., API server error), the context returned from `onMutate` (containing the snapshot of `previousTasks`) is used to restore the cache, ensuring the UI "undoes" the erroneous optimistic update.
- **Synchronization:**
  - `onSettled`: After any mutation (success or failure), the task list is re-fetched to verify state and clear cache staleness.

## Architectural Benefits
- **Consistency:** Ensures that the UI never displays an invalid state, regardless of network or backend errors.
- **Graceful Degradation:** Provides a path for handling failures (logs, user feedback via toasts) without hard application crashes.

## Maintenance
- **Error Propagation:** All mutations now check for `res.ok`, ensuring that non-200 HTTP responses correctly trigger the rollback logic.
- **Future Integration:** Ready for `sonner` toast integration in Phase 4 for user-facing feedback.
