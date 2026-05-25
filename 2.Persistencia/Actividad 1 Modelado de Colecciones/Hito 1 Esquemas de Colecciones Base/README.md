# Data Model: Persistence Layer (Phase 2, Activity 1)

This document describes the core collections implemented in PayloadCMS for the Enterprise Guest-First To-Do App.

## Collections Overview

### 1. GuestSessions (`guest-sessions`)
- **Purpose:** Manages anonymous user sessions.
- **Fields:**
  - `id`: Manual UUID from the session cookie.
  - `lastActive`: Tracks when the user was last active.
  - `createdAt/updatedAt`: Automatic timestamps.
- **Admin Group:** Security.

### 2. Tasks (`tasks`)
- **Purpose:** Stores the to-do items for each guest.
- **Fields:**
  - `title`: Task name (min 3 chars).
  - `description`: Optional notes.
  - `completed`: Boolean status.
  - `position`: LexoRank string for drag-and-drop ordering.
  - `guest`: Relationship to `guest-sessions`.
  - `isDeleted`: Boolean flag for Soft Delete.
- **Admin Group:** Core.
- **Sorting:** Default sorted by `position`.

### 3. TaskLogs (`task-logs`)
- **Purpose:** Audit trail for task operations.
- **Fields:**
  - `task`: Relationship to the affected task.
  - `operation`: One of `CREATE`, `UPDATE`, `DELETE`, `TOGGLE`.
  - `diff`: JSON object storing the changes.
  - `timestamp`: Date of the operation.
- **Admin Group:** Audit.

## Implementation Details
- **Singleton Pattern:** Payload Local API is accessed via a singleton in `src/lib/payload.ts`.
- **Validation:** Zod-like validation in the CMS layer for field integrity.
- **Type Safety:** All collections are reflected in `src/payload-types.ts`.
