# Design: Conectividad y Panel Admin (Hito 1.1.3)

## Decisiones de Arquitectura Específicas
1. **App Router Integration:** Las rutas de Payload se montarán bajo una carpeta de grupo en `src/app/(payload)`.
2. **Local API Proxy:** No se expondrá el Local API directamente a los Client Components; se utilizará como puente exclusivo para Server Components y API Routes.
3. **Admin User Collection:** Configurar la colección `Users` por defecto para permitir el acceso al panel admin.

## Diagrama de Flujo de Solicitud
```mermaid
graph LR
    User[Usuario] --> AdminRoute[/admin]
    AdminRoute --> PayloadEngine[Payload Next Plugin]
    PayloadEngine --> Drizzle[Drizzle/SQLite]
    
    User --> DashRoute[/dashboard]
    DashRoute --> ServerComp[Next.js Server Component]
    ServerComp --> LocalAPI[Payload Local API]
    LocalAPI --> Drizzle
```

## Estructura de Rutas Sugerida
```text
src/app/
  (payload)/
    admin/
      [[...payload]]/
        page.tsx
    api/
      [[...payload]]/
        route.ts
```
