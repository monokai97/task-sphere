# Tasks: LexoRank Utility Core (Hito 3.1.1)

1. [x] Crear el archivo `src/lib/lexo.ts`.
2. [x] Definir la constante `ALPHABET` con los 62 caracteres alfanuméricos.
3. [x] Implementar la función `generateInitial` que retorne el valor central (ej. "V" o "h").
4. [x] Implementar la lógica de `generateBetween`:
    - Caso A: `prev` es null (inicio de lista).
    - Caso B: `next` es null (fin de lista).
    - Caso C: ambos presentes (medio de lista).
5. [x] Añadir lógica para manejar incrementos de longitud de string cuando se agote el espacio entre dos caracteres adyacentes.
6. [x] Exportar las funciones para su uso en los hooks de cliente y hooks de PayloadCMS.
7. [x] Documentar el código con JSDoc explicando la complejidad del algoritmo.
