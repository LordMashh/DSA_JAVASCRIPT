/* The first line of input contains the positive integers N and K, separated by a space.
The next lines contain N numbers of positive integers, A[], which denotes the room number available to be used.
OUTPUT
k

CONSTRAINTS
2 <=N<=10^5
2<=K<=N
1 <= A[i] <= 10^9

Example Input
1 2 4 8 9

Example Output
3

 */

// function largestMinDist(arr, n, k) {
//     // Sort the array in ascending order
//     arr.sort((a, b) => a - b);
  
//     // Set the low and high values for binary search
//     let low = 1;
//     let high = arr[n - 1] - arr[0];
  
//     // Perform binary search to find the largest minimum distance
//     while (low <= high) {
//       let mid = Math.floor((low + high) / 2);
  
//       if (isFeasible(mid, arr, n, k)) {
//         low = mid + 1;
//       } else {
//         high = mid - 1;
//       }
//     }
  
//     // Return the largest minimum distance
//     return high;
//   }
  
//   function isFeasible(mid, arr, n, k) {
//     // Initialize the position of the last placed room
//     let lastPlacedRoom = arr[0];
  
//     // Initialize the count of rooms placed
//     let roomsPlaced = 1;
  
//     // Check if it is possible to place k rooms with minimum distance mid
//     for (let i = 1; i < n; i++) {
//       if (arr[i] - lastPlacedRoom >= mid) {
//         // Place the next room if its distance from the previously placed room
//         // is greater than or equal to the current mid
//         lastPlacedRoom = arr[i];
//         roomsPlaced++;
  
//         // Check if all rooms are placed successfully
//         if (roomsPlaced === k) {
//           return true;
//         }
//       }
//     }
  
//     // If all rooms cannot be placed with minimum distance mid, return false
//     return false;
//   }
  
//   // Read the input
//   const input = [5, 3, 1, 2, 4, 8, 9];
//   const n = input[0];
//   const k = input[1];
//   const arr = input.slice(2);
  
//   // Find the largest minimum distance
//   const result = largestMinDist(arr, n, k);
//   console.log(result);
  


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
let input = "5 3\n1 2 4 8 9";
let [N, K] = input.split("\n")[0].split(" ").map(Number);
let A = input.split("\n")[1].split(" ").map(Number);

// Example Output
let result = findLargestMinDistance(N, K, A);
console.log(result);