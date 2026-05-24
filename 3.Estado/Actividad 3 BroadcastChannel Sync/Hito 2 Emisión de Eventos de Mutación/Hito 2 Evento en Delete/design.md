# Design: Evento en Delete (Hito 3.3.2.2)
       2
       3 ## Decisiones de Arquitectura
       4 1. **Hook Integration:** La llamada a `broadcast` se colocará en el
         `onSuccess` de la mutación `useDeleteTask`.
       5 2. **Event Payload:** Incluiremos el `deletedTaskId` en el mensaje
         para permitir invalidaciones de caché más granulares en el futuro
         si fuera necesario.
       6
       7 ## Diagrama
       8 ```mermaid
       9 graph TD
      10     UI[UI Delete Button] --> M[useDeleteTask Mutation]
      11     M -->|Success| B[useSync.broadcast]
      12     B -->|Event| C((BroadcastChannel))
      13     C -->|On Receive| I[Invalidate Tasks Query]
      14 ```
      15
      16 ## Contrato de Implementación (Snippet)
      17 ```typescript
      18 // useDeleteTask mutation hook
      19 onSuccess: () => {