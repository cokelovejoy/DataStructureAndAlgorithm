// 二叉树的锯齿形层序遍历
// 给定一个二叉树，返回其节点值得锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行。）
// 广度优先遍历BFS，使用一个变量isOrderLeft 规定为从左往右，到下一层前，将其取反。
function zigzagLevelOrder(root) {
  if (!root) {
    return [];
  }
  let res = []; // 保存结果
  let queue = [root]; // 队列保存节点
  let isOrderLeft = true; // 从左往右
  while (queue.length != 0) {
    let path = []; // 保存当前层的节点值
    let size = queue.length;
    // 遍历当前层的节点
    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // 获取当前节点
      if (isOrderLeft) {
        path.push(node.val); // 尾插
      } else {
        path.unshift(node.val); // 头插
      }
      // 将左右子节点插入队列
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    res.push(path);
    isOrderLeft = !isOrderLeft;
  }
  return res;
}
