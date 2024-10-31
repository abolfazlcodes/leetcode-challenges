const tree = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1,
        right: null,
      },
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 8,
      left: {
        val: 7,
      },
      right: {
        val: 9,
      },
    },
  },
};

class TreeNode {
  val;
  left;
  right;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// my function
function walkThrough(root, path = []) {
  if (!root) {
    return path;
  }

  walkThrough(root.left, path);
  path.push(root.val);
  walkThrough(root.right, path);

  return path;
}

// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.
function increasingBST(root) {
  const path = walkThrough(root, []);
  if (path.length === 0) {
    return null;
  }

  let newTree = new TreeNode(path[0]);

  let current = newTree; // Pointer to traverse and create the right children

  for (let i = 1; i < path.length; i++) {
    current.right = new TreeNode(path[i]); // Assign each node to the right
    current = current.right; // Move the pointer to the next right child
  }

  return newTree;
}

console.log(increasingBST(tree));
