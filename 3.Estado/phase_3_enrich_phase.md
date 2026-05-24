# Phase 3 Report: Lógica de Estado y Sincronización (phase_3_enrich_phase.md)

## Resumen de la Fase
**Objetivo:** Implementar la inteligencia del cliente para el ordenamiento dinámico y asegurar la coherencia del estado mediante sincronización multi-pestaña y mutaciones optimistas.

## Listado de Actividades

### Actividad 1: Integración de LexoRank
**Descripción:** Implementación del sistema de ordenamiento lexicográfico para tareas.
**Objetivo:** Permitir el reordenamiento fluido de tareas (Drag & Drop) sin colisiones de base de datos.
- **Hito 1:** Implementación de la lógica de ayuda de `lexorank` en `/lib/lexo.ts`.
- **Hito 2:** Creación de utilidades para el cálculo de rangos entre elementos existentes.
- **Hito 3:** Integración de la validación de rangos en la capa de transporte (Zod schemas).

### Actividad 2: TanStack Query Setup
**Descripción:** Configuración del motor de estado de servidor y mutaciones optimistas.
**Objetivo:** Garantizar una UI reactiva con latencia percibida cero (<100ms).
- **Hito 1:** Configuración global del `QueryClient` y Provider en el App Router.
- **Hito 2:** Implementación de `useTasks` con soporte para queries filtradas por `guestId`.
- **Hito 3:** Definición de la lógica de `onMutate` y `rollback` para el manejo de errores en SQLite.

### Actividad 3: BroadcastChannel Sync
**Descripción:** Sincronización de estado en tiempo real entre pestañas del navegador.
**Objetivo:** Mantener la coherencia visual del usuario independientemente de la pestaña donde realice la acción.
- **Hito 1:** Implementación del hook `useSync` basado en la API nativa `BroadcastChannel`.
- **Hito 2:** Configuración del bus de eventos para emitir señales tras mutaciones exitosas.
- **Hito 3:** Lógica de invalidación automática de queries en instancias pasivas de la aplicación.

## Justificación Técnica
Este desglose aborda la complejidad de la sincronización asíncrona. Al separar la lógica de ordenamiento (LexoRank) de la gestión de red (TanStack Query), aseguramos que la UI sea determinista. La inclusión de `BroadcastChannel` es vital para una aplicación "Guest-First" local, donde el usuario espera que su estado sea global en el dispositivo actual.
