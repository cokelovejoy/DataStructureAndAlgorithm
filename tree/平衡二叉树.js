// 判断平衡二叉树
// 一个二叉树每个节点的左右子树的高度差的绝对值不超过1
const treeObj = require('../CONSTANT')

function isBalanced(root) {
  if (root === null) {
    return true;
  } else {
    return (
      Math.abs(height(root.left) - height(root.right)) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    );
  }
}

// 计算节点的高度
function height(root) {
  if (root === null) {
    return 0;
  } else {
    return Math.max(height(root.left), height(root.right)) + 1;
  }
}
console.log(isBalanced(treeObj));