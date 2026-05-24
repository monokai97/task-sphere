# Specs: Invalidación de Caché Cross-Tab (Hito 3.3.3)

## Requisitos Técnicos
- **Listener:** Suscripción al canal `todo_sync` mediante `useSync` hook.
- **Acción:** `queryClient.invalidateQueries({ queryKey: ['tasks', guestId] })`.
- **Aislamiento:** La invalidación debe ocurrir solo si el `guestId` del mensaje coincide con el del usuario actual en la pestaña receptora.

## Escenarios de Aceptación

### Escenario 1: Refetch Automático
**Given** que la Pestaña B tiene datos en caché
**When** reciba un evento de `TASKS_UPDATED` desde la Pestaña A
**Then** el hook debe disparar la invalidación de queries
**And** TanStack Query debe disparar automáticamente un nuevo fetch hacia el servidor para actualizar los datos.

### Escenario 2: Filtrado de Eventos Ajenos
**Given** un mensaje de broadcast recibido con un `guestId` diferente (de otro usuario/sesión)
**When** el hook procese el evento
**Then** debe ignorar el mensaje y no disparar la invalidación, protegiendo el caché actual del usuario.

### Escenario 3: Coherencia visual sin recarga
**Given** que el usuario está viendo la Pestaña B
**When** se produzca la invalidación y el refetch automático
**Then** la UI debe actualizarse suavemente con los nuevos datos, sin parpadeos o pérdida del estado de edición local (si no se está editando esa tarea específica).
