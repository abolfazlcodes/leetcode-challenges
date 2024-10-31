// function merge(nums1, m, nums2, n) {
//   const truthyValuesOfNums1 = nums1.filter((num) => num > 0);
//   const truthyValuesOfNums2 = nums2.filter((num) => num > 0);

//   nums1 = [...truthyValuesOfNums1, ...truthyValuesOfNums2].sort(
//     (a, b) => a - b
//   );

//   console.log(nums1);
// }

function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[k] = nums2[j];
      k--;
      j--;
    } else {
      nums1[k] = nums1[i];
      k--;
      i--;
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }

  while (i >= 0) {
    nums1[k] = nums1[i];
    k--;
    i--;
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1);
