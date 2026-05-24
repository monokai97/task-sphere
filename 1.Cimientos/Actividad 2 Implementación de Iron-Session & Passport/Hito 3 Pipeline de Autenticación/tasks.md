# Tasks: Pipeline de Autenticación (Hito 1.2.3)

1. [ ] Crear la carpeta `src/app/api/auth/guest`.
2. [ ] Implementar el archivo `route.ts` definiendo el método `GET`.
3. [ ] Implementar un wrapper para `passport.authenticate` que sea compatible con los objetos `Request` y `Response` de Next.js.
4. [ ] Integrar la llamada a `passport.authenticate('guest')` para obtener el perfil del invitado.
5. [ ] Importar `saveSession` desde `src/lib/session.ts` y persistir el perfil obtenido.
6. [ ] Configurar la respuesta JSON final incluyendo el estado de éxito y el `guestId` resuelto.
7. [ ] Añadir validación básica para asegurar que el pipeline no se rompa ante peticiones malformadas.
