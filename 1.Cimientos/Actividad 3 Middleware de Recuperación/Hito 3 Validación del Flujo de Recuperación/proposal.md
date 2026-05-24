# Proposal: Validación del Flujo de Recuperación (Hito 1.3.3)

## El "Porqué" y el Impacto
La robustez de un sistema se mide por cómo maneja los fallos, no solo por cómo funciona en el "happy path". Este hito es el cierre crítico de la Actividad 3, encargado de asegurar que el flujo de recuperación de identidad (Middleware + PayloadCMS) sea resiliente ante condiciones adversas como cookies corruptas, sesiones expiradas físicamente en base de datos o fallos temporales de SQLite.

El impacto es una experiencia de usuario ininterrumpida. Al validar proactivamente la integridad del flujo, garantizamos que el sistema pueda autosanarse (regenerando identidades si es necesario) o informar al usuario de forma elegante si ocurre un error persistente, evitando pantallas blancas o estados inconsistentes de la UI. Este hito cumple con la guardia de "Resiliencia" y "UX sin fricciones" del diseño técnico.

## Justificación de la Solución
Implementaremos una lógica de validación de tres capas en el middleware:
1. **Integridad Estructural:** Validación del formato del `guestId` (UUID) antes de impactar la base de datos.
2. **Consistencia de Datos:** Manejo de la desincronización entre cookie y registro físico (Upsert redundante).
3. **Manejo de Excepciones de Infraestructura:** Estrategia de "fail-safe" donde la aplicación sigue funcionando en modo degradado si la persistencia falla momentáneamente.
