# Estrategia de Pruebas: Hito 3 - Componente de Descarga en UI

## 1. Pruebas de Interacción (Component Testing)
- [ ] **Prueba: Estado de carga**
    - **Escenario:** Clic en botón.
    - **Resultado:** Verificar que el icono/botón muestra el estado "cargando".
- [ ] **Prueba: Disparo de descarga**
    - **Escenario:** Simular respuesta exitosa de la API.
    - **Resultado:** Verificar que la función de descarga (simulada) es llamada con el objeto Blob correcto.

## 2. Pruebas de Feedback (Sonner)
- [ ] **Prueba: Toast de éxito**
    - **Escenario:** Respuesta API `200`.
    - **Resultado:** Verificar que `toast.success` es llamado.
- [ ] **Prueba: Toast de error**
    - **Escenario:** Respuesta API `401` o `500`.
    - **Resultado:** Verificar que `toast.error` es llamado.
