# Specs: Implementación de Soft Delete (Hito 2.3.1)

## Requisitos Técnicos
- **Campo de Estado:** Añadir `isDeleted` (checkbox) a la colección `Tasks`.
- **Intercepción:** Implementar un hook `beforeDelete` en la colección `Tasks`.
- **Lógica de Hook:** Si se intenta eliminar un registro, el hook debe actualizar `isDeleted` a `true` y abortar la eliminación física lanzando un error controlado o devolviendo un flag que Payload interprete para detener la operación.

## Escenarios de Aceptación

### Escenario 1: Borrado desde el Panel Admin
**Given** una tarea activa (`isDeleted: false`)
**When** el administrador haga clic en el botón "Eliminar" del panel de Payload
**Then** la tarea debe permanecer en la lista de la base de datos
**And** su estado debe cambiar automáticamente a `isDeleted: true`.

### Escenario 2: Persistencia del Registro
**Given** una tarea marcada como `isDeleted: true`
**When** se realice una consulta directa a la tabla `tasks` en SQLite
**Then** el registro debe seguir existiendo físicamente en el archivo de base de datos.

### Escenario 3: Notificación de Auditoría
**Given** el proceso de soft delete exitoso
**When** se complete la operación
**Then** se debe disparar el log de auditoría correspondiente con la operación 'DELETE' (integración con Actividad 2).
