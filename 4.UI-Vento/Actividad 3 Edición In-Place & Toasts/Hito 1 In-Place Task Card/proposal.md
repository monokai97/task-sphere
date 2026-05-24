# Proposal: In-Place Task Card (Hito 4.3.1)

## El "Porqué" y el Impacto
El objetivo principal de la `TaskCard` con edición in-place es eliminar la fricción de navegación. En lugar de forzar al usuario a abrir un modal o navegar a una página de edición para cambiar el título de una tarea, permitimos la interacción directa sobre la lista. Esto reduce el número de clics y mantiene al usuario en su flujo de trabajo ("Mi Día").

El impacto en el sistema es una mejora directa en la percepción de velocidad de la UI. Al combinar esta edición con las actualizaciones optimistas (Hito 3.2.2), el sistema ofrece una experiencia de escritura inmediata, donde el cambio es visible instantáneamente mientras el servidor lo procesa en segundo plano.

## Justificación de la Solución
Utilizaremos un componente de `Input` (o `textarea` auto-ajustable) que sustituye al texto plano de la tarea al entrar en modo edición. Esta es la solución más limpia y accesible, ya que aprovecha los primitivos de Radix UI (usados por Shadcn) para garantizar que el foco y la navegación por teclado funcionen correctamente durante el proceso de edición, manteniendo la consistencia con el diseño "Vento".
