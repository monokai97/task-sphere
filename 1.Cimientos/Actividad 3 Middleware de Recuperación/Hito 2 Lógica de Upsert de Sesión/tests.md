# Tests: Lógica de Upsert de Sesión (Hito 1.3.2)

## Estrategia de Pruebas
Se validará la consistencia entre el estado del cliente (Cookie) y el estado del servidor (SQLite).

### Pruebas de Integración (Base de Datos)
- [ ] **Transparent Recreation:**
    1. Generar una cookie válida accediendo a `/api/auth/guest`.
    2. Borrar manualmente la fila correspondiente en SQLite.
    3. Acceder a `/dashboard`.
    4. Verificar que la fila ha vuelto a aparecer con el mismo ID.
- [ ] **Activity Update:** 
    1. Observar el valor de `lastActive` en la base de datos.
    2. Esperar 1 minuto y recargar el dashboard.
    3. Verificar que el valor de `lastActive` ha cambiado.

### Pruebas de Resiliencia
- [ ] **Database Lock Test:** Simular un bloqueo de base de datos y verificar que el middleware permite el acceso al dashboard (aunque no pueda actualizar la sesión), asegurando que la disponibilidad no dependa de una escritura exitosa en cada request.
