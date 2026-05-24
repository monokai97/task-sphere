# Specs: Validación y Persistencia (Hito 4.3.1.2)

## Requisitos Técnicos
- **Validación:** Uso de `TaskUpdateSchema` (Zod) antes de realizar la mutación.
- **Mutación:** `useUpdateTask` que gestione el flujo optimista y el manejo de errores.
- **Feedback:** Integración con el sistema de Sonner (toasts) para errores de validación o persistencia.

## Escenarios de Aceptación

### Escenario 1: Persistencia exitosa
**Given** un usuario que cambia el título a "Nueva Tarea"
**When** se envíe la mutación al servidor
**Then** PayloadCMS debe procesar la actualización en SQLite
**And** TanStack Query debe confirmar el éxito y actualizar el caché.

### Escenario 2: Validación de Servidor fallida
**Given** un título inválido (ej. 2 caracteres)
**When** el usuario intente guardar
**Then** el esquema Zod del API debe rechazar el cambio (400 Bad Request)
**And** el sistema debe revertir el título visualmente a su valor original.

### Escenario 3: Manejo de errores de base de datos
**Given** un error de bloqueo en SQLite (SQLITE_BUSY)
**When** la petición falle tras los reintentos
**Then** el usuario debe recibir un Toast de error informando que el cambio no pudo persistirse.
