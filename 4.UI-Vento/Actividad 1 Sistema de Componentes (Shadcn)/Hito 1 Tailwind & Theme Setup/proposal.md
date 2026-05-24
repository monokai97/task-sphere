# Proposal: Tailwind & Theme Setup (Hito 4.1.1)

## El "Porqué" y el Impacto
La estética "Vento" define la identidad visual de la aplicación: ligereza, espacio en blanco generoso y una paleta de colores profunda. Este hito consiste en configurar los tokens de diseño (Tailwind config) y el sistema global de variables CSS (Dark Mode).

El impacto es la **coherencia visual**. Al establecer estos cimientos ahora, aseguramos que todos los componentes (Shadcn/UI, Vento específicos) compartan los mismos tokens, evitando el "drift" estilístico. Además, la configuración nativa de Dark Mode permite que la experiencia de usuario sea moderna y adaptable desde el primer día.

## Justificación de la Solución
Tailwind CSS es la opción ideal para implementar "Vento" debido a su capacidad de configurar tokens (colores, fuentes, sombras) mediante un `tailwind.config.ts` único. Esta configuración actúa como la única fuente de verdad para el estilo de toda la aplicación, simplificando tanto el desarrollo inicial como el mantenimiento de la identidad visual a largo plazo.
