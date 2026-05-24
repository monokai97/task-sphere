# Specs: Conectividad y Panel Admin (Hito 1.1.3)

## Requisitos Técnicos
- **Rutas Admin:** Disponibilidad de `/admin` integrada en el App Router.
- **Local API Access:** Capacidad de realizar consultas de lectura/escritura desde Server Components.
- **Configuración de Next.js:** Inclusión de la configuración necesaria para que Payload maneje sus propias rutas y activos.

## Escenarios de Aceptación

### Escenario 1: Acceso al Panel de Administración
**Given** el servidor de desarrollo en ejecución
**When** el administrador navega a `http://localhost:3000/admin`
**Then** debe visualizarse la interfaz de login o el dashboard inicial de PayloadCMS sin errores de 404 o 500.

### Escenario 2: Verificación de Local API en Server Components
**Given** una página de prueba en Next.js
**When** se llame a `payload.find()` dentro de la función del componente
**Then** la consola del servidor no debe mostrar errores de "Database connection lost" y debe devolver un resultado (aunque sea vacío).

### Escenario 3: Persistencia Inicial
**Given** el panel de administración de Payload
**When** se cree un registro manual (ej. un usuario inicial)
**Then** el registro debe persistir en el archivo `payload.db` y ser recuperable mediante el Local API.
