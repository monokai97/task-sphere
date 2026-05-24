# Tests: Contratos de Datos y Zod (Hito 2.1.3)

## Estrategia de Pruebas
Se utilizarán pruebas unitarias para validar la lógica de los esquemas Zod de forma aislada.

### Pruebas de Validación de Tareas
- [ ] **Valid Title:** Pasar un título de 3 caracteres y verificar que es aceptado.
- [ ] **Short Title:** Pasar un título de 2 caracteres y verificar que devuelve el error exacto "Mínimo 3 caracteres".
- [ ] **Empty Position:** Verificar que el campo `position` es obligatorio y no acepta strings vacíos.

### Pruebas de Sanitización
- [ ] **Trim Check:** Enviar un payload con espacios excesivos y verificar que Zod devuelve el string limpio.
- [ ] **Extra Fields Check:** Enviar campos no definidos en el esquema y verificar que Zod los ignora (usando `.strict()` o comportamiento por defecto).

### Pruebas de Sesión
- [ ] **UUID Format:** Validar que el esquema de sesión rechaza strings aleatorios y solo acepta UUIDs v4 válidos para el campo `guestId`.
