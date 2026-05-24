# Checklist de Tareas: Hito 1 - Identificación de Sesiones Inactivas

- [ ] Crear archivo `src/services/maintenanceService.ts`.
- [ ] Implementar función `getExpiredSessions(): Promise<InactiveSessionReport>`.
- [ ] Implementar lógica para calcular `sieteDiasAtras = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)`.
- [ ] Invocar `payload.find` en la colección `GuestSessions`.
- [ ] Mapear los resultados a `expiredSessionIds` y contar los resultados.
- [ ] Exportar la función para ser utilizada en la API Route del Hito 3.
