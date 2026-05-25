import { describe, it, expect, vi } from 'vitest';
import passport from '../lib/passport';
import { GuestUser } from '../lib/passport';

describe('Passport Guest Strategy (Hito 1.2.2)', () => {
  it('should have the "guest" strategy configured', () => {
    // Verificamos que la estrategia existe en la instancia de passport
    expect(passport._strategy('guest')).toBeDefined();
  });

  it('should serialize user correctly', async () => {
    const user: GuestUser = { id: 'test-uuid', isGuest: true };
    const result = await new Promise((resolve) => passport.serializeUser(user, (err, id) => resolve(id)));
    expect(result).toBe('test-uuid');
  });

  it('should deserialize user correctly', async () => {
    const id = 'test-uuid';
    const user = await new Promise((resolve) => passport.deserializeUser(id, (err, user) => resolve(user)));
    expect((user as GuestUser).id).toBe(id);
    expect((user as GuestUser).isGuest).toBe(true);
  });
});
