# Tests: Evento en Create (Hito 3.3.2.3)

## Estrategia de Pruebas
Validaremos que la creación de tareas dispara la sincronización en pestañas pasivas.

### Pruebas de Integración
- [ ] **Event Triggering:** Crear una tarea y verificar mediante `broadcast` mock que el evento se emite.
- [ ] **Data Sync:** En una Pestaña B, confirmar mediante DevTools de TanStack Query que, tras la creación en la Pestaña A, la query `['tasks', guestId]` se marca como `fetching`.

### Verificación Administrativa
- [ ] **Consistent Payload:** Verificar que el payload del evento es recibido correctamente por los listeners registrados en otras pestañas.
