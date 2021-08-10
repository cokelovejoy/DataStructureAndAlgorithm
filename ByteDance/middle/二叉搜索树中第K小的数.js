// 二叉搜索树中第K小的元素
/**
 * 给定一个二叉搜索树的根节点root，和一个整数k，请设计一个算法查找其中第k个最小元素（从1开始计数）。
 */
// 由于是一个二叉搜索树，左子树的节点的数据小于根节点的数据，右子树的节点的数据大于根节点的数据，
// 按照二叉树的中序遍历，就可以得到一个从小到大的排序的数组。
function kthSmallest(root, k) {
  function dfs(root, res) {
    if (root === null) {
      return;
    }
    dfs(root.left, res);
    res.push(root.val);
    dfs(root.right, res);
  }
  let res = [];
  dfs(root, res);
  return res[k - 1];
}
const treeNode = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: null,
  },
};
console.log(kthSmallest(treeNode, 3));
