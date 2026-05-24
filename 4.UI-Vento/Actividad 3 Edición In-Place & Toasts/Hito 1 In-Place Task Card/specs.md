# Specs: In-Place Task Card (Hito 4.3.1)

## Requisitos Técnicos
- **Trigger:** Modo edición activado mediante clic o atajo de teclado (ej. tecla `Enter` cuando está enfocado).
- **Persistencia:** Llamada al `useTasks` hook (mutación) al desenfocar (onBlur) o presionar Enter.
- **Accesibilidad:** Mantener el foco en el input al entrar en modo edición.

## Escenarios de Aceptación

### Escenario 1: Activación de Edición
**Given** una tarjeta de tarea en modo visualización
**When** el usuario haga clic sobre el título
**Then** el texto debe convertirse en un `input` editable.

### Escenario 2: Guardado automático
**Given** una tarea en modo edición
**When** el usuario escriba un nuevo título y pierda el foco (blur)
**Then** el sistema debe disparar la mutación de actualización
**And** volver al modo visualización mostrando el nuevo título.

### Escenario 3: Cancelación
**Given** una tarea en modo edición
**When** el usuario presione la tecla `Esc`
**Then** el input debe cerrarse sin guardar cambios y restaurar el título original.
