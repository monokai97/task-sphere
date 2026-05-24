# Proposal: Esquemas de Colecciones Base (Hito 2.1.1)

## El "Porqué" y el Impacto
Este hito define el corazón de la persistencia de la aplicación. Al establecer los esquemas de las colecciones `GuestSessions`, `Tasks` y `TaskLogs` en PayloadCMS, estamos creando el contrato de datos sobre el cual se construirá toda la lógica de negocio. La correcta definición de estos esquemas es vital para asegurar que el aislamiento de datos (por `guestId`) y la trazabilidad (logs) funcionen de forma nativa desde la capa de base de datos.

El impacto es una base de datos SQLite (vía Drizzle) estructurada y optimizada, lista para soportar las métricas de rendimiento y las guardias de seguridad definidas en el diseño global. Al utilizar PayloadCMS como motor de esquemas, obtenemos automáticamente validaciones en el servidor, tipos de TypeScript y una interfaz administrativa funcional para cada entidad.

## Justificación de la Solución
Se han elegido tres colecciones separadas para desacoplar las responsabilidades:
1.  **GuestSessions:** Gestiona el ciclo de vida de la identidad anónima.
2.  **Tasks:** El núcleo de la funcionalidad, optimizado para el reordenamiento lexicográfico.
3.  **TaskLogs:** Una colección secundaria para auditoría que crece de forma independiente sin afectar el rendimiento de las consultas de tareas principales.
Esta estructura permite implementar el borrado en cascada y los filtros de acceso de forma mucho más limpia y eficiente que un modelo de datos plano.
