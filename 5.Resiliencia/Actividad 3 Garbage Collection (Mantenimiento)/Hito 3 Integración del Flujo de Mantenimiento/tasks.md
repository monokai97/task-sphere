# Checklist de Tareas: Hito 3 - Integración del Flujo de Mantenimiento

- [ ] Crear archivo `src/app/api/maintenance/gc/route.ts`.
- [ ] Implementar middleware de autenticación sencillo (verificación de token de entorno).
- [ ] Implementar handler para POST.
- [ ] Llamar a `getExpiredSessions()` del servicio.
- [ ] Si hay sesiones identificadas, llamar a `deleteExpiredSessions()`.
- [ ] Construir y retornar el `MaintenanceReport` final.
- [ ] Documentar el uso del token de mantenimiento en los archivos de configuración del proyecto.
