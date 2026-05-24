# Tasks: Implementación de Soft Delete (Hito 2.3.1)

1. [ ] Asegurar que el campo `isDeleted: checkbox` está definido en `src/collections/Tasks.ts` (Hito 2.1.1).
2. [ ] Definir la función `beforeDeleteTask` en los hooks de la colección.
3. [ ] Implementar la llamada al Local API dentro del hook para actualizar el registro a `isDeleted: true`.
4. [ ] Integrar el trigger de auditoría manual si el hook `afterChange` no se dispara automáticamente tras la actualización manual del `beforeDelete`.
5. [ ] Implementar el mecanismo de "aborto seguro" de la eliminación física (ej. lanzando una excepción controlada que el frontend entienda como éxito).
6. [ ] Registrar el hook en `collections.Tasks.hooks.beforeDelete`.
7. [ ] Actualizar los tipos de TypeScript con `npm run generate:types`.
