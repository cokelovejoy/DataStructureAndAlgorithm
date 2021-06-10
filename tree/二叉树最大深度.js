// 二叉树的最大深度

function maxDepth(root) {
  if (root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
const treeObj = require("../CONSTANT");
console.log(maxDepth(treeObj));
