import {getRandomInt} from "./utils/getRandomInt.js";

/**
 * Shuffles the elements of an array in a custom manner using a unique random integer generator.
 *
 * @param {Array} arr - The array to be shuffled.
 * @return {Array} A new array with shuffled elements.
 */
function customShuffle(arr) {
    const randIntGenerator = getRandomInt(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        const j = randIntGenerator.next().value;
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}

