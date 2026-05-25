# Tasks: BroadcastChannel Sync (Hito 3.3.1)

1. [ ] Crear `src/lib/constants.ts` y definir `SYNC_CHANNEL_NAME = 'todo_sync'`.
2. [ ] Crear el hook `src/hooks/useSync.ts`.
3. [ ] Implementar la inicialización del `BroadcastChannel` en un `useEffect`.
4. [ ] Crear la función `broadcast` para emitir mensajes.
5. [ ] Implementar el listener dentro del hook para recibir mensajes.
6. [ ] Añadir lógica en el listener para filtrar mensajes que no pertenezcan al `guestId` actual.
7. [ ] Exportar el hook para su uso en los componentes principales del dashboard.