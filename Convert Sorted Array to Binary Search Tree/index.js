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

class BinarySearchTree {
  root;

  constructor(node) {
    this.root = node;
  }

  // receives num (sorted ascending order)
  insertFromArr(val) {
    // check if it is 0 as base case - recursive
    if (val.length === 0) {
      return null;
    }

    // the middle of the arr as the arr should be in asc order
    let middle = Math.floor(val.length / 2);

    // so after middle everything is greater or equal - left subtree
    // and before the middle everything is smaller than or equal - right subtree

    // creating the head
    let newNode = new TreeNode(val[middle]);
    let root = newNode;

    root.left = this.insertFromArr(val.slice(0, middle));
    root.right = this.insertFromArr(val.slice(middle + 1));

    return root;
  }
}
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
// test cases
const nums = [-10, -3, 0, 5, 9];
const nums2 = [1, 3];

const BST = new BinarySearchTree();
const BST2 = new BinarySearchTree();

BST.root = BST.insertFromArr(nums);
console.log(BST);
// console.log(BST2);
