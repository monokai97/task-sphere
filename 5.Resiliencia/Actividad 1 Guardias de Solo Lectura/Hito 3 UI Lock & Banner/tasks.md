# Tasks: UI Lock & Banner (Hito 5.1.3)

1. [ ] Crear `src/components/ui/ResilienceBanner.tsx` con estilos Vento.
2. [ ] Crear `src/components/ui/LockedWrapper.tsx` para envolver elementos bloqueables.
3. [ ] Implementar el renderizado condicional del banner en `src/app/(dashboard)/layout.tsx` basado en `useResilience`.
4. [ ] Aplicar `LockedWrapper` en los botones de "Guardar", "Completar Tarea" y en los triggers de Drag & Drop.
5. [ ] Asegurar que el banner sea dismissible (opcional, si el error no es persistente) o que se mantenga si el error persiste.
6. [ ] Validar que los estilos del banner (`bg-vento-neutral-900`) respetan el Dark Mode.
7. [ ] Ejecutar prueba manual forzando el estado a `isReadOnly: true`.
