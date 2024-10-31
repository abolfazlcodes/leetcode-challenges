// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

const romanObject = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// CM = 900 - CD = 400 - XC = 90 - XL = 40 - IX = 9 - IV = 4

function intToRoman(num) {
  if (num >= 1000) return "M" + intToRoman(num - 1000);
  if (num >= 900) return "CM" + intToRoman(num - 900);
  if (num >= 500) return "D" + intToRoman(num - 500);
  if (num >= 400) return "CD" + intToRoman(num - 400);
  if (num >= 100) return "C" + intToRoman(num - 100);
  if (num >= 90) return "XC" + intToRoman(num - 90);
  if (num >= 50) return "L" + intToRoman(num - 50);
  if (num >= 40) return "XL" + intToRoman(num - 40);
  if (num >= 10) return "X" + intToRoman(num - 10);
  if (num >= 9) return "IX" + intToRoman(num - 9);
  if (num >= 5) return "V" + intToRoman(num - 5);
  if (num >= 4) return "IV" + intToRoman(num - 4);
  if (num >= 1) return "I" + intToRoman(num - 1);
  // end num becomes 0 as we have subtracted
  if (num === 0) return "";
}

console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));
