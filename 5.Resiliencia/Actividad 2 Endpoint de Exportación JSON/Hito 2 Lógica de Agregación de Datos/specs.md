# Especificaciones Técnicas: Hito 2 - Lógica de Agregación de Datos

## 1. Requisitos Funcionales
- **RF-1:** El sistema debe recuperar todas las tareas (`Tasks`) asociadas al `guestId` verificado.
- **RF-2:** El sistema debe recuperar todos los logs de auditoría (`TaskLogs`) asociados al mismo `guestId`.
- **RF-3:** El JSON exportado debe incluir: metadatos de sesión, lista completa de tareas activas y el historial de cambios (logs).
- **RF-4:** Se deben aplicar los filtros de `Soft Delete` (isDeleted: false) automáticamente.

## 2. Requisitos Técnicos
- **RT-1:** Uso de `payload.find({ collection: '...', where: { guest: { equals: guestId } } })`.
- **RT-2:** Serialización segura de los datos recuperados a un formato JSON compatible con el frontend.
- **RT-3:** La agregación debe ejecutarse en una transacción o llamada atómica conceptual para asegurar que el snapshot sea consistente.

## 3. Escenarios de Aceptación (Gherkin)

### Escenario 1: Exportación con datos completos
**Given** un usuario con tareas y logs registrados
**When** el usuario solicita la exportación mediante `/api/export`
**Then** el JSON resultante debe contener todas sus tareas (`Tasks`)
**And** todos los logs de auditoría (`TaskLogs`) relacionados a esas tareas
**And** ninguna tarea o log de otros usuarios.

### Escenario 2: Usuario sin tareas
**Given** un usuario nuevo sin tareas creadas
**When** solicita la exportación
**Then** el JSON debe retornar las listas de tareas y logs como arrays vacíos `[]`
**And** el status `ready` debe ser correcto.
