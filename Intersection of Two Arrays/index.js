function binarySearch(nums, value) {
  let low = 0;
  let high = nums.length - 1;

  do {
    const midPoint = Math.floor(low + (high - low) / 2);
    console.log("hi");
    const midPointValue = nums[midPoint];
    // check if value is the mid point itself
    if (midPointValue === value) {
      return true;
    } else if (midPointValue > value) {
      high = midPointValue;
    } else {
      low = midPointValue + 1;
    }
  } while (low < high);
}

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

function intersection(nums1, nums2) {
  const sortedNums2 = sortArray(nums2);
  const myArr = [];

  for (let i = 0; i < nums1.length; i++) {
    if (binarySearch(sortedNums2, nums1[i])) {
      myArr.push(nums1[i]);
    }
  }

  console.log(myArr);
}

// intersection([1, 2, 2, 1], [2, 2]);
