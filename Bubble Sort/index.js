function swapPositions(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function bubbleSort(arr) {
  // 1. we have to loop over the array
  for (let i = 0; i < arr.length; i++) {
    // 2. loop over the array but not the last element
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(j, arr[j], j + 1, arr[j + 1]);
      // 3. we have to check if arr[i] > arr[j]
      if (arr[j] > arr[j + 1]) {
        // swap positions
        // console.log("bigger");
        swapPositions(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([9, 3, 7, 4, 69, 420, 42]));
