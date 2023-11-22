// Interpolation  Search with implementation in JavaScript with minimum time and space complexity

function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        const pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

        if (arr[pos] === target) {
            return pos; // Return the index if the target is found
        } else if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1; // Return -1 if the target is not found
}

// Example usage:
const sortedArray = [1, 2, 5, 7, 8, 10];
const targetElement = 7;

const result = interpolationSearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}.`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}
