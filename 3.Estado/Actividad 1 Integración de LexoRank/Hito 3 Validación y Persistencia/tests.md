# Tests: Validación y Persistencia (Hito 3.1.3)

## Estrategia de Pruebas
Se realizarán pruebas de integración para asegurar que el servidor actúa como guardián de la integridad del orden.

### Pruebas de Validación (API)
- [ ] **Valid Position PATCH:** Enviar una posición válida y verificar respuesta 200 OK.
- [ ] **Invalid Characters PATCH:** Enviar una posición con símbolos (ej. "@") y verificar respuesta 400 Bad Request.
- [ ] **Empty Position PATCH:** Enviar un string vacío y verificar rechazo.

### Pruebas de Seguridad (Multi-tenant)
- [ ] **Unauthorized Position Update:** Intentar cambiar la posición de una tarea de otro invitado enviando un `guestId` diferente en la cookie. Verificar que el servidor bloquea la operación.

### Verificación de Auditoría
- [ ] **Position Trace:** Realizar un movimiento exitoso y verificar en la colección `TaskLogs` que el campo `diff` contiene la nueva posición persistida.
