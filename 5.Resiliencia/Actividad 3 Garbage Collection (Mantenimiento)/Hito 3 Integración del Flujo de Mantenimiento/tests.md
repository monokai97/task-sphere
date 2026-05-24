# Estrategia de Pruebas: Hito 3 - Integración del Flujo de Mantenimiento

## 1. Pruebas de Integración (API Endpoint)
- [ ] **Prueba: Autorización**
    - **Escenario:** Llamada sin token.
    - **Resultado:** 403 Forbidden.
- [ ] **Prueba: Orquestación completa**
    - **Escenario:** Llamada con token válido, mockeando sesiones antiguas.
    - **Resultado:** 200 OK y confirmación de borrado de sesiones.

## 2. Pruebas de End-to-End (Simulación)
- [ ] **Prueba: Flujo completo de mantenimiento**
    - **Escenario:** Crear sesiones antiguas, ejecutar endpoint de mantenimiento, verificar que las sesiones desaparecen de la DB.
