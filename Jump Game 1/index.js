// function canJump(nums) {
//   const lastNumsIndex = nums.length - 1;

//   for (let i = 0; i < nums.length; i++) {

//     const value = nums[i]; // 3
//     console.log(value, "value", i, "i");
//     i += value;
//     if (i === lastNumsIndex) {
//       return true;
//     }
//   }
//   return false;
// }

// SOLUTION
function canJump(nums) {
  let left = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (left === 0) {
      return false;
    }
    left = Math.max(left - 1, nums[i]);
  }
  return true;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // false
console.log(canJump([1])); // true
