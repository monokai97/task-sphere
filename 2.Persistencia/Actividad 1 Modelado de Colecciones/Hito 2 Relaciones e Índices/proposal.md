# Proposal: Relaciones e Índices (Hito 2.1.2)

## El "Porqué" y el Impacto
Este hito establece el tejido conectivo de nuestra base de datos. Mientras que el hito anterior definió las entidades aisladas, este hito implementa la integridad referencial y las estrategias de acceso rápido necesarias para una aplicación empresarial. La correcta configuración de las relaciones entre `GuestSessions`, `Tasks` y `TaskLogs` es fundamental para el aislamiento de datos del invitado y la trazabilidad de sus acciones.

El impacto es doble:
1.  **Integridad de Datos:** Aseguramos que ninguna tarea pueda existir sin un invitado asociado y que los logs siempre apunten a una tarea válida, habilitando además el borrado en cascada (Cascading Delete).
2.  **Rendimiento:** La implementación de índices en las claves foráneas y en el campo de ordenamiento (`position`) garantiza que las consultas a SQLite sigan siendo instantáneas incluso cuando el número de tareas crezca, cumpliendo con la métrica de latencia <100ms.

## Justificación de la Solución
Utilizaremos el campo nativo `relationship` de PayloadCMS, el cual mapea eficientemente a claves foráneas en SQLite vía Drizzle. Para los índices, utilizaremos la propiedad `index: true` en los campos críticos, lo que instruye al motor de base de datos a crear estructuras de búsqueda optimizadas (B-Trees), esenciales para el filtrado por `guestId` y el ordenamiento por `position`.
