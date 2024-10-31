// using STACK - LIFO ==> Last In, First Out
function isValid(s) {
  const bracketMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let openBracketStack = [];

  for (let i = 0; i < s.length; i++) {
    // console.log(i, s[i]);
    const currentBracket = s[i];
    if (["[", "{", "("].includes(currentBracket)) {
      openBracketStack.push(currentBracket);
      // popping will give us the last item added to the stack
    } else if (openBracketStack.pop() !== bracketMap[currentBracket]) {
      return false;
    }
  }

  // console.log(openBracketStack);
  // if the length of the stack is 0 ==> means it is valid
  // but as 0 returns false ==> !0 ====> true
  return !openBracketStack.length;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
