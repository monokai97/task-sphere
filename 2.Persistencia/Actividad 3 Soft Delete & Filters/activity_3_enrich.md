# Activity Report: Soft Delete & Filters (activity_3_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Implementar la lógica de borrado lógico (Soft Delete) y los mecanismos de filtrado global (Access Control) en PayloadCMS para garantizar que los usuarios solo vean sus propias tareas activas y que los datos eliminados no se pierdan permanentemente.
**Archivos Involucrados:** `src/collections/Tasks.ts`, `src/collections/GuestSessions.ts`.

## Desglose de Hitos

### Hito 1: Implementación de Soft Delete
- **Descripción:** Configuración del campo `isDeleted` en la colección `Tasks` e implementación de un hook `beforeDelete` que intercepte la eliminación física y la transforme en una actualización de estado.
- **Verificación:** Al intentar eliminar una tarea desde el panel admin, esta debe permanecer en la base de datos con `isDeleted: true`.

### Hito 2: Filtros de Acceso Global
- **Descripción:** Implementación de funciones de `Access Control` en PayloadCMS para filtrar automáticamente las tareas por `guestId` (aislamiento) y `isDeleted: false` (visibilidad) en todas las operaciones de lectura.
- **Verificación:** Las consultas al Local API o REST API no deben devolver tareas de otros invitados ni tareas marcadas como eliminadas.

### Hito 3: Política de Borrado en Cascada
- **Descripción:** Configuración de la lógica de limpieza profunda para cuando una `GuestSession` es eliminada físicamente (ej. por el GC). Asegurar que todas las tareas (incluyendo las soft-deleted) y logs asociados se eliminen de SQLite.
- **Verificación:** La eliminación de un registro en `GuestSessions` debe disparar el borrado de todas sus tareas vinculadas en la base de datos.

## Justificación Técnica
Este desglose garantiza la seguridad y la higiene de los datos sin comprometer la UX. Al centralizar los filtros en la capa de `Access Control` de Payload, eliminamos la posibilidad de fugas de datos accidentales en el frontend. La implementación de Soft Delete permite auditorías posteriores o recuperación de datos si fuera necesario, cumpliendo con los estándares empresariales del diseño técnico.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 Implementación de Soft Delete
- [ ] Hito 2 Filtros de Acceso Global
- [ ] Hito 3 Política de Borrado en Cascada
