# Proposal: BroadcastChannel Sync (Hito 3.3.1)

## El "Porqué" y el Impacto
En una aplicación web moderna, es común que los usuarios mantengan múltiples pestañas abiertas. Si un usuario marca una tarea como completada en la Pestaña A, espera que la Pestaña B se actualice automáticamente. La API `BroadcastChannel` nos permite implementar este comportamiento de sincronización en tiempo real de forma nativa, sin necesidad de infraestructura de WebSockets compleja y costosa.

El impacto es una experiencia de usuario altamente coherente. Al emitir eventos de sincronización tras mutaciones exitosas, las pestañas "pasivas" pueden invalidar su caché de TanStack Query y recargar los datos actualizados sin que el usuario tenga que recargar la página. Esto refuerza la sensación de que la aplicación funciona como una unidad lógica única en el dispositivo, independientemente del contexto de navegación.

## Justificación de la Solución
Se ha elegido `BroadcastChannel` por su sencillez y soporte nativo en todos los navegadores modernos. A diferencia de soluciones basadas en `localStorage` (que requieren eventos `storage` y pueden ser ruidosos), `BroadcastChannel` está diseñado específicamente para la comunicación entre contextos de navegación (pestañas, ventanas, iframes) dentro del mismo origen, haciendo que el código sea limpio, predecible y altamente eficiente.
