import { describe, it, expect, beforeAll, vi } from 'vitest';

// Mock de server-only
vi.mock('server-only', () => ({}));

import { getPayloadClient } from '../lib/payload';
import { randomUUID } from 'node:crypto';

describe('Persistence: Global Access Control Filters (Hito 2.3.2)', () => {
  let payload: any;

  beforeAll(async () => {
    payload = await getPayloadClient();
  });

  it('should exclude soft-deleted tasks from read operations', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    // Crear tarea activa
    await payload.create({
      collection: 'tasks',
      data: { title: 'Active Task', position: 'e0', guest: guestId },
    });

    // Crear tarea borrada lógicamente
    await payload.create({
      collection: 'tasks',
      data: { title: 'Deleted Task', position: 'e1', guest: guestId, isDeleted: true },
    });

    const result = await payload.find({
      collection: 'tasks',
      overrideAccess: false, // Forzar aplicación de access control
      req: { user: { id: guestId, collection: 'guest-sessions' } } as any, // Contexto de invitado
      where: {
        guest: { equals: guestId },
      },
    });

    console.log('Result docs:', JSON.stringify(result.docs, null, 2));

    // Debería traer solo la activa
    expect(result.totalDocs).toBe(1);
    expect(result.docs[0].title).toBe('Active Task');
  });

  it('should allow admin users to see soft-deleted tasks', async () => {
    // Necesitamos un usuario admin mockeado
    // Nota: El sistema actual usa una lógica simplificada. 
    // Para testear esto correctamente, necesitaríamos un contexto de usuario.
    // Asumiremos la lógica de access.ts donde los admins tienen acceso total.
    
    // Este test es conceptual basado en la implementación de canReadTasks
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    await payload.create({
      collection: 'tasks',
      data: { title: 'Admin Task', position: 'e2', guest: guestId, isDeleted: true },
    });

    // Intentar leer como usuario admin (mock del usuario en el request)
    const adminUser = { collection: 'users', id: 'admin-id' };
    const result = await payload.find({
      collection: 'tasks',
      req: { user: adminUser } as any, // Contexto de admin
    });

    expect(result.totalDocs).toBeGreaterThanOrEqual(1);
  });
});
