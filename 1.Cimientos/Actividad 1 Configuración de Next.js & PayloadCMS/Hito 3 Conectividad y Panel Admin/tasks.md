# Tasks: Conectividad y Panel Admin (Hito 1.1.3)

1. [x] Crear la estructura de carpetas `src/app/(payload)/admin/[[...payload]]` y `src/app/(payload)/api/[[...payload]]`.
2. [x] Implementar los archivos `page.tsx` y `layout.tsx` dentro de la carpeta admin utilizando los componentes exportados por `@payloadcms/next`.
3. [x] Implementar el Route Handler en `src/app/(payload)/api/[[...payload]]/route.ts`.
4. [x] Crear una colección básica `Users` en `src/collections/Users.ts` y registrarla en `payload.config.ts`.
5. [x] Configurar el secreto de administración inicial mediante la variable de entorno `PAYLOAD_INITIAL_USER_PASSWORD`.
6. [x] Implementar una página de prueba `src/app/test-connection/page.tsx` que realice una consulta simple vía Local API y muestre el resultado por consola.
