function removeElement(nums, val) {
  const removedValNums = nums?.filter((num) => num !== val);
  console.log(removedValNums, "removeElement with filter");
  return removedValNums.length;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// ? SOLUTION WITH LOOP
// this function should remove occurrances of the num provided while maintaining a counter which tells us where in the original array we should place the next value
// example arr= [1, 2, 3] ==> remove occurrence of 2

// j = 0 ==> 1 so it is not 2 not removed
// j = 1 ==> 2 so, it is removed => we do not increment the counter and move to the next number
// now we are looking at 3 => not removed ==> counter is still 1 (2's position) so we move 3 to that position.

// now the array is [1, 3, 3] and j =2
// so from j = 2 we will chop the array

function removeElementLoop(nums, val) {
  // position counter
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    // console.log(i, j);
    // check if nums[i] is equal to val
    if (nums[i] !== val) {
      // console.log("is equal to", val);
      nums[j++] = nums[i];
    }
  }
  console.log(nums, "nums arr");
  return j;
}

console.log(removeElementLoop([3, 2, 2, 3], 3));
console.log(removeElementLoop([0, 1, 2, 2, 3, 0, 4, 2], 2));
