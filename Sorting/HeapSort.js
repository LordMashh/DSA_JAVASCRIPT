// Heap Sort with implementation in javascript

function heapSort(arr) {
    // Build a max heap
    buildMaxHeap(arr);

    // Extract elements from the heap one by one
    for (let i = arr.length - 1; i > 0; i--) {
        // Swap the root (maximum element) with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Reduce the heap size and maintain the max heap property
        heapifyDown(arr, 0, i);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;

    // Start from the last non-leaf node and heapify down to the root
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, i, n);
    }
}

function heapifyDown(arr, index, heapSize) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largestIndex = index;

    // Compare with left child
    if (leftChildIndex < heapSize && arr[leftChildIndex] > arr[largestIndex]) {
        largestIndex = leftChildIndex;
    }

    // Compare with right child
    if (rightChildIndex < heapSize && arr[rightChildIndex] > arr[largestIndex]) {
        largestIndex = rightChildIndex;
    }

    // If the largest element is not the current element, swap them and heapify down
    if (largestIndex !== index) {
        [arr[index], arr[largestIndex]] = [arr[largestIndex], arr[index]];
        heapifyDown(arr, largestIndex, heapSize);
    }
}

// Example usage:
const unsortedArray = [65, 34, 25, 12, 22, 11, 90];
const sortedArray = heapSort(unsortedArray.slice());

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
