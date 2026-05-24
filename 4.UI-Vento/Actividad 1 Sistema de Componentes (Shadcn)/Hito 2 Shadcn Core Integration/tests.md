# Tests: Shadcn Core Integration (Hito 4.1.2)

## Estrategia de Pruebas
Validaremos la accesibilidad y la integración estética de los nuevos componentes.

### Pruebas de Integración (Componentes)
- [ ] **Component Render:** Confirmar que los componentes base se renderizan correctamente sin fallos visuales de Tailwind.
- [ ] **Interaction Check:** Verificar que botones y checkboxes responden a interacciones (hover, focus, click).

### Pruebas de Accesibilidad
- [ ] **Keyboard Navigation:** Verificar que componentes como el `Button` o `Dialog` son navegables mediante Tab y activables mediante Enter.
- [ ] **ARIA Check:** Inspeccionar que el `Checkbox` de Shadcn aplica correctamente los atributos `aria-checked` al interactuar.

### Pruebas de Sistema
- [ ] **Config File Integrity:** Verificar que `components.json` apunta a la ubicación correcta en `src/components/ui`.
- [ ] **Helper Validation:** Probar la función `cn()` con múltiples clases de Tailwind para asegurar que las colisiones se resuelven correctamente.
