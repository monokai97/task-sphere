# Specs: Relaciones e Índices (Hito 2.1.2)

## Requisitos Técnicos
- **Relación Guest-Task:** 1 a N (Un invitado tiene muchas tareas).
- **Relación Task-Log:** 1 a N (Una tarea genera muchos logs).
- **Índices Requeridos:**
    - Campo `guest` en la colección `Tasks`.
    - Campo `task` en la colección `TaskLogs`.
    - Campo `position` en la colección `Tasks` (para ordenamiento).
- **Integridad:** Configurar el borrado en cascada en la relación Guest -> Task.

## Escenarios de Aceptación

### Escenario 1: Vinculación de Tarea a Invitado
**Given** un registro existente en `GuestSessions`
**When** se cree una nueva tarea asignando el ID del invitado al campo `guest`
**Then** la base de datos debe almacenar correctamente la relación y permitir recuperarla mediante consultas de filtrado.

### Escenario 2: Eficiencia de Ordenamiento
**Given** una lista de 100 tareas para un mismo invitado
**When** se ejecute una consulta filtrando por `guestId` y ordenando por `position`
**Then** SQLite debe utilizar el índice de `position` para devolver los resultados en tiempo constante o logarítmico, evitando un escaneo completo de la tabla.

### Escenario 3: Borrado en Cascada
**Given** un invitado con 5 tareas asociadas
**When** se elimine físicamente el registro del invitado en `GuestSessions`
**Then** todas las tareas vinculadas deben ser eliminadas automáticamente de la tabla `tasks` por el motor de base de datos.
