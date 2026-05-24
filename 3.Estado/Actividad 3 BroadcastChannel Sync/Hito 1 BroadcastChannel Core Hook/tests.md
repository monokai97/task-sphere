# Tests: BroadcastChannel Sync (Hito 3.3.1)

## Estrategia de Pruebas
Dado que `BroadcastChannel` opera entre contextos, las pruebas requerirán la simulación de múltiples instancias o validación de la lógica interna del hook.

### Pruebas Unitarias
- [ ] **Instance Check:** Verificar que el hook inicializa correctamente el canal.
- [ ] **Payload Validation:** Enviar un mensaje de prueba al canal y verificar que el listener dentro del hook lo procesa.

### Pruebas de Integración (Simuladas)
- [ ] **Isolation Test:** Emitir un mensaje con un `guestId` distinto al del hook y verificar que no se dispara la invalidación de queries.
- [ ] **Invalidation Trigger:** Emitir un mensaje válido y verificar que el `queryClient.invalidateQueries` se ejecuta con el key correcto.

### Pruebas UI
- [ ] **Multi-tab Sync:** (Manual) Abrir dos pestañas, realizar cambios en una y confirmar visualmente que la otra pestaña se actualiza automáticamente.
