# Tests: Vento Aesthetic Extensions (Hito 4.1.3)

## Estrategia de Pruebas
Pruebas puramente visuales y de cumplimiento de tokens.

### Pruebas de Estilo (Visual Regression)
- [ ] **CSS Variable Test:** Verificar que los elementos no tienen bordes cuadrados (`rounded-none`).
- [ ] **Blur Test:** Verificar que los contenedores `backdrop-blur` tienen la propiedad CSS `backdrop-filter: blur(...)`.
- [ ] **Shadow Test:** Verificar que las sombras aplicadas son la paleta `vento` y no las sombras estándar de Tailwind.

### Pruebas de Sistema
- [ ] **Token Consistency:** Verificar en la página de design tokens (creada anteriormente) que todos los componentes ahora cumplen con el nuevo radio de borde `vento-md`.
