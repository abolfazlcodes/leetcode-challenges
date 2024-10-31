// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

class TreeNode {
  val;
  left;
  right;

  constructor(val) {
    this.val = val;
    this.left = this.right = undefined;
  }
}

const tree = {
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
};

const tree2 = {
  val: 5,
  left: {
    val: 1,
  },
  right: {
    val: 4,
    left: {
      val: 3,
    },
    right: {
      val: 6,
    },
  },
};

const tree3 = {
  val: 2,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    right: null,
    left: null,
  },
};

// recursive walkthrough - dfs
function walkthrough(root) {
  if (!root) return true;

  // we do not have 2 or multiple trees to compare to go deep first, so we can check here

  // if root.left.val is greater the the root.val ==> not a valid binary search tree

  if (root.left) {
    if (root.left.val > root.val) {
      return false;
    }
  }

  // if root.right.val is smaller the root.val ==> not a valid binary search
  if (root.right) {
    if (root.right.val < root.val) {
      return false;
    }
  }

  return walkthrough(root.left) && walkthrough(root.right);
}

function helper(root, min, max) {
  if (!root) {
    return true;
  }
  // we already know null !== null ==> false
  // for example: root.val = 2;
  // (false && 2 <=null = false) || (false && 2 >= null ==> true):false
  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false;
  }
  // helper(root.left=1, null, 2) && helper(3, 2, null)
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}

function isValidBST(root) {
  // return walkthrough(root);
  return helper(root, null, null);
}

console.log(isValidBST(tree));
console.log(isValidBST(tree2));
console.log(isValidBST(tree3));
