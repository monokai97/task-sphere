# Tests: Estrategia Guest de Passport (Hito 1.2.2)

## Estrategia de Pruebas
Se validará la lógica de generación y persistencia efímera del ID.

### Pruebas Unitarias (Strategy Logic)
- [ ] **UUID Uniqueness:** Ejecutar la estrategia 100 veces consecutivas y verificar que no hay duplicados en los IDs generados.
- [ ] **ID Persistence:** Simular una llamada con un ID pre-existente y verificar que la estrategia devuelve exactamente ese ID sin alterarlo.

### Pruebas de Integración (Next.js Request)
- [ ] **req.user Mapping:** Crear un handler de prueba que ejecute el middleware de passport y verificar que el objeto `user` se inyecta correctamente en el objeto de petición.
- [ ] **Crypto Availability:** Asegurar que `randomUUID` está disponible en el entorno de ejecución (Node.js versions compat check).
