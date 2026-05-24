# Specs: Componente EmptyState (Hito 4.2.2)

## Requisitos Técnicos
- **Diseño:** Centrado, tipografía Geist, ilustración SVG minimalista, espacio en blanco generoso.
- **Interactividad:** Botón de acción para crear la primera tarea.
- **Estilo:** Bordes redondeados `vento-md` y sombras sutiles.

## Escenarios de Aceptación

### Escenario 1: Visualización del Estado Vacío
**Given** que la lista de tareas está vacía
**When** el Dashboard "Mi Día" se renderice
**Then** el componente `EmptyStateVento` debe ser visible en el centro del layout.

### Escenario 2: Acción Inmediata
**Given** el estado vacío visible
**When** el usuario haga clic en "Crear primera tarea"
**Then** debe abrirse el formulario de creación (Dialog) o habilitarse el input de creación inmediata.

### Escenario 3: Estética Vento
**Given** el componente renderizado
**When** se inspeccionen los estilos
**Then** debe presentar los tokens `rounded-vento-md` y la fuente Geist Sans, manteniendo coherencia con el diseño global.
