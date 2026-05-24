# Proposal: Component Installation (Hito 4.1.2.2)

## El "Porqué" y el Impacto
La biblioteca de componentes base es el bloque de construcción sobre el cual se edificará toda la experiencia de usuario. Instalar componentes específicos como `Button`, `Input`, `Checkbox`, `Dialog` y `Card` mediante el CLI de Shadcn nos proporciona una base de componentes accesibles y consistentes.

El impacto es la **velocidad de desarrollo y calidad**. Al utilizar componentes probados y accesibles, el equipo puede enfocarse en la composición de vistas y en la aplicación de la estética "Vento" en lugar de reescribir lógica de accesibilidad (manejo de foco, eventos de teclado, estados ARIA) desde cero. Estos componentes son la fundación de las vistas que el usuario final interactuará constantemente.

## Justificación de la Solución
El CLI de Shadcn permite la instalación granular: instalamos solo lo que necesitamos. Esta "instalación bajo demanda" mantiene el bundle del cliente ligero, eliminando código innecesario. Los componentes se instalan localmente en `src/components/ui`, lo que nos da la capacidad total de editarlos para aplicar los radios de borde, sombras y transiciones específicas de nuestra estética Vento sin depender de librerías de componentes bloqueadas.
