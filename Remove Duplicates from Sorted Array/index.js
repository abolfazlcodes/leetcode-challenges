// nums is increasing order - return in-place not a new array
function removeDuplicates(nums) {
  let uniqueCursor = 1;

  for (let i = 0; i < nums.length; i++) {
    // find the unique values
    console.log(nums[i], nums[i - 1]);
    console.log(nums[uniqueCursor], "nums[unique]");
    if (nums[i] !== nums[i + 1]) {
      // move unique values to the front
      nums[uniqueCursor] = nums[i];
      // increase cursor when swapped position
      uniqueCursor++;
    }
  }
  // console.log(nums, uniqueCursor);
  return uniqueCursor;
}

console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
