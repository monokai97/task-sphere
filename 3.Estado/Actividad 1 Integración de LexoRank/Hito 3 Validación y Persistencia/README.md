# LexoRank: Validation & Persistence (Phase 3, Activity 1, Hito 3)

This milestone finalizes the LexoRank integration by implementing proactive validation hooks to ensure data integrity.

## Implementation Details
- **Location:** `src/collections/Tasks.ts`
- **Hook:** `beforeChange`
- **Logic:**
  - Before a `Tasks` document is created or updated, the system triggers the `beforeChangeTask` hook.
  - The hook validates the `position` field using `isValidLexoRank` from `src/lib/lexo.ts`.
  - If the rank string is malformed or invalid, the operation is rejected, preventing invalid sorting data from reaching the database.

## Architectural Benefits
- **Defensive Programming:** Moves LexoRank validation to the Data Layer, ensuring the database remains in a consistent state regardless of the client-side implementation.
- **Fail-Fast:** Detects invalid ranks immediately at the API level.

## Maintenance
- **Types:** Regenerated automatically using `npm run payload generate:types`.
- **Consistency:** The LexoRank validation is now part of the task lifecycle, making it mandatory for all future task mutations.
