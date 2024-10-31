// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// like telephone numbers:
// 2 to 9 inclusive:

// 2 ==> ["a", "b", "c"]
// 3 ==> ["d", "e", "f"]
// 4 ==> ["g", "h", "i"]
// 5 ==> ["j", "k", "l"]
// 6 ==> ["m", "n", "o"]
// 7 ==> ["p", "q", "r", "s"]
// 8 ==> ["t", "u", "v"]
// 9 ==> ["w", "x", "y", "z"] ===> inclusive: it is there

// our hashmap:
const telephoneDigitsCharsMap = new Map();
telephoneDigitsCharsMap.set(2, ["a", "b", "c"]);
telephoneDigitsCharsMap.set(3, ["d", "e", "f"]);
telephoneDigitsCharsMap.set(4, ["g", "h", "i"]);
telephoneDigitsCharsMap.set(5, ["j", "k", "l"]);
telephoneDigitsCharsMap.set(6, ["m", "n", "o"]);
telephoneDigitsCharsMap.set(7, ["p", "q", "r", "s"]);
telephoneDigitsCharsMap.set(8, ["t", "u", "v"]);
telephoneDigitsCharsMap.set(9, ["w", "x", "y", "z"]);

// recursive function to walkthrough digits
function walkthroughDigits(digits, index, currentCombination, result) {
  // base case
  if (currentCombination.length === digits.length) {
    result.push(currentCombination);
    console.log(currentCombination);

    return result;
  }

  // get the letters corresponding to the current digit
  const letters = telephoneDigitsCharsMap.get(+digits[index]);
  console.log(letters);

  // loop through each letter and recurse
  for (let letter of letters) {
    walkthroughDigits(digits, index + 1, currentCombination + letter, result);
  }

  return result;
}

// main function
function letterCombinations(digits) {
  const result = [];

  if (digits.length === 0) return result;

  walkthroughDigits(digits, 0, "", result);

  return result;
}

console.log(letterCombinations("23")); // output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations("239"));
// console.log(letterCombinations(""));
