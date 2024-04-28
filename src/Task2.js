import {makeIterator} from "./utils/makeIterator.js";

/**
 * Splits an array into smaller chunks of a specified size.
 *
 * @param {Array} arr - The array to be split.
 * @param {number} [chunkSize=3] - The size of each chunk. Defaults to 3.
 * @return {Array<Array>} An array of smaller arrays, each containing a chunk of the original array.
 */
export function chunkArray(arr, chunkSize = 3) {
    const result = [];
    let index = 0;
    while (index < arr.length) {
        result.push(arr.slice(index, index + chunkSize));
        index += chunkSize;
    }
    return result;
}
// tried with recursion, tried with splice method looks like function below shows the best result
// in terms of memory usage

const initialUsage = process.memoryUsage().heapUsed;
const arr = chunkArray([...makeIterator(1000000)]);
const finalUsage = process.memoryUsage().heapUsed;

console.log(`${((finalUsage - initialUsage) / 1024 / 1024).toFixed(2)} MB`);