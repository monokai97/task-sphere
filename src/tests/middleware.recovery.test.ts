import { describe, it, expect, vi } from 'vitest';

// Mock de server-only
vi.mock('server-only', () => ({}));

import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { unsealData } from 'iron-session';
import { getPayloadClient } from '../lib/payload';

// Mocks al top level
vi.mock('iron-session', () => ({
  unsealData: vi.fn(),
}));

vi.mock('../lib/payload', () => ({
  getPayloadClient: vi.fn(),
}));

describe('Middleware Recovery Logic (Hito 1.3.3)', () => {
  it('should log a warning if the session cookie is malformed', async () => {
    // Simulamos un guestId que NO es un UUID válido (falla la validación Zod)
    (unsealData as any).mockResolvedValue({ guestId: 'invalid-id' });
    
    const req = new NextRequest('http://localhost:3000/dashboard', {
      headers: { cookie: 'vento-guest-session=malformed-data' },
    });
    
    const consoleSpy = vi.spyOn(console, 'warn');
    await middleware(req);
    
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Sesión inválida, regenerando...'));
    consoleSpy.mockRestore();
  });

  it('should survive a total DB failure gracefully', async () => {
    // Simulamos una sesión válida, pero Payload falla al hacer upsert
    (unsealData as any).mockResolvedValue({ guestId: '550e8400-e29b-41d4-a716-446655440000' });
    
    // Mock getPayloadClient para lanzar error
    (getPayloadClient as any).mockRejectedValue(new Error('Fatal DB Error'));

    const req = new NextRequest('http://localhost:3000/dashboard', {
      headers: { cookie: 'vento-guest-session=valid-uuid' },
    });
    
    const response = await middleware(req);
    
    // El middleware debe retornar NextResponse.next() exitosamente
    expect(response).toBeDefined();
  });
});
