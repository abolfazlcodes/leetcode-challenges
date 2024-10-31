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
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDuplicates(nums) {
  // check if nums has any
  if (nums.length === 0) return 0;

  let currentIndex = 0;
  const result = [];

  for (let i = 1; i < nums.length; i++) {
    // console.log(i, nums[i]);

    if (nums[i] !== nums[currentIndex]) {
      result.push(nums[i]);
      currentIndex++;
      // update the element inside the array
      nums[currentIndex] = nums[i];
    }
  }
  console.log(result, nums, currentIndex);

  return result.length;
}

function removeDuplicates(nums) {
  let i = nums.length;

  while (i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  console.log(nums);

  return nums.length;
}

// console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
