# Specs: Component Installation (Hito 4.1.2.2)

## Requisitos Técnicos
- **CLI:** `npx shadcn@latest add [component]`.
- **Componentes:**
    - `button`: Gestión de acciones primarias/secundarias.
    - `input`: Captura de datos de tareas.
    - `checkbox`: Alternancia de estado de tareas.
    - `dialog`: Modales de confirmación o edición avanzada.
    - `card`: Contenedor principal de tareas.

## Escenarios de Aceptación

### Escenario 1: Instalación Correcta
**Given** que Shadcn está configurado
**When** instale el componente `Button`
**Then** el archivo `src/components/ui/button.tsx` debe crearse.
**And** el componente debe ser importable mediante `@/components/ui/button`.

### Escenario 2: Coherencia de Estilos
**Given** un componente instalado
**When** se renderice en una página
**Then** debe adoptar automáticamente las fuentes y colores definidos en los tokens de diseño (Hito 1).

### Escenario 3: Verificación de Dependencias
**Given** que se instalan componentes con dependencias (ej. Radix UI)
**When** revise el archivo `package.json`
**Then** las librerías base de Radix deben estar declaradas como dependencias.
