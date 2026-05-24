# Tests: Política de Borrado en Cascada (Hito 2.3.3)

## Estrategia de Pruebas
Validaremos que no existan fugas de datos tras operaciones de borrado de alto nivel.

### Pruebas de Integridad (DB Level)
- [ ] **Recursive Cleanup Test:**
    1. Crear Guest A.
    2. Crear 2 tareas para Guest A.
    3. Generar 2 logs por cada tarea (4 logs total).
    4. Borrar Guest A.
    5. Consultar `Tasks` por `guestId` de Guest A: debe retornar 0.
    6. Consultar `TaskLogs` vinculados a esas tareas: debe retornar 0.

### Pruebas de Casos de Borde
- [ ] **Soft-Deleted Cascade:** Verificar que si una sesión se borra, las tareas que ya estaban marcadas como `isDeleted: true` también son eliminadas físicamente de SQLite.
- [ ] **Admin Deletion:** Verificar que borrar un invitado desde la UI de administración de Payload dispara correctamente la cascada hacia abajo.

### Verificación de Constraints (Manual)
- [ ] **SQL Inspection:** Ejecutar `PRAGMA foreign_key_list('tasks');` en la consola de SQLite y confirmar que aparece `ON DELETE CASCADE`.
