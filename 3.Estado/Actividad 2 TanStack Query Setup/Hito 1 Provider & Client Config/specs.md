# Specs: Provider & Client Config (Hito 3.2.1)

## Requisitos Técnicos
- **Librería:** `@tanstack/react-query` v5.x.
- **Next.js Integration:** Debe ser compatible con Server Components (usando el patrón `QueryClientProvider` en un Client Component wrapper).
- **Configuración Default:**
    - `staleTime`: 1 minuto.
    - `gcTime`: 5 minutos.
    - `retry`: 3 veces (con jitter exponencial).
    - `refetchOnWindowFocus`: true (para sincronización multi-pestaña básica).
- **DevTools:** Habilitar solo en entorno de desarrollo.

## Escenarios de Aceptación

### Escenario 1: Inicialización del Provider
**Given** la estructura del App Router de Next.js
**When** el usuario acceda a la aplicación
**Then** el árbol de componentes debe estar envuelto en el `QueryClientProvider` sin causar errores de hidratación.

### Escenario 2: Persistencia del Caché en Memoria
**Given** una navegación entre rutas internas
**When** el usuario regrese a una página ya visitada
**Then** los datos deben cargarse instantáneamente desde el caché de TanStack Query antes de intentar un refetch.

### Escenario 3: Acceso a DevTools
**Given** el entorno de desarrollo (`NODE_ENV === 'development'`)
**When** la aplicación se renderice en el navegador
**Then** el panel de React Query DevTools debe ser visible y funcional.
