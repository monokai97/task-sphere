# Phase 1 Report: Cimientos e Identidad (phase_1_enrich_phase.md)

## Resumen de la Fase
**Objetivo:** Establecer el núcleo de la aplicación, la gestión de sesiones de invitados y el middleware de seguridad, garantizando una base sólida y escalable según el diseño técnico.

## Listado de Actividades

### Actividad 1: Configuración de Next.js & PayloadCMS
**Descripción:** Inicialización del ecosistema técnico principal y conexión con la persistencia local.
**Objetivo:** Tener un entorno de desarrollo operativo con acceso al Local API de PayloadCMS.
- **Hito 1:** Scaffold de Next.js 14 con App Router y Tailwind CSS.
- **Hito 2:** Integración de PayloadCMS 3.0 y configuración del adaptador SQLite (Drizzle).
- **Hito 3:** Verificación de la conexión a la base de datos y levantamiento del panel de administración inicial.

### Actividad 2: Implementación de Iron-Session & Passport
**Descripción:** Configuración del sistema de identidad "Guest-First" sin persistencia de estado en servidor.
**Objetivo:** Generar y mantener identidades seguras para usuarios anónimos mediante cookies cifradas.
- **Hito 1:** Configuración de Iron-Session (opciones de cookie, encriptación).
- **Hito 2:** Creación de la estrategia anónima de Passport.js para generar el ID de invitado único.
- **Hito 3:** Implementación de la lógica de sellado y apertura de sesión en el flujo de autenticación.

### Actividad 3: Middleware de Recuperación
**Descripción:** Automatización de la persistencia de identidad entre sesiones de navegación.
**Objetivo:** Asegurar que un usuario con cookie siempre tenga un registro correspondiente en la base de datos local.
- **Hito 1:** Creación del middleware de Next.js para la interceptación de solicitudes.
- **Hito 2:** Implementación de la lógica de `upsert` silencioso en la colección `guest-sessions`.
- **Hito 3:** Validación del flujo de recuperación ante cookies existentes sin registro en base de datos.

## Justificación Técnica
Este desglose garantiza que los componentes más críticos y de mayor riesgo (identidad y persistencia) se establezcan primero. La separación en hitos atómicos permite una verificación constante de la integridad del sistema antes de avanzar a la lógica de negocio, cumpliendo con las guardias de implementación de `design.md`.
