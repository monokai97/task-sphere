# Tasks: Relaciones e Índices (Hito 2.1.2)

1. [ ] Modificar `src/collections/Tasks.ts` para añadir el campo de relación `guest` apuntando a `guest-sessions`.
2. [ ] Asegurar que el campo `guest` en `Tasks` tenga la propiedad `index: true`.
3. [ ] Añadir/Verificar la propiedad `index: true` en el campo `position` de la colección `Tasks`.
4. [ ] Modificar `src/collections/TaskLogs.ts` para añadir el campo de relación `task` apuntando a `tasks`.
5. [ ] Asegurar que el campo `task` en `TaskLogs` tenga la propiedad `index: true`.
6. [ ] Configurar los hooks de Payload o las opciones del adaptador para habilitar el borrado en cascada (Cascade Delete) entre Guest y Tasks.
7. [ ] Ejecutar `npm run generate:types` para reflejar las nuevas relaciones en el tipado de TypeScript.
8. [ ] Ejecutar la migración de base de datos si el adaptador no la realiza en caliente.
