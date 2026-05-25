# Tasks: Hooks de Captura (afterChange) (Hito 2.2.1)

1. [x] Abrir el archivo de definición de la colección `src/collections/Tasks.ts`.
2. [x] Definir la función del hook `afterChangeTask` siguiendo la firma de PayloadCMS.
3. [x] Implementar la lógica para extraer el `guestId` (relación) y el `id` de la tarea.
4. [x] Añadir condicionales para identificar si la operación es `create` o `update`.
5. [x] Implementar un log temporal en consola que imprima: `[AUDIT_CAPTURE] Op: ${operation} | Task: ${id} | Guest: ${guestId}`.
6. [x] Registrar el hook en la propiedad `hooks.afterChange` del archivo `Tasks.ts`.
7. [x] Verificar que la aplicación compila correctamente tras registrar el hook.
