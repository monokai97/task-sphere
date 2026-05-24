# Proposal: Scaffold de Next.js & Tailwind (Hito 1.1.1)

## El "Porqué" y el Impacto
Este hito establece el punto de partida físico y visual de la aplicación. Al inicializar Next.js 14 con el App Router y Tailwind CSS siguiendo la estética **Vento**, garantizamos que la base estructural sea coherente con las exigencias de alta fidelidad y rendimiento (latencia <100ms) definidas en el diseño global.

El uso de **Tailwind CSS** nos permite implementar una arquitectura de estilos atómica y escalable, facilitando la futura implementación del Modo Oscuro nativo y las micro-interacciones de Framer Motion. Este andamiaje es crítico para asegurar que los componentes de UI posteriores (Actividad 3) hereden tokens de diseño consistentes desde el día uno.

## Justificación de la Solución
Se ha elegido Next.js 14 (App Router) por su capacidad nativa de manejar Server Components, lo cual es vital para la integración eficiente con el **Local API** de PayloadCMS. Al centralizar los estilos en Tailwind, eliminamos la necesidad de librerías de CSS-in-JS que podrían penalizar el rendimiento del renderizado inicial.
