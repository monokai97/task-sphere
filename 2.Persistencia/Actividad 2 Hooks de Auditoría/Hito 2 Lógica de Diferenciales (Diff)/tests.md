# Tests: Lógica de Diferenciales (Diff) (Hito 2.2.2)

## Estrategia de Pruebas
Se realizarán pruebas unitarias exhaustivas para cubrir todas las combinaciones de cambios posibles.

### Pruebas Unitarias (Pure Logic)
- [ ] **Single Field Change:** Verificar que al cambiar solo el título, el diff solo contiene la clave `title`.
- [ ] **Multiple Fields Change:** Verificar que al cambiar título y estado simultáneamente, el diff contiene ambos campos.
- [ ] **Null to Value Change:** Verificar que la transición de una descripción vacía a una con texto se captura correctamente.
- [ ] **Identity Check:** Verificar que si pasamos el mismo objeto dos veces, el resultado es `null` o un objeto vacío.

### Pruebas de Integración (Payload Context)
- [ ] **Integration with Hook:** Realizar una edición en el panel admin y verificar que el log de consola muestra solo los campos que se editaron manualmente en el formulario.
- [ ] **System Field Exclusion:** Verificar explícitamente que cambios internos (como el ID o timestamps) nunca aparecen en el diferencial generado.
