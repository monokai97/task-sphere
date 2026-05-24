# Specs: Pulido de Micro-interacciones (Hito 4.3.3)

## Requisitos Técnicos
- **Hover:** Transición suave de opacidad y sombra al pasar el cursor sobre `TaskCard`.
- **Focus Rings:** Anillos de enfoque visibles y consistentes que cumplen con los estándares de accesibilidad WCAG (para `focus-visible`).
- **Click Feedback:** Animación de escala (scale down) sutil al hacer clic en botones interactivos.

## Escenarios de Aceptación

### Escenario 1: Estado Hover
**Given** una `TaskCard` en modo visualización
**When** el usuario pase el mouse por encima
**Then** la tarjeta debe mostrar un cambio suave de sombra (shadow-vento) y opacidad en un periodo de 200ms.

### Escenario 2: Accesibilidad por Foco
**Given** una tarjeta o botón
**When** el usuario navegue usando el teclado (`Tab`)
**Then** debe ser claramente visible un anillo de enfoque con el color de acento definido en los tokens Vento.

### Escenario 3: Feedback de Clic
**Given** un botón de acción
**When** el usuario mantenga el botón presionado
**Then** el elemento debe reducir su escala levemente (98%) para dar sensación de pulsación.
