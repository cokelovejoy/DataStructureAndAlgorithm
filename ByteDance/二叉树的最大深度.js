// 二叉树的最大深度
// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 方法1：使用递归，分解为左子树的深度和右子树的深度中的最大值
function maxDepth(root) {
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
const treeObj = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D",
      },
      right: {
        val: "E",
      },
    },
    right: {
      val: "C",
      right: {
        val: "F",
      },
    },
  };
console.log(maxDepth(treeObj));

// 方法2 广度优先