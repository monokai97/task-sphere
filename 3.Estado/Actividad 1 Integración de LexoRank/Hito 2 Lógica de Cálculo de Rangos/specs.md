# Specs: Lógica de Cálculo de Rangos (Hito 3.1.2)

## Requisitos Técnicos
- **Entrada:** Lista ordenada de tareas, ID de la tarea movida (`activeId`), ID de la tarea destino (`overId`).
- **Dependencia:** Utilidad `LexoRank` definida en el Hito 1.
- **Salida:** Un nuevo string de posición calculado.

## Escenarios de Aceptación

### Escenario 1: Mover al Inicio de la Lista
**Given** una lista de tareas con posiciones `["b", "c", "d"]`
**When** el usuario mueva una tarea a la posición superior (antes de "b")
**Then** el sistema debe calcular un rango entre `null` y `"b"` (ej. `"a"`).

### Escenario 2: Mover al Final de la Lista
**Given** una lista con posiciones `["a", "b", "c"]`
**When** el usuario mueva una tarea después de "c"
**Then** el sistema debe calcular un rango mayor a "c" (ej. `"d"`).

### Escenario 3: Mover entre dos Tareas
**Given** una lista con posiciones `["a", "c", "d"]`
**When** el usuario suelte una tarea entre "a" y "c"
**Then** el sistema debe llamar a `LexoRank.generateBetween("a", "c")` y devolver el nuevo string (ej. `"b"`).
