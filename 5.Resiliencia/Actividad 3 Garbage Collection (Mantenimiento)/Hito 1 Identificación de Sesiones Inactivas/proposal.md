# Propuesta Técnica: Hito 1 - Identificación de Sesiones Inactivas

## 1. Contexto y Problema
En un sistema basado en sesiones de invitados temporales, el archivo SQLite crecerá indefinidamente si no se implementa un mecanismo de limpieza. Las sesiones inactivas ocupan espacio, afectan el rendimiento de las consultas y contravienen las políticas de privacidad y retención de datos.

## 2. Solución Propuesta
Implementar un servicio de mantenimiento centralizado que consulte la colección `GuestSessions` de PayloadCMS para identificar aquellas sesiones cuya fecha de última actividad (`lastActive`) sea superior a 7 días.

### Justificación Técnica:
- **Eficiencia:** Utilizar `payload.find` con filtros de fecha sobre el campo `lastActive` permite una identificación rápida sin cargar todas las sesiones en memoria.
- **Seguridad:** Este proceso se ejecutará internamente, manteniendo la integridad de los datos.
- **Preparación:** La identificación precisa es el prerrequisito para un borrado en cascada seguro en el siguiente hito.

## 3. Impacto en el Sistema
Este hito sienta las bases de la estrategia de "Garbage Collection". Al aislar la lógica de identificación, garantizamos que el borrado (Hito 2) solo actúe sobre los datos correctos, evitando eliminaciones accidentales de sesiones activas.
