# Specs: Resilience State Management (Hito 5.1.2)

## Requisitos Técnicos
- **Contexto:** `ResilienceContext` con estado `{ isReadOnly: boolean }`.
- **Hook:** `useResilience()` para consumir el estado en componentes hijos.
- **Provider:** `ResilienceProvider` a nivel de App Layout.

## Escenarios de Aceptación

### Escenario 1: Activación del Modo Solo Lectura
**Given** el sistema en estado normal (`isReadOnly: false`)
**When** el `EventBus` emita una señal de `STORAGE_CRITICAL_FAILURE`
**Then** el `ResilienceProvider` debe actualizar su estado a `isReadOnly: true`.

### Escenario 2: Reactividad en Componentes
**Given** un botón de "Crear Tarea" que consume `useResilience()`
**When** el estado `isReadOnly` cambie a `true`
**Then** el botón debe deshabilitarse (`disabled`) automáticamente.

### Escenario 3: Persistencia del Estado
**Given** un cambio a `isReadOnly: true`
**When** el usuario navegue a una sub-ruta del dashboard
**Then** el contexto debe conservar el estado de solo lectura (almacenado en memoria durante la sesión del usuario).
