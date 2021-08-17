// 二叉树的右视图
// 给定二叉树的根节点root, 想象自己站在它的右侧,按照从顶部到底部的顺序,返回从右侧所能看到的节点值.

// 先根节点,再右子树,最后左子树,保证右子树节点先被访问
function rightSideView(root) {
  let res = [];
  function dfs(root, res, depth) {
    if (!root) {
      return;
    }
    // 如果当前节点所在深度和list个数相等，说明在该深度下当前节点是第一个被访问的节点，因此将当前节点加入list中。
    if (depth === res.length) {
      res.push(root.val);
    }
    depth++;
    dfs(root.right, res, depth);
    dfs(root.left, res, depth);
  }
  dfs(root, res, 0);
  return res;
}
