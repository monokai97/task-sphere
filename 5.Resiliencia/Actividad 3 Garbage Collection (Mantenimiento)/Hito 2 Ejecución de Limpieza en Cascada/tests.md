# Estrategia de Pruebas: Hito 2 - Ejecución de Limpieza en Cascada

## 1. Pruebas Unitarias (Service)
- [ ] **Prueba: Borrado exitoso**
    - **Escenario:** Mockear Payload para que `payload.delete` retorne éxito.
    - **Resultado:** Verificar `deletedCount` correcto y `successIds` lleno.
- [ ] **Prueba: Manejo de errores**
    - **Escenario:** Mockear Payload para que uno de los borrados falle.
    - **Resultado:** Verificar que el reporte incluye el error y los IDs fallidos.

## 2. Pruebas de Integración (Base de Datos Real)
- [ ] **Prueba: Verificación de cascada**
    - **Escenario:** Crear sesiones con tareas y logs, ejecutar borrado.
    - **Resultado:** Verificar mediante queries directas (o Payload) que no quedan registros en Tasks/Logs.
