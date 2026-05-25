# Specs: Aplicación Visual Vento (Hito 4.3.2)

## Requisitos Funcionales
1. **Efecto Glow/Glows**: Implementar un componente de fondo que aplique efectos de luz sutil en el modo oscuro.
2. **Glassmorphism**: Aplicar capas de fondo con `backdrop-filter: blur()` en modales y paneles laterales.
3. **Refinamiento de Bordes**: Ajustar los grosores de borde (`border-vento-neutral-200`) en todos los componentes de UI.

## Escenarios de Aceptación (Gherkin)

### Glows Visuales
- **Given** una Card en modo oscuro
- **When** se visualiza
- **Then** debe presentar un gradiente radial sutil en el fondo que simule un efecto "Vento".

### Glassmorphism en Dialogs
- **Given** un componente Dialog abierto
- **When** se analiza el fondo del Dialog
- **Then** debe tener una opacidad sutil y un blur aplicado para efecto de cristal.
