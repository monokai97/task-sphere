# Specs: Estrategia Guest de Passport (Hito 1.2.2)

## Requisitos Técnicos
- **Middleware:** Passport.js v0.7+.
- **Generación de ID:** Uso de `crypto.randomUUID()` nativo de Node.js.
- **Payload del Perfil:** Objeto de usuario con la propiedad `guestId` (String).

## Escenarios de Aceptación

### Escenario 1: Generación de Nuevo Invitado
**Given** una solicitud sin una identidad previa en la sesión
**When** Passport ejecute la estrategia `guest`
**Then** se debe generar un nuevo UUID y devolverlo como parte del objeto de usuario.

### Escenario 2: Resolución de Invitado Existente
**Given** una solicitud que ya contiene un `guestId` en el payload de la sesión
**When** Passport ejecute la estrategia
**Then** se debe devolver el mismo `guestId` sin generar uno nuevo.

### Escenario 3: Integración con el Contexto de Request
**Given** una ruta protegida o interceptada por Passport
**When** la autenticación sea exitosa
**Then** el objeto `req.user` debe estar definido y contener el `guestId` correspondiente.
