# Tests: Validación Vento (Hito 4.3.3)

## Estrategia de Pruebas

### Pruebas Funcionales (Vitest)
- [ ] **Accessibility Audit**: Verificar que todos los componentes en el Showcase no tengan violaciones de accesibilidad automatizadas (usando `jest-axe`).

### Pruebas de Calidad Visual
- [ ] **Snapshot Test**: Verificar la renderización visual de `ComponentShowcase` comparada con la línea base.

### Pruebas de Scripts
- [ ] **Contrast Verification**: Ejecutar el script `check-contrast.ts` y validar que ningún par de colores reporta un ratio < 4.5.
