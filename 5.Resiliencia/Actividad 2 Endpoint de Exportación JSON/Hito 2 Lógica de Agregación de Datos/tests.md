# Estrategia de Pruebas: Hito 2 - Lógica de Agregación de Datos

## 1. Pruebas Unitarias (Aggregation Service)
- [ ] **Prueba: Agregación Correcta**
    - **Escenario:** `payload.find` mockeado retorna tareas y logs.
    - **Resultado:** Verificar que el objeto final tiene la estructura `ExportPayload` esperada.
- [ ] **Prueba: Filtrado por guestId**
    - **Escenario:** Verificar que los filtros `where` enviados a `payload.find` contienen el `guestId` correcto.

## 2. Pruebas de Integración (Full Flow)
- [ ] **Prueba: Integración API + Service**
    - **Escenario:** Petición completa al endpoint `/api/export` con un usuario mockeado en la sesión.
    - **Resultado:** Respuesta `200 OK` con datos reales (o mockeados a nivel de DB).
- [ ] **Prueba: Seguridad de Datos**
    - **Escenario:** Verificar que los logs de usuario A no aparecen en la exportación de usuario B (usando 2 sesiones mockeadas).
