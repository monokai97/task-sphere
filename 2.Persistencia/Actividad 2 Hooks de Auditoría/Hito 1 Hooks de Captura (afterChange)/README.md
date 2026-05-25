# Hooks de Auditoría: Documentación Técnica

Este documento detalla la implementación de los ganchos (hooks) de PayloadCMS utilizados para alimentar el sistema de auditoría del sistema de tareas.

## Hook: `afterChangeTask`
- **Ubicación:** `src/collections/Tasks.ts`
- **Disparador:** Se ejecuta después de cualquier operación `create` o `update` en la colección `tasks`.
- **Propósito:**
  - Capturar automáticamente los cambios realizados en una tarea.
  - Generar un diferencial (`diff`) entre el estado anterior y el nuevo para las actualizaciones.
  - Persistir el evento de auditoría en la colección `task-logs`.

### Funcionamiento interno:
1. **Identificación:** Obtiene el `taskId` y vincula el `guestId` correctamente, manejando la población automática de relaciones de Payload.
2. **Diferencial (Diffing):** En caso de actualizaciones, compara el `doc` (nuevo) con el `previousDoc` (anterior) para registrar únicamente los campos que han cambiado.
3. **Persistencia:** Crea una entrada en la colección `task-logs` con la operación (`CREATE` o `UPDATE`), el objeto `diff` resultante y el timestamp.

## Beneficios
- **Visibilidad:** El equipo de QA y soporte puede rastrear el historial de cambios de cualquier tarea.
- **Auditoría:** Garantiza la integridad histórica de los datos, cumpliendo con los requisitos de la Fase 2 del roadmap.
