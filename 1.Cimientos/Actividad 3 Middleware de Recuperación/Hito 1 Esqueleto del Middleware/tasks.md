# Tasks: Esqueleto del Middleware (Hito 1.3.1)

1. [ ] Crear el archivo `src/middleware.ts`.
2. [ ] Importar `NextResponse` y `NextRequest` de `next/server`.
3. [ ] Definir y exportar el objeto `config` con el `matcher` para las rutas `/dashboard` y `/api`.
4. [ ] Implementar la función base `middleware(request: NextRequest)`.
5. [ ] Añadir la lógica para obtener la cookie `todo_guest_session` desde `request.cookies`.
6. [ ] Implementar logs de depuración (solo en desarrollo) que indiquen si la sesión fue detectada.
7. [ ] Asegurar que la función siempre retorne `NextResponse.next()` para no bloquear el flujo actual.
