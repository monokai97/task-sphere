# Proposal: Contratos de Datos y Zod (Hito 2.1.3)

## El "Porqué" y el Impacto
Este hito establece la capa de integridad y seguridad de datos en el transporte. Al definir **Contratos de Datos** utilizando **Zod**, creamos una barrera de validación estricta que protege a la base de datos de payloads malformados, inyecciones básicas y errores de lógica de negocio antes de que impacten en SQLite. 

El impacto es un sistema con **Type-Safety de extremo a extremo**. Al sincronizar los tipos generados por PayloadCMS con los esquemas de validación de Zod, garantizamos que el frontend (TanStack Query) y el backend (API Routes/Middleware) hablen exactamente el mismo idioma. Esto reduce drásticamente los errores en tiempo de ejecución y mejora la experiencia de desarrollo al proporcionar autocompletado y validación inmediata.

## Justificación de la Solución
Se ha elegido **Zod** por su capacidad de inferencia de tipos en TypeScript, lo que elimina la necesidad de mantener interfaces manuales duplicadas. La integración de Zod en la capa de validación de entrada permite sanitizar strings, validar UUIDs y asegurar que los campos opcionales sean manejados correctamente, cumpliendo con la guardia de "Validación Anti-Malformación" definida en la especificación global.
