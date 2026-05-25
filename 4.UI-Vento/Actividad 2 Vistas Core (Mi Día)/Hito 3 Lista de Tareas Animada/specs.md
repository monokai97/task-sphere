# Specs: Lista de Tareas Animada (Hito 4.2.3)

## Requisitos Técnicos
- **Librería:** `framer-motion`.
- **Componente:** `TaskList` usando `AnimatePresence` y `layout` prop.
- **Tipos de Animación:**
    - `initial`: Estado inicial de entrada.
    - `animate`: Estado visible.
    - `exit`: Estado de desaparición (borrado/soft-delete).
- **Layout Shift:** Animación suave al cambiar el orden (LexoRank).

## Escenarios de Aceptación

### Escenario 1: Animación de Entrada
**Given** que la lista de tareas está cargada
**When** una nueva tarea es añadida
**Then** el elemento debe aparecer con una animación de fade-in y expansión vertical suave.

### Escenario 2: Animación de Eliminación
**Given** una lista con varias tareas
**When** el usuario elimine una tarea
**Then** el resto de tareas deben deslizarse suavemente para ocupar el espacio vacío (Layout Animation).

### Escenario 3: Reordenamiento Suave
**Given** dos tareas ordenadas (A, B)
**When** el usuario reordene a (B, A)
**Then** los elementos deben deslizarse a su nueva posición en lugar de saltar instantáneamente.
