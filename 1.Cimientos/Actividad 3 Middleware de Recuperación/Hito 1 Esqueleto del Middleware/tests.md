# Tests: Esqueleto del Middleware (Hito 1.3.1)

## Estrategia de Pruebas
Se validará que el middleware se activa en las rutas correctas y que es capaz de leer la información de la cookie sin interrumpir el flujo.

### Pruebas de Configuración (Matcher)
- [ ] **Positive Match:** Acceder a `/dashboard` y verificar que el middleware registra actividad en los logs.
- [ ] **Negative Match:** Acceder a `/favicon.ico` y verificar que el middleware NO registra actividad.

### Pruebas de Detección (Cookies)
- [ ] **Cookie Presence:** Inyectar una cookie manual `todo_guest_session` en el navegador y verificar que el middleware detecta el string cifrado.
- [ ] **Cookie Absence:** Limpiar cookies y verificar que el middleware registra la ausencia de la sesión correctamente.

### Pruebas de Rendimiento (Latencia)
- [ ] **Execution Time:** Validar que el tiempo de ejecución del middleware es inferior a 10ms para no penalizar el TTFB (Time to First Byte).
