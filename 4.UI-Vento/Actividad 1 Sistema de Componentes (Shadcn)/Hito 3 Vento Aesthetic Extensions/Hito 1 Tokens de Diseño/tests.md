# Tests: Tokens de Diseño (Hito 4.3.1)

## Estrategia de Pruebas

### Validación de Configuración
- [ ] **Tailwind Config Check**: Verificar que `tailwind.config.ts` exporta la configuración extendida correcta (fuentes, espaciado).
- [ ] **CSS Variable Check**: Asegurar que las variables CSS están definidas en `:root` en `globals.css`.

### Pruebas de Integración Visual (Snapshot/Computed)
- [ ] **Token Application**: Verificar que un elemento DOM renderizado con una clase `p-vento-8` realmente tiene el valor `32px` computado.
- [ ] **Font Check**: Verificar que el elemento `body` tiene asignado `Geist Sans`.

### Pruebas de Unidad
- [ ] **Tokens Utility Check**: Verificar que `src/lib/tokens.ts` exporta los valores esperados.
