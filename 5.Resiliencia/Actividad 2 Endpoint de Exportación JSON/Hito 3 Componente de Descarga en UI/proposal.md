# Propuesta Técnica: Hito 3 - Componente de Descarga en UI

## 1. Contexto y Problema
El sistema ya cuenta con el endpoint de exportación (Hito 1) y la lógica de agregación (Hito 2). Sin embargo, el usuario no tiene una forma intuitiva de invocar este proceso. Sin una interfaz de usuario clara, la funcionalidad de portabilidad es inaccesible.

## 2. Solución Propuesta
Desarrollar el componente `ExportButton` que proporcione una experiencia de descarga fluida y segura. Este componente no solo activará la API, sino que gestionará estados visuales clave para mejorar la UX.

### Justificación Técnica:
- **UX Alineada:** El botón debe seguir las guías de estilo Vento (limpio, minimalista, con feedback inmediato).
- **Feedback:** Integración con el sistema de Toasts (Sonner) para informar sobre el inicio, éxito o error de la exportación.
- **Seguridad:** Uso de la API de `Blob` en el cliente para transformar la respuesta JSON en un archivo descargable, sin dependencias externas pesadas.

## 3. Impacto en el Sistema
Este hito completa la actividad de exportación de datos. Proporciona el punto final de interacción para el usuario, permitiendo que la funcionalidad desarrollada en los hitos 1 y 2 sea utilizada eficazmente.
