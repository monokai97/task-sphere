# Specs: Persistencia en TaskLogs (Hito 2.2.3)

## Requisitos Técnicos
- **Entidad Destino:** Colección `task-logs` en PayloadCMS.
- **Relaciones Obligatorias:** Cada log debe estar vinculado a una `task` y a un `guest`.
- **Campos a Persistir:**
    - `operation`: Tipo de cambio (CREATE, UPDATE, DELETE, TOGGLE).
    - `diff`: Objeto JSON con los cambios detectados (calculado en el Hito 2).
    - `timestamp`: Fecha y hora exacta del evento.
- **Validación:** El log solo debe crearse si el diferencial (`diff`) no es nulo o vacío (excepto en creaciones y eliminaciones).

## Escenarios de Aceptación

### Escenario 1: Persistencia de Creación
**Given** un nuevo registro de tarea exitoso
**When** el hook `afterChange` procese la operación
**Then** se debe insertar un registro en `TaskLogs` con `operation: 'CREATE'`, el ID de la tarea, el ID del invitado y el objeto completo como estado inicial.

### Escenario 2: Persistencia de Actualización con Diferencial
**Given** una actualización de tarea que modifica el título
**When** la utilidad de diff genere el delta `{ "title": "Nuevo Nombre" }`
**Then** el sistema debe crear un registro en `TaskLogs` con dicho JSON y la relación correcta.

### Escenario 3: Omisión de Logs Vacíos
**Given** una actualización de sistema que no cambia campos de negocio
**When** el diferencial resultante sea `null`
**Then** el sistema NO debe insertar ninguna entrada en `TaskLogs`, optimizando el espacio en base de datos.
