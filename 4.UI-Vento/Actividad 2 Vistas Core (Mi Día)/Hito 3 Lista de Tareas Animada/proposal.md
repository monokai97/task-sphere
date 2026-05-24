# Proposal: Lista de Tareas Animada (Hito 4.2.3)

## El "Porqué" y el Impacto
Una lista de tareas estática puede parecer funcional pero carece de la "vida" que promete el diseño Vento. Este hito introduce **Framer Motion** para animar el ciclo de vida de cada tarea: al entrar, al salir y al reordenarse.

El impacto es una **interacción emocionalmente gratificante**. Las animaciones no solo mejoran la estética, sino que proporcionan pistas visuales sobre el estado de la aplicación (ej. una tarea que se desvanece tras ser eliminada). Esto refuerza la percepción de una herramienta moderna y empresarial de alta fidelidad, donde cada movimiento está cuidado y calculado.

## Justificación de la Solución
Framer Motion es el estándar de la industria para animaciones en React debido a su capacidad para manejar listas ordenadas mediante `Layout Animations`. Nos permitirá animar automáticamente el cambio de posición de las tareas tras un reordenamiento (LexoRank) sin tener que calcular manualmente las coordenadas, manteniendo la sincronización entre el estado de los datos y la representación visual de forma automática.
