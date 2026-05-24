# Specs: Lógica de Upsert de Sesión (Hito 1.3.2)

## Requisitos Técnicos
- **Runtime:** El middleware debe estar configurado para el runtime de **Node.js** para permitir el acceso al Local API y al driver de SQLite.
- **Operación Atómica:** Se debe intentar actualizar el campo `lastActive` del registro. Si el registro no existe, se debe crear uno nuevo con el ID proporcionado por la cookie.
- **Identidad:** El campo `id` en la colección `guest-sessions` de Payload debe coincidir exactamente con el `guestId` extraído de Iron-Session.

## Escenarios de Aceptación

### Escenario 1: Recuperación de Sesión Purgada
**Given** un usuario con una cookie válida (`guestId: "abc-123"`)
**And** el registro correspondiente en la tabla `guest_sessions` ha sido eliminado
**When** el middleware procese una solicitud a `/dashboard`
**Then** se debe insertar un nuevo registro en la base de datos con el ID `"abc-123"`.

### Escenario 2: Actualización de Actividad
**Given** un usuario con una cookie válida y registro en base de datos
**When** el middleware procese la solicitud
**Then** debe actualizar el timestamp `lastActive` del registro existente para evitar su purgado por inactividad.

### Escenario 3: Fallo de Persistencia Crítico
**Given** un error de conexión con SQLite (ej. base de datos bloqueada)
**When** el middleware intente realizar el upsert
**Then** el sistema debe permitir que la solicitud continúe (degradación elegante) pero registrar el error internamente para activar el modo de solo lectura si persiste.
