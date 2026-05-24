 # Specs: Evento en Delete (Hito 3.3.2.2)
       2
       3 ## Requisitos Técnicos
       4 - **Trigger:** `onSuccess` de la mutación `useDeleteTask`.
       5 - **Payload del Mensaje:** `{ type: 'TASKS_UPDATED', guestId:
         string, deletedTaskId: string }`.
       6 - **Comportamiento:** La recepción del evento debe invalidar la
         query `['tasks', guestId]` para forzar un refetch.
       7
       8 ## Escenarios de Aceptación
       9
      10 ### Escenario 1: Sincronización de Borrado
      11 **Given** que tengo dos pestañas abiertas con la misma lista de
         tareas
      12 **When** elimine una tarea en la Pestaña A
      13 **Then** el evento de borrado debe propagarse al canal `todo_sync`
      14 **And** la Pestaña B debe detectar el evento, invalidar su caché y
         eliminar visualmente la tarea sin intervención del usuario.
      15
      16 ### Escenario 2: Rollback tras fallo de Borrado
      17 **Given** un fallo al eliminar una tarea (ej. fallo de red)
      18 **When** ocurra el rollback de la mutación optimista
      19 **Then** NO se debe emitir un evento de borrado, manteniendo el
         estado de la Pestaña B intacto.