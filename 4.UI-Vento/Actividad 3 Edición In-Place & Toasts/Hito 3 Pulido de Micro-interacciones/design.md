# Design: Pulido de Micro-interacciones (Hito 4.3.3)

## Decisiones de Arquitectura
1. **Tailwind Transitions:** Configurar `transition-all duration-200 ease-in-out` para todas las interacciones de hover/foco.
2. **Motion Wrappers:** Crear un componente `VentoButton` que envuelva el botón de Shadcn con un wrapper de `motion.button` para efectos de escala al pulsar.
3. **Focus Token:** Centralizar el estilo del `focus-visible` en `globals.css` para asegurar que el anillo de enfoque sea el mismo en toda la aplicación.

## Diagrama de Estados (TaskCard)
```mermaid
stateDiagram-v2[*] --> Idle
Idle --> Hover: mouseEnter
Hover --> Idle: mouseLeave
Idle --> Focused: tabKey
Focused --> Idle: blur
```

## Estructura Visual (Snippet)
```typescript
// Componente con feedback de clic
<motion.button 
  whileTap={{ scale: 0.98 }} 
  className="transition-shadow hover:shadow-vento focus-visible:ring-2"
>
  ...
</motion.button>
```
