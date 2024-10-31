// 13. Roman to Integer
// Easy
// Topics
// Companies
// Hint
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

const romanObject = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// 1. loop over the string and store each char's count
// 2. check if those six instances exist
function romanToInteger(string) {
  const stringChars = string.trim().split("");

  let accumulator = 0;

  for (let i = 0; i < stringChars.length; i++) {
    if (stringChars[i] === "I" && stringChars[i + 1] === "V") {
      accumulator += 4;
      i++;
    } else if (stringChars[i] === "I" && stringChars[i + 1] === "X") {
      accumulator += 9;
      i++;
    } else if (stringChars[i] === "X" && stringChars[i + 1] === "L") {
      accumulator += 40;
      i++;
    } else if (stringChars[i] === "X" && stringChars[i + 1] === "C") {
      accumulator += 90;
      i++;
    } else if (stringChars[i] === "C" && stringChars[i + 1] === "D") {
      accumulator += 400;
      i++;
    } else if (stringChars[i] === "C" && stringChars[i + 1] === "M") {
      accumulator += 900;
      i++;
    } else {
      // all other characters now
      accumulator += romanObject[stringChars[i]];
    }
  }

  return accumulator;
}

console.log(romanToInteger("III")); // 3 - III = 3.
console.log(romanToInteger("LVIII")); // 58 - L = 50, V= 5, III = 3.
console.log(romanToInteger("MCMXCIV")); // 1994 - M = 1000, CM = 900, XC = 90 and IV = 4.
