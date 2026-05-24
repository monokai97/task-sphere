# Design: Component Installation (Hito 4.1.2.2)

## Decisiones de Arquitectura
1. **Granularidad:** Instalar solo los componentes necesarios para el MVP inicial.
2. **Localización:** Todos los componentes se mantendrán en `src/components/ui/` para edición centralizada.
3. **Radix Dependency:** Aprovechar las primitivas de Radix UI incluidas en los componentes Shadcn para asegurar accesibilidad.

## Lista de Componentes a Instalar
| Componente | Uso Principal |
| :--- | :--- |
| `button` | Acciones de UI (Crear, Guardar, Borrar) |
| `input` | Entrada de texto para tareas |
| `checkbox` | Alternancia de estado (completar tarea) |
| `dialog` | Modales de confirmación (Delete, etc.) |
| `card` | Envoltura de tarjetas de tarea |

## Patrón de Implementación
```mermaid
graph LR
    ShadcnCLI[shadcn add] --> UI[src/components/ui/...]
    UI --> Radix[Radix UI Primitives]
```
