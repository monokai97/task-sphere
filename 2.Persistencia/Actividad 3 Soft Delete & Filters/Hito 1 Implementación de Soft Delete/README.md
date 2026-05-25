# Soft Delete Implementation (Phase 2, Activity 3, Hito 1)

This milestone implements a soft delete mechanism for the `Tasks` collection.

## Implementation Details
- **Access Control:** `delete: false` has been set in `src/collections/Tasks.ts`, preventing accidental physical removal of records.
- **Service Layer:** Created `src/lib/tasks.ts` which exports `softDeleteTask(taskId)`. This service utilizes the Payload Local API to update `isDeleted: true` on the target document.
- **Audit Integration:** Because the soft delete operation is now an `update` operation (`isDeleted: true`), the existing `afterChange` hook automatically logs this change as an `UPDATE` operation, maintaining a perfect audit trail.

## Architectural Benefits
- **Safety:** Prevents permanent data loss.
- **Simplicity:** Leverages existing audit hooks without complex logic.
- **Auditability:** Every soft delete is recorded with a clear timestamp and state transition, allowing for administrative rollback.
