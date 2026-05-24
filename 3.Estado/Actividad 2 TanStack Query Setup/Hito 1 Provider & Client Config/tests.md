# Tests: Provider & Client Config (Hito 3.2.1)

## Estrategia de Pruebas
Se validará la presencia de la infraestructura y el comportamiento del caché.

### Pruebas de Infraestructura (UI/Manual)
- [ ] **DevTools Check:** Confirmar visualmente que el logo de React Query aparece en la esquina inferior del navegador en desarrollo.
- [ ] **Context Availability:** Crear un componente de prueba temporal que use `useQueryClient()` y verificar que no devuelve null.

### Pruebas de Comportamiento (Integración)
- [ ] **Retry Pattern Simulation:** Simular una petición fallida (mockeando el fetch) y observar en DevTools que se ejecutan los 3 reintentos configurados antes de emitir el error final.
- [ ] **StaleTime Verification:** Realizar una consulta, navegar y volver; verificar en la pestaña Network que no se dispara una segunda petición HTTP si el tiempo transcurrido es menor a 1 minuto.

### Verificación de Hidratación
- [ ] **SSR Compatibility:** Verificar que el servidor renderiza el HTML inicial sin errores de "Text content did not match" (Hydration Error).
