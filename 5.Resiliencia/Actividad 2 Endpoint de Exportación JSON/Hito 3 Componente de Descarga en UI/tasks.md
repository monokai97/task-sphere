# Checklist de Tareas: Hito 3 - Componente de Descarga en UI

- [ ] Crear componente `src/components/features/ExportButton.tsx`.
- [ ] Implementar botón de shadcn/ui con icono (ej. `DownloadIcon`).
- [ ] Implementar hook para gestionar el estado `isLoading`.
- [ ] Implementar la función `handleExport` que:
    - [ ] Llama a `/api/export`.
    - [ ] Gestiona errores (toast de error).
    - [ ] Genera el `Blob` a partir de la respuesta JSON.
    - [ ] Crea un elemento `<a>` temporal, asigna el `blobUrl` y simula el clic.
    - [ ] Limpia el objeto `URL` creado.
- [ ] Integrar el componente `ExportButton` en la vista de configuración o dashboard.
- [ ] Asegurar estilos mediante Tailwind siguiendo las guías Vento (padding, sombras, hover states).
