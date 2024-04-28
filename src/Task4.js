/**
 * Returns an array containing the unique elements that are present in both arr1 and arr2.
 *
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 * @throws {Error} Throws an error if either arr1 or arr2 is not an array.
 * @return {Array} An array containing the elements that are present in both arr1 and arr2.
 */
function getArrayIntersection(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('You should provide two arrays as arguments');
    }
    return arr1.filter((value, index) => arr2.includes(value) && arr1.indexOf(value) === index);
}

/**
 * Returns an array that contains all the unique elements from both arr1 and arr2.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @return {Array} The array that contains all the unique elements from both arr1 and arr2.
 * @throws {Error} If either arr1 or arr2 is not an array.
 */
function getArrayUnion(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('You should provide two arrays as arguments');
    }
    const union = [
        ...arr1.filter(value => !arr2.includes(value)),
        ...arr2.filter(value => !arr1.includes(value))
    ]
    return union.filter((value, index) => union.indexOf(value) === index);
}
