const tree1 = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};

const tree2 = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
  },
};

// we have to use recursive and depth-first as the shape matters to us and breadth-first does not do it
function isSameTree(tree1, tree2) {
  // base cases
  // 1. if both of the trees are null ==> so it is great we return true as they are the same
  if (tree1 === null && tree2 === null) {
    return true;
  }

  // 2. if either of the trees tree1re null ==> so we should return false as they are not the same - because each node is tree itself
  if (tree1 === null || tree2 === null) {
    return false;
  }

  // 3. we have to check the value of nodes of trees as well - shape matters
  if (tree1?.val !== tree2?.val) {
    return false;
  }

  // recurse part
  return (
    isSameTree(tree1?.left, tree2?.left) &&
    isSameTree(tree1?.right, tree2?.right)
  );
}

console.log(isSameTree(tree1, tree2));
