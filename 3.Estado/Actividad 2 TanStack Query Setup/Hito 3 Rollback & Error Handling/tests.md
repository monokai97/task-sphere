# Tests: Rollback & Error Handling (Hito 3.2.3)

## Estrategia de Pruebas
Se simularán fallos controlados en el API para verificar la capacidad de recuperación de la UI.

### Pruebas de Reversión (Integración)
- [ ] **Toggle Rollback Test:**
    1. Interceptar la petición PATCH de una tarea y forzar una respuesta 500.
    2. Hacer clic en el checkbox.
    3. Verificar que el checkbox se marca (optimista) y luego se desmarca automáticamente (rollback) al recibir el error.
- [ ] **Delete Rollback Test:**
    1. Forzar error en la petición DELETE.
    2. Eliminar tarea.
    3. Confirmar que la tarea desaparece y luego vuelve a aparecer en su posición original.

### Pruebas de Feedback
- [ ] **Toast Visibility:** Verificar que tras un error de mutación, el componente de notificaciones muestra el mensaje de error esperado.

### Verificación de Consistencia
- [ ] **Post-Failure Sync:** Verificar en las DevTools de TanStack Query que tras el rollback se ejecuta un refetch (`onSettled`) y que el estado final del caché coincide exactamente con el valor actual de la base de datos SQLite.
