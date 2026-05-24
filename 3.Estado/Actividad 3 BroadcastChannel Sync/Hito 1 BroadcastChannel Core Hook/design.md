# Design: BroadcastChannel Sync (Hito 3.3.1)

## Decisiones de Arquitectura Específicas
1. **Channel Naming:** Nombre de canal constante (`todo_sync`) definido en `/src/lib/constants.ts`.
2. **Event Payload:** El mensaje siempre incluirá el `guestId` para evitar que usuarios diferentes en el mismo navegador se sincronicen entre sí.
3. **Hook Abstraction:** El hook expondrá un método `broadcast(type)` para simplificar el envío de mensajes.

## Diagrama de Comunicación Cross-Tab
```mermaid
graph LR
    Tab1[Pestaña 1 / UI] -->|Mutation Success| H1[useSync.broadcast]
    H1 -->|BroadcastChannel| B((Canal: todo_sync))
    B -->|Receive Event| H2[useSync.listener]
    H2 -->|Invalidate Query| TQ[TanStack Query Cache]
    TQ --> Tab2[Pestaña 2 / UI Re-render]
```

## Contrato de Mensajes
```typescript
interface SyncEvent {
  type: 'TASKS_UPDATED' | 'SESSION_UPDATED';
  guestId: string;
}
```
