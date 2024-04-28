/**
 * Generates an iterator that yields numbers from 0 up to n, but not including, the given number.
 *
 * @param {number} n - The number up to which the iterator should yield numbers.
 * @yields {number} The next number in the sequence.
 */
export function* makeIterator(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}