// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

function frequencySort(s) {
  // storing the chars in a hashmap
  const allChars = s.split("");

  // frequency hashmap
  const frequencyCounts = new Map();

  for (let i = 0; i < allChars.length; i++) {
    frequencyCounts.set(
      allChars[i],
      (frequencyCounts.get(allChars[i]) || 0) + 1
    );
  }

  allChars.sort((a, b) => {
    const freqA = frequencyCounts.get(a);
    const freqB = frequencyCounts.get(b);

    if (freqA === freqB) {
      // If frequencies are the same, sort lexicographically in ascending order
      return a > b ? 1 : -1;
    }

    return freqB - freqA;
  });

  // join the chars
  return allChars.join("");
}

function frequencySort(s) {
  let charFreq = new Map();

  for (let i = 0; i < s.length; i++) {
    charFreq.set(s[i], (charFreq.get(s[i]) || 0) + 1);
  }

  let result = Array.from(charFreq.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([char, freq]) => char.repeat(freq));

  return result.join("");
}

console.log(frequencySort("tree"));
