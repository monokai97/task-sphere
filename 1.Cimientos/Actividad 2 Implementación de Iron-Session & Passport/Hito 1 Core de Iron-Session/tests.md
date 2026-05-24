# Tests: Core de Iron-Session (Hito 1.2.1)

## Estrategia de Pruebas
Las pruebas deben asegurar que el ciclo de cifrado/descifrado es determinista y seguro.

### Pruebas Unitarias (Logic)
- [ ] **Seal/Unseal Cycle:** Crear un test que selle un `guestId`, verifique que el string resultante sea diferente al original, y luego lo descifre para comprobar que el ID se mantiene intacto.
- [ ] **Expiration Test:** Configurar un TTL corto (1s), sellar, esperar 2s e intentar descifrar; debe devolver sesión vacía.

### Pruebas de Integración (Env)
- [ ] **Secret Requirement:** Verificar que la librería lanza un error controlado si el secreto de sesión es menor a 32 caracteres o está ausente.

### Pruebas de Seguridad (Manual)
- [ ] **Cookie Flags:** Verificar en la pestaña "Application" del navegador que la cookie tiene activadas las flags `HttpOnly` y `SameSite=Lax/Strict`.
