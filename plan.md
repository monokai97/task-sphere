# Strategic Roadmap: Enterprise Guest-First To-Do App (plan.md)

## Fase 1: Cimientos e Identidad (Guest-First)
- **Objetivo:** Establecer el núcleo de la aplicación, la gestión de sesiones de invitados y el middleware de seguridad.
- **Actividades Detalladas:**
    1. **Configuración de Next.js & PayloadCMS**: Inicializar el proyecto Next.js 14 y configurar el Local API de PayloadCMS 3.0 con el adaptador de SQLite.
    2. **Implementación de Iron-Session & Passport**: Configurar la estrategia de invitado para generar UUIDs y sellarlos en cookies cifradas.
    3. **Middleware de Recuperación**: Crear el middleware que valide la cookie y realice el upsert silencioso del `GuestSession` en la base de datos.
- **Entregables:** Proyecto base funcional, sistema de sesión de invitado operativo.

## Fase 2: Persistencia y Esquemas (Drizzle/Payload)
- **Objetivo:** Definir la estructura de datos y los contratos de persistencia.
- **Actividades Detalladas:**
    1. **Modelado de Colecciones**: Definir `GuestSessions`, `Tasks` y `TaskLogs` en PayloadCMS.
    2. **Hooks de Auditoría**: Implementar hooks `afterChange` y `afterDelete` para alimentar la colección `TaskLogs`.
    3. **Soft Delete & Filters**: Configurar filtros globales para ocultar tareas marcadas como `isDeleted`.
- **Entregables:** Esquema de base de datos SQLite migrado y hooks de auditoría activos.

## Fase 3: Lógica de Estado y Sincronización
- **Objetivo:** Implementar la inteligencia del cliente y la comunicación entre pestañas.
- **Actividades Detalladas:**
    1. **Integración de LexoRank**: Implementar helpers para el cálculo de posiciones lexicográficas en cliente y servidor.
    2. **TanStack Query Setup**: Configurar el Provider y los hooks base (`useTasks`) con soporte para mutaciones optimistas.
    3. **BroadcastChannel Sync**: Crear el hook `useSync` para la invalidación de caché multi-pestaña.
- **Entregables:** Sistema de ordenamiento funcional y sincronización en tiempo real entre pestañas.

## Fase 4: Interfaz de Usuario (Vento Design)
- **Objetivo:** Construir la experiencia visual de alta fidelidad.
- **Actividades Detalladas:**
    1. **Sistema de Componentes (Shadcn)**: Configurar Radix UI y Tailwind con la paleta de neutros y tipografía Geist.
    2. **Vistas Core (Mi Día)**: Desarrollar el Dashboard, el estado vacío con estilo Vento y la lista de tareas con Framer Motion.
    3. **Edición In-Place & Toasts**: Implementar los componentes de edición rápida y notificaciones visuales con Sonner.
- **Entregables:** UI responsiva, Dark Mode nativo y transiciones fluidas.

## Fase 5: Resiliencia y Portabilidad
- **Objetivo:** Asegurar la integridad de los datos y la exportación.
- **Actividades Detalladas:**
    1. **Guardias de Solo Lectura**: Implementar la detección de errores de storage y el banner de advertencia global.
    2. **Endpoint de Exportación JSON**: Crear la API Route para compilar y descargar los datos del invitado.
    3. **Garbage Collection (Mantenimiento)**: Desarrollar el flujo de purgado de sesiones inactivas (>7 días).
- **Entregables:** Sistema de exportación funcional y mecanismos de resiliencia ante fallos de disco.
