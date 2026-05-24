# Tests: Lógica de Cálculo de Rangos (Hito 3.1.2)

## Estrategia de Pruebas
Se validará que la lógica de vecindad es correcta bajo diferentes configuraciones de lista.

### Pruebas de Posicionamiento (Unitarias)
- [ ] **First Item Move:** Simular mover el último elemento al primer lugar y verificar que el rango resultante es menor que el del antiguo primer elemento.
- [ ] **Last Item Move:** Simular mover el primer elemento al último lugar y verificar que el rango es mayor que el del antiguo último elemento.
- [ ] **Middle Insert:** Simular mover un elemento entre otros dos y verificar que `prev < new < next`.

### Pruebas de Integridad
- [ ] **Same Position:** Verificar que si `activeId === overId`, la función devuelve la posición actual sin cambios (o el sistema lo ignora).
- [ ] **Empty List Handling:** Asegurar que si la lista está vacía (o tiene 1 elemento), el sistema usa `generateInitial`.

### Verificación Visual de Datos
- [ ] **Sort Verification:** Ordenar un array de prueba con los resultados de múltiples llamadas consecutivas a `calculateNewPosition` y verificar que el orden visual coincide con el orden alfabético de los strings.
