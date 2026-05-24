# Specs: Scaffold de Next.js & Tailwind (Hito 1.1.1)

## Requisitos Técnicos
- **Framework:** Next.js 14.x (App Router requerido).
- **Lenguaje:** TypeScript (Estricto).
- **Estilos:** Tailwind CSS v3.x.
- **Fuentes:** Geist Sans (o Inter como fallback).
- **Configuración:** Soporte para Dark Mode vía class strategy.

## Escenarios de Aceptación

### Escenario 1: Inicialización del Proyecto
**Given** que el directorio del proyecto está vacío (excepto por la documentación)
**When** se ejecute el comando de creación de Next.js con las flags de App Router y Tailwind
**Then** se deben generar los archivos `package.json`, `tailwind.config.ts`, `tsconfig.json` y la carpeta `src/app`.

### Escenario 2: Configuración de Estilos Vento
**Given** el archivo `tailwind.config.ts` generado
**When** se añadan los tokens de colores para "neutros profundos" y la tipografía Geist
**Then** el comando `npm run build` debe completarse sin errores de configuración de estilos.

### Escenario 3: Verificación Visual Inicial
**Given** el servidor de desarrollo corriendo (`npm run dev`)
**When** un usuario acceda a `http://localhost:3000`
**Then** debe visualizarse la página de bienvenida con un fondo neutro oscuro y tipografía sans-serif limpia.
