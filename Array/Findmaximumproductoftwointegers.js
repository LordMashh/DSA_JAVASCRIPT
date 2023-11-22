// Find maximum product of two integers in an array 

// function findMaxProduct(arr) {
//     if (arr.length < 2) {
//         // If the array has less than two elements, no valid product can be found
//         console.log("Array should have at least two elements.");
//         return;
//     }

//     let max1 = Number.MIN_SAFE_INTEGER; // Initialize the maximum element to the smallest possible integer
//     let max2 = Number.MIN_SAFE_INTEGER; // Initialize the second maximum element to the smallest possible integer

//     let min1 = Number.MAX_SAFE_INTEGER; // Initialize the minimum element to the largest possible integer
//     let min2 = Number.MAX_SAFE_INTEGER; // Initialize the second minimum element to the largest possible integer

//     for (let num of arr) {
//         // Update the maximum and second maximum elements
//         if (num > max1) {
//             max2 = max1;
//             max1 = num;
//         } else if (num > max2) {
//             max2 = num;
//         }

//         // Update the minimum and second minimum elements
//         if (num < min1) {
//             min2 = min1;
//             min1 = num;
//         } else if (num < min2) {
//             min2 = num;
//         }
//     }

//     // Calculate the maximum product by comparing the product of the two maximums and the product of the two minimums
//     const maxProduct = Math.max(max1 * max2, min1 * min2);

//     return maxProduct;
// }

// // Example usage:
// const array = [1, 3, 5, 2, 9, 8];
// const maxProduct = findMaxProduct(array);

// console.log("Maximum product of two integers:", maxProduct);
function maxProduct(nums) {
    let maxProduct = Number.MIN_SAFE_INTEGER;
  
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const product = nums[i] * nums[j];
        maxProduct = Math.max(maxProduct, product);
      }
    }
  
    return maxProduct;
  }
  
  const nums = [1, 3, 5, 2, 9, 8];
  const max = maxProduct(nums);
  console.log("Maximum product of two integers:",max); // Output: 20