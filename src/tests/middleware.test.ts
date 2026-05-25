import { describe, it, expect, vi } from 'vitest';
import { middleware } from '../middleware';
import { NextRequest } from 'next/server';

describe('Middleware Skeleton (Hito 1.3.1)', () => {
  it('should process request without blocking (always returns NextResponse.next())', async () => {
    const req = new NextRequest('http://localhost:3000/dashboard/home');
    const response = await middleware(req);
    
    // El middleware debe retornar un objeto que indica continuar
    expect(response).toBeDefined();
  });

  it('should detect the guest session cookie when present', async () => {
    const req = new NextRequest('http://localhost:3000/dashboard', {
      headers: {
        cookie: 'vento-guest-session=test-uuid-123',
      },
    });
    
    const consoleSpy = vi.spyOn(console, 'log');
    await middleware(req);
    
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Sesión detectada: test-uuid-123'));
    consoleSpy.mockRestore();
  });

  it('should detect absence of guest session cookie', async () => {
    const req = new NextRequest('http://localhost:3000/dashboard');
    
    const consoleSpy = vi.spyOn(console, 'log');
    await middleware(req);
    
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('No se detectó sesión de invitado.'));
    consoleSpy.mockRestore();
  });
});
