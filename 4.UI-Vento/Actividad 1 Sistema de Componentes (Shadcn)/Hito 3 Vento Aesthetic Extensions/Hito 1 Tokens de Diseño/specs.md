# Specs: Tokens de Diseño (Hito 4.3.1)

## Requisitos Funcionales
1. **Sistema de Tipografía**: Definir jerarquías para Heading (h1-h4), Body (base, sm, lg) y Mono usando Geist.
2. **Escala de Espaciado**: Implementar escala personalizada "Vento" basada en múltiplos de 4px, con énfasis en espaciados amplios.
3. **Tokens de Superficie**: Definir colores de `panel`, `surface` y `highlight` para el tema oscuro.

## Escenarios de Aceptación (Gherkin)

### Jerarquía Tipográfica
- **Given** una vista de dashboard
- **When** se renderiza un H1
- **Then** debe tener `font-family: Geist Sans`, `font-size: 2.25rem` y `tracking-tight`.

### Espaciado
- **Given** un componente `VentoCard`
- **When** se aplica el padding estándar `p-8`
- **Then** el contenido debe tener un espaciado consistente según el token definido.
