# Tasks: Lógica de Upsert de Sesión (Hito 1.3.2)

1. [x] Configurar `src/middleware.ts` para usar el runtime de Node.js: `export const runtime = 'nodejs'`.
2. [x] Importar `getPayload` desde `src/lib/payload.ts` y `unsealData` de `iron-session`.
3. [x] Implementar la lógica para descifrar la cookie `todo_guest_session` dentro de la función del middleware.
4. [x] Implementar el bloque de persistencia:
    - Intentar buscar la sesión en la colección `guest-sessions`.
    - Si no existe, crearla usando el `guestId` de la cookie.
    - Si existe, actualizar su campo `lastActive`.
5. [x] Añadir manejo de errores para que un fallo en el upsert no bloquee la carga de la aplicación (fail-silent strategy para auth recovery).
6. [x] Verificar que el objeto `payload` se inicializa correctamente dentro del contexto del middleware.
