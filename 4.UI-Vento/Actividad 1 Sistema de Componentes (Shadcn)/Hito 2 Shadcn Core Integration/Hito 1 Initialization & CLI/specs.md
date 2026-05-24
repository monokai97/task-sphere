# Specs: Shadcn CLI Initialization (Hito 4.1.2.1)

## Requisitos Técnicos
- **CLI:** `shadcn@latest` (versión más reciente).
- **Configuración obligatoria:**
    - `style`: "new-york" (base recomendada).
    - `tailwind.config`: `tailwind.config.ts`.
    - `components`: `src/components/ui`.
    - `utils`: `src/lib/utils.ts`.

## Escenarios de Aceptación

### Escenario 1: Configuración exitosa
**Given** un proyecto con Next.js y Tailwind
**When** el CLI ejecute la inicialización
**Then** debe generarse el archivo `components.json` con la configuración correcta.

### Escenario 2: Creación de directorios
**Given** que la ejecución finaliza
**When** revise el sistema de archivos
**Then** debe existir la carpeta `src/components/ui` y el archivo `src/lib/utils.ts`.

### Escenario 3: Integración con Path Aliases
**Given** la configuración de Next.js (`tsconfig.json`)
**When** el CLI detecte los alias
**Then** debe configurarlos correctamente en `components.json` para permitir alias tipo `@/components/ui`.
