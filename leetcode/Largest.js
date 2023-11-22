/* The first line of input contains the positive integers N and K, separated by a space.
The next lines contain N numbers of positive integers, A[], which denotes the room number available to be used.
OUTPUT
Print the largest minimum distance that can be maintained between the rooms.

CONSTRAINTS
2 <=N<=10^5
2<=K<=N
1 <= A[i] <= 10^9

Example Input
1 2 4 8 9

Example Output
3

 */

function findLargestMinDistance(N, K, A) {
    // Sort the array A in ascending order
    A.sort((a, b) => a - b);

    // Initialize the left and right pointers for binary search
    let left = 0;
    let right = A[N - 1] - A[0];

    // Perform binary search to find the largest minimum distance
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Check if it's possible to have a minimum distance of 'mid'
        if (isPossible(mid, N, K, A)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // The result is 'left - 1' since we want the largest minimum distance
    return left - 1;
}

function isPossible(minDistance, N, K, A) {
    let count = 1;
    let lastPosition = A[0];

    // Iterate through the array to check if it's possible
    for (let i = 1; i < N; i++) {
        if (A[i] - lastPosition >= minDistance) {
            count++;
            lastPosition = A[i];
        }
    }

    // Check if the count of intervals is greater than or equal to K
    return count >= K;
}

// Example Input
let input = [1, 2, 4, 8, 9];
let N = input.length;
let K = 3;

// Example Output
let result = findLargestMinDistance(N, K, input);
console.log(result);
