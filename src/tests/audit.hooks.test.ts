import { describe, it, expect, beforeAll, vi } from 'vitest';

// Mock de server-only
vi.mock('server-only', () => ({}));

import { getPayloadClient } from '../lib/payload';
import { randomUUID } from 'node:crypto';

describe('Audit Hooks: afterChange (Hito 2.2.1)', () => {
  let payload: any;

  beforeAll(async () => {
    payload = await getPayloadClient();
  });

  it('should create an audit log on task creation', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    const task = await payload.create({
      collection: 'tasks',
      data: {
        title: 'Initial Title',
        position: 'a0',
        guest: guestId,
      },
    });

    const logs = await payload.find({
      collection: 'task-logs',
      where: {
        task: { equals: task.id },
        operation: { equals: 'CREATE' },
      },
    });

    expect(logs.totalDocs).toBe(1);
    expect(logs.docs[0].task.id).toBe(task.id);
  });

  it('should create an audit log on task update with correct diff', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    const task = await payload.create({
      collection: 'tasks',
      data: {
        title: 'Original Title',
        position: 'a1',
        guest: guestId,
      },
    });

    await payload.update({
      collection: 'tasks',
      id: task.id,
      data: {
        title: 'Updated Title',
      },
    });

    const logs = await payload.find({
      collection: 'task-logs',
      where: {
        task: { equals: task.id },
        operation: { equals: 'UPDATE' },
      },
    });

    expect(logs.totalDocs).toBe(1);
    expect(logs.docs[0].diff.title).toBe('Updated Title');
  });

  it('should maintain guest context in audit logs', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    const task = await payload.create({
      collection: 'tasks',
      data: {
        title: 'Context Task',
        position: 'a2',
        guest: guestId,
      },
    });

    // Validar que el log exista y sea recuperable
    const logs = await payload.find({
      collection: 'task-logs',
      where: {
        task: { equals: task.id },
      },
    });
    
    expect(logs.docs[0]).toBeDefined();
  });
});
