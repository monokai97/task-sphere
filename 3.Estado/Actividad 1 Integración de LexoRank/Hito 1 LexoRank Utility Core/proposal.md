# Proposal: LexoRank Utility Core (Hito 3.1.1)

## El "Porqué" y el Impacto
El reordenamiento de tareas mediante Drag & Drop suele ser un desafío en bases de datos relacionales, ya que mover un elemento a menudo requiere actualizar los índices de todos los elementos subsiguientes (complejidad O(n)). Al implementar **LexoRank**, adoptamos un sistema de ordenamiento lexicográfico fraccional que permite insertar o mover elementos entre otros dos mediante el cálculo de un string intermedio, logrando una complejidad de **O(1)** en las actualizaciones de base de datos.

El impacto es una UI extremadamente fluida y escalable. El sistema garantiza que, independientemente del volumen de tareas del invitado, el reordenamiento sea instantáneo y no genere bloqueos en SQLite. Este hito establece la lógica matemática base en Base-62 necesaria para que el frontend pueda realizar mutaciones optimistas con total confianza en la integridad del orden.

## Justificación de la Solución
Se ha elegido implementar una utilidad core basada en la lógica de `lexorank` (o similar como `fractional-indexing`). Esta solución es superior a los índices enteros tradicionales porque los strings lexicográficos tienen una capacidad de subdivisión virtualmente infinita. Al utilizar **Base-62** (0-9, a-z, A-z), maximizamos el espacio de direccionamiento entre elementos, reduciendo la necesidad de procesos de re-balanceo de la base de datos.
