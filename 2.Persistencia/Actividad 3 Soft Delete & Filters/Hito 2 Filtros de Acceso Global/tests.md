# Tests: Filtros de Acceso Global (Hito 2.3.2)

## Estrategia de Pruebas
Se validará la efectividad de los filtros mediante simulaciones de diferentes identidades de usuario.

### Pruebas de Aislamiento (Integration)
- [ ] **Cross-User Leak Check:** 
    1. Crear una tarea para el `guest-A`. 
    2. Intentar leerla usando una sesión con `guest-B`. 
    3. Verificar que la respuesta es un array vacío o un error 404 (según el endpoint).
- [ ] **Soft Delete Visibility:** 
    1. Marcar una tarea como `isDeleted: true`. 
    2. Ejecutar una petición de listado. 
    3. Confirmar que la tarea no aparece en el JSON de respuesta.

### Pruebas de Seguridad (Unauthorized)
- [ ] **Forbidden Update:** Intentar un PATCH sobre una tarea de otro invitado y verificar que Payload devuelve un error 403 Forbidden.
- [ ] **Forbidden Delete:** Intentar un DELETE sobre una tarea de otro invitado y verificar el rechazo de la operación.

### Pruebas Administrativas
- [ ] **Admin Full Access:** Loguearse como usuario administrador y verificar que puede ver todas las tareas de todos los invitados, incluyendo las marcadas como `isDeleted`.
