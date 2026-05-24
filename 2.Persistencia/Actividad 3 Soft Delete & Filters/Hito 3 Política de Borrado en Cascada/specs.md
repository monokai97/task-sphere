# Specs: Política de Borrado en Cascada (Hito 2.3.3)

## Requisitos Técnicos
- **Relaciones:**
    - `Tasks` -> `GuestSessions`: Cascade on Delete.
    - `TaskLogs` -> `Tasks`: Cascade on Delete.
- **Mecanismo:** Configuración de `db.sqliteAdapter` o hooks de Payload para asegurar que SQLite reciba las constraints `ON DELETE CASCADE`.
- **Atomicidad:** La eliminación de una sesión debe ocurrir en una única transacción de base de datos junto con sus hijos.

## Escenarios de Aceptación

### Escenario 1: Limpieza de Tareas Activas
**Given** una sesión de invitado con 10 tareas asociadas
**When** se elimine el registro de la sesión en `GuestSessions`
**Then** el motor de base de datos debe eliminar automáticamente las 10 tareas correspondientes sin intervención adicional del código.

### Escenario 2: Limpieza de Historial de Auditoría
**Given** una tarea que posee un historial de 5 logs en `TaskLogs`
**When** la tarea sea eliminada físicamente (disparado por el borrado de su sesión padre)
**Then** todos los registros en `TaskLogs` vinculados a esa tarea deben ser purgados.

### Escenario 3: Verificación de Huérfanos
**Given** una ejecución masiva de borrado de sesiones expiradas
**When** finalice el proceso
**Then** una consulta de integridad (`count` de tareas sin `guestId` válido) debe devolver siempre 0.
