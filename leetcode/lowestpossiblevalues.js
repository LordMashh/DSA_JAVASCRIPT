/* Given an array A of N positive integers and an integer M, your task is to pick M integers from A into an array B such that the function F given below gives the least possible value:
F(B) Max(B)- Min(B)

Print the lowest possible value of the given function F.

Input format
The first line contains two positive integers N and M.
The second line contains N space-separated integers in the array A.
O<N<= 100
1<M<=N
O<A[i]<= 100

Output format
A single number denoting the lowest value of the given function F

Sample input
8 5 
3 4 3 8 1 15 20 3

Sample Outpt
3 */

function findMinimumF(arr, n, m) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    // Calculate the minimum value of F
    let minF = arr[m - 1] - arr[0];
  
    for (let i = 1; i <= n - m; i++) {
      let currentF = arr[i + m - 1] - arr[i];
      if (currentF < minF) {
        minF = currentF;
      }
    }
  
    return minF;
  }
  
  // Read the input
  const input = [
    "8 5",
    "3 4 3 8 1 15 20 3",
  ];
  
  // Convert the input to the required format
  const n = parseInt(input[0].split(" ")[0]);
  const m = parseInt(input[0].split(" ")[1]);
  const arr = input[1].split(" ").map((num) => parseInt(num));
  
  // Find the minimum value of F
  const minimumF = findMinimumF(arr, n, m);
  console.log(minimumF);
  