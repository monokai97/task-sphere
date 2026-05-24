# Specs: Integration Verification (Hito 4.1.2.3)

## Requisitos Técnicos
- **TestSuite Component:** Componente temporal que renderiza `Button`, `Input`, `Checkbox`, `Dialog`, `Card` en una misma página.
- **Validación Visual:** Verificar que los estilos base de "Vento" (bordes redondeados, sombras, colores) se aplican correctamente.
- **Validación de Accesibilidad:** Asegurar que los componentes interactivos cumplen con el foco visual y ARIA.

## Escenarios de Aceptación

### Escenario 1: Renderizado del TestSuite
**Given** el componente `TestSuite.tsx` creado
**When** el usuario navegue a `/dev/test-suite`
**Then** debe visualizarse cada componente instalado sin errores de renderizado.

### Escenario 2: Aplicación de Estilos Vento
**Given** los componentes en la página de test
**When** se inspeccionen los estilos calculados
**Then** los elementos deben presentar el radio de borde `vento-sm`/`md` y los colores neutros definidos en el `tailwind.config.ts`.

### Escenario 3: Funcionamiento de Primitivos
**Given** el `Dialog` y el `Checkbox`
**When** el usuario interactúe con ellos (abrir diálogo, marcar check)
**Then** deben responder correctamente a eventos de teclado y ratón sin errores en la consola.
