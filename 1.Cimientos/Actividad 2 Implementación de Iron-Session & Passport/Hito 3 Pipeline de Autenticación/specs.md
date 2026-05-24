# Specs: Pipeline de Autenticación (Hito 1.2.3)

## Requisitos Técnicos
- **Endpoint:** `/api/auth/guest` (POST preferido, GET soportado para inicialización simple).
- **Integración:** Llamada secuencial a `passport.authenticate('guest')` y `saveSession`.
- **Headers:** La respuesta debe incluir el header `Set-Cookie` con la sesión cifrada.

## Escenarios de Aceptación

### Escenario 1: Inicialización de Sesión Virgen
**Given** un cliente sin cookies de la aplicación
**When** se realice una petición GET a `/api/auth/guest`
**Then** el servidor debe generar un nuevo ID, sellarlo en la cookie y devolver un JSON con `{ success: true, guestId: "..." }`.

### Escenario 2: Refresco de Sesión Existente
**Given** un cliente que ya posee una cookie `todo_guest_session` válida
**When** se realice una petición al pipeline de autenticación
**Then** el servidor debe reconocer el ID existente, renovar el TTL de la cookie y devolver el mismo ID en la respuesta.

### Escenario 3: Manejo de Errores de Inicialización
**Given** un fallo crítico en la generación de identidad (ej. error en crypto)
**When** se intente inicializar la sesión
**Then** el servidor debe devolver un status 500 con un mensaje de error estructurado y no debe emitir ninguna cookie.
