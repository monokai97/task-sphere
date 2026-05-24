# Specs: Esquemas de Colecciones Base (Hito 2.1.1)

## Requisitos Técnicos
- **Motor:** PayloadCMS 3.0 definitions.
- **Persistencia:** SQLite (vía Drizzle).
- **Identificadores:** UUID v4 para todas las entidades.
- **Campos Requeridos:**
    - `Tasks`: `title` (string, min 3 chars), `completed` (boolean), `position` (string).
    - `GuestSessions`: `lastActive` (date).
    - `TaskLogs`: `operation` (select), `timestamp` (date).

## Escenarios de Aceptación

### Escenario 1: Definición de GuestSessions
**Given** el motor de Payload inicializado
**When** se acceda a la colección `guest-sessions`
**Then** se debe permitir crear un registro con un ID manual (el UUID de la cookie) y un campo de fecha `lastActive`.

### Escenario 2: Creación de Tareas con Posición
**Given** un registro en `GuestSessions`
**When** se inserte una nueva tarea vinculada a ese invitado
**Then** el sistema debe validar que el título tenga al menos 3 caracteres y que el campo `position` sea un string no vacío (índice lexicográfico).

### Escenario 3: Estructura de Auditoría
**Given** la colección `task-logs`
**When** se registre una operación de prueba (ej. 'CREATE')
**Then** el registro debe almacenar el `diff` (JSON) y la fecha exacta de la operación automáticamente.
