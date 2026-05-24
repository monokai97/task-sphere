# Specs: Integración y Validación (Hito 4.2.2.2)

## Requisitos Técnicos
- **Dashboard View:** Renderizado exitoso del layout (`layout.tsx`) con el contenido de la página (`page.tsx`).
- **Estado Dinámico:** El dashboard debe cambiar dinámicamente entre `EmptyStateVento` (si no hay tareas) y la `TaskList` (cuando existan tareas).
- **Consistencia Visual:** Todos los elementos de la vista deben respetar los tokens Vento (espaciado, colores).

## Escenarios de Aceptación

### Escenario 1: Renderizado del Dashboard
**Given** que el usuario navega a `/dashboard` (o la ruta raíz protegida)
**When** el sistema renderiza el layout principal
**Then** se debe visualizar el Sidebar, el Header con el banner de resiliencia y el contenido centralizado en el área de trabajo.

### Escenario 2: Alternancia de Estados
**Given** una base de datos vacía
**When** el dashboard carga
**Then** debe mostrar el `EmptyStateVento`.
**When** el usuario cree su primera tarea
**Then** el dashboard debe ocultar el estado vacío y renderizar la lista de tareas (`TaskList`).

### Escenario 3: Estabilidad del Build
**Given** la integración completa de los componentes core
**When** se ejecute `npm run build`
**Then** no debe producirse ningún error de compilación relacionado con los componentes Vento o de Shadcn.
