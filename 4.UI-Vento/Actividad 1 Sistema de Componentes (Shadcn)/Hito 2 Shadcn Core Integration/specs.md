# Specs: Shadcn Core Integration (Hito 4.1.2)

## Requisitos Técnicos
- **CLI:** Uso de `npx shadcn@latest init` para la configuración inicial.
- **Componentes Base:** Button, Input, Checkbox, Dialog, Card.
- **Estilos:** Integración con los tokens de `tailwind.config.ts` definidos en el Hito 1.
- **Accesibilidad:** Uso de Radix UI Primitives (subyacentes en Shadcn).

## Escenarios de Aceptación

### Escenario 1: Inicialización
**Given** un proyecto Next.js configurado con Tailwind
**When** se ejecute la inicialización de Shadcn
**Then** debe crearse el archivo `components.json` y la carpeta `src/components/ui`.

### Escenario 2: Instalación de Componente Primitivo
**Given** el sistema Shadcn instalado
**When** instale el componente `Button`
**Then** el código del componente debe aparecer en `src/components/ui/button.tsx` y utilizar correctamente los tokens de Tailwind.

### Escenario 3: Uso en UI
**Given** un componente `Button` instalado
**When** se importe en una página de prueba
**Then** el botón debe renderizarse con la apariencia esperada (estilo Vento) y ser accesible mediante teclado (navegación con Tab).
