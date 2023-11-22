// Insertion Sort with implementation in javascript

function insertionSort(arr) {
    const n = arr.length;

    // Start with the second element (index 1) since the first element is considered sorted
    for (let i = 1; i < n; i++) {
        // Store the current element to be compared
        const currentElement = arr[i];

        // Move elements of arr[0..i-1] that are greater than currentElement to one position ahead of their current position
        let j = i - 1;
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the currentElement at its correct position in sorted part
        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionSort(unsortedArray.slice());

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
