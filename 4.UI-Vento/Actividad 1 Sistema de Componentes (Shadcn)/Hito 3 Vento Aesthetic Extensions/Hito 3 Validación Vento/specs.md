# Specs: Validación Vento (Hito 4.3.3)

## Requisitos Funcionales
1. **Styleguide Page**: Crear una página de documentación interna que muestre todos los estados de los componentes (Button hover, Dialog open, Card content).
2. **Validación de Contraste**: Asegurar que las combinaciones de colores de la paleta Vento cumplen con estándares mínimos de accesibilidad (WCAG AA).
3. **Regresión Visual**: Implementar un mecanismo de test para comparar instantáneas (snapshots) de componentes críticos.

## Escenarios de Aceptación (Gherkin)

### Styleguide Render
- **Given** una ruta `/dev/styleguide`
- **When** se accede a ella
- **Then** debe renderizar una cuadrícula con todos los componentes Shadcn con la estética Vento aplicada en todos sus estados (default, hover, focus).

### Contraste de Color
- **Given** los tokens de color Vento
- **When** se analizan las combinaciones de `bg` y `text`
- **Then** deben cumplir con un ratio de contraste mínimo de 4.5:1.
