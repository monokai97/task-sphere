import { describe, it, expect, beforeAll, vi } from 'vitest';

// Mock de server-only
vi.mock('server-only', () => ({}));

import { getPayloadClient } from '../lib/payload';
import { softDeleteTask } from '../lib/tasks';
import { randomUUID } from 'node:crypto';

describe('Persistence: Soft Delete Validation (Hito 2.3.1)', () => {
  let payload: any;

  beforeAll(async () => {
    payload = await getPayloadClient();
  });

  it('should block physical deletion of tasks via access control', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    const task = await payload.create({
      collection: 'tasks',
      data: { title: 'No Delete', position: 'd0', guest: guestId },
    });

    // Intentar borrado físico - debería fallar por access control (delete: false)
    await expect(
      payload.delete({
        collection: 'tasks',
        id: task.id,
      })
    ).rejects.toThrow();
  });

  it('should perform a soft delete successfully via service', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    const task = await payload.create({
      collection: 'tasks',
      data: { title: 'Soft Delete Me', position: 'd1', guest: guestId },
    });

    // Acción: Borrado lógico
    await softDeleteTask(task.id);

    // Verificación
    const fetchedTask = await payload.findByID({
      collection: 'tasks',
      id: task.id,
    });

    expect(fetchedTask.id).toBe(task.id);
    expect(fetchedTask.isDeleted).toBe(true);
  });
});
