# Activity Report: Guardias de Solo Lectura (activity_1_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Implementar un sistema de detección y bloqueo de mutaciones ante fallos críticos de persistencia en SQLite, garantizando que la aplicación degrade elegantemente a un modo de "Solo Lectura" informativo.
**Archivos Involucrados:** `src/lib/payload.ts`, `src/hooks/useResilience.ts`, `src/components/ui/ResilienceBanner.tsx`.

## Desglose de Hitos

### Hito 1: Persistence Error Interceptor
- **Descripción:** Implementación de un interceptor en el adaptador de PayloadCMS que capture excepciones específicas de SQLite relacionadas con almacenamiento (ej. `SQLITE_FULL`, `SQLITE_CANTOPEN`).
- **Verificación:** Simulación de un error de escritura y confirmación de que el error es capturado y clasificado correctamente por el sistema.

### Hito 2: Resilience State Management
- **Descripción:** Creación de un context o estado global reactivo (`useResilience`) que almacene el flag `isReadOnly` y lo distribuya a través de toda la aplicación.
- **Verificación:** Cambio manual del flag en las DevTools y verificación de que los componentes suscritos reaccionan al cambio de estado.

### Hito 3: UI Lock & Banner
- **Descripción:** Desarrollo del componente `ResilienceBanner` y aplicación de la lógica de bloqueo en todos los elementos de mutación (botones de guardado, checkbox de tareas, drag & drop) basándose en el estado global.
- **Verificación:** Visualización persistente del banner de advertencia y comprobación de que todas las acciones de escritura quedan deshabilitadas cuando el modo de solo lectura está activo.

## Justificación Técnica
Este desglose prioriza la honestidad hacia el usuario y la integridad de los datos. Al interceptar el error en la fuente (Hito 1), evitamos estados inconsistentes en el cliente. El manejo de estado global (Hito 2) asegura una respuesta coherente en toda la UI, mientras que el bloqueo visual (Hito 3) previene la frustración del usuario al intentar realizar cambios que no se persistirían, cumpliendo con la guardia operativa de "Strict Read-Only Mode" de `design.md`.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 Persistence Error Interceptor
- [ ] Hito 2 Resilience State Management
- [ ] Hito 3 UI Lock & Banner
