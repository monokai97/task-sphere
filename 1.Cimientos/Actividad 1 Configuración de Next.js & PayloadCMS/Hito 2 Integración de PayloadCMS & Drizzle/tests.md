# Tests: Integración de PayloadCMS & Drizzle (Hito 1.1.2)

## Estrategia de Pruebas
Las pruebas validarán que el "puente" entre Next.js y la base de datos local esté operativo y que el Local API sea accesible.

### Pruebas de Integración (Integrity)
- [ ] **DB File Check:** Verificar físicamente la creación del archivo `.db` tras el primer arranque.
- [ ] **Payload Instance Check:** Crear un script de prueba en `/scripts/test-payload.ts` que importe `getPayload` y realice un log de las colecciones activas.
- [ ] **Secret Validation:** Asegurar que el sistema falla con un mensaje claro si `PAYLOAD_SECRET` no está definido en las variables de entorno.

### Pruebas de Sanidad (Admin Panel)
- [ ] **Admin Boot:** Verificar en consola que no hay errores de "Migration failed" o "Drizzle driver error" al iniciar el proceso.
- [ ] **Type Generation:** Confirmar que el archivo `src/payload-types.ts` se genera correctamente y contiene las interfaces base.
