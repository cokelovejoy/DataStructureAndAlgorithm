// 给定一个二叉树，检查是否是镜像对称
// 就是比较递归遍历左右两棵子树是否为相同的树
function check(p, q) {
  if (!p && !q) {
    // 两个都为空时，为对称，并退出
    return true;
  }
  if (!p || !q) {
    // 两个中有一个为空的时候，为不是对称
    return false;
  }
  // 检查当前节点的值是否相等，相等再继续判断左右子树是否对称
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}
function isSymmetric(root) {
  return check(root, root);
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
