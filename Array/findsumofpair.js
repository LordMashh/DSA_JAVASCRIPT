// Given an unsorted array of integers, find a pair with the given sum in it in javascript

function findPairWithSum(arr, targetSum) {
    const numMap = {}; // Hash table to store encountered numbers

    for (let i = 0; i < arr.length; i++) {
        const complement = targetSum - arr[i];

        // Check if the complement exists in the hash table
        if (numMap[complement] !== undefined) {
            // If found, return the pair
            return [complement, arr[i]];
        }

        // Otherwise, add the current number to the hash table
        numMap[arr[i]] = i;
        console.log(numMap);
    }

    // If no pair is found, return null
    return null;
}

// Example usage:
const unsortedArray = [1, 4, 6, 8, 3, 9];
const targetSum = 12;

const pair = findPairWithSum(unsortedArray, targetSum);

if (pair) {
    console.log(`Pair with sum ${targetSum}: `, pair);
} else {
    console.log(`No pair with sum ${targetSum} found.`);
}
