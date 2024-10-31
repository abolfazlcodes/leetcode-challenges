const tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: null,
    right: null,
  },
};

function walkThrough(root, targetVal) {
  if (!root) {
    return null;
  }

  // return the subtree - if we found them
  if (root.val === targetVal) {
    return root;
  }

  // if targetVal is greater than the root.val so look to the right side
  if (targetVal > root.val) {
    return walkThrough(root.right, targetVal);
  } else {
    // smaller than - left side
    return walkThrough(root.left, targetVal);
  }
}

function searchBTS(root, val) {
  return walkThrough(root, val);
}

console.log(searchBTS(tree, 2));
console.log(searchBTS(tree, 7));
