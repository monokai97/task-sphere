# Tasks: Contratos de Datos y Zod (Hito 2.1.3)

1. [ ] Instalar la librería zod: `npm install zod`.
2. [ ] Crear la estructura de carpetas `src/lib/validation`.
3. [ ] Implementar `src/lib/validation/tasks.ts` definiendo los esquemas para Crear, Editar y Cambiar Estado de tareas.
4. [ ] Implementar `src/lib/validation/sessions.ts` para la validación de perfiles de invitado y recuperación de sesión.
5. [ ] Crear utilidades de sanitización dentro de los esquemas Zod (vía `.trim()` y `.transform()`).
6. [ ] Exportar los tipos inferidos (`TaskInput`, `SessionInput`) para que puedan ser usados por los hooks de TanStack Query y los API Routes.
7. [ ] Validar la coherencia de los esquemas Zod con las restricciones definidas en los archivos de colecciones de Payload (`src/collections/*.ts`).
