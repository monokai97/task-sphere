# Propuesta Técnica: Hito 3 - Integración del Flujo de Mantenimiento

## 1. Contexto y Problema
La identificación (Hito 1) y eliminación (Hito 2) de sesiones son pasos lógicos separados. Actualmente, no existe una forma de ejecutar este proceso de forma automatizada o sencilla sin ejecutar comandos manuales, lo que representa un riesgo operativo y una falta de mantenimiento preventivo.

## 2. Solución Proyectada
Desarrollar un endpoint protegido de mantenimiento (`/api/maintenance/gc`) que orqueste ambos pasos (identificación y borrado) y retorne un reporte consolidado.

### Justificación Técnica:
- **Automatización:** Al exponer este proceso vía API, podemos utilizar herramientas externas (como Vercel Cron, `node-cron` en servidor, o scripts de despliegue) para programar la limpieza.
- **Seguridad:** El endpoint debe estar protegido por un token de sistema o autenticación administrativa para evitar el borrado malintencionado.
- **Reportabilidad:** Proporcionar un JSON claro permite integrar el proceso de mantenimiento con herramientas de monitoreo o logging centralizado.

## 3. Impacto en el Sistema
La integración del mantenimiento garantiza que la salud del archivo SQLite se mantenga de forma automática. Esto reduce significativamente la intervención manual requerida para la gestión del ciclo de vida de los datos del invitado.
