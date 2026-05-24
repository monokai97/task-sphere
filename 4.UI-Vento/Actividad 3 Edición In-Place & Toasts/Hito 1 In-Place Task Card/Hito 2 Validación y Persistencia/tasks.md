# Tasks: Validación y Persistencia (Hito 4.3.1.2)

1. [ ] Crear hook `useUpdateTask` en `src/hooks/useTasks.ts` utilizando la mutación optimista.
2. [ ] Integrar `TaskUpdateSchema` para validar la entrada de datos en la mutación.
3. [ ] Implementar el manejo del rollback utilizando el snapshot capturado.
4. [ ] Implementar la lógica de notificación de error usando `sonner` (`toast.error`).
5. [ ] Conectar el `onBlur`/`Enter` del componente `TaskCard` con la ejecución de esta mutación.
6. [ ] Validar el flujo con los logs de auditoría para asegurar que el cambio (y su diff) se registra correctamente.
7. [ ] Ejecutar el build para asegurar la integridad de los contratos de tipo.
