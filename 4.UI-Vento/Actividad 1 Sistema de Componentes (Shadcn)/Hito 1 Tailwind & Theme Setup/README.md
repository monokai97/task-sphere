# Hito 1: Tailwind & Theme Setup - Documentación Técnica

Este hito establece las bases visuales del proyecto bajo el diseño "Vento".

## Cambios Realizados

1.  **Tipografía**: Integración de `Geist Sans` a través de la librería `geist`.
2.  **Configuración Tailwind**:
    *   Añadida la paleta `vento-neutral` en `tailwind.config.ts`.
    *   Configurada la fuente `sans` por defecto a `Geist Sans`.
3.  **Global Styles**: Actualizados los tokens de CSS en `src/app/globals.css` para soportar las nuevas variables base.
4.  **Componentes de Validación**:
    *   `src/components/vento/VentoCard.tsx`: Componente base con estilos Vento.
    *   `src/components/ThemePreview.tsx`: Vista previa de la paleta.
    *   `src/app/design-tokens/page.tsx`: Página dedicada para inspeccionar tokens.

## Cómo usar
- **Tokens de color**: Usa `bg-vento-neutral-[50-950]` para aplicar colores base.
- **Tipografía**: La fuente `Geist` está aplicada automáticamente al `body` mediante CSS.
