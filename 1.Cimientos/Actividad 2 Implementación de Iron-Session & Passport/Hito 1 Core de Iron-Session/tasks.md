# Tasks: Core de Iron-Session (Hito 1.2.1)

1. [ ] Instalar dependencia: `npm install iron-session`.
2. [ ] Añadir `SESSION_SECRET` al archivo `.env` (generar un string aleatorio de 32+ caracteres).
3. [ ] Crear `src/lib/session.ts`.
4. [ ] Definir el objeto `sessionOptions` con las políticas de seguridad (TTL 7 días, httpOnly).
5. [ ] Implementar la función `getSession()` utilizando `getIronSession` de la librería.
6. [ ] Implementar la función `saveSession(data: SessionData)` para encapsular el guardado.
7. [ ] Exportar tipos e interfaces necesarios para el resto de la aplicación.
