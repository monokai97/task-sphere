# Product Design Brief Visual: Task App (Microsoft To Do Style)

## 1. Guía de Estilo Visual y Paleta de Tokens

### Sistema de Color (Semántica Tailwind)
| Token | Modo Claro (Light) | Modo Oscuro (Dark) | Uso |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#F9FAFB` (`bg-gray-50`) | `#09090B` (`bg-zinc-950`) | Fondo base de la aplicación. |
| **Surface Primary** | `#FFFFFF` (`bg-white`) | `#18181B` (`bg-zinc-900`) | Tarjetas de tareas y paneles laterales. |
| **Surface Elevated** | `#F3F4F6` (`bg-gray-100`) | `#27272A` (`bg-zinc-800`) | Items seleccionados o hover. |
| **Border Subtle** | `#F3F4F6` (`border-gray-100`) | `#27272A/50` (`border-zinc-800/50`) | Líneas de división y contornos. |
| **Accent Primary** | `#2563EB` (`bg-blue-600`) | `#3B82F6` (`bg-blue-500`) | Botones principales y estados activos. |
| **Accent Star** | `#FACC15` (`text-yellow-400`) | `#FDE047` (`text-yellow-300`) | Tareas marcadas como importantes. |
| **Text Primary** | `#111827` (`text-gray-900`) | `#FAFAFA` (`text-zinc-50`) | Títulos y contenido principal. |
| **Text Secondary** | `#6B7280` (`text-gray-500`) | `#A1A1AA` (`text-zinc-400`) | Metadatos y descripciones. |

### Tipografía y Sombras
- **Fuente:** Sans-serif moderna (Inter/Geist), pesos 400, 500, 600, 700.
- **Elevation:** `shadow-sm` para ítems de lista, `shadow-md` para el panel de detalles y el input de nueva tarea.
- **Radios:** `rounded-lg` (8px) para tareas, `rounded-xl` (12px) para contenedores mayores.

---

## 2. Composición de Layout SPA (3 Columnas)

Estructura global: `h-screen w-screen flex overflow-hidden`.

### Columna 1: Sidebar (Navegación)
- **Atributos:** `w-72 h-full flex-shrink-0 border-r border-gray-100 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md`.
- **Contenido:** Lista vertical de categorías (Mi Día, Importante, Planeado). Iconos de línea fina (20px). Contadores numéricos alineados a la derecha con `text-xs font-medium text-gray-400`.

### Columna 2: Main Workspace (Área de Trabajo)
- **Atributos:** `flex-1 h-full flex flex-col bg-gray-50 dark:bg-zinc-950 overflow-y-auto`.
- **Layout:** Padding masivo `p-12`. Encabezado con `text-4xl font-bold tracking-tight text-blue-600` y subtítulo de fecha actual.
- **Lista de Tareas:** Espaciado vertical `space-y-1` entre `TodoItems`.

### Columna 3: Detail Panel (Detalles de Tarea)
- **Atributos:** `w-96 h-full bg-white dark:bg-zinc-900 border-l border-gray-100 dark:border-zinc-800/50 fixed right-0 top-0 z-40 transition-transform duration-300 shadow-2xl`.
- **Interacción:** Se desliza horizontalmente. Contiene opciones de subpasos, recordatorios y notas.

---

## 3. Planos de Componentes

### TodoItem (Fila de Tarea)
- **Contenedor:** `flex items-center p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-zinc-700 transition-all cursor-pointer group`.
- **Checkbox:** `w-5 h-5 rounded-full border-2 border-gray-300 dark:border-zinc-600 flex items-center justify-center mr-4 group-hover:border-blue-500`.
- **Estado Completado:** `opacity-50`, texto con `line-through`. Checkbox relleno con icono de check.
- **Acción Importante:** Icono de estrella (`lucide-star`) a la derecha, resaltado en `text-yellow-400` si está activo.

### AddTaskBox (Barra de Entrada)
- **Contenedor:** `sticky bottom-8 mx-auto w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-800 p-2 flex flex-col`.
- **Input:** `bg-transparent border-none focus:ring-0 text-lg placeholder-gray-400`.
- **Toolbar Inferior:** Micro-iconos (Calendario, Campana, Repetir) que aparecen al hacer focus en el input, permitiendo añadir metadatos rápidamente.

---

## 4. Comportamiento Adaptativo (Responsive)

### Tablet/Mobile Blueprint
- **Sidebar:** Colapsa en un `drawer` lateral (hamburguesa).
- **Main Area:** Toma el 100% del ancho. Padding se reduce a `p-4`.
- **Detail Panel:** Se convierte en un `bottom sheet` o modal de pantalla completa superpuesto.

---

## 5. Estados Vacíos y Carga

### Empty States
- **Visual:** Ilustración SVG minimalista en el centro (`max-w-[240px]`), opacidad `opacity-40` (`grayscale` o tonos de la paleta).
- **Copia:** Título sutil `text-gray-500 font-medium` seguido de una instrucción de ayuda.

### UI Skeletons
- **Efecto:** `animate-pulse bg-gray-200 dark:bg-zinc-800`.
- **Estructura:** Rectángulos redondeados que replican la altura y el espaciado de los `TodoItems` originales para evitar saltos de layout (Layout Shift).
