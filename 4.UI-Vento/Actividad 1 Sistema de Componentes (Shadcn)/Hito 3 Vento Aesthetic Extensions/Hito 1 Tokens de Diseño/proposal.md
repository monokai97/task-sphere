# Proposal: Hito 3.1 - Vento Design Tokens

## Porqué
Para alcanzar la fidelidad visual del sistema "Vento", no es suficiente con los colores base de Tailwind. Necesitamos un sistema de tokens tipográficos y de espacio que garanticen consistencia en toda la aplicación (espaciado generoso, legibilidad con Geist, y jerarquía clara).

## Objetivo
Centralizar la definición de tokens de diseño en `tailwind.config.ts` y `globals.css` para que el sistema de componentes Shadcn/Vento se base en una única fuente de verdad.

## Impacto
- Mejora la mantenibilidad del diseño.
- Permite la creación de componentes Vento (Glows, EmptyStates) con tokens consistentes.
- Facilita el cambio de branding o escalado de la paleta.
