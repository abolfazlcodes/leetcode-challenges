// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

function numJewelsInStones(jewels, stones) {
  if (!jewels) return 0;

  let jewelsCount = 0;
  let jewelsIndexCounter = 0;
  // my jewels ==> a - A
  // my stones ==> a - A - A - b - b - b - b

  for (let i = 0; i <= stones.length; i++) {
    if (jewelsIndexCounter !== jewels.length - 1 && i === stones.length) {
      // console.log("--------");
      i = 0;
      jewelsIndexCounter++;
    }
    if (stones[i] === jewels[jewelsIndexCounter]) {
      jewelsCount++;
    }
    // console.log(i, stones.length - 1);
    // console.log("---- end ----");
    // console.log(jewelsIndexCounter, jewels.length);
    // console.log(
    //   `jewelsIndexCounter is: ${jewelsIndexCounter}`,
    //   `jewel is: "${jewels[jewelsIndexCounter]}"`,
    //   `index is: ${i}`,
    //   `stone is: "${stones[i]}"`,
    //   `stone length is: "${stones.length}"`,
    //   `===> counter: ${jewelsCount}`
    // );
  }

  return jewelsCount;
}

// console.log(numJewelsInStones("aA", "aAAbbbb"));
// console.log(numJewelsInStones("z", "ZZ"));

// using set
// function numJewelsInStones(jewels, stones) {
//   const set = new Set();
//   let jewelCount = 0;

//   for (const jewel of jewels) {
//     set.add(jewel);
//   }

//   for (const stone of stones) {
//     if (set.has(stone)) {
//       jewelCount += 1;
//     }
//   }

//   return jewelCount;
// }

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
