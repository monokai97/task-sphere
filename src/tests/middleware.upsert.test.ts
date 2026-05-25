import { describe, it, expect, vi } from 'vitest';

// Mock de server-only
vi.mock('server-only', () => ({}));

import { middleware } from '../middleware';
import { NextRequest } from 'next/server';
import { unsealData } from 'iron-session';
import { getPayloadClient } from '../lib/payload';

// Mocks
vi.mock('iron-session', () => ({
  unsealData: vi.fn(),
}));

vi.mock('../lib/payload', () => ({
  getPayloadClient: vi.fn(),
}));

describe('Middleware Upsert Logic (Hito 1.3.2)', () => {
  it('should call upsert when a valid session cookie is present', async () => {
    const mockUpsert = vi.fn().mockResolvedValue({});
    (unsealData as any).mockResolvedValue({ guestId: 'test-guest-id' });
    (getPayloadClient as any).mockResolvedValue({ upsert: mockUpsert });

    const req = new NextRequest('http://localhost:3000/dashboard', {
      headers: { cookie: 'vento-guest-session=valid-data' },
    });

    await middleware(req);

    expect(mockUpsert).toHaveBeenCalledWith(expect.objectContaining({
      collection: 'guest-sessions',
      id: 'test-guest-id',
    }));
  });

  it('should not block the application if upsert fails (fail-silent)', async () => {
    (unsealData as any).mockResolvedValue({ guestId: 'test-guest-id' });
    (getPayloadClient as any).mockResolvedValue({ 
      upsert: vi.fn().mockRejectedValue(new Error('DB Error')) 
    });

    const req = new NextRequest('http://localhost:3000/dashboard', {
      headers: { cookie: 'vento-guest-session=valid-data' },
    });

    const response = await middleware(req);
    expect(response).toBeDefined();
  });
});
