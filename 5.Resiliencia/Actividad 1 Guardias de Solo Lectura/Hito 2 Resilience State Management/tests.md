# Tests: Resilience State Management (Hito 5.1.2)

## Estrategia de Pruebas
Validaremos la propagación reactiva del estado.

### Pruebas de Integración (Estado)
- [ ] **Context Propagation:** Inyectar manualmente un estado `isReadOnly: true` y verificar que los componentes suscritos reciben el booleano correcto.
- [ ] **Event Triggering:** Disparar el evento de fallo de persistencia desde el EventBus y verificar que el Provider actualiza el estado.

### Pruebas de Sistema
- [ ] **State Persistence:** Verificar que el estado se mantiene durante la navegación (App Router).
- [ ] **No Unwanted Re-renders:** Asegurar que el estado no causa re-renderizaciones excesivas en el árbol de componentes raíz.
