// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

// ? Takeaways:
// What does it want? Count how many numbers in the same arr is smaller than the current number in the loop

// 1. distinguish current number in the loop
// 2. loop over the array
// 3. check if smaller or not

//! BIG O(N^2) - terrible runtime
function smallerNumbersThanCurrent(nums) {
  // Initialize an array to store the results
  const result = [];

  // Loop through each element in nums
  for (let i = 0; i < nums.length; i++) {
    let count = 0; // To keep track of how many numbers are smaller

    // Loop through the array again to compare with each number
    for (let j = 0; j < nums.length; j++) {
      // Ensure we are not comparing the number with itself
      if (i !== j && nums[j] < nums[i]) {
        count++; // Increment count if nums[j] is smaller than nums[i]
      }
    }

    // After finishing inner loop, store the count result for nums[i]
    result.push(count);
  }

  // Return the result array containing counts for each number
  return result;
}

// Test cases
// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // Output: [4, 0, 1, 1, 3]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // Output: [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // Output: [0, 0, 0, 0]

// ! second solution: BIG O(N LOG N):
function smallerNumbersThanCurrent2(nums) {
  // sort the array - copy
  const sorted = [...nums].sort((a, b) => a - b);
  console.log(sorted);

  // create a hashmap
  const counts = {};

  for (let i = 0; i < sorted.length; i++) {
    if (counts[sorted[i]] === undefined) {
      counts[sorted[i]] = i;
    }
  }

  console.log(counts);

  // Construct the result array using the counts map
  return nums.map((num) => counts[num]);
}

console.log(smallerNumbersThanCurrent2([8, 1, 2, 2, 3]));

function smallerNumbersThanCurrent(nums) {
  const count = new Array(101).fill(0);
  const res = new Array(nums.length);

  // Count the occurrences of each number
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  // Calculate the prefix sum array
  for (let i = 1; i <= 100; i++) {
    count[i] += count[i - 1];
  }

  // Fill the result array based on the prefix sum
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      res[i] = 0;
    } else {
      res[i] = count[nums[i] - 1];
    }
  }

  return res;
}
