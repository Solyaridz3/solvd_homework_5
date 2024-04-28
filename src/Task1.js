import {DeepSet} from "./utils/DeepSet.js";

/**
 * Filters an array of data and returns only unique values that satisfy a given callback function.
 *
 * @param {Array} data - The array of data to filter.
 * @param {Function} callback - The callback function that determines whether a value is fits.
 * @return {Array} An array of unique values that satisfy the callback function.
 */
function customFilterUnique(data, callback) {
    const uniqueValues = new DeepSet();
    for (const value of data) {
        if (callback(value)) {
            uniqueValues.add(value);
        }
    }
    return Array.from(uniqueValues);
}

// const callbackExample = (obj) => obj.category.startsWith('cab') && obj.price >= 5 && obj.price <= 15;
//
// const arr = [
//     {
//         name: 'USB cable',
//         category: 'cable',
//         price: 5
//     },
//     {
//         name: 'USB cable',
//         category: 'cable',
//         price: 5
//     },
//     {
//         name: 'USB cable',
//         category: 'cable',
//         price: 5
//     },
//     {
//         name: 'USB cable',
//         category: 'cable',
//         price: 5
//     },
//     {
//         name: 'HDMI cable',
//         category: 'cable',
//         price: 10
//     },
//     {
//         name: 'Microwave',
//         category: 'cooking',
//         price: 100
//     },
//     {
//         name: 'Laptop',
//         category: 'device',
//         price: 1000
//     },
// ]
// const callbackExample2 = (value) => value > 5;
// const arr2 = [5, 10, 20, 5, 10, 20];

// const filteredArr = customFilterUnique(arr, callbackExample);
// console.log(filteredArr)