# Proposal: Emisión de Eventos de Mutación (Hito 3.3.2)

## El "Porqué" y el Impacto
Este hito integra la lógica de sincronización (Hito 1) con el ciclo de vida de las mutaciones (Actividad 2). El objetivo es que cada vez que una tarea sea creada, editada, completada o eliminada, el sistema emita una señal de broadcast.

El impacto es la **Consistencia Reactiva**. Sin este paso, las otras pestañas abiertas por el usuario permanecerían desactualizadas hasta que el usuario recargue manualmente. Al automatizar la emisión en los callbacks de TanStack Query (`onSuccess`), garantizamos que el estado de la aplicación sea coherente en todo el dispositivo del usuario, cumpliendo con los requisitos de resiliencia y UX del diseño global.

## Justificación de la Solución
Utilizaremos el callback `onSuccess` de las mutaciones en `useTasks`. Esta es la ubicación ideal, ya que asegura que el evento de "tarea actualizada" solo se propague cuando la base de datos (SQLite) y el caché local hayan confirmado que el cambio fue exitoso. Esto evita falsos positivos en las otras pestañas.
