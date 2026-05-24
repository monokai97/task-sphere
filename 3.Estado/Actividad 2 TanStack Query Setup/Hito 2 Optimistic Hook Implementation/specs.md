# Specs: Optimistic Hook Implementation (Hito 3.2.2)

## Requisitos Técnicos
- **Hook Principal:** `useTasks`.
- **Operaciones Optimizadas:**
    - `toggleTask`: Cambio instantáneo del checkbox de completado.
    - `deleteTask`: Desaparición inmediata de la tarea de la lista.
    - `reorderTask`: Movimiento visual fluido a la nueva posición lexicográfica.
- **Estado de Caché:** Manipulación directa vía `queryClient.setQueryData`.
- **Latencia Objetivo:** Feedback visual en <100ms.

## Escenarios de Aceptación

### Escenario 1: Marcado Rápido de Tareas
**Given** una tarea pendiente en la lista
**When** el usuario haga clic en el checkbox para completarla
**Then** el checkbox debe mostrarse marcado instantáneamente, antes de que la petición al API de PayloadCMS finalice.

### Escenario 2: Eliminación Fluida
**Given** una tarea activa
**When** el usuario dispare la acción de eliminar
**Then** la tarea debe removerse visualmente de la lista de forma inmediata.
**And** el contador de tareas pendientes debe actualizarse sincrónicamente en el cliente.

### Escenario 3: Reordenamiento Reactivo
**Given** una lista de tareas ordenadas
**When** se asigne una nueva posición (`LexoRank`) tras un gesto de Drag & Drop
**Then** la lista en el caché de TanStack Query debe reordenarse localmente para reflejar la nueva secuencia sin esperar al refetch.
