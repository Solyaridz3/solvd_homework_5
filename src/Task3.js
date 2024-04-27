/**
 * Returns a function that generates a random integer within the given range, ensuring that each generated integer is unique.
 *
 * @param {number} max - The upper bound of the range from which to generate random integers.
 * @return {function} A function that generates a random integer within the given range.
 */
function getUniqueRandomInt(max) {
    const used = [];
    return function getRandomInt() {
        if (used.length < max) {
            let value;
            do {
                value = Math.floor(Math.random() * max);
            } while (used.indexOf(value) !== -1);
            used.push(value);
            return value;
        }
    }
}
/**
 * Shuffles the elements of an array in a custom manner using a unique random integer generator.
 *
 * @param {Array} arr - The array to be shuffled.
 * @return {Array} A new array with shuffled elements.
 */
function customShuffle(arr) {
    if (arr.length === 0) return [];
    const newArray = [];
    const createUniqueInt = getUniqueRandomInt(arr.length);
    let randomIndex = createUniqueInt();
    while (randomIndex !== undefined) {
        newArray.push(arr[randomIndex]);
        randomIndex = createUniqueInt();
    }
    return newArray;
}



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(customShuffle(arr));
