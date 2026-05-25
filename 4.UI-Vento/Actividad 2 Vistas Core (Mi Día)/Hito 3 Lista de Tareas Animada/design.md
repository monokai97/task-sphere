# Design: Lista de Tareas Animada (Hito 4.2.3)

## Decisiones de Arquitectura
1. **Layout Groups:** Utilizar la propiedad `layout` de `motion.div` para que Framer Motion detecte automáticamente los cambios de posición y anime el movimiento.
2. **Presence Management:** Envolver la lista en `AnimatePresence` para permitir animaciones de salida (`exit`) durante el borrado.
3. **Optimistic Transition:** Las animaciones deben ser disparadas tanto por el estado real como por las actualizaciones optimistas de TanStack Query para mantener la fluidez en el "hilo" de la mutación.

## Estructura de Animación (Snippet)
```typescript
<AnimatePresence>
  {tasks.map((task) => (
    <motion.div
      key={task.id}
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <TaskCard task={task} />
    </motion.div>
  ))}
</AnimatePresence>
```
