import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getSession, saveSession } from '../lib/session';
import { getIronSession } from 'iron-session';

// Mock de next/headers
vi.mock('next/headers', () => ({
  cookies: vi.fn(),
}));

// Mock de iron-session
vi.mock('iron-session', () => ({
  getIronSession: vi.fn(),
}));

describe('Session Service (Hito 1.2.1)', () => {
  const mockSession = {
    guestId: 'test-uuid-123',
    createdAt: Date.now(),
    save: vi.fn().mockResolvedValue(undefined),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (getIronSession as any).mockResolvedValue(mockSession);
  });

  it('should retrieve the session correctly', async () => {
    const session = await getSession();
    expect(getIronSession).toHaveBeenCalled();
    expect(session.guestId).toBe('test-uuid-123');
  });

  it('should save session data correctly', async () => {
    const data = { guestId: 'new-uuid', createdAt: 123456789 };
    const session = await saveSession(data);
    
    expect(session.guestId).toBe('new-uuid');
    expect(session.save).toHaveBeenCalled();
  });
});
