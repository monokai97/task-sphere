# Audit Utility: Diff Logic (Phase 2, Activity 2, Hito 2)

This milestone introduces a formal utility for calculating task differentials, ensuring the audit trail only logs meaningful changes.

## Utility: `getTaskDiff`
- **Location:** `src/lib/audit.ts`
- **Purpose:** Compares the state of a task before and after an update, extracting only the fields defined in `AUDITABLE_TASK_FIELDS`.

### Auditable Fields
Currently, the system tracks:
- `title`
- `description`
- `completed`
- `position`

System timestamps (`createdAt`, `updatedAt`) and metadata are automatically excluded to keep audit logs clean and relevant to business logic changes.

## Architectural Improvements
- **Decoupling:** The logic for "what changed" is now decoupled from the PayloadCMS Hook, making it easier to unit test and maintain.
- **Payload Integration:** The `Tasks.ts` collection now uses this utility in the `afterChange` hook, making the audit capture process more declarative and less prone to logic errors.
- **Consistency:** By standardizing the diff format, downstream features (like task history views) can reliably parse the audit trail.
