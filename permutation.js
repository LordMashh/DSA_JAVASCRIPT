function generatePermutations(arr) {
    const permutations = [];
    
    function backtrack(current) {
      if (current.length === arr.length) {
        permutations.push([...current]); // Found a permutation
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        if (!current.includes(arr[i])) {
          current.push(arr[i]);
          backtrack(current);
          current.pop();
        }
      }
    }
  
    backtrack([]);
    return permutations;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3];
  const permutations = generatePermutations(inputArray);
  
  console.log("Permutations of", inputArray, "are:", permutations);