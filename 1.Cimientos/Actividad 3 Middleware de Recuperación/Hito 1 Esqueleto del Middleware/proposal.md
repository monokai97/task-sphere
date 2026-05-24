# Proposal: Esqueleto del Middleware (Hito 1.3.1)

## El "Porqué" y el Impacto
El middleware en Next.js es la primera línea de defensa y el punto de orquestación central para la identidad en una arquitectura "Guest-First". Este hito es fundamental porque establece el mecanismo de interceptación global que asegura que *cada* solicitud que llega a las rutas de negocio sea analizada para identificar al usuario.

El impacto de tener un esqueleto de middleware sólido es la garantía de que ninguna parte de la aplicación opere en un vacío de identidad. Al detectar la cookie de **Iron-Session** antes de que la página o el API route se rendericen, permitimos que el sistema tome decisiones proactivas de recuperación o generación de sesión, cumpliendo con el objetivo de "fricción cero" y asegurando que el `guestId` esté siempre disponible para el Local API de PayloadCMS.

## Justificación de la Solución
Se ha elegido implementar el middleware en la raíz de `/src` siguiendo las convenciones de Next.js 14. Esta ubicación permite una configuración de `matcher` flexible, optimizando el rendimiento al evitar que el middleware se ejecute en archivos estáticos o activos públicos, mientras mantiene un control total sobre las rutas dinámicas del dashboard y la API.
