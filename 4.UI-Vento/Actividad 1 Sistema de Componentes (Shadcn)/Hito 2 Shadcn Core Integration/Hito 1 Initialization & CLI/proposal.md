# Proposal: Shadcn CLI Initialization (Hito 4.1.2.1)

## El "Porqué" y el Impacto
La inicialización mediante el CLI de Shadcn es el paso necesario para transformar nuestro proyecto Next.js en un sistema capaz de gestionar componentes reutilizables de forma eficiente. Este hito no solo instala dependencias, sino que define la "estructura del sistema" mediante `components.json`, asegurando que los componentes futuros se instalen con los estilos y directorios correctos.

El impacto es la **estandarización**. Al usar el CLI, evitamos la configuración manual propensa a errores. Esto establece una base sólida para que cualquier desarrollador pueda añadir nuevos componentes (Button, Dialog, etc.) siguiendo las convenciones del proyecto sin riesgo de desviarse del diseño global "Vento".

## Justificación de la Solución
El CLI de Shadcn (`npx shadcn@latest init`) es la única forma recomendada de integrar Shadcn. Proporciona una configuración interactiva que detecta automáticamente los paths de Tailwind, los alias de TypeScript y la estructura del directorio `src`. Es la solución más rápida, segura y mantenible para gestionar el ciclo de vida de los componentes.
