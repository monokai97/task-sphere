# Design: Esqueleto del Middleware (Hito 1.3.1)

## Decisiones de Arquitectura Específicas
1. **Edge Runtime:** El middleware se ejecutará en el Edge Runtime de Next.js para minimizar la latencia de interceptación.
2. **Matcher Strategy:** Utilizar una lista blanca (allow-list) de rutas en lugar de una lógica de exclusión compleja para asegurar que las nuevas rutas de negocio estén protegidas por defecto.
3. **Session Secret Injection:** Aunque el middleware no descifrará la sesión en este hito, debe estar preparado para acceder a las variables de entorno de Iron-Session.

## Diagrama de Interceptación
```mermaid
graph TD
    A[Request] --> B{Matcher Evaluation}
    B -- No Match --> C[Direct Pass-through]
    B -- Match --> D[Execute middleware.ts]
    D --> E{Detect Session Cookie}
    E --> F[Log/Trace Detection]
    F --> G[NextResponse.next()]
```

## Configuración del Matcher
```typescript
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/tasks/:path*',
    '/api/export/:path*',
  ],
};
```
