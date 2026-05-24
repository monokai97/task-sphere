# Tests: Relaciones e Índices (Hito 2.1.2)

## Estrategia de Pruebas
Validaremos que las relaciones son navegables y que los índices están activos para la optimización de consultas.

### Pruebas de Relación (Local API)
- [ ] **Data Integrity:** Crear una tarea sin asignar un `guestId`. Verificar que Payload rechaza la operación (Required field check).
- [ ] **Cross-Relation Fetch:** Realizar un `payload.find` sobre `Tasks` con el parámetro `depth: 1` y verificar que el objeto `guest` viene poblado con los datos de la sesión.

### Pruebas de Persistencia (SQLite)
- [ ] **Index Verification:** Utilizar un cliente SQL (ej. `sqlite3` CLI) y ejecutar `.schema tasks`. Verificar que existen los índices para `guest_id` y `position`.
- [ ] **Cascade Trigger:** Crear una sesión y una tarea. Borrar la sesión y verificar mediante una consulta directa a la tabla `tasks` que el registro ha desaparecido.

### Pruebas de Rendimiento
- [ ] **Order Consistency:** Insertar tareas con posiciones "A", "C", "B" y verificar que al consultar con `sort: 'position'` el motor devuelve el orden "A", "B", "C" correctamente utilizando el índice.
