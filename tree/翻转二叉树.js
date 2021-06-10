// 翻转二叉树
function invertTree(root) {
  if (root === null) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}

const treeObj = {
  val: 4,
  left: {
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
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};

console.log(invertTree(treeObj));
