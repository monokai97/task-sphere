# Tests: Validación y Persistencia (Hito 4.3.1.2)

## Estrategia de Pruebas
Validaremos que el ciclo de edición-validación-persistencia es correcto y resistente a errores.

### Pruebas de Integración (Flow)
- [ ] **Successful Save:** Editar título, desenfocar input, verificar éxito de mutación y persistencia en SQLite (mediante logs de auditoría).
- [ ] **Validation Rejection:** Intentar guardar título vacío, verificar que la UI bloquea la mutación y se mantiene el estado anterior.
- [ ] **Rollback on API Error:** Simular respuesta 500 del servidor y verificar que el título en la UI vuelve al original tras un Toast de error.

### Pruebas UI
- [ ] **Loading State:** Verificar que durante el guardado (mutación en curso) el input/tarjeta muestra un estado de carga (ej. spinner o opacidad reducida).
- [ ] **Toast Feedback:** Verificar que el sistema emite el Toast de éxito tras guardar.
