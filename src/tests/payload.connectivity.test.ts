import { describe, it, expect, beforeAll } from 'vitest';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '../payload.config';

describe('Payload Connectivity Test (Hito 3)', () => {
  let payload: any;

  beforeAll(async () => {
    payload = await getPayloadHMR({ config });
  });

  it('should initialize Payload correctly', () => {
    expect(payload).toBeDefined();
  });

  it('should have collections defined in the configuration', () => {
    expect(payload.collections).toBeDefined();
    // Verificamos que 'users' está configurada, basándonos en la tarea 4
    expect(payload.collections.users).toBeDefined();
  });

  it('should be able to perform a CRUD operation (Smoke Test)', async () => {
    // Intentamos listar los usuarios (debe estar vacía o con el usuario inicial)
    const users = await payload.find({
      collection: 'users',
      depth: 0,
    });
    expect(users).toBeDefined();
    expect(Array.isArray(users.docs)).toBe(true);
  });
});
