# Especificaciones Técnicas: Hito 1 - Identificación de Sesiones Inactivas

## 1. Requisitos Funcionales
- **RF-1:** El sistema debe definir una ventana de inactividad de 7 días.
- **RF-2:** El sistema debe consultar la colección `GuestSessions` para encontrar sesiones con `lastActive` < (fecha actual - 7 días).
- **RF-3:** El resultado debe ser una lista de IDs de sesiones para su posterior eliminación.

## 2. Requisitos Técnicos
- **RT-1:** Uso de PayloadCMS Local API: `payload.find({ collection: 'GuestSessions', where: { lastActive: { less_than: sieteDiasAtras } } })`.
- **RT-2:** La lógica debe ser encapsulada en `src/services/maintenanceService.ts`.

## 3. Escenarios de Aceptación (Gherkin)

### Escenario 1: Sesiones antiguas identificadas
**Given** que existen sesiones con `lastActive` hace 10 días
**When** se ejecuta el servicio de identificación
**Then** el sistema debe incluir los IDs de esas sesiones en el resultado.

### Escenario 2: Sesiones activas ignoradas
**Given** que existen sesiones con `lastActive` hace 2 días
**When** se ejecuta el servicio de identificación
**Then** el sistema NO debe incluir esas sesiones en el resultado.
