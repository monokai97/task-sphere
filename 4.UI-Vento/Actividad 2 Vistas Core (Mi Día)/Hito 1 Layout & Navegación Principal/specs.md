# Specs: Layout & Navegación Principal (Hito 4.2.1)

## Requisitos Técnicos
- **Layout Base:** Contenedor responsivo con Sidebar lateral (Desktop) y navegación inferior/hamburguesa (Mobile).
- **Responsive Design:** Soporte para vista de una o dos columnas.
- **Dark Mode:** Soporte total mediante `theme-dark` clase.
- **Espaciado:** Uso de `padding-8+` y contenedores centrados para maximizar el minimalismo Vento.

## Escenarios de Aceptación

### Escenario 1: Navegación Responsiva
**Given** el ancho de pantalla de escritorio
**When** el usuario navegue a la aplicación
**Then** el sidebar debe estar fijo a la izquierda.
**When** el usuario cambie a una pantalla móvil
**Then** el sidebar debe colapsar o transformarse en un menú hamburguesa accesible.

### Escenario 2: Persistencia del Layout
**Given** el dashboard "Mi Día"
**When** el usuario navegue a la vista de configuración
**Then** la cabecera y el sidebar deben permanecer visibles, indicando una navegación fluida dentro del layout.

### Escenario 3: Dark Mode nativo
**Given** el sistema operativo en modo oscuro
**When** se cargue la aplicación
**Then** el layout debe detectar y aplicar automáticamente el tema oscuro sin parpadeos.
