# Specs: Persistence Error Interceptor (Hito 5.1.1)

## Requisitos Técnicos
- **Interceptación:** Configurar el `sqliteAdapter` de PayloadCMS para capturar errores de Drizzle y SQLite nativos.
- **Identificación:** Detectar códigos de error específicos: `SQLITE_FULL`, `SQLITE_CORRUPT`, `SQLITE_CANTOPEN`, `SQLITE_READONLY`.
- **Comunicación:** Integración con un evento global o `EventEmitter` que notifique a la UI sobre el estado de solo lectura.

## Escenarios de Aceptación

### Escenario 1: Fallo de Escritura por Disco Lleno
**Given** que el disco del usuario está lleno
**When** el sistema intente ejecutar una mutación de tarea
**Then** el interceptor de errores debe detectar el código `SQLITE_FULL`
**And** disparar un evento global de `STORAGE_CRITICAL_FAILURE`.

### Escenario 2: Notificación de Degradación
**Given** un evento de `STORAGE_CRITICAL_FAILURE`
**When** el sistema esté en este estado
**Then** cualquier intento futuro de escritura debe ser bloqueado automáticamente por la capa de persistencia antes de llegar a SQLite.

### Escenario 3: Recuperación Silenciosa (Read-only OK)
**Given** el sistema en modo solo lectura
**When** el usuario realice una petición de lectura (GET)
**Then** la aplicación debe seguir respondiendo con los datos actuales, asegurando que el usuario pueda al menos consultar sus tareas.
