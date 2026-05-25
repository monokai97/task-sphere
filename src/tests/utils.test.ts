import { describe, it, expect } from 'vitest';
import { cn } from '../lib/utils';

describe('utils/cn', () => {
  it('combina clases correctamente', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('resuelve colisiones de clases de Tailwind', () => {
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  });
});
