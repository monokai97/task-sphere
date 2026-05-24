# Specs: Emisión de Eventos de Mutación (Hito 3.3.2)

## Requisitos Técnicos
- **Hook Dependiente:** Integración con `useTasks` (Actividad 2).
- **Trigger:** `onSuccess` de las mutaciones (`toggleTask`, `deleteTask`, `createTask`).
- **Payload del Mensaje:** Objeto `{ type: 'TASKS_UPDATED', guestId: string }`.

## Escenarios de Aceptación

### Escenario 1: Emisión en Mutación de Tarea
**Given** un hook `useTasks` configurado
**When** una mutación `toggleTask` finalice exitosamente
**Then** el hook debe invocar `useSync.broadcast('TASKS_UPDATED')`.

### Escenario 2: Emisión en Creación
**Given** que el usuario añade una nueva tarea
**When** la petición al Local API de PayloadCMS sea exitosa
**Then** se debe emitir el evento correspondiente.

### Escenario 3: Verificación de Aislamiento
**Given** una emisión de evento
**When** el objeto JSON sea recibido
**Then** el campo `guestId` debe coincidir con el usuario actual para evitar el procesamiento innecesario de eventos ajenos.
