# Tests: Lista de Tareas Animada (Hito 4.2.3)

## Estrategia de Pruebas
Validaremos que las animaciones ocurren y no rompen el flujo de datos.

### Pruebas de Animación (Manual)
- [ ] **Entrance Check:** Crear una tarea nueva y verificar visualmente que tiene una entrada suave.
- [ ] **Deletion Check:** Eliminar una tarea y verificar que las adyacentes se desplazan suavemente hacia arriba/abajo.
- [ ] **Reorder Check:** Ejecutar un reordenamiento (simulando cambio de posición) y verificar que las tarjetas se deslizan a sus nuevos slots.

### Pruebas de Integración y Rendimiento
- [ ] **Optimistic Consistency:** Confirmar que la animación comienza inmediatamente tras el click, incluso si la red está lenta (simulación de latencia alta).
- [ ] **No Layout Drift:** Asegurar que los componentes no se solapan durante la animación y que el contenedor padre ajusta su tamaño suavemente.
