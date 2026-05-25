# Tasks: Filtros de Acceso Global (Hito 2.3.2)

1. [x] Crear el archivo de utilidades de acceso `src/lib/access.ts` para centralizar las reglas de filtrado.
2. [x] Implementar la función `isGuestAndActive` que combine el filtrado por `guestId` y el flag `isDeleted`.
3. [x] Abrir `src/collections/Tasks.ts` e importar la función de acceso.
4. [x] Configurar la propiedad `access.read` de la colección `Tasks` utilizando la función implementada.
5. [x] Configurar las propiedades `access.update` y `access.delete` para restringir operaciones al dueño del registro (`guestId`).
6. [x] Asegurar que el middleware de Next.js inyecte el `guestId` en el objeto que Payload espera (normalmente sincronizado con Iron-Session).
7. [x] Validar que los administradores (`users` collection) mantengan acceso total si así se desea para debugging.
