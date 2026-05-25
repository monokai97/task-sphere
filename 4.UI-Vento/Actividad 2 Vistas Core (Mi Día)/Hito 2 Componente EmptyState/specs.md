# Specs: EmptyState Component & Vento Layout (Hito 4.2.2)

## Requisitos Funcionales
1. **Layout Shell**: Implementar barra lateral izquierda (SideNavBar) y área de trabajo principal (Workspace).
2. **Navegación**: Implementar navegación principal basada en el diseño de referencia (Mi Día, Importante, Planificado, Tareas).
3. **Componente EmptyState**: Crear un componente que utilice el patrón Bento Grid (múltiples tarjetas de diferentes tamaños) para un estado vacío estético.
4. **Interacción**: El input de "Add Task" debe ser fijo en la parte inferior y responder a focus/blur expandiendo opciones.

## Escenarios de Aceptación (Gherkin)

### Layout Navigation
- **Given** el layout inicial
- **When** el usuario navega a la vista "Mi Día"
- **Then** debe ver la barra lateral persistente y el área de trabajo con el EmptyState centrado.

### EmptyState Grid
- **Given** la aplicación sin tareas
- **When** se renderiza el dashboard
- **Then** debe mostrar una cuadrícula Bento con el saludo, una tarjeta de "Zen Moment", y una imagen decorativa central.
