# Proposal: Lógica de Diferenciales (Diff) (Hito 2.2.2)

## El "Porqué" y el Impacto
Este hito se encarga de la inteligencia detrás de la auditoría. Registrar el objeto completo de una tarea en cada cambio es ineficiente en términos de almacenamiento y dificulta la lectura humana o programática de la historia de cambios. Al implementar una lógica de **Diferenciales (Diff)**, aseguramos que los logs de auditoría sean concisos, almacenando únicamente lo que realmente cambió.

El impacto directo es la optimización del crecimiento del archivo SQLite y una mayor claridad en la trazabilidad. Por ejemplo, si un usuario solo marca una tarea como completada, el log reflejará `{ "completed": true }` en lugar de duplicar todo el texto de la tarea. Esta precisión es vital para cumplir con el requisito de "Trazabilidad y Logs de Auditoría en Tiempo Real" definido en el diseño global.

## Justificación de la Solución
Se implementará una utilidad pura de TypeScript que compare dos estados de un objeto de tarea. Esta aproximación es superior a usar librerías externas pesadas de diffing, ya que nuestro esquema de tareas es predecible y plano. Al mantener la lógica simple y centrada en los campos de negocio (`title`, `description`, `completed`, `position`, `isDeleted`), garantizamos un rendimiento máximo y una integración perfecta con el hook `afterChange` implementado en el hito anterior.
