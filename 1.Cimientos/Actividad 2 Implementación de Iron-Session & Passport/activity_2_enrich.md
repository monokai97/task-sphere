# Activity Report: Implementación de Iron-Session & Passport (activity_2_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Implementar el sistema de identidad "Guest-First" utilizando Iron-Session para la persistencia de cookies cifradas y Passport.js para la lógica de generación de perfiles anónimos.
**Archivos Involucrados:** `src/lib/session.ts`, `src/lib/passport.ts`, `src/app/api/auth/guest/route.ts`.

## Desglose de Hitos

### Hito 1: Core de Iron-Session
- **Descripción:** Definición de la configuración de la sesión (secreto, nombre de cookie, TTL de 7 días) y creación de los helpers para sellar y obtener la sesión.
- **Verificación:** Prueba unitaria o de integración que demuestre el sellado y descifrado de un payload de prueba.

### Hito 2: Estrategia Guest de Passport
- **Descripción:** Implementación de una estrategia personalizada de Passport.js que genere un UUID único si no existe una identidad previa en la cookie.
- **Verificación:** Ejecución de la lógica de la estrategia y comprobación de que devuelve un objeto de usuario con un `guestId` válido.

### Hito 3: Pipeline de Autenticación
- **Descripción:** Creación del API Route para la inicialización de la sesión de invitado y exportación de los hooks/componentes para acceder al estado de la sesión en el cliente.
- **Verificación:** Llamada exitosa al endpoint `/api/auth/guest` que resulte en la creación de la cookie cifrada en el navegador.

## Justificación Técnica
Este desglose separa la infraestructura de cifrado (Iron-Session) de la lógica de negocio de identidad (Passport). Al validar primero el core de la sesión, aseguramos que el transporte sea seguro antes de integrar el generador de IDs, cumpliendo con los requisitos de "fricción cero" y "seguridad sin estado" del diseño técnico.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 Core de Iron-Session
- [ ] Hito 2 Estrategia Guest de Passport
- [ ] Hito 3 Pipeline de Autenticación
