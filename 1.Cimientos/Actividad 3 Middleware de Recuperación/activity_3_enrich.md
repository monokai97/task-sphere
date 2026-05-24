# Activity Report: Middleware de Recuperación (activity_3_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Implementar un middleware de Next.js que intercepte las peticiones para validar la sesión del invitado y asegure que su identificador esté registrado en la base de datos de PayloadCMS (SQLite).
**Archivos Involucrados:** `src/middleware.ts`, `src/lib/payload.ts`, `src/lib/session.ts`.

## Desglose de Hitos

### Hito 1: Esqueleto del Middleware
- **Descripción:** Creación del archivo `middleware.ts` en la raíz de `/src` con la lógica de detección de la cookie de `iron-session` y la configuración de los matchers de rutas.
- **Verificación:** Log en consola o redirección básica que confirme que el middleware se ejecuta en las rutas del dashboard.

### Hito 2: Lógica de Upsert de Sesión
- **Descripción:** Integración del Local API de PayloadCMS dentro del middleware para realizar un `upsert` (crear si no existe, actualizar si existe) del registro `GuestSession` usando el ID de la cookie.
- **Verificación:** Al acceder a la app con una cookie válida, se debe verificar en el panel de administración de Payload que el registro de sesión ha sido creado o actualizado.

### Hito 3: Validación del Flujo de Recuperación
- **Descripción:** Implementación del manejo de casos de borde: cookies expiradas, IDs malformados o fallos de conexión a SQLite. Asegurar que el sistema regenere una sesión limpia si la recuperación falla.
- **Verificación:** Escenario de prueba donde se elimina manualmente el registro en base de datos pero se mantiene la cookie; el sistema debe recrear el registro silenciosamente al recargar.

## Justificación Técnica
Este desglose prioriza la automatización de la persistencia de identidad. Al colocar esta lógica en el middleware, garantizamos que cualquier petición a las rutas de negocio ya cuente con un entorno de datos válido en SQLite, cumpliendo con la decisión de arquitectura de "recuperación de sesión transparente" definida en `design.md`.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 Esqueleto del Middleware
- [ ] Hito 2 Lógica de Upsert de Sesión
- [ ] Hito 3 Validación del Flujo de Recuperación
