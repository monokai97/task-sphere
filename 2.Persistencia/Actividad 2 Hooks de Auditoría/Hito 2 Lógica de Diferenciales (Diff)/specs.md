# Specs: Lógica de Diferenciales (Diff) (Hito 2.2.2)

## Requisitos Técnicos
- **Entrada:** Dos objetos (estado anterior y estado nuevo) siguiendo el tipo `Task` de Payload.
- **Salida:** Un objeto JSON (delta) con las claves que difieren y sus nuevos valores.
- **Campos a Comparar:** `title`, `description`, `completed`, `position`, `isDeleted`.
- **Exclusiones:** Debe ignorar campos de sistema como `updatedAt`, `createdAt` y la relación `guest` (a menos que cambie, lo cual no debería ocurrir por diseño).

## Escenarios de Aceptación

### Escenario 1: Diferencial de Toggle de Estado
**Given** una tarea con `completed: false`
**When** sea actualizada a `completed: true`
**Then** la utilidad de diff debe devolver exactamente `{ "completed": true }`.

### Escenario 2: Cambio de Título
**Given** una tarea con título "Tarea A"
**When** el título cambie a "Tarea B"
**Then** el diferencial resultante debe ser `{ "title": "Tarea B" }`.

### Escenario 3: Sin Cambios Detectables
**Given** una actualización disparada por el sistema que no modifica campos de negocio
**When** se ejecute la lógica de diff
**Then** debe devolver un objeto vacío `{}` o `null`, indicando que no es necesario generar un log de auditoría.
