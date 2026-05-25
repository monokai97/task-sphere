# Tasks: Esqueleto del Middleware (Hito 1.3.1)

1. [x] Crear el archivo `src/middleware.ts`.
2. [x] Importar `NextResponse` y `NextRequest` de `next/server`.
3. [x] Definir y exportar el objeto `config` con el `matcher` para las rutas `/dashboard` y `/api`.
4. [x] Implementar la función base `middleware(request: NextRequest)`.
5. [x] Añadir la lógica para obtener la cookie `todo_guest_session` desde `request.cookies`.
6. [x] Implementar logs de depuración (solo en desarrollo) que indiquen si la sesión fue detectada.
7. [x] Asegurar que la función siempre retorne `NextResponse.next()` para no bloquear el flujo actual.
