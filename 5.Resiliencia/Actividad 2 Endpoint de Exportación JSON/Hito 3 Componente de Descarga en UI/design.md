# Diseño Técnico: Hito 3 - Componente de Descarga en UI

## 1. Interacción Visual

```mermaid
sequenceDiagram
    participant User
    participant Button as ExportButton
    participant API as /api/export
    participant Browser

    User->>Button: Clic en "Exportar"
    Button->>Button: Set Loading=true
    Button->>API: GET /api/export
    API-->>Button: 200 OK + JSON Data
    Button->>Browser: Crear Blob y disparar descarga
    Button->>Button: Set Loading=false
    Button->>User: Toast "Éxito"
```

## 2. Decisión Arquitectónica: Blob API
Utilizaremos `new Blob([JSON.stringify(data)], { type: 'application/json' })` junto con un elemento `<a>` oculto para disparar la descarga. Esta es la forma estándar y eficiente de manejar descargas en el cliente sin depender de servidores de archivos intermedios.

## 3. Contrato de Componente

```typescript
interface ExportButtonProps {
  label?: string;
  className?: string;
}

// Sonner Toast usage:
// toast.success("Datos exportados correctamente");
// toast.error("Error al exportar datos");
```
