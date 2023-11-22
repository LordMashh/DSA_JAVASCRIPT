// Binary Search with implementation in JavaScript with minimum time and space complexity
// Binary search is an efficient algorithm with a time complexity of O(log n), where n is the number of elements in the array. 
// The space complexity is O(1), as it doesn't require additional data structures. 
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index if the target is found
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // Return -1 if the target is not found
}

// Example usage:
const sortedArray = [1, 2, 5, 7, 8, 10];
const targetElement = 8;

const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}.`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}
