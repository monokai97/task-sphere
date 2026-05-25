import { describe, it, expect } from 'vitest';
import { getTaskDiff } from '../lib/audit';

describe('Audit Utility: Diff Logic (Hito 2.2.2)', () => {
  const previousDoc = {
    id: 'task-1',
    title: 'Original Title',
    description: 'Original Description',
    completed: false,
    position: 'a0',
    updatedAt: '2026-05-24T10:00:00Z',
  };

  it('should capture a single field change (title)', () => {
    const doc = { ...previousDoc, title: 'New Title' };
    const diff = getTaskDiff(previousDoc, doc);
    
    expect(diff).toEqual({ title: 'New Title' });
  });

  it('should capture multiple field changes', () => {
    const doc = { 
      ...previousDoc, 
      title: 'New Title', 
      completed: true 
    };
    const diff = getTaskDiff(previousDoc, doc);
    
    expect(diff).toEqual({ title: 'New Title', completed: true });
  });

  it('should handle transition from null description to value', () => {
    const prev = { ...previousDoc, description: null };
    const doc = { ...previousDoc, description: 'New Description' };
    
    const diff = getTaskDiff(prev, doc);
    expect(diff).toEqual({ description: 'New Description' });
  });

  it('should return an empty object if no auditable fields changed', () => {
    const doc = { ...previousDoc, updatedAt: '2026-05-24T11:00:00Z' }; // Timestamp cambió
    const diff = getTaskDiff(previousDoc, doc);
    
    expect(diff).toEqual({});
  });

  it('should explicitly exclude internal system fields', () => {
    // Intentamos cambiar metadatos internos
    const doc = { 
      ...previousDoc, 
      updatedAt: '2026-05-24T11:00:00Z',
      id: 'task-new-id' // ID no debe ser auditable
    };
    const diff = getTaskDiff(previousDoc, doc);
    
    expect(diff).not.toHaveProperty('updatedAt');
    expect(diff).not.toHaveProperty('id');
  });
});
