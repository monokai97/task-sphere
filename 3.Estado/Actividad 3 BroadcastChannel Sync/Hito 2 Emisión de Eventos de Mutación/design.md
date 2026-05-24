# Design: Emisión de Eventos de Mutación (Hito 3.2.2)

## Decisiones de Arquitectura Específicas
1. **Mutation Callback Injection:** La llamada a `broadcast()` se inyectará directamente en las funciones de mutación de `useTasks` para mantener la lógica acoplada al ciclo de vida del dato.
2. **Event Typing:** Utilizar el contrato `SyncEvent` (definido en Hito 1) para tipar estrictamente los mensajes enviados.

## Diagrama de Emisión
```mermaid
graph TD
    M[Mutation (Toggle/Delete)] --> S[Server PayloadCMS]
    S -->|Success| Callback[onSuccess Callback]
    Callback --> Sync[useSync.broadcast]
    Sync --> Channel((BroadcastChannel))
```

## Contrato de Implementación (Snippet)
```typescript
// useTasks.ts
const toggleMutation = useMutation({
  mutationFn: toggleTask,
  onSuccess: () => {
    broadcast({ type: 'TASKS_UPDATED', guestId });
  }
});
```
