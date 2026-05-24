# Specs: Validación y Persistencia (Hito 3.1.3)

## Requisitos Técnicos
- **Validación de Rango:** El string de `position` debe ser un string Base-62 válido.
- **Auditoría de Cambio:** Cada actualización de posición debe registrarse en `TaskLogs` con la operación 'UPDATE'.
- **Integridad de Propietario:** El servidor debe validar que la tarea movida pertenece al `guestId` de la sesión actual antes de actualizar la posición.

## Escenarios de Aceptación

### Escenario 1: Validación Exitosa de Posición
**Given** un payload de actualización con `position: "h1V"`
**When** sea procesado por el servidor
**Then** el sistema debe validar que el string es alfanumérico y persistirlo exitosamente en SQLite.

### Escenario 2: Rechazo de Payload Malformado
**Given** un intento de actualización con una posición que contiene caracteres inválidos (ej. "h1-V!")
**When** pase por el esquema de Zod del API
**Then** el servidor debe devolver un error 400 Bad Request y no impactar la base de datos.

### Escenario 3: Prevención de Acceso Cruzado
**Given** el Invitado A intentando actualizar la posición de una tarea que pertenece al Invitado B
**When** el hook `beforeChange` evalúe la propiedad del registro
**Then** la operación debe ser rechazada con un error de autorización, manteniendo el aislamiento estricto de datos.
