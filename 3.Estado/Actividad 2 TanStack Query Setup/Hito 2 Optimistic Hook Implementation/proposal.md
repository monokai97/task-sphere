# Proposal: Optimistic Hook Implementation (Hito 3.2.2)

## El "Porqué" y el Impacto
En una aplicación empresarial de alta fidelidad, la percepción de velocidad es tan crítica como la velocidad real. El hito **Optimistic Hook Implementation** introduce la lógica de actualizaciones optimistas en el hook `useTasks`, permitiendo que la interfaz de usuario reaccione instantáneamente a las acciones del usuario (completar una tarea, eliminarla o reordenarla) sin esperar la respuesta del servidor.

El impacto es una experiencia de usuario que se siente "viva" y extremadamente fluida (latencia percibida <100ms), cumpliendo con uno de los pilares de la estética **Vento**. Al manipular directamente el caché de TanStack Query en el momento del clic, eliminamos el parpadeo de carga y proporcionamos retroalimentación visual inmediata, lo que aumenta la confianza del usuario en la herramienta.

## Justificación de la Solución
Utilizaremos el patrón `onMutate` de TanStack Query para realizar capturas de pantalla del estado actual (snapshots) y aplicar los cambios esperados de forma preventiva. Esta técnica es superior a esperar el refetch del servidor porque oculta la latencia inherente a la persistencia en SQLite. Si la operación fallara (Hito 3), el sistema ya cuenta con el snapshot para realizar un rollback preciso, manteniendo la integridad visual sin sacrificar la interactividad.
