// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
// 递归方法，将问题缩小为判断一个子树的叶子节点是否等于 <目标和-父节点的值>
function hasPathSum1 (root, targetSum) {
    // 根节点为null
    if (!root) {
        return false;
    }
    // 子节点为叶子节点,判断叶子节点的值是否为目标和
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }
    return hasPathSum1(root.left, targetSum - root.val) || hasPathSum1(root.right, targetSum - root.val);

}