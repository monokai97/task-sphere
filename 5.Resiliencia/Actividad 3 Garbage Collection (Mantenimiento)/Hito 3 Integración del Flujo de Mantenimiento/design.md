# Diseño Técnico: Hito 3 - Integración del Flujo de Mantenimiento

## 1. Flujo de Integración

```mermaid
graph TD
    Trigger[Scheduler / Admin] -->|POST /api/maintenance/gc| Route[route.ts]
    Route -->|Validar Token| Auth{Auth}
    Auth -->|Fail| Forbidden[403]
    Auth -->|OK| Service[Maintenance Service]
    Service -->|getExpiredSessions| Identify[Identify]
    Identify -->|deleteExpiredSessions| Delete[Delete]
    Delete -->|Return Report| Service
    Service -->|Consolidate| Route
    Route -->|JSON Report| Trigger
```

## 2. Estructura de Reporte

```typescript
interface MaintenanceReport {
  status: 'success' | 'error';
  totalIdentified: number;
  deletedCount: number;
  reportDetails: DeletionReport;
  timestamp: string;
}
```
