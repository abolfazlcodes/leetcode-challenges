// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

// Example 1:
// Input: s = "hello"

// Output: 13

// Explanation:

// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// the ASCII is char.charCodeAt()

function scoreOfString(s) {
  if (!s.length) return 0;

  let sum = 0;

  const charCodes = s.split("").map((char) => char.charCodeAt());
  // console.log(charCodes);
  // length - 1 as we do not want to get undefined at the end when not existed
  for (let i = 0; i < charCodes.length - 1; i++) {
    let subtract = Math.abs(charCodes[i] - charCodes[i + 1]);
    // console.log(
    //   charCodes[i],
    //   i,
    //   charCodes[i + 1],
    //   i + 1,
    //   "===>",
    //   subtract,
    //   sum
    // );

    sum += subtract;
  }

  return sum;
}

console.log(scoreOfString("hello"));

// ? less runtime
// function scoreOfString(s) {

//   let score = 0;

//   for ( var i = 0; i < s.length - 1; i++) {

//       score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1));
//   }
//   return score;
// };
