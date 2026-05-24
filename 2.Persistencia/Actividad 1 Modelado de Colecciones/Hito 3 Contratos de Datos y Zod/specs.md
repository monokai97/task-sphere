# Specs: Contratos de Datos y Zod (Hito 2.1.3)

## Requisitos Técnicos
- **Validación:** Uso estricto de `zod` para validación de entrada.
- **Sanitización:** Limpieza de espacios en blanco y protección contra scripts básicos en campos de texto.
- **Tipado:** Inferencia de tipos TypeScript desde los esquemas Zod.
- **Compatibilidad:** Alineación total con los tipos generados por `npm run generate:types` de Payload.

## Escenarios de Aceptación

### Escenario 1: Validación de Creación de Tarea
**Given** un payload de tarea con un título de 2 caracteres
**When** sea procesado por el esquema de validación `TaskCreateSchema`
**Then** el sistema debe rechazar la petición con un error descriptivo: "El título debe tener al menos 3 caracteres."

### Escenario 2: Sanitización de Títulos
**Given** un título con espacios en blanco al inicio y al final (`"  Comprar pan  "`)
**When** sea validado y transformado por Zod
**Then** el valor resultante debe ser `"Comprar pan"`.

### Escenario 3: Integración de UUID
**Given** un `guestId` malformado (no UUID v4)
**When** se intente validar el contrato de sesión
**Then** Zod debe disparar un error de validación de formato, impidiendo que la consulta llegue a la base de datos.
