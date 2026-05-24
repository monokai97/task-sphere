# Tasks: Lógica de Edición (Hito 4.3.1.1)

1. [ ] Modificar `TaskCard` para manejar el estado `isEditing`.
2. [ ] Crear un estado local `tempTitle` para gestionar el input.
3. [ ] Implementar `handleKeyDown` para capturar `Enter` y `Escape`.
4. [ ] Implementar `handleBlur` para guardar cambios al perder el foco.
5. [ ] Añadir `useEffect` que detecte el cambio a `isEditing: true` para aplicar `.focus()` al input.
6. [ ] Conectar `onSuccess` del hook de mutación para asegurar el rollback si falla.
7. [ ] Validar que el título guardado cumple con las reglas de Zod (mínimo 3 caracteres).
