# Design: Validación del Flujo de Recuperación (Hito 1.3.3)

## Decisiones de Arquitectura Específicas
1. **Zod Validation in Middleware:** Utilizar un esquema de Zod ligero para validar el payload de la sesión descifrada.
2. **Safe-Redirect Pattern:** Si se regenera una sesión debido a una cookie inválida, realizar una redirección limpia para limpiar el estado de la petición.
3. **Error Logging:** Implementar un logger interno (vía consola o archivo local) que registre fallos de persistencia en el middleware para diagnóstico futuro.

## Diagrama de Flujo de Validación (Error Path)
```mermaid
graph TD
    A[Middleware Start] --> B{Cookie Válida?}
    B -- No --> C[Generar Nueva Sesión & Redirect]
    B -- Sí --> D[Descifrar Payload]
    D --> E{guestId es UUID?}
    E -- No --> C
    E -- Sí --> F[Try Upsert PayloadCMS]
    F -->|Éxito| G[NextResponse.next()]
    F -->|Error DB| H[Log Error & Fail-Silent]
    H --> G
```

## Esquema de Validación (Zod)
```typescript
const sessionSchema = z.object({
  guestId: z.string().uuid(),
  isLoggedIn: z.boolean(),
});
```
