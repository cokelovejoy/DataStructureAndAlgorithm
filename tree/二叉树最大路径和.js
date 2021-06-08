// 求二叉树的路径和的最大值
let maxSum = -Infinity;
function maxPathSum(root) {
    maxGain(root);
    return maxSum;
}
function maxGain(node) {
    if (node === null) {
        return 0;
    }
    // 递归计算左右子节点的最大贡献值
    // 只有在最大贡献值大于0时，才会选取对应子节点
    let leftGain = Math.max(0, maxGain(node.left));
    let rightGain = Math.max(0, maxGain(node.right));
    // 节点的最大路径和取决于该节点的值和该节点左右子节点的最大贡献值
    let priceNewpath = node.val + leftGain + rightGain;
    // 将最大路径和保存在全局变量中
    maxSum = Math.max(maxSum, priceNewpath);
    // 返回节点的最大贡献值
    return node.val + Math.max(leftGain, rightGain);
}
const treeObj = {
    val: -3,
    left:null,
    right: null,
  };
  console.log(maxPathSum(treeObj));