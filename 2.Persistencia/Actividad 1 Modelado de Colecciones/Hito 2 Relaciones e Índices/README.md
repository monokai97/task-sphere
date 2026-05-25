# Data Integrity: Relations and Indices (Phase 2, Activity 1, Hito 2)

This milestone focuses on strengthening the data model by establishing formal relationships, optimizing queries with indices, and ensuring referential integrity through cascade deletes.

## Relationships Implemented

### 1. `Tasks` -> `GuestSessions`
- **Field:** `guest`
- **Type:** Relationship (One-to-Many).
- **Index:** `true` (Optimizes task retrieval per guest).
- **Integrity:** `afterDelete` hook in `GuestSessions` performs a cascade delete of all associated tasks.

### 2. `TaskLogs` -> `Tasks`
- **Field:** `task`
- **Type:** Relationship (Many-to-One).
- **Index:** `true` (Optimizes audit trail queries).
- **Integrity:** `afterDelete` hook in `Tasks` ensures that if a task is hard-deleted, its audit logs are also removed.

## Indices and Performance

### LexoRank Optimization
- **Collection:** `Tasks`
- **Field:** `position`
- **Index:** `true`
- **Purpose:** Enables extremely fast sorting and re-balancing of tasks for high-volume users.

### Soft Delete Support
- **Field:** `isDeleted`
- **Index:** Not explicitly indexed for now (Low cardinality), but monitored for future optimization in global filters.

## Referential Integrity (Hooks)
Since SQLite/Drizzle in PayloadCMS might have varying support for native `ON DELETE CASCADE` depending on configuration, we implemented **Application-Level Cascading** using Payload Hooks (`afterDelete`). This ensures that:
- Deleting a Guest Session wipes their data (Tasks).
- Hard-deleting a Task wipes its history (Logs).
