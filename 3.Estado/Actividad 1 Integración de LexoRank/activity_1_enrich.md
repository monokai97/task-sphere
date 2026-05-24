# Activity Report: Integración de LexoRank (activity_1_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Implementar la lógica de ordenamiento lexicográfico fraccional (LexoRank) para permitir el reordenamiento de tareas mediante Drag & Drop con complejidad O(1) en la base de datos.
**Archivos Involucrados:** `src/lib/lexo.ts`, `src/hooks/useTasks.ts`, `src/collections/Tasks.ts`.

## Desglose de Hitos

### Hito 1: LexoRank Utility Core
- **Descripción:** Implementación de la clase o utilidades core de LexoRank en `/lib/lexo.ts` que soporte la generación de índices en Base-62.
- **Verificación:** Pruebas unitarias que confirmen que `genNext('a')` devuelve un valor mayor a 'a' y `between('a', 'b')` devuelve un valor intermedio válido.

### Hito 2: Lógica de Cálculo de Rangos
- **Descripción:** Implementación de funciones helper para calcular la nueva posición de una tarea dada su posición anterior, siguiente o posición en los extremos (top/bottom) de la lista.
- **Verificación:** Simulación de reordenamiento en el cliente y validación de que los strings resultantes mantienen el orden alfabético esperado.

### Hito 3: Validación y Persistencia
- **Descripción:** Integración de la validación del string `position` en el servidor mediante esquemas de Zod y hooks de PayloadCMS para asegurar que no se inserten rangos inválidos.
- **Verificación:** Intento de inserción de una tarea con una posición malformada que debe ser rechazada por el servidor.

## Justificación Técnica
Este desglose garantiza que el motor de ordenamiento sea agnóstico a la UI. Al validar los rangos en el Hito 3, protegemos la integridad de SQLite contra posibles errores de cálculo en el cliente, cumpliendo con la guardia de "Type-Safety" y "Consistencia" del diseño técnico.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 LexoRank Utility Core
- [ ] Hito 2 Lógica de Cálculo de Rangos
- [ ] Hito 3 Validación y Persistencia
