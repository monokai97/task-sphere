# Specs: Tailwind & Theme Setup (Hito 4.1.1)

## Requisitos Técnicos
- **Tailwind:** Configuración basada en `geist-ui/geist` (font) y paleta de colores personalizada (`neutros profundos`).
- **Dark Mode:** Implementación vía `class` (sistema nativo de Tailwind).
- **Global Styles:** Configuración en `src/app/globals.css`.

## Escenarios de Aceptación

### Escenario 1: Aplicación de Tokens de Color
**Given** que he configurado los colores en `tailwind.config.ts`
**When** aplique una clase `bg-vento-neutral-900` en un componente
**Then** el elemento debe renderizarse con el color neutro definido.

### Escenario 2: Dark Mode Funcional
**Given** un elemento con la clase `dark` aplicada al body
**When** el sistema esté en modo oscuro
**Then** los colores definidos bajo el selector `dark:` en Tailwind deben aplicarse correctamente.

### Escenario 3: Tipografía Geist
**Given** que la tipografía Geist ha sido configurada
**When** se renderice un texto en pantalla
**Then** la fuente debe ser cargada y aplicada mediante la variable CSS correspondiente.
