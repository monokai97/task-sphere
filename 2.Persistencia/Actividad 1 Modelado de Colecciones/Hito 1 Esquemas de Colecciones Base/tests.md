# Tests: Esquemas de Colecciones Base (Hito 2.1.1)

## Estrategia de Pruebas
Se validará la integridad de los esquemas y su visibilidad en el panel de administración.

### Pruebas de Definición (Admin)
- [ ] **Admin Visibility:** Acceder a `/admin` y confirmar que las tres pestañas de las colecciones (`Guest Sessions`, `Tasks`, `Task Logs`) son visibles.
- [ ] **Validation Check:** Intentar crear una tarea con un título de 2 caracteres; el sistema debe rechazar la operación con un error de validación.

### Pruebas de Persistencia (Local API)
- [ ] **Manual ID Session:** Crear un script que inserte un registro en `GuestSessions` con un UUID predefinido y verificar que se persiste correctamente.
- [ ] **Timestamp Auto-generation:** Verificar que al crear un registro, el campo `createdAt` se puebla automáticamente con la fecha del sistema.

### Verificación de Tipos
- [ ] **TypeScript Integrity:** Comprobar que en `src/payload-types.ts` existen las interfaces `GuestSession`, `Task` y `TaskLog` con sus respectivos campos.
