# Proposal: Invalidación de Caché Cross-Tab (Hito 3.3.3)

## El "Porqué" y el Impacto
La emisión de eventos de mutación (Hito 2) es inútil si el sistema no reacciona ante ellos. Este hito implementa el "escucha" (listener) que cierra el ciclo de sincronización: al recibir un evento de `TASKS_UPDATED` desde otra pestaña, la aplicación debe revalidar su estado local.

El impacto es una **coherencia total entre pestañas**. Sin este listener, la Pestaña B seguiría mostrando datos obsoletos en su caché de TanStack Query, incluso después de recibir el evento de notificación. La invalidación forzada asegura que la próxima vez que el usuario interactúe con la Pestaña B, esta realice un refetch hacia SQLite, garantizando que siempre vea la versión más actual de la lista de tareas.

## Justificación de la Solución
Utilizaremos `queryClient.invalidateQueries({ queryKey: ['tasks', guestId] })` dentro del listener del `BroadcastChannel` en el hook `useSync`. Esta es la forma oficial y más eficiente que ofrece TanStack Query v5 para marcar datos como obsoletos, permitiendo que la librería gestione automáticamente el proceso de refetch de forma optimizada. Al filtrar por `guestId`, aseguramos que solo se invalida el caché del invitado afectado, manteniendo la eficiencia del sistema.
