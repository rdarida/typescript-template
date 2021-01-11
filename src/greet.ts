/**
 * Gets a name and retruns a greeting with it.
 * @param name Name of somebody to greet.
 * @return The greeting.
 */
export function greet(name = 'World'): string {
  return `Hello, ${name.trim()}`;
}
