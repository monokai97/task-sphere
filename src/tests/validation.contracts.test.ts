import { describe, it, expect } from 'vitest';
import { createTaskSchema, updateTaskSchema, toggleTaskSchema } from '../lib/validation/tasks';
import { sessionSchema } from '../lib/validation/sessions';
import { randomUUID } from 'node:crypto';

describe('Data Contracts: Zod Validation (Hito 2.1.3)', () => {
  
  describe('Tasks Validation Schemas', () => {
    const validGuestId = randomUUID();

    it('should accept a valid task creation payload', () => {
      const payload = {
        title: 'Valid Task Name',
        description: 'A brief description',
        position: 'a0',
        guest: validGuestId,
      };

      const result = createTaskSchema.safeParse(payload);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.title).toBe('Valid Task Name');
      }
    });

    it('should reject a title shorter than 3 characters', () => {
      const payload = {
        title: 'No',
        position: 'a1',
        guest: validGuestId,
      };

      const result = createTaskSchema.safeParse(payload);
      expect(result.success).toBe(false);
      if (!result.success) {
        const error = result.error.format();
        expect(error.title?._errors).toContain('El título debe tener al menos 3 caracteres');
      }
    });

    it('should trim whitespace from title and position', () => {
      const payload = {
        title: '   Clean Task   ',
        position: '  b0  ',
        guest: validGuestId,
      };

      const result = createTaskSchema.safeParse(payload);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.title).toBe('Clean Task');
        expect(result.data.position).toBe('b0');
      }
    });

    it('should reject empty strings for required fields', () => {
      const payload = {
        title: '      ', // Empty after trim
        position: '',
        guest: validGuestId,
      };

      const result = createTaskSchema.safeParse(payload);
      expect(result.success).toBe(false);
    });

    it('should validate partial updates correctly', () => {
      const payload = {
        completed: true,
      };

      const result = updateTaskSchema.safeParse(payload);
      expect(result.success).toBe(true);
    });

    it('should reject invalid UUIDs for the guest relationship', () => {
      const payload = {
        title: 'Task with invalid guest',
        position: 'c0',
        guest: 'not-a-uuid',
      };

      const result = createTaskSchema.safeParse(payload);
      expect(result.success).toBe(false);
    });
  });

  describe('Sessions Validation Schemas', () => {
    it('should accept a valid UUID for guest session', () => {
      const validId = randomUUID();
      const result = sessionSchema.safeParse({ guestId: validId });
      expect(result.success).toBe(true);
    });

    it('should reject non-UUID strings for guestId', () => {
      const result = sessionSchema.safeParse({ guestId: 'user_123' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.format().guestId?._errors).toContain('El guestId debe ser un UUID válido');
      }
    });
  });

  describe('Sanitization & Integrity', () => {
    it('should strip unknown fields from the payload', () => {
      const payload = {
        guestId: randomUUID(),
        maliciousField: 'exploit',
      };

      const result = sessionSchema.safeParse(payload);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).not.toHaveProperty('maliciousField');
      }
    });
  });
});
