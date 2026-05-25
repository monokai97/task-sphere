# Reporte de Calidad: Filtros de Acceso Global (Hito 2.3.2)

## 1. Reporte de Errores Solucionados
- **Ignorancia del Filtro en Local API:** Durante las pruebas, se observó que el filtro no se aplicaba. Se identificó que, al usar la `Local API` en entornos de prueba, Payload puede omitir el control de acceso si no se especifica explícitamente `overrideAccess: false`. Se actualizó la suite de pruebas para forzar la validación de acceso.
- **Configuración de Filtro:** Se refactorizó la lógica de `canReadTasks` para devolver una estructura de consulta explícita que se fusiona correctamente con las restricciones de Payload, asegurando que las tareas marcadas como eliminadas sean omitidas.

## 2. Implicaciones de la Implementación
- **Seguridad por Diseño:** El acceso global actúa como un "middleware de persistencia", impidiendo que datos borrados lógicamente se filtren a la interfaz o APIs externas.
- **Transparencia:** La implementación garantiza que los administradores mantengan acceso total para labores de soporte, mientras que los invitados quedan restringidos a su propio espacio activo.

## 3. Importancia del Hito
- **Integridad de UI:** El usuario final solo interactúa con datos "vivos", evitando confusión al ver tareas eliminadas.
- **Resiliencia:** Al delegar el filtrado al motor de Payload (acceso global), eliminamos la necesidad de recordar aplicar este filtro en cada endpoint de la aplicación, reduciendo significativamente la posibilidad de bugs en el frontend.

**Hito Validado y Cerrado con 100% de éxito en Pruebas de Integración.**
