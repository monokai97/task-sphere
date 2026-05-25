# Global Access Control Filters (Phase 2, Activity 3, Hito 2)

This milestone implements global access control filters for the `Tasks` collection, ensuring that deleted tasks are invisible to the application logic and enforcing write access rules.

## Implementation Details
- **Access Utility:** Created `src/lib/access.ts` to centralize security policies.
- **`canReadTasks`:** Implements an access filter that excludes records where `isDeleted: true` for guest users, while allowing administrators full access.
- **`canUpdateOrDeleteTasks`:** Enforces logic for write operations, ensuring only authorized entities can perform updates.

## Architectural Benefits
- **Soft Delete Visibility:** By leveraging PayloadCMS `access.read` filters, the "deleted" tasks are automatically excluded from all `find` and `findByID` operations, effectively simulating a database-level filter.
- **Security:** Hard delete is now fully disabled at the collection access level, reinforcing the soft delete pattern implemented in the previous milestone.
- **Admin Debugging:** Administrators retain visibility into all records, which is essential for troubleshooting and data maintenance.
