# Proposal: Resilience State Management (Hito 5.1.2)

## El "Porqué" y el Impacto
Una vez que el sistema detecta un error de persistencia crítica (Hito 1), la aplicación necesita una forma centralizada de propagar este estado "solo lectura" a toda la interfaz de usuario. Este hito implementa un `ResilienceContext` que sirve como única fuente de verdad para el estado de salud del almacenamiento local.

El impacto es una **interfaz reactiva y coherente**. Al usar un Context API de React, cualquier componente (desde los botones de la `TaskCard` hasta los inputs del formulario) puede suscribirse al estado `isReadOnly` y deshabilitar sus capacidades de escritura de forma atómica. Esto evita que el usuario pierda tiempo interactuando con elementos que no van a guardar su progreso, proporcionando una UX honesta y profesional.

## Justificación de la Solución
El uso de `React.Context` es la solución más limpia para este problema, ya que es una preocupación transversal (cross-cutting concern). No necesitamos prop-drilling; basta con envolver la aplicación en el `ResilienceProvider`. Esta aproximación es altamente performante (un solo contexto global) y fácilmente testeable mediante hooks custom (`useResilience`), cumpliendo con la necesidad de una arquitectura escalable definida en el diseño técnico.
