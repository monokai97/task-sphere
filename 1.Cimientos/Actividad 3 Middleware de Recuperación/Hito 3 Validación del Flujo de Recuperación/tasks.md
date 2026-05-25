# Tasks: Validación del Flujo de Recuperación (Hito 1.3.3)

1. [x] Instalar `zod` si no está presente en las dependencias.
2. [x] Crear un esquema de validación para la sesión en `src/lib/validation/session.ts`.
3. [x] Refactorizar el middleware para incluir un bloque `try/catch` que envuelva todo el proceso de recuperación.
4. [x] Implementar la validation del formato del `guestId` extraído de la cookie.
5. [x] Implementar la lógica de regeneración automática: si la validación falla, llamar al pipeline de autenticación interno o ejecutar la lógica de generación de `passport.authenticate('guest')`.
6. [x] Añadir un flag informativo (ej. query param `?newSession=true`) en la respuesta del middleware cuando se regenere una sesión.
7. [x] Configurar el logger de errores para capturar fallos de SQLite sin interrumpir el `NextResponse.next()`.
