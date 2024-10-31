// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Example 1:

// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
// Example 2:

// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

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

let tree = {
  val: 1,
  left: {
    val: 3,
    right: { val: 2 },
  },
};

let tree2 = {
  val: 3,
  left: {
    val: 1,
  },
  right: {
    val: 4,
    left: {
      val: 2,
    },
  },
};

// recursively
function walkThroughInOrder(tree, firstItem, secondItem, prevItem) {
  if (!tree) {
    return;
  }

  // first left-child
  walkThroughInOrder(tree.left);

  // if the prev node is greater than the current node, we found a mistake
  if (prevItem && prevItem.val > tree.val) {
    console.log("mistake");
    if (!firstItem) {
      firstItem = prevItem;
    }

    secondItem = tree;
  }

  // move to the next
  prevItem = tree;

  walkThroughInOrder(tree.right);
}

/**
 Do not return anything, modify root in-place instead.
 */
// function recoverTree(root) {
//   let first;
//   let second;
//   let prev;

//   walkThroughInOrder(root, first, second, prev);

//   if (first && second) {
//     const temp = first.val;
//     first.val = second.val;
//     second.val = temp;
//   }
// }

function recoverTree(root) {
  let first = null;
  let second = null;
  let prev = null;

  // In-order traversal to detect the swapped nodes
  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    // If the previous node is greater than the current node, we found a mistake
    if (prev && prev.val > node.val) {
      if (!first) {
        first = prev;
      }
      second = node;
    }

    // Move to the next node
    prev = node;

    inorder(node.right);
  }

  inorder(root);

  // Swap the values of the first and second nodes
  if (first && second) {
    const temp = first.val;
    first.val = second.val;
    second.val = temp;
  }

  return root;
}
console.log(recoverTree(tree));
// console.log(recoverTree(tree2));
