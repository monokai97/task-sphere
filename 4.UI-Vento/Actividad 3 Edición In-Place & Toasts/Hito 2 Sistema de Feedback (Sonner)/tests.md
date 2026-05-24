# Tests: Sistema de Feedback (Sonner) (Hito 4.3.2)

## Estrategia de Pruebas
Validaremos que los mensajes de usuario aparecen en los momentos correctos.

### Pruebas Funcionales (UI)
- [ ] **Success Toast Check:** Ejecutar mutación exitosa y confirmar visualmente la aparición del toast.
- [ ] **Error Toast Check:** Simular error en mutación y confirmar que el toast de error se muestra con el estilo adecuado.

### Pruebas de Integración
- [ ] **ToastManager Helper:** Verificar que el helper `toastManager` dispara correctamente los mensajes de Sonner en los hooks integrados.
- [ ] **UI Consistency:** Confirmar que el Toast no se superpone con componentes esenciales del layout (ej. Sidebar).
