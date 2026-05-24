# Tests: Optimistic Hook Implementation (Hito 3.2.2)

## Estrategia de Pruebas
Se validará la reactividad de la interfaz y la integridad del caché local.

### Pruebas de Latencia Visual (Manual/DevTools)
- [ ] **Instant Toggle Check:** Activar la mutación de una tarea y verificar en las DevTools de TanStack Query que el estado del caché cambia a "Fresh" con el nuevo valor en menos de 50ms, independientemente de la respuesta de red.
- [ ] **Instant Remove Check:** Ejecutar eliminación y verificar que el componente se desmonta (o desaparece de la lista) inmediatamente.

### Pruebas de Integridad de Caché
- [ ] **State Matching:** Verificar que el payload enviado al API coincide exactamente con el cambio realizado optimísticamente en el caché.
- [ ] **Concurrency Conflict Prevention:** Verificar que `cancelQueries` se ejecuta correctamente si el usuario realiza clics rápidos (burst) sobre múltiples tareas, evitando que refetches intermedios sobrescriban el estado optimista.

### Pruebas de Datos
- [ ] **Filter Check:** Confirmar que la actualización optimista respeta los filtros de `guestId`, asegurando que no se mezclen tareas de diferentes sesiones en el caché local.
