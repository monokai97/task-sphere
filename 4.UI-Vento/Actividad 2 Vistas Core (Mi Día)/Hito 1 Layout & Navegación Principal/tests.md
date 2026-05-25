# Tests: Layout & Navegación Principal (Hito 4.2.1)

## Estrategia de Pruebas
Validaremos que el layout se adapta y se mantiene persistente durante la navegación.

### Pruebas Visuales (UI)
- [ ] **Desktop Layout:** Verificar que Sidebar está fijo y Main Content centrado.
- [ ] **Mobile Layout:** Verificar que la navegación es accesible en móvil.
- [ ] **Dark Mode:** Verificar que los colores base de fondo se mantienen profundos en modo oscuro.

### Pruebas de Integración
- [ ] **Navigation Persistence:** Navegar entre sub-rutas dentro del dashboard y confirmar que el layout no se recarga completamente.
- [ ] **Banner Visibility:** Simular el error de `ReadOnlyMode` mediante context y verificar que el `ResilienceBanner` aparece sin romper el layout.
