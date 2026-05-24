# Especificaciones Técnicas: Hito 1 - Export API Route

## 1. Requisitos Funcionales
- **RF-1:** El sistema debe exponer un endpoint GET en la ruta `/api/export`.
- **RF-2:** El endpoint debe verificar la existencia de una sesión de invitado válida.
- **RF-3:** Si el usuario no tiene una sesión activa o la cookie ha expirado, el sistema debe denegar el acceso.
- **RF-4:** Si la sesión es válida, el sistema debe devolver un código de éxito (200 OK) y un JSON con la estructura base de exportación.

## 2. Requisitos Técnicos
- **RT-1:** Implementación mediante `Next.js App Router (Route Handlers)`.
- **RT-2:** Validación de identidad mediante `getIronSession` (usando la configuración definida en `src/lib/session.ts`).
- **RT-3:** Manejo de errores estandarizado (401 para No Autorizado, 500 para errores internos).
- **RT-4:** Headers de respuesta configurados para prevenir el almacenamiento en caché de datos sensibles (`Cache-Control: no-store`).

## 3. Escenarios de Aceptación (Gherkin)

### Escenario 1: Intento de exportación sin sesión activa
**Given** que un cliente intenta acceder a `GET /api/export`
**And** no existe una cookie de sesión `iron-session` válida
**When** la petición es procesada por el servidor
**Then** el servidor debe responder con un status code `401 Unauthorized`
**And** un body JSON: `{"error": "Sesión no válida o expirada"}`

### Escenario 2: Exportación exitosa con sesión válida
**Given** un usuario con una sesión de invitado activa
**When** el usuario realiza una petición `GET /api/export`
**Then** el servidor debe validar la identidad del usuario mediante la cookie
**And** responder con un status code `200 OK`
**And** devolver un JSON inicial con el `guestId` y un campo `status: "ready"`
**And** el header `Content-Type` debe ser `application/json`

### Escenario 3: Error inesperado del servidor
**Given** una petición válida a `/api/export`
**But** ocurre un fallo crítico al leer la sesión o procesar la lógica base
**When** el servidor captura la excepción
**Then** debe responder con un status code `500 Internal Server Error`
**And** un body JSON: `{"error": "Error interno al procesar la exportación"}`
