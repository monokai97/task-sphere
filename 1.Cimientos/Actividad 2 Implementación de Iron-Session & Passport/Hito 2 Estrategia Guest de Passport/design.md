# Design: Estrategia Guest de Passport (Hito 1.2.2)

## Decisiones de Arquitectura Específicas
1. **Custom Strategy:** Se extenderá `passport-strategy` para crear una clase `GuestStrategy`.
2. **Stateless Resolution:** La estrategia no consultará la base de datos directamente (esto lo hará el middleware de recuperación en la Actividad 3), solo resolverá el ID desde la sesión o generará uno nuevo.
3. **Singleton Passport:** Configurar e inicializar Passport en `src/lib/passport.ts`.

## Diagrama de Resolución de Identidad
```mermaid
graph TD
    A[Request] --> B{¿Hay guestId en Sesión?}
    B -- Sí --> C[Retornar user con guestId existente]
    B -- No --> D[Generar crypto.randomUUID()]
    D --> E[Retornar user con nuevo guestId]
    C --> F[Poblar req.user]
    E --> F
```

## Contrato de la Estrategia
```typescript
class GuestStrategy extends Strategy {
  authenticate(req: Request) {
    const session = req.session; // Inyectado por Iron-Session
    const guestId = session.guestId || crypto.randomUUID();
    
    this.success({ guestId });
  }
}
```
