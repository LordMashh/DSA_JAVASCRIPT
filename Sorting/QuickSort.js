// Quick Sort with implementation in javascript

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Already sorted if there is one element or less
    }

    // Choose a pivot element (can be any element, but commonly chosen as the last element)
    const pivot = arr[arr.length - 1];

    // Partition the array into elements less than the pivot, equal to the pivot, and greater than the pivot
    const less = [];
    const equal = [];
    const greater = [];

    for (const element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        }
    }

    // Recursively sort the less and greater sub-arrays, and concatenate the results
    return quickSort(less).concat(equal, quickSort(greater));
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray.slice());

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
