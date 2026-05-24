# Propuesta Técnica: Hito 1 - Export API Route

## 1. Contexto y Problema
En una aplicación orientada a "Guest-First", la confianza del usuario se basa en la transparencia y la soberanía sobre sus datos. Actualmente, los usuarios pueden crear tareas y generar logs de auditoría, pero no tienen un mecanismo para extraer esa información fuera del entorno del navegador o del almacenamiento local de la aplicación.

Sin un endpoint de exportación, el usuario se siente "atrapado" en la sesión local, lo que contradice los principios de resiliencia y portabilidad definidos para la Fase 5.

## 2. Solución Propuesta
Implementar el esqueleto y la capa de seguridad de un **API Route de Next.js** en `/api/export`. Este hito se centra en establecer el contrato de comunicación y la barrera de seguridad, asegurando que solo el propietario de la sesión (el invitado activo) pueda solicitar sus propios datos.

### Beneficios Clave:
- **Seguridad Garantizada:** Uso de `iron-session` para validar que el `guestId` de la petición coincide con la sesión cifrada en la cookie.
- **Escalabilidad:** Prepara el terreno para la agregación de datos compleja (Hito 2) sin mezclar responsabilidades de seguridad con lógica de negocio.
- **Arquitectura Limpia:** Sigue el patrón de Route Handlers de Next.js 14+, manteniendo la coherencia con el resto de la API.

## 3. Alternativas Consideradas
- **Exportación en el Cliente:** Se descartó porque los logs de auditoría (`TaskLogs`) y metadatos de la sesión residen en el servidor (SQLite). Una exportación desde el cliente requeriría múltiples llamadas a la API y sobrecargaría el frontend.
- **Exportación CSV:** Se descartó en favor de JSON por ser el formato nativo del stack (PayloadCMS/Zod) y facilitar futuras funcionalidades de "Importación" o migración a cuentas permanentes.

## 4. Impacto en el Sistema
Este hito no afecta negativamente el rendimiento ya que es un endpoint bajo demanda. Introduce una nueva dependencia de seguridad en `src/app/api/export`, que servirá como modelo para otros endpoints protegidos de administración o mantenimiento.
