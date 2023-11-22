// Move all zeros present in an array to the end

function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is non-zero, swap it with the element at the nonZeroIndex and increment nonZeroIndex
        if (arr[i] !== 0) {
            [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
            nonZeroIndex++;
        }
    }

    return arr;
}

// Example usage:
const array = [0, 2, 0, 3, 4, 0, 5];
const resultArray = moveZerosToEnd(array);
console.log("Array after moving zeros to the end:", resultArray);


function moveZerosToEnd(nums) {
  let nonZeroIndex = 0;

  for (let current = 0; current < nums.length; current++) {
    if (nums[current] !== 0) {
      [nums[nonZeroIndex], nums[current]] = [nums[current], nums[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
}

// Example usage
const nums = [0, 1, 0, 3, 12];
moveZerosToEnd(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
