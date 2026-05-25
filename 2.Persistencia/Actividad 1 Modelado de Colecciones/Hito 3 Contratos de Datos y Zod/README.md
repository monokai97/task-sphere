# Data Contracts: Zod Validation (Phase 2, Activity 1, Hito 3)

This milestone establishes the formal data contracts used across the application to ensure type safety and data integrity between the API, the Database (Payload), and the UI.

## Validation Schemas

### 1. Tasks Validation (`src/lib/validation/tasks.ts`)
- **`taskBaseSchema`**: Defines the fundamental structure of a task.
  - `title`: String, trimmed, min 3, max 200 chars.
  - `description`: Optional string, trimmed.
  - `completed`: Boolean.
  - `position`: String (LexoRank), trimmed.
  - `guest`: Valid UUID string.
- **`createTaskSchema`**: Optimized for task creation (picks title, description, position, guest).
- **`updateTaskSchema`**: Optimized for partial updates.
- **`toggleTaskSchema`**: Specialized for status toggling.

### 2. Sessions Validation (`src/lib/validation/sessions.ts`)
- **`sessionSchema`**: Validates the guest session profile.
  - `guestId`: Valid UUID.
- **`sessionRecoverySchema`**: Validates the recovery payload.

## Sanitization Utilities
All schemas leverage Zod's built-in sanitization:
- **`.trim()`**: Removes whitespace from strings.
- **`.datetime()`**: Ensures valid ISO strings for dates.
- **`.uuid()`**: Enforces UUID format for identifiers.

## Inferred TypeScript Types
The following types are exported for use in TanStack Query hooks and API Route handlers:
- `CreateTaskInput`
- `UpdateTaskInput`
- `ToggleTaskInput`
- `SessionInput`

## Alignment with Persistence
These schemas are strictly aligned with the constraints defined in PayloadCMS collections (`Tasks.ts`, `GuestSessions.ts`), providing a double layer of validation (Client/API and Database).
