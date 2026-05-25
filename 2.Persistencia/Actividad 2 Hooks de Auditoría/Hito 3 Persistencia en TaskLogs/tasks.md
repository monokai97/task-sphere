# Tasks: Persistencia en TaskLogs (Hito 2.2.3)

1. [x] Importar la colección `TaskLogs` (o su slug) en el archivo de hooks `Tasks.ts`.
2. [x] Actualizar el hook `afterChange` para llamar a la utilidad `getTaskDiff` (Hito 2).
3. [x] Implementar la llamada asíncrona a `payload.create` dentro del hook:
    - Mapear el `guestId` desde la relación de la tarea.
    - Asignar el tipo de operación correcto basado en el argumento `operation` de Payload.
4. [x] Implementar un hook similar para `afterDelete` (o manejar el soft-delete) para registrar eliminaciones.
5. [x] Añadir manejo de excepciones (`try/catch`) alrededor de la creación del log para evitar interrupciones en el flujo principal.
6. [x] Validar que los tipos de TypeScript de Payload reconocen el campo `diff` como un objeto JSON.
7. [x] Eliminar los logs de consola temporales de los hitos anteriores.
