// Linear Search with implementation in JavaScript with minimum time and space complexity

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage:
const myArray = [10, 5, 8, 2, 7, 1];
const targetElement = 8;

const result = linearSearch(myArray, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}.`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}
