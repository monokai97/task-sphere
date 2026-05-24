# Phase 5 Report: Resiliencia y Portabilidad (phase_5_enrich_phase.md)

## Resumen de la Fase
**Objetivo:** Asegurar la integridad de la experiencia del usuario ante fallos críticos de almacenamiento, proporcionar mecanismos de portabilidad de datos y automatizar el mantenimiento preventivo de la base de datos local.

## Listado de Actividades

### Actividad 1: Guardias de Solo Lectura
**Descripción:** Implementación de mecanismos de protección ante errores de persistencia.
**Objetivo:** Evitar la corrupción de datos y la pérdida de confianza del usuario bloqueando escrituras si el storage falla.
- **Hito 1:** Implementación de la detección de errores de escritura (ej. `SQLITE_FULL`) en el adaptador de PayloadCMS.
- **Hito 2:** Creación del estado global de resiliencia y el banner de advertencia persistente en la UI.
- **Hito 3:** Lógica de deshabilitación de mutaciones (botones, drag & drop) en el frontend ante el modo de solo lectura.

### Actividad 2: Endpoint de Exportación JSON
**Descripción:** Creación de un sistema de respaldo portátil para el usuario invitado.
**Objetivo:** Permitir que el usuario descargue toda su información en un formato estándar y portable.
- **Hito 1:** Implementación de un API Route seguro validado por Iron-Session.
- **Hito 2:** Lógica de agregación de datos (Perfil + Tareas + Historial) utilizando el Local API de PayloadCMS.
- **Hito 3:** Implementación del componente de descarga en la interfaz de configuración/usuario.

### Actividad 3: Garbage Collection (Mantenimiento)
**Descripción:** Automatización del purgado de datos obsoletos.
**Objetivo:** Mantener el rendimiento y el tamaño controlado del archivo SQLite local eliminando sesiones inactivas.
- **Hito 1:** Implementación de la lógica de identificación de `GuestSessions` inactivas por más de 7 días.
- **Hito 2:** Verificación de la integridad del borrado en cascada de tareas y logs vinculados.
- **Hito 3:** Creación de un flujo de mantenimiento (endpoint protegido o script de servidor) para la ejecución periódica del purgado.

## Justificación Técnica
Este desglose cierra el ciclo de vida del producto asegurando que la aplicación sea "buen ciudadano" en el dispositivo local. Al separar la resiliencia operativa de la portabilidad, garantizamos que el usuario nunca se sienta atrapado o desinformado ante fallos de infraestructura local (como disco lleno), cumpliendo rigurosamente con las guardias de `design.md`.
