// 求根节点到叶子节点数字之和
// 给定一个二叉树的根节点root，树中的每个节点都存放有一个0-9之间的数字。
// 一个二叉树的和等于左子树和右子树的节点数字之和，此问题分解为多个子问题，使用递归解答。
function sumNumbers(root) {
  function dfs(root, res) {
    if (!root) {
      return 0;
    }
    let sum = res * 10 + root.val;
    if (!root.left && !root.right) {
      // 叶子节点
      return sum;
    }
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
  return dfs(root, 0);
}
const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
console.log(sumNumbers(root));
