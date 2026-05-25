# Tasks: Implementación de Soft Delete (Hito 2.3.1)

1. [x] Asegurar que el campo `isDeleted: checkbox` está definido en `src/collections/Tasks.ts` (Hito 2.1.1).
2. [x] Definir la función `beforeDeleteTask` en los hooks de la colección.
3. [x] Implementar la llamada al Local API dentro del hook para actualizar el registro a `isDeleted: true`.
4. [x] Integrar el trigger de auditoría manual si el hook `afterChange` no se dispara automáticamente tras la actualización manual del `beforeDelete`.
5. [x] Implementar el mecanismo de "aborto seguro" de la eliminación física (ej. lanzando una excepción controlada que el frontend entienda como éxito).
6. [x] Registrar el hook en `collections.Tasks.hooks.beforeDelete`.
7. [x] Actualizar los tipos de TypeScript con `npm run generate:types`.
