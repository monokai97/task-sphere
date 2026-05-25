# Tasks: Core de Iron-Session (Hito 1.2.1)

1. [x] Instalar dependencia: `npm install iron-session`.
2. [x] Añadir `SESSION_SECRET` al archivo `.env` (generar un string aleatorio de 32+ caracteres).
3. [x] Crear `src/lib/session.ts`.
4. [x] Definir el objeto `sessionOptions` con las políticas de seguridad (TTL 7 días, httpOnly).
5. [x] Implementar la función `getSession()` utilizando `getIronSession` de la librería.
6. [x] Implementar la función `saveSession(data: SessionData)` para encapsular el guardado.
7. [x] Exportar tipos e interfaces necesarios para el resto de la aplicación.
