/* */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function romanToInteger(roman) {
    const romanNumeralMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        let currentSymbol = romanNumeralMap[roman[i]];
        let nextSymbol = romanNumeralMap[roman[i + 1]];

        if (nextSymbol > currentSymbol) {
            result += (nextSymbol - currentSymbol);
            i++; // skip the next symbol as it's already considered
        } else {
            result += currentSymbol;
        }
    }

    return result;
}

rl.question('Enter a Roman numeral: ', (romanNumeral) => {
    // Validate Roman numeral input (optional)
    if (/^[IVXLCDM]+$/.test(romanNumeral)) {
        // Convert and display the result
        const integerEquivalent = romanToInteger(romanNumeral.toUpperCase());
        console.log(`${romanNumeral} is equivalent to ${integerEquivalent}`);
    } else {
        console.log('Invalid Roman numeral input.');
    }

    rl.close();
});
// let romanToInteger = (roman) => {
//     //sequence of roman letters
//     let arr = ['I','V','X','L','C','D','M'];
   
//     //value of the respective roman letters
//     let values = {
//         I: 1,
//         V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//     };
    
//     let sum = 0;
  
//     //keep track of the previous index
//     let prevIndex = 0;

//     for(let i = roman.length - 1; i >= 0; i--){
//        //if the current letter is having greater index than previous letter then add values
//    if(arr.indexOf(roman[i]) >= prevIndex){
//       sum = sum + values[roman[i]]; 
//    }else{
//        //if the current letter is having lesser index than previous letter then sub values
//       sum = sum - values[roman[i]];
//    }
       
//        //store the index of the previous roman letters
//    prevIndex = arr.indexOf(roman[i]);
//     }

//   return sum;

// }
// console.log(romanToInteger('X')); 

var romanToInt = function(s) {
    const sym = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
      const cur = sym[s[i]];
      const next = sym[s[i + 1]];

      if (cur < next) {
          result += next - cur;
          i++;
      } else {
          result += cur;
      }
  }

  return result;
};