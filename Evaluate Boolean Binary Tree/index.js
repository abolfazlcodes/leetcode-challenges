// leaf nodes ==> their value is either 0 or 1
// 0 ==> false and 1 ==> true

// non-leaf nodes: their value is either 2 or 3
// 2 ==> OR and 3 ==> AND

// The evaluation of a node is as follows:

// If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
// Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.

// A full binary tree is a binary tree where each node has either 0 or 2 children.

// A leaf node is a node that has zero children.

const tree = {
  val: 2, // non-leaf ==> OR --->
  left: {
    val: 1, // leaf ==> true ---> the evaluation: true
    left: null,
    right: null,
  },
  right: {
    val: 3, // non-leaf ==> AND
    left: {
      val: 0, // leaf ==> false ---> the evaluation: true
      left: null,
      right: null,
    },
    right: {
      val: 1, // leaf ==> true ---> the evaluation: true
      left: null,
      right: null,
    },
  },
};

const tree2 = {
  val: 0,
  left: null,
  right: null,
};

function walkThrough(root) {
  if (!root) {
    return false;
  }

  // check if root is a leaf
  if (root.val === 0) {
    return false;
  }

  if (root.val === 1) {
    return true;
  }

  // if none of the cases above existed we have to go through children
  const leftSide = walkThrough(root.left);
  const rightSide = walkThrough(root.right);

  // for non-leaf nodes
  if (root.val === 3) {
    // 3 which is AND evaluates to false
    return leftSide && rightSide;
  }

  if (root.val === 2) {
    // 2 which is OR evaluates to true
    return leftSide || rightSide;
  }
}

function evaluateTree(root) {
  return walkThrough(root);
}

console.log(evaluateTree(tree), "first case");
console.log(evaluateTree(tree2), "second case");
