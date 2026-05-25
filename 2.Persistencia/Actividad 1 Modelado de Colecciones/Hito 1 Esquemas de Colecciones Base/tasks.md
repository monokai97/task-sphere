# Tasks: Esquemas de Colecciones Base (Hito 2.1.1)

1. [x] Crear la carpeta `src/collections` si no existe.
2. [x] Implementar `src/collections/GuestSessions.ts` con los campos `id` (manual), `lastActive` y timestamps automáticos.
3. [x] Implementar `src/collections/Tasks.ts` con validación de título (min 3 chars), campo `position` indexado y flag `isDeleted`.
4. [x] Implementar `src/collections/TaskLogs.ts` con select de operaciones (`CREATE`, `UPDATE`, `DELETE`, `TOGGLE`) y campo JSON para el `diff`.
5. [x] Registrar las tres colecciones en el array `collections` de `src/payload.config.ts`.
6. [x] Configurar los `admin.useAsTitle` para que las tareas muestren su títilo en el panel administrativo.
7. [x] Ejecutar el comando de Payload para regenerar tipos: `npm run generate:types`.
