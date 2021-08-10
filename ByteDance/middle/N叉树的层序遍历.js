// N 叉树的层序遍历
/**
 * 给定一个N叉树，返回其节点值得层序遍历。(即从左到右，逐层遍历)
 * 树的序列化输入是用层序遍历，每组子节点都有null值分隔。
 */
// 广度优先搜索
function levelOrder(root) {
  if (root === null) {
    return [];
  }
  let list = []; // 队列用于存储节点
  let res = []; // 结果数组存储每层的元素列表
  list.push(root);
  while (list.length > 0) {
    let level = []; // 临时变量存储每一层的元素。
    let len = list.length; // 队列中存在的节点个数，需要全部出队列，并将元素保存到当前层的列表中。
    for (let i = 0; i < len; i++) {
      let node = list.shift(); // 出队列
      level.push(node.val);
      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          list.push(node.children[i]);
        }
      }
    }
    res.push(level);
  }
  return res;
}
