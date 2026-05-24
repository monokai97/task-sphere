# Tests: Tailwind & Theme Setup (Hito 4.1.1)

## Estrategia de Pruebas
Validaremos la correcta carga de tokens y estilos base.

### Pruebas Visuales
- [ ] **Design Token Check:** Abrir la página `/design-tokens` y verificar visualmente que los tonos de "neutros profundos" y la tipografía son correctos.
- [ ] **Dark Mode Switch:** Alternar manualmente el class `dark` en la `<html>` o `<body>` y verificar que el fondo oscuro se aplica correctamente.

### Pruebas de Configuración
- [ ] **Tailwind Compilation:** Ejecutar `npm run build` y asegurar que no hay errores de sintaxis en `tailwind.config.ts`.
- [ ] **Font Loading:** Inspeccionar la red y verificar que el archivo de fuente Geist se está descargando correctamente.
