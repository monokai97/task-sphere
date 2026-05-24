# Tests: Conectividad y Panel Admin (Hito 1.1.3)

## Estrategia de Pruebas
Se validará tanto el acceso visual como la integridad lógica de la conexión.

### Pruebas de Conectividad (Backend)
- [ ] **Local API Ping:** Crear un test que verifique que `payload.collections` no está vacío.
- [ ] **CRUD Smoke Test:** Ejecutar una operación de creación y posterior eliminación programática de un registro en la colección `Users`.

### Pruebas de Interfaz (Frontend Admin)
- [ ] **Admin URL Reachability:** Verificar que `/admin` redirige correctamente al login si no hay sesión.
- [ ] **Asset Loading:** Confirmar que los estilos y scripts del panel admin se cargan (sin errores 404 en la pestaña Network del navegador).

### Verificación de Persistencia
- [ ] **SQLite Inspection:** Abrir el archivo `payload.db` con una herramienta externa (como DB Browser for SQLite) y verificar que la tabla `users` existe y tiene la estructura esperada por Drizzle.
