# Activity Report: Modelado de Colecciones (activity_1_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Definir e implementar los esquemas de las colecciones en PayloadCMS (GuestSessions, Tasks, TaskLogs) utilizando el adaptador Drizzle para SQLite, asegurando el tipado estricto y la indexación optimizada.
**Archivos Involucrados:** `src/collections/GuestSessions.ts`, `src/collections/Tasks.ts`, `src/collections/TaskLogs.ts`, `payload.config.ts`.

## Desglose de Hitos

### Hito 1: Esquemas de Colecciones Base
- **Descripción:** Creación de las definiciones de las tres colecciones principales con sus campos básicos (UUIDs, títulos, timestamps).
- **Verificación:** Compilación exitosa del proyecto y visualización de las nuevas colecciones en el panel de administración de Payload.

### Hito 2: Relaciones e Índices
- **Descripción:** Configuración de las relaciones (Guest -> Tasks, Task -> Logs) e implementación de índices en campos críticos como `guestId` y `position` para optimizar las consultas en SQLite.
- **Verificación:** Ejecución de consultas de prueba a través del Local API que demuestren la correcta navegación entre registros relacionados.

### Hito 3: Contratos de Datos y Zod
- **Descripción:** Generación de tipos de TypeScript automáticos desde Payload e integración con esquemas de Zod para la validación de entrada en la capa de transporte.
- **Verificación:** Validación exitosa de un payload de creación de tarea mediante el esquema de Zod correspondiente.

## Justificación Técnica
Este desglose prioriza la integridad estructural. Al definir primero los esquemas y luego las relaciones/índices, minimizamos errores de referencia circular. La integración final con Zod cierra la brecha entre la persistencia y el transporte, garantizando el "Type-Safety de extremo a extremo" requerido en el diseño técnico.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 Esquemas de Colecciones Base
- [ ] Hito 2 Relaciones e Índices
- [ ] Hito 3 Contratos de Datos y Zod
