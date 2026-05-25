# Tasks: Relaciones e Índices (Hito 2.1.2)

1. [x] Modificar `src/collections/Tasks.ts` para añadir el campo de relación `guest` apuntando a `guest-sessions`.
2. [x] Asegurar que el campo `guest` en `Tasks` tenga la propiedad `index: true`.
3. [x] Añadir/Verificar la propiedad `index: true` en el campo `position` de la colección `Tasks`.
4. [x] Modificar `src/collections/TaskLogs.ts` para añadir el campo de relación `task` apuntando a `tasks`.
5. [x] Asegurar que el campo `task` en `TaskLogs` tenga la propiedad `index: true`.
6. [x] Configurar los hooks de Payload o las opciones del adaptador para habilitar el borrado en cascada (Cascade Delete) entre Guest y Tasks.
7. [x] Ejecutar `npm run generate:types` para reflejar las nuevas relaciones en el tipado de TypeScript.
8. [x] Ejecutar la migración de base de datos si el adaptador no la realiza en caliente.
