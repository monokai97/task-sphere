# Specs: Vento Aesthetic Extensions (Hito 4.1.3)

## Requisitos Técnicos
- **Bordes:** Radio definido de `0.75rem` (vento-md) para contenedores y `0.5rem` (vento-sm) para elementos interactivos.
- **Efectos:** Aplicación de `backdrop-blur-md` en overlays y fondos de sidebar.
- **Sombras:** Paleta personalizada de sombras suaves (shadow-vento).

## Escenarios de Aceptación

### Escenario 1: Radio de Borde Vento
**Given** un componente Card recién creado
**When** se le aplique la clase `rounded-vento-md`
**Then** el elemento debe presentar un radio de borde de exactamente `0.75rem`.

### Escenario 2: Efecto de Desenfoque (Blur)
**Given** un contenedor de overlay (ej. Sidebar o Dialog)
**When** se le aplique la clase `bg-background/80 backdrop-blur-md`
**Then** debe mostrar un desenfoque de fondo sutil sobre los elementos subyacentes.

### Escenario 3: Coherencia de Paleta
**Given** cualquier componente del sistema
**When** se verifique su diseño
**Then** los colores utilizados deben pertenecer exclusivamente a la paleta neutra profunda de Vento.
