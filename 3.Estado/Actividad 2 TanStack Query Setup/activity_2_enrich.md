# Activity Report: TanStack Query Setup (activity_2_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Configurar TanStack Query v5 para gestionar el estado del servidor, el caché y las mutaciones optimistas, garantizando una sincronización fluida entre el cliente y el Local API de PayloadCMS.
**Archivos Involucrados:** `src/app/providers.tsx`, `src/hooks/useTasks.ts`, `src/lib/query-client.ts`.

## Desglose de Hitos

### Hito 1: Provider & Client Config
- **Descripción:** Inicialización del `QueryClient` con configuraciones por defecto (staleTime, cacheTime) y creación del Provider envolvente para la aplicación Next.js.
- **Verificación:** Existencia de las DevTools de React Query en el entorno de desarrollo y carga exitosa del provider sin errores de hidratación.

### Hito 2: Optimistic Hook Implementation
- **Descripción:** Desarrollo del hook personalizado `useTasks` que implemente la lógica de `onMutate` para actualizaciones instantáneas de UI en operaciones de Toggle y Delete.
- **Verificación:** Al realizar una mutación, la UI debe reflejar el cambio antes de recibir la confirmación del servidor (latencia visual <100ms).

### Hito 3: Rollback & Error Handling
- **Descripción:** Implementación de la lógica de recuperación de estado anterior en `onError` y `onSettled` para manejar fallos en SQLite (ej. base de datos bloqueada).
- **Verificación:** Simulación de un error de red o de base de datos y comprobación de que la UI vuelve automáticamente al estado correcto anterior.

## Justificación Técnica
Este desglose prioriza la experiencia del usuario (UX). Al configurar primero el provider, establecemos el andamiaje necesario para los hooks reactivos. La implementación de mutaciones optimistas y el rollback garantiza que la aplicación se sienta "nativa" y robusta, cumpliendo con las métricas de éxito del diseño técnico.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 Provider & Client Config
- [ ] Hito 2 Optimistic Hook Implementation
- [ ] Hito 3 Rollback & Error Handling
