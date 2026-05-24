# Specs: Rollback & Error Handling (Hito 3.2.3)

## Requisitos Técnicos
- **Callbacks de Mutación:** Implementación obligatoria de `onError` y `onSettled` en todos los hooks de mutación de `useTasks`.
- **Restauración de Caché:** Uso del contexto de error para ejecutar `queryClient.setQueryData(key, context.previousData)`.
- **Integración con Toast:** Disparar notificaciones visuales (Sonner) informando del fallo y la reversión del cambio.
- **Sincronización Final:** Forzar invalidación de queries tras cada mutación para garantizar la coherencia.

## Escenarios de Aceptación

### Escenario 1: Reversión ante Bloqueo de DB
**Given** una mutación optimista en curso (ej. marcar tarea)
**And** el servidor devuelve un error `500` por `SQLITE_BUSY` tras agotar los reintentos
**When** el hook `onError` se ejecute
**Then** la tarea debe volver visualmente a su estado "pendiente" de forma automática.
**And** debe aparecer un Toast informando: "Error al guardar el cambio. Se ha restaurado el estado anterior."

### Escenario 2: Sincronización post-error
**Given** un fallo en una mutación de eliminación
**When** el proceso termine (`onSettled`)
**Then** el sistema debe disparar un refetch silencioso de la lista completa para asegurar que la UI refleja exactamente lo que hay en SQLite.

### Escenario 3: Integración de Notificaciones
**Given** una mutación fallida
**When** se capture el error
**Then** se debe utilizar la instancia global de notificaciones para dar feedback al usuario, evitando que el fallo pase desapercibido.
