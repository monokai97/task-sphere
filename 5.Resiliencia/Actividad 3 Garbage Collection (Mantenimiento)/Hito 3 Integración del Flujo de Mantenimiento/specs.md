# Especificaciones Técnicas: Hito 3 - Integración del Flujo de Mantenimiento

## 1. Requisitos Funcionales
- **RF-1:** El sistema debe exponer un endpoint POST en `/api/maintenance/gc`.
- **RF-2:** El endpoint debe verificar una clave de autorización (API Key) para prevenir ejecuciones no autorizadas.
- **RF-3:** Al ser invocado, el sistema debe ejecutar el proceso completo: `Identificación -> Borrado -> Reporte`.
- **RF-4:** El endpoint debe devolver un JSON consolidado con el resumen de la operación.

## 2. Requisitos Técnicos
- **RT-1:** Implementación como Route Handler de Next.js.
- **RT-2:** Validación de seguridad basada en header `Authorization: Bearer <TOKEN>`.
- **RT-3:** Orquestación de `getExpiredSessions` y `deleteExpiredSessions` desde `maintenanceService.ts`.

## 3. Escenarios de Aceptación (Gherkin)

### Escenario 1: Ejecución autorizada exitosa
**Given** una petición POST a `/api/maintenance/gc` con token válido
**When** el proceso se ejecuta
**Then** el servidor retorna status `200 OK`
**And** retorna JSON con: `{ totalIdentified: 5, deletedCount: 5, status: "success" }`.

### Escenario 2: Ejecución no autorizada
**Given** una petición sin token o con token inválido
**When** el servidor recibe la petición
**Then** retorna status `403 Forbidden`.
