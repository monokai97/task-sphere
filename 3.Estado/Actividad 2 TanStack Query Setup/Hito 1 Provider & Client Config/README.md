# TanStack Query Setup (Phase 3, Activity 2, Hito 1)

This milestone establishes the infrastructure for client-side state management using TanStack Query.

## Configuration Details
- **QueryClient (`src/lib/query-client.ts`):** Configured with:
  - **Retry Policy:** Smart retry logic to handle `SQLITE_BUSY` errors automatically up to 3 times, ensuring stability with the file-based SQLite database.
  - **StaleTime:** Set to 5 seconds to reduce unnecessary network requests for frequently accessed task data.
- **Provider Wrapper (`src/app/providers.tsx`):**
  - Uses `QueryClientProvider` to inject the client into the React tree.
  - Integrates `ReactQueryDevtools` for easy debugging in development.
- **Integration:** Registered in `src/app/layout.tsx` to wrap the root application layout.

## Benefits
- **Resilience:** The custom retry policy makes the UI resistant to minor database lock issues (common in SQLite).
- **Performance:** Efficient caching with `staleTime` improves the overall responsiveness of the dashboard.
- **Tooling:** DevTools support significantly accelerates the debugging of network/state-related issues.
