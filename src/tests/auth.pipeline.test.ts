import { describe, it, expect, vi } from 'vitest';

// Mock de server-only
vi.mock('server-only', () => ({}));

import { GET } from '../app/api/auth/guest/route';
import { NextRequest } from 'next/server';

// Mock de next/headers
vi.mock('next/headers', () => ({
  cookies: vi.fn(() => ({
    get: vi.fn(),
    set: vi.fn(),
    delete: vi.fn(),
  })),
}));

// Mock de saveSession
vi.mock('@/lib/session', async () => {
  const original = await vi.importActual('@/lib/session');
  return {
    ...original,
    saveSession: vi.fn().mockResolvedValue({ guestId: 'mock-id' }),
  };
});

describe('Auth Pipeline Integration (Hito 1.2.3)', () => {
  it('should return 200 and guestId on successful guest authentication', async () => {
    const req = new NextRequest('http://localhost:3000/api/auth/guest');
    
    const response = await GET(req);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.guestId).toBeDefined();
  });

  it('should not leak server-side session config in the JSON response', async () => {
    const req = new NextRequest('http://localhost:3000/api/auth/guest');
    
    const response = await GET(req);
    const data = await response.json();

    expect(data.password).toBeUndefined();
    expect(data.sessionOptions).toBeUndefined();
  });
});
