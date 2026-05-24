# Specs: BroadcastChannel Sync (Hito 3.3.1)

## Requisitos Técnicos
- **Canal:** `todo_sync`.
- **Mensajes:** Objeto JSON con `{ type: 'TASKS_UPDATED', guestId: string }`.
- **Implementación:** Hook de React para encapsular la suscripción y el envío de mensajes.

## Escenarios de Aceptación

### Escenario 1: Sincronización en Pestaña Pasiva
**Given** que tengo dos pestañas abiertas en la misma aplicación
**When** realice una mutación (ej. completar tarea) en la Pestaña 1
**Then** el hook `useSync` en la Pestaña 2 debe detectar el evento y disparar la invalidación de la query `['tasks', guestId]`.

### Escenario 2: Aislamiento por Invitado
**Given** dos invitados diferentes en dos pestañas distintas
**When** el Invitado A realice una acción en su pestaña
**Then** la Pestaña del Invitado B NO debe recibir ni procesar el mensaje, manteniendo el aislamiento de datos.

### Escenario 3: Limpieza de Recursos
**Given** el componente que usa `useSync` se desmonta
**When** el usuario navegue fuera del dashboard
**Then** el hook debe cerrar el canal de broadcast para liberar recursos del navegador.
