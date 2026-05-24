# Tests: Hooks de Captura (afterChange) (Hito 2.2.1)

## Estrategia de Pruebas
Se validará la ejecución reactiva del servidor ante mutaciones de datos.

### Pruebas de Integración (Lifecycle)
- [ ] **Trigger on Admin Create:** Acceder al panel `/admin`, crear una tarea y verificar en los logs del servidor la aparición del mensaje `[AUDIT_CAPTURE]` con `operation: create`.
- [ ] **Trigger on Admin Update:** Editar el título de una tarea existente en el panel admin y verificar el log con `operation: update`.

### Pruebas de Datos
- [ ] **Guest ID Recovery:** Asegurar que el `guestId` logueado coincide con el ID del invitado asignado a la tarea.
- [ ] **Previous Doc Integrity:** En el log de actualización, verificar que el objeto recibido como `previousDoc` contiene los valores antiguos antes del cambio.

### Pruebas de Rendimiento
- [ ] **Response Time Check:** Medir que la activación del hook no incremente el tiempo de respuesta del servidor en más de 5ms.
