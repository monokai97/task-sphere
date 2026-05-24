# Hito 1.1.1: Scaffold de Next.js & Tailwind

## Propósito
Este hito establece la base técnica del proyecto:
- **Next.js 14+**: Aplicación con App Router y estructura `src/`.
- **Tailwind CSS**: Configuración base con tokens para modo oscuro y claro siguiendo la estética Vento.
- **Geist Sans**: Tipografía principal integrada globalmente.

## Estructura creada
```text
/src
  /app           # Rutas y layouts principales
  /components    # Componentes de UI
  /lib           # Utilidades y configuración
  /hooks         # Hooks personalizados
  /collections   # Definiciones de PayloadCMS
```

## Configuración
- `tailwind.config.ts`: Base para el sistema de diseño Vento.
- `src/app/globals.css`: Variables CSS para temas.
- `src/app/layout.tsx`: Layout raíz aplicando la fuente Geist y clases de estilo base.
