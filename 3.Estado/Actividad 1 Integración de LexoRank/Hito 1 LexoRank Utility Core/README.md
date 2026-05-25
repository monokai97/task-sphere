# LexoRank Utility (Phase 3, Activity 1, Hito 1)

This milestone implements a wrapper for the `lexorank` library to provide a safe and consistent interface for lexicographical sorting of tasks.

## Utility: `src/lib/lexo.ts`
- **Purpose:** Centralize LexoRank operations, abstracting the library-specific parsing and rank generation logic.
- **Key Functions:**
  - `generateInitial()`: Returns a rank in the middle of the available range.
  - `generateBetween(prev, next)`: Calculates a rank between two existing values, handling start/end bounds.
  - `isValidLexoRank(rank)`: Validates format.

## Architectural Benefits
- **Performance:** LexoRank allows reordering items in a list without updating the position field of all subsequent items.
- **Consistency:** By standardizing this in a library, the logic is identical whether executed in a React client component or a PayloadCMS server hook.
- **Type Safety:** The utility is fully typed and handles potential library parsing errors.

## Maintenance
- **Dependencies:** Uses `lexorank` package.
- **Usage:** Should be utilized whenever a task is created, updated, or reordered.
