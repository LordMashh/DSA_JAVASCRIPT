// Sort a binary array in linear time.

// function sortBinaryArray(arr) {
//     let left = 0; // Left pointer initially at the beginning of the array
//     let right = arr.length - 1; // Right pointer initially at the end of the array

//     while (left < right) {
//         // Move left pointer to the right until a 1 is encountered
//         while (arr[left] === 0 && left < right) {
//             left++;
//         }

//         // Move right pointer to the left until a 0 is encountered
//         while (arr[right] === 1 && left < right) {
//             right--;
//         }

//         // Swap elements at left and right pointers
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//     }

//     return arr;
// }

// // Example usage:
// const binaryArray = [1, 0, 1, 0, 1, 0, 1];
// const sortedArray = sortBinaryArray(binaryArray);

// console.log("Binary array after sorting:", sortedArray);



// function sortBinaryArray(arr) {
//     let zerosCount = 0;
//     let arrLength = arr.length;
  
//     for (let i = 0; i < arrLength; i++) {
//       if (arr[i] === 0) {
//         zerosCount++;
//       }
//     }
  
//     for (let i = 0; i < zerosCount; i++) {
//       arr[i] = 0;
//     }
  
//     for (let i = zerosCount; i < arrLength; i++) {
//       arr[i] = 1;
//     }
  
//     return arr;
//   }


  function sortBinaryArray(arr) {
    let pointer = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        [arr[pointer], arr[i]] = [arr[i], arr[pointer]];
        pointer++;
      }
    }
  
    return arr;
  }
    
  
  arr = [1, 1, 0, 0, 1, 0, 1, 0];
  console.log(sortBinaryArray(arr));