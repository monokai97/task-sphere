# Phase 2 Report: Persistencia y Esquemas (phase_2_enrich_phase.md)

## Resumen de la Fase
**Objetivo:** Definir la estructura de datos robusta y los contratos de persistencia utilizando el adaptador nativo de PayloadCMS (Drizzle/SQLite), asegurando la integridad, trazabilidad y aislamiento de los datos del invitado.

## Listado de Actividades

### Actividad 1: Modelado de Colecciones
**Descripción:** Definición técnica de los esquemas de datos en PayloadCMS.
**Objetivo:** Establecer las entidades base y sus relaciones para soportar el flujo de la aplicación.
- **Hito 1:** Implementación de la colección `GuestSessions` con UUID persistente.
- **Hito 2:** Implementación de la colección `Tasks` con campos de título, completado y el índice `position` para LexoRank.
- **Hito 3:** Implementación de la colección `TaskLogs` para el registro histórico de operaciones.

### Actividad 2: Hooks de Auditoría
**Descripción:** Automatización del registro de cambios mediante el ciclo de vida de PayloadCMS.
**Objetivo:** Garantizar que cada mutación sobre las tareas genere un registro de auditoría transparente.
- **Hito 1:** Implementación de hooks `afterChange` en `Tasks` para capturar creaciones y actualizaciones.
- **Hito 2:** Implementación de hooks `afterDelete` en `Tasks` para el registro de eliminaciones físicas.
- **Hito 3:** Lógica de generación de "diffs" y almacenamiento estructurado en `TaskLogs`.

### Actividad 3: Soft Delete & Filters
**Descripción:** Gestión de visibilidad y ciclo de vida de los registros.
**Objetivo:** Implementar la lógica de borrado lógico y aislamiento estricto por `guestId`.
- **Hito 1:** Configuración del campo `isDeleted` y lógica de interceptación en el borrado.
- **Hito 2:** Implementación de filtros globales (Access Control) para excluir tareas marcadas como eliminadas.
- **Hito 3:** Configuración de la política de borrado en cascada (Cascading Delete) para sesiones expiradas.

## Justificación Técnica
Este desglose asegura que la capa de datos sea el "único origen de la verdad". Al utilizar hooks nativos de PayloadCMS, garantizamos que la lógica de auditoría y filtrado sea aplicada de forma consistente independientemente de si la operación viene del Local API o de una API Route externa, cumpliendo con la guardia de "No Direct SQLite" definida en `design.md`.
