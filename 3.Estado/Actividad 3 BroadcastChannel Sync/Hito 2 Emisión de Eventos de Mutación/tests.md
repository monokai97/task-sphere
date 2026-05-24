# Tests: Emisión de Eventos de Mutación (Hito 3.3.2)

## Estrategia de Pruebas
Validaremos que la lógica de emisión se dispara correctamente tras las mutaciones.

### Pruebas de Integración
- [ ] **Event Triggering:** Realizar un `toggleTask` y verificar en la consola de la pestaña actual que se ha llamado a la función de broadcast.
- [ ] **Payload Validation:** Verificar que el payload del mensaje contiene el `type` y el `guestId` correctos.

### Pruebas de UX
- [ ] **Silent Emit:** Confirmar que la emisión del evento no genera logs innecesarios o parpadeos en la UI.
- [ ] **Success Hook Integrity:** Verificar que el evento se emite *solo* si el servidor respondió correctamente (200 OK).
