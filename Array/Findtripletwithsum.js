// Find Triplet with given sum in an array

function findTripletWithSum(arr, targetSum) {
    // Function to find a triplet with a given sum in an array

    const n = arr.length;
    // Get the length of the array

    arr.sort((a, b) => a - b);
    // Sort the array in ascending order

    for (let i = 0; i < n - 2; i++) {
        // Iterate through the array up to the third-to-last element

        let left = i + 1;
        let right = n - 1;
        // Initialize two pointers, 'left' starting from the element after 'i', and 'right' starting from the last element

        while (left < right) {
            // Continue until the 'left' pointer is less than the 'right' pointer

            const currentSum = arr[i] + arr[left] + arr[right];
            // Calculate the sum of the current triplet

            if (currentSum === targetSum) {
                // If the current triplet's sum matches the target sum, return the triplet
                return [arr[i], arr[left], arr[right]];
            } else if (currentSum < targetSum) {
                // If the current sum is less than the target sum, move the 'left' pointer to the right
                left++;
            } else {
                // If the current sum is greater than the target sum, move the 'right' pointer to the left
                right--;
            }
        }
    }

    // Return null if no triplet is found
    return null;
}

// Example usage:
const array = [1, 4, 45, 6, 10, 8];
const sumToFind = 22;

const triplet = findTripletWithSum(array, sumToFind);

if (triplet) {
    console.log(`Triplet with sum ${sumToFind}: `, triplet);
} else {
    console.log(`No triplet with sum ${sumToFind} found.`);
}
