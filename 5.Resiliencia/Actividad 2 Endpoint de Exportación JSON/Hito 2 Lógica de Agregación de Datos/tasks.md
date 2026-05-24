# Checklist de Tareas: Hito 2 - Lógica de Agregación de Datos

- [ ] Crear servicio de agregación `src/services/exportService.ts`.
- [ ] Implementar función `getExportData(guestId: string)`.
- [ ] Implementar lógica para recuperar `Tasks` mediante `payload.find` con filtro `guest`.
- [ ] Implementar lógica para recuperar `TaskLogs` mediante `payload.find` con filtro `guestId`.
- [ ] Unificar los resultados en un único objeto `ExportPayload`.
- [ ] Integrar el `exportService` en `src/app/api/export/route.ts` (reemplazando el placeholder).
- [ ] Asegurar que los tipos de datos sean correctos (exportar interfaces).
- [ ] Verificar que los campos sensibles no se exporten (limpieza de datos si es necesario).
