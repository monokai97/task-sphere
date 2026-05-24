# Specs: Core de Iron-Session (Hito 1.2.1)

## Requisitos Técnicos
- **Librería:** `iron-session` v8.x.
- **Seguridad:** Cifrado AES-256-GCM (nativo de iron-session).
- **Configuración de Cookie:**
    - `cookieName`: `todo_guest_session`
    - `password`: Variable de entorno `SESSION_SECRET` (mínimo 32 caracteres).
    - `ttl`: 604800 segundos (7 días).
    - `httpOnly`: true (Protección contra XSS).
    - `secure`: true (Solo HTTPS en producción).

## Escenarios de Aceptación

### Escenario 1: Sellado de Sesión Exitoso
**Given** un `guestId` válido ("uuid-123")
**When** se llame a la función de guardado de sesión
**Then** se debe generar una cookie cifrada que contenga dicho ID.

### Escenario 2: Recuperación de Identidad
**Given** una cookie de sesión válida en los headers de la petición
**When** se ejecute `getSession()`
**Then** el sistema debe devolver el objeto de sesión con el `guestId` original correctamente descifrado.

### Escenario 3: Rechazo de Sesión Corrupta
**Given** una cookie de sesión manipulada manualmente por el cliente
**When** se intente descifrar mediante Iron-Session
**Then** el sistema debe invalidar la sesión y devolver un estado de "sesión vacía" sin lanzar excepciones críticas.
