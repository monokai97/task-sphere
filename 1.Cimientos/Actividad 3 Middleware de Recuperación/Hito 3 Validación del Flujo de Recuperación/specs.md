# Specs: Validación del Flujo de Recuperación (Hito 1.3.3)

## Requisitos Técnicos
- **Validación UUID:** El `guestId` de la cookie debe ser un UUID v4 válido (vía Zod o regex).
- **Manejo de Errores:** Captura de errores específicos de Payload/Drizzle (ej. `SQLITE_BUSY`, `SQLITE_CORRUPT`).
- **Feedback Visual:** Uso de un parámetro de URL temporal o un flag en la cookie para disparar Toasts informativos en el cliente.

## Escenarios de Aceptación

### Escenario 1: Cookie Malformada o Manipulada
**Given** un usuario con una cookie `todo_guest_session` que contiene un ID inválido (ej. "123-hack")
**When** el middleware procese la solicitud
**Then** el sistema debe invalidar la cookie actual, generar una identidad nueva y limpia, y permitir el acceso al dashboard.

### Escenario 2: Fallo de Conexión a SQLite (Transitorio)
**Given** que la base de datos SQLite está bloqueada temporalmente
**When** el middleware intente realizar el upsert de sesión
**Then** el middleware debe capturar el error, omitir la actualización silenciosamente (fail-silent) y permitir el renderizado de la página para no bloquear al usuario.

### Escenario: Notificación de Sesión Regenerada
**Given** que el sistema ha tenido que crear una nueva sesión porque la anterior expiró en DB
**When** el usuario sea redirigido al dashboard
**Then** se debe incluir un flag en el flujo que permita al frontend mostrar: "Se ha iniciado una nueva sesión local."
