const tree = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};

function walkThrough(root, path) {
  if (!root) {
    return path;
  }

  walkThrough(root.left, path);
  path.push(root.val);
  walkThrough(root.right, path);

  return path;
}

function inorderTraversal(root) {
  return walkThrough(root, []);
}

console.log(inorderTraversal(tree));
