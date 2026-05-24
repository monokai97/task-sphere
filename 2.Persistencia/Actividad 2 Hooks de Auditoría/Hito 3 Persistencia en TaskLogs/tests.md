# Tests: Persistencia en TaskLogs (Hito 2.2.3)

## Estrategia de Pruebas
Se validará que la base de datos registra fielmente la historia de las tareas.

### Pruebas de Persistencia (E2E)
- [ ] **Full Audit Cycle:**
    1. Crear una tarea.
    2. Modificar su título.
    3. Marcarla como completada.
    4. Verificar en la colección `Task Logs` que existen exactamente 3 registros vinculados a esa tarea con las operaciones y diffs correspondientes.
- [ ] **Cascade Reference Check:** Verificar que el campo `task` del log contiene el ID correcto y es navegable en el panel admin.

### Pruebas de Robustez
- [ ] **Silent Failure:** Forzar un error en la colección de logs (ej. quitando permisos) y verificar que la tarea principal se crea/edita sin problemas en la UI.
- [ ] **No Spurious Logs:** Realizar una edición que no cambie datos (ej. guardar sin editar) y confirmar que el contador de registros en `TaskLogs` no se incrementa.

### Verificación Administrativa
- [ ] **Admin UI Inspection:** Acceder a la vista de un registro en `TaskLogs` y verificar que el campo JSON muestra los cambios de forma legible.
