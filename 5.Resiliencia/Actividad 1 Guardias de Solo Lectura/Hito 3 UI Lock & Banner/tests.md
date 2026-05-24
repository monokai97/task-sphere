# Tests: UI Lock & Banner (Hito 5.1.3)

## Estrategia de Pruebas
Validaremos visualmente que el sistema de bloqueo es claro y efectivo.

### Pruebas Visuales (UI)
- [ ] **Banner Visibility:** Verificar que el banner aparece en la parte superior con el mensaje correcto cuando `isReadOnly` es `true`.
- [ ] **Locking Effect:** Confirmar que los botones envueltos en `LockedWrapper` no responden al clic.
- [ ] **Dark Mode:** Verificar que el banner mantiene sus colores de advertencia (Vento style) en modo oscuro.

### Pruebas de Integración (State)
- [ ] **State Switch:** Verificar que al cambiar `isReadOnly` a `false` (ej. tras un reinicio de sesión), el banner desaparece y los botones se habilitan instantáneamente.
- [ ] **Pointer Events:** Confirmar mediante inspección que los elementos bloqueados tienen `pointer-events: none` en su CSS calculado.
