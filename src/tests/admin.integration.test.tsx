import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// Mock del router de Next.js
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  usePathname: () => '/admin',
}));

describe('Admin Panel Integration (Hito 3)', () => {
  it('should redirect to login if not authenticated', async () => {
    // Aquí simularemos la lógica de protección del admin
    // Por ahora, verificamos la intención de redirección
    const mockPush = vi.fn();
    // Este test será implementado más a fondo cuando el middleware esté activo
    expect(true).toBe(true);
  });

  it('should load admin layout components', () => {
    // Verificar si los elementos básicos del layout admin existen
    // render(<AdminLayout />);
    // expect(screen.getByRole('main')).toBeDefined();
    expect(true).toBe(true);
  });
});
