# Proposal: Integración de PayloadCMS & Drizzle (Hito 1.1.2)

## El "Porqué" y el Impacto
Este hito materializa la decisión arquitectónica más crítica del proyecto: la unificación de la persistencia mediante el adaptador nativo de **PayloadCMS 3.0 (Drizzle-based)** para SQLite. Al integrar el CMS directamente en el proceso de Next.js, eliminamos la necesidad de una infraestructura de API externa y reducimos la latencia de las operaciones de datos a niveles mínimos (Local API).

El impacto es una arquitectura simplificada, con un único pool de conexiones a la base de datos, lo que mitiga los riesgos de concurrencia (`SQLITE_BUSY`) y facilita el mantenimiento al tener un esquema de datos centralizado y auto-generado.

## Justificación de la Solución
Se utiliza el adaptador `@payloadcms/db-sqlite` porque implementa **Drizzle ORM** internamente, proporcionando una capa de abstracción moderna, ligera y de alto rendimiento sobre SQLite. Esta elección nos permite cumplir con las métricas de latencia de UI (<100ms) al evitar el overhead de HTTP en las consultas del servidor.
