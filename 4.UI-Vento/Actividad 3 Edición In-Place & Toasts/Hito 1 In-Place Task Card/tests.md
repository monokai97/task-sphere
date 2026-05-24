# Tests: In-Place Task Card (Hito 4.3.1)

## Estrategia de Pruebas
Validaremos la interactividad y la persistencia del flujo de edición.

### Pruebas de Interfaz (UI)
- [ ] **Edit Trigger:** Hacer clic en el título y verificar que el `input` se vuelve visible y recibe el foco.
- [ ] **Blur Save:** Escribir un nuevo título, quitar el foco y confirmar visualmente que el título ha cambiado (y que la mutación se ha disparado).
- [ ] **Esc Cancel:** Escribir un título, presionar Esc y confirmar que el título vuelve a su valor original.

### Pruebas de Integración
- [ ] **Mutation Dispatch:** Verificar en las DevTools de React Query que la mutación `updateTask` se dispara con el nuevo valor tras el blur.
- [ ] **Optimistic Sync:** Verificar que la UI muestra el nuevo título de forma inmediata y que el estado global se actualiza correctamente tras el éxito del API.
