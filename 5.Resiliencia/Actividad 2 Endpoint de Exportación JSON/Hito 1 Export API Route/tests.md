# Estrategia de Pruebas: Hito 1 - Export API Route

## 1. Pruebas Unitarias (Route Handler)
- [ ] **Prueba: Fallo por falta de sesión**
    - **Mock:** `getIronSession` retorna un objeto sin `guestId`.
    - **Resultado esperado:** Status `401`, body contiene el mensaje de error definido en `specs.md`.
- [ ] **Prueba: Éxito con sesión válida**
    - **Mock:** `getIronSession` retorna `{ guestId: 'test-uuid' }`.
    - **Resultado esperado:** Status `200`, body contiene `guestId: 'test-uuid'`.
- [ ] **Prueba: Manejo de Excepción**
    - **Mock:** `getIronSession` lanza un error inesperado.
    - **Resultado esperado:** Status `500`, body contiene mensaje de error genérico.

## 2. Pruebas de Integración (API)
- [ ] **Prueba: Verificación de Headers de Seguridad**
    - **Acción:** Realizar petición exitosa.
    - **Verificación:** El header `Cache-Control` debe ser exactamente `no-store, max-age=0` o similar (según implementación).
- [ ] **Prueba: Restricción de Métodos HTTP**
    - **Acción:** Intentar `POST` a `/api/export`.
    - **Resultado esperado:** Status `405 Method Not Allowed`.

## 3. Casos de Borde y Negativos
- [ ] **Cookie Corrupta:** Simular una cookie de sesión con formato inválido. El sistema debe tratarlo como sesión inexistente (401) y no crashear.
- [ ] **Sesión sin guestId:** Si la sesión existe pero el campo `guestId` es null o undefined, debe retornar 401.

## 4. Herramientas Sugeridas
- **Vitest / Jest:** Para las pruebas unitarias del Route Handler mockeando `next/headers` y `iron-session`.
- **Supertest / Playwright API Testing:** Para las pruebas de integración reales contra el endpoint.
