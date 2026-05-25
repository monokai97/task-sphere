# Calidad: Contratos de Datos y Zod

## Reporte de Pruebas (Hito 2.1.3)

### Resultados de Ejecución
- **Tests Totales:** 9
- **Exitosos:** 9
- **Fallidos:** 0
- **Cobertura:** Esquemas de creación de tareas, actualización parcial, cambio de estado y perfiles de sesión.

### Hallazgos y Correcciones
1. **Seguridad por Omisión:** Se validó que el comportamiento por defecto de Zod al parsear objetos es ignorar los campos no definidos en el esquema. Esto se probó exitosamente enviando campos maliciosos/desconocidos en el payload de sesión, los cuales fueron descartados sin error.
2. **Coherencia de Mensajes:** Se estandarizaron los mensajes de error en español para mejorar la experiencia de usuario final en el frontend cuando la validación falle.

### Validación Técnica
- Los esquemas Zod actúan como la primera línea de defensa antes de llegar a la base de datos Payload/SQLite.
- El uso de `.partial()` en `updateTaskSchema` permite actualizaciones quirúrgicas desde el frontend (ej. solo cambiar el título).
- La validación estricta de UUID en las relaciones garantiza que no se creen registros vinculados a identidades malformadas.
