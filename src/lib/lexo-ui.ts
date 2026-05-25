import { generateInitial, generateBetween } from './lexo';

/**
 * Interfaz para definir el contexto del reordenamiento de tareas.
 */
interface DragTarget {
  prevRank: string | null;
  nextRank: string | null;
}

/**
 * Calcula la nueva posición LexoRank para una tarea tras un evento de reordenamiento.
 * 
 * @param target - Referencias de posición de los elementos adyacentes al destino.
 * @returns Un nuevo string LexoRank.
 */
export function calculateNewPosition(target: DragTarget): string {
  // Caso: mover a una lista vacía o inicio absoluto
  if (!target.prevRank && !target.nextRank) {
    return generateInitial();
  }

  // Usamos el wrapper de LexoRank centralizado
  return generateBetween(target.prevRank, target.nextRank);
}
