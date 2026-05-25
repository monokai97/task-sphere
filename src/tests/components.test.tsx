import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';

describe('UI Components', () => {
  it('Button se renderiza correctamente', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeDefined();
  });

  it('Checkbox se renderiza', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDefined();
  });
});
