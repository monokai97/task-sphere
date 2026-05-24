# Specs: Integración de PayloadCMS & Drizzle (Hito 1.1.2)

## Requisitos Técnicos
- **CMS:** PayloadCMS v3.0+.
- **Database:** SQLite (archivo local).
- **Adapter:** `@payloadcms/db-sqlite` (Drizzle).
- **Bundler:** Vite/Esbuild (via Payload 3.0 config).
- **Ambiente:** Node.js 20+ para soporte de Local API en Server Components.

## Escenarios de Aceptación

### Escenario 1: Inicialización del Motor Payload
**Given** un proyecto Next.js 14 configurado
**When** se inicialice la instancia de Payload mediante `getPayload`
**Then** se debe crear el archivo de base de datos `payload.db` en la raíz (o ruta configurada).

### Escenario 2: Configuración del Adaptador Drizzle
**Given** el archivo `payload.config.ts`
**When** se defina la propiedad `db: sqliteAdapter({ migrationDir: ... })`
**Then** el sistema debe ser capaz de generar y ejecutar migraciones iniciales automáticamente.

### Escenario 3: Disponibilidad del Local API
**Given** el servidor de Next.js en ejecución
**When** se intente acceder al objeto `payload` desde un Server Component
**Then** el objeto debe estar definido y permitir operaciones CRUD básicas sin errores de conexión.
