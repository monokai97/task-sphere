# Activity Report: Hooks de Auditoría (activity_2_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Implementar hooks de ciclo de vida en la colección `Tasks` de PayloadCMS para registrar automáticamente todas las mutaciones (creación, actualización, eliminación) en la colección `TaskLogs`.
**Archivos Involucrados:** `src/collections/Tasks.ts`, `src/collections/TaskLogs.ts`, `src/lib/audit.ts` (helpers).

## Desglose de Hitos

### Hito 1: Hooks de Captura (afterChange)
- **Descripción:** Implementación del hook `afterChange` en la colección `Tasks` para detectar si la operación es una creación o actualización y preparar los datos para el log.
- **Verificación:** Log en consola que muestre el objeto de tarea procesado tras una mutación en el panel admin.

### Hito 2: Lógica de Diferenciales (Diff)
- **Descripción:** Creación de una utilidad para comparar el estado anterior y el nuevo de la tarea, generando un objeto JSON que represente solo los campos cambiados.
- **Verificación:** Prueba unitaria de la función de diff con casos de prueba de actualización de título y toggle de estado.

### Hito 3: Persistencia en TaskLogs
- **Descripción:** Integración de la llamada al Local API de PayloadCMS dentro de los hooks para insertar el registro de auditoría final en `TaskLogs`.
- **Verificación:** Creación automática de un registro en `TaskLogs` tras realizar cualquier cambio en una tarea, verificando que el `diff` y el `guestId` sean correctos.

## Justificación Técnica
Este desglose asegura la trazabilidad sin afectar el rendimiento de la mutación principal. Al utilizar hooks `afterChange`, la auditoría se ejecuta de forma asíncrona respecto a la respuesta al cliente, cumpliendo con el objetivo de latencia <100ms. Además, centralizar la lógica de `diff` en una utilidad externa facilita su mantenimiento y pruebas.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 Hooks de Captura (afterChange)
- [ ] Hito 2 Lógica de Diferenciales (Diff)
- [ ] Hito 3 Persistencia en TaskLogs
