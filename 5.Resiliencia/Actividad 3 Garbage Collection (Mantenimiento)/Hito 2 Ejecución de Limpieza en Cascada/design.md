# Diseño Técnico: Hito 2 - Ejecución de Limpieza en Cascada

## 1. Flujo de Eliminación

```mermaid
graph TD
    Trigger[Proceso Mantenimiento] -->|IDs| Service[Maintenance Service]
    Service -->|Itera y llama| Payload[Payload Local API]
    Payload -->|payload.delete| DB[(SQLite)]
    DB -->|Ejecuta Cascade| DeleteRelated[Elimina Tasks/Logs]
    DeleteRelated -->|Confirmación| Payload
    Payload -->|Retorna Resultado| Service
    Service -->|Reporte final| Trigger
```

## 2. Decisión Arquitectónica
Se confía plenamente en la configuración de `onDelete: Cascade` definida en los esquemas de Payload. No debe haber lógica manual de borrado de tareas o logs; si la sesión desaparece, los hijos deben desaparecer.

## 3. Estructura del Resultado (Interfaz)

```typescript
interface DeletionReport {
  deletedCount: number;
  errors: Array<{ id: string; error: string }>;
  successIds: string[];
}
```
