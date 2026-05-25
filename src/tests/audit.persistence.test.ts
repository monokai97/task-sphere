import { describe, it, expect, beforeAll, vi } from 'vitest';

// Mock de server-only
vi.mock('server-only', () => ({}));

import { getPayloadClient } from '../lib/payload';
import { randomUUID } from 'node:crypto';

describe('Audit Trail: TaskLogs Persistence (Hito 2.2.3)', () => {
  let payload: any;

  beforeAll(async () => {
    payload = await getPayloadClient();
  });

  it('should create an audit log sequence for a full lifecycle', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    // 1. Create
    const task = await payload.create({
      collection: 'tasks',
      data: { title: 'Initial', position: 'a0', guest: guestId },
    });

    // 2. Update title
    await payload.update({
      collection: 'tasks',
      id: task.id,
      data: { title: 'Updated' },
    });

    // 3. Toggle completed
    await payload.update({
      collection: 'tasks',
      id: task.id,
      data: { completed: true },
    });

    const logs = await payload.find({
      collection: 'task-logs',
      where: { task: { equals: task.id } },
      sort: 'timestamp',
    });

    expect(logs.totalDocs).toBe(3);
    expect(logs.docs[0].operation).toBe('CREATE');
    expect(logs.docs[1].operation).toBe('UPDATE');
    expect(logs.docs[1].diff).toEqual({ title: 'Updated' });
    expect(logs.docs[2].operation).toBe('UPDATE');
    expect(logs.docs[2].diff).toEqual({ completed: true });
  });

  it('should not create logs if no relevant fields change', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    const task = await payload.create({
      collection: 'tasks',
      data: { title: 'Stable', position: 'b0', guest: guestId },
    });

    // Update with same data
    await payload.update({
      collection: 'tasks',
      id: task.id,
      data: { title: 'Stable' },
    });

    const logs = await payload.find({
      collection: 'task-logs',
      where: { task: { equals: task.id } },
    });

    // Solo debería haber el registro de CREACIÓN inicial
    expect(logs.totalDocs).toBe(1);
  });
});
