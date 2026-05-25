# Data Integrity: Cascade Delete Policy (Phase 2, Activity 3, Hito 3)

This milestone formalizes the cascading deletion policy for the application's core data models.

## Policy Details
- **Referential Integrity:** Enforced at the application level via PayloadCMS `beforeDelete` hooks.
- **Cascade Mapping:**
  - `GuestSessions` delete -> triggers `tasks` cleanup (via `beforeDelete` hook).
  - `Tasks` delete -> triggers `task-logs` cleanup (via `beforeDelete` hook).
- **Configuration:** Field-level `onDelete: 'cascade'` configuration has been added to relationship fields to hint the DB schema generator, providing a secondary layer of referential integrity where supported by the Drizzle adapter.

## Architectural Benefits
- **Automated Cleanup:** Ensures the database remains performant by automatically purging dependent logs and tasks when a session is terminated.
- **Consistency:** Guarantees that the data footprint of an anonymous guest is fully removed if the session is hard-deleted (or during maintenance), protecting user privacy and preventing data bloating.

## Maintenance
- **Schema Validation:** The `npm run payload generate:db-schema` command must be run whenever relationship structures change to ensure database foreign key constraints are accurately updated.
- **Hooks:** All deletion logic is centralized in the collections' `hooks` properties for easy audit and debugging.
