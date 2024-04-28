/**
 * Generates an iterator that yields random integers between 0  and the max value(not including max).
 *
 * @param {number} max - The upper bound for the random integers.
 * @yields {number} A random integer between 0 (inclusive) and the specified maximum (exclusive).
 */
export function* getRandomInt(max) {
    while (true) {
        yield Math.floor(Math.random() * max);
    }
}
