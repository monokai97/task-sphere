# Tests: Persistence Error Interceptor (Hito 5.1.1)

## Estrategia de Pruebas
Simularemos errores de base de datos para verificar que el interceptor los captura correctamente.

### Pruebas de Integración (Simuladas)
- [ ] **SQLITE_FULL Simulation:** Inyectar una excepción `SQLITE_FULL` en una mutación y confirmar que el interceptor la captura y emite el evento de error.
- [ ] **Event Bus Verification:** Verificar que el `EventBus` emite correctamente el mensaje a los suscriptores tras la captura.
- [ ] **ReadOnly State Check:** Confirmar que una vez capturado el error, el sistema bloquea preventivamente las siguientes operaciones de escritura.

### Pruebas de Sistema
- [ ] **Read Bypass:** Confirmar que una consulta de lectura (GET) realizada después de un error de escritura (en otra operación) sigue funcionando normalmente.
- [ ] **Log Verification:** Verificar que el sistema registra el error completo en el log de auditoría para fines de diagnóstico.
