# Proposal: Shadcn Core Integration (Hito 4.1.2)

## El "Porqué" y el Impacto
Este hito integra la librería de componentes **Shadcn UI** en nuestro stack. Shadcn no es una librería de componentes tradicional, sino una colección de componentes de React reutilizables construidos sobre Radix UI y Tailwind CSS.

El impacto es fundamental para la **calidad y accesibilidad** de la aplicación. Al adoptar Shadcn, obtenemos componentes que cumplen con los estándares de accesibilidad (ARIA) desde el primer día, ahorrando tiempo de desarrollo en elementos críticos como formularios, modales y botones, mientras mantenemos un control total sobre el código fuente de los componentes, permitiendo que se integren perfectamente con la estética "Vento".

## Justificación de la Solución
Se ha elegido Shadcn UI porque ofrece el equilibrio perfecto entre velocidad de desarrollo y personalización. A diferencia de bibliotecas como Material UI o Chakra, Shadcn permite "copiar y pegar" el código del componente en nuestro repositorio, lo que nos da total libertad para aplicar los tokens visuales "Vento" (bordes redondeados, sombras, desenfoques) sin pelear contra estilos impuestos por librerías de terceros.
