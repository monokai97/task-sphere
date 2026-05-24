# Estrategia de Pruebas: Hito 1 - Identificación de Sesiones Inactivas

## 1. Pruebas Unitarias (Service)
- [ ] **Prueba: Filtrado por fechas**
    - **Escenario:** Mockear Payload con datos de varias fechas.
    - **Resultado:** Verificar que solo IDs con fecha > 7 días son retornados.
- [ ] **Prueba: Colección vacía**
    - **Escenario:** Mockear Payload sin datos.
    - **Resultado:** Retornar lista vacía.

## 2. Pruebas de Integración (Simulación DB)
- [ ] **Prueba: Consulta con datos reales**
    - **Escenario:** Crear sesiones con fechas antiguas en una DB de test.
    - **Resultado:** Verificar que el servicio identifica los IDs correctos.
