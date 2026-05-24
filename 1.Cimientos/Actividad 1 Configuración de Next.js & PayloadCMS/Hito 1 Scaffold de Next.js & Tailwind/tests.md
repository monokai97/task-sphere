# Tests: Scaffold de Next.js & Tailwind (Hito 1.1.1)

## Estrategia de Pruebas
Dado que este es un hito de infraestructura visual, las pruebas se centrarán en la integridad de la configuración y la presencia de elementos visuales base.

### Pruebas de Configuración (Shell/Checklist)
- [ ] **TS Check:** Ejecutar `npx tsc --noEmit` para validar que el scaffold no tiene errores de tipos.
- [ ] **Lint Check:** Ejecutar `npm run lint` para asegurar el cumplimiento de las reglas básicas.
- [ ] **Tailwind Presence:** Verificar que el archivo `src/app/globals.css` contiene las directivas `@tailwind base; @tailwind components; @tailwind utilities;`.

### Pruebas de Renderizado (Manual/Playwright opcional)
- [ ] **Dark Mode Sync:** Verificar inspeccionando la consola del navegador que el body tiene aplicado el color de fondo `#0a0a0a` (o la variable CSS correspondiente).
- [ ] **Responsive View:** Redimensionar el navegador para asegurar que no hay desbordamientos horizontales en el scaffold base.
