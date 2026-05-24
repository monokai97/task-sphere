# Tests: Lógica de Edición (Hito 4.3.1.1)

## Estrategia de Pruebas
Pruebas interactivas enfocadas en la experiencia de teclado y pérdida de foco.

### Pruebas de Interacción
- [ ] **Focus Management:** Confirmar que al cambiar a modo edición, el input tiene el foco activo (document.activeElement).
- [ ] **Commit Success:** Escribir nuevo valor -> Enter -> Verificar que la mutación se envía y el modo edición termina.
- [ ] **Cancelation:** Escribir nuevo valor -> Esc -> Verificar que el valor del título es el original.
- [ ] **Blur Action:** Escribir nuevo valor -> Hacer click fuera -> Verificar que se guarda.

### Pruebas de Integración
- [ ] **Zod Integration:** Intentar guardar un título de 2 caracteres y verificar que el sistema rechaza el guardado (y posiblemente muestra un toast de error).
- [ ] **State Restoration:** Si falla el servidor, verificar que el componente recupera el título original tras el rollback de la mutación.
