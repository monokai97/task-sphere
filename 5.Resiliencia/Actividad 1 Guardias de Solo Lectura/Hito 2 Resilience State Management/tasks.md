# Tasks: Resilience State Management (Hito 5.1.2)

1. [ ] Crear `src/contexts/ResilienceContext.tsx` con el Provider y el hook `useResilience`.
2. [ ] Implementar la lógica dentro del Provider para suscribirse al `EventBus` del Hito 1.
3. [ ] Añadir `ResilienceProvider` al árbol de proveedores en `src/app/providers.tsx`.
4. [ ] Crear un componente de test rápido que imprima el estado de `isReadOnly` en pantalla.
5. [ ] Validar que no hay errores de SSR al inicializar el contexto.
