# activity_3_enrich.md

Esta actividad coordina la emisión de eventos de mutación a través de `BroadcastChannel` para asegurar la sincronización en tiempo real entre múltiples pestañas.

## Hitos Encontrados
- **Hito 1: Evento en Toggle**: Emisión tras alternar el estado de completado.
- **Hito 2: Evento en Delete**: Emisión tras la eliminación (soft/hard) de tareas.
- **Hito 3: Evento en Create**: Emisión tras la inserción exitosa de nuevas tareas.

Cada hito está diseñado para ser independiente y procesable mediante `apply_us` para asegurar que la capa de sincronización sea totalmente funcional y reactiva.
