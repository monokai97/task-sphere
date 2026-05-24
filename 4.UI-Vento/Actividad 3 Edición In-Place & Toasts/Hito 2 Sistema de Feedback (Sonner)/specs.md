# Specs: Sistema de Feedback (Sonner) (Hito 4.3.2)

## Requisitos Técnicos
- **Librería:** `sonner` (v1.x).
- **Integración:** Debe estar montado en el layout raíz (`src/app/layout.tsx`) para ser accesible desde cualquier parte de la app.
- **Tipos de Mensaje:** Success, Error, Loading.

## Escenarios de Aceptación

### Escenario 1: Confirmación de Éxito
**Given** que el usuario completó una tarea exitosamente
**When** la mutación de TanStack Query retorne un `onSuccess`
**Then** debe aparecer un Toast discreto con el mensaje "Tarea actualizada" (o similar).

### Escenario 2: Notificación de Error Crítico
**Given** que el servidor rechaza una mutación (ej. error 500)
**When** el hook de mutación entre en `onError`
**Then** debe aparecer un Toast de error informando que el cambio no pudo guardarse.

### Escenario 3: Feedback de Carga
**Given** una operación lenta de red
**When** la mutación esté en estado `pending`
**Then** el sistema puede opcionalmente mostrar un Toast de carga (si la operación toma más de 500ms).
