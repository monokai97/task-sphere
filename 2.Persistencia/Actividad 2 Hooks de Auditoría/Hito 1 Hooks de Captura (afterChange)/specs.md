# Specs: Hooks de Captura (afterChange) (Hito 2.2.1)

## Requisitos Técnicos
- **Hook:** `afterChange` de PayloadCMS en la colección `Tasks`.
- **Detección:** Debe distinguir entre la creación de un nuevo registro (`operation: 'create'`) y la actualización de uno existente (`operation: 'update'`).
- **Contexto:** Debe tener acceso al objeto `doc` (nuevo estado) y al objeto `previousDoc` (estado anterior).

## Escenarios de Aceptación

### Escenario 1: Captura de Creación
**Given** un usuario creando una nueva tarea
**When** la tarea se persista exitosamente en SQLite
**Then** el hook `afterChange` debe dispararse y recibir el objeto de la tarea con su nuevo ID y `operation: 'create'`.

### Escenario 2: Captura de Actualización
**Given** una tarea existente que cambia su estado de `completed: false` a `true`
**When** la actualización se confirme en la base de datos
**Then** el hook debe recibir tanto el objeto anterior (`completed: false`) como el nuevo (`completed: true`) para su posterior procesamiento.

### Escenario 3: Preparación de Datos de Auditoría
**Given** el disparo del hook
**When** se procesen los datos capturados
**Then** el sistema debe emitir un log interno (temporalmente en consola para este hito) con el `guestId`, `taskId` y el tipo de operación realizada.
