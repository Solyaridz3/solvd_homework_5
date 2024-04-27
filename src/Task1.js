import {DeepSet} from "./utils/DeepSet.js";

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