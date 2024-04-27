function getArrayIntersection(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('You should provide two arrays as arguments');
    }
    return arr1.filter((value, index) => arr2.includes(value) && arr1.indexOf(value) === index);
}


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
