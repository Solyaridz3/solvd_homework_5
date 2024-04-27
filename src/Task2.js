import {makeIterator} from "./utils/makeIterator.js";

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
const arr = [...makeIterator(1000000)];
const finalUsage = process.memoryUsage().heapUsed;

console.log(`${((finalUsage - initialUsage) / 1024 / 1024).toFixed(2)} MB`);