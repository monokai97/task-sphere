# Proposal: Componente EmptyState (Hito 4.2.2)

## El "Porqué" y el Impacto
El estado vacío es el primer contacto del usuario con su espacio de trabajo cuando aún no tiene tareas. Un estado vacío genérico suele ser frío y desalentador. El componente `EmptyStateVento` tiene como propósito transformar este momento en una oportunidad de motivación y claridad, alineado con la estética "Vento" (ligereza, minimalismo, espacio en blanco).

El impacto es la **fricción cero**. Al proporcionar un diseño atractivo que invita a la acción ("Mi Día"), reducimos la ansiedad ante una lista vacía y guiamos al usuario hacia la creación de su primera tarea de forma intuitiva, mejorando la métrica de éxito de "fricción cero" definida en el diseño global.

## Justificación de la Solución
Desarrollaremos un componente de React dedicado (`EmptyStateVento.tsx`) utilizando componentes base de Shadcn (Card) y utilidades de estilo Vento. Esta solución permite encapsular la lógica de visualización del estado vacío sin ensuciar la lógica del Dashboard principal, permitiendo reutilizar este componente en otras secciones de la aplicación donde el aislamiento de datos (Guest-First) resulte en una lista vacía.
