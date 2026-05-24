# Proposal: Validación y Persistencia (Hito 3.1.3)

## El "Porqué" y el Impacto
En un sistema de ordenamiento distribuido (cliente-servidor), el servidor no debe confiar ciegamente en los valores de posición generados por el cliente. Este hito implementa la **Capa de Validación y Persistencia** final para los strings de LexoRank, asegurando que la base de datos SQLite solo almacene índices coherentes y que la lógica de reordenamiento sea auditable y resiliente ante posibles fallos de sincronización.

El impacto es la **Integridad Absoluta del Orden**. Al validar los rangos en el servidor antes de guardarlos, protegemos al sistema contra ataques de manipulación de payloads o errores lógicos en el frontend que podrían causar colisiones de índices. Este hito cierra el ciclo de la Actividad 1 de la Fase 3, garantizando que el "único origen de la verdad" (SQLite) mantenga siempre una secuencia lógica perfecta para las tareas de cada invitado.

## Justificación de la Solución
Se utilizará una combinación de **Zod Validation** en el API y **PayloadCMS Hooks** (`beforeChange`) en la colección de tareas. Esta aproximación de doble capa asegura que cualquier string de `position` sea validado tanto en el punto de entrada del API como en la capa de persistencia interna. Además, incluiremos una lógica de "limpieza" que asegure que los strings de LexoRank se mantengan dentro de límites de longitud manejables, cumpliendo con la guardia de "LexoRank Re-balancing" definida en el diseño técnico.
