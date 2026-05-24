# Tasks: Política de Borrado en Cascada (Hito 2.3.3)

1. [ ] Revisar `src/collections/Tasks.ts` y asegurar que el campo `guest` tiene la configuración `onDelete: 'cascade'`.
2. [ ] Revisar `src/collections/TaskLogs.ts` y asegurar que el campo `task` tiene la configuración `onDelete: 'cascade'`.
3. [ ] (Si el adaptador no soporta cascada nativa automáticamente) Implementar un hook `afterDelete` en `GuestSessions` que elimine manualmente todas las tareas asociadas mediante `payload.delete`.
4. [ ] Implementar un hook `afterDelete` en `Tasks` para asegurar la limpieza de sus logs correspondientes.
5. [ ] Ejecutar `npm run generate:types` para validar los cambios en los esquemas.
6. [ ] Forzar una regeneración de la base de datos o ejecutar una migración de Drizzle para aplicar las constraints de `FOREIGN KEY` en SQLite.
