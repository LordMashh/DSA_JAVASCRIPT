// Radix Sort with implementation in javascript

function radixSort(arr) {
    const maxDigitCount = mostDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
        // Create 10 buckets (0 to 9)
        const buckets = Array.from({ length: 10 }, () => []);

        // Place each element in the appropriate bucket based on the k-th digit
        for (let i = 0; i < arr.length; i++) {
            const digit = getDigit(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        // Concatenate the buckets to form a new array
        arr = [].concat(...buckets);
    }

    return arr;
}

function getDigit(num, place) {
    // Get the digit at the specified place (0-indexed) from the right
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    // Count the number of digits in a number
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    // Find the maximum number of digits in any number in the array
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray.slice());

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
