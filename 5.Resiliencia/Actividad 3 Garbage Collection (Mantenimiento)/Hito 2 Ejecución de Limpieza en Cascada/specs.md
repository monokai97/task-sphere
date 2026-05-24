# Especificaciones Técnicas: Hito 2 - Ejecución de Limpieza en Cascada

## 1. Requisitos Funcionales
- **RF-1:** El sistema debe recibir una lista de IDs de sesiones a eliminar.
- **RF-2:** El sistema debe ejecutar la eliminación física de cada sesión.
- **RF-3:** El sistema debe reportar cuántas sesiones fueron eliminadas exitosamente.

## 2. Requisitos Técnicos
- **RT-1:** Uso de PayloadCMS Local API: `payload.delete({ collection: 'GuestSessions', id: sessionId })`.
- **RT-2:** La lógica debe ser encapsulada en `src/services/maintenanceService.ts` como `deleteExpiredSessions(ids: string[])`.

## 3. Escenarios de Aceptación (Gherkin)

### Escenario 1: Borrado exitoso en cascada
**Given** una sesión inactiva con 5 tareas asociadas y 10 logs
**When** el sistema elimina la sesión
**Then** la base de datos NO debe contener esa sesión, ni sus 5 tareas, ni sus 10 logs.

### Escenario 2: Reporte de eliminación
**Given** una lista de 3 IDs de sesión
**When** el proceso de eliminación finaliza
**Then** el sistema debe retornar un reporte indicando: "3 sesiones eliminadas exitosamente".
