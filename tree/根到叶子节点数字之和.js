// 求根节点到叶子节点的所有数字之和
// 深度优先搜索
function dfs(root, prevSum) {
  if (root == null) {
    return 0;
  }
  const sum = prevSum * 10 + root.val;
  // 当前节点为叶子节点
  if (root.left === null && root.right === null) {
    return sum;
  } else {
    // 非叶子节点
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
}
function sumNumber(root) {
  return dfs(root, 0);
}
const treeObj = {
  val: 1,
  left: {
    val: 1,
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
  right: {
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
};
console.log(sumNumber(treeObj));
