// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

// EXAMPLE:
// Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
// Output: "the five boxing wizards jump quickly"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".

function removeDuplicates(s) {
  var exists = new Map();

  var st = "";
  for (var i = 0; i < s.length; i++) {
    if (!exists.has(s[i])) {
      st += s[i];
      exists.set(s[i], 1);
    }
  }
  return st;
}
const alphabetChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function decodeMessage(key, message) {
  // 1. we have to find/create the equivalent of chars in key with alphabet chars
  // Having alphabet chars in an object as keys
  const keyValues = {};
  const uniqueKey = removeDuplicates(key.replaceAll(" ", ""));

  // 1.1 - setting key chars in order to alphabet chars as values
  for (let i = 0; i < uniqueKey.length; i++) {
    keyValues[uniqueKey[i]] = alphabetChars[i];
  }

  let secret = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      secret = secret.concat(" ");
    } else {
      secret += keyValues[message[i]];
    }
  }

  return secret;
}

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);

console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
);
