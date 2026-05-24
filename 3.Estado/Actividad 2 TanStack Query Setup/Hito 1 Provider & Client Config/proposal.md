# Proposal: Provider & Client Config (Hito 3.2.1)

## El "Porqué" y el Impacto
En una aplicación de tareas de alta fidelidad, la gestión eficiente del estado del servidor es lo que separa una experiencia web lenta de una que se siente como una aplicación nativa. Este hito establece la infraestructura de **TanStack Query v5**, que actuará como el motor de sincronización entre el cliente y el Local API de PayloadCMS. 

El impacto es fundamental para el rendimiento: implementamos una capa de caché inteligente que elimina peticiones redundantes, gestiona automáticamente los estados de carga y error, y prepara el terreno para las actualizaciones optimistas (<100ms) que se desarrollarán en el siguiente hito. Sin esta configuración base, el sistema carecería de la reactividad necesaria para la estética "Vento".

## Justificación de la Solución
Se elige TanStack Query v5 por su madurez y su integración profunda con el ecosistema de React. A diferencia de un estado global tradicional (como Redux o Zustand), React Query está diseñado específicamente para manejar **Server State**, permitiéndonos desacoplar la lógica de fetching de la UI. Configuraremos el cliente con un `staleTime` agresivo para minimizar las consultas a SQLite durante la navegación, cumpliendo con la guardia de "optimización de operaciones costosas" del diseño técnico.
