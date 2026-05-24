# Tests: Pipeline de Autenticación (Hito 1.2.3)

## Estrategia de Pruebas
Se validará la integración de extremo a extremo del flujo de autenticación.

### Pruebas de Integración (API)
- [ ] **Cookie Header Presence:** Realizar una petición al endpoint usando `fetch` en un entorno de pruebas y verificar que el header `set-cookie` está presente y no está vacío.
- [ ] **Idempotency Check:** Realizar dos peticiones seguidas enviando la cookie recibida en la primera; verificar que el `guestId` devuelto en la segunda es idéntico al de la primera.

### Pruebas Funcionales (Frontend Readiness)
- [ ] **JSON Structure:** Validar que el body de la respuesta sigue estrictamente el tipo `AuthResponse`.
- [ ] **Status Code Sync:** Verificar que un éxito devuelve `200 OK` y un error de servidor devuelve `500 Internal Server Error`.

### Verificación de Seguridad
- [ ] **Payload Sanitization:** Asegurar que la respuesta JSON no incluya secretos del servidor ni información sensible de la configuración de Iron-Session.
