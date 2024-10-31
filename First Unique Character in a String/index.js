// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// we have to check each char

function firstUniqChar(s) {
  const charsMap = new Map();

  // Pass 1: Build a frequency map
  for (let i = 0; i < s.length; i++) {
    if (charsMap.has(s[i])) {
      const value = charsMap.get(s[i]);
      charsMap.set(s[i], { count: value.count + 1, index: value.index });
    } else {
      charsMap.set(s[i], { count: 1, index: i });
    }
  }

  // Pass 2: Find the first character with count === 1
  for (const [_, { count, index }] of charsMap) {
    if (count === 1) {
      return index;
    }
  }

  return -1; // If no unique character is found
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("aabb"));
console.log(firstUniqChar("loveleetcode"));
