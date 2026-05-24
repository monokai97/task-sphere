# Specs: LexoRank Utility Core (Hito 3.1.1)

## Requisitos Técnicos
- **Alfabeto:** Base-62 (`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`).
- **Funciones Requeridas:**
    - `genNext(prev: string): string` -> Genera un rango mayor al actual.
    - `genBetween(prev: string, next: string): string` -> Genera un rango intermedio entre dos strings.
    - `genInitial(): string` -> Genera el primer rango del sistema (ej. "h0").
- **Propiedad Invariante:** El resultado de `genBetween(A, B)` debe cumplir siempre que `A < resultado < B` según el orden alfabético de strings.

## Escenarios de Aceptación

### Escenario 1: Generación del Rango Inicial
**Given** una lista de tareas vacía
**When** se llame a `genInitial()`
**Then** debe devolver un valor medio del alfabeto para permitir crecimiento en ambas direcciones.

### Escenario 2: Inserción entre Tareas
**Given** dos posiciones existentes "a" y "b"
**When** se llame a `genBetween("a", "b")`
**Then** el string resultante debe estar ordenado lexicográficamente después de "a" y antes de "b".

### Escenario 3: Manejo de Colisiones de Longitud
**Given** dos posiciones muy cercanas (ej. "a" y "a0")
**When** no haya espacio de un solo carácter entre ellas
**Then** la utilidad debe extender la longitud del string (ej. "a0V") para garantizar que el nuevo rango sea único y válido.
