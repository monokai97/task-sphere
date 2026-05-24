# Activity Report: BroadcastChannel Sync (activity_3_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Implementar un bus de eventos en el cliente utilizando la API `BroadcastChannel` para sincronizar el estado de TanStack Query entre múltiples pestañas del navegador, garantizando que las mutaciones realizadas en una instancia se reflejen en todas las demás de forma inmediata.
**Archivos Involucrados:** `src/hooks/useSync.ts`, `src/hooks/useTasks.ts`, `src/app/layout.tsx`.

## Desglose de Hitos

### Hito 1: BroadcastChannel Core Hook
- **Descripción:** Creación del hook personalizado `useSync` que inicialice el canal `todo_sync` y maneje la suscripción/desuscripción al bus de eventos.
- **Verificación:** Log en consola en diferentes pestañas que confirme la recepción de un mensaje de prueba enviado desde una pestaña controlada.

### Hito 2: Emisión de Eventos de Mutación
- **Descripción:** Integración del envío de mensajes en el callback `onSuccess` de las mutaciones en `useTasks`. Los mensajes deben contener el tipo de operación y, opcionalmente, el ID del recurso afectado.
- **Verificación:** Al completar una tarea en la Pestaña A, se debe recibir el evento de éxito en la Pestaña B.

### Hito 3: Invalidación de Caché Cross-Tab
- **Descripción:** Implementación de la lógica de escucha que dispare `queryClient.invalidateQueries` cuando se reciba un evento de mutación desde otra pestaña.
- **Verificación:** Al realizar un cambio en la Pestaña A, la Pestaña B debe recargar automáticamente sus datos desde el servidor (SQLite) sin intervención del usuario.

## Justificación Técnica
Este desglose soluciona el problema de la desincronización en aplicaciones locales sin sockets. Al utilizar la API nativa del navegador, evitamos la dependencia de servicios externos y reducimos la complejidad del backend. La invalidación de caché en el Hito 3 asegura que todas las pestañas presenten siempre la versión más reciente de la "única fuente de verdad" (SQLite), cumpliendo con el diseño técnico.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 BroadcastChannel Core Hook
- [ ] Hito 2 Emisión de Eventos de Mutación
- [ ] Hito 3 Invalidación de Caché Cross-Tab
