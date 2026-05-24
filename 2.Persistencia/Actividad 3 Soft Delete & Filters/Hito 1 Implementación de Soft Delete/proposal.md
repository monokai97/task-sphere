# Proposal: Implementación de Soft Delete (Hito 2.3.1)

## El "Porqué" y el Impacto
En una aplicación empresarial de alta fidelidad, la pérdida accidental de datos es inaceptable. El borrado físico inmediato de registros (hard delete) no permite la recuperación de información ni la auditoría post-mortem. Al implementar una lógica de **Soft Delete**, garantizamos que las tareas "eliminadas" por el usuario simplemente se marquen como inactivas en la base de datos, manteniendo la integridad del historial y permitiendo una recuperación sencilla en caso de error.

El impacto es una arquitectura de datos más segura y resiliente. El usuario percibe que la tarea ha desaparecido instantáneamente (UX), mientras que el sistema conserva el registro para logs de auditoría y para evitar inconsistencias en las relaciones de base de datos. Este hito es la base para el aislamiento de datos que se reforzará con filtros globales en el siguiente paso.

## Justificación de la Solución
Se ha elegido interceptar el borrado mediante un hook `beforeDelete` de PayloadCMS. Esta técnica es superior a simplemente añadir un botón de "marcar como oculto" porque centraliza la protección: cualquier intento de eliminar el registro (ya sea desde la API, el panel admin o scripts internos) será capturado y transformado en una actualización de estado (`isDeleted: true`). Esto cumple con la guardia de "Integridad de Datos" definida en el diseño técnico.
