// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

// Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:

// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
// Example 3:

// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

function frequencySort(nums) {
  // storing frequency of nums
  const frequencyCounts = {};

  // loop over nums and store frequency
  for (let i = 0; i < nums.length; i++) {
    if (frequencyCounts[nums[i]]) {
      frequencyCounts[nums[i]]++;
    } else {
      frequencyCounts[nums[i]] = 1;
    }
  }

  // sort by frequency
  return nums.sort((a, b) => {
    console.log(a, "a", b, "b");

    const freqA = frequencyCounts[a]; // 3: 1
    const freqB = frequencyCounts[b]; // 2: 3

    // frequencies are the same ==> decreasing order
    if (freqA === freqB) {
      return b - a;
    }

    // sort by frequency in increasing order
    return freqA - freqB;
  });
}

// with hashmap for access and inserting with runtime of => O(1)
function frequencySort(nums) {
  const map = new Map();
  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);

  nums.sort((a, b) => {
    const c = map.get(a) - map.get(b);
    if (c === 0) return b - a;
    else if (c > 0) return 1;
    else return -1;
  });
  return nums;
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
