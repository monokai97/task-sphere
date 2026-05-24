# Tests: Invalidación de Caché Cross-Tab (Hito 3.3.3)

## Estrategia de Pruebas
Se validará la reactividad entre pestañas y el aislamiento de datos.

### Pruebas de Integración (Sync)
- [ ] **Tab Sincronization:** Abrir dos pestañas, realizar cambios en la Pestaña A y verificar en la Pestaña B mediante DevTools que la query `['tasks', guestId]` se ejecuta (estado 'fetching').
- [ ] **Data Integrity:** Verificar que tras el refetch automático, el estado de la Pestaña B es idéntico al de la Pestaña A.

### Pruebas de Seguridad
- [ ] **Guest Isolation:** Enviar un mensaje de broadcast desde la consola con un `guestId` erróneo y verificar que el hook en la aplicación no dispara el refetch.

### Pruebas de Rendimiento
- [ ] **Double Invalidation:** Emitir dos eventos rápidos y verificar que el `queryClient` gestiona la cola de invalidaciones sin bloquear el hilo principal.
