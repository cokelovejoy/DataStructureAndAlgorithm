// 路径总和2
// 给定一个二叉树的根节点root和一个整数目标和targetSum，找出所有从根节点到叶子节点路径总和等于给定目标和的路径。
// 递归法
function pathSum(root, targetSum) {
  if (root == null) {
    return [];
  }
  let res = [];
  let path = [root.val];
  function dfs(cur, count) {
    if (cur.left == null && cur.right == null && count == 0) {
      // 叶子节点且找到了和为target的路径
      res.push([...path]); // 深拷贝，path变量引用的值一直都在改变
      return;
    }
    if (cur.left == null && cur.right == null) {
      // 遇到叶子节点，而没有找到合适的边，直接返回
      return;
    }
    if (cur.left) {
      //左子树不为空
      path.push(cur.left.val);
      count = count - cur.left.val; // 减去当前节点的值
      dfs(cur.left, count); // 递归当前左子树
      count += cur.left.val; // 回溯
      path.pop();
    }
    if (cur.right) {
      // 右子树不为空
      path.push(cur.right.val);
      count = count - cur.right.val;
      dfs(cur.right, count); // 递归
      count += cur.right.val; // 回溯
      path.pop();
    }
    return;
  }
  dfs(root, targetSum - root.val);
  return res;
}
const treeNode = require("../../CONSTANT");
console.log(pathSum(treeNode, 7));
