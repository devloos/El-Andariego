/**
 * {
 *  name: {
 *    en: 'hello'
 *  },
 *  brown: 'bru'
 * }
 */
export function normalizeMatch(match: any, previousKey = ''): any {
  const normalizedMatch = {};
  for (const key in match) {
    const value = match[key];
    const newKey = previousKey ? `${previousKey}.${key}` : key;

    // check if strictly object
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      Object.assign(normalizedMatch, normalizeMatch(value, newKey));
    } else {
      normalizedMatch[newKey] = value;
    }
  }

  return normalizedMatch;
}
