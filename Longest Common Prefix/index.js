// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// strs: string[]
// function longestCommonPrefix(strs) {
//   if (!strs.length) return "";

//   // based on the length of the first item in array, we will loop
//   for (let i = 0; i <= strs[0].length; i++) {
//     for (let j = 1; j < strs.length; j++) {
//       // Check if this character is also present in the same position of each string
//       if (strs[0][i] !== strs[j][i]) {
//         // If not, return the string up to and including the previous character
//         return strs[0].slice(0, i);
//       }
//     }
//   }
//   return "";
// }

// second solution is

const longestCommonPrefix = function (strs) {
  // Return early on empty input
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0]; // this makes the code much more faster as it prevents it from going in to a loop

  // Loop through the letters of the first word
  for (let i = 0; i <= strs[0].length; i++) {
    // Check if this character is present in the same position of every string
    if (!strs.every((string) => string[i] === strs[0][i])) {
      // If not, return the string up to and including the previous character
      return strs[0].slice(0, i);
    }
  }

  return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));
