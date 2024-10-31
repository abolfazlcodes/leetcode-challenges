/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// class for creating a tree node
class TreeNode {
  val;
  left;
  right;

  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tree = {
  val: 1,
  left: {
    val: 3,
    left: { val: 5, left: null, right: null },
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};

const tree2 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

function walkThrough(root1, root2) {
  // first base case ==> both null
  if (!root1 && !root2) {
    return null;
  }
  // second base case ==> either node is null we should return the other one
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }

  const mergeNode = new TreeNode(root1.val + root2.val);

  mergeNode.left = walkThrough(root1.left, root2.left);
  mergeNode.right = walkThrough(root1.right, root2.right);

  return mergeNode;
}

function mergeTrees(root1, root2) {
  return walkThrough(root1, root2);
}

console.log(mergeTrees(tree, tree2));
