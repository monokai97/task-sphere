# Specs: Filtros de Acceso Global (Hito 2.3.2)

## Requisitos Técnicos
- **Motor:** PayloadCMS Access Control functions.
- **Contexto:** Acceso al objeto `req.user` o `req.session` para extraer el `guestId`.
- **Lógica de Lectura (`read`):** 
    - `guest` debe ser igual al `guestId` del usuario actual.
    - `isDeleted` debe ser igual a `false`.
- **Lógica de Escritura (`update`/`delete`):** 
    - Solo permitir si el registro pertenece al `guestId` actual.

## Escenarios de Aceptación

### Escenario 1: Aislamiento por Invitado
**Given** el Invitado A con 3 tareas y el Invitado B con 2 tareas
**When** el Invitado A realice una petición para listar sus tareas
**Then** el sistema debe devolver exactamente 3 tareas
**And** ninguna de ellas debe pertenecer al Invitado B.

### Escenario 2: Visibilidad de Soft Delete
**Given** una tarea marcada como `isDeleted: true`
**When** un usuario intente listar todas sus tareas activas
**Then** el sistema NO debe incluir la tarea eliminada en el resultado del API.

### Escenario 3: Seguridad en Edición
**Given** una tarea que pertenece al Invitado A
**When** el Invitado B intente actualizar el título de esa tarea mediante su ID
**Then** el sistema debe rechazar la operación con un error de "Acceso Denegado" (403).
