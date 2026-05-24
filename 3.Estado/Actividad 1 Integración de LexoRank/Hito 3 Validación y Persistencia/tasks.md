# Tasks: Validación y Persistencia (Hito 3.1.3)

1. [ ] Actualizar el esquema Zod de tareas en `src/lib/validation/tasks.ts` para incluir la validación alfanumérica del campo `position`.
2. [ ] Implementar un helper en `src/lib/lexo.ts` llamado `isValidLexoRank(rank: string): boolean`.
3. [ ] Abrir `src/collections/Tasks.ts` y añadir la validación de campo a nivel de Payload para `position` utilizando el helper anterior.
4. [ ] Reforzar la lógica del hook `beforeChange` para asegurar que el `guestId` no pueda ser modificado y que el usuario tenga permisos sobre el registro.
5. [ ] Verificar que la lógica de `TaskLogs` (Fase 2) captura correctamente los cambios en el campo `position`.
6. [ ] Implementar una respuesta de error estandarizada para fallos de validación de rango.
