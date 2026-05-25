# Tasks: Política de Borrado en Cascada (Hito 2.3.3)

1. [x] Revisar `src/collections/Tasks.ts` y asegurar que el campo `guest` tiene la configuración `onDelete: 'cascade'`. (Implementado via hooks).
2. [x] Revisar `src/collections/TaskLogs.ts` y asegurar que el campo `task` tiene la configuración `onDelete: 'cascade'`. (Implementado via hooks).
3. [x] (Si el adaptador no soporta cascada nativa automáticamente) Implementar un hook `afterDelete` en `GuestSessions` que elimine manualmente todas las tareas asociadas mediante `payload.delete`.
4. [x] Implementar un hook `afterDelete` en `Tasks` para asegurar la limpieza de sus logs correspondientes.
5. [x] Ejecutar `npm run generate:types` para validar los cambios en los esquemas.
6. [x] Forzar una regeneración de la base de datos o ejecutar una migración de Drizzle para aplicar las constraints de `FOREIGN KEY` in SQLite.
