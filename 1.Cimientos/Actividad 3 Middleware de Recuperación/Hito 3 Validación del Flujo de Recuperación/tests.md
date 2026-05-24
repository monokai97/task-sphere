# Tests: Validación del Flujo de Recuperación (Hito 1.3.3)

## Estrategia de Pruebas
Se simularán estados de error y corrupción para verificar la capacidad de autosanación del sistema.

### Pruebas de Integridad (Corrupción)
- [ ] **Malformed Cookie Test:** Inyectar manualmente una cookie con un ID que no sea UUID. Verificar que el sistema redirige y genera una nueva sesión válida.
- [ ] **Empty ID Test:** Inyectar una cookie con el campo `guestId` vacío. Verificar que se activa el flujo de regeneración.

### Pruebas de Resiliencia (Infraestructura)
- [ ] **DB Downtime Simulation:** Desconectar temporalmente el Local API (o simular un error de driver) y verificar que el dashboard sigue cargando (aunque la sesión no se actualice).

### Pruebas de UX (Feedback)
- [ ] **New Session Flag:** Verificar que tras una regeneración de sesión, la URL resultante contiene el flag `?newSession=true` para que el frontend pueda disparar el Toast correspondiente.
