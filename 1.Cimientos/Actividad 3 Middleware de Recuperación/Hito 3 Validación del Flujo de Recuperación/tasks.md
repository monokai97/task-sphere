# Tasks: Validación del Flujo de Recuperación (Hito 1.3.3)

1. [ ] Instalar `zod` si no está presente en las dependencias.
2. [ ] Crear un esquema de validación para la sesión en `src/lib/validation/session.ts`.
3. [ ] Refactorizar el middleware para incluir un bloque `try/catch` que envuelva todo el proceso de recuperación.
4. [ ] Implementar la validación del formato del `guestId` extraído de la cookie.
5. [ ] Implementar la lógica de regeneración automática: si la validación falla, llamar al pipeline de autenticación interno o ejecutar la lógica de generación de `passport.authenticate('guest')`.
6. [ ] Añadir un flag informativo (ej. query param `?newSession=true`) en la respuesta del middleware cuando se regenere una sesión.
7. [ ] Configurar el logger de errores para capturar fallos de SQLite sin interrumpir el `NextResponse.next()`.
