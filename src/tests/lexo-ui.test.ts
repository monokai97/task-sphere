import { describe, it, expect } from 'vitest';
import { LexoRank } from 'lexorank';
import { calculateNewPosition } from '../lib/lexo-ui';

describe('LexoRank UI Utility: Range Logic (Hito 3.1.2)', () => {
  
  it('should generate an initial rank if moving to an empty list', () => {
    const rank = calculateNewPosition({ prevRank: null, nextRank: null });
    expect(rank).toBeDefined();
    expect(LexoRank.parse(rank).toString()).toBe(rank);
  });

  it('should generate a rank before the first item', () => {
    const nextRank = '0|b0';
    const rank = calculateNewPosition({ prevRank: null, nextRank });
    
    const rankObj = LexoRank.parse(rank);
    const nextObj = LexoRank.parse(nextRank);
    
    expect(rankObj.compareTo(nextObj) < 0).toBe(true);
  });

  it('should generate a rank after the last item', () => {
    const prevRank = '0|y0';
    const rank = calculateNewPosition({ prevRank, nextRank: null });
    
    const rankObj = LexoRank.parse(rank);
    const prevObj = LexoRank.parse(prevRank);
    
    expect(rankObj.compareTo(prevObj) > 0).toBe(true);
  });

  it('should generate a rank between two existing items', () => {
    const prevRank = '0|a0';
    const nextRank = '0|a2';
    const rank = calculateNewPosition({ prevRank, nextRank });
    
    const rankObj = LexoRank.parse(rank);
    const prevObj = LexoRank.parse(prevRank);
    const nextObj = LexoRank.parse(nextRank);
    
    expect(rankObj.compareTo(prevObj) > 0).toBe(true);
    expect(rankObj.compareTo(nextObj) < 0).toBe(true);
  });

  it('should verify correct order in a sequence of operations', () => {
    const ranks = [];
    
    // Simular inserciones sucesivas
    let current = '0|m0'; // middle
    ranks.push(current);
    
    // Insertar antes
    current = calculateNewPosition({ prevRank: null, nextRank: current });
    ranks.unshift(current);
    
    // Insertar después
    current = calculateNewPosition({ prevRank: ranks[ranks.length-1], nextRank: null });
    ranks.push(current);
    
    // Verificar orden
    for (let i = 0; i < ranks.length - 1; i++) {
      expect(LexoRank.parse(ranks[i]).compareTo(LexoRank.parse(ranks[i+1])) < 0).toBe(true);
    }
  });
});
