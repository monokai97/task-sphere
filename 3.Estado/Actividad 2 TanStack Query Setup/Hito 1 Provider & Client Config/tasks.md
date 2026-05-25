# Tasks: Provider & Client Config (Hito 3.2.1)

1. [x] Instalar dependencias: `npm install @tanstack/react-query @tanstack/react-query-devtools`.
2. [x] Crear el archivo `src/lib/query-client.ts` para centralizar la configuración de la instancia `QueryClient`.
3. [x] Definir los `defaultOptions` en el cliente, incluyendo la lógica de reintentos específica para errores de SQLite (`SQLITE_BUSY`).
4. [x] Crear `src/app/providers.tsx` (Client Component) que importe el `QueryClientProvider` y las `ReactQueryDevtools`.
5. [x] Modificar `src/app/layout.tsx` para envolver el `{children}` en el componente `Providers`.
6. [x] Configurar un `Error Boundary` básico integrado con los estados de error de TanStack Query.
7. [x] Validar que no hay advertencias de "Multiple versions of React" o fallos de hidratación en la consola.
