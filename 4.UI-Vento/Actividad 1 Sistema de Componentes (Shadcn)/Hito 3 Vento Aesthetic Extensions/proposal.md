# Proposal: Vento Aesthetic Extensions (Hito 4.1.3)

## El "Porqué" y el Impacto
Mientras que Shadcn proporciona la base funcional, el estilo "Vento" es el que define la personalidad de la aplicación. Este hito consiste en extender los componentes de Shadcn con las características visuales distintivas: bordes redondeados suaves, sombras sutiles que generan profundidad y efectos de desenfoque (backdrop blur) para un aspecto premium y minimalista.

El impacto es la **diferenciación de marca**. La UI dejará de parecer "un proyecto Shadcn genérico" para convertirse en una aplicación con una identidad visual propia, coherente y "viva", alineada con las expectativas de alta fidelidad.

## Justificación de la Solución
Extenderemos los estilos de Tailwind mediante la creación de clases personalizadas en `tailwind.config.ts` y utilidades CSS (`globals.css`). Esto mantiene la coherencia global sin modificar el código fuente de los componentes base de Shadcn, facilitando las actualizaciones de estos últimos mientras mantenemos nuestro diseño visual Vento siempre activo.
