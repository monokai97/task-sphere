# Tasks: Sistema de Feedback (Sonner) (Hito 4.3.2)

1. [ ] Instalar la librería: `npm install sonner`.
2. [ ] Añadir `<Toaster />` de `sonner` al `src/app/layout.tsx`.
3. [ ] Crear `src/lib/toast.ts` para centralizar la lógica de mensajes.
4. [ ] Integrar `toastManager` en los hooks `useToggleTask` y `useDeleteTask` (dentro de los callbacks `onSuccess` y `onError`).
5. [ ] Configurar los estilos de `sonner` para que coincidan con los tokens "Vento" (ej. `rounded-vento-sm`).
6. [ ] Validar que los mensajes de error incluyen información útil para el usuario.
7. [ ] Confirmar que el feedback no genera conflictos con otros componentes Shadcn.
