# Specs: Lógica de Edición (Hito 4.3.1.1)

## Requisitos Técnicos
- **Estados:** `isEditing` (boolean).
- **Eventos de Teclado:**
    - `Enter`: Confirmar cambio y guardar.
    - `Escape`: Cancelar y restaurar valor original.
- **Enfoque:** `onFocus` para seleccionar el texto y `onBlur` para guardar automáticamente.

## Escenarios de Aceptación

### Escenario 1: Guardado con Enter
**Given** una tarea en modo edición con un nuevo título escrito
**When** el usuario presiona la tecla `Enter`
**Then** se debe disparar la mutación de actualización, salir del modo edición y actualizar el texto visualizado.

### Escenario 2: Cancelación con Escape
**Given** una tarea en modo edición con un nuevo título escrito
**When** el usuario presiona la tecla `Escape`
**Then** el sistema debe ignorar los cambios, restaurar el título original y salir del modo edición.

### Escenario 3: Guardado con Blur
**Given** una tarea en modo edición
**When** el usuario haga clic fuera del input (o tabule hacia otro elemento)
**Then** el sistema debe guardar el cambio automáticamente y salir del modo edición.
