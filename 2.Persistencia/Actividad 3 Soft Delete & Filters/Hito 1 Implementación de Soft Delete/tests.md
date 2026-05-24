# Tests: Implementación de Soft Delete (Hito 2.3.1)

## Estrategia de Pruebas
Validaremos que el borrado lógico funciona y que el borrado físico está bloqueado.

### Pruebas de Intercepción (Admin/API)
- [ ] **Soft Delete Action:** Intentar borrar una tarea mediante una petición DELETE al API y verificar que el código de respuesta es exitoso (200/204).
- [ ] **Data Check:** Consultar la tarea por ID inmediatamente después y verificar que existe y tiene `isDeleted: true`.

### Pruebas de Persistencia (SQLite)
- [ ] **Physical Existence:** Abrir `payload.db` tras varios "borrados" y verificar que el conteo de filas en la tabla `tasks` no disminuye.
- [ ] **Audit Trail Check:** Verificar en la colección `task-logs` que existe una entrada con `operation: 'DELETE'` para la tarea afectada.

### Pruebas de Integridad
- [ ] **Double Delete:** Intentar "borrar" una tarea que ya tiene `isDeleted: true`. El sistema debe manejarlo sin errores catastróficos.
