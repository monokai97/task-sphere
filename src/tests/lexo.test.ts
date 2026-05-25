import { describe, it, expect } from 'vitest';
import { LexoRank } from 'lexorank';
import { generateInitial, generateBetween, isValidLexoRank } from '../lib/lexo';

describe('LexoRank Utility Core (Hito 3.1.1)', () => {
  describe('generateInitial', () => {
    it('should generate a valid initial rank', () => {
      const rank = generateInitial();
      expect(typeof rank).toBe('string');
      expect(isValidLexoRank(rank)).toBe(true);
    });
  });

  describe('generateBetween', () => {
    it('should generate a rank between two existing ranks', () => {
      const prev = '0|a0';
      const next = '0|a2';
      const rank = generateBetween(prev, next);
      
      const prevRank = LexoRank.parse(prev);
      const nextRank = LexoRank.parse(next);
      const rankObj = LexoRank.parse(rank);

      expect(isValidLexoRank(rank)).toBe(true);
      expect(rankObj.compareTo(prevRank) > 0).toBe(true);
      expect(rankObj.compareTo(nextRank) < 0).toBe(true);
    });

    it('should handle start of list (prev is null)', () => {
      const next = '0|b0';
      const rank = generateBetween(null, next);
      const nextRank = LexoRank.parse(next);
      const rankObj = LexoRank.parse(rank);

      expect(isValidLexoRank(rank)).toBe(true);
      expect(rankObj.compareTo(nextRank) < 0).toBe(true);
    });

    it('should handle end of list (next is null)', () => {
      const prev = '0|y0';
      const rank = generateBetween(prev, null);
      const prevRank = LexoRank.parse(prev);
      const rankObj = LexoRank.parse(rank);

      expect(isValidLexoRank(rank)).toBe(true);
      expect(rankObj.compareTo(prevRank) > 0).toBe(true);
    });

    it('should handle density/exhaustion by generating a new valid rank', () => {
      const prev = '0|a0';
      const next = '0|a1';
      const rank = generateBetween(prev, next);
      const prevRank = LexoRank.parse(prev);
      const nextRank = LexoRank.parse(next);
      const rankObj = LexoRank.parse(rank);
      
      expect(isValidLexoRank(rank)).toBe(true);
      expect(rankObj.compareTo(prevRank) > 0).toBe(true);
      expect(rankObj.compareTo(nextRank) < 0).toBe(true);
    });
  });

  describe('Validation Logic', () => {
    it('should validate correctly formatted ranks', () => {
      expect(isValidLexoRank('0|a0')).toBe(true);
      expect(isValidLexoRank('0|a001')).toBe(true);
    });

    it('should reject invalid ranks', () => {
      expect(isValidLexoRank('invalid-rank')).toBe(false);
      expect(isValidLexoRank('')).toBe(false);
    });
  });
});
