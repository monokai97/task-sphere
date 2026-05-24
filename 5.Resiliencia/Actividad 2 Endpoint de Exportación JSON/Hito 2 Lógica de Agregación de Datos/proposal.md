# Propuesta Técnica: Hito 2 - Lógica de Agregación de Datos

## 1. Contexto y Problema
Una vez establecida la seguridad del endpoint (Hito 1), el sistema debe ser capaz de extraer la información completa del usuario invitado de forma eficiente y segura. El problema principal es evitar consultas ineficientes o la exposición accidental de datos de otros usuarios durante la agregación.

## 2. Solución Propuesta
Utilizar la **Local API de PayloadCMS** para realizar consultas internas de base de datos (`find`). Esto garantiza que todas las restricciones de acceso (hooks, filtros de seguridad, soft delete) aplicadas en la capa de persistencia se ejecuten automáticamente durante la extracción de datos para la exportación.

### Justificación Técnica:
- **Integridad:** La Local API respeta los filtros de acceso globales (por ejemplo, `isDeleted: false`).
- **Performance:** Al ejecutar consultas internas, evitamos el sobrecoste de serialización HTTP y el riesgo de bloqueos de I/O en la base de datos externa.
- **Data Fidelity:** Obtenemos una vista unificada de las colecciones `Tasks` y `TaskLogs` relacionadas al `guestId` actual, asegurando la consistencia en el JSON final.

## 3. Impacto en el Sistema
Este hito encapsula la lógica de negocio de exportación. El endpoint `/api/export` (del Hito 1) se convertirá en un orquestador que invocará este servicio de agregación, garantizando que el diseño arquitectónico se mantenga desacoplado.
