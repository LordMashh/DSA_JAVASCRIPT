// Selection Sort with implementation in javascript

function selectionSort(arr) {
    const n = arr.length;

    // Perform n-1 passes
    for (let i = 0; i < n - 1; i++) {
        // Assume the current index is the minimum
        let minIndex = i;

        // Find the index of the minimum element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = selectionSort(unsortedArray.slice());

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
