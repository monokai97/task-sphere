# Specs: Evento en Toggle (Hito 3.3.2.1)

## Escenarios de Aceptación

### Escenario 1: Emisión tras Toggle
**Given** una tarea con `completed: false`
**When** el usuario haga clic para completarla
**Then** se debe emitir un evento `{ type: 'TASKS_UPDATED', guestId: '...' }` a través del canal `todo_sync`.

### Escenario 2: Emisión en Rollback (Negativa)
**Given** un fallo al completar la tarea
**When** la mutación optimista sufra un rollback
**Then** el sistema NO debe emitir un evento de actualización, evitando innecesarias recargas en otras pestañas.
