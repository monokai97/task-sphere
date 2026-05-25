/**
 * Lista de campos que queremos auditar en las tareas.
 * Excluimos timestamps y otros metadatos internos de Payload.
 */
export const AUDITABLE_TASK_FIELDS = ['title', 'description', 'completed', 'position'];

/**
 * Calcula la diferencia entre dos documentos de tareas.
 */
export function getTaskDiff(
  previousDoc: Record<string, any>,
  doc: Record<string, any>
): Record<string, any> {
  const diff: Record<string, any> = {};

  for (const field of AUDITABLE_TASK_FIELDS) {
    const oldValue = previousDoc[field];
    const newValue = doc[field];

    // Comparamos los valores (manejando null/undefined)
    if (oldValue !== newValue) {
      diff[field] = newValue;
    }
  }

  return diff;
}
