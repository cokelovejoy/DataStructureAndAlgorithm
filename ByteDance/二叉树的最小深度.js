// 二叉树的最小深度
// 根节点到最近叶子节点的路径上的节点数量
// 对于每一个非叶子节点，我们只需要分别计算其左右子树的最小叶子节点深度。
// 这样就将一个大问题转化为了小问题，可以递归地解决该问题。

function minDepth(root) {
  if (!root) {
    return 0;
  }
  // 左子树，右子树都存在
  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  } else if (root.left) {
    // 左子树存在
    return 1 + minDepth(root.left);
  } else if (root.right) {
    // 右子树存在
    return 1 + minDepth(root.right);
  } else {
    // 左右子树都不存在
    return 1;
  }
}
const treeData = require("../CONSTANT.js");
console.log(minDepth(treeData));

// 使用广度优先遍历
function minDepth2(root) {
  if (!root) {
    return 0;
  }
  const queue = [root]; // 跟节点入队列
  let depth = 1;
  while(queue.length) {
    const levelSize = queue.length;  // 当前层的节点个数
    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();  // 节点出队列
      if (cur.left === null && cur.right === null) { // 当前节点为叶子节点
        return depth; // 返回深度
      }
      if (cur.left) {
        queue.push(cur.left); // 如果有左孩子，让孩子入队列
      }
      if (cur.right) { // 如果有右孩子
        queue.push(cur.right);
      }
    }
    depth++; // 当前层遍历结束，进入下一层
  }
}

console.log(minDepth2(treeData));