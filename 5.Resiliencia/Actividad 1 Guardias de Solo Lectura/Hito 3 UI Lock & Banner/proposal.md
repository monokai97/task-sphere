# Proposal: UI Lock & Banner (Hito 5.1.3)

## El "Porqué" y el Impacto
Detectar el error (Hito 1) y propagar el estado (Hito 2) no es suficiente si la UI sigue permitiendo interacciones que no van a persistirse. Este hito implementa la capa de UI que hace efectivo el modo "Solo Lectura": un banner informativo claro y una deshabilitación programática de todos los elementos de mutación.

El impacto es la **prevención de la frustración del usuario**. En lugar de permitir que el usuario edite una tarea y que luego el cambio se pierda (o falle silenciosamente), bloqueamos activamente las interacciones y comunicamos honestamente que la aplicación se encuentra en modo de mantenimiento. Esto es crítico para la UX, ya que convierte un error técnico en una advertencia informativa, manteniendo el control y la transparencia como se define en el diseño global.

## Justificación de la Solución
Utilizaremos el hook `useResilience` para suscribir componentes clave a `isReadOnly`. Aplicaremos un patrón de bloqueo en cascada: el `ResilienceBanner` aparecerá en la parte superior del layout, y los componentes de acción (botones, inputs) verificarán este estado para aplicar las propiedades `disabled={isReadOnly}` o impedir eventos de drag & drop. Esta es la forma más declarativa y centralizada de manejar bloqueos de UI en React.
