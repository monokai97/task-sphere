# Proposal: Persistence Error Interceptor (Hito 5.1.1)

## El "Porqué" y el Impacto
La persistencia local en SQLite en un entorno web no está exenta de fallos catastróficos (ej. disco lleno, corrupción de archivo, bloqueos prolongados). Si la aplicación no detecta estos errores, el usuario puede seguir interactuando con la interfaz creyendo que sus datos se están guardando, lo que lleva a una pérdida de confianza irreparable.

Este hito implementa un **Persistence Error Interceptor** en el adaptador de PayloadCMS (Drizzle/SQLite). Su impacto es doble:
1. **Detección Temprana:** Captura errores de SQLite antes de que lleguen al usuario final como "fallos silenciosos".
2. **Degradación Elegante:** Permite al sistema reaccionar y cambiar el estado global a "Solo Lectura", protegiendo la integridad de la base de datos y notificando honestamente al usuario.

## Justificación de la Solución
Intercepte los errores en la capa del adaptador de base de datos de Payload es la solución más robusta. Al configurar el adaptador con lógica de manejo de errores, centralizamos la detección en un solo punto, garantizando que tanto las operaciones del Local API como las del panel admin reporten el mismo estado de resiliencia del sistema.
