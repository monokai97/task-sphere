# Tasks: In-Place Task Card (Hito 4.3.1)

1. [ ] Importar `Input` desde `@/components/ui/input`.
2. [ ] Modificar `src/components/features/TaskCard.tsx` para añadir el estado local `isEditing`.
3. [ ] Implementar la lógica de alternancia entre texto (visualización) e Input (edición).
4. [ ] Implementar la lógica de guardado: disparar la mutación de `useTasks.updateTask` al perder el foco (onBlur) o presionar Enter.
5. [ ] Implementar la lógica de cancelación (tecla Esc).
6. [ ] Configurar el `autoFocus` del input mediante `useRef`.
7. [ ] Integrar el estilo visual Vento al input de edición (bordes suaves, colores neutros).
8. [ ] Validar que la edición no rompa la estructura de la tarjeta (`Card` component).
