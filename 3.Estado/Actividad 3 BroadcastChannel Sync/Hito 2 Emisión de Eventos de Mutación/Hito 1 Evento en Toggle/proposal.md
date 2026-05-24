# Proposal: Evento en Toggle (Hito 3.3.2.1)

## El "Porqué" y el Impacto
El "Toggle" de tareas (marcar como completada/pendiente) es la interacción más frecuente en la aplicación. Sincronizar este cambio entre pestañas es esencial para evitar que un usuario vea una tarea desactualizada tras haberla completado en otra ventana. Este hito implementa la emisión específica para esta acción, garantizando una consistencia visual inmediata.

## Justificación de la Solución
Inyectar la lógica de broadcast directamente en la mutación `toggleTask` dentro de `useTasks` es la forma más directa de asegurar que la emisión se produzca solo cuando el servidor confirme la persistencia exitosa. Esto garantiza la integridad del estado compartido.
