# Checklist de Tareas: Hito 2 - Ejecución de Limpieza en Cascada

- [ ] Actualizar `src/services/maintenanceService.ts`.
- [ ] Implementar función `deleteExpiredSessions(ids: string[]): Promise<DeletionReport>`.
- [ ] Implementar ciclo de iteración para eliminar cada sesión mediante `payload.delete`.
- [ ] Implementar bloque `try/catch` para capturar errores por ID individual.
- [ ] Acumular resultados en `DeletionReport`.
- [ ] Exportar la función para ser utilizada en el Hito 3.
