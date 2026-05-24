# Tests: LexoRank Utility Core (Hito 3.1.1)

## Estrategia de Pruebas
Se utilizarán pruebas unitarias con Vitest/Jest para garantizar que el motor matemático es infalible.

### Pruebas de Ordenamiento
- [ ] **Initial Value:** Verificar que el valor inicial es consistente.
- [ ] **Increment Check:** Generar 10 rangos sucesivos hacia el final y verificar que `rank[i] < rank[i+1]` es siempre verdadero.
- [ ] **Decrement Check:** Generar 10 rangos hacia el inicio y verificar que `rank[i] > rank[i+1]` es siempre verdadero.

### Pruebas de Densidad (Stress)
- [ ] **Mid-point Exhaustion:** Insertar repetidamente entre "a" y "b" hasta forzar el crecimiento del string. Verificar que el sistema sigue devolviendo valores válidos que mantienen el orden alfabético.
- [ ] **Boundary Check:** Verificar comportamiento con el primer ('0') y último ('Z') carácter del alfabeto.

### Verificación de Tipos
- [ ] **Type Check:** Asegurar que todas las funciones aceptan y devuelven `string` y manejan `null` correctamente.
