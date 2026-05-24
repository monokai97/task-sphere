# Proposal: Evento en Create (Hito 3.3.2.3)

## El "Porqué" y el Impacto
La creación de tareas es el evento que da inicio al flujo de trabajo del usuario. Si un usuario crea una tarea en la Pestaña A y su Dashboard en la Pestaña B no la muestra, la confianza en la persistencia local de la aplicación se debilita. Este hito cierra la tríada de eventos de mutación (Toggle, Delete, Create), asegurando que cualquier adición sea propagada en tiempo real.

El impacto es una **sincronización completa del estado de la aplicación**. La Pestaña B recibirá el evento `TASKS_UPDATED` y activará un refetch, lo que garantiza que la nueva tarea sea visible casi instantáneamente tras su persistencia en SQLite, cumpliendo con la expectativa de una aplicación "Guest-First" robusta y reactiva.

## Justificación de la Solución
Al igual que en los hitos anteriores, la emisión ocurrirá en el `onSuccess` de `useCreateTask`. Dado que la creación de una tarea genera un nuevo identificador único y una nueva posición (LexoRank), la invalidación completa del caché de tareas para ese invitado es la estrategia más segura y simple para refrescar la lista completa, incluyendo la nueva tarea, sin necesidad de manipular manualmente los arrays del caché local.
