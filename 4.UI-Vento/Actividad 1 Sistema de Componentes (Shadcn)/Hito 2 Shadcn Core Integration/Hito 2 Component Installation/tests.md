# Tests: Component Installation (Hito 4.1.2.2)

## Estrategia de Pruebas
Validar la existencia, configuración y accesibilidad de los componentes.

### Verificación de archivos
- [ ] **Files Existence:** Confirmar la presencia física de los 5 archivos `.tsx` en `src/components/ui/`.

### Pruebas de Integración y Accesibilidad
- [ ] **Button Logic:** Verificar si el `Button` maneja estados (hover/focus) y se puede activar por teclado.
- [ ] **Checkbox Accessibility:** Verificar que al hacer clic en el label del `Checkbox` este cambia su estado correctamente.
- [ ] **Dialog Accessibility:** Confirmar que `Dialog` maneja el foco atrapado (focus trap) y se puede cerrar con Escape.
- [ ] **Tailwind Integration:** Asegurar que los componentes utilizan los tokens del `design.md` (bordes redondeados, colores neutros).
