# Diseño Técnico: Hito 2 - Lógica de Agregación de Datos

## 1. Flujo de Agregación

```mermaid
graph TD
    Client[Browser] -->|GET /api/export| Route[route.ts]
    Route -->|getIronSession| Session{Session}
    Session -->|guestId| Route
    Route -->|Local API| Service[Aggregation Service]
    Service -->|payload.find| TasksCol[(Tasks Collection)]
    Service -->|payload.find| LogsCol[(TaskLogs Collection)]
    TasksCol --> Service
    LogsCol --> Service
    Service -->|JSON Structure| Route
    Route -->|200 OK| Client
```

## 2. Decisión Arquitectónica: Payload Local API
Se utilizará la API interna de Payload, ya que es el único mecanismo garantizado para aplicar los filtros de seguridad y hooks (`beforeOperation`) definidos en el `design.md` global. Esto evita consultas directas a Prisma y posibles omisiones en la seguridad de los datos.

## 3. Contrato de Datos (Respuesta Final)

```typescript
interface ExportPayload {
  guestId: string;
  exportDate: string;
  tasks: Array<{
    id: string;
    title: string;
    completed: boolean;
    position: string;
    createdAt: string;
  }>;
  logs: Array<{
    id: string;
    taskId: string;
    operation: string;
    diff: any;
    timestamp: string;
  }>;
}
```
