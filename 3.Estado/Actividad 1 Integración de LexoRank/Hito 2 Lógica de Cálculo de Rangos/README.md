# LexoRank UI Utility (Phase 3, Activity 1, Hito 2)

Este hito proporciona las utilidades de nivel de aplicación para gestionar el ordenamiento de tareas utilizando LexoRank.

## Utilidad: `src/lib/lexo-ui.ts`
- **Purpose:** Proporciona un punto de entrada simplificado para la lógica de reordenamiento desde la interfaz de usuario (Drag & Drop).
- **Key Functions:**
  - `calculateNewPosition({ prevRank, nextRank })`: Determina automáticamente dónde debe insertarse una tarea basándose en los elementos vecinos (anterior y siguiente).

## Uso
Esta utilidad es utilizada por los hooks de estado (próximos hitos) para calcular el string de `position` antes de enviar la mutación al servidor.

```typescript
import { calculateNewPosition } from '@/lib/lexo-ui';

const newPos = calculateNewPosition({ 
  prevRank: '0|a0', 
  nextRank: '0|a2' 
}); // Devuelve '0|a1'
```

## Beneficios
- **UI Decoupling:** Los componentes de Drag & Drop no necesitan conocer la complejidad interna de `lexorank`.
- **Atomicidad:** Centraliza el cálculo de rangos, asegurando que el formato (prefijo de bucket, etc.) sea siempre consistente al enviar datos al servidor.
