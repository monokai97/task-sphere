# Tasks: Integración de PayloadCMS & Drizzle (Hito 1.1.2)

1. [ ] Instalar dependencias core: `npm install payload @payloadcms/db-sqlite @payloadcms/next @payloadcms/richtext-lexical`.
2. [ ] Crear el archivo `.env` con `PAYLOAD_SECRET` y `DATABASE_URI`.
3. [ ] Configurar `src/payload.config.ts` estableciendo el adaptador `sqliteAdapter` y el editor `lexicalEditor`.
4. [ ] Implementar `src/lib/payload.ts` para exportar una función asíncrona que inicialice y devuelva la instancia de Payload (Singleton pattern).
5. [ ] Configurar el plugin de Next.js en `next.config.js` si es necesario (dependiendo de la versión de Payload 3.0).
6. [ ] Ejecutar la generación de tipos inicial de Payload: `npx payload generate:types`.
