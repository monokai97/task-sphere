# Proposal: Lógica de Edición (Hito 4.3.1.1)

## El "Porqué" y el Impacto
La lógica de edición in-place es la pieza central de la `TaskCard`. Este hito se enfoca en implementar la gestión de estado necesaria para alternar entre el modo visualización y el modo edición, asegurando que los cambios se capturen correctamente y se envíen al servidor. 

El impacto es una **interacción directa y eficiente**. Al aislar la lógica de edición (focus management, escape handling, enter commit), garantizamos que la `TaskCard` sea predecible. Esto reduce la complejidad de los componentes, mejora la mantenibilidad y asegura una experiencia de usuario sólida donde el usuario puede editar su día sin distracciones.

## Justificación de la Solución
Utilizaremos el hook `useState` de React para manejar el modo de edición y `useRef` para controlar el foco del input programáticamente. Esta es la solución más performante y estándar para evitar re-renderizados innecesarios y asegurar que el input reciba el foco inmediatamente al activarse el modo edición, proporcionando la experiencia "in-place" fluida que requiere el diseño "Vento".
