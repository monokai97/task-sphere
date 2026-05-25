import { describe, it, expect, beforeAll, vi } from 'vitest';

// Mock de server-only
vi.mock('server-only', () => ({}));

import { getPayloadClient } from '../lib/payload';
import { randomUUID } from 'node:crypto';

describe('LexoRank Persistence: Validation Hooks (Hito 3.1.3)', () => {
  let payload: any;

  beforeAll(async () => {
    payload = await getPayloadClient();
  });

  it('should accept a valid LexoRank position', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    const task = await payload.create({
      collection: 'tasks',
      data: {
        title: 'Valid Position Task',
        position: '0|a0',
        guest: guestId,
      },
    });

    expect(task.position).toBe('0|a0');
  });

  it('should reject an invalid LexoRank position', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    await expect(
      payload.create({
        collection: 'tasks',
        data: {
          title: 'Invalid Position Task',
          position: 'invalid-rank-format',
          guest: guestId,
        },
      })
    ).rejects.toThrow();
  });

  it('should record an update log when position changes successfully', async () => {
    const guestId = randomUUID();
    await payload.create({
      collection: 'guest-sessions',
      data: { id: guestId, lastActive: new Date().toISOString() },
    });

    const task = await payload.create({
      collection: 'tasks',
      data: { title: 'Moving Task', position: '0|a0', guest: guestId },
    });

    await payload.update({
      collection: 'tasks',
      id: task.id,
      data: { position: '0|a1' },
    });

    const logs = await payload.find({
      collection: 'task-logs',
      where: {
        task: { equals: task.id },
        operation: { equals: 'UPDATE' },
      },
    });

    expect(logs.totalDocs).toBe(1);
    expect(logs.docs[0].diff.position).toBe('0|a1');
  });
});
