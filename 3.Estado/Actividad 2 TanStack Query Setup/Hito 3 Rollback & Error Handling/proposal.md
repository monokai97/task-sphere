# Proposal: Rollback & Error Handling (Hito 3.2.3)

## El "Porqué" y el Impacto
En un entorno con mutaciones optimistas, el mayor riesgo es la desincronización entre la UI y el servidor ante un fallo inesperado. Este hito introduce los mecanismos de **Rollback & Error Handling**, encargados de revertir la interfaz al último estado conocido y consistente si la persistencia en SQLite falla (ej. por un bloqueo `SQLITE_BUSY` o falta de espacio).

El impacto es la **Consistencia y Confianza**. Sin una estrategia de rollback, el usuario vería una tarea marcada como completada en su pantalla que, tras un refresco, volvería a estar pendiente, generando confusión y frustración. Al implementar el manejo de errores en TanStack Query, garantizamos que la UI sea honesta: si algo falla, el sistema lo informa mediante un Toast y devuelve visualmente la tarea a su estado real, cumpliendo con la guardia de "Resiliencia" del diseño técnico.

## Justificación de la Solución
Utilizaremos los callbacks `onError` y `onSettled` de las mutaciones de TanStack Query. El callback `onError` usará el "snapshot" del estado previo capturado en el Hito 2 para restaurar el caché instantáneamente. El callback `onSettled` asegurará que, independientemente del éxito o fracaso, se dispare un refetch para sincronizar el estado final con SQLite, eliminando cualquier rastro de inconsistencia visual.
