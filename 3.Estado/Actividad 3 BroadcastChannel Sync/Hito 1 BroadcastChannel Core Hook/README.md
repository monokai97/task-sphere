# BroadcastChannel Sync (Phase 3, Activity 3, Hito 1)

This milestone implements the real-time cross-tab synchronization mechanism to ensure that all open browser tabs share a consistent state.

## Implementation Details
- **Location:** `src/hooks/useSync.ts`
- **Mechanism:** Uses the browser native `BroadcastChannel` API.
- **Protocol:**
  - **Broadcast:** Emits `TASK_UPDATED` events via `broadcast('TASK_UPDATED')` whenever a mutation occurs in TanStack Query.
  - **Subscription:** Listens for `TASK_UPDATED` messages and invalidates the `['tasks', guestId]` query key, triggering an automatic refetch.

## Architectural Benefits
- **Multi-Tab Consistency:** Users working with multiple tabs (e.g., dashboard + task list) will see updates reflected immediately in all windows without manual refreshes.
- **Performance:** Synchronization is lightweight, using browser-native event buses rather than polling the server for state changes.
- **Encapsulation:** The hook filters out messages that do not belong to the current `guestId`, preventing cross-guest state interference.

## Usage
Import and use the `useSync` hook within the main dashboard components:
```typescript
const { broadcast } = useSync(guestId);
// After a successful mutation:
broadcast('TASK_UPDATED');
```
