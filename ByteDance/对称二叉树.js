// 给定一个二叉树，检查它是否是镜像对称的。
function isSymmetric(root) {
    return check(root, root);
}
function check(tree1, tree2) {
    if (!tree1 && !tree2) { // 都为空树
        return true;
    }
    if (!tree1 || !tree2) { // 有一个子树为空，为不对称
        return false
    }
    return tree1.val === tree2.val && check(tree1.left, tree2.right) && check(tree1.right, tree2.left)
}

const treeObj = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
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
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  };
  console.log(isSymmetric(treeObj));