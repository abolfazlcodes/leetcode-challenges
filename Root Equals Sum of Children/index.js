const tree = {
  value: 5,
  right: {
    value: 1,
    right: null,
    left: null,
  },
  left: {
    value: 3,
    right: null,
    left: null,
  },
};

// function checkTree(root: TreeNode | null): boolean {
//   return true
// };

function checkTree(root) {
  const leftValue = root.left.value;
  const rightValue = root.right.value;

  if (leftValue + rightValue === root.value) {
    return true;
  } else {
    return false;
  }
}

console.log(checkTree(tree));
