import {chunkArray} from "./Task2.js";
import {makeIterator} from "./utils/makeIterator.js";

function measureArrayPerformance(fun, arr) {
    const startTime = new Date().getTime();
    const result = fun(arr);
    const endTime = new Date().getTime();
    return {executionResult: result, executionTime: endTime - startTime};
}


const arr = [...makeIterator(1200000)];

console.log(measureArrayPerformance(chunkArray, arr).executionResult);
