# Checklist de Tareas: Hito 1 - Export API Route

## 1. Preparación del Entorno
- [ ] Verificar la existencia de `src/lib/session.ts` y que exporte la configuración de `iron-session`.
- [ ] Identificar el nombre de la cookie de sesión en las variables de entorno o configuración.

## 2. Creación del Route Handler
- [ ] Crear el directorio `src/app/api/export/` si no existe.
- [ ] Crear el archivo `src/app/api/export/route.ts`.
- [ ] Importar `NextResponse` de `next/server`.
- [ ] Importar `cookies` de `next/headers`.
- [ ] Importar `getIronSession` y la configuración de sesión de `src/lib/session.ts`.

## 3. Implementación de la Lógica GET
- [ ] Definir la función asíncrona `export async function GET()`.
- [ ] Implementar bloque `try/catch` para manejo de errores globales.
- [ ] Obtener el objeto de sesión mediante `getIronSession(cookies(), sessionOptions)`.
- [ ] Validar la presencia de `guestId` en la sesión.
- [ ] **Caso No Autorizado:** Retornar `NextResponse.json({ error: "..." }, { status: 401 })` si no hay sesión.
- [ ] **Caso Exitoso (Placeholder):** Retornar `NextResponse.json({ guestId, exportDate, status: "ready", data: { tasks: [], logs: [] } })`.

## 4. Seguridad y Refinamiento
- [ ] Configurar el header `Cache-Control: no-store` en la respuesta exitosa.
- [ ] Asegurarse de que no se capturen otros métodos HTTP (Next.js lo hace por defecto, pero verificar que no haya exportaciones de POST/PATCH).
- [ ] Añadir logs básicos de servidor (opcional, según convención del proyecto) para auditoría de intentos de exportación.

## 5. Validación Inicial
- [ ] Realizar una petición manual mediante `curl` o un cliente API (Postman/Thunder Client) sin cookie para verificar el 401.
- [ ] Realizar una petición con una cookie de sesión válida (capturada del navegador) para verificar el 200.
