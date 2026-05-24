# Proposal: Lógica de Upsert de Sesión (Hito 1.3.2)

## El "Porqué" y el Impacto
Este hito materializa la "Recuperación Transparente" de identidad, un pilar del modelo Guest-First. Al implementar una lógica de **upsert** (update or insert) en el middleware, garantizamos que la existencia de una identidad visual (cookie) siempre esté respaldada por una integridad física (registro en SQLite). 

El impacto es crítico para la resiliencia del sistema: si un registro de sesión fuera eliminado accidentalmente o purgado por el Garbage Collection mientras la cookie del usuario aún es válida, el sistema lo regenerará automáticamente sin que el usuario note interrupción alguna. Esto asegura que todas las operaciones de tareas posteriores tengan una clave foránea (`guestId`) válida hacia donde apuntar, evitando fallos de integridad referencial.

## Justificación de la Solución
Se utiliza el **Local API de PayloadCMS** directamente en el middleware. Dado que PayloadCMS 3.0 está diseñado para Next.js, podemos ejecutar estas consultas de base de datos con latencia mínima. Al usar una operación de upsert basada en el ID de la cookie, eliminamos la necesidad de bifurcaciones lógicas complejas (if-else) en el código, logrando un flujo de autenticación determinista y robusto.
