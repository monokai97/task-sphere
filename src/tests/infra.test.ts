import { describe, it, expect, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Configuración de Estilos (Hito 1)', () => {
  it('debe contener las directivas de Tailwind en globals.css', () => {
    const filePath = path.resolve(process.cwd(), 'src/app/globals.css');
    const content = fs.readFileSync(filePath, 'utf-8');
    
    expect(content).toContain('@tailwind base;');
    expect(content).toContain('@tailwind components;');
    expect(content).toContain('@tailwind utilities;');
  });

  it('debe tener definido el modo oscuro (dark) en las variables CSS', () => {
    const filePath = path.resolve(process.cwd(), 'src/app/globals.css');
    const content = fs.readFileSync(filePath, 'utf-8');
    
    expect(content).toContain('.dark {');
    expect(content).toContain('--background:');
  });
});
