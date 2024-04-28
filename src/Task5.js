import {makeIterator} from "./utils/makeIterator.js";

/**
 * Measures the performance of a function by calculating its execution time.
 *
 * @param {Function} fun - The function to be executed and measured.
 * @param {...*} args - The arguments to be passed to the function.
 * @return {Object} An object containing the execution result and the execution time.
 */
function measureArrayPerformance(fun, ...args) {
    const startTime = new Date().getTime();
    const result = fun(...args);
    const endTime = new Date().getTime();
    return {executionResult: result, executionTime: endTime - startTime};
}


function customReduce(arr, callback, accumulator) {
    for (const element of arr) {
        accumulator = callback(accumulator, element);
    }
    return accumulator;
}

function customMap(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
}

function customFilter(arr, callback){
    const newArr = [];
    for(const element of arr){
        if(callback(element)){
            newArr.push(element);
        }
    }
    return newArr;
}


const reduceCallback = (accum, value) => accum + value;

const reduceArr = [...makeIterator(1000000)];

console.log('Default reduce:', measureArrayPerformance(Array.prototype.reduce.bind(reduceArr), reduceCallback, 0));

console.log('Custom reduce:', measureArrayPerformance(customReduce, reduceArr, reduceCallback, 0));

const mapArr = [...makeIterator(1500000)];
const mapCallback = (value) => Math.pow(value, 2);

console.log('Default map execution time:', measureArrayPerformance(Array.prototype.map.bind(mapArr), mapCallback).executionTime);

console.log('Custom map execution time:', measureArrayPerformance(customMap, mapArr, mapCallback).executionTime);

const filterCallback = (value) => value % 2 === 0;

const filterArr = [...makeIterator(1000000)];

console.log('Default filer execution time:', measureArrayPerformance(Array.prototype.filter.bind(filterArr), filterCallback).executionTime);

console.log('Custom filter execution time:', measureArrayPerformance(customFilter, filterArr, filterCallback).executionTime);



