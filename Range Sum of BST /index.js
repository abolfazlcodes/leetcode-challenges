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

function walkThrough(curr, path, low, high) {
  if (!curr) {
    return path;
  }

  // recurse
  walkThrough(curr.left, path, low, high);
  walkThrough(curr.right, path, low, high);

  // if curr.value was between low and high add it to path - should be inclusive themeselves
  if (curr.val >= low && curr.val <= high) {
    path.push(curr.val);
  }

  return path;
}

function rangeSumBST(root, low, high) {
  const valuesInRange = walkThrough(root, [], low, high);
  return valuesInRange.reduce((curr, acc) => curr + acc, 0);
}
