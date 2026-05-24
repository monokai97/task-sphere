# Tasks: Lista de Tareas Animada (Hito 4.2.3)

1. [ ] Instalar la librería `framer-motion`: `npm install framer-motion`.
2. [ ] Modificar `src/components/features/TaskList.tsx` para importar `motion` y `AnimatePresence`.
3. [ ] Envolver el mapeo de `tasks` con `AnimatePresence`.
4. [ ] Convertir los items de la lista en `motion.div` con la propiedad `layout`.
5. [ ] Configurar las propiedades `initial`, `animate` y `exit` según el diseño Vento.
6. [ ] Validar que la animación de reordenamiento responde a los cambios de `LexoRank` (cuando las tareas cambian de índice).
7. [ ] Asegurar que las animaciones funcionan en modo de "actualización optimista" (se disparan antes de la confirmación del servidor).
