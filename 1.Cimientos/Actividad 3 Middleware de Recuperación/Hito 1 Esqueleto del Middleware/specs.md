# Specs: Esqueleto del Middleware (Hito 1.3.1)

## Requisitos Técnicos
- **Ubicación:** `src/middleware.ts`.
- **Detección:** Debe leer la cookie `todo_guest_session`.
- **Filtrado:** Debe ejecutarse solo en rutas relevantes (Dashboard, API de negocio).
- **Next.js Version:** Compatible con Next.js 14 App Router Middleware.

## Escenarios de Aceptación

### Escenario 1: Interceptación de Rutas del Dashboard
**Given** un usuario intentando acceder a `/dashboard`
**When** el middleware procese la solicitud
**Then** debe ser capaz de detectar la presencia o ausencia de la cookie de sesión.

### Escenario 2: Exclusión de Archivos Estáticos
**Given** una solicitud para `/favicon.ico` o archivos en `/_next/static`
**When** el middleware evalúe el `config.matcher`
**Then** no debe ejecutarse, permitiendo el paso directo de la solicitud para optimizar el rendimiento.

### Escenario 3: Propagación de Identidad
**Given** una cookie válida presente en la solicitud
**When** el middleware termine su ejecución
**Then** debe permitir que la solicitud continúe hacia el Route Handler o Page correspondiente sin alteraciones en el flujo HTTP básico (en este hito inicial).
