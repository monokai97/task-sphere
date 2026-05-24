# Proposal: Política de Borrado en Cascada (Hito 2.3.3)

## El "Porqué" y el Impacto
En un sistema diseñado para gestionar miles de sesiones de invitados anónimos, el crecimiento incontrolado de la base de datos es un riesgo técnico real. Este hito implementa la **Política de Borrado en Cascada**, asegurando que cuando una `GuestSession` sea eliminada (ya sea manualmente o por el proceso automático de Garbage Collection), todos sus datos relacionados (`Tasks` y `TaskLogs`) desaparezcan de forma atómica y completa.

El impacto es la garantía de **Higiene de Datos** y eficiencia de almacenamiento. Sin esta política, la base de datos SQLite se llenaría rápidamente con "registros huérfanos" (tareas sin dueño), degradando el rendimiento de los índices y complicando la auditoría. Al automatizar esta limpieza en la capa de persistencia, cumplimos con el requisito de " purgando sesiones inactivas" definido en el diseño global, asegurando que la aplicación sea sostenible a largo plazo en un entorno local.

## Justificación de la Solución
Aprovecharemos las capacidades nativas de integridad referencial de SQLite combinadas con la configuración de colecciones de PayloadCMS. Configuraremos explícitamente las relaciones para que utilicen `onDelete: 'CASCADE'`. Esta aproximación es superior a realizar borrados manuales en bucle desde el código de aplicación porque es gestionada directamente por el motor de base de datos, garantizando atomicidad (todo o nada) y un rendimiento óptimo durante las tareas de mantenimiento.
