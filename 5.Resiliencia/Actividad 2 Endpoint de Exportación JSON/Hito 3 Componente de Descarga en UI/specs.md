# Especificaciones Técnicas: Hito 3 - Componente de Descarga en UI

## 1. Requisitos Funcionales
- **RF-1:** El sistema debe proporcionar un botón de "Exportar mis datos" en el panel de configuración o gestión del usuario.
- **RF-2:** Al hacer clic, el botón debe indicar un estado de carga (loading spinner).
- **RF-3:** Al finalizar la descarga con éxito, el sistema debe mostrar un toast de éxito.
- **RF-4:** Si ocurre un error, el sistema debe mostrar un toast de error.
- **RF-5:** El navegador debe iniciar automáticamente la descarga del archivo `.json`.

## 2. Requisitos Técnicos
- **RT-1:** Componente funcional de React utilizando `shadcn/ui` button.
- **RT-2:** Integración con la API `/api/export`.
- **RT-3:** Gestión de estados mediante hooks de React o TanStack Query.
- **RT-4:** Uso de la API de `Blob` y `URL.createObjectURL` para disparar el evento de descarga en el navegador.

## 3. Escenarios de Aceptación (Gherkin)

### Escenario 1: Exportación exitosa
**Given** que el usuario hace clic en el botón "Exportar mis datos"
**When** la API `/api/export` responde con éxito
**Then** el componente debe mostrar el estado de carga
**And** al finalizar, debe disparar la descarga automática del archivo
**And** mostrar un toast de éxito: "Datos exportados correctamente".

### Escenario 2: Fallo en la exportación
**Given** que el usuario hace clic en el botón "Exportar mis datos"
**When** la API `/api/export` responde con un error
**Then** el componente debe mostrar el estado de carga
**And** debe mostrar un toast de error: "Error al exportar datos. Inténtalo de nuevo."
