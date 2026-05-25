# TaskLogs: Persistencia en Auditoría

Esta funcionalidad completa la Fase 2, Actividad 2, permitiendo la persistencia real de los eventos capturados por los hooks de auditoría en la base de datos (SQLite).

## Implementación
- **Ubicación:** `src/collections/Tasks.ts`
- **Mecanismo:** El hook `afterChangeTask` ahora integra la creación de documentos en la colección `task-logs` utilizando el Local API de Payload.

### Características
1. **Atomicidad:** La creación del log ocurre dentro del ciclo de vida de la mutación de la tarea.
2. **Resiliencia (Fail-Silent):** Toda la lógica de persistencia está envuelta en un bloque `try/catch`. Si por algún motivo la inserción del log falla (ej. error de base de datos), el log se imprime en consola (`console.error`), pero **no se interrumpe la operación de la tarea original**. Esto protege la experiencia del usuario final ante errores de infraestructura no críticos.
3. **Mapeo de Operaciones:** Mapea directamente el `operation` recibido de Payload (`create`, `update`) a los estados auditables configurados en la colección `TaskLogs`.

## Beneficios
- **Auditabilidad Total:** El sistema ahora cuenta con un histórico permanente de cambios.
- **Transparencia:** Permite reconstruir cualquier estado de la tarea en el tiempo mediante la suma de los diferenciales (`diff`) registrados.
- **Mantenibilidad:** El código cumple con las mejores prácticas al aislar la lógica de efectos secundarios (hooks) del flujo de datos principal.
