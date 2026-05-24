# Tasks: Invalidación de Caché Cross-Tab (Hito 3.3.3)

1. [ ] Importar `useQueryClient` de `@tanstack/react-query` en `src/hooks/useSync.ts`.
2. [ ] Obtener el `queryClient` dentro del hook `useSync`.
3. [ ] Implementar la función de manejo de mensajes (`onmessage`) dentro del `useEffect` de inicialización del canal.
4. [ ] Agregar la lógica condicional que compara el `guestId` del mensaje con el del contexto actual.
5. [ ] Invocar `queryClient.invalidateQueries({ queryKey: ['tasks', guestId] })` cuando la condición se cumpla.
6. [ ] Probar la integración forzando la emisión del evento desde la consola del navegador.
7. [ ] Asegurar la limpieza del listener al desmontar el hook (o canal).
