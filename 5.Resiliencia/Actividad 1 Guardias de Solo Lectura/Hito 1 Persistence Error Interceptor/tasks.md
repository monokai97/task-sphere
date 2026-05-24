# Tasks: Persistence Error Interceptor (Hito 5.1.1)

1. [ ] Definir los códigos de error críticos en `src/lib/constants.ts`.
2. [ ] Crear `src/lib/persistence-interceptor.ts` que implemente la lógica de detección de errores de Drizzle.
3. [ ] Integrar el interceptor en las llamadas de Payload donde se realicen mutaciones.
4. [ ] Implementar el `EventBus` global para comunicar el fallo de persistencia.
5. [ ] Configurar el sistema para que, ante un fallo detectado, establezca internamente un flag de `isReadOnly`.
6. [ ] Validar que el interceptor no interfiera con las consultas de solo lectura (GET).
7. [ ] Añadir logs detallados para que los administradores identifiquen el origen exacto del fallo.
