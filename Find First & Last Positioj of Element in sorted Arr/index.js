// ? BINARY SEARCH
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

function search(val) {}

// if in the arr return the index of first and last ==> [3,5]
function searchRange(nums, target) {
  function search(x) {
    let left = 0; // low
    let right = nums.length; // high

    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2);

      if (nums[mid] >= x) {
        right = mid;
      } else {
        left = mid + 1; // excluding the current mid as we checked it already
      }
    }
    return left;
  }

  const l = search(target); // 8
  const r = search(target + 1); // 9
  return l === r ? [-1, -1] : [l, r - 1];

  // let low = 0;
  // let high = nums.length;
  // do {
  //   let midPoint = Math.floor(low + (high - low) / 2);
  //   const midPointValue = nums[midPoint];
  //   console.log(midPointValue, midPoint);
  //   // 1. if the we got the value
  //   if (midPointValue === target) {
  //     return true;
  //   } else if (midPointValue > target) {
  //     high = midPoint;
  //   } else {
  //     low = midPoint + 1;
  //   }
  // } while (low < high);

  // return false;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
