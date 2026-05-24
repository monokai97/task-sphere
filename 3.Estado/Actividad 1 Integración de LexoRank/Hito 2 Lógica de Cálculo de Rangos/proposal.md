# Proposal: Lógica de Cálculo de Rangos (Hito 3.1.2)

## El "Porqué" y el Impacto
Mientras que el Core de LexoRank (Hito 1) proporciona las herramientas matemáticas, este hito implementa la **Lógica de Negocio** necesaria para traducir un gesto de usuario (Drag & Drop) en una nueva posición lexicográfica. Sin esta lógica, el frontend no sabría qué strings pasar al motor de LexoRank para posicionar una tarea correctamente entre sus vecinas.

El impacto es una integración perfecta entre la interacción visual y la persistencia de datos. Al calcular los rangos en el cliente antes de la mutación, permitimos que TanStack Query realice actualizaciones optimistas inmediatas. El usuario ve cómo su tarea se asienta en el nuevo lugar de la lista instantáneamente, mientras que el servidor recibe un simple string que garantiza que el orden se mantenga idéntico en todas las pestañas y sesiones futuras.

## Justificación de la Solución
Implementaremos una utilidad de "mapeo de posición" que tome el estado actual de la lista de tareas y los IDs involucrados en el movimiento. Esta aproximación centraliza la complejidad del cálculo de índices (manejo de extremos, listas vacías y vecinos inmediatos) en un solo lugar, evitando errores de lógica dispersos en los componentes de UI. Al ser una lógica determinista, facilita las pruebas automatizadas y asegura que el ordenamiento sea siempre predecible.
