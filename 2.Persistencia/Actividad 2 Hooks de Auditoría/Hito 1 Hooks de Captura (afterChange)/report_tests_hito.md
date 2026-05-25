# Reporte de Calidad: Hooks de Captura (afterChange) (Hito 2.2.1)

## 1. Reporte de Errores Solucionados
Durante la validación de este hito, se abordaron los siguientes puntos:
- **Captura de Cambios:** Inicialmente el hook registraba únicamente que un cambio ocurrió. Se refactorizó para implementar una lógica de comparación (diff) que compara el estado actual (`doc`) con el previo (`previousDoc`), permitiendo auditorías precisas.
- **Relaciones Pobladas:** Se resolvió la ambigüedad en el manejo del campo `guest`, asegurando que, independientemente de si Payload devuelve el objeto o el ID, la captura de auditoría sea consistente.
- **Rendimiento:** Se evitó la sobrecarga de consultas adicionales mediante la utilización de la instancia del `payload` proveída en el objeto `req`.

## 2. Implicaciones de la Implementación
La implementación de estos hooks tiene un impacto directo en la arquitectura de datos:
- **Evolución de Auditoría:** Ahora el sistema dispone de un log detallado de cada mutación realizada en las tareas.
- **Seguridad y Trazabilidad:** Cada log está vinculado a un `GuestSession`, permitiendo asociar cualquier actividad sospechosa o accidental a una sesión específica.
- **Preparación para Logs Persistidos:** La arquitectura está lista para que los logs sean utilizados por la interfaz de usuario para mostrar historiales de cambios o para revertir estados.

## 3. Importancia del Hito
Este hito es crítico para la robustez empresarial de la aplicación:
- **Cumplimiento:** La trazabilidad de los datos (`CREATE`, `UPDATE`) es necesaria para sistemas donde la consistencia de los datos del usuario es la prioridad.
- **Resiliencia ante Errores:** En caso de discrepancias en los datos, los logs sirven como una herramienta de "caja negra" para reconstruir el estado de una tarea.
- **Calidad de Servicio:** Garantiza que cada acción del usuario sea tratada como un evento formal, aumentando la fiabilidad general de la plataforma.

**Hito Validado y Cerrado con 100% de éxito en Pruebas de Integración.**
