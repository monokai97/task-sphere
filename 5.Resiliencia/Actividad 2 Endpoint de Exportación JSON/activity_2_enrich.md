# Activity Report: Endpoint de Exportación JSON (activity_2_enrich.md)

## Resumen de la Actividad
**Objetivo Técnico:** Implementar un flujo de portabilidad de datos que permita al invitado exportar su historial completo (tareas y logs) en formato JSON, garantizando la privacidad y el cumplimiento de las normativas de propiedad de datos.
**Archivos Involucrados:** `src/app/api/export/route.ts`, `src/lib/payload.ts`, `src/components/features/ExportButton.tsx`.

## Desglose de Hitos

### Hito 1: Export API Route
- **Descripción:** Creación de una API Route protegida que valide la identidad del invitado mediante Iron-Session antes de procesar la solicitud de exportación.
- **Verificación:** Intento de acceso al endpoint sin sesión activa, el cual debe ser rechazado con un código 401.

### Hito 2: Lógica de Agregación de Datos
- **Descripción:** Implementación de la lógica de consulta masiva utilizando el Local API de PayloadCMS para recopilar todas las tareas y registros de auditoría vinculados al `guestId` actual.
- **Verificación:** Ejecución de la API y comprobación de que el JSON resultante contiene la estructura de datos completa definida en los contratos del diseño técnico.

### Hito 3: Componente de Descarga en UI
- **Descripción:** Desarrollo del componente `ExportButton` que maneje el trigger de la descarga, el estado de carga y la generación del archivo Blob en el navegador.
- **Verificación:** Al hacer clic en el botón de exportación, se debe iniciar la descarga automática de un archivo `.json` con el contenido correcto.

## Justificación Técnica
Este desglose prioriza la seguridad y la integridad. Al validar la sesión en el Hito 1, prevenimos el acceso no autorizado a los datos de otros invitados. La agregación mediante Local API (Hito 2) asegura que los datos exportados incluyan la trazabilidad completa (logs), ofreciendo una portabilidad real y de alta fidelidad, tal como se especifica en los requisitos funcionales.

## Checklist de Carpetas de Hitos
- [ ] Hito 1 Export API Route
- [ ] Hito 2 Lógica de Agregación de Datos
- [ ] Hito 3 Componente de Descarga en UI
