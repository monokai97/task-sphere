# Activity Report: Garbage Collection (Mantenimiento) (activity_3_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Implementar un proceso automatizado de mantenimiento para identificar y eliminar sesiones de invitados inactivas, junto con sus tareas y registros de auditoría asociados, con el fin de optimizar el rendimiento de SQLite y el uso de disco.
**Archivos Involucrados:** `src/lib/maintenance.ts`, `src/app/api/maintenance/gc/route.ts`, `src/collections/GuestSessions.ts`.

## Desglose de Hitos

### Hito 1: Identificación de Sesiones Inactivas
- **Descripción:** Desarrollo de la lógica de consulta utilizando el Local API de PayloadCMS para filtrar `GuestSessions` cuya fecha de última actividad (`lastActive`) sea superior a 7 días respecto al momento actual.
- **Verificación:** Ejecución de la lógica en un entorno controlado y confirmación de que la lista de IDs identificados corresponde estrictamente a las sesiones expiradas.

### Hito 2: Ejecución de Limpieza en Cascada
- **Descripción:** Implementación del borrado físico de las sesiones identificadas. Gracias a la relación `onDelete: Cascade` definida en los esquemas, este proceso debe eliminar automáticamente todas las tareas y logs vinculados en SQLite.
- **Verificación:** Tras borrar una sesión de prueba, se debe comprobar que no queden registros huérfanos en las colecciones `Tasks` ni `TaskLogs`.

### Hito 3: Integración del Flujo de Mantenimiento
- **Descripción:** Creación de una API Route protegida que sirva como trigger para el proceso de Garbage Collection. Este endpoint podrá ser invocado por una tarea programada (cron) o manualmente desde el panel de administración.
- **Verificación:** Llamada exitosa al endpoint y recepción de un reporte JSON con el número de sesiones y registros eliminados.

## Justificación Técnica
Este desglose garantiza que la aplicación sea sostenible a largo plazo. Al automatizar la limpieza en el Hito 2 mediante cascada nativa, reducimos el riesgo de inconsistencias en la base de datos. La exposición del proceso vía API (Hito 3) permite una integración flexible con herramientas de orquestación de servidor, cumpliendo con la política de "GC de Sesiones" detallada en el diseño técnico.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 Identificación de Sesiones Inactivas
- [ ] Hito 2 Ejecución de Limpieza en Cascada
- [ ] Hito 3 Integración del Flujo de Mantenimiento
