# Proposal: Filtros de Acceso Global (Hito 2.3.2)

## El "Porqué" y el Impacto
En una arquitectura "Guest-First" donde múltiples usuarios anónimos comparten la misma base de datos SQLite, el aislamiento de datos no es solo una característica, es un requisito de seguridad crítico. Este hito implementa la lógica de **Filtros de Acceso Global** utilizando las capacidades nativas de `Access Control` de PayloadCMS. 

El impacto es una capa de seguridad invisible pero impenetrable: al definir estos filtros a nivel de colección, garantizamos que un invitado *nunca* pueda ver, editar o borrar tareas que no le pertenecen, incluso si intenta manipular las peticiones al API. Además, integramos la lógica de visibilidad del Soft Delete, asegurando que las tareas marcadas como eliminadas en el hito anterior desaparezcan de todas las consultas automáticamente, simplificando enormemente el desarrollo del frontend.

## Justificación de la Solución
Utilizaremos funciones de `Access Control` de Payload que devuelven objetos de consulta (where clauses). Esta técnica es superior a filtrar manualmente en cada API Route porque es centralizada, declarativa y se aplica tanto al Local API como a las interfaces REST y GraphQL. Al vincular el `guestId` de la sesión actual (vía Iron-Session) con la cláusula `where`, logramos un aislamiento multi-inquilino (multi-tenant) robusto sobre una base de datos local única.
