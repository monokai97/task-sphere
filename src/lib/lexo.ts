/**
 * LexoRank Utility Core
 * Based on Lexicographical Fractional Indexing (Base-62)
 * Allows O(1) reordering without mass re-indexing.
 */

const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

/**
 * Returns the middle character between two characters in the alphabet.
 */
function getMiddle(a: string, b: string): string {
  const indexA = ALPHABET.indexOf(a);
  const indexB = ALPHABET.indexOf(b);
  const mid = Math.floor((indexA + indexB) / 2);
  return ALPHABET[mid];
}

/**
 * Generates an initial rank for the first item in a list.
 */
export function generateInitial(): string {
  return 'h'; // Middle of the alphabet '0-z'
}

/**
 * Generates a rank between two existing ranks.
 * @param prev The rank of the item before.
 * @param next The rank of the item after.
 */
export function generateBetween(prev: string | null, next: string | null): string {
  if (!prev && !next) return generateInitial();
  
  if (!prev) {
    // Before the first item
    if (!next) return generateInitial();
    const firstChar = next[0];
    const index = ALPHABET.indexOf(firstChar);
    if (index > 0) return ALPHABET[index - 1] + next.slice(1);
    return ALPHABET[0] + next; // Prepend '0'
  }

  if (!next) {
    // After the last item
    const lastChar = prev[prev.length - 1];
    const index = ALPHABET.indexOf(lastChar);
    if (index < ALPHABET.length - 1) return prev.slice(0, -1) + ALPHABET[index + 1];
    return prev + ALPHABET[Math.floor(ALPHABET.length / 2)]; // Append 'h'
  }

  // Between two items
  let i = 0;
  while (true) {
    const charPrev = prev[i] || ALPHABET[0];
    const charNext = next[i] || ALPHABET[ALPHABET.length - 1];

    if (charPrev === charNext) {
      i++;
      continue;
    }

    const indexPrev = ALPHABET.indexOf(charPrev);
    const indexNext = ALPHABET.indexOf(charNext);

    if (indexNext - indexPrev > 1) {
      return prev.slice(0, i) + getMiddle(charPrev, charNext);
    } else {
      // No space between characters, move to the next level
      i++;
    }
  }
}
