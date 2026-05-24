# Proposal: Validación y Persistencia (Hito 4.3.1.2)

## El "Porqué" y el Impacto
Una vez implementada la lógica de edición en el cliente (Hito 1), es imperativo conectar esta acción con el servidor de forma segura y validada. Este hito se encarga de transmitir el título editado de la tarea al backend, pasando por los filtros de seguridad y validación de Zod antes de persistirse en SQLite mediante PayloadCMS.

El impacto es la **integridad de datos garantizada**. Impedimos que títulos vacíos, demasiado cortos o malformados lleguen a la base de datos, y aseguramos que el sistema responde de forma consistente ante fallos de persistencia (ej. bloqueos de base de datos) mediante un sistema de rollback que restaura el título original si la actualización falla, cumpliendo con la guardia de "Optimistic Rollback" del diseño global.

## Justificación de la Solución
Utilizaremos el contrato de validación `TaskUpdateSchema` definido en la fase de persistencia (Zod) para validar los datos antes de disparar la mutación. La persistencia se gestionará a través del hook `useTasks.updateTask` (TanStack Query), que ya está diseñado para manejar la respuesta del servidor, logrando así un flujo end-to-end donde la UI, el caché y la base de datos permanecen sincronizados.
