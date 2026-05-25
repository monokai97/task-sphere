import { describe, it, expect, beforeAll, vi } from 'vitest';

// Mock de server-only para evitar errores en tests
vi.mock('server-only', () => ({}));

import { getPayloadClient } from '../lib/payload';
import { randomUUID } from 'node:crypto';

describe('Persistence Layer: Base Collections (Hito 2.1.1)', () => {
  let payload: any;

  beforeAll(async () => {
    payload = await getPayloadClient();
  });

  describe('GuestSessions Collection', () => {
    it('should persist a guest session with a manual UUID', async () => {
      const manualId = randomUUID();
      const session = await payload.create({
        collection: 'guest-sessions',
        data: {
          id: manualId,
          lastActive: new Date().toISOString(),
        },
      });

      expect(session.id).toBe(manualId);
      expect(session.createdAt).toBeDefined();
      expect(session.updatedAt).toBeDefined();
    });
  });

  describe('Tasks Collection', () => {
    it('should create a valid task linked to a guest session', async () => {
      // 1. Asegurar una sesión previa
      const guestId = randomUUID();
      await payload.create({
        collection: 'guest-sessions',
        data: { id: guestId, lastActive: new Date().toISOString() },
      });

      // 2. Crear tarea
      const task = await payload.create({
        collection: 'tasks',
        data: {
          title: 'Test Task',
          position: 'a0',
          guest: guestId,
        },
      });

      expect(task.title).toBe('Test Task');
      expect(task.completed).toBe(false);
      expect(task.isDeleted).toBe(false);
      // Payload devuelve el objeto poblado por defecto en depth 1
      expect(task.guest.id).toBe(guestId);
    });

    it('should fail validation if title is less than 3 characters', async () => {
      const guestId = randomUUID();
      await payload.create({
        collection: 'guest-sessions',
        data: { id: guestId, lastActive: new Date().toISOString() },
      });

      await expect(
        payload.create({
          collection: 'tasks',
          data: {
            title: 'No',
            position: 'a1',
            guest: guestId,
          },
        })
      ).rejects.toThrow();
    });
  });

  describe('TaskLogs Collection', () => {
    it('should record an operation log for a task', async () => {
      const guestId = randomUUID();
      await payload.create({
        collection: 'guest-sessions',
        data: { id: guestId, lastActive: new Date().toISOString() },
      });

      const task = await payload.create({
        collection: 'tasks',
        data: { title: 'Audit Task', position: 'b0', guest: guestId },
      });

      const log = await payload.create({
        collection: 'task-logs',
        data: {
          task: task.id,
          operation: 'CREATE',
          diff: { title: 'Audit Task' },
          timestamp: new Date().toISOString(),
        },
      });

      expect(log.operation).toBe('CREATE');
      // Payload devuelve el objeto poblado por defecto
      expect(log.task.id).toBe(task.id);
      expect(log.diff.title).toBe('Audit Task');
    });
  });
});
