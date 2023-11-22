// Merge two sorted arrays. 

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];

    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    while (i < arr1.length && j < arr2.length) {
        // Compare elements at the current pointers
        if (arr1[i] < arr2[j]) {
            // If the element in arr1 is smaller, push it to the mergedArray and move the pointer in arr1
            mergedArray.push(arr1[i]);
            i++;
        } else {
            // If the element in arr2 is smaller or equal, push it to the mergedArray and move the pointer in arr2
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, push them to the mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, push them to the mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];

const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);

console.log("Merged sorted array:", mergedArray);
