# Proposal: Emisión de Eventos en Delete (Hito 3.3.2.2)

## El "Porqué" y el Impacto
Al igual que con el toggle de estado, la eliminación de una tarea es una mutación crítica que afecta la estructura de la lista en todas las pestañas abiertas. Si un usuario elimina una tarea en la Pestaña A y no se sincroniza en la Pestaña B, el usuario podría intentar interactuar con una tarea inexistente (o un índice desactualizado), lo que derivaría en errores de servidor y una mala experiencia.

Este hito completa la cobertura de eventos de mutación, garantizando que el borrado (tanto físico como soft-delete) sea un evento propagado. El impacto es la total coherencia del estado visual de la lista de tareas a través de todo el dispositivo del invitado.

## Justificación de la Solución
Inyectar la lógica de broadcast en el `onSuccess` del hook `useDeleteTask` es la solución más limpia. Al ser una operación de escritura, solo queremos notificar a las demás pestañas una vez que el backend haya confirmado la eliminación (o el marcado como `isDeleted`). Esto sigue el principio de que la UI solo reacciona ante estados confirmados por la "fuente de verdad" (SQLite).
