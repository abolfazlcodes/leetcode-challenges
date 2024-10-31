// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

//  the worst solution getting stuck in the if block hell
function plusOne(digits) {
  // base case ==> if digits length is 1
  if (digits.length === 1) {
    if (digits[0] !== 9) {
      digits[0]++;
    } else {
      digits[0] = 0;
      digits.unshift(1);
    }
  } else {
    if (digits[digits.length - 1] === 9) {
      digits.pop();
      digits[digits.length] = 0;

      if (digits[digits.length - 2] === 9) {
        if (digits[digits.length - 2]) {
          digits[digits.length - 2]++;
        } else {
          digits[digits.length - 2] = 1;
        }

        if (digits[digits.length - 3]) {
          digits[digits.length - 3]++;
        } else {
          digits[digits.length - 3] = 1;
        }
      } else {
        digits[digits.length - 2]++;
      }
    } else {
      digits[digits.length - 1]++;
    }
  }

  return digits;
}

// LET'S GO FOR RECURSIVE
function walkThrough(digits, lastDigitIndex) {
  // console.log(lastDigitIndex, digits[lastDigitIndex]);

  // if all are 9 ==> handling the overflow
  if (lastDigitIndex === -1) {
    digits.unshift(1);
    return digits;
  }

  const digit = digits[lastDigitIndex];
  // BASE CASES:
  // 1. if the digit is not 9 ==> increment and return
  if (digit !== 9) {
    digits[lastDigitIndex]++;
    return digits;
  }
  // 2. if the digit is 9 ==> set it to 0 and recurse with prevDigit
  digits[lastDigitIndex] = 0;

  return walkThrough(digits, lastDigitIndex - 1);
}

function plusOneNew(digits) {
  return walkThrough(digits, digits.length - 1);
}

// console.log(plusOne([7]));
// console.log(plusOne([9]));
// console.log(plusOne([1, 0]));
// console.log(plusOne([1, 9]));

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([1, 9, 9]));
// console.log(plusOne([1, 8, 9]));
// console.log(plusOne([1, 9, 9, 9]));
// console.log(plusOne([9, 9]));

console.log(plusOneNew([7]));
console.log(plusOneNew([9]));
console.log(plusOneNew([1, 0]));
console.log(plusOneNew([1, 9]));
console.log(plusOneNew([1, 2, 3]));
console.log(plusOneNew([4, 3, 2, 1]));
console.log(plusOneNew([1, 8, 9]));
console.log(plusOneNew([1, 9, 9]));
console.log(plusOneNew([1, 9, 9, 9]));
console.log(plusOneNew([9, 9]));
