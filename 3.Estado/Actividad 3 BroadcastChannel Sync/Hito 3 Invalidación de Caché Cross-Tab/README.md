# Documentación del Hito: Invalidación de Caché Cross-Tab (Hito 3.3.3)

## Resumen
Se ha finalizado la integración de la sincronización de estado entre pestañas utilizando `BroadcastChannel` en el hook `useSync.ts`. Este mecanismo permite que cualquier actualización de tareas en una pestaña invalide automáticamente la caché de TanStack Query en todas las demás pestañas abiertas para el mismo invitado.

## Lógica Implementada
- **Hook `useSync.ts`**:
  - Se instancia un `BroadcastChannel` con el nombre constante definido en el sistema (`todo_sync`).
  - Se implementó el listener `onmessage` que:
    1. Filtra los mensajes para procesar únicamente aquellos dirigidos al `guestId` actual.
    2. Identifica el tipo de evento (`TASK_UPDATED`).
    3. Ejecuta `queryClient.invalidateQueries({ queryKey: ['tasks', guestId] })` para forzar un re-fetch de los datos.
  - Se garantiza el cierre del canal (`channel.close()`) en la fase de limpieza del `useEffect` para prevenir fugas de memoria.

## Comportamiento Esperado
1. Al realizar una mutación (crear, toggle, borrar) en una pestaña, se emite el evento mediante el canal.
2. Todas las pestañas abiertas para ese `guestId` reciben el mensaje.
3. Cada pestaña procesa el mensaje e invalida su caché de tareas.
4. TanStack Query refresca automáticamente los datos, manteniendo la UI sincronizada en tiempo real.
