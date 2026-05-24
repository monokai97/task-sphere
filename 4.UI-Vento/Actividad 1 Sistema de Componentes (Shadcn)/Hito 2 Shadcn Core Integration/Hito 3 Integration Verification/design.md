# Design: Integration Verification (Hito 4.1.2.3)

## Decisiones de Arquitectura
1. **Developer-Only Route:** La página de test (`/dev/test-suite`) debe estar protegida o ser inaccesible en producción, usando `NODE_ENV === 'development'`.
2. **Component Test Pattern:** Usar un enfoque de "Kitchen Sink" para el TestSuite: una sola página que muestre variaciones de los componentes para comparar estados.

## Estructura de TestSuite
```mermaid
graph TD
    Page[/dev/test-suite] --> Suite[TestSuite Component]
    Suite --> B(Button)
    Suite --> I(Input)
    Suite --> C(Checkbox)
    Suite --> D(Dialog)
    Suite --> Card(Card)
```

## Contrato de Verificación (Checklist)
- [ ] Verificar `className` aplicada vs. `tailwind.config.ts`.
- [ ] Validar estados de `focus-visible` para accesibilidad.
- [ ] Confirmar compatibilidad con Dark Mode (`theme-dark`).
