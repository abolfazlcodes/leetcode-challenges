const tree = {
  value: 7,
  right: {
    value: 3,
    right: {
      value: 19,
      right: null,
      left: null,
    },
    left: {
      value: 6,
      right: null,
      left: null,
    },
  },
  left: {
    value: 4,
    right: null,
    left: null,
  },
};

const clonedTree = {
  value: 7,
  right: {
    value: 3,
    right: {
      value: 19,
      right: null,
      left: null,
    },
    left: {
      value: 6,
      right: null,
      left: null,
    },
  },
  left: {
    value: 4,
    right: null,
    left: null,
  },
};

function walkThrough(original, cloned, target) {
  if (!original && !cloned) {
    return null;
  }

  if (original === target) {
    return cloned;
  }

  // Recurse on the left subtree
  let leftResult = walkThrough(original.left, cloned.left, target);
  if (leftResult !== null) {
    return leftResult;
  }

  //  Recurse on the right subtree
  return walkThrough(original.right, cloned.right, target);
}

function getTargetCopy(original, cloned, target) {
  return walkThrough(original, cloned, target);
}

console.log(
  getTargetCopy(tree, clonedTree, {
    value: 6,
    right: null,
    left: null,
  })
);

console.log(
  getTargetCopy(tree, clonedTree, {
    value: 3,
    right: {
      value: 19,
      right: null,
      left: null,
    },
    left: {
      value: 6,
      right: null,
      left: null,
    },
  })
);
