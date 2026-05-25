# Proposal: Layout & Navegación Principal (Hito 4.2.1)

## El "Porqué" y el Impacto
El Layout Principal es la columna vertebral de la aplicación. Define la estructura de navegación, la jerarquía visual y el espacio de trabajo donde residirá el contenido principal ("Mi Día"). Un layout sólido en Next.js (App Router) asegura una navegación consistente, soporte para estados globales (como el banner de resiliencia) y una estructura coherente para el resto de la aplicación.

El impacto es la **estabilidad de la experiencia de usuario**. Un diseño de layout mal definido resulta en saltos visuales durante la navegación o inconsistencias entre páginas. Este layout integra el sidebar (navegación), la cabecera (feedback global) y el área de contenido principal, asegurando que el diseño "Vento" (espacio en blanco, neutralidad) se mantenga en todo momento.

## Justificación de la Solución
Utilizaremos el sistema de **Layouts de Next.js (App Router)** para definir una capa envolvente (`src/app/(dashboard)/layout.tsx`). Esta arquitectura es la más performante para aplicaciones Next.js, permitiendo que la navegación entre páginas mantenga el layout persistente, evitando recargas innecesarias y permitiendo animaciones de página fluidas con Framer Motion en el futuro.
