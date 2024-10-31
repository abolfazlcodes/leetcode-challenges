// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

// Example 1:

// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [0]
// Output: [0]

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

class TreeNode {
  val;
  left;
  right;

  constructor(val) {
    this.val = val;
  }
}

// tree
const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 5,
    left: null,
    right: {
      val: 6,
    },
  },
};

// getting the nodes in pre-order first
function walkThrough(root, path) {
  if (!root) return path;

  path.push(root.val);
  walkThrough(root.left, path);
  walkThrough(root.right, path);

  return path;
}

// making a linked list of nodes
function createLinkedList(path) {
  if (!path) {
    return null;
  }

  let newTree = new TreeNode(path[0]);
  let current = newTree;

  // start from index 1 as we have use 0
  for (let i = 1; i < path.length; i++) {
    current.right = new TreeNode(path[i]);
    current.left = null;
    current = current.right; // updating current to its right
  }

  return newTree;
}

// we should return all the nodes in a tree - every item in the right child of the tree
// ? my solution
function flatten(root) {
  // ! this is wrong as we are creating a new tree and returning
  // const path = walkThrough(root, []);
  // const list = createLinkedList(path);
  // return list;
  // ? we have to rearrange the pointers in place with the same tree given to us
  if (!root) return;

  // Flatten the left and right subtrees
  flatten(root.left);
  flatten(root.right);

  // Save the right subtree
  let rightSubtree = root.right;

  // Move the left subtree to the right
  root.right = root.left;
  root.left = null;

  // Find the last node of the now-right subtree (originally left subtree)
  let current = root;
  while (current.right) {
    current = current.right;
  }

  // Attach the saved right subtree
  current.right = rightSubtree;

  return root;
}

// solution 1: Morris Traversal:
const flatten1 = function (root) {
  let curr = root;
  while (curr) {
    if (curr.left) {
      let runner = curr.left;
      while (runner.right) runner = runner.right;
      (runner.right = curr.right), (curr.right = curr.left), (curr.left = null);
    }
    curr = curr.right;
  }
};

// solution 2: w/ O(1) Space:
const flatten2 = function (root) {
  let head = null,
    curr = root;
  while (head != root) {
    if (curr.right === head) curr.right = null;
    if (curr.left === head) curr.left = null;
    if (curr.right) curr = curr.right;
    else if (curr.left) curr = curr.left;
    else (curr.right = head), (head = curr), (curr = root);
  }
};

// solution 3: recursion
var flatten3 = function (root) {
  let head = null;
  const revPreOrder = (node) => {
    if (node.right) revPreOrder(node.right);
    if (node.left) revPreOrder(node.left);
    (node.left = null), (node.right = head), (head = node);
  };
  if (root) revPreOrder(root);
};

console.log(flatten(tree));
