# Propuesta Técnica: Hito 2 - Ejecución de Limpieza en Cascada

## 1. Contexto y Problema
Tras identificar las sesiones inactivas en el Hito 1, es imperativo eliminarlas del sistema. Una eliminación manual de tareas y logs asociados sería compleja, propensa a errores y afectaría la integridad de la base de datos si no se gestiona correctamente.

## 2. Solución Propuesta
Utilizar la funcionalidad nativa de **borrado en cascada (Cascade Delete)** de PayloadCMS/Drizzle. Al eliminar la entidad `GuestSession` principal, el sistema está configurado para eliminar automáticamente todos los registros relacionados en las colecciones `Tasks` y `TaskLogs`.

### Justificación Técnica:
- **Seguridad:** El borrado en cascada gestionado por el motor de base de datos es atómico y consistente, eliminando el riesgo de registros huérfanos.
- **Eficiencia:** Reduce drásticamente la complejidad del código, delegando la integridad referencial al esquema de datos.
- **Escalabilidad:** Esta solución funciona independientemente de la cantidad de tareas o logs asociados a cada sesión.

## 3. Impacto en el Sistema
Este hito realiza la acción destructiva necesaria para el mantenimiento. El sistema recuperará espacio en disco y mejorará el rendimiento de las consultas, ya que el archivo SQLite será compactado (o su espacio reutilizado) tras la eliminación.
