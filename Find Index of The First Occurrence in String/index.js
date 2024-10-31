function strStr(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 1; j <= needle.length; j++) {
        if (j === needle.length) {
          return i;
        }
        if (haystack[j + i] !== needle[j]) {
          break;
        }
      }
    }
  }

  return -1;
}
