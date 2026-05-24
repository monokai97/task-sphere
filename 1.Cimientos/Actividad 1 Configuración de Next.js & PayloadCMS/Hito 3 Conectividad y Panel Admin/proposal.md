# Proposal: Conectividad y Panel Admin (Hito 1.1.3)

## El "Porqué" y el Impacto
Este hito completa la configuración inicial del motor de la aplicación al habilitar la interfaz de administración y asegurar la comunicación entre Next.js y el Local API de PayloadCMS. La importancia de este paso radica en proporcionar una herramienta visual inmediata para la gestión de datos (Panel Admin) y en validar que la infraestructura de persistencia unificada (Drizzle/SQLite) es accesible desde los componentes de servidor de Next.js.

El impacto directo es la capacidad de realizar pruebas de concepto rápidas sobre el modelo de datos sin necesidad de una UI de usuario final desarrollada, y la garantía de que el flujo de datos "unidireccional" definido en la arquitectura es técnicamente viable.

## Justificación de la Solución
Habilitar el panel de administración como una ruta dentro del App Router (`/admin`) permite una integración profunda con el ciclo de vida de la aplicación. Al verificar la conectividad mediante una llamada de prueba al Local API, nos aseguramos de que el patrón Singleton implementado en el hito anterior funciona correctamente bajo las condiciones de ejecución de Next.js (SSR y Client Components).
