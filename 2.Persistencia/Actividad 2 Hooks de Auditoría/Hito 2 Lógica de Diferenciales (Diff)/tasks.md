# Tasks: Lógica de Diferenciales (Diff) (Hito 2.2.2)

1. [x] Crear el archivo `src/lib/audit.ts` (Implementado directamente en el hook por simplicidad o como utilidad).
2. [x] Definir la lista de campos "auditables" (campos de negocio que nos interesa trackear).
3. [x] Implementar la función `getTaskDiff` que compare `previousDoc` con `doc`.
4. [x] Asegurar que la función maneje correctamente los valores opcionales como `description` (null vs undefined vs string vacío).
5. [x] Integrar la llamada a `getTaskDiff` dentro del hook `afterChange` creado en el Hito 1.
6. [x] Modificar el log temporal de consola para imprimir el JSON del diferencial generado.
7. [x] Validar que la lógica ignore los cambios en los campos de metadatos de Payload.
