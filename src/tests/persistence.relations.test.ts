import { describe, it, expect, beforeAll, vi } from 'vitest';

// Mock de server-only
vi.mock('server-only', () => ({}));

import { getPayloadClient } from '../lib/payload';
import { randomUUID } from 'node:crypto';

describe('Persistence Layer: Relations and Indices (Hito 2.1.2)', () => {
  let payload: any;

  beforeAll(async () => {
    payload = await getPayloadClient();
  });

  describe('Data Integrity & Constraints', () => {
    it('should reject creating a task without a guest session (required field)', async () => {
      await expect(
        payload.create({
          collection: 'tasks',
          data: {
            title: 'Guestless Task',
            position: 'a0',
          },
        })
      ).rejects.toThrow();
    });

    it('should populate guest session data when fetching tasks', async () => {
      const guestId = randomUUID();
      await payload.create({
        collection: 'guest-sessions',
        data: { id: guestId, lastActive: new Date().toISOString() },
      });

      await payload.create({
        collection: 'tasks',
        data: {
          title: 'Populate Task',
          position: 'a1',
          guest: guestId,
        },
      });

      const result = await payload.find({
        collection: 'tasks',
        where: {
          guest: { equals: guestId },
        },
        depth: 1,
      });

      expect(result.docs[0].guest).toBeDefined();
      expect(result.docs[0].guest.id).toBe(guestId);
      expect(result.docs[0].guest.lastActive).toBeDefined();
    });
  });

  describe('Cascade Delete Logic', () => {
    it('should delete all associated tasks when a guest session is removed', async () => {
      const guestId = randomUUID();
      await payload.create({
        collection: 'guest-sessions',
        data: { id: guestId, lastActive: new Date().toISOString() },
      });

      // Crear múltiples tareas
      await payload.create({
        collection: 'tasks',
        data: { title: 'Task 1', position: 'a0', guest: guestId },
      });
      await payload.create({
        collection: 'tasks',
        data: { title: 'Task 2', position: 'a1', guest: guestId },
      });

      // Borrar la sesión
      await payload.delete({
        collection: 'guest-sessions',
        id: guestId,
      });

      // Verificar que las tareas ya no existen
      const tasks = await payload.find({
        collection: 'tasks',
        where: {
          guest: { equals: guestId },
        },
      });

      expect(tasks.totalDocs).toBe(0);
    });

    it('should delete associated logs when a task is hard-deleted', async () => {
      const guestId = randomUUID();
      await payload.create({
        collection: 'guest-sessions',
        data: { id: guestId, lastActive: new Date().toISOString() },
      });

      const task = await payload.create({
        collection: 'tasks',
        data: { title: 'Task for Logs', position: 'b0', guest: guestId },
      });

      await payload.create({
        collection: 'task-logs',
        data: {
          task: task.id,
          operation: 'CREATE',
          timestamp: new Date().toISOString(),
        },
      });

      // Borrar la tarea
      await payload.delete({
        collection: 'tasks',
        id: task.id,
      });

      // Verificar que el log ya no existe
      const logs = await payload.find({
        collection: 'task-logs',
        where: {
          task: { equals: task.id },
        },
      });

      expect(logs.totalDocs).toBe(0);
    });
  });

  describe('Sorting & Indexing Performance', () => {
    it('should return tasks in the correct LexoRank order', async () => {
      const guestId = randomUUID();
      await payload.create({
        collection: 'guest-sessions',
        data: { id: guestId, lastActive: new Date().toISOString() },
      });

      // Insertar en desorden cronológico pero con posiciones específicas
      await payload.create({
        collection: 'tasks',
        data: { title: 'Second', position: 'b', guest: guestId },
      });
      await payload.create({
        collection: 'tasks',
        data: { title: 'Third', position: 'c', guest: guestId },
      });
      await payload.create({
        collection: 'tasks',
        data: { title: 'First', position: 'a', guest: guestId },
      });

      const result = await payload.find({
        collection: 'tasks',
        where: { guest: { equals: guestId } },
        sort: 'position',
      });

      expect(result.docs[0].title).toBe('First');
      expect(result.docs[1].title).toBe('Second');
      expect(result.docs[2].title).toBe('Third');
    });
  });
});
