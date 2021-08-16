// 二叉树的最近公共祖先
// 给定一个二叉树，找到该树中两个指定节点的最近公共祖先。
/**
 * 最近公共祖先的定义为：对于有根树 T 的两个节点 p，最近公共祖先表示为一个节点 x，
 * 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。
 */

// 核心： 回溯算法
// 只有两种可能出现，p，q处于root节点同侧，p，q处于root节点的异侧。
// 通过对二叉树进行后序遍历，当遇到结点p或q时返回。
// 自底向上回溯，当节点p, q在节点root的异侧时，节点root即为最近公共祖先，则向上返回root
// 递归终止条件： 1.越过叶子节点，直接返回null  2.root等于p,q 直接返回root。

function lowestCommonAncestor(root, p, q) {
  if (root == null || root == p || root == q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left == null && right == null) {
    // left 和right同时为空，：说明 root 的左 / 右子树中都不包含 p,q 返回 null
    return null;
  }
  if (left == null) {
    // left为空，right不为空。说明p,q在右子树，返回right。
    return right;
  }
  if (right == null) {
    // right为空，left不为空。说明p，q在左子树，返回left。
    return left;
  }
  // left 和right同时不为空：说明p,q分列在 root的异侧，所以root为最近公共祖先。
  return root;
}
