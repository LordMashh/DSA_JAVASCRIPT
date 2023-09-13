// Memoization using an object (top-down approach)
const memo = {};

function fibMemoization(n) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  memo[n] = fibMemoization(n - 1) + fibMemoization(n - 2);
  return memo[n];
}

console.log("Fibonacci (Memoization):", fibMemoization(6)); // 8

// Tabulation using an array (bottom-up approach)
function fibTabulation(n) {
  if (n <= 1) {
    return n;
  }
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log("Fibonacci (Tabulation):", fibTabulation(5)); // 5
