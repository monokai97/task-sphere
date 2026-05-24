# Specs: Evento en Create (Hito 3.3.2.3)

## Requisitos Técnicos
- **Trigger:** `onSuccess` de la mutación `useCreateTask`.
- **Payload del Mensaje:** `{ type: 'TASKS_UPDATED', guestId: string }`.
- **Comportamiento:** La recepción del evento debe invalidar la query `['tasks', guestId]` para asegurar que el refetch incluya la nueva tarea.

## Escenarios de Aceptación

### Escenario 1: Sincronización tras Creación
**Given** dos pestañas abiertas en el dashboard
**When** cree una nueva tarea en la Pestaña A
**Then** se debe emitir un evento `{ type: 'TASKS_UPDATED' }`
**And** la Pestaña B debe recibir el evento y actualizarse automáticamente para mostrar la nueva tarea creada.

### Escenario 2: Integridad en Fallo de Creación
**Given** que la petición de creación falla (ej. título vacío)
**When** se active el `onError` de la mutación
**Then** el sistema NO debe emitir el evento de actualización para evitar recargas innecesarias en otras pestañas.
