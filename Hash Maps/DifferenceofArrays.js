// Find the Difference of Arrays using hash maps in javascript\

function arrayDifferenceUsingHashMap(array1, array2) {
    // Create hash maps to store the frequency of elements in both arrays
    const map1 = createHashMap(array1);
    const map2 = createHashMap(array2);

    // Use filter to find elements that are in array1 but not in array2
    const differenceArray1 = array1.filter(element => map2[element] === undefined);

    // Use filter to find elements that are in array2 but not in array1
    const differenceArray2 = array2.filter(element => map1[element] === undefined);

    // Combine the two difference arrays
    const difference = differenceArray1.concat(differenceArray2);

    return difference;
}

// Helper function to create a hash map from an array
function createHashMap(array) {
    const map = {};
    for (const element of array) {
        map[element] = true;
    }
    return map;
}

// Example usage:
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];

const result = arrayDifferenceUsingHashMap(arrayA, arrayB);

console.log("Array difference using hash maps:", result);
