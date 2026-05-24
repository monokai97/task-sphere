# Specs: UI Lock & Banner (Hito 5.1.3)

## Requisitos Técnicos
- **ResilienceBanner:** Componente UI (estilo Vento) montado en `src/components/ui/ResilienceBanner.tsx`.
- **UI Locking:** Lógica HOC (Higher-Order Component) o Hook de conveniencia `useDisabledOnReadOnly()` para deshabilitar componentes.
- **Feedback:** Banner debe ser visible, persistente y utilizar colores de advertencia (amarillo/rojo Vento).

## Escenarios de Aceptación

### Escenario 1: Visibilidad del Banner
**Given** que el estado global `isReadOnly` es `true`
**When** el usuario navegue al Dashboard
**Then** debe aparecer un banner con el mensaje: "Almacenamiento local lleno. La aplicación está en modo solo lectura."

### Escenario 2: Bloqueo de Acciones
**Given** un botón de "Crear Tarea"
**When** el estado global `isReadOnly` cambia a `true`
**Then** el botón debe deshabilitarse automáticamente y su estilo debe reflejar que no es interactivo.

### Escenario 3: Interrupción de Drag & Drop
**Given** una tarea interactiva
**When** el modo lectura esté activado
**Then** la funcionalidad de Drag & Drop debe deshabilitarse para evitar intentos de reordenamiento no persistentes.
