# Proposal: Persistencia en TaskLogs (Hito 2.2.3)

## El "Porqué" y el Impacto
Este hito completa el ciclo de auditoría del sistema, transformando los eventos capturados y procesados en registros permanentes y consultables. La persistencia de los logs en la colección `TaskLogs` es fundamental para cumplir con los requisitos de trazabilidad empresarial, permitiendo reconstruir el historial de cualquier tarea y entender el comportamiento del usuario invitado sin comprometer la privacidad.

El impacto es la creación de un rastro de auditoría inmutable en SQLite. Al centralizar estos registros a través del Local API de PayloadCMS, aseguramos que la información sea accesible tanto para administradores del sistema (vía panel admin) como para el usuario final si decidiera exportar su historial. Esta capa de persistencia es la garantía de integridad que diferencia a una aplicación de tareas simple de una solución de grado empresarial.

## Justificación de la Solución
Se utilizará el método `payload.create` dentro de los hooks de la colección `Tasks`. Esta aproximación es óptima porque aprovecha la infraestructura ya configurada de PayloadCMS, garantizando que los logs hereden automáticamente las reglas de seguridad, validación y tipado del sistema. Al realizar la persistencia de forma asíncrona al final del hook `afterChange`, mantenemos el rendimiento de la operación principal de la tarea.
